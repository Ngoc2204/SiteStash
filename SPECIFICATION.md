# 📑 TÀI LIỆU ĐẶC TẢ HỆ THỐNG: SITESTASH
> **Nền tảng Trưng bày, Trải nghiệm & Cho thuê Giao diện Website trọn gói (WaaS & Template Marketplace)**

---

## 1. TỔNG QUAN HỆ THỐNG & ĐỐI TƯỢNG SỬ DỤNG

### 1.1. Bối cảnh & Vấn đề giải quyết
* **Phía khách hàng (SME, Chủ shop, Quán ăn, Spa, Freelancer...):** Cần website hoạt động ngay để bán hàng / xây dựng thương hiệu nhưng không muốn chi 10 - 20 triệu đồng cho agency viết từ đầu. Họ sẵn sàng trả phí nhỏ định kỳ (200k - 500k/tháng) để có ngay web đẹp, trọn gói hosting, tên miền và bảo trì.
* **Phía đơn vị phát triển (Developer / Agency):** Tái sử dụng các mẫu giao diện chất lượng cao để cho thuê định kỳ hoặc bán bản quyền nhiều lần, tạo nguồn thu nhập thụ động bền vững và quản lý tập trung danh sách khách hàng.

### 1.2. Phân loại người dùng (User Personas)
1. **Khách hàng (Visitor / Client):**
   * Tìm kiếm và lọc mẫu website theo ngành nghề, phong cách thiết kế, công nghệ.
   * Trải nghiệm trực tiếp qua trình xem thử đa thiết bị (**Live Demo Viewer** trên Desktop, Tablet, Mobile).
   * Gửi yêu cầu đăng ký thuê theo tháng / năm hoặc mua đứt mã nguồn.
2. **Quản trị viên (Admin / Developer):**
   * Đăng tải, cập nhật và quản lý kho template (CRUD, trạng thái hiển thị, giá thuê).
   * Quản lý danh mục (Category) và thẻ phân loại (Tags).
   * Tiếp nhận, phân loại và cập nhật tiến độ xử lý đơn thuê từ khách hàng.
   * Theo dõi thống kê lượt xem (Views), lượt mở demo và tỷ lệ chuyển đổi (Conversion rate).

---

## 2. KIẾN TRÚC KỸ THUẬT & TECH STACK

| Tầng (Layer) | Công nghệ | Vai trò & Điểm sáng trong CV |
| :--- | :--- | :--- |
| **Framework** | **Next.js 15+ (App Router)** | Kiến trúc fullstack hiện đại, hỗ trợ **React Server Components (RSC)**, **Server Actions**, Streaming SSR và tối ưu SEO vượt trội. |
| **Giao diện & UI** | **React 19, TypeScript, Tailwind CSS v4** | Đảm bảo Type-safety 100%, responsive linh hoạt trên mọi kích thước màn hình, tốc độ render cực nhanh. |
| **Icons & Animation** | **Lucide React, Framer Motion** | Bộ icon chuẩn hóa, micro-interactions mượt mà cho trải nghiệm người dùng cao cấp. |
| **State Management** | **Zustand** | Quản lý state cho Live Demo Viewer (chọn thiết bị, chế độ xem, zoom). |
| **Database & ORM** | **PostgreSQL + Prisma ORM** | Mô hình hóa quan hệ dữ liệu chặt chẽ, type-safe queries, migration rõ ràng. |
| **Form & Validation** | **React Hook Form + Zod** | Validation 2 lớp (Client & Server Actions) chống dữ liệu rác và tấn công đầu vào. |
| **Xác thực (Auth)** | **NextAuth.js (Auth.js v5)** | Bảo vệ phân hệ Admin Dashboard bằng Session / JWT an toàn. |
| **Hệ thống Cảnh báo** | **Telegram Webhook Bot API** | Tự động bắn thông báo tức thì về điện thoại khi có đơn đăng ký thuê mới. |
| **Deploy & Hosting** | **Vercel + Supabase/Neon PostgreSQL** | Kiến trúc Serverless, triển khai tự động CI/CD qua GitHub. |

