"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Plus,
  Search,
  Edit,
  Trash2,
  Eye,
  ExternalLink,
  Sparkles,
  CheckCircle2,
  XCircle,
  MoreVertical,
} from "lucide-react";
import { TemplateData, CategoryData } from "@/lib/mock-data";
import { formatVND } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { deleteTemplateAction } from "@/actions/template.actions";

interface TemplatesManagerProps {
  initialTemplates: TemplateData[];
  categories: CategoryData[];
}

export function TemplatesManager({ initialTemplates, categories }: TemplatesManagerProps) {
  const [templates, setTemplates] = useState<TemplateData[]>(initialTemplates);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filteredTemplates = templates.filter((t) => {
    const matchesCategory =
      selectedCategory === "all" ||
      t.categoryId === selectedCategory ||
      t.category?.slug === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch =
      !q ||
      t.title.toLowerCase().includes(q) ||
      t.description.toLowerCase().includes(q) ||
      t.techStack.some((tech) => tech.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  const handleDelete = async (id: string, title: string) => {
    if (!window.confirm(`Bạn có chắc chắn muốn xóa mẫu website "${title}"?`)) return;
    setDeletingId(id);
    const result = await deleteTemplateAction(id);
    setDeletingId(null);
    if (result.success) {
      setTemplates((prev) => prev.filter((t) => t.id !== id));
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Header */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search & Category Filter */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1 max-w-2xl">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm mẫu theo tên, công nghệ..."
              className="w-full pl-10 pr-4 py-2 rounded-xl text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
            />
          </div>

          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 rounded-xl text-xs glass-input bg-slate-900 text-slate-200 cursor-pointer"
          >
            <option value="all">Tất cả ngành nghề</option>
            {categories.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name}
              </option>
            ))}
          </select>
        </div>

        <Link href="/admin/templates/new">
          <Button variant="glow" size="md" className="font-bold text-xs shadow-md">
            <Plus className="w-4 h-4" />
            <span>Thêm Mẫu Website Mới</span>
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-[11px] uppercase font-bold text-slate-400 border-b border-slate-800 tracking-wider">
              <tr>
                <th className="px-6 py-4">Mẫu Website</th>
                <th className="px-6 py-4">Ngành Nghề</th>
                <th className="px-6 py-4">Giá Thuê / Mua Đứt</th>
                <th className="px-6 py-4">Lượt Xem</th>
                <th className="px-6 py-4">Trạng Thái</th>
                <th className="px-6 py-4 text-right">Thao Tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredTemplates.length > 0 ? (
                filteredTemplates.map((template) => (
                  <tr key={template.id} className="hover:bg-slate-900/50 transition-colors">
                    {/* Template Thumbnail & Title */}
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="relative w-16 h-11 rounded-lg overflow-hidden bg-slate-900 shrink-0 border border-slate-800">
                          <Image
                            src={template.thumbnailUrl}
                            alt={template.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="space-y-0.5">
                          <div className="font-bold text-white text-sm flex items-center gap-1.5">
                            <span>{template.title}</span>
                            {template.isFeatured && (
                              <Badge variant="cyan" className="text-[10px] py-0">Hot</Badge>
                            )}
                          </div>
                          <p className="text-[11px] text-slate-400 font-mono">/{template.slug}</p>
                        </div>
                      </div>
                    </td>

                    {/* Category */}
                    <td className="px-6 py-4 font-medium text-slate-300">
                      {template.category?.name || "Chưa phân loại"}
                    </td>

                    {/* Pricing */}
                    <td className="px-6 py-4">
                      <div className="font-bold text-white text-sm">
                        {formatVND(template.priceMonthly)} <span className="text-[10px] text-slate-400 font-normal">/tháng</span>
                      </div>
                      {template.priceLifetime && (
                        <div className="text-[11px] text-slate-400">
                          Mua: {formatVND(template.priceLifetime)}
                        </div>
                      )}
                    </td>

                    {/* Views */}
                    <td className="px-6 py-4 font-mono text-slate-300">
                      {template.viewCount} views
                    </td>

                    {/* Status */}
                    <td className="px-6 py-4">
                      {template.isActive ? (
                        <Badge variant="success" className="text-[11px]">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>Hiển thị</span>
                        </Badge>
                      ) : (
                        <Badge variant="danger" className="text-[11px]">
                          <XCircle className="w-3 h-3" />
                          <span>Ẩn</span>
                        </Badge>
                      )}
                    </td>

                    {/* Actions */}
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Link href={`/preview/${template.slug}`} target="_blank">
                          <button
                            title="Xem thử Live Demo"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                          >
                            <Eye className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                        <Link href={`/admin/templates/${template.id}`}>
                          <button
                            title="Chỉnh sửa mẫu"
                            className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-primary-300 transition-colors"
                          >
                            <Edit className="w-3.5 h-3.5" />
                          </button>
                        </Link>
                        <button
                          title="Xóa mẫu"
                          disabled={deletingId === template.id}
                          onClick={() => handleDelete(template.id, template.title)}
                          className="p-1.5 rounded-lg bg-slate-800 hover:bg-rose-950/80 text-rose-400 hover:text-rose-300 transition-colors"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Không tìm thấy mẫu website nào.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
