export interface CategoryData {
  id: string;
  name: string;
  slug: string;
  description: string;
  icon: string;
}

export interface TemplateData {
  id: string;
  title: string;
  slug: string;
  description: string;
  categoryId: string;
  category?: CategoryData;
  thumbnailUrl: string;
  galleryUrls: string[];
  demoUrl: string;
  priceMonthly: number;
  priceLifetime: number;
  techStack: string[];
  features: string[];
  isFeatured: boolean;
  isActive: boolean;
  viewCount: number;
  createdAt: string;
  updatedAt: string;
}

export interface RentalOrderData {
  id: string;
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerNote?: string | null;
  templateId: string;
  template?: TemplateData;
  planType: "MONTHLY" | "YEARLY" | "LIFETIME";
  customDomain?: string | null;
  status: "PENDING" | "CONTACTED" | "PROCESSING" | "ACTIVE" | "CANCELLED";
  adminNotes?: string | null;
  createdAt: string;
  updatedAt: string;
}

export const INITIAL_CATEGORIES: CategoryData[] = [
  {
    id: "cat-1",
    name: "Bán hàng",
    slug: "ban-hang",
    description: "Cửa hàng bán lẻ trực tuyến, lookbook thời trang và thương mại điện tử",
    icon: "ShoppingBag",
  },
  {
    id: "cat-2",
    name: "Doanh nghiệp",
    slug: "doanh-nghiep",
    description: "Website giới thiệu công ty, nội thất, dịch vụ doanh nghiệp và SaaS",
    icon: "Building2",
  },
  {
    id: "cat-3",
    name: "Spa - Làm đẹp",
    slug: "spa-lam-dep",
    description: "Thẩm mỹ viện, phòng khám nha khoa, spa chăm sóc sắc đẹp",
    icon: "Sparkles",
  },
  {
    id: "cat-4",
    name: "Nhà hàng",
    slug: "nha-hang",
    description: "Nhà hàng ẩm thực cao cấp, chuỗi quán cà phê và ẩm thực 5 sao",
    icon: "UtensilsCrossed",
  },
  {
    id: "cat-5",
    name: "Bất động sản",
    slug: "bat-dong-san",
    description: "Sàn giao dịch bất động sản, villa, căn hộ và dự án cao cấp",
    icon: "Building",
  },
  {
    id: "cat-6",
    name: "Giáo dục",
    slug: "giao-duc",
    description: "Trung tâm đào tạo, học viện trực tuyến và trường học",
    icon: "Laptop",
  },
];

export const INITIAL_TEMPLATES: TemplateData[] = [
  {
    id: "tpl-1",
    title: "Nội Thất Cao Cấp",
    slug: "noi-that-cao-cap",
    description: "Thiết kế sang trọng, hiện đại",
    categoryId: "cat-2",
    thumbnailUrl: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/agency",
    priceMonthly: 250000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    features: [
      "Giao diện chuẩn phong cách Bắc Âu sang trọng",
      "Bộ sưu tập dự án thiết kế nội thất 3D",
      "Form nhận báo giá thiết kế & thi công",
      "Chuẩn SEO Google 100%",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 1820,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-2",
    title: "Phòng Khám Đa Khoa",
    slug: "phong-kham-da-khoa",
    description: "Chuẩn SEO, đặt lịch thông minh",
    categoryId: "cat-3",
    thumbnailUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/dental",
    priceMonthly: 250000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    features: [
      "Hệ thống đặt lịch khám Online 24/7",
      "Bảng giá dịch vụ phân tầng trực quan",
      "Tích hợp Hotline / Chat Zalo OA nổi",
      "Tối ưu SEO Y Tế đạt chuẩn Google Core Web Vitals",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 2450,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-3",
    title: "Nhà Hàng 5 Sao",
    slug: "nha-hang-5-sao",
    description: "Giao diện tinh tế, đặt bàn online",
    categoryId: "cat-4",
    thumbnailUrl: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/restaurant",
    priceMonthly: 220000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    features: [
      "Thực đơn món ăn chuẩn ẩm thực thượng hạng",
      "Hệ thống đặt bàn trực tuyến thông minh",
      "Tích hợp Google Map chỉ đường",
      "Dark & Gold Luxury Theme",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 1680,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-4",
    title: "Thẩm Mỹ Viện",
    slug: "tham-my-vien",
    description: "Tối ưu chuyển đổi, thu hút khách hàng",
    categoryId: "cat-3",
    thumbnailUrl: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/dental",
    priceMonthly: 280000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "Zustand"],
    features: [
      "So sánh ảnh trước/sau điều trị thẩm mỹ",
      "Form nhận ưu đãi voucher khuyến mãi",
      "Tích hợp hotline & chat box đa kênh",
      "Tone màu Pastel sang trọng, thu hút phái đẹp",
    ],
    isFeatured: false,
    isActive: true,
    viewCount: 1940,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-5",
    title: "Thời Trang Nam",
    slug: "thoi-trang-nam",
    description: "Bán hàng chuyên nghiệp, dễ dùng",
    categoryId: "cat-1",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/fashion",
    priceMonthly: 250000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    features: [
      "Lookbook thời trang nam lịch lãm",
      "Giỏ hàng nhanh và bộ lọc size/màu",
      "Đếm ngược Flash Sale kích thích mua sắm",
      "Tối ưu 100% cho mobile checkout",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 2200,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-6",
    title: "Bất Động Sản",
    slug: "bat-dong-san",
    description: "Tìm kiếm thông minh, map tích hợp",
    categoryId: "cat-5",
    thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/realestate",
    priceMonthly: 350000,
    priceLifetime: 4900000,
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript"],
    features: [
      "Bộ lọc dự án bất động sản chi tiết",
      "Công cụ tính lãi suất vay ngân hàng",
      "Mặt bằng 3D và tài liệu brochure",
      "Form hẹn lịch tham quan nhà mẫu VIP",
    ],
    isFeatured: false,
    isActive: true,
    viewCount: 2850,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const INITIAL_ORDERS: RentalOrderData[] = [
  {
    id: "ord-1",
    customerName: "Trần Văn Minh",
    customerPhone: "0912345678",
    customerEmail: "minh.tran@gmail.com",
    customerNote: "Cần hỗ trợ cấu hình thêm màu nhận diện thương hiệu xanh navy và gắn tên miền riêng.",
    templateId: "tpl-2",
    planType: "YEARLY",
    customDomain: "nhakhoaminh.vn",
    status: "PROCESSING",
    adminNotes: "Đã gọi điện tư vấn lúc 10:30, khách đã chuyển khoản cọc gói 1 năm.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
];