---

## 3. SƠ ĐỒ CẤU TRÚC THƯ MỤC DỰ ÁN (PROJECT ARCHITECTURE)

```text
sitestash/
├── prisma/
│   ├── schema.prisma               # Schema PostgreSQL & Model relations
│   └── seed.ts                     # Dữ liệu mẫu (Categories & Templates)
├── public/
│   ├── templates/                  # Ảnh thumbnail & Mockup giao diện
│   └── logo.svg
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── (marketing)/            # Phân hệ dành cho khách hàng
│   │   │   ├── page.tsx            # Trang chủ Showcase (Hero, Filter, Featured)
│   │   │   ├── templates/          # Trang danh sách toàn bộ mẫu web
│   │   │   │   └── [slug]/page.tsx # Trang chi tiết thông số 1 mẫu web
│   │   │   ├── pricing/page.tsx    # Bảng giá thuê & so sánh các gói
│   │   │   └── contact/page.tsx    # Trang liên hệ tư vấn
│   │   ├── preview/
│   │   │   └── [slug]/page.tsx     # Live Demo Viewer (Iframe đa thiết bị)
│   │   ├── admin/                  # Phân hệ Quản trị (Protected Routes)
│   │   │   ├── layout.tsx          # Admin Sidebar & Header Layout
│   │   │   ├── dashboard/page.tsx  # Thống kê tổng quan & Leads mới
│   │   │   ├── templates/          # Quản lý kho mẫu (Thêm/Sửa/Xóa)
│   │   │   │   ├── page.tsx        # Danh sách mẫu dạng bảng
│   │   │   │   ├── new/page.tsx    # Form tạo mẫu mới
│   │   │   │   └── [id]/page.tsx   # Form chỉnh sửa mẫu
│   │   │   └── orders/page.tsx     # Quản lý đơn thuê & cập nhật trạng thái
│   │   ├── api/                    # API Endpoints (Webhook Telegram, Health check)
│   │   ├── layout.tsx              # Root Layout
│   │   └── not-found.tsx
│   ├── components/                 # UI Components
│   │   ├── ui/                     # Button, Input, Modal, Badge, Dropdown, Tabs
│   │   ├── layout/                 # Navbar, Footer, AdminSidebar
│   │   ├── showcase/               # TemplateCard, CategoryFilter, SearchBar, SortSelect
│   │   └── preview/                # DeviceFrame, DeviceToolbar (Desktop/Tablet/Mobile), QrCodeModal
│   ├── actions/                    # Server Actions (Xử lý logic Server & Mutation DB)
│   │   ├── template.actions.ts     # Thêm / Cập nhật / Xóa template
│   │   └── order.actions.ts        # Tạo đơn thuê & Gửi thông báo Telegram
│   ├── lib/                        # Thư viện tiện ích
│   │   ├── db.ts                   # Prisma Client Singleton
│   │   ├── telegram.ts             # Service gửi tin nhắn Telegram Bot
│   │   └── utils.ts                # Format tiền tệ VND, Slugify, Date helper
│   ├── types/                      # Định nghĩa TypeScript Interfaces & Types
│   └── hooks/                      # Custom React Hooks
├── .env.example                    # File cấu hình biến môi trường mẫu
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

---

## 4. THIẾT KẾ CƠ SỞ DỮ LIỆU (DATABASE SCHEMA - PRISMA)

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

generator client {
  provider = "prisma-client-js"
}

// 1. Quản trị viên hệ thống
model User {
  id        String   @id @default(uuid())
  email     String   @unique
  password  String   // Mật khẩu đã hash (bcrypt / argon2)
  name      String
  role      String   @default("ADMIN") // ADMIN, STAFF
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

// 2. Danh mục ngành nghề (F&B, Bất động sản, Spa, E-Commerce, Portfolio...)
model Category {
  id          String     @id @default(uuid())
  name        String     @unique
  slug        String     @unique
  description String?
  icon        String?    // Tên Lucide icon
  templates   Template[]
  createdAt   DateTime   @default(now())
}

// 3. Mẫu website (Template)
model Template {
  id            String         @id @default(uuid())
  title         String
  slug          String         @unique
  description   String         @db.Text
  categoryId    String
  category      Category       @relation(fields: [categoryId], references: [id])
  
  thumbnailUrl  String         // Ảnh đại diện chất lượng cao
  galleryUrls   String[]       // Danh sách ảnh chụp màn hình chi tiết
  demoUrl       String         // Đường dẫn Live Demo thực tế (chạy trong Iframe)
  
  priceMonthly  Int            // Giá thuê theo tháng (VND, ví dụ: 250000)
  priceLifetime Int?           // Giá mua trọn gói mã nguồn (VND, ví dụ: 2500000)
  
  techStack     String[]       // Ví dụ: ["Next.js", "TailwindCSS", "PostgreSQL"]
  features      String[]       // Tính năng: ["Chuẩn SEO 100%", "Giỏ hàng", "Đặt lịch Online"]
  
  isFeatured    Boolean        @default(false)
  isActive      Boolean        @default(true)
  viewCount     Int            @default(0)
  
  orders        RentalOrder[]
  createdAt     DateTime       @default(now())
  updatedAt     DateTime       @updatedAt

  @@index([slug])
  @@index([categoryId])
}

// 4. Đơn đăng ký thuê / Khách hàng tiềm năng (Leads & Orders)
model RentalOrder {
  id             String      @id @default(uuid())
  customerName   String
  customerPhone  String      // Số điện thoại / Zalo để liên hệ
  customerEmail  String
  customerNote   String?     @db.Text
  
  templateId     String
  template       Template    @relation(fields: [templateId], references: [id])
  
  planType       String      // "MONTHLY" (Thuê tháng), "YEARLY" (Thuê năm), "LIFETIME" (Mua đứt)
  customDomain   String?     // Tên miền khách muốn gán (nếu có)
  status         OrderStatus @default(PENDING)
  
  adminNotes     String?     @db.Text
  createdAt      DateTime    @default(now())
  updatedAt      DateTime    @updatedAt

  @@index([status])
}

enum OrderStatus {
  PENDING      // Chờ tiếp nhận
  CONTACTED    // Đã gọi điện tư vấn
  PROCESSING   // Đang cấu hình & bàn giao
  ACTIVE       // Đang chạy thực tế (Khách đang thuê)
  CANCELLED    // Hủy đơn
}
```

