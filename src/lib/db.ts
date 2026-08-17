import { PrismaClient } from "@prisma/client";
import {
  CategoryData,
  INITIAL_CATEGORIES,
  INITIAL_ORDERS,
  INITIAL_TEMPLATES,
  RentalOrderData,
  TemplateData,
} from "./mock-data";

// Global Prisma Singleton
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// In-memory runtime cache for seamless offline fallback / static build
let runtimeCategories: CategoryData[] = [...INITIAL_CATEGORIES];
let runtimeTemplates: TemplateData[] = [...INITIAL_TEMPLATES];
let runtimeOrders: RentalOrderData[] = [...INITIAL_ORDERS];

/**
 * Fetch all categories
 */
export async function getCategories(): Promise<CategoryData[]> {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
      include: {
        _count: {
          select: { templates: true },
        },
      },
    });
    if (categories.length > 0) {
      return categories.map((c) => ({
        id: c.id,
        name: c.name,
        slug: c.slug,
        description: c.description || "",
        icon: c.icon || "Folder",
      }));
    }
  } catch (error) {
    // Fallback gracefully
  }
  return runtimeCategories;
}

/**
 * Fetch all templates with optional filtering
 */
export async function getTemplates(options?: {
  categoryId?: string;
  categorySlug?: string;
  search?: string;
  isFeatured?: boolean;
  sortBy?: "newest" | "views" | "price-asc" | "price-desc";
  limit?: number;
}): Promise<TemplateData[]> {
  try {
    const where: any = { isActive: true };
    if (options?.isFeatured) where.isFeatured = true;
    if (options?.categorySlug) {
      where.category = { slug: options.categorySlug };
    } else if (options?.categoryId && options.categoryId !== "all") {
      where.categoryId = options.categoryId;
    }
    if (options?.search) {
      where.OR = [
        { title: { contains: options.search, mode: "insensitive" } },
        { description: { contains: options.search, mode: "insensitive" } },
        { techStack: { hasSome: [options.search] } },
      ];
    }

    let orderBy: any = { createdAt: "desc" };
    if (options?.sortBy === "views") orderBy = { viewCount: "desc" };
    if (options?.sortBy === "price-asc") orderBy = { priceMonthly: "asc" };
    if (options?.sortBy === "price-desc") orderBy = { priceMonthly: "desc" };

    const templates = await prisma.template.findMany({
      where,
      orderBy,
      take: options?.limit,
      include: { category: true },
    });

    if (templates.length > 0) {
      return templates.map((t) => ({
        id: t.id,
        title: t.title,
        slug: t.slug,
        description: t.description,
        categoryId: t.categoryId,
        category: t.category
          ? {
              id: t.category.id,
              name: t.category.name,
              slug: t.category.slug,
              description: t.category.description || "",
              icon: t.category.icon || "Folder",
            }
          : undefined,
        thumbnailUrl: t.thumbnailUrl,
        galleryUrls: t.galleryUrls,
        demoUrl: t.demoUrl,
        priceMonthly: t.priceMonthly,
        priceLifetime: t.priceLifetime || 0,
        techStack: t.techStack,
        features: t.features,
        isFeatured: t.isFeatured,
        isActive: t.isActive,
        viewCount: t.viewCount,
        createdAt: t.createdAt.toISOString(),
        updatedAt: t.updatedAt.toISOString(),
      }));
    }
  } catch (error) {
    // Fallback gracefully
  }

  // In-memory fallback
  let list = [...runtimeTemplates];
  if (options?.isFeatured) {
    list = list.filter((t) => t.isFeatured);
  }
  if (options?.categorySlug && options.categorySlug !== "all") {
    const cat = runtimeCategories.find((c) => c.slug === options.categorySlug);
    if (cat) {
      list = list.filter((t) => t.categoryId === cat.id);
    }
  } else if (options?.categoryId && options.categoryId !== "all") {
    list = list.filter((t) => t.categoryId === options.categoryId);
  }
  if (options?.search) {
    const q = options.search.toLowerCase();
    list = list.filter(
      (t) =>
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q) ||
        t.techStack.some((tech) => tech.toLowerCase().includes(q))
    );
  }

  if (options?.sortBy === "views") {
    list.sort((a, b) => b.viewCount - a.viewCount);
  } else if (options?.sortBy === "price-asc") {
    list.sort((a, b) => a.priceMonthly - b.priceMonthly);
  } else if (options?.sortBy === "price-desc") {
    list.sort((a, b) => b.priceMonthly - a.priceMonthly);
  } else {
    list.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  if (options?.limit) {
    list = list.slice(0, options.limit);
  }

  return list.map((t) => ({
    ...t,
    category: runtimeCategories.find((c) => c.id === t.categoryId),
  }));
}

