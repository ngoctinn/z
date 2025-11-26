---
title: Feature Current User Profile Requirements
status: Draft
---

# Feature: Current User Profile

## 1. Tuyên bố vấn đề
Hiện tại, Frontend đã thực hiện xác thực thông qua Supabase và có JWT. Tuy nhiên, Backend chưa có cơ chế để:
1.  Xác thực (Verify) token này từ Supabase.
2.  Đồng bộ hoặc lấy thông tin chi tiết của người dùng (Role, Profile) từ database của hệ thống (ngoài bảng `auth.users` của Supabase).

## 2. Mục tiêu
-   Xây dựng middleware/dependency để verify Supabase JWT.
-   API endpoint `/api/v1/users/me` trả về thông tin profile của user hiện tại.
-   Cơ chế đồng bộ user từ Supabase Auth sang bảng `User` của hệ thống nếu chưa tồn tại (Lazy sync).

## 3. User Stories
-   **Tất cả người dùng (Khách hàng, Lễ tân, Kỹ thuật viên, Quản trị viên):**
    -   Là một người dùng đã đăng nhập, tôi muốn hệ thống nhận diện được tôi là ai khi tôi gửi request kèm token, để tôi có thể truy cập các tài nguyên được phép.
    -   Là một người dùng, tôi muốn xem thông tin cá nhân của mình (Họ tên, Email, Số điện thoại, Vai trò) để xác nhận thông tin.

## 4. Tiêu chí thành công
-   API `/api/v1/users/me` trả về đúng thông tin user tương ứng với token.
-   Token không hợp lệ hoặc hết hạn phải trả về lỗi 401.
-   User mới đăng ký qua Supabase khi gọi API này lần đầu sẽ được tạo bản ghi trong bảng `users` của Backend.

## 5. Ràng buộc & Giả định
-   **Ràng buộc:** Phải sử dụng thư viện `supabase-py` hoặc verify JWT signature thủ công nhưng đúng chuẩn của Supabase.
-   **Giả định:** Frontend gửi token qua header `Authorization: Bearer <token>`.

## 6. Câu hỏi mở
-   Thông tin `role` sẽ được lưu ở `app_metadata` của Supabase hay bảng `users` riêng? (Quyết định: Lưu ở bảng `users` riêng để dễ quản lý và query, có thể sync từ `app_metadata` nếu cần).
