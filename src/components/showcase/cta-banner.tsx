import React from "react";
import Link from "next/link";
import { Rocket, Sparkles, Eye } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="contact">
      <div className="relative rounded-3xl overflow-hidden p-8 sm:p-12 lg:p-14 border border-cyan-500/40 bg-gradient-to-r from-[#0d122e] via-[#10173d] to-[#0d122e] shadow-2xl shadow-cyan-500/15">
        {/* Glowing background orbs */}
        <div className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 bg-purple-600/25 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute top-1/2 right-10 -translate-y-1/2 w-72 h-72 bg-cyan-500/25 blur-[90px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: 3D Rocket */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 p-5 text-white shadow-2xl shadow-purple-500/60 transform -rotate-12 flex items-center justify-center animate-float-slow">
              <Rocket className="w-16 h-16 text-white" />
            </div>
          </div>

          {/* Center Column: Text & Buttons */}
          <div className="lg:col-span-6 text-center lg:text-left space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight">
              Sẵn Sàng Bứt Phá <br className="hidden sm:inline" />
              Doanh Số Cùng Website Mới?
            </h2>

            <p className="text-xs sm:text-sm text-slate-300">
              Đừng bỏ lỡ cơ hội sở hữu website chuyên nghiệp với ưu đãi hấp dẫn nhất hôm nay!
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="btn-gradient-purple w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs shadow-lg flex items-center justify-center gap-1.5">
                  <span>Tư Vấn Miễn Phí Ngay</span>
                  <Sparkles className="w-4 h-4" />
                </button>
              </Link>
              <a href="#showcase" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto px-6 py-3 rounded-xl font-semibold text-xs bg-slate-900/90 text-white border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center gap-1.5">
                  <Eye className="w-4 h-4 text-slate-400" />
                  <span>Xem Portfolio</span>
                </button>
              </a>
            </div>
          </div>

          {/* Right Column: Hexagon Discount Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-end">
            <div className="w-36 h-36 rounded-3xl bg-gradient-to-b from-cyan-500/20 to-purple-600/20 border-2 border-cyan-400/80 p-4 flex flex-col items-center justify-center text-center shadow-xl shadow-cyan-500/30 backdrop-blur-md">
              <span className="text-[11px] font-bold text-slate-200">Giảm ngay</span>
              <span className="text-3xl font-black text-cyan-400 drop-shadow-[0_0_15px_rgba(6,182,212,0.8)]">
                20%
              </span>
              <span className="text-[9px] text-slate-300 leading-tight mt-0.5">
                Cho 10 khách hàng đầu tiên
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
