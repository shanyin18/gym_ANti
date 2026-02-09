from fastapi import APIRouter, Depends, HTTPException
from app.api import deps
from app.schemas.chat import KnowledgeRequest
from app.services.rag_service import get_rag_service

router = APIRouter()


@router.post("")
async def add_knowledge(req: KnowledgeRequest, user: dict = Depends(deps.get_current_user)):
    """添加资料到知识库"""
    try:
        if not req.content:
            raise HTTPException(status_code=400, detail="内容不能为空")
        
        rag_service = get_rag_service()
        doc_id = rag_service.vector_service.add_document(req.content, req.title)
        
        return {"success": True, "doc_id": doc_id, "message": "资料添加成功"}
    except Exception as e:
        print(f"Add knowledge error: {e}")
        raise HTTPException(status_code=500, detail=str(e))


@router.get("")
async def get_knowledge(user: dict = Depends(deps.get_current_user)):
    """获取所有用户上传的资料"""
    try:
        rag_service = get_rag_service()
        docs = rag_service.vector_service.get_all_documents()
        return {"documents": docs}
    except Exception as e:
        print(f"Get knowledge error: {e}")
        return {"documents": []}


@router.delete("/{doc_id}")
async def delete_knowledge(doc_id: str, user: dict = Depends(deps.get_current_user)):
    """删除指定资料"""
    try:
        rag_service = get_rag_service()
        success = rag_service.vector_service.delete_document(doc_id)
        
        if success:
            return {"success": True, "message": "删除成功"}
        else:
            raise HTTPException(status_code=404, detail="资料不存在")
    except HTTPException:
        raise
    except Exception as e:
        print(f"Delete knowledge error: {e}")
        raise HTTPException(status_code=500, detail=str(e))