/**
 * Fetch a single template by its slug
 */
export async function getTemplateBySlug(slug: string): Promise<TemplateData | null> {
  try {
    const template = await prisma.template.findUnique({
      where: { slug },
      include: { category: true },
    });
    if (template) {
      prisma.template
        .update({
          where: { id: template.id },
          data: { viewCount: { increment: 1 } },
        })
        .catch(() => {});

      return {
        id: template.id,
        title: template.title,
        slug: template.slug,
        description: template.description,
        categoryId: template.categoryId,
        category: template.category
          ? {
              id: template.category.id,
              name: template.category.name,
              slug: template.category.slug,
              description: template.category.description || "",
              icon: template.category.icon || "Folder",
            }
          : undefined,
        thumbnailUrl: template.thumbnailUrl,
        galleryUrls: template.galleryUrls,
        demoUrl: template.demoUrl,
        priceMonthly: template.priceMonthly,
        priceLifetime: template.priceLifetime || 0,
        techStack: template.techStack,
        features: template.features,
        isFeatured: template.isFeatured,
        isActive: template.isActive,
        viewCount: template.viewCount + 1,
        createdAt: template.createdAt.toISOString(),
        updatedAt: template.updatedAt.toISOString(),
      };
    }
  } catch (error) {
    // Fallback gracefully
  }

  const found = runtimeTemplates.find((t) => t.slug === slug);
  if (found) {
    found.viewCount += 1;
    return {
      ...found,
      category: runtimeCategories.find((c) => c.id === found.categoryId),
    };
  }
  return null;
}

/**
 * Fetch a single template by ID
 */
export async function getTemplateById(id: string): Promise<TemplateData | null> {
  try {
    const template = await prisma.template.findUnique({
      where: { id },
      include: { category: true },
    });
    if (template) {
      return {
        id: template.id,
        title: template.title,
        slug: template.slug,
        description: template.description,
        categoryId: template.categoryId,
        category: template.category
          ? {
              id: template.category.id,
              name: template.category.name,
              slug: template.category.slug,
              description: template.category.description || "",
              icon: template.category.icon || "Folder",
            }
          : undefined,
        thumbnailUrl: template.thumbnailUrl,
        galleryUrls: template.galleryUrls,
        demoUrl: template.demoUrl,
        priceMonthly: template.priceMonthly,
        priceLifetime: template.priceLifetime || 0,
        techStack: template.techStack,
        features: template.features,
        isFeatured: template.isFeatured,
        isActive: template.isActive,
        viewCount: template.viewCount,
        createdAt: template.createdAt.toISOString(),
        updatedAt: template.updatedAt.toISOString(),
      };
    }
  } catch (error) {
    // Fallback
  }
  const found = runtimeTemplates.find((t) => t.id === id);
  if (found) {
    return {
      ...found,
      category: runtimeCategories.find((c) => c.id === found.categoryId),
    };
  }
  return null;
}

/**
 * Fetch all orders for Admin
 */
export async function getOrders(): Promise<RentalOrderData[]> {
  try {
    const orders = await prisma.rentalOrder.findMany({
      orderBy: { createdAt: "desc" },
      include: { template: true },
    });
    if (orders.length > 0) {
      return orders.map((o) => ({
        id: o.id,
        customerName: o.customerName,
        customerPhone: o.customerPhone,
        customerEmail: o.customerEmail,
        customerNote: o.customerNote,
        templateId: o.templateId,
        template: o.template
          ? {
              ...o.template,
              priceLifetime: o.template.priceLifetime || 0,
              createdAt: o.template.createdAt.toISOString(),
              updatedAt: o.template.updatedAt.toISOString(),
            }
          : undefined,
        planType: o.planType as any,
        customDomain: o.customDomain,
        status: o.status as any,
        adminNotes: o.adminNotes,
        createdAt: o.createdAt.toISOString(),
        updatedAt: o.updatedAt.toISOString(),
      }));
    }
  } catch (error) {
    // Fallback
  }

  return runtimeOrders.map((o) => ({
    ...o,
    template: runtimeTemplates.find((t) => t.id === o.templateId),
  }));
}

