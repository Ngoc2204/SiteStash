import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes cleanly
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format currency to Vietnamese Dong (VND)
 * Example: 250000 -> 250.000 ₫
 */
export function formatVND(amount: number): string {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(amount);
}

/**
 * Format short price for badges (e.g. 250k/tháng)
 */
export function formatPriceShort(amount: number): string {
  if (amount >= 1000000) {
    const million = amount / 1000000;
    return `${Number.isInteger(million) ? million : million.toFixed(1)} triệu ₫`;
  }
  if (amount >= 1000) {
    return `${Math.round(amount / 1000)}k ₫`;
  }
  return `${amount} ₫`;
}

/**
 * Convert string to SEO-friendly slug
 */
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[đĐ]/g, "d")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Format date to Vietnamese locale
 */
export function formatDate(dateString: string | Date): string {
  const date = typeof dateString === "string" ? new Date(dateString) : dateString;
  return new Intl.DateTimeFormat("vi-VN", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

/**
 * Get status badge style & label in Vietnamese
 */
export function getOrderStatusMeta(status: string) {
  switch (status) {
    case "PENDING":
      return {
        label: "Chờ tiếp nhận",
        color: "bg-amber-500/10 text-amber-400 border-amber-500/20",
        dot: "bg-amber-400 animate-pulse",
      };
    case "CONTACTED":
      return {
        label: "Đã liên hệ",
        color: "bg-blue-500/10 text-blue-400 border-blue-500/20",
        dot: "bg-blue-400",
      };
    case "PROCESSING":
      return {
        label: "Đang cấu hình",
        color: "bg-purple-500/10 text-purple-400 border-purple-500/20",
        dot: "bg-purple-400 animate-pulse",
      };
    case "ACTIVE":
      return {
        label: "Đang hoạt động",
        color: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
        dot: "bg-emerald-400",
      };
    case "CANCELLED":
      return {
        label: "Đã hủy",
        color: "bg-rose-500/10 text-rose-400 border-rose-500/20",
        dot: "bg-rose-400",
      };
    default:
      return {
        label: status,
        color: "bg-zinc-500/10 text-zinc-400 border-zinc-500/20",
        dot: "bg-zinc-400",
      };
  }
}

/**
 * Get plan label in Vietnamese
 */
export function getPlanMeta(planType: string) {
  switch (planType) {
    case "MONTHLY":
      return {
        label: "Thuê theo Tháng",
        tag: "Linh hoạt",
        billing: "/tháng",
      };
    case "YEARLY":
      return {
        label: "Thuê theo Năm",
        tag: "Tiết kiệm 20% & Tặng Tên Miền",
        billing: "/năm",
      };
    case "LIFETIME":
      return {
        label: "Mua trọn gói Source Code",
        tag: "Bàn giao mã nguồn",
        billing: " trọn đời",
      };
    default:
      return {
        label: planType,
        tag: "",
        billing: "",
      };
  }
}
