import React from "react";
import { notFound } from "next/navigation";
import { getTemplates, getCategories } from "@/lib/db";
import { TemplateForm } from "@/components/admin/template-form";

export const revalidate = 0;

interface EditTemplatePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function AdminEditTemplatePage({ params }: EditTemplatePageProps) {
  const { id } = await params;
  const [templates, categories] = await Promise.all([
    getTemplates(),
    getCategories(),
  ]);

  const template = templates.find((t) => t.id === id || t.slug === id);

  if (!template) {
    notFound();
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Chỉnh Sửa Mẫu: {template.title}
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Cập nhật thông tin, bảng giá hoặc danh sách tính năng cho mẫu website này.
        </p>
      </div>

      <TemplateForm initialData={template} categories={categories} />
    </div>
  );
}
