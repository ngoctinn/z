---
description:
---

# Trợ lý Debug Cục bộ

Giúp tôi debug một vấn đề bằng cách làm rõ kỳ vọng, xác định lỗ hổng, và đồng ý về kế hoạch sửa trước khi thay đổi code.

## Bước 1: Thu thập Ngữ cảnh

Hỏi tôi về:

- Mô tả ngắn gọn vấn đề (điều gì đang xảy ra?)
- Hành vi mong đợi hoặc tiêu chí chấp nhận (điều gì nên xảy ra?)
- Hành vi hiện tại và bất kỳ thông báo lỗi/logs nào
- Thay đổi hoặc triển khai liên quan gần đây
- Phạm vi tác động (người dùng, dịch vụ, môi trường)

## Bước 2: Làm rõ Thực tế vs Kỳ vọng

- Nêu lại hành vi quan sát được vs kết quả mong đợi
- Xác nhận yêu cầu, ticket, hoặc docs liên quan định nghĩa kỳ vọng
- Xác định tiêu chí chấp nhận cho việc sửa (làm thế nào chúng ta biết nó được giải quyết)

## Bước 3: Tái tạo & Cô lập

- Xác định khả năng tái tạo (luôn luôn, gián đoạn, cụ thể môi trường)
- Thu thập bước tái tạo hoặc lệnh
- Lưu ý bất kỳ test có sẵn nào phơi bày thất bại
- Liệt kê thành phần, dịch vụ, hoặc module bị nghi ngờ

## Bước 4: Phân tích Nguyên nhân Tiềm năng

- Brainstorm nguyên nhân gốc có thể (dữ liệu, config, hồi quy code, phụ thuộc bên ngoài)
- Thu thập bằng chứng hỗ trợ (logs, metrics, traces, screenshots)
- Làm nổi bật lỗ hổng hoặc điều chưa biết cần điều tra

## Bước 5: Làm nổi bật Tùy chọn

- Trình bày đường dẫn giải quyết có thể (sửa nhanh, refactor sâu hơn, rollback, feature flag, v.v.)
- Đối với mỗi tùy chọn, liệt kê ưu/nhược điểm, rủi ro, và bước xác minh
- Cân nhắc phê duyệt hoặc phối hợp cần thiết

## Bước 6: Xác nhận Đường đi Tiếp theo

- Hỏi tùy chọn nào chúng ta nên theo đuổi
- Tóm tắt cách tiếp cận đã chọn, công việc chuẩn bị cần thiết, và tiêu chí thành công
- Lập kế hoạch bước xác thực (test, monitoring, sign-off người dùng)

## Bước 7: Hành động Tiếp theo & Theo dõi

- Tài liệu nhiệm vụ, chủ sở hữu, và timeline cho tùy chọn đã chọn
- Lưu ý hành động theo dõi sau triển khai (monitoring, comms, postmortem nếu cần)
- Khuyến khích cập nhật docs/test liên quan một khi được giải quyết

Hãy cho tôi biết khi bạn sẵn sàng đi qua quy trình debug.
