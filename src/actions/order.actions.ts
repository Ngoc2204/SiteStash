"use server";

import { z } from "zod";
import { createRentalOrder, prisma } from "@/lib/db";
import { sendTelegramOrderNotification } from "@/lib/telegram";
import { INITIAL_TEMPLATES } from "@/lib/mock-data";

// Order Schema validation with Zod
export const RentalOrderSchema = z.object({
  templateId: z.string().min(1, "Vui lòng chọn mẫu website"),
  templateTitle: z.string().optional(),
  customerName: z.string().min(2, "Vui lòng nhập họ và tên (tối thiểu 2 ký tự)"),
  customerPhone: z
    .string()
    .min(9, "Vui lòng nhập số điện thoại hợp lệ")
    .max(15, "Số điện thoại không hợp lệ")
    .regex(/^[0-9+.\s()-]+$/, "Số điện thoại chỉ được chứa chữ số và ký tự hợp lệ"),
  customerEmail: z.string().email("Vui lòng nhập địa chỉ email hợp lệ"),
  customerNote: z.string().optional(),
  planType: z.enum(["MONTHLY", "YEARLY", "LIFETIME"], {
    errorMap: () => ({ message: "Vui lòng chọn gói dịch vụ hợp lệ" }),
  }),
  customDomain: z.string().optional(),
});

export type RentalOrderInput = z.infer<typeof RentalOrderSchema>;

export interface OrderActionResult {
  success: boolean;
  message: string;
  orderId?: string;
  errors?: Record<string, string[]>;
}

/**
 * Server Action: Submit a rental order
 */
export async function submitRentalOrder(formData: RentalOrderInput): Promise<OrderActionResult> {
  try {
    // 1. Validate payload with Zod
    const validated = RentalOrderSchema.safeParse(formData);
    if (!validated.success) {
      const fieldErrors = validated.error.flatten().fieldErrors;
      return {
        success: false,
        message: "Dữ liệu không hợp lệ, vui lòng kiểm tra lại thông tin.",
        errors: fieldErrors as Record<string, string[]>,
      };
    }

    const { templateId, customerName, customerPhone, customerEmail, customerNote, planType, customDomain } =
      validated.data;

    // 2. Fetch template info for price and title
    let templateTitle = validated.data.templateTitle || "Website Template";
    let price = 250000;

    const tpl = INITIAL_TEMPLATES.find((t) => t.id === templateId || t.slug === templateId);
    if (tpl) {
      templateTitle = tpl.title;
      if (planType === "MONTHLY") price = tpl.priceMonthly;
      else if (planType === "YEARLY") price = tpl.priceMonthly * 12 * 0.8; // 20% discount
      else if (planType === "LIFETIME") price = tpl.priceLifetime || tpl.priceMonthly * 10;
    }

    // 3. Save order to database
    const newOrder = await createRentalOrder({
      customerName,
      customerPhone,
      customerEmail,
      customerNote,
      templateId: tpl ? tpl.id : templateId,
      planType,
      customDomain,
    });

    // 4. Dispatch Telegram Bot Notification asynchronously
    try {
      await sendTelegramOrderNotification({
        orderId: newOrder.id,
        customerName,
        customerPhone,
        customerEmail,
        customerNote,
        templateTitle,
        planType,
        price,
        customDomain,
      });
    } catch (telegramErr) {
      console.warn("Telegram dispatch warning (non-fatal):", telegramErr);
    }

    return {
      success: true,
      message: "Đăng ký thuê website thành công! Chuyên viên SiteStash sẽ liên hệ lại trong vòng 15 phút.",
      orderId: newOrder.id,
    };
  } catch (error) {
    console.error("Error in submitRentalOrder:", error);
    return {
      success: false,
      message: "Đã xảy ra lỗi khi tạo đơn hàng. Vui lòng thử lại hoặc liên hệ Hotline: 0912.345.678.",
    };
  }
}
