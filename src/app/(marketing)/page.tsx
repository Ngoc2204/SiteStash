import React from "react";
import { getCategories, getTemplates } from "@/lib/db";
import { HeroSection } from "@/components/showcase/hero-section";
import { ShowcaseClient } from "@/components/showcase/showcase-client";
import { ProcessSection } from "@/components/showcase/process-section";
import { PricingSection } from "@/components/showcase/pricing-section";
import { WhyChooseSection } from "@/components/showcase/why-choose-section";
import { CtaBanner } from "@/components/showcase/cta-banner";

export const revalidate = 60;

export default async function HomePage() {
  const [categories, templates] = await Promise.all([
    getCategories(),
    getTemplates(),
  ]);

  return (
    <div className="space-y-4">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Kho Mẫu Website Đẹp */}
      <ShowcaseClient
        categories={categories}
        initialTemplates={templates}
      />

      {/* 3. Quy Trình Thiết Kế Website (5 Bước) */}
      <ProcessSection />

      {/* 4. Bảng Giá Ưu Đãi (3 Gói) */}
      <PricingSection />

      {/* 5. Tại Sao Chọn WebPro? (4 Thẻ) */}
      <WhyChooseSection />

      {/* 6. CTA Banner (Tên lửa & Giảm 20%) */}
      <CtaBanner />
    </div>
  );
}
