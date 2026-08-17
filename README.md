# 📑 SiteStash – Nền Tảng Trưng Bày & Cho Thuê Giao Diện Website Trọn Gói (WaaS)

> **Website-as-a-Service (WaaS) & Modern Template Marketplace Platform**  
> Xây dựng với **Next.js 15+ (App Router), React 19, TypeScript, Tailwind CSS, Prisma ORM & PostgreSQL**.

---

## 🌟 Giới thiệu tổng quan (Overview)

**SiteStash** giải quyết bài toán cốt lõi cho các doanh nghiệp vừa và nhỏ (SME, Chủ shop, Spa thẩm mỹ, Nhà hàng F&B, Phòng khám, Sàn bất động sản):
- **Không cần chi 15 - 30 triệu đồng** thuê agency thiết kế từ đầu với thời gian chờ đợi hàng tháng trời.
- **Trải nghiệm trực tiếp** qua trình xem thử đa thiết bị (**Live Demo Viewer** trên Desktop, Tablet iPad, Mobile iPhone) và quét mã QR Code trên smartphone thật trước khi quyết định.
- **Thuê trọn gói theo tháng / năm** chỉ từ **250.000₫/tháng**, miễn phí Hosting tốc độ cao, chứng chỉ bảo mật SSL, hỗ trợ bảo trì và cập nhật nội dung 24/7.
- **Bàn giao hoàn chỉnh trong 24 giờ** với cam kết vận hành 99.99%.

---

## 🚀 Các Tính Năng Nổi Bật (Key Features)

### 1. Phân hệ Khách hàng (Marketing & Showcase)
- ⚡ **Showcase Catalog:** Lọc tức thì theo danh mục ngành nghề, tìm kiếm Debounced thời gian thực và sắp xếp linh hoạt.
- 📱 **Interactive Live Demo Viewer (`/preview/[slug]`):**
  - Thanh điều khiển chuyển đổi nhanh màn hình **Desktop (100%)**, **Tablet (iPad bezel 768px)** và **Mobile (iPhone bezel 390px)**.
  - Tích hợp **QR Code Generator** cho phép quét mở ngay trên điện thoại thật.
  - Nút CTA **"Thuê mẫu này"** mở modal đăng ký nhanh.
- 💎 **Trang Chi Tiết Mẫu (`/templates/[slug]`):** Trình diễn gallery ảnh chụp màn hình, bảng thông số kỹ thuật, so sánh gói thuê và tính năng.
- 💳 **Bảng Giá Minh Bạch (`/pricing`):** So sánh gói Tháng, gói Năm (tiết kiệm 20% + tặng domain) và Mua đứt toàn bộ source code.

### 2. Hệ Thống Đặt Thuê & Bắn Thông Báo Telegram Bot
- 🛡️ **Form đặt thuê 2 lớp:** Validation Client & Server Actions với **Zod** & **React Hook Form**.
- 🤖 **Telegram Bot Notification Service:** Tự động gửi tin nhắn báo động tức thì (kèm họ tên, SĐT, email, gói thuê, domain) đến Telegram Group của Admin theo thời gian thực.
- 🎯 **Màn hình xác nhận hoàn tất:** Cung cấp mã theo dõi đơn hàng và hiệu ứng ăn mừng confetti.

### 3. Phân Hệ Quản Trị Hệ Thống (Admin Panel - `/admin`)
- 📊 **Dashboard KPI Overview:** Thống kê doanh thu định kỳ MRR, số lượng đơn chờ xử lý, biểu đồ lượt xem và leads mới.
- 🎨 **Quản lý Mẫu Website (CRUD):** Thêm mẫu mới, chỉnh sửa giá, upload ảnh mockup, gắn tags công nghệ, bật/tắt trạng thái hiển thị.
- 📦 **Quản lý Đơn Thuê & Leads:** Cập nhật trạng thái pipeline (*Chờ tiếp nhận ➔ Đã liên hệ ➔ Đang cấu hình ➔ Đang hoạt động ➔ Đã hủy*) và lưu ghi chú nội bộ.
- 📁 **Quản lý Danh mục Ngành nghề.**

