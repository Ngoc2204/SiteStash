"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Eye,
  ShieldCheck,
  Zap,
  ArrowRight,
  ChevronRight,
  Check,
  Layers,
  Star,
  Globe,
  Smartphone,
  Play,
  Flame,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const previewDemos = [
    {
      title: "Nha Khoa Thẩm Mỹ Pro",
      category: "Y Tế & Nha Khoa",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      slug: "nha-khoa-tham-my-pro",
      price: "250.000₫/tháng",
      rating: "5.0 ★★★★★",
    },
    {
      title: "Artisan Coffee & Bistro",
      category: "F&B & Nhà Hàng",
      image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=80",
      slug: "artisan-coffee-bistro",
      price: "220.000₫/tháng",
      rating: "4.9 ★★★★★",
    },
    {
      title: "Grand Horizon Luxury Estate",
      category: "Bất Động Sản Cao Cấp",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
      slug: "grand-horizon-estate",
      price: "350.000₫/tháng",
      rating: "5.0 ★★★★★",
    },
    {
      title: "Aura Fashion Studio",
      category: "Thời Trang & E-Commerce",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      slug: "aura-fashion-boutique",
      price: "290.000₫/tháng",
      rating: "4.9 ★★★★★",
    },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glowing lights & mesh */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[700px] md:w-[1100px] h-[450px] bg-gradient-to-tr from-primary/25 via-cyan-500/15 to-purple-600/20 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/15 blur-[110px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-32 w-80 h-80 bg-accent-cyan/15 blur-[110px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Text & Headlines */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          {/* Animated Glow Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel border border-primary/40 shadow-glow animate-in fade-in slide-in-from-top-4 duration-500">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
            </span>
            <span className="text-xs font-semibold text-slate-200">
              Nền tảng WaaS & Kho Mẫu Website Cho Thuê Trọn Gói #1
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-primary-400" />
          </div>

          {/* Massive Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.08] text-white">
            Website Đẹp Đẳng Cấp,{" "}
            <br className="hidden sm:inline" />
            <span className="text-gradient-cyan">
              Bàn Giao Chỉ Sau 24 Giờ
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
            Không cần chi 15 - 30 triệu thuê agency từ đầu. Trải nghiệm trực tiếp trên mọi thiết bị qua{" "}
            <span className="text-white font-bold underline decoration-primary/60 underline-offset-4">
              Live Demo Viewer
            </span>
            , thuê trọn gói bao hosting & tên miền chỉ từ{" "}
            <span className="text-primary-400 font-extrabold">250.000₫/tháng</span>.
          </p>

          {/* CTA Group */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a href="#showcase" className="w-full sm:w-auto">
              <Button variant="glow" size="lg" className="w-full sm:w-auto shadow-2xl shadow-primary/40 font-bold">
                <Eye className="w-5 h-5" />
                <span>Khám Phá & Xem Demo Trực Tiếp</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <Link href="/pricing" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto font-semibold">
                <span>Xem Bảng Giá Trọn Gói</span>
              </Button>
            </Link>
          </div>

          {/* Micro value badges */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-slate-400 pt-2">
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Miễn phí Cloud Hosting & SSL
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Tặng tên miền quốc tế
            </span>
            <span className="flex items-center gap-1.5">
              <Check className="w-4 h-4 text-emerald-400" /> Bàn giao full mã nguồn
            </span>
          </div>
        </div>

        {/* Interactive Floating Showcase Preview Widget */}
        <div className="max-w-5xl mx-auto relative pt-4">
          {/* Outer Glowing Border Frame */}
          <div className="glass-panel p-2 sm:p-4 rounded-3xl border border-slate-700/80 shadow-2xl shadow-black/80 relative">
            {/* Top Interactive Tabs Bar */}
            <div className="flex items-center justify-between gap-2 p-2 mb-3 bg-slate-900/90 rounded-2xl border border-slate-800 overflow-x-auto">
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none">
                {previewDemos.map((demo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 ${
                      activeTab === idx
                        ? "bg-primary text-white shadow-lg shadow-primary/30"
                        : "text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"
                    }`}
                  >
                    <span>{demo.title}</span>
                    {idx === 0 && (
                      <span className="text-[10px] bg-cyan-400/20 text-cyan-300 px-1.5 py-0.2 rounded font-mono">
                        Hot
                      </span>
                    )}
                  </button>
                ))}
              </div>

              <Link
                href={`/preview/${previewDemos[activeTab].slug}`}
                className="hidden md:inline-flex items-center gap-1 text-xs font-bold text-primary-400 hover:text-primary-300 shrink-0 px-3 py-1.5 rounded-xl bg-slate-800/80"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Mở Live Demo</span>
              </Link>
            </div>

            {/* Main Mockup Screen View */}
            <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-slate-950 border border-slate-800/80 shadow-inner group">
              <Image
                src={previewDemos[activeTab].image}
                alt={previewDemos[activeTab].title}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1024px"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Gradient Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90" />

              {/* Floating Info Overlay on Screen */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <Badge variant="primary" className="bg-primary/90 text-white font-bold">
                      {previewDemos[activeTab].category}
                    </Badge>
                    <span className="text-xs text-amber-400 font-bold bg-slate-950/80 px-2 py-0.5 rounded-full border border-slate-800">
                      {previewDemos[activeTab].rating}
                    </span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-white">
                    {previewDemos[activeTab].title}
                  </h3>
                  <p className="text-xs text-slate-300">
                    Giá thuê trọn gói: <span className="text-white font-bold">{previewDemos[activeTab].price}</span> • Tối ưu chuyển đổi khách hàng 100%
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <Link href={`/preview/${previewDemos[activeTab].slug}`}>
                    <Button variant="glow" size="md" className="font-bold shadow-xl">
                      <Play className="w-4 h-4 fill-current" />
                      <span>Xem Trực Tiếp</span>
                    </Button>
                  </Link>
                  <Link href={`/templates/${previewDemos[activeTab].slug}`}>
                    <Button variant="secondary" size="md" className="font-semibold">
                      <span>Chi tiết</span>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics Stats Counter Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto pt-6">
          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
              50+ Mẫu
            </p>
            <p className="text-xs text-slate-400 font-medium">Thiết kế tuyển chọn đa ngành</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-black text-white">
              24 Giờ
            </p>
            <p className="text-xs text-slate-400 font-medium">Bàn giao & vận hành tức thì</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-black text-emerald-400">
              99.99%
            </p>
            <p className="text-xs text-slate-400 font-medium">Uptime máy chủ Cloud Server</p>
          </div>

          <div className="glass-panel p-5 rounded-2xl border border-slate-800/80 text-center space-y-1">
            <p className="text-2xl sm:text-3xl font-black text-accent-purple">
              500+
            </p>
            <p className="text-xs text-slate-400 font-medium">Doanh nghiệp & Chủ shop tin dùng</p>
          </div>
        </div>
      </div>
    </section>
  );
}
