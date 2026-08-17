import React from "react";
import { getCategories, getTemplates } from "@/lib/db";
import { HeroSection } from "@/components/showcase/hero-section";
import { ShowcaseClient } from "@/components/showcase/showcase-client";
import { ComparisonSection } from "@/components/showcase/comparison-section";
import { ProcessSection } from "@/components/showcase/process-section";
import { TestimonialsSection } from "@/components/showcase/testimonials-section";
import { CtaBanner } from "@/components/showcase/cta-banner";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const [categories, templates] = await Promise.all([
    getCategories(),
    getTemplates(),
  ]);

  return (
    <div className="space-y-6">
      {/* 1. Hero Section with Live Mockup Switcher & Key Metrics */}
      <HeroSection />

      {/* 2. Main Showcase Catalog with Live Filtering & Order Modal */}
      <ShowcaseClient
        categories={categories}
        initialTemplates={templates}
      />

      {/* 3. Competitive Advantage & Solution Comparison Matrix */}
      <ComparisonSection />

      {/* 4. Four-Step WaaS Workflow & Timeline */}
      <ProcessSection />

      {/* 5. Social Proof & Customer Testimonials */}
      <TestimonialsSection />

      {/* 6. High-Conversion Final CTA Banner */}
      <CtaBanner />
    </div>
  );
}
