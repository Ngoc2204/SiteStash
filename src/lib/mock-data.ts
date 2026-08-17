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
    name: "Y tế & Nha Khoa",
    slug: "nha-khoa-tham-my",
    description: "Giao diện chuẩn y khoa cho phòng khám nha khoa, thẩm mỹ viện và bác sĩ chuyên khoa",
    icon: "Stethoscope",
  },
  {
    id: "cat-2",
    name: "F&B & Ẩm Thực",
    slug: "f-and-b-am-thuc",
    description: "Website sang trọng dành cho nhà hàng, quán cà phê, tiệm bánh và quán ăn",
    icon: "UtensilsCrossed",
  },
  {
    id: "cat-3",
    name: "Bất Động Sản",
    slug: "bat-dong-san",
    description: "Trưng bày dự án cao cấp, biệt thự, căn hộ và sàn môi giới nhà đất",
    icon: "Building2",
  },
  {
    id: "cat-4",
    name: "Thời Trang & E-Commerce",
    slug: "thoi-trang-lifestyle",
    description: "Cửa hàng bán lẻ trực tuyến, lookbook thời trang, phụ kiện và mỹ phẩm",
    icon: "ShoppingBag",
  },
  {
    id: "cat-5",
    name: "Công Nghệ & SaaS",
    slug: "saas-cong-nghe",
    description: "Landing page giới thiệu phần mềm, ứng dụng di động và giải pháp số B2B",
    icon: "Laptop",
  },
  {
    id: "cat-6",
    name: "Agency & Sáng Tạo",
    slug: "agency-sang-tao",
    description: "Portfolio sáng tạo, studio thiết kế, agency quảng cáo và truyền thông",
    icon: "Palette",
  },
];

