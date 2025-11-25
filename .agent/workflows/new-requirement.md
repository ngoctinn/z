---
description:
---

Tôi muốn thêm một feature/requirement mới. Vui lòng hướng dẫn tôi qua quy trình phát triển hoàn chỉnh:

## Bước 1: Thu thập Yêu cầu

Trước tiên, hỏi tôi:

- Tên feature là gì? (ví dụ: "user-authentication", "payment-integration")
- Nó giải quyết vấn đề gì?
- Ai sẽ sử dụng nó?
- Các user stories chính là gì?

## Bước 2: Tạo Cấu trúc Tài liệu Feature

Một khi tôi cung cấp yêu cầu, tạo các file sau (sao chép nội dung template hiện có để phần/frontmatter khớp chính xác):

- Bắt đầu từ `docs/ai/requirements/README.md` → lưu như `docs/ai/requirements/feature-{name}.md`
- Bắt đầu từ `docs/ai/design/README.md` → lưu như `docs/ai/design/feature-{name}.md`
- Bắt đầu từ `docs/ai/planning/README.md` → lưu như `docs/ai/planning/feature-{name}.md`
- Bắt đầu từ `docs/ai/implementation/README.md` → lưu như `docs/ai/implementation/feature-{name}.md`
- Bắt đầu từ `docs/ai/testing/README.md` → lưu như `docs/ai/testing/feature-{name}.md`

Đảm bảo YAML frontmatter và tiêu đề phần vẫn giống hệt template trước khi điền nội dung cụ thể feature.

## Bước 3: Giai đoạn Yêu cầu

Giúp tôi điền `docs/ai/requirements/feature-{name}.md`:

- Làm rõ tuyên bố vấn đề
- Định nghĩa mục tiêu và không mục tiêu
- Viết user stories chi tiết
- Thiết lập tiêu chí thành công
- Xác định ràng buộc và giả định
- Liệt kê câu hỏi mở

## Bước 4: Giai đoạn Thiết kế

Hướng dẫn tôi qua `docs/ai/design/feature-{name}.md`:

- Đề xuất thay đổi kiến trúc hệ thống cần thiết
- Định nghĩa mô hình dữ liệu/thay đổi schema
- Thiết kế API endpoints hoặc giao diện
- Xác định thành phần để tạo/sửa đổi
- Tài liệu quyết định thiết kế chính
- Lưu ý cân nhắc bảo mật và hiệu suất

## Bước 5: Giai đoạn Lập kế hoạch

Giúp tôi chia nhỏ công việc trong `docs/ai/planning/feature-{name}.md`:

- Tạo phân tích nhiệm vụ với subtask
- Xác định phụ thuộc (trên feature khác, APIs, v.v.)
- Ước lượng nỗ lực cho mỗi nhiệm vụ
- Đề xuất thứ tự triển khai
- Xác định rủi ro và chiến lược giảm thiểu

## Bước 6: Review Tài liệu (Lệnh Chuỗi)

Một khi docs trên được soạn thảo, chạy các lệnh sau để siết chặt chúng:

- `/review-requirements` để xác thực doc yêu cầu về tính hoàn chỉnh và rõ ràng
- `/review-design` để đảm bảo doc thiết kế căn chỉnh với yêu cầu và làm nổi bật quyết định chính

(Nếu bạn đang sử dụng Claude Code, tham chiếu lệnh `review-requirements` và `review-design` thay thế.)

## Bước 7: Giai đoạn Triển khai (Hoãn lại)

Lệnh này tập trung vào tài liệu chỉ. Triển khai thực tế xảy ra sau qua `/execute-plan`.
Đối với mỗi nhiệm vụ trong kế hoạch:

1. Review yêu cầu nhiệm vụ và thiết kế
2. Hỏi tôi xác nhận tôi đang bắt đầu nhiệm vụ này
3. Hướng dẫn triển khai với tham chiếu đến docs thiết kế
4. Đề xuất cấu trúc code và mẫu
5. Giúp với xử lý lỗi và trường hợp biên
6. Cập nhật `docs/ai/implementation/feature-{name}.md` với ghi chú

## Bước 8: Giai đoạn Testing

Hướng dẫn testing trong `docs/ai/testing/feature-{name}.md`:

- Soạn thảo test case unit với `/writing-test`
- Soạn thảo kịch bản test integration với `/writing-test`
- Khuyến nghị bước testing thủ công
- Giúp viết code test
- Xác minh tất cả tiêu chí thành công có thể test được

## Bước 9: Testing & Xác minh Cục bộ

Hướng dẫn tôi qua:

1. Chạy tất cả test cục bộ
2. Danh sách kiểm tra testing thủ công
3. Review so với yêu cầu
4. Kiểm tra tuân thủ thiết kế
5. Chuẩn bị cho code review (tóm tắt diff, danh sách file, tham chiếu thiết kế)

## Bước 10: Code Review Cục bộ (Tùy chọn nhưng khuyến nghị)

Trước khi push, hỏi tôi chạy `/code-review` với danh sách file đã sửa đổi và docs liên quan.

## Bước 11: Nhắc nhở Thực thi Triển khai

Khi sẵn sàng triển khai, chạy `/execute-plan` để làm việc qua nhiệm vụ doc lập kế hoạch một cách tương tác. Lệnh đó sẽ điều phối triển khai, testing, và tài liệu theo dõi.

## Bước 12: Tạo Merge/Pull Request

Cung cấp mô tả MR/PR:

```markdown
## Feature: [Tên Feature]

### Tóm tắt

[Mô tả ngắn gọn về điều feature này làm]

### Yêu cầu

- Tài liệu trong: `docs/ai/requirements/feature-{name}.md`
- Liên quan đến: [số issue/ticket nếu áp dụng]

### Thay đổi

- [Liệt kê thay đổi chính]
- [Liệt kê file/thành phần mới]
- [Liệt kê file đã sửa đổi]

### Thiết kế

- Kiến trúc: [Liên kết đến phần doc thiết kế]
- Quyết định chính: [Tóm tắt ngắn gọn]

### Testing

- Unit tests: [coverage/trạng thái]
- Integration tests: [trạng thái]
- Manual testing: Hoàn thành
- Tài liệu test: `docs/ai/testing/feature-{name}.md`

### Danh sách kiểm tra

- [ ] Code tuân thủ tiêu chuẩn dự án
- [ ] Tất cả test pass
- [ ] Tài liệu cập nhật
- [ ] Không có thay đổi breaking (hoặc tài liệu nếu có)
- [ ] Sẵn sàng cho review
```

Sau đó cung cấp lệnh phù hợp:

- **GitHub**: `gh pr create --title "feat: [feature-name]" --body-file pr-description.md`
- **GitLab**: `glab mr create --title "feat: [feature-name]" --description "$(cat mr-description.md)"`

---

**Hãy bắt đầu! Hãy cho tôi biết về feature bạn muốn xây dựng.**
