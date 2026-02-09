"""
PDF 解析功能测试脚本
使用 Unstructured API 测试 PDF 解析
"""
import asyncio
import sys
import os

# 添加父目录到路径
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

from app.services.pdf_parser import PDFParser
import config


async def test_api_connection():
    """测试 API 连接"""
    print("=" * 50)
    print("测试 Unstructured API 连接")
    print("=" * 50)
    
    api_key = config.unstructured_api_key
    if not api_key:
        print("❌ 错误: UNSTRUCTURED_API_KEY 未配置")
        return False
    
    print(f"✅ API Key 已配置: {api_key[:10]}...")
    print(f"✅ API URL: {config.unstructured_api_url}")
    
    parser = PDFParser(api_key)
    print(f"✅ PDFParser 初始化成功")
    print(f"✅ 图片保存目录: {parser.image_dir}")
    
    return True


async def test_parse_pdf(pdf_path: str):
    """测试解析 PDF 文件"""
    print("\n" + "=" * 50)
    print(f"测试解析 PDF: {pdf_path}")
    print("=" * 50)
    
    if not os.path.exists(pdf_path):
        print(f"❌ 文件不存在: {pdf_path}")
        return
    
    parser = PDFParser()
    
    try:
        result = await parser.parse_pdf(pdf_path)
        
        print(f"\n📄 文件名: {result['filename']}")
        print(f"📊 总元素数: {result['element_count']}")
        print(f"📝 文本段落: {len(result['texts'])}")
        print(f"📋 表格数量: {len(result['tables'])}")
        print(f"🖼️ 图片数量: {len(result['images'])}")
        print(f"📑 LangChain Documents: {len(result['documents'])}")
        
        # 预览文本
        if result['texts']:
            print("\n--- 文本预览 (前3段) ---")
            for i, text in enumerate(result['texts'][:3]):
                print(f"  [{i+1}] {text[:100]}...")
        
        # 预览表格
        if result['tables']:
            print("\n--- 表格预览 ---")
            for table in result['tables']:
                print(f"  [表格 {table['index']}] {table['text'][:100]}...")
        
        # 预览图片路径
        if result['images']:
            print("\n--- 提取的图片 ---")
            for img in result['images']:
                print(f"  - {img}")
        
        print("\n✅ 解析完成!")
        return result
        
    except Exception as e:
        print(f"\n❌ 解析失败: {e}")
        import traceback
        traceback.print_exc()
        return None


async def main():
    # 测试 API 连接
    if not await test_api_connection():
        return
    
    # 如果提供了 PDF 路径参数，测试解析
    if len(sys.argv) > 1:
        pdf_path = sys.argv[1]
        await test_parse_pdf(pdf_path)
    else:
        print("\n💡 提示: 可以传入 PDF 文件路径进行测试")
        print("   用法: python test_pdf_parser.py <pdf文件路径>")


if __name__ == "__main__":
    asyncio.run(main())
