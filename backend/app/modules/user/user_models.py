from datetime import datetime
from typing import List
from datetime import datetime
from typing import List
from uuid import UUID

from sqlmodel import Field, Relationship, SQLModel

class UserRoleLink(SQLModel, table=True):
    __tablename__ = "user_roles"
    user_id: UUID = Field(foreign_key="users.id", primary_key=True, description="ID người dùng")
    role_id: int = Field(foreign_key="roles.id", primary_key=True, description="ID vai trò")

class Role(SQLModel, table=True):
    __tablename__ = "roles"
    id: int | None = Field(default=None, primary_key=True, description="ID vai trò")
    name: str = Field(unique=True, index=True, description="Tên vai trò (duy nhất)")
    description: str | None = Field(default=None, description="Mô tả chi tiết vai trò")

    users: List["User"] = Relationship(back_populates="roles", link_model=UserRoleLink)

class User(SQLModel, table=True):
    __tablename__ = "users"
    id: UUID = Field(primary_key=True, description="ID người dùng (khớp với Supabase Auth ID)")
    email: str = Field(unique=True, index=True, description="Địa chỉ email")
    full_name: str | None = Field(default=None, description="Họ và tên đầy đủ")
    phone_number: str | None = Field(default=None, description="Số điện thoại")
    avatar_url: str | None = Field(default=None, description="Đường dẫn ảnh đại diện")
    is_active: bool = Field(default=True, description="Trạng thái hoạt động")
    created_at: datetime = Field(default_factory=datetime.utcnow, description="Thời gian tạo")
    updated_at: datetime = Field(default_factory=datetime.utcnow, description="Thời gian cập nhật lần cuối")

    roles: List[Role] = Relationship(back_populates="users", link_model=UserRoleLink)
