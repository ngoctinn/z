---
description:
---

Review `docs/ai/testing/feature-{name}.md` và đảm bảo nó phản ánh template cơ sở trước khi viết test.

## Bước 1: Thu thập Ngữ cảnh

Hỏi tôi về:

- Tên feature và branch
- Tóm tắt những gì thay đổi (liên kết đến docs thiết kế & yêu cầu)
- Môi trường mục tiêu (backend, frontend, full-stack)
- Bộ test tự động hiện có (unit, integration, E2E)
- Bất kỳ test flaky hoặc chậm để tránh

## Bước 2: Phân tích Template Testing

- Xác định phần cần thiết từ `docs/ai/testing/feature-{name}.md` (unit, integration, xác minh thủ công, mục tiêu coverage)
- Xác nhận tiêu chí thành công và trường hợp biên từ docs yêu cầu & thiết kế
- Lưu ý bất kỳ mocks/stubs hoặc fixtures đã có sẵn

## Bước 3: Unit Tests (Nhắm đến 100% coverage)

Đối với mỗi module/function:

1. Liệt kê kịch bản hành vi (happy path, edge cases, error handling)
2. Tạo test case cụ thể với assertions và inputs
3. Tham chiếu utilities/mocks hiện có để tăng tốc triển khai
4. Cung cấp pseudocode hoặc đoạn test thực tế
5. Làm nổi bật nhánh tiềm năng thiếu ngăn cản coverage đầy đủ

## Bước 4: Integration Tests

1. Xác định luồng quan trọng trải dài nhiều thành phần/dịch vụ
2. Định nghĩa bước setup/teardown (databases, APIs, queues)
3. Phác thảo test case xác thực ranh giới tương tác, hợp đồng dữ liệu, và chế độ thất bại
4. Đề xuất instrumentation/logging để debug thất bại

## Bước 5: Chiến lược Coverage

- Khuyến nghị lệnh tooling (ví dụ: `npm run test -- --coverage`)
- Gọi ra files/functions vẫn cần coverage và tại sao
- Đề xuất test bổ sung nếu coverage <100%

## Bước 6: Testing Thủ công & Khám phá

- Đề xuất danh sách kiểm tra test thủ công bao gồm UX, accessibility, và error handling
- Xác định kịch bản khám phá hoặc test injection chaos/thất bại nếu liên quan

## Bước 7: Cập nhật Tài liệu & TODOs

- Tóm tắt test nào đã thêm hoặc vẫn thiếu
- Cập nhật phần `docs/ai/testing/feature-{name}.md` với liên kết đến file test và kết quả
- Đánh dấu nhiệm vụ theo dõi cho test hoãn lại (với owners/dates)

Hãy cho tôi biết khi bạn có thay đổi code mới nhất sẵn sàng; chúng ta sẽ viết test cùng nhau cho đến khi đạt 100% coverage.
