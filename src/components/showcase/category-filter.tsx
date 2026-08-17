"use client";

import React from "react";
import {
  Stethoscope,
  UtensilsCrossed,
  Building2,
  ShoppingBag,
  Laptop,
  Palette,
  LayoutGrid,
} from "lucide-react";
import { CategoryData } from "@/lib/mock-data";

interface CategoryFilterProps {
  categories: CategoryData[];
  selectedCategory: string;
  onSelectCategory: (slug: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}: CategoryFilterProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Stethoscope":
        return <Stethoscope className="w-4 h-4" />;
      case "UtensilsCrossed":
        return <UtensilsCrossed className="w-4 h-4" />;
      case "Building2":
        return <Building2 className="w-4 h-4" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-4 h-4" />;
      case "Laptop":
        return <Laptop className="w-4 h-4" />;
      case "Palette":
        return <Palette className="w-4 h-4" />;
      default:
        return <LayoutGrid className="w-4 h-4" />;
    }
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none scroll-smooth">
      {/* All Categories Button */}
      <button
        onClick={() => onSelectCategory("all")}
        className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 shrink-0 border ${
          selectedCategory === "all"
            ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
            : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
        }`}
      >
        <LayoutGrid className="w-4 h-4" />
        <span>Tất cả ngành nghề</span>
      </button>

      {/* Category Pills */}
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.slug;
        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 flex items-center gap-2 shrink-0 border ${
              isSelected
                ? "bg-primary text-white border-primary shadow-lg shadow-primary/30"
                : "bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white"
            }`}
          >
            {getIcon(cat.icon)}
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
}
