import React from "react";
import { MessageSquare, Layout, Code, CheckCircle, Headphones, Sparkles } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Tư Vấn & Phân Tích",
      desc: "Lắng nghe nhu cầu và tư vấn giải pháp phù hợp",
      icon: MessageSquare,
      color: "from-purple-600 to-pink-500",
      border: "border-purple-500",
    },
    {
      num: "02",
      title: "Thiết Kế UI/UX",
      desc: "Thiết kế giao diện độc quyền, trải nghiệm tuyệt vời",
      icon: Layout,
      color: "from-purple-600 to-indigo-600",
      border: "border-purple-500",
    },
    {
      num: "03",
      title: "Lập Trình & SEO",
      desc: "Lập trình chuẩn SEO, tương thích mọi thiết bị",
      icon: Code,
      color: "from-blue-600 to-cyan-500",
      border: "border-cyan-500",
    },
    {
      num: "04",
      title: "Kiểm Thử & Bàn Giao",
      desc: "Kiểm tra kỹ lưỡng và bàn giao đúng hẹn",
      icon: CheckCircle,
      color: "from-cyan-600 to-teal-500",
      border: "border-cyan-500",
    },
    {
      num: "05",
      title: "Hỗ Trợ & Bảo Trì",
      desc: "Hỗ trợ 24/7, bảo trì định kỳ miễn phí",
      icon: Headphones,
      color: "from-cyan-500 to-blue-600",
      border: "border-cyan-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-indigo-950/80">
      {/* Section Header */}
      <div className="text-center space-y-3 mb-16">
        <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black text-white">
          <span className="text-amber-400">✨</span>
          <span>Quy Trình Thiết Kế Website</span>
          <span className="text-amber-400">✨</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Quy trình <span className="text-cyan-400 font-bold">chuyên nghiệp</span>, <span className="text-purple-400 font-bold">minh bạch</span>, đảm bảo chất lượng
        </p>
      </div>

      {/* 5-Step Process Horizontal Nodes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          return (
            <div
              key={step.num}
              className="glass-card rounded-2xl p-5 border border-indigo-950/80 flex flex-col items-center text-center space-y-4 relative group hover:border-purple-500/50"
            >
              {/* Circular Node Icon */}
              <div
                className={`w-14 h-14 rounded-full bg-gradient-to-tr ${step.color} p-0.5 shadow-xl flex items-center justify-center relative`}
              >
                <div className="w-full h-full rounded-full bg-[#0d1127] flex items-center justify-center text-white">
                  <Icon className="w-6 h-6 text-cyan-300" />
                </div>
                {/* Number Badge */}
                <div className="absolute -bottom-2 bg-slate-900 border border-slate-700 text-[10px] font-black text-white px-2 py-0.5 rounded-full font-mono">
                  {step.num}
                </div>
              </div>

              {/* Title & Description */}
              <div className="space-y-1.5 pt-1">
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h4>
                <p className="text-[11px] text-slate-400 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
