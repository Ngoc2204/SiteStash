import React from "react";
import { notFound } from "next/navigation";
import { getTemplateBySlug, getTemplates } from "@/lib/db";
import { PreviewContainer } from "@/components/preview/preview-container";
import type { Metadata } from "next";

interface PreviewPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: PreviewPageProps): Promise<Metadata> {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template) {
    return {
      title: "Xem Thử Giao Diện - SiteStash",
    };
  }

  return {
    title: `Live Demo: ${template.title} | SiteStash`,
    description: `Trải nghiệm trực tiếp mẫu website ${template.title} trên Desktop, Tablet và Mobile.`,
  };
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { slug } = await params;
  const template = await getTemplateBySlug(slug);

  if (!template) {
    notFound();
  }

  return <PreviewContainer template={template} />;
}
