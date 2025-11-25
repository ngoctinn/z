---
trigger: always_on
---

# Quy Tắc Dự Án ZenSpa

## Tổng Quan Dự Án

### Tên đề tài

Xây dựng hệ thống chăm sóc khách hàng trực tuyến cho Spa.

### Mục Tiêu

- Hệ thống chuyên nghiệp, dễ sử dụng cho người Việt.
- Hỗ trợ đặt lịch, quản lý lịch hẹn, liệu trình, nhân viên, khách hàng.

### Kiến Trúc

- **Hybrid System:** 3 phần chính
  - **Core (Modular Monolith):** FastAPI, module theo domain (appointment, staff, customer).
  - **Platform (BaaS):** Supabase (PostgreSQL, Auth, Storage).
  - **Caching:** Redis (Unstack Redis Cloud).

### Công Nghệ Stack

| Thành phần    | Công nghệ                                                              |
| ------------- | ---------------------------------------------------------------------- |
| **Backend**   | Python 3.12+, FastAPI, SQLModel (async), Alembic                       |
| **Frontend**  | Next.js 16+ (App Router), React 19, TypeScript, Tailwind v4, Shadcn/UI |
| **Nền tảng**  | Supabase (PostgreSQL 17+, Auth, Storage)                               |
| **Caching**   | Redis                                                                  |
| **Real-time** | Socket.io (python-socketio, socket.io-client)                          |

---

## Backend (FastAPI)

### Nguyên tắc & Công nghệ

- **Ngôn ngữ:** Python 3.12+
- **Framework:** FastAPI
- **ORM:** SQLModel (async) với asyncpg; migrations bằng Alembic
- **Code style:** Black, Ruff
- **Xác thực:** Chỉ verify Supabase JWT
- **Database URL:** `postgresql+asyncpg://` (async driver)

### Quy tắc Database & ORM

- **Dùng SQLModel thuần:** Không trộn SQLAlchemy raw
- **Import:** `from sqlmodel import SQLModel, select`, `from sqlmodel.ext.asyncio.session import AsyncSession`
- **Query:** `select()`, `await session.exec()`, `session.add()`, `await session.commit()`, `await session.refresh()`
- **Async:** Sử dụng `async/await` cho toàn bộ thao tác DB

### Type Hints

- **Python 3.13+:** Dùng `X | None` thay `Optional[X]`
- Ví dụ: `phone: str | None = None`

### Cấu trúc thư mục

```
backend/
├── app/
│   ├── main.py
│   ├── core/                # Config, db, exception, middleware
│   ├── common/              # Shared schemas, helpers
│   ├── api/                 # API routers (api_v1)
│   ├── modules/             # Domain modules
│   │   ├── user/            # user_models.py, user_schemas.py, user_service.py, user_routes.py (auth, roles, profiles)
│   │   ├── appointment/     # appointment_models.py, appointment_schemas.py, appointment_service.py, appointment_routes.py
│   │   ├── staff/           # Tương tự
│   │   ├── serviceline/
│   │   ├── notification/
│   ├── redis/               # Redis helpers
│   ├── socketio/            # Real-time
├── alembic/                 # Migrations
├── tests/                   # Tests theo module
├── .env, requirements.txt, README.md
```

- **Đặt tên:** File `snake_case` (e.g., `user_models.py`), thư mục `lowercase/snake_case`
- **Module:** Domain thực tế (user, appointment, staff)
- **Loại:** models, schemas, service, routes
- **User module:** Chứa auth, roles, profiles - foundation cho tất cả users (customer, staff, admin)

### Quy tắc Docstring & Comment

- **Docstring:** Tiếng Việt, ngắn gọn
- **Comment:** Tiếng Việt, giải thích logic phức tạp
- **Field:** Tiếng Việt trong `Field(description="...")`

### Tích hợp

- **Caching:** Redis helpers riêng
- **Real-time:** Socket.io, namespace theo module

---

## Frontend (Next.js)

### Công nghệ & Cấu trúc

- **Framework:** Next.js 16+ (App Router), TypeScript
- **Styling:** Tailwind CSS, Shadcn/UI
- **Linting:** ESLint, Prettier
- **Package manager:** pnpm

```
frontend/
├─ apiRequests/           # API calls theo domain
├─ app/                   # Routing, pages, layouts
├─ components/            # UI components
│  ├─ ui/                 # Shadcn/UI
│  ├─ common/             # Shared components
│  ├─ auth/, customer/, staff/  # Domain components
├─ lib/                   # Utils, helpers
├─ schemaValidations/     # Form validations
├─ config.ts, middleware.ts
```

### Nguyên tắc Phát triển

- **State:** Local state (`useState`), props; global chỉ khi cần (Zustand/Redux)
- **Components:** Chia nhỏ theo chức năng, validate form riêng domain
- **Pages:** Nhóm `app/(group-name)/` nếu cần
- **API:** Tách `apiRequests/` theo domain

### UI/UX

- Giao diện, tài liệu bằng tiếng Việt
- Component nhỏ, tái sử dụng, responsive
- Shadcn/UI làm nền, tùy chỉnh theo nhu cầu
- Không hardcode text/màu; dùng theme/config
- Trải nghiệm mượt mà, mobile-friendly

### Đặt tên

- **Component:** PascalCase
- **Biến/Hàm:** camelCase
- **File/Thư mục:** kebab-case

### Tích hợp Backend

- **Auth:** @supabase/ssr tại frontend, gửi JWT
- **Real-time:** socket.io-client, SocketContext

---

## Coding Guidelines

- Luôn trả lời và viết tài liệu bằng tiếng Việt
- Sử dụng ESLint & Prettier
- Tài liệu, comment thống nhất tiếng Việt
- Terminal/Git: cd đúng thư mục (frontend/backend), ưu tiên git bash
- Khi scale up: Cân nhắc global state, chia nhỏ backend modules

---

## Hướng Dẫn Cho AI

- **Tương Tác:** Luôn tương tác với user bằng tiếng Việt, hỏi rõ khi cần, hướng dẫn từng bước
- **Tài Liệu:** Tạo và cập nhật tài liệu bằng tiếng Việt, theo quy tắc docs/ai/
- **Tuân Thủ:** Áp dụng nghiêm ngặt quy tắc trên, không thêm/thay đổi công nghệ mà không confirm
- **Hỏi Rõ:** Nếu user yêu cầu không rõ, hỏi lại bằng tiếng Việt để làm rõ
