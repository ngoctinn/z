---
title: Feature Current User Profile Planning
status: Review
---

# Planning: Current User Profile

## 1. Phân tích Nhiệm vụ

### Task 1: Define Models & Migrations
-   Tạo `User`, `Role`, `UserRoleLink` models trong `app/modules/user/user_models.py`.
-   Tạo migration script với Alembic.
-   Apply migration.

### Task 2: Seed Data
-   Tạo script để seed các roles mặc định (ADMIN, RECEPTIONIST, TECHNICIAN, CUSTOMER) nếu chưa tồn tại.
-   Chạy seed script.

### Task 3: Implement Dependencies
-   Cài đặt `supabase-py` (đã có trong requirements).
-   Tạo `get_supabase_client` trong `app/core/deps.py`.
-   Tạo `get_current_user` trong `app/modules/user/user_deps.py` (hoặc `app/api/deps.py`):
    -   Verify JWT.
    -   Lazy sync user (tạo user + gán role CUSTOMER nếu chưa có).
    -   Eager load roles.

### Task 4: Implement API
-   Tạo schemas `UserRead`, `RoleRead` trong `app/modules/user/user_schemas.py`.
-   Tạo endpoint `GET /me` trong `app/modules/user/user_routes.py`.
-   Đăng ký router vào `app/main.py`.

### Task 5: Verification
-   Test với token hợp lệ (từ Frontend hoặc Postman).
-   Test với token không hợp lệ.
-   Kiểm tra database xem user mới có được tạo không.

## 2. Ước lượng & Thứ tự
1.  Models & Migrations (15 mins)
2.  Seed Data (10 mins)
3.  Dependencies (20 mins)
4.  API Implementation (15 mins)
5.  Verification (10 mins)

## 3. Rủi ro
-   **Supabase Connection:** Cần đảm bảo kết nối Supabase ổn định để verify token.
-   **Lazy Sync Race Condition:** Nếu user gửi nhiều request đồng thời khi chưa có trong DB, có thể gây lỗi duplicate key. (Giải pháp: Dùng `ON CONFLICT DO NOTHING` hoặc lock đơn giản, nhưng giai đoạn đầu chấp nhận rủi ro thấp này).
