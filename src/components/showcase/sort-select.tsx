"use client";

import React from "react";
import { ArrowDownWideNarrow } from "lucide-react";

interface SortSelectProps {
  value: string;
  onChange: (value: "newest" | "views" | "price-asc" | "price-desc") => void;
}

export function SortSelect({ value, onChange }: SortSelectProps) {
  return (
    <div className="relative inline-flex items-center">
      <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <ArrowDownWideNarrow className="w-4 h-4" />
      </div>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as any)}
        className="pl-9 pr-8 py-2.5 rounded-xl text-sm glass-input appearance-none cursor-pointer focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-slate-900/90 text-slate-200"
      >
        <option value="newest" className="bg-slate-900 text-white">Mới nhất</option>
        <option value="views" className="bg-slate-900 text-white">Xem nhiều nhất</option>
        <option value="price-asc" className="bg-slate-900 text-white">Giá thấp → cao</option>
        <option value="price-desc" className="bg-slate-900 text-white">Giá cao → thấp</option>
      </select>
    </div>
  );
}
