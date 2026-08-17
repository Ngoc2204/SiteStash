import React from "react";
import { Check, X, Sparkles, Zap, ShieldCheck, DollarSign, Clock, HelpCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ComparisonSection() {
  const criteria = [
    {
      title: "Chi phí ban đầu",
      sitestash: "Chỉ từ 250.000₫ / tháng (0đ phí setup)",
      agency: "15.000.000₫ - 30.000.000₫ trả trước",
      diy: "Tốn 3.000.000₫ mua theme, plugin, hosting",
    },
    {
      title: "Thời gian bàn giao",
      sitestash: "Chỉ sau 24 Giờ (Chạy ngay lập tức)",
      agency: "Mất 1 - 2 tháng trao đổi & sửa lỗi",
      diy: "Mất 2 - 3 tuần tự học mò mẫm",
    },
    {
      title: "Trải nghiệm trước khi thuê",
      sitestash: "Live Demo đa thiết bị (Desktop, iPad, iPhone)",
      agency: "Chỉ xem ảnh vẽ Figma tĩnh",
      diy: "Không xem trước được phiên bản thực tế",
    },
    {
      title: "Chi phí Hosting & SSL",
      sitestash: "Miễn phí trọn đời (Bao trọn gói)",
      agency: "Phải trả thêm 1.5 - 3 triệu/năm",
      diy: "Tự trả tiền server hàng tháng",
    },
    {
      title: "Bảo trì & Sao lưu dữ liệu",
      sitestash: "Tự động 24/7/365 có kỹ thuật hỗ trợ",
      agency: "Hết hợp đồng tính phí phát sinh cao",
      diy: "Tự chịu rủi ro khi web bị lỗi / hack",
    },
    {
      title: "Tối ưu Tốc độ & Chuẩn SEO",
      sitestash: "Next.js 15, Core Web Vitals 95+ điểm",
      agency: "Tùy thuộc tay nghề lập trình viên",
      diy: "Website nặng nề do cài quá nhiều plugin",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-t border-slate-800/80">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>So Sánh Giải Pháp & Lợi Ích Vượt Trội</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Tại Sao Hơn 500+ Khách Hàng Chọn SiteStash?
        </h2>
        <p className="text-sm text-slate-400">
          Tiết kiệm 90% ngân sách và thời gian triển khai, loại bỏ hoàn toàn các rủi ro kỹ thuật phức tạp.
        </p>
      </div>

      {/* Comparison Table */}
      <div className="glass-panel rounded-3xl border border-slate-800 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm text-slate-300">
            <thead className="bg-slate-900/90 text-xs uppercase font-bold text-slate-400 border-b border-slate-800">
              <tr>
                <th className="px-6 py-5 w-1/4">Tiêu chí so sánh</th>
                <th className="px-6 py-5 w-1/3 bg-primary/15 text-primary-300 border-x border-primary/20">
                  <div className="flex items-center gap-2">
                    <span className="text-base font-extrabold text-white">SiteStash (WaaS)</span>
                    <Badge variant="primary" className="text-[10px] bg-primary text-white">Khuyên dùng</Badge>
                  </div>
                </th>
                <th className="px-6 py-5 w-1/4 text-slate-400">Thuê Agency Viết Riêng</th>
                <th className="px-6 py-5 w-1/4 text-slate-400">Tự Mò WordPress / Wix</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {criteria.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-900/40 transition-colors">
                  <td className="px-6 py-4 font-bold text-white flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                    <span>{item.title}</span>
                  </td>

                  {/* SiteStash Column */}
                  <td className="px-6 py-4 bg-primary/10 font-bold text-white border-x border-primary/20">
                    <div className="flex items-center gap-2 text-emerald-400">
                      <Check className="w-4 h-4 shrink-0" />
                      <span className="text-slate-100">{item.sitestash}</span>
                    </div>
                  </td>

                  {/* Agency Column */}
                  <td className="px-6 py-4 text-slate-400">
                    <div className="flex items-center gap-2 text-slate-400">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{item.agency}</span>
                    </div>
                  </td>

                  {/* DIY Column */}
                  <td className="px-6 py-4 text-slate-400">
                    <div className="flex items-center gap-2 text-slate-400">
                      <X className="w-4 h-4 text-rose-400 shrink-0" />
                      <span>{item.diy}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
