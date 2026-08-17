import React from "react";
import { getCategories } from "@/lib/db";
import { TemplateForm } from "@/components/admin/template-form";

export const revalidate = 0;

export default async function AdminNewTemplatePage() {
  const categories = await getCategories();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Đăng Tải Mẫu Website Mới
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Điền các thông số kỹ thuật, giá thuê, ảnh đại diện và link demo để đưa mẫu lên nền tảng.
        </p>
      </div>

      <TemplateForm categories={categories} />
    </div>
  );
}
