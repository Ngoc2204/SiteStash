import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebPro - Dịch Vụ Thiết Kế Website Chuyên Nghiệp | Bán Hàng Chỉ Sau 24h",
  description:
    "Kho website mẫu chuẩn SEO, đa dạng ngành nghề. Trải nghiệm trực tiếp qua Live Demo Viewer và sở hữu website chuyên nghiệp chỉ sau 24 giờ.",
  keywords: [
    "thiết kế website",
    "webpro",
    "sitestash",
    "mẫu website đẹp",
    "thuê website",
    "waas",
    "live demo viewer",
  ],
  authors: [{ name: "WebPro Team" }],
  openGraph: {
    title: "WebPro - Dịch Vụ Thiết Kế Website Chuyên Nghiệp",
    description: "Website đẹp đẳng cấp, bán hàng chỉ sau 24 giờ.",
    url: "https://sitestash.vercel.app",
    siteName: "WebPro",
    locale: "vi_VN",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#060814",
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
      <body className="antialiased selection:bg-purple-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
