from fastapi import APIRouter, Depends
from app.api.deps import get_current_user
from app.modules.user.user_models import User
from app.modules.user.user_schemas import UserRead

router = APIRouter()

@router.get("/me", response_model=UserRead)
async def read_user_me(current_user: User = Depends(get_current_user)):
    """
    Lấy thông tin người dùng hiện tại.
    """
    return current_user