---

## 5. CÁC TÍNH NĂNG VÀ LUỒNG NGHIỆP VỤ CỐT LÕI (CORE FLOWS)

```text
[ Khách hàng xem Catalog ] 
          │
          ├──> [ Mở Live Demo Viewer (Iframe Desktop/Tablet/Mobile) ]
          │                  │
          │                  └──> [ Nhấn "Thuê mẫu này" ]
          │                               │
          └──> [ Trang Chi Tiết Mẫu ] ───> [ Điền Form Thuê / Đặt hàng ]
                                                 │
                                                 ▼
                                     [ Server Action xử lý ]
                                                 │
                     ┌───────────────────────────┴───────────────────────────┐
                     ▼                                                       ▼
           [ Lưu vào PostgreSQL ]                               [ Bắn Bot Telegram báo Admin ]
                     │
                     ▼
           [ Hiển thị màn hình thành công ]
```

### 5.1. Phân hệ Khám phá & Trình xem thử giao diện (Showcase & Live Demo Engine)
* **Showcase Catalog:**
  * Bộ lọc tức thì theo Danh mục, Sắp xếp (*Mới nhất, Xem nhiều nhất, Giá thấp -> cao*).
  * Ô tìm kiếm phản hồi nhanh với kỹ thuật **Debounced Search** và cập nhật URL query params không reload trang.
