"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Eye,
  Rocket,
  ShieldCheck,
  Zap,
  TrendingUp,
  Award,
  Lock,
  Headphones,
  CheckCircle2,
  ArrowRight,
  Boxes,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background glowing lights */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] md:w-[1000px] h-[400px] bg-gradient-to-tr from-purple-700/20 via-cyan-500/15 to-pink-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      {/* Floating 3D Elements */}
      {/* Rocket on Left */}
      <div className="hidden lg:block absolute top-48 left-8 xl:left-24 animate-float-slow pointer-events-none z-10">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="w-20 h-20 rounded-3xl bg-gradient-to-tr from-purple-600 to-pink-500 p-4 text-white shadow-2xl shadow-purple-500/50 transform -rotate-12 flex items-center justify-center">
            <Rocket className="w-12 h-12" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-pink-500/40 blur-xl rounded-full" />
        </div>
      </div>

      {/* Glowing 3D Cube on Right */}
      <div className="hidden lg:block absolute top-44 right-8 xl:right-24 animate-float-fast pointer-events-none z-10">
        <div className="relative w-28 h-28 flex items-center justify-center">
          <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-cyan-400/80 via-blue-600/80 to-purple-600/80 p-4 text-white shadow-2xl shadow-cyan-500/40 transform rotate-12 backdrop-blur-md border border-cyan-300/40 flex items-center justify-center">
            <Boxes className="w-10 h-10 text-cyan-200" />
          </div>
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-cyan-400/40 blur-xl rounded-full" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Text & Headlines */}
        <div className="text-center space-y-5 max-w-4xl mx-auto">
          {/* Top Gold Border Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-bold tracking-wider uppercase shadow-md shadow-amber-500/10 animate-in fade-in duration-500">
            <span className="text-amber-400">✨</span>
            <span>DỊCH VỤ THIẾT KẾ WEBSITE CHUYÊN NGHIỆP</span>
            <span className="text-amber-400">✨</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] text-white">
            Website Đẹp Đẳng Cấp <br />
            Bán Hàng Chỉ Sau <span className="text-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.6)]">24 Giờ</span>
          </h1>

          {/* Bullet points under headline */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" /> Chuẩn SEO
            </span>
            <span className="flex items-center gap-1.5 text-purple-400">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" /> Tốc độ cao
            </span>
            <span className="flex items-center gap-1.5 text-pink-400">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" /> Bảo mật tuyệt đối
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Hỗ trợ 24/7
            </span>
          </div>

          {/* Subtitle */}
          <p className="text-xs sm:text-sm md:text-base text-slate-400 max-w-2xl mx-auto font-normal leading-relaxed">
            Chúng tôi tạo ra những website không chỉ đẹp mắt mà còn giúp bạn tăng doanh số vượt trội.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#contact" className="w-full sm:w-auto">
              <button className="btn-gradient-purple w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold text-sm shadow-xl flex items-center justify-center gap-2">
                <span>Nhận Tư Vấn Miễn Phí</span>
                <Sparkles className="w-4 h-4" />
              </button>
            </a>
            <a href="#showcase" className="w-full sm:w-auto">
              <button className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-semibold text-sm bg-slate-900/90 text-white border border-slate-700/80 hover:border-slate-500 transition-all flex items-center justify-center gap-2">
                <Eye className="w-4 h-4 text-slate-400" />
                <span>Xem Mẫu Website</span>
              </button>
            </a>
          </div>

          {/* Customer Avatar Social Proof */}
          <div className="flex items-center justify-center gap-3 pt-3">
            <div className="flex -space-x-2 overflow-hidden">
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80"
                alt="Client 1"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Client 2"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Client 3"
              />
              <img
                className="inline-block h-8 w-8 rounded-full ring-2 ring-slate-900 object-cover"
                src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80"
                alt="Client 4"
              />
            </div>
            <span className="text-xs text-slate-300 font-medium">
              Đã có hơn <span className="text-cyan-400 font-bold">2.500+</span> khách hàng tin tưởng
            </span>
          </div>
        </div>

        {/* Center Device Frame with Neon Cyan Glow & 2 Floating Badges */}
        <div className="max-w-5xl mx-auto relative pt-4">
          {/* Main Neon Cyan Glowing Screen */}
          <div className="relative rounded-3xl p-2 sm:p-3.5 bg-gradient-to-b from-cyan-500/40 via-blue-900/30 to-purple-900/30 neon-glow-frame">
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950">
              <Image
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1400&q=80"
                alt="WebPro Dental & Clinic Mockup"
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="object-cover object-top"
              />
            </div>

            {/* Floating Widget Left: Tốc Độ Tải Trang 98/100 A+ */}
            <div className="absolute -left-3 sm:-left-6 top-1/3 p-3.5 sm:p-4 rounded-2xl glass-panel border border-cyan-400/40 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl animate-float-slow z-20">
              <p className="text-[11px] font-bold text-slate-300 flex items-center justify-between gap-4">
                <span>Tốc Độ Tải Trang</span>
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              </p>
              <div className="flex items-baseline gap-1.5 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-cyan-400">98/100</span>
                <span className="text-xs font-black text-emerald-400 px-1.5 py-0.5 rounded bg-emerald-400/10">A+</span>
              </div>
            </div>

            {/* Floating Widget Right: Tăng Trưởng Doanh Số +250% */}
            <div className="absolute -right-3 sm:-right-6 bottom-1/4 p-3.5 sm:p-4 rounded-2xl glass-panel border border-purple-400/40 shadow-2xl shadow-purple-500/20 backdrop-blur-xl animate-float-fast z-20">
              <p className="text-[11px] font-bold text-slate-300">Tăng Trưởng Doanh Số</p>
              <div className="flex items-baseline gap-2 mt-1">
                <span className="text-2xl sm:text-3xl font-black text-emerald-400">+250%</span>
              </div>
              <p className="text-[10px] text-slate-400 mt-0.5 flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-400" /> Trong 3 tháng
              </p>
            </div>
          </div>
        </div>

        {/* 4 Feature Badges Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto pt-6" id="services">
          {/* Card 1 */}
          <div className="glass-card p-5 rounded-2xl border border-indigo-950/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-600/20 text-purple-400 flex items-center justify-center shrink-0 border border-purple-500/30">
              <Award className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Thiết Kế Độc Quyền</h4>
              <p className="text-xs text-slate-400">Giao diện riêng biệt, không đụng hàng</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-5 rounded-2xl border border-indigo-950/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-600/20 text-cyan-400 flex items-center justify-center shrink-0 border border-cyan-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Chuẩn SEO Top 1</h4>
              <p className="text-xs text-slate-400">Tối ưu SEO, dễ dàng lên Google</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-5 rounded-2xl border border-indigo-950/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/30">
              <Lock className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Bảo Mật Tuyệt Đối</h4>
              <p className="text-xs text-slate-400">SSL miễn phí, chống hack 24/7</p>
            </div>
          </div>

          {/* Card 4 */}
          <div className="glass-card p-5 rounded-2xl border border-indigo-950/80 flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-pink-600/20 text-pink-400 flex items-center justify-center shrink-0 border border-pink-500/30">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-bold text-white">Hỗ Trợ 24/7</h4>
              <p className="text-xs text-slate-400">Đội ngũ hỗ trợ luôn sẵn sàng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
