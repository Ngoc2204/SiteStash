import React from "react";
import Link from "next/link";
import { Check, Sparkles, ArrowRight } from "lucide-react";

export function PricingSection() {
  const plans = [
    {
      name: "CƠ BẢN",
      price: "4.900.000đ",
      sub: "Phù hợp cho cá nhân, startup",
      features: [
        "Thiết kế giao diện đẹp",
        "Chuẩn responsive",
        "Tối ưu SEO cơ bản",
        "SSL miễn phí",
        "Hỗ trợ 3 tháng",
      ],
      popular: false,
      cta: "Chọn gói này",
      href: "/contact",
    },
    {
      name: "CHUYÊN NGHIỆP",
      price: "8.900.000đ",
      sub: "Phù hợp cho doanh nghiệp vừa và nhỏ",
      badge: "PHỔ BIẾN",
      features: [
        "Tất cả tính năng cơ bản",
        "Thiết kế độc quyền",
        "Chuẩn SEO Top 1",
        "Tốc độ tải trang cao",
        "Hỗ trợ 12 tháng",
        "Tích hợp chat, form, map",
      ],
      popular: true,
      cta: "Chọn gói này",
      href: "/contact",
    },
    {
      name: "CAO CẤP",
      price: "15.900.000đ",
      sub: "Phù hợp cho doanh nghiệp lớn",
      features: [
        "Tất cả tính năng chuyên nghiệp",
        "Thiết kế theo yêu cầu",
        "SEO nâng cao",
        "Bảo mật nâng cao",
        "Hỗ trợ 24 tháng",
        "Tích hợp CRM, Marketing",
      ],
      popular: false,
      cta: "Liên hệ ngay",
      href: "/contact",
    },
  ];

  return (
    <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-indigo-950/80">
      {/* Header */}
      <div className="text-center space-y-3 mb-16">
        <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          Bảng Giá Ưu Đãi
        </h2>
        <p className="text-xs sm:text-sm text-slate-400">
          Chọn gói thiết kế phù hợp với nhu cầu của bạn
        </p>
      </div>

      {/* 3 Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-3xl p-8 flex flex-col justify-between relative transition-all duration-300 ${
              plan.popular
                ? "bg-[#0f1430] border-2 border-purple-500 shadow-2xl shadow-purple-500/25 ring-1 ring-purple-500"
                : "glass-card border border-indigo-950/80 hover:border-slate-700"
            }`}
          >
            {/* Popular Badge */}
            {plan.badge && (
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1 rounded-full shadow-lg">
                {plan.badge}
              </div>
            )}

            <div className="space-y-6">
              {/* Plan Header */}
              <div className="text-center space-y-2 border-b border-slate-800/80 pb-6">
                <span className="text-xs font-black tracking-wider text-cyan-400 uppercase">
                  {plan.name}
                </span>
                <div className="text-3xl font-black text-white pt-1">
                  {plan.price}
                </div>
                <p className="text-xs text-slate-400">{plan.sub}</p>
              </div>

              {/* Feature Checklist */}
              <ul className="space-y-3">
                {plan.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2.5 text-xs text-slate-300">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action CTA Button */}
            <div className="pt-8">
              <Link href={plan.href} className="block">
                {plan.popular ? (
                  <button className="btn-gradient-purple w-full py-3 rounded-xl font-bold text-xs shadow-lg">
                    {plan.cta}
                  </button>
                ) : (
                  <button className="w-full py-3 rounded-xl font-semibold text-xs bg-slate-900 text-slate-200 border border-slate-700 hover:border-slate-500 hover:text-white transition-all">
                    {plan.cta}
                  </button>
                )}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
