import React from "react";
import { getTemplates, getCategories } from "@/lib/db";
import { TemplatesManager } from "@/components/admin/templates-manager";

export const revalidate = 0;

export default async function AdminTemplatesPage() {
  const [templates, categories] = await Promise.all([
    getTemplates(),
    getCategories(),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Quản Lý Kho Giao Diện Website (Templates)
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Đăng tải mẫu mới, cập nhật giá thuê, ảnh chụp mockup và cấu hình link xem demo.
        </p>
      </div>

      <TemplatesManager
        initialTemplates={templates}
        categories={categories}
      />
    </div>
  );
}
