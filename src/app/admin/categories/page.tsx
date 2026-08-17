import React from "react";
import { getCategories, getTemplates } from "@/lib/db";
import { FolderTree, Layers, Plus, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const revalidate = 0;

export default async function AdminCategoriesPage() {
  const [categories, templates] = await Promise.all([
    getCategories(),
    getTemplates(),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Quản Lý Danh Mục Ngành Nghề
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Phân loại mẫu website theo ngành để khách hàng dễ dàng tìm kiếm và lựa chọn.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const count = templates.filter(
            (t) => t.categoryId === category.id || t.category?.slug === category.slug
          ).length;

          return (
            <div
              key={category.id}
              className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-4 hover:border-slate-700 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-400 flex items-center justify-center font-bold">
                  <FolderTree className="w-5 h-5" />
                </div>
                <Badge variant="outline" className="font-mono text-xs">
                  {count} mẫu web
                </Badge>
              </div>

              <div className="space-y-1">
                <h3 className="font-bold text-base text-white">{category.name}</h3>
                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                  {category.description || "Danh mục giao diện chuyên biệt cho ngành"}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
                <span className="font-mono">slug: /{category.slug}</span>
                <span className="text-emerald-400 font-medium">Hoạt động</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
