import React from "react";
import { Clock, DollarSign, Users, HeartHandshake, Sparkles } from "lucide-react";

export function WhyChooseSection() {
  const items = [
    {
      title: "Cam Kết Đúng Hẹn",
      desc: "Hoàn thành đúng thời hạn như cam kết",
      icon: Clock,
      color: "from-purple-600 to-indigo-600",
    },
    {
      title: "Giá Cả Hợp Lý",
      desc: "Giá cạnh tranh, xứng đáng với chất lượng",
      icon: DollarSign,
      color: "from-blue-600 to-cyan-500",
    },
    {
      title: "Đội Ngũ Chuyên Nghiệp",
      desc: "Nhiều năm kinh nghiệm trong lĩnh vực thiết kế web",
      icon: Users,
      color: "from-cyan-600 to-teal-500",
    },
    {
      title: "Hỗ Trợ Tận Tâm",
      desc: "Đồng hành cùng bạn trên con đường phát triển",
      icon: HeartHandshake,
      color: "from-purple-600 to-pink-500",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-indigo-950/80">
      {/* Header */}
      <div className="text-center space-y-3 mb-14">
        <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black text-white">
          <span className="text-amber-400">✨</span>
          <span>Tại Sao Chọn WebPro?</span>
          <span className="text-amber-400">✨</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Hơn <span className="text-cyan-400 font-bold">2.500+</span> khách hàng tin tưởng và lựa chọn dịch vụ của chúng tôi
        </p>
      </div>

      {/* 4 Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="glass-card p-6 rounded-2xl border border-indigo-950/80 hover:border-purple-500/50 flex flex-col items-center text-center space-y-3 transition-all group"
            >
              <div
                className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white shadow-lg`}
              >
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
