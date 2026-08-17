import { PrismaClient } from "@prisma/client";
import { INITIAL_CATEGORIES, INITIAL_TEMPLATES } from "../src/lib/mock-data";

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting SiteStash database seed...");

  // 1. Seed Categories
  for (const cat of INITIAL_CATEGORIES) {
    await prisma.category.upsert({
      where: { slug: cat.slug },
      update: {
        name: cat.name,
        description: cat.description,
        icon: cat.icon,
      },
      create: {
        id: cat.id,
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
        icon: cat.icon,
      },
    });
  }
  console.log(`✅ Seeded ${INITIAL_CATEGORIES.length} categories.`);

  // 2. Seed Templates
  for (const tpl of INITIAL_TEMPLATES) {
    await prisma.template.upsert({
      where: { slug: tpl.slug },
      update: {
        title: tpl.title,
        description: tpl.description,
        categoryId: tpl.categoryId,
        thumbnailUrl: tpl.thumbnailUrl,
        galleryUrls: tpl.galleryUrls,
        demoUrl: tpl.demoUrl,
        priceMonthly: tpl.priceMonthly,
        priceLifetime: tpl.priceLifetime,
        techStack: tpl.techStack,
        features: tpl.features,
        isFeatured: tpl.isFeatured,
        isActive: tpl.isActive,
        viewCount: tpl.viewCount,
      },
      create: {
        id: tpl.id,
        title: tpl.title,
        slug: tpl.slug,
        description: tpl.description,
        categoryId: tpl.categoryId,
        thumbnailUrl: tpl.thumbnailUrl,
        galleryUrls: tpl.galleryUrls,
        demoUrl: tpl.demoUrl,
        priceMonthly: tpl.priceMonthly,
        priceLifetime: tpl.priceLifetime,
        techStack: tpl.techStack,
        features: tpl.features,
        isFeatured: tpl.isFeatured,
        isActive: tpl.isActive,
        viewCount: tpl.viewCount,
      },
    });
  }
  console.log(`✅ Seeded ${INITIAL_TEMPLATES.length} templates.`);

  console.log("🎉 Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error("❌ Seeding error:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
