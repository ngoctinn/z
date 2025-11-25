---
description:
---

# Trợ lý Thực thi Kế hoạch Feature

Giúp tôi làm việc qua kế hoạch feature một nhiệm vụ tại một thời điểm.

## Bước 1: Thu thập Ngữ cảnh

Hỏi tôi về:

- Tên feature (kebab-case, ví dụ: `user-authentication`)
- Mô tả ngắn gọn feature/branch
- Đường dẫn doc lập kế hoạch liên quan (mặc định `docs/ai/planning/feature-{name}.md`)
- Bất kỳ docs thiết kế/triển khai hỗ trợ (thiết kế, yêu cầu, triển khai)
- Branch hiện tại và tóm tắt diff mới nhất (`git status -sb`, `git diff --stat`)

## Bước 2: Tải Kế hoạch

- Yêu cầu nội dung doc lập kế hoạch hoặc cung cấp lệnh như:
  ```bash
  cat docs/ai/planning/feature-<name>.md
  ```
- Phân tích các phần đại diện danh sách nhiệm vụ (tìm tiêu đề + checkbox `[ ]`, `[x]`).
- Xây dựng hàng đợi nhiệm vụ có thứ tự nhóm theo phần (ví dụ: Foundation, Core Features, Testing).

## Bước 3: Trình bày Hàng đợi Nhiệm vụ

Hiển thị tổng quan:

```
### Hàng đợi Nhiệm vụ: <Tên Feature>
1. [trạng thái] Phần • Tiêu đề nhiệm vụ
2. ...
```

Chú giải trạng thái: `todo`, `in-progress`, `done`, `blocked` (dựa trên checkbox/ghi chú nếu có).

## Bước 4: Thực thi Nhiệm vụ Tương tác

Đối với mỗi nhiệm vụ theo thứ tự:

1. Hiển thị phần/ngữ cảnh, văn bản bullet đầy đủ, và bất kỳ ghi chú hiện có nào.
2. Đề xuất docs liên quan để tham chiếu (yêu cầu/thiết kế/triển khai).
3. Hỏi: "Kế hoạch cho nhiệm vụ này?" Cung cấp phác thảo sub-steps sử dụng doc thiết kế.
4. Nhắc nhở đánh dấu trạng thái (`done`, `in-progress`, `blocked`, `skipped`) và thu thập ghi chú ngắn/bước tiếp theo.
5. Khuyến khích chỉnh sửa code/document bên trong Cursor; cung cấp lệnh/snippets khi hữu ích.
6. Nếu bị chặn, ghi lại thông tin blocker và di chuyển nhiệm vụ đến cuối hoặc vào danh sách "Blocked".

## Bước 5: Cập nhật Doc Lập kế hoạch

Sau mỗi thay đổi trạng thái, tạo snippet Markdown người dùng có thể dán lại vào doc lập kế hoạch, ví dụ:

```
- [x] Nhiệm vụ: Triển khai dịch vụ auth (Ghi chú: hoàn thành POST /auth/login, test đã thêm)
```

Nhắc nhở người dùng giữ doc nguồn được cập nhật.

## Bước 6: Kiểm tra Công việc Mới Phát hiện

Sau mỗi phần, hỏi xem có nhiệm vụ mới được phát hiện không. Nếu có, thu thập chúng trong danh sách "New Work" với trạng thái `todo` và bao gồm trong tóm tắt.

## Bước 7: Tóm tắt Phiên

Tạo bảng tóm tắt:

```
### Tóm tắt Thực thi
- Hoàn thành: (danh sách)
- Đang tiến hành: (danh sách + chủ sở hữu/bước tiếp theo)
- Bị chặn: (danh sách + blocker)
- Bỏ qua / Hoãn lại: (danh sách + lý do)
- Nhiệm vụ Mới: (danh sách)
```

## Bước 8: Hành động Tiếp theo

Nhắc nhở người dùng:

- Cập nhật `docs/ai/planning/feature-{name}.md` với trạng thái mới
- Đồng bộ docs liên quan (yêu cầu/thiết kế/triển khai/testing) nếu quyết định thay đổi
- Chạy `/check-implementation` để xác thực thay đổi so với docs thiết kế
- Chạy `/writing-test` để tạo unit/integration tests nhắm đến 100% coverage
- Chạy `/update-planning` để hòa giải doc lập kế hoạch với trạng thái mới nhất
- Chạy `/code-review` khi sẵn sàng cho review cuối cùng
- Chạy bộ test liên quan đến nhiệm vụ đã hoàn thành

---

Hãy cho tôi biết khi bạn sẵn sàng bắt đầu thực thi kế hoạch. Cung cấp tên feature và doc lập kế hoạch trước.
