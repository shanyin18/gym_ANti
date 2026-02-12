"""
Async Batch Processor Utility
用于将高并发请求聚合为批量处理，减少对下游 API 的调用次数
"""
import asyncio
from typing import Callable, TypeVar, Generic, List, Tuple, Any
from dataclasses import dataclass

T = TypeVar("T")  # Input type
R = TypeVar("R")  # Result type


@dataclass
class BatchRequest(Generic[T]):
    """单个请求的封装"""
    data: T
    future: asyncio.Future


class AsyncBatchProcessor(Generic[T, R]):
    """
    异步批处理器
    
    工作原理：
    1. 接收单个请求，放入队列
    2. 等待 linger_ms 或达到 max_batch_size
    3. 批量调用 process_fn 处理请求
    4. 将结果分发给各个等待方
    
    Example:
        processor = AsyncBatchProcessor(batch_embed_fn, max_batch_size=20, linger_ms=50)
        result = await processor.process("some text")  # 自动和其他请求合并
    """
    
    def __init__(
        self,
        process_fn: Callable[[List[T]], List[R]],
        max_batch_size: int = 16,
        linger_ms: int = 50,
    ):
        """
        :param process_fn: 批量处理函数，接收 List[T]，返回 List[R]
        :param max_batch_size: 最大批量大小
        :param linger_ms: 等待聚合的最大时间 (毫秒)
        """
        self.process_fn = process_fn
        self.max_batch_size = max_batch_size
        self.linger_ms = linger_ms
        
        self._queue: asyncio.Queue[BatchRequest[T]] = asyncio.Queue()
        self._worker_task: asyncio.Task | None = None
        self._lock = asyncio.Lock()
    
    async def _ensure_worker(self):
        """确保 worker 任务在运行"""
        async with self._lock:
            if self._worker_task is None or self._worker_task.done():
                self._worker_task = asyncio.create_task(self._worker_loop())
    
    async def _worker_loop(self):
        """后台 worker，负责收集请求并批量处理"""
        while True:
            batch: List[BatchRequest[T]] = []
            
            # 1. 等待第一个请求 (无限等待)
            try:
                first_req = await asyncio.wait_for(self._queue.get(), timeout=5.0)
                batch.append(first_req)
            except asyncio.TimeoutError:
                # 5秒没有新请求，退出 worker (节省资源)
                return
            
            # 2. 在 linger_ms 内收集更多请求
            deadline = asyncio.get_event_loop().time() + self.linger_ms / 1000.0
            while len(batch) < self.max_batch_size:
                remaining = deadline - asyncio.get_event_loop().time()
                if remaining <= 0:
                    break
                try:
                    req = await asyncio.wait_for(self._queue.get(), timeout=remaining)
                    batch.append(req)
                except asyncio.TimeoutError:
                    break
            
            # 3. 批量处理
            inputs = [r.data for r in batch]
            try:
                # 调用批量处理函数 (可能是同步的，用 run_in_executor 包装)
                if asyncio.iscoroutinefunction(self.process_fn):
                    results = await self.process_fn(inputs)
                else:
                    loop = asyncio.get_event_loop()
                    results = await loop.run_in_executor(None, self.process_fn, inputs)
                
                # 4. 分发结果
                for i, req in enumerate(batch):
                    if i < len(results):
                        req.future.set_result(results[i])
                    else:
                        req.future.set_exception(IndexError("Batch result mismatch"))
            except Exception as e:
                # 出错时，所有请求都收到异常
                for req in batch:
                    if not req.future.done():
                        req.future.set_exception(e)
    
    async def process(self, data: T) -> R:
        """
        提交单个数据进行处理
        
        :param data: 单个输入数据
        :return: 处理结果
        """
        await self._ensure_worker()
        
        loop = asyncio.get_event_loop()
        future = loop.create_future()
        await self._queue.put(BatchRequest(data=data, future=future))
        
        return await future
    
    async def process_many(self, data_list: List[T]) -> List[R]:
        """
        提交多个数据进行处理 (每个数据可能被分配到不同批次)
        
        :param data_list: 输入数据列表
        :return: 结果列表 (顺序与输入对应)
        """
        tasks = [self.process(d) for d in data_list]
        return await asyncio.gather(*tasks)


# ============ Synchronous Batch Processor (for ingestion) ============

def batch_items(items: List[T], batch_size: int) -> List[List[T]]:
    """将列表分割成固定大小的批次"""
    return [items[i:i + batch_size] for i in range(0, len(items), batch_size)]
