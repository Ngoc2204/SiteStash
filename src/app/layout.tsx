import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SiteStash - Nền Tảng Trưng Bày & Cho Thuê Giao Diện Website Trọn Gói (WaaS)",
  description:
    "Kho website mẫu chuẩn SEO, đa ngành nghề (Nha khoa, F&B, Bất động sản, Thời trang, SaaS). Trải nghiệm trực tiếp qua Live Demo Viewer và thuê trọn gói bao hosting từ 250k/tháng.",
  keywords: [
    "thuê website",
    "mua template website",
    "waas",
    "website as a service",
    "mẫu website đẹp",
    "thiết kế website giá rẻ",
    "sitestash",
    "live demo viewer",
  ],
  authors: [{ name: "SiteStash Team" }],
  openGraph: {
    title: "SiteStash - Nền Tảng Cho Thuê & Trưng Bày Website Trọn Gói",
    description:
      "Website đẹp đỉnh cao có ngay trong 24 giờ. Trải nghiệm trực tiếp trên điện thoại và máy tính trước khi thuê.",
    url: "https://sitestash.vercel.app",
    siteName: "SiteStash",
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SiteStash - Nền Tảng Cho Thuê Website Trọn Gói",
    description: "Trải nghiệm trực tiếp Live Demo Viewer và thuê website chuẩn SEO chỉ từ 250k/tháng.",
  },
};

export const viewport: Viewport = {
  themeColor: "#090d16",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="dark">
      <body className="antialiased selection:bg-primary/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
