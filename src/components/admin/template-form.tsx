"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  Save,
  ArrowLeft,
  Plus,
  Trash2,
  Image as ImageIcon,
  ExternalLink,
  Sparkles,
  Layers,
  DollarSign,
  CheckCircle2,
} from "lucide-react";
import { TemplateData, CategoryData } from "@/lib/mock-data";
import { slugify, formatVND } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { upsertTemplateAction } from "@/actions/template.actions";

interface TemplateFormProps {
  initialData?: TemplateData | null;
  categories: CategoryData[];
}

export function TemplateForm({ initialData, categories }: TemplateFormProps) {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [categoryId, setCategoryId] = useState(initialData?.categoryId || categories[0]?.id || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [thumbnailUrl, setThumbnailUrl] = useState(
    initialData?.thumbnailUrl ||
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
  );
  const [demoUrl, setDemoUrl] = useState(initialData?.demoUrl || "/demo/saas");
  const [priceMonthly, setPriceMonthly] = useState<number>(initialData?.priceMonthly || 250000);
  const [priceLifetime, setPriceLifetime] = useState<number>(initialData?.priceLifetime || 2500000);

  // Arrays
  const [techStackInput, setTechStackInput] = useState("");
  const [techStack, setTechStack] = useState<string[]>(
    initialData?.techStack || ["Next.js 15", "Tailwind CSS", "TypeScript"]
  );

  const [featureInput, setFeatureInput] = useState("");
  const [features, setFeatures] = useState<string[]>(
    initialData?.features || [
      "Chuẩn SEO Google 100%",
      "Tối ưu tốc độ tải trang Core Web Vitals",
      "Tương thích 100% giao diện di động",
      "Tích hợp biểu mẫu nhận tin / đặt hàng",
    ]
  );

  const [isFeatured, setIsFeatured] = useState(initialData?.isFeatured ?? false);
  const [isActive, setIsActive] = useState(initialData?.isActive ?? true);

  const handleTitleChange = (val: string) => {
    setTitle(val);
    if (!initialData) {
      setSlug(slugify(val));
    }
  };

  const handleAddTech = () => {
    if (techStackInput.trim() && !techStack.includes(techStackInput.trim())) {
      setTechStack([...techStack, techStackInput.trim()]);
      setTechStackInput("");
    }
  };

  const handleRemoveTech = (item: string) => {
    setTechStack(techStack.filter((t) => t !== item));
  };

  const handleAddFeature = () => {
    if (featureInput.trim()) {
      setFeatures([...features, featureInput.trim()]);
      setFeatureInput("");
    }
  };

  const handleRemoveFeature = (idx: number) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const res = await upsertTemplateAction({
      id: initialData?.id,
      title,
      slug: slug || slugify(title),
      categoryId,
      description,
      thumbnailUrl,
      demoUrl,
      priceMonthly,
      priceLifetime,
      techStack,
      features,
      isFeatured,
      isActive,
    });

    setIsSubmitting(false);

    if (res.success) {
      router.push("/admin/templates");
      router.refresh();
    } else {
      setError(res.message || "Lỗi khi lưu mẫu website");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8 max-w-4xl">
      {error && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm">
          {error}
        </div>
      )}

      {/* Basic Info */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Layers className="w-4 h-4 text-primary-400" />
          <span>Thông tin cơ bản của mẫu website</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Tên mẫu website *"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            placeholder="VD: Nha Khoa Thẩm Mỹ Pro"
            required
          />

          <Input
            label="Đường dẫn tĩnh (Slug) *"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="VD: nha-khoa-tham-my-pro"
            required
            helperText="Dùng cho link: /templates/[slug]"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
              Danh mục ngành nghề *
            </label>
            <select
              value={categoryId}
              onChange={(e) => setCategoryId(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl text-sm glass-input bg-slate-900 text-slate-200 cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>

          <Input
            label="Đường dẫn Live Demo (Demo URL) *"
            value={demoUrl}
            onChange={(e) => setDemoUrl(e.target.value)}
            placeholder="VD: /demo/dental hoặc https://your-demo.com"
            required
            helperText="URL được nhúng chạy trong Iframe của Live Demo Viewer"
          />
        </div>

        <div className="space-y-1.5">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Mô tả chi tiết mẫu website *
          </label>
          <textarea
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Mô tả phong cách thiết kế, đối tượng phù hợp, các tính năng đặc biệt..."
            className="w-full rounded-xl px-4 py-2.5 text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
            required
          />
        </div>
      </div>

      {/* Pricing & Media */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <DollarSign className="w-4 h-4 text-emerald-400" />
          <span>Biểu phí thuê & Hình ảnh đại diện</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <Input
            label="Giá thuê theo tháng (VND) *"
            type="number"
            value={priceMonthly}
            onChange={(e) => setPriceMonthly(Number(e.target.value))}
            placeholder="250000"
            required
            helperText={`Hiển thị: ${formatVND(priceMonthly)} / tháng`}
          />

          <Input
            label="Giá mua trọn gói mã nguồn (VND)"
            type="number"
            value={priceLifetime}
            onChange={(e) => setPriceLifetime(Number(e.target.value))}
            placeholder="2500000"
            helperText={`Hiển thị: ${formatVND(priceLifetime)}`}
          />
        </div>

        <div className="space-y-3">
          <Input
            label="Đường dẫn ảnh Mockup Thumbnail *"
            value={thumbnailUrl}
            onChange={(e) => setThumbnailUrl(e.target.value)}
            placeholder="https://images.unsplash.com/..."
            required
          />

          {thumbnailUrl && (
            <div className="relative aspect-[16/9] w-full max-w-sm rounded-xl overflow-hidden border border-slate-800 bg-slate-900">
              <Image src={thumbnailUrl} alt="Thumbnail Preview" fill className="object-cover" />
            </div>
          )}
        </div>
      </div>

      {/* Tech Stack & Features */}
      <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
        <h3 className="text-base font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-3">
          <Sparkles className="w-4 h-4 text-accent-cyan" />
          <span>Công nghệ & Danh sách tính năng</span>
        </h3>

        {/* Tech Stack */}
        <div className="space-y-2">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Công nghệ sử dụng (Tags)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddTech();
                }
              }}
              placeholder="VD: Next.js 15, Tailwind, Prisma..."
              className="flex-1 px-4 py-2 rounded-xl text-sm glass-input"
            />
            <Button type="button" variant="secondary" size="md" onClick={handleAddTech}>
              <Plus className="w-4 h-4" />
              <span>Thêm</span>
            </Button>
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs text-slate-200"
              >
                <span>{tech}</span>
                <button
                  type="button"
                  onClick={() => handleRemoveTech(tech)}
                  className="text-slate-400 hover:text-rose-400"
                >
                  <Trash2 className="w-3 h-3" />
                </button>
              </span>
            ))}
          </div>
        </div>

        {/* Feature List */}
        <div className="space-y-2 pt-4 border-t border-slate-800">
          <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
            Tính năng nổi bật (Checklist)
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={featureInput}
              onChange={(e) => setFeatureInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleAddFeature();
                }
              }}
              placeholder="VD: Đặt lịch khám trực tuyến 24/7..."
              className="flex-1 px-4 py-2 rounded-xl text-sm glass-input"
            />
            <Button type="button" variant="secondary" size="md" onClick={handleAddFeature}>
              <Plus className="w-4 h-4" />
              <span>Thêm</span>
            </Button>
          </div>

          <div className="space-y-2 pt-2">
            {features.map((feat, idx) => (
              <div
                key={idx}
                className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{feat}</span>
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveFeature(idx)}
                  className="text-slate-400 hover:text-rose-400 p-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Switches: isFeatured & isActive */}
      <div className="glass-panel p-6 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isFeatured}
            onChange={(e) => setIsFeatured(e.target.checked)}
            className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary"
          />
          <div>
            <span className="text-sm font-bold text-white">Đánh dấu Mẫu Nổi Bật (Featured)</span>
            <p className="text-xs text-slate-400">Hiển thị huy hiệu Hot và ưu tiên lên đầu trang chủ</p>
          </div>
        </label>

        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            checked={isActive}
            onChange={(e) => setIsActive(e.target.checked)}
            className="w-5 h-5 rounded border-slate-700 bg-slate-900 text-primary focus:ring-primary"
          />
          <div>
            <span className="text-sm font-bold text-white">Kích hoạt hiển thị (Active)</span>
            <p className="text-xs text-slate-400">Cho phép khách hàng xem và thuê mẫu này</p>
          </div>
        </label>
      </div>

      {/* Bottom Form Actions */}
      <div className="flex items-center justify-between pt-4 border-t border-slate-800">
        <Link href="/admin/templates">
          <Button variant="ghost" size="md" className="gap-1.5">
            <ArrowLeft className="w-4 h-4" />
            <span>Hủy & Quay lại</span>
          </Button>
        </Link>

        <Button
          type="submit"
          variant="glow"
          size="lg"
          isLoading={isSubmitting}
          className="font-bold shadow-lg"
        >
          <Save className="w-4 h-4" />
          <span>{initialData ? "Lưu Cập Nhật Template" : "Tạo Mới Template"}</span>
        </Button>
      </div>
    </form>
  );
}
