import random
from pymilvus import (
    connections,
    FieldSchema, CollectionSchema, DataType,
    Collection,
    utility
)

# ==========================================
# 1. 连接数据库
# ==========================================
print("正在连接 Milvus...")
# host="localhost" 意思就是连你自己电脑上的服务
# port="19530" 是 Milvus 的默认大门（端口）
connections.connect("default", host="localhost", port="19530")
print("✅ 连接成功！")

# ==========================================
# 2. 创建一个“集合” (Collection)
# 通俗解释：这就相当于在 Excel 里新建一个“Sheet”或者 SQL 里的“Table”
# ==========================================
collection_name = "hello_milvus"

# 如果这个表已经存在，先删除它（为了方便我们可以反复运行这段代码测试）
if utility.has_collection(collection_name):
    utility.drop_collection(collection_name)

# 定义表的结构：我们需要存3列数据
# 1. book_id: 书的ID (主键，就像学号，不能重复)
# 2. word_count: 字数 (普通的数字)
# 3. book_intro: 书的简介向量 (这就我们要存的核心数据！维度设为8，假装它是8个特征)
fields = [
    FieldSchema(name="book_id", dtype=DataType.INT64, is_primary=True, auto_id=False),
    FieldSchema(name="word_count", dtype=DataType.INT64),
    FieldSchema(name="book_intro", dtype=DataType.FLOAT_VECTOR, dim=8)
]
schema = CollectionSchema(fields, "这是一个存放书籍向量的简单演示")
hello_milvus = Collection(collection_name, schema)

print(f"✅ 集合 {collection_name} 创建成功！")

# ==========================================
# 3. 准备并插入数据
# ==========================================
# 我们生成 2000 条随机数据
# 第一列：ID 从 0 到 1999
ids = [i for i in range(2000)]
# 第二列：字数随机 1万 到 10万
word_counts = [random.randint(10000, 100000) for _ in range(2000)]
# 第三列：向量，每本书生成 8 个随机小数
vectors = [[random.random() for _ in range(8)] for _ in range(2000)]

# 把这三列数据“插”进去
data = [ids, word_counts, vectors]
insert_result = hello_milvus.insert(data)
print(f"✅ 成功插入了 {insert_result.insert_count} 条数据")

# ==========================================
# 4. 创建索引 (Index)
# 通俗解释：数据太多了，不建索引库查起来很慢。
# IVF_FLAT 是一种常见的索引算法，相当于把数据分类归档，找的时候更快。
# ==========================================
index_params = {
    "index_type": "IVF_FLAT",
    "metric_type": "L2",       # L2 意思是计算欧式距离（越小越相似）
    "params": {"nlist": 128},
}
hello_milvus.create_index("book_intro", index_params)
print("✅ 索引创建成功！")

# ==========================================
# 5. 加载到内存并搜索
# ==========================================
# 必须先 load 才能查（类似于把书从仓库搬到书架上）
hello_milvus.load()

# 假设用户要把一本新书拿来对比，这是新书的向量：
search_vectors = [[random.random() for _ in range(8)]]

# 搜索配置：nprobe 意思是在多少个分类里找，数字越大越准但越慢
search_params = {"metric_type": "L2", "params": {"nprobe": 10}}

print("\n🔍 正在搜索最相似的 3 本书...")
# search 也就是最核心的功能：以图搜图、以文搜文全靠它
results = hello_milvus.search(
    data=search_vectors, 
    anns_field="book_intro", 
    param=search_params, 
    limit=3, 
    output_fields=["word_count"] # 顺便把字数也查出来
)

for hits in results:
    for hit in hits:
        print(f"找到 ID: {hit.id}, 相似度距离: {hit.distance:.4f}, 字数: {hit.entity.get('word_count')}")

# ==========================================
# 6. 打扫战场
# ==========================================
# 释放内存
hello_milvus.release()
