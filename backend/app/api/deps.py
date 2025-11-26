from typing import Annotated
from uuid import UUID

from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlmodel import select
from sqlmodel.ext.asyncio.session import AsyncSession
from supabase import Client

from app.core.database import get_session
from app.core.deps import get_supabase_client
from app.modules.user.user_models import User, Role, UserRoleLink

security = HTTPBearer()

async def get_current_user(
    token: Annotated[HTTPAuthorizationCredentials, Depends(security)],
    session: Annotated[AsyncSession, Depends(get_session)],
    supabase: Annotated[Client, Depends(get_supabase_client)],
) -> User:
    try:
        # Xác thực token với Supabase
        user_response = supabase.auth.get_user(token.credentials)
        supabase_user = user_response.user

        if not supabase_user:
             raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Thông tin xác thực không hợp lệ",
                headers={"WWW-Authenticate": "Bearer"},
            )

        user_id = UUID(supabase_user.id)

        # Kiểm tra user có tồn tại trong DB local không
        # Eager load roles
        # Lưu ý: .options(select(User).join(User.roles)) không phải cú pháp đúng cho eager loading trong SQLModel/SQLAlchemy 2.0 với Async
        # Cú pháp đúng cho eager loading relationship:
        from sqlalchemy.orm import selectinload
        statement = select(User).where(User.id == user_id).options(selectinload(User.roles))

        result = await session.exec(statement)
        user = result.first()

        if not user:
            # Lazy Sync: Tạo user nếu chưa tồn tại
            print(f"User {user_id} chưa tồn tại local. Đang đồng bộ...")

            # Lấy email và metadata
            email = supabase_user.email
            user_metadata = supabase_user.user_metadata or {}
            full_name = user_metadata.get("full_name") or user_metadata.get("name")
            avatar_url = user_metadata.get("avatar_url") or user_metadata.get("picture")

            new_user = User(
                id=user_id,
                email=email,
                full_name=full_name,
                avatar_url=avatar_url,
                is_active=True
            )
            session.add(new_user)

            # Gán role mặc định: CUSTOMER
            role_statement = select(Role).where(Role.name == "customer")
            role_result = await session.exec(role_statement)
            customer_role = role_result.first()

            if customer_role:
                # Liên kết user với role
                # Chúng ta có thể append vào new_user.roles, nhưng insert bảng link table tường minh cũng tốt.
                # Vì đang trong async session, append vào relationship có thể trigger lazy load nếu không cẩn thận,
                # nhưng ở đây new_user là transient.
                new_user.roles.append(customer_role)
            else:
                print("Cảnh báo: Không tìm thấy role mặc định 'customer'!")

            await session.commit()
            await session.refresh(new_user)

            # Query lại để đảm bảo mọi thứ được load đúng với roles
            # Hoặc chỉ cần trả về new_user vì đã append role.
            # Để nhất quán, trả về object user.
            user = new_user

        return user

    except Exception as e:
        print(f"Lỗi xác thực: {e}")
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Không thể xác thực thông tin đăng nhập",
            headers={"WWW-Authenticate": "Bearer"},
        )
