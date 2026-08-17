import React from "react";
import { Search, Eye, Sparkles, Rocket, ShieldCheck, CheckCircle2 } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Trải nghiệm & Chọn mẫu",
      description: "Xem thử trực tiếp trên điện thoại & máy tính bằng Live Demo Viewer để kiểm tra tốc độ và giao diện thực tế.",
      icon: Eye,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      number: "02",
      title: "Đăng ký gói & Gửi yêu cầu",
      description: "Chọn gói thuê theo tháng hoặc năm. Cung cấp tên miền, logo, bảng giá và nội dung mong muốn của thương hiệu bạn.",
      icon: Sparkles,
      gradient: "from-cyan-500 to-indigo-500",
    },
    {
      number: "03",
      title: "Kỹ thuật bàn giao trong 24h",
      description: "Đội ngũ SiteStash cấu hình hosting tốc độ cao, cài đặt SSL bảo mật, trỏ tên miền và hoàn thiện nội dung theo yêu cầu.",
      icon: Rocket,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      number: "04",
      title: "Vận hành an tâm & Hỗ trợ",
      description: "Website hoạt động 24/7/365. Hệ thống tự động sao lưu dữ liệu, bảo trì máy chủ và hỗ trợ kỹ thuật trọn đời hợp đồng.",
      icon: ShieldCheck,
      gradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="process" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <span className="text-xs uppercase font-bold tracking-widest text-primary-400 bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
          Quy Trình Triển Khai 4 Bước
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Sở Hữu Website Chuyên Nghiệp Chỉ Sau 24 Giờ
        </h2>
        <p className="text-sm text-slate-400">
          Không cần biết lập trình, không mất phí hàng chục triệu cho agency, quy trình chuẩn hóa giúp doanh nghiệp tiết kiệm 90% thời gian & chi phí.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="glass-card rounded-2xl p-6 border border-slate-800 flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${step.gradient} flex items-center justify-center text-white shadow-lg`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl font-black text-slate-800 group-hover:text-slate-700 transition-colors font-mono">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-primary-300 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/60 flex items-center gap-1.5 text-[11px] text-emerald-400">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Cam kết chuẩn xác</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
