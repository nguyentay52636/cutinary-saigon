# Project Architecture

## 📁 Cấu trúc dự án chuẩn Enterprise

Dự án được tổ chức theo **Feature-Based Architecture**, đáp ứng chuẩn doanh nghiệp với tính mở rộng và bảo trì cao.

## 🗂️ Cấu trúc thư mục

```
frontend/
├── app/                          # Next.js App Router
│   ├── (public)/                 # Public routes
│   ├── auth/                     # Auth routes
│   │   ├── login/
│   │   └── signup/
│   └── layout.tsx
│
├── features/                     # ✨ Business features
│   ├── auth/                    # Authentication feature
│   │   ├── components/
│   │   │   ├── LoginForm.tsx
│   │   │   ├── SignupForm.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   └── home/                    # Home page feature
│       ├── components/
│       │   ├── Feature/
│       │   ├── FeedBack/
│       │   ├── HeroCarousel/
│       │   ├── HomPages.tsx
│       │   └── Revenue/
│       └── index.ts
│
├── shared/                       # ✨ Shared resources
│   ├── components/              # Global UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── BrandLyftCarousel.tsx
│   │
│   ├── ui/                       # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── field.tsx
│   │   └── ...
│   │
│   └── lib/                      # Utilities
│       └── utils.ts
│
└── public/                       # Static assets
```

