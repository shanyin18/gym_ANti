from fastapi import APIRouter
from app.api.v1.endpoints import auth, users, chat, knowledge

api_router = APIRouter()

api_router.include_router(auth.router, prefix="/api", tags=["auth"])
# Original API routes were /api/register etc. which auth router handles with prefix /api + /register? 
# No, auth.py has @router.post("/register"). So if we mount with prefix="/api", it becomes /api/register.
# But original code was @app.post("/api/register").
# So we need to be careful with prefixes.

# auth: /register, /login -> /api/register, /api/login
# users: /profile -> /api/profile
# chat: /chat/stream, /history, /daily-log -> /api/chat/stream, /api/history, /api/daily-log
# knowledge: /knowledge -> /api/knowledge

# It seems "api" prefix is common.
# I will mount all to /api.

api_router.include_router(auth.router, prefix="", tags=["auth"])
# auth.py router paths are /register, /login.
# if I mount at /api, it becomes /api/register. Correct.

api_router.include_router(users.router, prefix="", tags=["users"])
# users.py paths: /profile.
# Mounted at /api -> /api/profile. Correct.

api_router.include_router(chat.router, prefix="", tags=["chat"])
# chat.py paths: /chat/stream, /history, /daily-log.
# Mounted at /api -> /api/chat/stream, /api/history. Correct.

api_router.include_router(knowledge.router, prefix="/knowledge", tags=["knowledge"])
# knowledge.py paths: "", "/{doc_id}".
# Mounted at /api -> /api/knowledge, /api/knowledge/{doc_id}. Correct.
