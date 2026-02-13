"""
PDF 解析服务模块
使用 Unstructured API 解析复杂 PDF (表格、图片)
"""
import os
import base64
from typing import List, Dict, Any, Optional
from pathlib import Path

from unstructured_client import UnstructuredClient
from unstructured_client.models import shared, operations
from langchain_core.documents import Document

import config


class PDFParser:
    """使用 Unstructured API 解析 PDF 文件"""

    def __init__(self, api_key: str = None):
        self.api_key = api_key or config.unstructured_api_key
        self.client = UnstructuredClient(api_key_auth=self.api_key)
        self.image_dir = Path(config.knowledge_path).parent / "pdf_images"
        self.image_dir.mkdir(exist_ok=True)

    async def parse_pdf(self, file_path: str) -> Dict[str, Any]:
        with open(file_path, "rb") as f:
            file_content = f.read()

        filename = os.path.basename(file_path)

        req = operations.PartitionRequest(
            partition_parameters=shared.PartitionParameters(
                files=shared.Files(
                    content=file_content,
                    file_name=filename,
                ),
                strategy=shared.Strategy.HI_RES,
                pdf_infer_table_structure=True,
                extract_images_in_pdf=True,
                hi_res_model_name="yolox",
            ),
        )

        response = self.client.general.partition(request=req)
        elements = response.elements or []

        texts = []
        tables = []
        images = []
        documents = []

        for i, element in enumerate(elements):
            elem_type = element.get("type", "")
            elem_text = element.get("text", "")
            metadata = element.get("metadata", {})

            if elem_type == "Table":
                table_html = metadata.get("text_as_html", elem_text)
                tables.append({
                    "index": len(tables),
                    "html": table_html,
                    "text": elem_text,
                })
                documents.append(Document(
                    page_content=f"[表格]\n{elem_text}",
                    metadata={"source": filename, "type": "table", "index": i},
                ))
            elif elem_type == "Image":
                image_base64 = metadata.get("image_base64", "")
                if image_base64:
                    img_path = self._save_image(image_base64, filename, len(images))
                    images.append(img_path)
                    documents.append(Document(
                        page_content=f"[图片] {img_path}",
                        metadata={"source": filename, "type": "image", "path": img_path},
                    ))
            else:
                if elem_text.strip():
                    texts.append(elem_text)
                    documents.append(Document(
                        page_content=elem_text,
                        metadata={"source": filename, "type": elem_type, "index": i},
                    ))

        return {
            "filename": filename,
            "texts": texts,
            "tables": tables,
            "images": images,
            "documents": documents,
            "element_count": len(elements),
        }

    def _save_image(self, base64_data: str, source_file: str, index: int) -> str:
        if "," in base64_data:
            base64_data = base64_data.split(",")[1]

        image_bytes = base64.b64decode(base64_data)
        stem = Path(source_file).stem
        img_filename = f"{stem}_img_{index}.png"
        img_path = self.image_dir / img_filename

        with open(img_path, "wb") as f:
            f.write(image_bytes)

        return str(img_path)

    def to_langchain_documents(self, parse_result: Dict[str, Any]) -> List[Document]:
        return parse_result.get("documents", [])


pdf_parser: Optional[PDFParser] = None


def get_pdf_parser() -> PDFParser:
    global pdf_parser
    if pdf_parser is None:
        pdf_parser = PDFParser()
    return pdf_parser
