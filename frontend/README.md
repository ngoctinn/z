# Frontend Foundation

Dự án này là nền tảng Frontend cho ứng dụng Spa Booking, được xây dựng với Next.js 16+, Tailwind CSS v4, và Shadcn/UI.

## Công Nghệ Sử Dụng

-   **Framework**: Next.js 16 (App Router)
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **UI Library**: Shadcn/UI
-   **Icons**: Lucide React
-   **Form Validation**: React Hook Form + Zod
-   **Toast Notifications**: Sonner

## Cấu Trúc Thư Mục

```
frontend/
├── app/
│   ├── components-test/    # Trang demo và test components
│   ├── globals.css         # Global styles & Theme variables
│   ├── layout.tsx          # Root layout (bao gồm Toaster)
│   └── page.tsx            # Landing page demo
├── components/
│   ├── common/             # Components tùy chỉnh (InputWithIcon, PasswordInput, ExampleForm)
│   └── ui/                 # Shadcn/UI components cơ bản
├── lib/
│   └── utils.ts            # Utility functions (cn, etc.)
└── public/                 # Static assets
```

## Hướng Dẫn Cài Đặt & Chạy

1.  **Cài đặt dependencies**:
    ```bash
    pnpm install
    ```

2.  **Chạy Dev Server**:
    ```bash
    npm run dev
    # Hoặc
    pnpm dev
    ```
    Truy cập [http://localhost:3000](http://localhost:3000).

3.  **Xem Demo Components**:
    Truy cập [http://localhost:3000/components-test](http://localhost:3000/components-test) để xem và kiểm thử các components đã cài đặt.

## Theme & UI

-   **Theme**: Sage Green & Beige (Spa/Wellness style).
-   **Dark Mode**: Hỗ trợ đầy đủ (Deep Green background).
-   **Components**: Đã tùy chỉnh `Toaster` (Sonner) với richColors và vị trí top-right.

## Components Tùy Chỉnh

-   `InputWithIcon`: Input có icon ở đầu/cuối.
-   `PasswordInput`: Input mật khẩu có nút ẩn/hiện.
-   `ExampleForm`: Form mẫu tích hợp validation đầy đủ.
