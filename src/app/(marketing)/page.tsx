import React from "react";
import { getCategories, getTemplates } from "@/lib/db";
import { HeroSection } from "@/components/showcase/hero-section";
import { ShowcaseClient } from "@/components/showcase/showcase-client";
import { ProcessSection } from "@/components/showcase/process-section";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function HomePage() {
  const [categories, templates] = await Promise.all([
    getCategories(),
    getTemplates(),
  ]);

  return (
    <div className="space-y-12">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Main Showcase Catalog with Live Filtering & Order Modal */}
      <ShowcaseClient
        categories={categories}
        initialTemplates={templates}
      />

      {/* 3. Four-Step WaaS Workflow & Guarantee */}
      <ProcessSection />
    </div>
  );
}
