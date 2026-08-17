import React from "react";
import { getOrders } from "@/lib/db";
import { OrdersManager } from "@/components/admin/orders-manager";

export const revalidate = 0;

export default async function AdminOrdersPage() {
  const orders = await getOrders();

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
          Quản Lý Đơn Thuê & Khách Hàng Tiềm Năng (Leads)
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 mt-1">
          Theo dõi tiến trình xử lý, gọi điện tư vấn và kích hoạt bàn giao website cho khách hàng.
        </p>
      </div>

      <OrdersManager initialOrders={orders} />
    </div>
  );
}
