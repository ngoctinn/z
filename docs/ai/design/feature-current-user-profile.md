---
title: Feature Current User Profile Design
status: Review
---

# Design: Current User Profile

## 1. Kiến trúc Hệ thống

### Authentication Flow
1.  **Client** gửi request kèm `Authorization: Bearer <jwt_token>`.
2.  **FastAPI Dependency (`get_current_user`)**:
    -   Gọi `supabase.auth.get_user(token)` để verify token.
    -   Nếu token không hợp lệ -> Raise `401 Unauthorized`.
    -   Nếu hợp lệ -> Lấy `user_id` (UUID) từ response.
3.  **User Synchronization (Lazy Sync)**:
    -   Query bảng `users` trong Postgres local với `user_id`.
    -   **Nếu User chưa tồn tại**:
        -   Lấy thông tin `email`, `user_metadata` từ Supabase user object.
        -   Tạo bản ghi mới trong bảng `users` với role mặc định (CUSTOMER).
    -   **Nếu User đã tồn tại**:
        -   Trả về object User từ DB.

## 2. Database Schema

### Table: `users`
Bảng chứa thông tin cơ bản của người dùng.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | PK | Khớp với `auth.users.id` của Supabase |
| `email` | String | Unique, Index | Email người dùng |
| `full_name` | String | Nullable | Họ tên đầy đủ |
| `phone_number` | String | Nullable | Số điện thoại |
| `avatar_url` | String | Nullable | Link ảnh đại diện |
| `is_active` | Boolean | Default True | Trạng thái hoạt động |
| `created_at` | DateTime | Default Now | Thời gian tạo |
| `updated_at` | DateTime | Default Now | Thời gian cập nhật |

### Table: `roles`
Bảng định nghĩa các vai trò trong hệ thống.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | Integer | PK, Auto Inc | ID của role |
| `name` | String | Unique | Tên role (admin, receptionist, technician, customer) |
| `description` | String | Nullable | Mô tả vai trò |

### Table: `user_roles` (Link Table)
Bảng liên kết Many-to-Many giữa Users và Roles.

| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `user_id` | UUID | PK, FK(users.id) | ID người dùng |
| `role_id` | Integer | PK, FK(roles.id) | ID vai trò |

## 3. API Endpoints

### `GET /api/v1/users/me`
-   **Auth:** Required (Bearer Token).
-   **Response:** `UserRead` schema (bao gồm danh sách `roles`).
-   **Description:** Trả về thông tin chi tiết của user hiện tại và các vai trò của họ.

## 4. Components

### Models
-   `User`: SQLModel table.
-   `Role`: SQLModel table.
-   `UserRoleLink`: SQLModel table (link table).

### Schemas
-   `RoleRead`: Schema cho role.
-   `UserRead`: Schema trả về cho client (bao gồm `roles: List[RoleRead]`).

### Dependencies
-   `get_current_user`: Hàm dependency chính xử lý auth logic và load kèm roles.

## 5. RBAC Design (Role-Based)

Hệ thống sử dụng mô hình RBAC dựa trên bảng `roles` riêng biệt. Một user có thể đảm nhận nhiều vai trò cùng lúc.

### Standard Roles (Seed Data)
Hệ thống sẽ khởi tạo sẵn 4 roles cơ bản:
1.  `ADMIN` (Quản trị viên): Toàn quyền hệ thống.
2.  `RECEPTIONIST` (Lễ tân): Quản lý lịch hẹn, khách hàng.
3.  `TECHNICIAN` (Kỹ thuật viên): Xem lịch làm việc, cập nhật trạng thái liệu trình.
4.  `CUSTOMER` (Khách hàng): Đặt lịch, xem lịch sử.

### Authorization Logic
Kiểm tra role trực tiếp trong code hoặc dependency:

```python
def check_role(required_roles: list[str]):
    def dependency(current_user: User = Depends(get_current_user)):
        user_roles = [r.name for r in current_user.roles]
        if not any(role in user_roles for role in required_roles):
            raise HTTPException(status_code=403, detail="Not enough privileges")
        return current_user
    return dependency

# Usage
@router.get("/admin-only", dependencies=[Depends(check_role(["admin"]))])
```

## 6. Cân nhắc Bảo mật & Hiệu suất
-   **Bảo mật:** Verify token với Supabase.
-   **Hiệu suất:** Khi query `get_current_user`, cần join với bảng `roles` (eager loading) để tránh N+1 query khi kiểm tra quyền.