export const INITIAL_TEMPLATES: TemplateData[] = [
  {
    id: "tpl-1",
    title: "Nha Khoa Thẩm Mỹ Pro",
    slug: "nha-khoa-tham-my-pro",
    description: "Mẫu website chuẩn hóa cho các viện nha khoa quốc tế, phòng khám răng hàm mặt và trung tâm thẩm mỹ nụ cười. Tích hợp đặt lịch online thông minh, bảng giá niêm yết rõ ràng và hiển thị hình ảnh trước/sau điều trị.",
    categoryId: "cat-1",
    thumbnailUrl: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/dental",
    priceMonthly: 250000,
    priceLifetime: 2500000,
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    features: [
      "Hệ thống đặt lịch khám Online 24/7",
      "Bảng giá dịch vụ phân tầng trực quan",
      "Tích hợp Hotline / Chat Zalo OA nổi",
      "Tối ưu SEO Y Tế đạt chuẩn Google Core Web Vitals",
      "Trình so sánh ảnh Trước / Sau dịch vụ",
      "Tương thích 100% màn hình di động",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 1420,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-2",
    title: "Artisan Coffee & Bistro",
    slug: "artisan-coffee-bistro",
    description: "Giao diện mang phong cách ấm cúng, sang trọng dành cho chuỗi cà phê specialty, bistro và nhà hàng ẩm thực cao cấp. Nổi bật với menu điện tử QR code, gallery không gian quán và đặt bàn nhanh chóng.",
    categoryId: "cat-2",
    thumbnailUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/restaurant",
    priceMonthly: 220000,
    priceLifetime: 2200000,
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    features: [
      "Menu số hóa phân loại món & hình ảnh bắt mắt",
      "Module Đặt bàn trực tuyến có xác nhận SMS/Email",
      "Tích hợp bản đồ Google Maps và hướng dẫn chỉ đường",
      "Banner thông báo sự kiện / Mini acoustic show",
      "Giao diện tông màu Dark & Warm Amber ấm cúng",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 980,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-3",
    title: "Grand Horizon Luxury Estate",
    slug: "grand-horizon-estate",
    description: "Website đẳng cấp dành cho môi giới bất động sản cao cấp, các dự án villa, căn hộ hạng sang và khu đô thị nghỉ dưỡng. Thiết kế tối giản, hình ảnh full-width và biểu mẫu tải báo giá.",
    categoryId: "cat-3",
    thumbnailUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/realestate",
    priceMonthly: 350000,
    priceLifetime: 3500000,
    techStack: ["Next.js 15", "Tailwind CSS", "TypeScript", "Lucide"],
    features: [
      "Bộ lọc tìm kiếm dự án theo vị trí & mức giá",
      "Công cụ ước tính lãi suất vay ngân hàng trực quan",
      "Khung tải Brochure PDF & Mặt bằng tầng 3D",
      "Form hẹn lịch tham quan nhà mẫu VIP",
      "Hiệu ứng Glassmorphism & Parallax Scroll mượt mà",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 1850,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-4",
    title: "Aura Studio & Fashion Boutique",
    slug: "aura-fashion-boutique",
    description: "Mẫu website thương mại thời trang tối giản, sang trọng phong cách Scandinavian. Tối ưu trải nghiệm mua sắm trên thiết bị di động, giỏ hàng nhanh, lookbook tương tác chuyển động nhẹ nhàng.",
    categoryId: "cat-4",
    thumbnailUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1445205170230-053b83016050?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/fashion",
    priceMonthly: 290000,
    priceLifetime: 2900000,
    techStack: ["Next.js 15", "Tailwind CSS", "Zustand", "Lucide"],
    features: [
      "Lookbook bộ sưu tập theo mùa tương tác cao",
      "Lọc sản phẩm theo size, màu sắc, khoảng giá",
      "Giỏ hàng Drawer mượt mà & Checkout 1 bước",
      "Đồng hồ đếm ngược Flash Sale tăng chuyển đổi",
      "Tích hợp mã giảm giá và popup đăng ký nhận tin",
    ],
    isFeatured: false,
    isActive: true,
    viewCount: 1120,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-5",
    title: "Nova Cloud SaaS Platform",
    slug: "nova-saas-platform",
    description: "Giao diện Landing Page chuẩn Silicon Valley dành cho các ứng dụng công nghệ, nền tảng SaaS, AI Tool và phần mềm B2B. Có sẵn bảng giá định kỳ, so sánh tính năng và đánh giá khách hàng.",
    categoryId: "cat-5",
    thumbnailUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/saas",
    priceMonthly: 320000,
    priceLifetime: 3200000,
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion", "TypeScript"],
    features: [
      "Bảng chuyển đổi giá Tháng / Năm linh hoạt (Tiết kiệm 20%)",
      "Biểu đồ tương tác & Mockup phần mềm chân thực",
      "Module Khách hàng đối tác (Logo marquee)",
      "Section FAQ Accordion chuẩn SEO Schema",
      "Hệ thống nút Call-To-Action tỷ lệ click cao",
    ],
    isFeatured: true,
    isActive: true,
    viewCount: 2100,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: "tpl-6",
    title: "Zenith Creative Agency",
    slug: "zenith-creative-agency",
    description: "Bộ nhận diện website sáng tạo, phong cách Awwwards đoạt giải cho các Digital Agency, Studio nhiếp ảnh và Designer tự do. Hiệu ứng chuyển động mượt mà, trình diễn Case Study hoành tráng.",
    categoryId: "cat-6",
    thumbnailUrl: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    galleryUrls: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    ],
    demoUrl: "/demo/agency",
    priceMonthly: 280000,
    priceLifetime: 2800000,
    techStack: ["Next.js 15", "Tailwind CSS", "Framer Motion"],
    features: [
      "Trình diễn Case Study với video mockup và số liệu",
      "Form gửi yêu cầu Brief dự án thông minh",
      "Hiệu ứng Hover phát sáng & Con trỏ tùy biến",
      "Tối ưu tốc độ tải trang 100 điểm Performance",
      "Bố cục phá cách ấn tượng tạo dấu ấn thương hiệu",
    ],
    isFeatured: false,
    isActive: true,
    viewCount: 1650,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

export const INITIAL_ORDERS: RentalOrderData[] = [
  {
    id: "ord-1",
    customerName: "Trần Văn Minh",
    customerPhone: "0912345678",
    customerEmail: "minh.tran@dentalhub.vn",
    customerNote: "Cần hỗ trợ cấu hình thêm màu nhận diện thương hiệu xanh navy và gắn tên miền riêng.",
    templateId: "tpl-1",
    planType: "YEARLY",
    customDomain: "nhakhoaminh.vn",
    status: "PROCESSING",
    adminNotes: "Đã gọi điện tư vấn lúc 10:30, khách đã chuyển khoản cọc gói 1 năm.",
    createdAt: new Date(Date.now() - 86400000 * 2).toISOString(),
    updatedAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: "ord-2",
    customerName: "Nguyễn Thị Thảo",
    customerPhone: "0988776655",
    customerEmail: "thao.boutique@gmail.com",
    customerNote: "Muốn thuê theo tháng thử nghiệm trước, có menu quần áo hè.",
    templateId: "tpl-4",
    planType: "MONTHLY",
    customDomain: "auraboutique.com",
    status: "ACTIVE",
    adminNotes: "Đã bàn giao website và tài khoản quản trị ngày 15/08.",
    createdAt: new Date(Date.now() - 86400000 * 5).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 4).toISOString(),
  },
  {
    id: "ord-3",
    customerName: "Lê Hoàng Nam",
    customerPhone: "0903112233",
    customerEmail: "nam.grandestate@gmail.com",
    customerNote: "Tư vấn gói mua đứt mã nguồn để công ty tự host trên server riêng.",
    templateId: "tpl-3",
    planType: "LIFETIME",
    customDomain: null,
    status: "CONTACTED",
    adminNotes: "Đã gửi hợp đồng bàn giao mã nguồn qua email, hẹn chốt ngày mai.",
    createdAt: new Date(Date.now() - 86400000 * 1).toISOString(),
    updatedAt: new Date(Date.now() - 86400000 * 1).toISOString(),
  },
  {
    id: "ord-4",
    customerName: "Đỗ Quốc Bảo",
    customerPhone: "0971239876",
    customerEmail: "bao.coffee@gmail.com",
    customerNote: "Cần tích hợp mã QR thanh toán MoMo và menu món signature.",
    templateId: "tpl-2",
    planType: "YEARLY",
    customDomain: "artisancoffee.vn",
    status: "PENDING",
    adminNotes: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];
