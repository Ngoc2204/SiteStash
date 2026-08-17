"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, Sparkles, Check, ArrowRight, ExternalLink, Zap } from "lucide-react";
import { TemplateData } from "@/lib/mock-data";
import { formatVND, formatPriceShort } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface TemplateCardProps {
  template: TemplateData;
  onOpenRentModal?: (template: TemplateData) => void;
}

export function TemplateCard({ template, onOpenRentModal }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group glass-card rounded-2xl overflow-hidden flex flex-col h-full relative"
    >
      {/* Thumbnail Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <Image
          src={template.thumbnailUrl}
          alt={template.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-transform duration-700 ease-out ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />

        {/* Badges Overlay */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-1.5">
            {template.isFeatured && (
              <Badge variant="primary" className="bg-primary/90 text-white font-semibold shadow-md">
                <Sparkles className="w-3 h-3" />
                <span>Nổi bật</span>
              </Badge>
            )}
            {template.category && (
              <Badge variant="secondary" className="bg-slate-950/80 text-slate-200 border-slate-700">
                {template.category.name}
              </Badge>
            )}
          </div>
          <div className="px-2 py-0.5 rounded-full bg-slate-950/80 border border-slate-700 text-[11px] text-slate-300 font-mono">
            {template.viewCount} views
          </div>
        </div>

        {/* Hover Quick Action Buttons */}
        <div
          className={`absolute inset-0 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center gap-3 transition-opacity duration-300 ${
            isHovered ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <Link href={`/preview/${template.slug}`}>
            <Button variant="glow" size="sm" className="shadow-lg">
              <Eye className="w-4 h-4" />
              <span>Xem Live Demo</span>
            </Button>
          </Link>
          <Link href={`/templates/${template.slug}`}>
            <Button variant="secondary" size="sm">
              <span>Chi tiết</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <Link href={`/templates/${template.slug}`}>
              <h3 className="font-bold text-lg text-white group-hover:text-primary-300 transition-colors line-clamp-1">
                {template.title}
              </h3>
            </Link>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {template.description}
          </p>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {template.techStack.slice(0, 3).map((tech) => (
              <span
                key={tech}
                className="text-[10px] px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800"
              >
                {tech}
              </span>
            ))}
            {template.techStack.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-slate-900 text-slate-500 border border-slate-800">
                +{template.techStack.length - 3}
              </span>
            )}
          </div>
        </div>

        {/* Pricing & CTA Footer */}
        <div className="pt-3 border-t border-slate-800/80 flex items-end justify-between">
          <div>
            <div className="text-[11px] text-slate-400 font-medium">Giá thuê trọn gói:</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-black text-white">
                {formatVND(template.priceMonthly)}
              </span>
              <span className="text-xs text-slate-400">/tháng</span>
            </div>
            {template.priceLifetime && (
              <div className="text-[10px] text-slate-400">
                Mua đứt: <span className="text-slate-300 font-semibold">{formatPriceShort(template.priceLifetime)}</span>
              </div>
            )}
          </div>

          <div className="flex items-center gap-1.5">
            <Link href={`/preview/${template.slug}`}>
              <button
                title="Mở trình xem đa thiết bị"
                className="p-2.5 rounded-xl text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
              >
                <Eye className="w-4 h-4" />
              </button>
            </Link>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onOpenRentModal?.(template)}
              className="text-xs font-semibold"
            >
              <span>Thuê ngay</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