---

## 🛠️ Kiến Trúc Công Nghệ (Tech Stack)

| Tầng (Layer) | Công nghệ sử dụng |
| :--- | :--- |
| **Framework** | **Next.js 15+ (App Router, RSC, Server Actions)** |
| **Giao diện & UI** | **React 19, TypeScript, Tailwind CSS, Lucide Icons** |
| **State Management** | **Zustand** (Live Demo Viewer store) |
| **Database & ORM** | **PostgreSQL + Prisma ORM** (với fail-safe in-memory cache) |
| **Form & Validation** | **React Hook Form + Zod** |
| **Automation** | **Telegram Webhook Bot API** |
| **SEO & Performance** | **Dynamic OpenGraph, Sitemap XML, Robots.txt, Google Core Web Vitals 95+** |

---

## 📁 Cấu Trúc Thư Mục (Project Structure)

```text
sitestash/
├── prisma/
│   ├── schema.prisma               # Schema PostgreSQL & Prisma Models
│   └── seed.ts                     # Script nạp dữ liệu mẫu
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/            # Phân hệ Showcase khách hàng (Home, Pricing, Contact)
│   │   ├── preview/[slug]/         # Interactive Live Demo Viewer Engine
│   │   ├── templates/[slug]/       # Trang thông số chi tiết 1 mẫu web
│   │   ├── demo/[templateType]/    # Các trang demo web nội bộ nhúng vào Iframe
│   │   ├── admin/                  # Phân hệ Quản trị (Dashboard, Templates, Orders, Categories)
│   │   ├── api/                    # API Endpoints (Health check, Webhook)
│   │   ├── layout.tsx              # Root Layout
│   │   ├── sitemap.ts              # XML Sitemap chuẩn SEO
│   │   └── robots.ts               # Robots.txt
│   ├── actions/                    # Server Actions (Order & Template mutations)
│   ├── components/
│   │   ├── ui/                     # Button, Input, Modal, Badge
│   │   ├── layout/                 # Navbar, Footer, AdminSidebar
│   │   ├── showcase/               # TemplateCard, CategoryFilter, SearchBar, RentalOrderModal
│   │   ├── preview/                # DeviceToolbar, DeviceFrame, QrCodeModal
│   │   └── admin/                  # OrdersManager, TemplatesManager, TemplateForm
│   ├── hooks/                      # Zustand store (use-preview-store.ts)
│   └── lib/                        # Prisma client, Telegram service, Utils, Mock data
├── .env.example
├── package.json
└── tailwind.config.ts
```

---

## ⚡ Hướng Dẫn Cài Đặt & Chạy Dự Án (Getting Started)

### 1. Clone source code
```bash
git clone https://github.com/Ngoc2204/SiteStash.git
cd SiteStash
```

### 2. Cài đặt các gói phụ thuộc
```bash
npm install
```

### 3. Cấu hình biến môi trường
Tạo file `.env` từ `.env.example`:
```env
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/sitestash?schema=public"
AUTH_SECRET="sitestash_super_secret_jwt_key_2026"
NEXT_PUBLIC_APP_URL="http://localhost:3000"

# Telegram Bot Notification (Tùy chọn)
TELEGRAM_BOT_TOKEN="your_telegram_bot_token"
TELEGRAM_CHAT_ID="your_telegram_chat_id"
```

### 4. Khởi tạo Prisma & Nạp dữ liệu mẫu (Seed Data)
```bash
npx prisma generate
npm run seed
```

### 5. Chạy môi trường Development
```bash
npm run dev
```
Mở trình duyệt truy cập: `http://localhost:3000`  
- Cổng khách hàng: `http://localhost:3000`
- Cổng quản trị Admin: `http://localhost:3000/admin/dashboard`

### 6. Build Production
```bash
npm run build
npm run start
```

---

## 📄 Bản Quyền & Giấy Phép (License)
Dự án được phát triển và phát hành dưới giấy phép MIT License.
