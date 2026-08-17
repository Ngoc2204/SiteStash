"use client";

import React from "react";
import Link from "next/link";
import {
  Monitor,
  Tablet,
  Smartphone,
  RotateCw,
  QrCode,
  ArrowLeft,
  ShoppingBag,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { usePreviewStore, DeviceType } from "@/hooks/use-preview-store";
import { TemplateData } from "@/lib/mock-data";
import { formatVND } from "@/lib/utils";
import { Button } from "@/components/ui/button";

interface DeviceToolbarProps {
  template: TemplateData;
  onOpenRentModal: () => void;
}

export function DeviceToolbar({ template, onOpenRentModal }: DeviceToolbarProps) {
  const {
    device,
    setDevice,
    zoom,
    setZoom,
    setQrModalOpen,
    reloadIframe,
  } = usePreviewStore();

  const devices: { type: DeviceType; label: string; icon: React.ReactNode; info: string }[] = [
    { type: "desktop", label: "Desktop", icon: <Monitor className="w-4 h-4" />, info: "Toàn màn hình 100%" },
    { type: "tablet", label: "Tablet", icon: <Tablet className="w-4 h-4" />, info: "iPad (768 x 1024)" },
    { type: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" />, info: "iPhone (390 x 844)" },
  ];

  return (
    <div className="h-16 border-b border-slate-800/90 bg-slate-950/90 backdrop-blur-xl px-4 sm:px-6 flex items-center justify-between gap-4 sticky top-0 z-40 shadow-lg shadow-black/40">
      {/* Left: Back to details & Template Name */}
      <div className="flex items-center gap-3">
        <Link href={`/templates/${template.slug}`}>
          <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white gap-1.5 pl-2 pr-3">
            <ArrowLeft className="w-4 h-4" />
            <span className="hidden sm:inline text-xs">Quay lại</span>
          </Button>
        </Link>
        <div className="h-4 w-px bg-slate-800 hidden sm:block" />
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <span className="font-bold text-sm text-white truncate max-w-[160px] sm:max-w-[240px]">
              {template.title}
            </span>
            <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 hidden md:inline-flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Demo Ready
            </span>
          </div>
          <span className="text-[11px] text-slate-400 hidden sm:block">
            {template.category?.name || "Mẫu giao diện"} • {formatVND(template.priceMonthly)}/tháng
          </span>
        </div>
      </div>

      {/* Center: Device Switcher Buttons */}
      <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-800 shadow-inner">
        {devices.map((d) => {
          const isActive = device === d.type;
          return (
            <button
              key={d.type}
              onClick={() => setDevice(d.type)}
              title={d.info}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
                isActive
                  ? "bg-primary text-white shadow-md shadow-primary/30 font-semibold"
                  : "text-slate-400 hover:text-slate-200 hover:bg-slate-800"
              }`}
            >
              {d.icon}
              <span className="hidden md:inline">{d.label}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Tools & Rent Button CTA */}
      <div className="flex items-center gap-2">
        {/* Reload button */}
        <button
          onClick={reloadIframe}
          title="Tải lại trang demo"
          className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-transparent hover:border-slate-700 transition-colors"
        >
          <RotateCw className="w-4 h-4" />
        </button>

        {/* QR Code trigger */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setQrModalOpen(true)}
          className="text-xs text-slate-300 hidden sm:flex items-center gap-1.5"
          title="Quét mã QR mở trên điện thoại thật"
        >
          <QrCode className="w-4 h-4 text-cyan-400" />
          <span>Quét QR</span>
        </Button>

        {/* Open Direct in New Tab */}
        <a href={template.demoUrl} target="_blank" rel="noreferrer" className="hidden lg:block">
          <button
            title="Mở toàn màn hình tab mới"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </button>
        </a>

        {/* Rent This Template Now CTA */}
        <Button
          variant="glow"
          size="sm"
          onClick={onOpenRentModal}
          className="text-xs font-bold shadow-glow"
        >
          <ShoppingBag className="w-4 h-4" />
          <span>Thuê mẫu này</span>
        </Button>
      </div>
    </div>
  );
}
