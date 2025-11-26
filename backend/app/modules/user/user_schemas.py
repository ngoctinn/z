from typing import List
from uuid import UUID
from sqlmodel import SQLModel, Field

class RoleRead(SQLModel):
    id: int = Field(description="ID vai trò")
    name: str = Field(description="Tên vai trò")
    description: str | None = Field(default=None, description="Mô tả vai trò")

class UserRead(SQLModel):
    id: UUID = Field(description="ID người dùng")
    email: str = Field(description="Email người dùng")
    full_name: str | None = Field(default=None, description="Họ và tên")
    phone_number: str | None = Field(default=None, description="Số điện thoại")
    avatar_url: str | None = Field(default=None, description="Link ảnh đại diện")
    is_active: bool = Field(description="Trạng thái hoạt động")
    roles: List[RoleRead] = Field(default=[], description="Danh sách vai trò")