* **Live Demo Viewer (`/preview/[slug]`):**
  * Tích hợp thanh điều khiển trên cùng (Sticky Header):
    * **Desktop Mode:** Chiều rộng 100%.
    * **Tablet Mode:** Thu nhỏ khung hình chuẩn `768px x 1024px` với viền giả lập iPad.
    * **Mobile Mode:** Thu nhỏ khung hình chuẩn `375px x 667px` với viền giả lập iPhone.
    * **QR Code Generator:** Tạo mã QR tự động để quét điện thoại thật và mở link demo trên mobile.
    * **CTA Thuê ngay:** Luôn hiển thị nút "Thuê mẫu này" kèm giá ưu đãi để kích thích chuyển đổi.
  * Iframe được cấu hình `sandbox` an toàn, có hiệu ứng Skeleton Loading khi tải trang demo.

### 5.2. Luồng Đăng ký thuê & Thông báo tức thì (Rental Order & Telegram Bot)
1. Khách hàng lựa chọn gói:
   * **Gói Tháng (250.000đ/tháng):** Miễn phí hosting, SSL, bảo trì.
   * **Gói Năm (2.400.000đ/năm - Tiết kiệm 20%):** Tặng kèm tên miền quốc tế `.com/.net`.
   * **Mua trọn gói (2.500.000đ):** Bàn giao toàn bộ mã nguồn.
2. Khách điền Form thông tin (Họ tên, SĐT/Zalo, Email, Tên miền mong muốn, Yêu cầu tùy chỉnh).
3. Hệ thống xử lý qua **Next.js Server Action**:
   * Xác thực dữ liệu bằng **Zod**.
   * Lưu đơn vào bảng `RentalOrder` trong PostgreSQL.
   * Gửi tin nhắn tự động tức thì đến **Telegram Group** của Admin qua Bot API:
     ```text
     🚀 [SITESTASH] CÓ ĐƠN THUÊ WEB MỚI!
     ---------------------------------
     👤 Khách hàng: Trần Văn Minh (0912.345.678)
     📧 Email: minh.tran@gmail.com
     🎨 Mẫu web: Nha Khoa Thẩm Mỹ Pro (#NK-02)
     📦 Gói đăng ký: Thuê 1 năm (Tặng tên miền)
     🌐 Tên miền mong muốn: nhakhoaminh.vn
     📝 Ghi chú: Cần hỗ trợ thay đổi bảng giá dịch vụ
     ---------------------------------
     ⏱️ Thời gian: 21:15 - 17/08/2026
     ```
   * Trả về phản hồi thành công và điều hướng sang trang xác nhận đơn.

### 5.3. Phân hệ Quản trị (Admin Dashboard)
* **Dashboard Overview:** Thống kê tổng số mẫu, số đơn mới trong ngày/tuần, doanh thu dự kiến, biểu đồ lượt click xem demo.
* **Quản lý Mẫu web:** Form thêm/sửa trực quan (nhập tags, mảng tính năng, upload ảnh, bật/tắt hiển thị).
* **Quản lý Đơn thuê:** Bảng dữ liệu Kanban/Table theo dõi tình trạng đơn: *Chờ tiếp nhận ➔ Đã liên hệ ➔ Đang cấu hình ➔ Đang hoạt động*.

---

## 6. KẾ HOẠCH PHÂN RÃ CÔNG VIỆC (WORK BREAKDOWN STRUCTURE - WBS)

```
[ Giai đoạn 1: Khởi tạo & Database ] ──► [ Giai đoạn 2: Showcase & Catalog ]
                 │                                        │
                 ▼                                        ▼
[ Giai đoạn 4: Đặt thuê & Telegram ] ◄── [ Giai đoạn 3: Live Demo Viewer ]
                 │
                 ▼
[ Giai đoạn 5: Admin Dashboard ] ─────► [ Giai đoạn 6: SEO & Deploy ]
```