/**
 * Create a new Rental Order
 */
export async function createRentalOrder(data: {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerNote?: string;
  templateId: string;
  planType: "MONTHLY" | "YEARLY" | "LIFETIME";
  customDomain?: string;
}): Promise<RentalOrderData> {
  const newId = `ord-${Date.now().toString(36)}-${Math.random().toString(36).substring(2, 6)}`;
  const newOrderData: RentalOrderData = {
    id: newId,
    customerName: data.customerName,
    customerPhone: data.customerPhone,
    customerEmail: data.customerEmail,
    customerNote: data.customerNote || null,
    templateId: data.templateId,
    planType: data.planType,
    customDomain: data.customDomain || null,
    status: "PENDING",
    adminNotes: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  try {
    const created = await prisma.rentalOrder.create({
      data: {
        customerName: data.customerName,
        customerPhone: data.customerPhone,
        customerEmail: data.customerEmail,
        customerNote: data.customerNote,
        templateId: data.templateId,
        planType: data.planType,
        customDomain: data.customDomain,
        status: "PENDING",
      },
      include: { template: true },
    });

    return {
      id: created.id,
      customerName: created.customerName,
      customerPhone: created.customerPhone,
      customerEmail: created.customerEmail,
      customerNote: created.customerNote,
      templateId: created.templateId,
      template: created.template
        ? {
            ...created.template,
            priceLifetime: created.template.priceLifetime || 0,
            createdAt: created.template.createdAt.toISOString(),
            updatedAt: created.template.updatedAt.toISOString(),
          }
        : undefined,
      planType: created.planType as any,
      customDomain: created.customDomain,
      status: created.status as any,
      adminNotes: created.adminNotes,
      createdAt: created.createdAt.toISOString(),
      updatedAt: created.updatedAt.toISOString(),
    };
  } catch (error) {
    const template = runtimeTemplates.find((t) => t.id === data.templateId);
    newOrderData.template = template;
    runtimeOrders = [newOrderData, ...runtimeOrders];
    return newOrderData;
  }
}

/**
 * Update Rental Order Status / Admin Notes
 */
export async function updateOrderStatus(
  orderId: string,
  status: "PENDING" | "CONTACTED" | "PROCESSING" | "ACTIVE" | "CANCELLED",
  adminNotes?: string
): Promise<RentalOrderData | null> {
  try {
    const updated = await prisma.rentalOrder.update({
      where: { id: orderId },
      data: {
        status,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
      },
      include: { template: true },
    });

    return {
      id: updated.id,
      customerName: updated.customerName,
      customerPhone: updated.customerPhone,
      customerEmail: updated.customerEmail,
      customerNote: updated.customerNote,
      templateId: updated.templateId,
      planType: updated.planType as any,
      customDomain: updated.customDomain,
      status: updated.status as any,
      adminNotes: updated.adminNotes,
      createdAt: updated.createdAt.toISOString(),
      updatedAt: updated.updatedAt.toISOString(),
    };
  } catch (error) {
    const idx = runtimeOrders.findIndex((o) => o.id === orderId);
    if (idx !== -1) {
      runtimeOrders[idx] = {
        ...runtimeOrders[idx],
        status,
        ...(adminNotes !== undefined ? { adminNotes } : {}),
        updatedAt: new Date().toISOString(),
      };
      return runtimeOrders[idx];
    }
  }
  return null;
}

/**
 * Create or update a template
 */
export async function saveTemplate(data: Partial<TemplateData> & { title: string; slug: string; categoryId: string }): Promise<TemplateData> {
  try {
    if (data.id) {
      const updated = await prisma.template.update({
        where: { id: data.id },
        data: {
          title: data.title,
          slug: data.slug,
          description: data.description || "",
          categoryId: data.categoryId,
          thumbnailUrl: data.thumbnailUrl || "",
          galleryUrls: data.galleryUrls || [],
          demoUrl: data.demoUrl || "",
          priceMonthly: data.priceMonthly || 250000,
          priceLifetime: data.priceLifetime || 2500000,
          techStack: data.techStack || [],
          features: data.features || [],
          isFeatured: data.isFeatured ?? false,
          isActive: data.isActive ?? true,
        },
        include: { category: true },
      });
      return {
        id: updated.id,
        title: updated.title,
        slug: updated.slug,
        description: updated.description,
        categoryId: updated.categoryId,
        category: updated.category
          ? {
              id: updated.category.id,
              name: updated.category.name,
              slug: updated.category.slug,
              description: updated.category.description || "",
              icon: updated.category.icon || "Folder",
            }
          : undefined,
        thumbnailUrl: updated.thumbnailUrl,
        galleryUrls: updated.galleryUrls,
        demoUrl: updated.demoUrl,
        priceMonthly: updated.priceMonthly,
        priceLifetime: updated.priceLifetime || 0,
        techStack: updated.techStack,
        features: updated.features,
        isFeatured: updated.isFeatured,
        isActive: updated.isActive,
        viewCount: updated.viewCount,
        createdAt: updated.createdAt.toISOString(),
        updatedAt: updated.updatedAt.toISOString(),
      };
    } else {
      const created = await prisma.template.create({
        data: {
          title: data.title,
          slug: data.slug,
          description: data.description || "",
          categoryId: data.categoryId,
          thumbnailUrl: data.thumbnailUrl || "",
          galleryUrls: data.galleryUrls || [],
          demoUrl: data.demoUrl || "",
          priceMonthly: data.priceMonthly || 250000,
          priceLifetime: data.priceLifetime || 2500000,
          techStack: data.techStack || [],
          features: data.features || [],
          isFeatured: data.isFeatured ?? false,
          isActive: data.isActive ?? true,
        },
        include: { category: true },
      });
      return {
        id: created.id,
        title: created.title,
        slug: created.slug,
        description: created.description,
        categoryId: created.categoryId,
        category: created.category
          ? {
              id: created.category.id,
              name: created.category.name,
              slug: created.category.slug,
              description: created.category.description || "",
              icon: created.category.icon || "Folder",
            }
          : undefined,
        thumbnailUrl: created.thumbnailUrl,
        galleryUrls: created.galleryUrls,
        demoUrl: created.demoUrl,
        priceMonthly: created.priceMonthly,
        priceLifetime: created.priceLifetime || 0,
        techStack: created.techStack,
        features: created.features,
        isFeatured: created.isFeatured,
        isActive: created.isActive,
        viewCount: created.viewCount,
        createdAt: created.createdAt.toISOString(),
        updatedAt: created.updatedAt.toISOString(),
      };
    }
  } catch (error) {
    if (data.id) {
      const idx = runtimeTemplates.findIndex((t) => t.id === data.id);
      if (idx !== -1) {
        runtimeTemplates[idx] = {
          ...runtimeTemplates[idx],
          ...data,
          updatedAt: new Date().toISOString(),
        } as TemplateData;
        return runtimeTemplates[idx];
      }
    }
    const newTpl: TemplateData = {
      id: `tpl-${Date.now().toString(36)}`,
      title: data.title,
      slug: data.slug,
      description: data.description || "",
      categoryId: data.categoryId,
      thumbnailUrl: data.thumbnailUrl || "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
      galleryUrls: data.galleryUrls || [],
      demoUrl: data.demoUrl || "/demo/saas",
      priceMonthly: data.priceMonthly || 250000,
      priceLifetime: data.priceLifetime || 2500000,
      techStack: data.techStack || ["Next.js", "TailwindCSS"],
      features: data.features || ["Chuẩn SEO", "Tương thích Mobile"],
      isFeatured: data.isFeatured ?? false,
      isActive: data.isActive ?? true,
      viewCount: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    runtimeTemplates = [newTpl, ...runtimeTemplates];
    return newTpl;
  }
}

/**
 * Delete a template
 */
export async function deleteTemplate(id: string): Promise<boolean> {
  try {
    await prisma.template.delete({ where: { id } });
    return true;
  } catch (error) {
    runtimeTemplates = runtimeTemplates.filter((t) => t.id !== id);
    return true;
  }
}
