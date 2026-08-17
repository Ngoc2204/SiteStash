import React from "react";
import Link from "next/link";
import { Sparkles, Eye, Phone, ArrowRight, ShieldCheck, Zap, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-16 border border-primary/40 bg-gradient-to-r from-slate-900 via-indigo-950/60 to-slate-900 shadow-2xl shadow-primary/20">
        {/* Glow orb decorations */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary/30 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-accent-cyan/20 blur-[100px] rounded-full pointer-events-none" />

        <div className="relative z-10 max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-xs font-semibold text-primary-300">
            <Zap className="w-3.5 h-3.5" />
            <span>Kích Hoạt Trong 24 Giờ</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-tight">
            Sẵn Sàng Đưa Thương Hiệu Của Bạn Lên Tầm Cao Mới?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Chọn ngay 1 mẫu website ưng ý trong kho giao diện, trải nghiệm thử trực tiếp và nhận bàn giao hoàn chỉnh trọn gói chỉ sau 24h.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a href="#showcase" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto font-bold shadow-2xl shadow-primary/40">
                <Eye className="w-5 h-5" />
                <span>Khám Phá Kho Mẫu Ngay</span>
              </Button>
            </a>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="secondary" size="lg" className="w-full sm:w-auto font-semibold">
                <Phone className="w-4 h-4 text-primary-400" />
                <span>Hotline: 0912.345.678</span>
              </Button>
            </Link>
          </div>

          <div className="pt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
            <span>✓ Miễn phí dùng thử demo</span>
            <span>✓ Cam kết 24h bàn giao</span>
            <span>✓ Bảo trì kỹ thuật trọn đời</span>
          </div>
        </div>
      </div>
    </section>
  );
}
