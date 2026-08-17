"use client";

import React, { useState, useMemo } from "react";
import { CategoryData, TemplateData } from "@/lib/mock-data";
import { TemplateCard } from "./template-card";
import { ArrowRight, Sparkles, Wand2 } from "lucide-react";

interface ShowcaseClientProps {
  categories: CategoryData[];
  initialTemplates: TemplateData[];
}

export function ShowcaseClient({ categories, initialTemplates }: ShowcaseClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const filterTabs = [
    { id: "all", label: "Tất cả" },
    { id: "ban-hang", label: "Bán hàng" },
    { id: "doanh-nghiep", label: "Doanh nghiệp" },
    { id: "spa-lam-dep", label: "Spa - Làm đẹp" },
    { id: "nha-hang", label: "Nhà hàng" },
    { id: "bat-dong-san", label: "Bất động sản" },
    { id: "giao-duc", label: "Giáo dục" },
  ];

  const filteredTemplates = useMemo(() => {
    if (selectedCategory === "all") return initialTemplates;
    return initialTemplates.filter(
      (t) =>
        t.category?.slug === selectedCategory ||
        t.categoryId === categories.find((c) => c.slug === selectedCategory)?.id
    );
  }, [initialTemplates, selectedCategory, categories]);

  return (
    <section id="showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-20">
      {/* Header */}
      <div className="text-center space-y-3 mb-10">
        <div className="flex items-center justify-center gap-2 text-2xl sm:text-3xl font-black text-white">
          <span className="text-amber-400">✨</span>
          <span>Kho Mẫu Website Đẹp</span>
          <span className="text-amber-400">✨</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-400">
          Hơn <span className="text-cyan-400 font-bold">500+</span> mẫu website được thiết kế chuyên nghiệp, đa dạng ngành nghề
        </p>
      </div>

      {/* Pill Filter Tabs Bar */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = selectedCategory === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setSelectedCategory(tab.id)}
              className={`px-5 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 border ${
                isActive
                  ? "btn-gradient-purple border-purple-400 text-white shadow-lg shadow-purple-500/40"
                  : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-600 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Template 6-Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTemplates.map((template) => (
          <TemplateCard key={template.id} template={template} />
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center pt-12">
        <button
          onClick={() => setSelectedCategory("all")}
          className="px-7 py-3 rounded-xl text-xs font-bold bg-[#141a38] text-slate-200 border border-slate-700/80 hover:border-purple-500 hover:text-white transition-all inline-flex items-center gap-2 shadow-lg"
        >
          <span>Xem tất cả mẫu website</span>
          <ArrowRight className="w-4 h-4 text-purple-400" />
        </button>
      </div>
    </section>
  );
}
