# FastAPI + Redis 缓存实现方案

此文档记录了为 Gym_ANti 项目的 RAG 系统添加 Redis 缓存的完整过程，包括设计思路、代码实现逻辑以及优化前后的对比。

## 1. 目标与背景

在 RAG（检索增强生成）系统中，有两个环节既耗时又耗费成本：

1. **Embedding（向量化）**: 将用户输入或文件内容转换为向量。需要调用付费 API，且计算量大。
2. **LLM Generation（大模型生成）**: 生成最终回复。延迟高（通常 1-3秒），且按 Token 计费。

**解决方案**: 引入 Redis 作为缓存层，拦截重复请求，“空间换时间”。

---

## 2. 架构设计

我们没有使用 FastAPI 的中间件缓存（如 `fastapi-cache`），而是采用了**业务层缓存**。

* **理由**: RAG 的缓存逻辑比较复杂，需要基于“语义”或“精确参数”生成 Key，而不是简单的 URL 路径。
* **位置**:
  * **Level 1**: `VectorStoreService` (控制 Embedding)
  * **Level 2**: `RagService` (控制 LLM 回复)

---

## 3. 核心代码实现

### 3.1 基础设施 (`cache_manager.py`)

首先，封装一个单例的 `CacheManager`，负责 Redis 连接、序列化和 Key 生成。

```python
# cache_manager.py (新增)
class CacheManager:
    def get(self, key):
        """获取缓存"""
        return self.redis.get(key)

    def set(self, key, value, ttl):
        """写入缓存 (带过期时间)"""
        self.redis.setex(key, ttl, value)

    def generate_key(self, prefix, *args):
        """生成唯一 Key: prefix + MD5(参数)"""
        content = "".join(str(arg) for arg in args)
        hash_str = hashlib.md5(content.encode()).hexdigest()
        return f"{prefix}:{hash_str}"
```

### 3.2 Embedding 缓存 (`vector_store.py`)

**逻辑**: 在调用豆包 Embedding API 之前，先检查 Redis。

| 对比项             | **Before (原有逻辑)**                                                                                                        | **After (优化后)**                                                                                                                                                                                                                                                                                                                                             |
| :----------------- | :--------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **处理流程** | 1. 接收文本列表`<br>`2. **全部**调用 API`<br>`3. 返回结果                                                                | 1. 接收文本列表`<br>`2. **检查 Redis**`<br>`3. 仅对**未命中**文本调用 API`<br>`4. 合并结果并**回写 Redis**                                                                                                                                                                                                                                   |
| **代码摘要** | ``python<br>def _call_api(self, texts):<br>    # 直接调 API<br>    res = client.post(url, json=texts)<br>    return res.data<br>`` | ``python<br>def _call_api(self, texts):<br>    # 1. 查缓存<br>    cached = [cache.get(key) for t in texts]<br>    todo = [t for t in texts if not cached]<br><br>    # 2.只调必要的 API<br>    if todo:<br>        new_vecs = client.post(url, json=todo)<br>        cache.set(new_vecs) # 回写<br><br>    # 3. 合并返回<br>    return merge(cached, new_vecs)<br>`` |
| **性能提升** | 无                                                                                                                                 | **100倍+** (对重复文本)                                                                                                                                                                                                                                                                                                                                        |

### 3.3 LLM 响应缓存 (`rag_service.py`)

**逻辑**: 在 RAG 链执行前，检查是否已经回答过完全相同的问题（包含历史记录上下文）。

| 对比项             | **Before (原有逻辑)**                                                                                                                                                                               | **After (优化后)**                                                                                                                                                                                                                                                                                                                                                                                                       |
| :----------------- | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **处理流程** | 1. 构造 Prompt`<br>`2. 调用 LLM`<br>`3. 流式输出                                                                                                                                                      | 1. 构造 Input 字典`<br>`2. **生成 Key** (Hash of Input)`<br>`3. **查 Redis** -> 命中则直接返回`<br>`4. 未命中 -> 调用 LLM -> **存 Redis**                                                                                                                                                                                                                                                              |
| **代码摘要** | ``python<br>async def process_stream(self, msg, ...):<br>    # 构造输入<br>    input_dict = { ... }<br><br>    # 调用链<br>    async for chunk in chain.astream(input_dict):<br>        yield chunk<br>`` | ``python<br>async def process_stream(self, msg, ...):<br>    input_dict = { ... }<br><br>    # 1. 查缓存<br>    key = cache.key("llm", input_dict)<br>    if val := cache.get(key):<br>        yield val; return<br><br>    # 2. 穿透执行 + 缓存<br>    full_res = ""<br>    async for chunk in chain.astream(input_dict):<br>        full_res += chunk<br>        yield chunk<br>    cache.set(key, full_res, ttl=3600)<br>`` |
| **性能提升** | 无                                                                                                                                                                                                        | **秒回** (对重复请求)                                                                                                                                                                                                                                                                                                                                                                                                    |



### 1. Embedding 缓存 (Granularity: 文本块级)

* **相同文件/提问** -> **直接用 Cache** ✅。
* **内容稍微改了一点** ->  **混合处理** 。
  * 我们的系统会先把大文件 **切分成很多小块** （Chunking，比如每 500 字一块）。
  * **没改动的部分** ：切分出来的文本块和之前一样， **直接用 Cache** （命中）。
  * **改动的部分** ：切分出来的文本块变了， **重新计算 Embedding** （未命中）。
  * **结果** ：假如你改了一个 100 页 PDF 里的一个错别字，大概率只有 **1 个 Chunk** 需要重新计算，剩下的几百个 Chunk 全都走缓存。**极度省钱。**

### 2. LLM 回答缓存 (Granularity: 整体级)

* **相同问题** -> **直接用 Cache** ✅。
* **问题/上下文改了一点** ->  **完全失效，重新生成** 。
  * 因为 LLM 的输出是基于 Input 生成的，Input 变了一个标点，理论上 Output 就可能完全不同。
  * 比如：“怎么减肥？” vs “怎么减肥！” -> Cache Key 不同 ->  **重新生成** 。

### 总结

* **Embedding 缓存** ：是**积木式**的。改了哪里修哪里，没改的地方复用。这是 Redis 在 RAG 里最大的价值。
* **LLM 缓存** ：是 **一锤子买卖** 。必须完全一样才给过，稍微不一样就得重来

---

## 4. 效果验证

根据 `server-python/test_redis_cache.py` 的运行结果：

1. **Redis 连接**: 正常。
2. **Embedding**:
   * 首次运行 (API): `0.81s`
   * 二次运行 (Redis): `0.002s`
   * **结论**: 缓存生效，极速。
3. **LLM 响应**:
   * 首次运行 (生成): `1.5s`
   * 二次运行 (Redis): `0.01s`
   * **结论**: 缓存生效，秒回。

## 5. 总结

通过引入 Redis，我们在不改变原有业务逻辑结构的前提下，以非侵入式的方式显著提升了 RAG 系统的性能。

- **TTL 策略**:
  - Embedding 设为 **7天** (内容稳定，适合长效缓存)。
  - LLM 响应设为 **1小时** (防止上下文变化导致回复过期，仅用于短时防抖)。
