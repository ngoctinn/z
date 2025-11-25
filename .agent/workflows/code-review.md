---
description:
---

# Trợ lý Review Code Cục bộ

Bạn đang giúp tôi thực hiện review code cục bộ **trước khi** tôi push thay đổi. Vui lòng làm theo quy trình có cấu trúc này.

## Bước 1: Thu thập Ngữ cảnh

Hỏi tôi về:

- Mô tả ngắn gọn feature/branch
- Danh sách file đã sửa đổi (với tóm tắt tùy chọn)
- Tài liệu thiết kế liên quan (ví dụ: `docs/ai/design/feature-{name}.md` hoặc thiết kế cấp dự án)
- Bất kỳ ràng buộc hoặc khu vực rủi ro đã biết
- Bất kỳ bug mở hoặc TODO liên kết với công việc này
- Các test nào đã được chạy

Nếu có thể, yêu cầu diff mới nhất:

```bash
git status -sb
git diff --stat
```

## Bước 2: Hiểu Sự Căn chỉnh Thiết kế

Đối với mỗi tài liệu thiết kế được cung cấp:

- Tóm tắt ý định kiến trúc
- Lưu ý yêu cầu quan trọng, mẫu, hoặc ràng buộc mà thiết kế quy định

## Bước 3: Review File theo File

Đối với mọi file đã sửa đổi:

1. Làm nổi bật các sai lệch từ thiết kế hoặc yêu cầu được tham chiếu
2. Phát hiện vấn đề logic hoặc luồng tiềm năng và trường hợp biên
3. Xác định code dư thừa hoặc trùng lặp
4. Đề xuất đơn giản hóa hoặc refactor (ưu tiên rõ ràng hơn thông minh)
5. Đánh dấu lo ngại bảo mật (xác thực đầu vào, bí mật, auth, xử lý dữ liệu)
6. Kiểm tra cạm bẫy hiệu suất hoặc rủi ro khả năng mở rộng
7. Đảm bảo xử lý lỗi, logging, và khả năng quan sát phù hợp
8. Lưu ý bất kỳ comment hoặc docs thiếu
9. Đánh dấu test thiếu hoặc lỗi thời liên quan đến file này

## Bước 4: Lo ngại Chéo

- Xác minh tính nhất quán đặt tên và tuân thủ quy ước dự án
- Xác nhận tài liệu/comment được cập nhật nơi hành vi thay đổi
- Xác định test thiếu (unit, integration, E2E) cần thiết để bao phủ thay đổi
- Đảm bảo cập nhật cấu hình/migration được thu thập nếu áp dụng

## Bước 5: Tóm tắt Phát hiện

Cung cấp kết quả theo cấu trúc này:

```
### Tóm tắt
- Vấn đề chặn: [số lượng]
- Theo dõi quan trọng: [số lượng]
- Cải tiến tốt để có: [số lượng]

### Ghi chú Chi tiết
1. **[File hoặc Thành phần]**
   - Vấn đề/Quan sát: ...
   - Tác động: (ví dụ: chặn / quan trọng / tốt để có)
   - Khuyến nghị: ...
   - Tham chiếu thiết kế: [...]

2. ... (lặp lại cho mỗi phát hiện)

### Bước Tiếp theo Được Khuyến nghị
- [ ] Giải quyết vấn đề chặn
- [ ] Cập nhật docs thiết kế/triển khai nếu cần
- [ ] Thêm/chỉnh test:
      - Unit:
      - Integration:
      - E2E:
- [ ] Chạy lại bộ test cục bộ
- [ ] Chạy lại lệnh review code sau khi sửa
```

## Bước 6: Danh sách Kiểm tra Cuối cùng

Xác nhận xem mỗi mục có hoàn thành (có/không/cần theo dõi):

- Triển khai phù hợp với thiết kế & yêu cầu
- Không còn lỗ hổng logic hoặc trường hợp biên rõ ràng
- Code dư thừa được loại bỏ hoặc biện minh
- Cân nhắc bảo mật được giải quyết
- Test bao phủ hành vi mới/thay đổi
- Tài liệu/ghi chú thiết kế được cập nhật

---

Hãy cho tôi biết khi bạn sẵn sàng bắt đầu review.
