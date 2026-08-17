import { formatVND, formatDate, getPlanMeta } from "./utils";

export interface TelegramOrderNotificationPayload {
  customerName: string;
  customerPhone: string;
  customerEmail: string;
  customerNote?: string | null;
  templateTitle: string;
  planType: string;
  price: number;
  customDomain?: string | null;
  orderId: string;
}

/**
 * Send interactive HTML-formatted alert to Telegram Admin Bot
 */
export async function sendTelegramOrderNotification(
  payload: TelegramOrderNotificationPayload
): Promise<{ success: boolean; message?: string }> {
  const botToken = process.env.TELEGRAM_BOT_TOKEN;
  const chatId = process.env.TELEGRAM_CHAT_ID;

  const planInfo = getPlanMeta(payload.planType);
  const formattedTime = formatDate(new Date());

  const messageText = `
🚀 <b>[SITESTASH] CÓ ĐƠN THUÊ WEB MỚI!</b>
━━━━━━━━━━━━━━━━━━━━
👤 <b>Khách hàng:</b> ${payload.customerName}
📞 <b>SĐT / Zalo:</b> <code>${payload.customerPhone}</code>
📧 <b>Email:</b> ${payload.customerEmail}
🎨 <b>Mẫu website:</b> <b>${payload.templateTitle}</b>
📦 <b>Gói đăng ký:</b> ${planInfo.label} (${formatVND(payload.price)}${planInfo.billing})
🌐 <b>Tên miền mong muốn:</b> ${payload.customDomain ? `<code>${payload.customDomain}</code>` : "<i>(Chưa yêu cầu)</i>"}
📝 <b>Ghi chú:</b> ${payload.customerNote ? payload.customerNote : "<i>(Không có)</i>"}
🆔 <b>Mã đơn:</b> <code>#${payload.orderId.slice(0, 8)}</code>
━━━━━━━━━━━━━━━━━━━━
⏱️ <b>Thời gian:</b> ${formattedTime}
  `.trim();

  // If Telegram credentials are not set yet, log politely to console in dev mode
  if (!botToken || !chatId) {
    console.log("ℹ️ [Telegram Notification Simulation - Credentials not configured]");
    console.log(messageText);
    return {
      success: true,
      message: "Notification logged to server console (Set TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID in .env for live Telegram push)",
    };
  }

  try {
    const url = `https://api.telegram.org/bot${botToken}/sendMessage`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: messageText,
        parse_mode: "HTML",
        disable_web_page_preview: true,
      }),
    });

    const data = await response.json();
    if (!response.ok || !data.ok) {
      console.error("Telegram Bot API Error:", data);
      return { success: false, message: data.description || "Failed to send to Telegram" };
    }

    return { success: true };
  } catch (error) {
    console.error("Failed to dispatch Telegram webhook:", error);
    return { success: false, message: (error as Error).message };
  }
}
