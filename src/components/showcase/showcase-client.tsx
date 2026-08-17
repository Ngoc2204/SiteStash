"use client";

import React, { useState, useMemo } from "react";
import { CategoryData, TemplateData } from "@/lib/mock-data";
import { CategoryFilter } from "./category-filter";
import { SearchBar } from "./search-bar";
import { SortSelect } from "./sort-select";
import { TemplateCard } from "./template-card";
import { RentalOrderModal } from "./rental-order-modal";
import { Layers, Sparkles, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ShowcaseClientProps {
  categories: CategoryData[];
  initialTemplates: TemplateData[];
}

export function ShowcaseClient({ categories, initialTemplates }: ShowcaseClientProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<"newest" | "views" | "price-asc" | "price-desc">("newest");
  const [selectedTemplateForRent, setSelectedTemplateForRent] = useState<TemplateData | null>(null);

  // Filter and Sort in client
  const filteredTemplates = useMemo(() => {
    let result = [...initialTemplates];

    // Filter category
    if (selectedCategory !== "all") {
      result = result.filter(
        (t) =>
          t.category?.slug === selectedCategory ||
          t.categoryId === categories.find((c) => c.slug === selectedCategory)?.id
      );
    }

    // Filter search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.techStack.some((tech) => tech.toLowerCase().includes(q)) ||
          t.features.some((f) => f.toLowerCase().includes(q))
      );
    }

    // Sort
    if (sortBy === "views") {
      result.sort((a, b) => b.viewCount - a.viewCount);
    } else if (sortBy === "price-asc") {
      result.sort((a, b) => a.priceMonthly - b.priceMonthly);
    } else if (sortBy === "price-desc") {
      result.sort((a, b) => b.priceMonthly - a.priceMonthly);
    } else {
      result.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    }

    return result;
  }, [initialTemplates, selectedCategory, searchQuery, sortBy, categories]);

  return (
    <section id="showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
      {/* Section Title */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-300">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Kho Mẫu Giao Diện Chọn Lọc</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Khám Phá & Trải Nghiệm Mẫu Website
          </h2>
          <p className="text-sm text-slate-400 max-w-xl">
            Tất cả mẫu đều có sẵn Live Demo đa thiết bị. Được tối ưu tốc độ tải trang, tương thích di động 100% và chuẩn SEO Google.
          </p>
        </div>

        <div className="text-xs text-slate-400 font-medium">
          Hiển thị <span className="text-white font-bold">{filteredTemplates.length}</span> mẫu giao diện phù hợp
        </div>
      </div>

      {/* Filter and Search Controls Bar */}
      <div className="space-y-4 mb-10">
        {/* Category Pills */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        {/* Search & Sort Row */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-2">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <SortSelect value={sortBy} onChange={setSortBy} />
        </div>
      </div>

      {/* Template Grid */}
      {filteredTemplates.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTemplates.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
              onOpenRentModal={(tpl) => setSelectedTemplateForRent(tpl)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="glass-panel rounded-3xl p-12 text-center max-w-md mx-auto space-y-4 border border-slate-800">
          <div className="w-12 h-12 rounded-2xl bg-slate-800/80 text-slate-400 flex items-center justify-center mx-auto">
            <Inbox className="w-6 h-6" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-white">Không tìm thấy mẫu phù hợp</h3>
            <p className="text-xs text-slate-400">
              Hãy thử tìm kiếm với từ khóa khác hoặc chuyển về &quot;Tất cả ngành nghề&quot;.
            </p>
          </div>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => {
              setSelectedCategory("all");
              setSearchQuery("");
            }}
          >
            Đặt lại bộ lọc
          </Button>
        </div>
      )}

      {/* Rental Order Modal */}
      <RentalOrderModal
        isOpen={Boolean(selectedTemplateForRent)}
        onClose={() => setSelectedTemplateForRent(null)}
        template={selectedTemplateForRent}
      />
    </section>
  );
}
