"use server";

import { revalidatePath } from "next/cache";
import { saveTemplate, deleteTemplate as deleteTplDb } from "@/lib/db";
import { slugify } from "@/lib/utils";

export interface TemplateFormPayload {
  id?: string;
  title: string;
  slug?: string;
  description: string;
  categoryId: string;
  thumbnailUrl: string;
  galleryUrls?: string[];
  demoUrl: string;
  priceMonthly: number;
  priceLifetime?: number;
  techStack: string[];
  features: string[];
  isFeatured?: boolean;
  isActive?: boolean;
}

export async function upsertTemplateAction(payload: TemplateFormPayload) {
  try {
    const slug = payload.slug || slugify(payload.title);

    const saved = await saveTemplate({
      id: payload.id,
      title: payload.title,
      slug,
      description: payload.description,
      categoryId: payload.categoryId,
      thumbnailUrl: payload.thumbnailUrl,
      galleryUrls: payload.galleryUrls || [payload.thumbnailUrl],
      demoUrl: payload.demoUrl,
      priceMonthly: Number(payload.priceMonthly),
      priceLifetime: payload.priceLifetime ? Number(payload.priceLifetime) : Number(payload.priceMonthly) * 10,
      techStack: payload.techStack,
      features: payload.features,
      isFeatured: payload.isFeatured ?? false,
      isActive: payload.isActive ?? true,
    });

    revalidatePath("/");
    revalidatePath("/templates");
    revalidatePath(`/templates/${slug}`);
    revalidatePath("/admin/templates");
    revalidatePath("/admin/dashboard");

    return { success: true, data: saved };
  } catch (error) {
    console.error("Error upserting template:", error);
    return { success: false, message: (error as Error).message };
  }
}

export async function deleteTemplateAction(id: string) {
  try {
    await deleteTplDb(id);
    revalidatePath("/");
    revalidatePath("/templates");
    revalidatePath("/admin/templates");
    revalidatePath("/admin/dashboard");
    return { success: true };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