### Chi tiết các Sprint:
* **Sprint 1: Khởi tạo dự án & Database (1 - 2 ngày)**
  * Khởi tạo dự án Next.js 15 (TypeScript, Tailwind CSS v4, Lucide React).
  * Cài đặt Prisma ORM, kết nối PostgreSQL (Supabase / Neon).
  * Viết migration và file `seed.ts` nạp sẵn 5 danh mục + 6 mẫu website mẫu.
* **Sprint 2: Giao diện Trang chủ & Showcase (2 ngày)**
  * Xây dựng Header, Hero Section với hiệu ứng hiện đại, Footer.
  * Xây dựng Component `TemplateCard`, `CategoryFilter`, `SearchBar`.
  * Tích hợp lọc và tìm kiếm mượt mà qua URL Query Parameters.
* **Sprint 3: Trình xem Demo Iframe Engine (1 - 2 ngày)**
  * Xây dựng trang `/preview/[slug]`.
  * Code thanh `DeviceToolbar` chuyển đổi kích thước (Desktop/Tablet/Mobile).
  * Tích hợp Modal hiển thị mã QR Code cho thiết bị di động thật.
* **Sprint 4: Trang Chi tiết Mẫu & Form Thuê Web (2 ngày)**
  * Xây dựng trang `/templates/[slug]` với bảng thông số kỹ thuật, tính năng nổi bật, FAQ.
  * Xây dựng Form đặt thuê với React Hook Form + Zod.
  * Viết Server Action lưu DB và tích hợp Telegram Webhook Notification.
* **Sprint 5: Admin Panel & CRUD Management (2 - 3 ngày)**
  * Thiết lập Auth bảo vệ toàn bộ route `/admin/*`.
  * Xây dựng Dashboard thống kê số lượng đơn và lượt xem.
  * Xây dựng bảng quản lý Template (Thêm mới, Chỉnh sửa, Ẩn/Hiện).
  * Xây dựng bảng quản lý Đơn thuê và cập nhật trạng thái đơn hàng.
* **Sprint 6: Tối ưu SEO, Animation & Triển khai (1 - 2 ngày)**
  * Cấu hình Dynamic OpenGraph Image & Metadata chuẩn SEO.
  * Tối ưu Google Lighthouse (Performance, Accessibility > 90 điểm).
  * Triển khai Production lên Vercel + Neon DB.
  * Viết tài liệu `README.md` chuyên nghiệp trên GitHub.

---

## 7. CHIẾN LƯỢC TRÌNH BÀY DỰ ÁN TRONG CV & PHỎNG VẤN

### Cách viết vào CV (Bullet Points đắt giá):
> **SiteStash – Website Template Marketplace & Rental Platform (Next.js, TypeScript, PostgreSQL)**  
> *Live Demo: `https://sitestash.vercel.app` | GitHub: `github.com/yourname/sitestash`*  
> * Thiết kế và triển khai nền tảng thương mại dịch vụ cho thuê và trưng bày website dựng sẵn theo mô hình **Website-as-a-Service (WaaS)**.
> * **Frontend Engineering:** Xây dựng trình xem trước giao diện trực tiếp (**Interactive Live Demo Viewer**) với khung giả lập Responsive đa thiết bị (Desktop, Tablet, Mobile) và tính năng tạo mã QR Code thời gian thực.
> * **Backend & Server Architecture:** Tận dụng **React Server Components (RSC)** và **Next.js Server Actions** kết hợp **Zod validation** để giảm thiểu client bundle size và bảo mật quy trình gửi dữ liệu; quản lý cơ sở dữ liệu quan hệ với **PostgreSQL** và **Prisma ORM**.
> * **Automation System:** Tích hợp hệ thống thông báo tức thì qua **Telegram Bot API**, tự động gửi dữ liệu đơn đặt thuê mới đến quản trị viên theo thời gian thực.
> * **SEO & Web Vitals:** Đạt điểm Google Lighthouse 95+ thông qua Dynamic OpenGraph Metadata, tối ưu hình ảnh với `next/image` và chiến lược cache dữ liệu hiệu quả.

---
*Tài liệu được khởi tạo và phê duyệt cho dự án **SiteStash**.*
