import React from "react";
import Image from "next/image";
import { Star, Quote, CheckCircle2, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Bác sĩ Trần Minh Hằng",
      role: "Giám đốc Nha Khoa Quốc Tế MedArt",
      avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=200&q=80",
      content: "Trước đây mình từng mất 25 triệu thuê agency làm web mà sau 3 tháng vẫn chưa ưng ý. Với SiteStash, mình chọn mẫu Nha Khoa Pro, chỉ sau 24h là web đã chạy mượt mà, khách vào đặt lịch liên tục qua Zalo!",
      template: "Mẫu Nha Khoa Thẩm Mỹ Pro",
      stars: 5,
    },
    {
      name: "Nguyễn Tuấn Anh",
      role: "Chủ chuỗi The Artisan Roastery",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      content: "Menu QR và tính năng đặt bàn của mẫu Artisan Coffee giúp quán mình giảm bớt áp lực phục vụ giờ cao điểm. Giá thuê 220k/tháng quá hời so với việc phải thuê nhân viên IT quản trị.",
      template: "Mẫu Artisan Coffee & Bistro",
      stars: 5,
    },
    {
      name: "Lê Hoàng Nam",
      role: "CEO Grand Horizon Property",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      content: "Giao diện bất động sản của SiteStash cực kỳ đẳng cấp, khách VIP xem qua điện thoại đều khen đẹp và hiện đại. Đội ngũ kỹ thuật hỗ trợ trỏ tên miền và chỉnh màu thương hiệu chỉ trong 2 tiếng.",
      template: "Mẫu Grand Horizon Estate",
      stars: 5,
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-semibold text-emerald-400">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span>Đánh Giá Từ Khách Hàng Thực Tế</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Khách Hàng Nói Gì Về Trải Nghiệm WaaS?
        </h2>
        <p className="text-sm text-slate-400">
          Hơn 500+ chủ doanh nghiệp, phòng khám và nhà hàng đã tối ưu hóa chi phí vận hành cùng SiteStash.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-3xl p-8 border border-slate-800 flex flex-col justify-between space-y-6 relative group"
          >
            <Quote className="w-10 h-10 text-primary-500/20 absolute top-6 right-6" />

            <div className="space-y-4">
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed italic">
                &ldquo;{item.content}&rdquo;
              </p>
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3.5">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-primary/40 shrink-0">
                <Image src={item.avatar} alt={item.name} fill className="object-cover" />
              </div>
              <div className="space-y-0.5">
                <h4 className="font-bold text-sm text-white">{item.name}</h4>
                <p className="text-xs text-slate-400">{item.role}</p>
                <div className="text-[10px] text-primary-300 font-mono pt-0.5">
                  Đang thuê: {item.template}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
