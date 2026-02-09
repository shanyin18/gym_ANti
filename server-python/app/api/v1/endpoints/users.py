from fastapi import APIRouter, Depends, HTTPException
from app.api import deps
from app.schemas.profile import ProfileRequest
from app.db.crud import profile as profile_crud

router = APIRouter()


@router.get("/profile")
async def get_profile(user: dict = Depends(deps.get_current_user)):
    """获取用户档案"""
    profile = profile_crud.get_profile_by_username(user["username"])
    return {"profile": profile}


@router.post("/profile")
async def save_profile(req: ProfileRequest, user: dict = Depends(deps.get_current_user)):
    """保存用户档案"""
    try:
        result = profile_crud.upsert_profile(user["username"], req.model_dump())
        return result
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
