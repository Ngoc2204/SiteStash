import React from "react";
import Link from "next/link";
import { Check, Sparkles, HelpCircle, ArrowRight, ShieldCheck, Zap, Server } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const metadata = {
  title: "Bảng Giá Thuê & Mua Website Trọn Gói - SiteStash",
  description: "So sánh chi tiết các gói thuê website theo tháng, theo năm (tặng tên miền) và mua đứt toàn bộ mã nguồn tại SiteStash.",
};

export default function PricingPage() {
  const tiers = [
    {
      name: "Gói Tháng Linh Hoạt",
      price: "Liên hệ",
      period: "",
      desc: "Phù hợp cho các dự án mới bắt đầu, quán ăn, shop bán hàng muốn thử nghiệm thị trường với chi phí tối ưu.",
      features: [
        "Miễn phí Cloud Server & Hosting tốc độ cao",
        "Chứng chỉ bảo mật SSL (HTTPS) xanh chuẩn",
        "Tự do lựa chọn trong kho giao diện SiteStash",
        "Thay đổi logo, màu sắc, thông tin liên hệ",
        "Sao lưu dữ liệu định kỳ hàng tuần",
        "Hỗ trợ kỹ thuật 24/7 qua Zalo / Hotline",
      ],
      cta: "Liên Hệ Ngay",
      popular: false,
      href: "/contact",
    },
    {
      name: "Gói Năm Tiết Kiệm",
      price: "Liên hệ",
      period: "",
      badge: "Tặng Tên Miền & Ưu Đãi Lớn",
      desc: "Gói được 85% khách hàng lựa chọn. Tối ưu chi phí, tặng kèm tên miền riêng và ưu tiên hỗ trợ vận hành.",
      features: [
        "TẤT CẢ TÍNH NĂNG CỦA GÓI THÁNG",
        "TẶNG 01 TÊN MIỀN QUỐC TẾ (.com / .net / .vn)",
        "Ưu đãi đặc biệt khi đăng ký trọn gói năm",
        "Tối ưu SEO On-Page chuẩn Google Core Web Vitals",
        "Hỗ trợ nhập 20 sản phẩm / dịch vụ đầu tiên",
        "Tích hợp Pixel Facebook, Google Analytics 4",
        "Kỹ thuật hỗ trợ ưu tiên phản hồi dưới 15 phút",
      ],
      cta: "Liên Hệ Ngay",
      popular: true,
      href: "/contact",
    },
    {
      name: "Mua Trọn Gói Source Code",
      price: "Liên hệ",
      period: "",
      desc: "Dành cho Developer, Agency hoặc doanh nghiệp muốn sở hữu 100% bản quyền mã nguồn để tự phát triển thêm.",
      features: [
        "Bàn giao 100% Full Source Code (Next.js, TypeScript)",
        "File thiết kế và Database Prisma Schema hoàn chỉnh",
        "Tài liệu hướng dẫn triển khai lên Vercel / VPS",
        "Quyền chỉnh sửa và tùy biến không giới hạn",
        "Không tốn bất kỳ chi phí duy trì hàng tháng",
        "Hỗ trợ cấu hình môi trường ban đầu",
      ],
      cta: "Liên Hệ Ngay",
      popular: false,
      href: "/contact",
    },
  ];

  const faqs = [
    {
      q: "Chi phí thuê đã bao gồm tiền Hosting và bảo trì chưa?",
      a: "Chính xác 100%! Giá thuê niêm yết đã trọn gói máy chủ Cloud Server tốc độ cao, chứng chỉ SSL bảo mật, sao lưu hàng tuần và bảo trì hệ thống. Bạn không phải trả thêm bất kỳ chi phí phát sinh nào.",
    },
    {
      q: "Sau khi đăng ký thì bao lâu website của tôi hoạt động?",
      a: "Website sẽ được kỹ thuật SiteStash cài đặt, gắn tên miền và bàn giao trong vòng 24 giờ kể từ khi tiếp nhận thông tin từ bạn.",
    },
    {
      q: "Tôi có thể chuyển đổi từ thuê theo tháng sang mua trọn gói mã nguồn không?",
      a: "Hoàn toàn được. Bất kỳ lúc nào bạn muốn sở hữu toàn bộ code để tự quản lý, SiteStash sẽ khấu trừ một phần chi phí thuê đã trả và bàn giao mã nguồn sạch cho bạn.",
    },
    {
      q: "Tôi muốn đổi sang mẫu giao diện khác trong quá trình thuê được không?",
      a: "Có, khách hàng thuê gói năm được hỗ trợ đổi mẫu giao diện miễn phí 01 lần trong năm để làm mới hình ảnh thương hiệu.",
    },
  ];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bảng Giá Minh Bạch & Tiết Kiệm</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Chọn Gói Dịch Vụ Phù Hợp Với Doanh Nghiệp Bạn
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Không phí ẩn, không cam kết ràng buộc phức tạp, hỗ trợ tận tâm từ chuyên viên kỹ thuật.
        </p>
      </div>

      {/* Tiers Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {tiers.map((tier) => (
          <div
            key={tier.name}
            className={`glass-card rounded-3xl p-8 flex flex-col justify-between relative border ${
              tier.popular
                ? "border-primary shadow-glow ring-1 ring-primary bg-slate-900/90"
                : "border-slate-800 bg-slate-900/60"
            }`}
          >
            {tier.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent-cyan text-white text-[11px] font-extrabold uppercase tracking-wider px-4 py-1 rounded-full shadow-lg">
                {tier.badge}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white">{tier.name}</h3>
                <p className="text-xs text-slate-400 mt-2 min-h-[36px]">{tier.desc}</p>
              </div>

              <div className="flex items-baseline gap-1 pt-2 border-t border-slate-800">
                <span className="text-3xl sm:text-4xl font-black text-white">
                  {tier.price}
                </span>
                <span className="text-xs text-slate-400 font-medium">{tier.period}</span>
              </div>

              {/* Feature list */}
              <div className="space-y-3 pt-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Quyền lợi bao gồm:
                </p>
                <ul className="space-y-2.5">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="pt-8">
              <Link href={tier.href}>
                <Button
                  variant={tier.popular ? "glow" : "secondary"}
                  size="lg"
                  className="w-full font-bold shadow-md"
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Comparison Highlights */}
      <div className="glass-panel rounded-3xl p-8 border border-slate-800 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-400 flex items-center justify-center mx-auto">
            <Server className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Hạ Tầng Cloud Cao Cấp</h4>
          <p className="text-xs text-slate-400">Máy chủ đặt tại Việt Nam cho tốc độ mở trang siêu tốc dưới 0.8 giây.</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mx-auto">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">An Toàn & Bảo Mật</h4>
          <p className="text-xs text-slate-400">Tự động chống DDoS và chứng chỉ bảo mật SSL cấp độ doanh nghiệp.</p>
        </div>
        <div className="space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mx-auto">
            <Zap className="w-5 h-5" />
          </div>
          <h4 className="text-sm font-bold text-white">Bàn Giao & Hỗ Trợ 24/7</h4>
          <p className="text-xs text-slate-400">Đội ngũ kỹ thuật hỗ trợ xuyên suốt cả ngày lễ và cuối tuần qua Zalo.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-8 pt-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Câu Hỏi Thường Gặp (FAQ)
          </h2>
          <p className="text-xs sm:text-sm text-slate-400">
            Giải đáp mọi thắc mắc về mô hình thuê website trọn gói (WaaS) của SiteStash.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-2">
              <h4 className="font-bold text-sm text-white flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs text-slate-400 pl-6 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
