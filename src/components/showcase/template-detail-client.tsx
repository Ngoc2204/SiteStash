"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Eye,
  ShoppingBag,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Cpu,
  Layers,
  HelpCircle,
  QrCode,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { TemplateData } from "@/lib/mock-data";
import { formatVND, formatPriceShort } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RentalOrderModal } from "./rental-order-modal";
import { QrCodeModal } from "@/components/preview/qr-code-modal";

interface TemplateDetailClientProps {
  template: TemplateData;
  relatedTemplates: TemplateData[];
}

export function TemplateDetailClient({ template, relatedTemplates }: TemplateDetailClientProps) {
  const [selectedImage, setSelectedImage] = useState<string>(template.thumbnailUrl);
  const [isRentModalOpen, setIsRentModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);

  const images = [template.thumbnailUrl, ...template.galleryUrls.filter((u) => u !== template.thumbnailUrl)];

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-xs text-slate-400">
        <Link href="/" className="hover:text-white">Trang chủ</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/#showcase" className="hover:text-white">Kho mẫu</Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="text-slate-200 font-medium truncate max-w-[200px]">{template.title}</span>
      </nav>

      {/* Main Showcase Row */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Gallery (7 Cols) */}
        <div className="lg:col-span-7 space-y-4">
          {/* Main Preview Image */}
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden glass-panel border border-slate-800 bg-slate-900 group shadow-2xl">
            <Image
              src={selectedImage}
              alt={template.title}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-cover object-top"
            />
            {/* Quick Live Preview Overlay Button */}
            <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
              <Link href={`/preview/${template.slug}`}>
                <Button variant="glow" size="md" className="shadow-2xl">
                  <Eye className="w-4 h-4" />
                  <span>Mở Trình Xem Thử Live Demo</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Thumbnail Strip */}
          {images.length > 1 && (
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`relative w-24 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${
                    selectedImage === img
                      ? "border-primary shadow-glow scale-105"
                      : "border-slate-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={img} alt={`Preview ${idx + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Mobile QR Quick Scan Card */}
          <div className="glass-panel p-4 rounded-2xl border border-slate-800 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <QrCode className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-white">Trải nghiệm trên điện thoại thật</h4>
                <p className="text-[11px] text-slate-400">Quét mã QR để mở trực tiếp demo trên smartphone</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsQrModalOpen(true)}
              className="text-xs shrink-0"
            >
              Mở mã QR
            </Button>
          </div>
        </div>

        {/* Right Column: Information & Rental Actions (5 Cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Header Info */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-2">
              {template.category && (
                <Badge variant="primary" className="bg-primary/20 text-primary-300">
                  {template.category.name}
                </Badge>
              )}
              {template.isFeatured && (
                <Badge variant="cyan">
                  <Sparkles className="w-3 h-3" />
                  <span>Mẫu Hot</span>
                </Badge>
              )}
              <span className="text-xs text-slate-400 font-mono">
                {template.viewCount} lượt xem
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
              {template.title}
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {template.description}
            </p>
          </div>

          {/* Pricing Box */}
          <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3 bg-slate-900/80">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Chi phí thuê & sở hữu:
            </div>

            <div className="flex items-baseline justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white">
                  {formatVND(template.priceMonthly)}
                </span>
                <span className="text-xs text-slate-400"> / tháng</span>
              </div>
              <Badge variant="outline" className="text-xs text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                Gói Năm giảm 20%
              </Badge>
            </div>

            {template.priceLifetime && (
              <div className="flex items-center justify-between text-xs text-slate-400 pt-1">
                <span>Mua đứt toàn bộ source code:</span>
                <span className="font-bold text-slate-200">{formatVND(template.priceLifetime)}</span>
              </div>
            )}
          </div>

          {/* Main Action Buttons */}
          <div className="space-y-2.5">
            <Link href={`/preview/${template.slug}`} className="block">
              <Button variant="glow" size="lg" className="w-full font-bold shadow-xl shadow-primary/30">
                <Eye className="w-5 h-5" />
                <span>Trải Nghiệm Live Demo Đa Thiết Bị</span>
              </Button>
            </Link>

            <Button
              variant="primary"
              size="lg"
              onClick={() => setIsRentModalOpen(true)}
              className="w-full font-bold bg-slate-800 hover:bg-slate-700 border-slate-700 text-white"
            >
              <ShoppingBag className="w-5 h-5 text-primary-400" />
              <span>Đăng Ký Thuê Giao Diện Này</span>
            </Button>
          </div>

          {/* Tech Stack Specs */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Công nghệ & Nền tảng:
            </h4>
            <div className="flex flex-wrap gap-2">
              {template.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 text-xs font-mono border border-slate-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Guarantee Checklist */}
          <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800 space-y-2 text-xs text-slate-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bàn giao website hoàn chỉnh trong vòng 24 giờ</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Đã bao gồm Hosting Cloud & Chứng chỉ SSL miễn phí</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Hỗ trợ kỹ thuật và sao lưu dữ liệu tự động 24/7</span>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Details Section */}
      <div className="glass-panel p-8 rounded-3xl border border-slate-800 space-y-6">
        <h3 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-primary-400" />
          <span>Tính năng nổi bật được tích hợp sẵn</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {template.features.map((feature, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/80 border border-slate-800/80 flex items-start gap-3"
            >
              <div className="w-6 h-6 rounded-lg bg-primary/20 text-primary-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm text-slate-200 font-medium">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Related Templates Grid */}
      {relatedTemplates.length > 0 && (
        <div className="space-y-6 pt-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white">Gợi ý mẫu website cùng ngành</h3>
            <Link href="/#showcase" className="text-xs text-primary-400 hover:text-primary-300 flex items-center gap-1">
              <span>Xem tất cả</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedTemplates.map((rel) => (
              <div key={rel.id} className="glass-card rounded-2xl overflow-hidden border border-slate-800 group">
                <div className="relative aspect-[16/10] w-full bg-slate-900">
                  <Image src={rel.thumbnailUrl} alt={rel.title} fill className="object-cover" />
                </div>
                <div className="p-4 space-y-2">
                  <h4 className="font-bold text-sm text-white group-hover:text-primary-400 transition-colors">
                    {rel.title}
                  </h4>
                  <div className="flex items-center justify-between text-xs pt-2 border-t border-slate-800">
                    <span className="font-bold text-white">{formatVND(rel.priceMonthly)}/tháng</span>
                    <Link href={`/templates/${rel.slug}`} className="text-primary-400 hover:underline">
                      Xem chi tiết →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Modals */}
      <RentalOrderModal
        isOpen={isRentModalOpen}
        onClose={() => setIsRentModalOpen(false)}
        template={template}
      />

      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setIsQrModalOpen(false)}
        url={template.demoUrl}
        templateTitle={template.title}
      />
    </div>
  );
}
