"use client";

import React from "react";
import Link from "next/link";
import { Sparkles, Eye, ShieldCheck, Zap, ArrowDown, ChevronRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[900px] h-[350px] bg-gradient-to-tr from-primary/20 via-indigo-600/15 to-accent-cyan/20 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-72 h-72 bg-accent-purple/10 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/30 shadow-glow animate-in fade-in slide-in-from-top-4 duration-500">
          <Sparkles className="w-4 h-4 text-accent-cyan animate-pulse" />
          <span className="text-xs font-semibold text-slate-200">
            Nền tảng WaaS & Kho Giao Diện Website Cho Thuê Trọn Gói #1
          </span>
          <ChevronRight className="w-3.5 h-3.5 text-primary-400" />
        </div>

        {/* Main Headline */}
        <div className="max-w-4xl mx-auto space-y-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1]">
            Website Đẹp Đỉnh Cao,{" "}
            <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">
              Có Ngay Trong 24 Giờ
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Không cần bỏ ra 15 - 30 triệu đồng thuê agency thiết kế từ đầu. Trải nghiệm thử trực tiếp trên điện thoại & máy tính, chọn mẫu và thuê trọn gói chỉ từ{" "}
            <span className="text-primary-400 font-bold underline decoration-primary/40 underline-offset-4">
              250.000₫ / tháng
            </span>
            .
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
          <a href="#showcase">
            <Button variant="glow" size="lg" className="w-full sm:w-auto shadow-xl shadow-primary/30">
              <Eye className="w-5 h-5" />
              <span>Khám Phá & Xem Demo Trực Tiếp</span>
            </Button>
          </a>
          <Link href="/pricing">
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              <span>Xem Bảng Giá Trọn Gói</span>
            </Button>
          </Link>
        </div>

        {/* Feature Highlights Bar */}
        <div className="pt-8 max-w-3xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 text-left">
          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-primary/20 flex items-center justify-center text-primary-400 shrink-0">
              <Zap className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Bàn giao 24h</p>
              <p className="text-[11px] text-slate-400">Chạy ngay lập tức</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Bao Hosting & SSL</p>
              <p className="text-[11px] text-slate-400">Không lo kỹ thuật</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400 shrink-0">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Live Demo Viewer</p>
              <p className="text-[11px] text-slate-400">Xem thử đa thiết bị</p>
            </div>
          </div>

          <div className="glass-panel p-3.5 rounded-2xl border border-slate-800 flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
              <Check className="w-4 h-4" />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Chuẩn SEO 100%</p>
              <p className="text-[11px] text-slate-400">Tối ưu Top Google</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
