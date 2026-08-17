import React from "react";
import { notFound } from "next/navigation";
import { getTemplateBySlug, getTemplates } from "@/lib/db";
import { TemplateDetailClient } from "@/components/showcase/template-detail-client";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import type { Metadata } from "next";

interface TemplateDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: TemplateDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Chi Tiết Giao Diện - SiteStash",
    };
  }

  return {
    title: `${template.title} - Mẫu Website Trọn Gói Chuẩn SEO | SiteStash`,
    description: template.description,
    openGraph: {
      title: `${template.title} - Thuê Website Trọn Gói SiteStash`,
      description: template.description,
      images: [{ url: template.thumbnailUrl }],
    },
  };
}

export default async function TemplateDetailPage({ params }: TemplateDetailPageProps) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  const allTemplates = await getTemplates({ limit: 4 });
  const relatedTemplates = allTemplates.filter((t) => t.id !== template.id).slice(0, 3);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <TemplateDetailClient
          template={template}
          relatedTemplates={relatedTemplates}
        />
      </main>
      <Footer />
    </div>
  );
}
