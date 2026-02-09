from fastapi import APIRouter, Depends, HTTPException, status
from app.schemas.auth import LoginRequest, RegisterRequest
from app.core.security import create_access_token, verify_password, get_password_hash
from app.db.crud import users as users_crud
from app.db.crud import logs as logs_crud

router = APIRouter()


@router.post("/register")
async def register(req: RegisterRequest):
    """用户注册"""
    try:
        if not req.username or not req.password:
            raise HTTPException(status_code=400, detail="用户名和密码不能为空")
        
        # 检查用户是否存在
        if users_crud.get_user_by_username(req.username):
            raise HTTPException(status_code=400, detail="用户名已存在")
        
        # 创建用户
        password_hash = get_password_hash(req.password)
        users_crud.create_user(req.username, password_hash)
        
        # 初始化日志表
        logs_crud.create_user_log_table(req.username)
        
        return {"success": True, "message": "注册成功"}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))


@router.post("/login")
async def login(req: LoginRequest):
    """用户登录"""
    try:
        if not req.username or not req.password:
            raise HTTPException(status_code=400, detail="用户名和密码不能为空")
        
        user = users_crud.get_user_by_username(req.username)
        if not user:
            raise HTTPException(status_code=401, detail="用户名或密码错误")
        
        if not verify_password(req.password, user.password_hash):
            raise HTTPException(status_code=401, detail="用户名或密码错误")
        
        # 生成 token
        access_token = create_access_token(data={"sub": req.username})
        return {
            "token": access_token,
            "username": req.username,
            "message": "登录成功"
        }
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
