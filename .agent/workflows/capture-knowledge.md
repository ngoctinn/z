---
description:
---

# Trợ lý Thu thập Kiến thức

Hướng dẫn tôi tạo ra sự hiểu biết có cấu trúc về một điểm nhập mã và lưu nó vào tài liệu kiến thức.

## Bước 1: Thu thập Ngữ cảnh

- Điểm nhập (file, folder, function, API)
- Tại sao điểm nhập này quan trọng (feature, bug, investigation)
- Tài liệu yêu cầu/thiết kế liên quan (nếu có)
- Độ sâu mong muốn hoặc khu vực tập trung (logic, dependencies, data flow)

## Bước 2: Xác thực Điểm nhập

- Xác định loại điểm nhập và xác nhận nó tồn tại
- Làm rõ sự mơ hồ (nhiều kết quả phù hợp) và yêu cầu làm rõ
- Nếu không tìm thấy, đề xuất các lựa chọn thay thế có khả năng hoặc sửa lỗi chính tả

## Bước 3: Thu thập Ngữ cảnh Nguồn

- Đọc file/module chính và tóm tắt mục đích, xuất khẩu, mẫu chính
- Đối với folders: liệt kê cấu trúc, làm nổi bật các module chính
- Đối với functions/APIs: thu thập chữ ký, tham số, giá trị trả về, xử lý lỗi
- Trích xuất các đoạn mã thiết yếu (tránh dump lớn)

## Bước 4: Phân tích Sự phụ thuộc

- Xây dựng chế độ xem phụ thuộc lên đến độ sâu 3
- Theo dõi các nút đã truy cập để tránh vòng lặp
- Phân loại phụ thuộc (imports, function calls, services, external packages)
- Lưu ý các hệ thống bên ngoài quan trọng hoặc mã được tạo nên được loại trừ

## Bước 5: Tổng hợp Giải thích

- Soạn thảo tổng quan (mục đích, ngôn ngữ, hành vi cấp cao)
- Chi tiết logic cốt lõi, thành phần chính, luồng thực thi, mẫu
- Làm nổi bật xử lý lỗi, hiệu suất, cân nhắc bảo mật
- Xác định các cải tiến tiềm năng hoặc rủi ro phát hiện trong quá trình phân tích

## Bước 6: Tạo Tài liệu

- Chuẩn hóa tên điểm nhập thành kebab-case (`calculateTotalPrice` → `calculate-total-price`)
- Tạo `docs/ai/implementation/knowledge-{name}.md` sử dụng các tiêu đề ngụ ý trong Bước 5 (Tổng quan, Chi tiết Triển khai, Sự phụ thuộc, Sơ đồ Trực quan, Thông tin Bổ sung, Siêu dữ liệu, Các Bước Tiếp theo)
- Điền các phần với phát hiện, sơ đồ, và siêu dữ liệu (ngày phân tích, độ sâu, file đã chạm)
- Bao gồm sơ đồ mermaid khi chúng làm rõ luồng hoặc mối quan hệ

## Bước 7: Xem lại & Hành động Tiếp theo

- Tóm tắt thông tin chính và câu hỏi mở để theo dõi
- Đề xuất khu vực liên quan để đào sâu hơn hoặc refactor
- Xác nhận đường dẫn file kiến thức và nhắc nhở commit nó
- Khuyến khích chạy `/capture-knowledge` lại cho các điểm nhập liên quan nếu cần

Hãy cho tôi biết điểm nhập và mục tiêu khi bạn sẵn sàng bắt đầu thu thập kiến thức.
