"use server";

import { revalidatePath } from "next/cache";
import { updateOrderStatus } from "@/lib/db";

export async function updateOrderStatusAction(
  orderId: string,
  status: "PENDING" | "CONTACTED" | "PROCESSING" | "ACTIVE" | "CANCELLED",
  adminNotes?: string
) {
  try {
    const updated = await updateOrderStatus(orderId, status, adminNotes);
    if (!updated) {
      return { success: false, message: "Không tìm thấy đơn hàng" };
    }

    revalidatePath("/admin/orders");
    revalidatePath("/admin/dashboard");

    return { success: true, data: updated };
  } catch (error) {
    return { success: false, message: (error as Error).message };
  }
}
