"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Eye, ArrowRight } from "lucide-react";
import { TemplateData } from "@/lib/mock-data";

interface TemplateCardProps {
  template: TemplateData;
  onOpenRentModal?: (template: TemplateData) => void;
}

export function TemplateCard({ template }: TemplateCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="glass-card rounded-2xl overflow-hidden flex flex-col h-full border border-indigo-950/80 hover:border-purple-500/50 transition-all duration-300 group"
    >
      {/* Thumbnail */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950">
        <Image
          src={template.thumbnailUrl}
          alt={template.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className={`object-cover object-top transition-transform duration-500 ${
            isHovered ? "scale-105" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1127] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4 bg-[#0d1127]/90">
        <div className="space-y-1">
          <h3 className="font-bold text-base text-white group-hover:text-cyan-300 transition-colors">
            {template.title}
          </h3>
          <p className="text-xs text-slate-400">
            {template.description}
          </p>
        </div>

        {/* Action Button: Xem demo */}
        <div className="pt-2">
          <Link href={`/preview/${template.slug}`} className="block">
            <button className="w-full py-2 rounded-xl text-xs font-semibold bg-slate-900/90 text-slate-200 border border-slate-700/80 hover:border-purple-500/80 hover:text-white hover:bg-slate-800 transition-all flex items-center justify-center gap-1.5">
              <span>Xem demo</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
