"use client";

import React, { useState } from "react";
import {
  Search,
  Filter,
  Phone,
  Mail,
  Calendar,
  Globe,
  FileText,
  Clock,
  CheckCircle2,
  AlertCircle,
  Eye,
  Edit,
  Save,
  Loader2,
} from "lucide-react";
import { RentalOrderData } from "@/lib/mock-data";
import { formatVND, formatDate, getOrderStatusMeta, getPlanMeta } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Modal } from "@/components/ui/modal";
import { updateOrderStatusAction } from "@/actions/order-admin.actions";

interface OrdersManagerProps {
  initialOrders: RentalOrderData[];
}

export function OrdersManager({ initialOrders }: OrdersManagerProps) {
  const [orders, setOrders] = useState<RentalOrderData[]>(initialOrders);
  const [statusFilter, setStatusFilter] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [selectedOrder, setSelectedOrder] = useState<RentalOrderData | null>(null);
  const [isUpdating, setIsUpdating] = useState(false);
  const [editStatus, setEditStatus] = useState<string>("");
  const [editAdminNotes, setEditAdminNotes] = useState<string>("");

  const filteredOrders = orders.filter((o) => {
    const matchesStatus = statusFilter === "ALL" || o.status === statusFilter;
    const q = searchQuery.toLowerCase();
    const matchesQuery =
      !q ||
      o.customerName.toLowerCase().includes(q) ||
      o.customerPhone.includes(q) ||
      o.customerEmail.toLowerCase().includes(q) ||
      (o.customDomain && o.customDomain.toLowerCase().includes(q)) ||
      (o.template?.title && o.template.title.toLowerCase().includes(q));

    return matchesStatus && matchesQuery;
  });

  const handleOpenDetail = (order: RentalOrderData) => {
    setSelectedOrder(order);
    setEditStatus(order.status);
    setEditAdminNotes(order.adminNotes || "");
  };

  const handleSaveStatus = async () => {
    if (!selectedOrder) return;
    setIsUpdating(true);
    const result = await updateOrderStatusAction(
      selectedOrder.id,
      editStatus as any,
      editAdminNotes
    );
    setIsUpdating(false);

    if (result.success && result.data) {
      setOrders((prev) =>
        prev.map((o) => (o.id === selectedOrder.id ? (result.data as any) : o))
      );
      setSelectedOrder(result.data as any);
    }
  };

  return (
    <div className="space-y-6">
      {/* Top Controls Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Tìm theo tên khách, SĐT, Email, Tên miền..."
            className="w-full pl-10 pr-4 py-2 rounded-xl text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
          />
        </div>

        {/* Status Filter Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {[
            { id: "ALL", label: "Tất cả" },
            { id: "PENDING", label: "Chờ tiếp nhận" },
            { id: "CONTACTED", label: "Đã liên hệ" },
            { id: "PROCESSING", label: "Đang cấu hình" },
            { id: "ACTIVE", label: "Đang chạy" },
            { id: "CANCELLED", label: "Đã hủy" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setStatusFilter(tab.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all border ${
                statusFilter === tab.id
                  ? "bg-primary text-white border-primary shadow-sm"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="glass-panel rounded-2xl border border-slate-800 overflow-hidden shadow-xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-slate-300">
            <thead className="bg-slate-900/90 text-[11px] uppercase font-bold text-slate-400 border-b border-slate-800 tracking-wider">
              <tr>
                <th className="px-6 py-4">Khách hàng & Liên hệ</th>
                <th className="px-6 py-4">Mẫu website & Gói</th>
                <th className="px-6 py-4">Tên miền mong muốn</th>
                <th className="px-6 py-4">Thời gian gửi</th>
                <th className="px-6 py-4">Trạng thái</th>
                <th className="px-6 py-4 text-right">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80">
              {filteredOrders.length > 0 ? (
                filteredOrders.map((order) => {
                  const statusMeta = getOrderStatusMeta(order.status);
                  const planMeta = getPlanMeta(order.planType);
                  return (
                    <tr key={order.id} className="hover:bg-slate-900/50 transition-colors">
                      {/* Customer */}
                      <td className="px-6 py-4">
                        <div className="font-bold text-white text-sm">{order.customerName}</div>
                        <div className="flex items-center gap-2 text-slate-400 mt-0.5">
                          <Phone className="w-3 h-3 text-primary-400" />
                          <span className="font-mono">{order.customerPhone}</span>
                        </div>
                        <div className="flex items-center gap-2 text-slate-500 mt-0.5">
                          <Mail className="w-3 h-3" />
                          <span>{order.customerEmail}</span>
                        </div>
                      </td>

                      {/* Template & Plan */}
                      <td className="px-6 py-4">
                        <div className="font-semibold text-slate-100">
                          {order.template?.title || "Website Template"}
                        </div>
                        <div className="text-primary-300 font-medium mt-0.5">
                          {planMeta.label}
                        </div>
                      </td>

                      {/* Domain */}
                      <td className="px-6 py-4">
                        {order.customDomain ? (
                          <div className="flex items-center gap-1.5 font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded border border-cyan-800/40 inline-flex">
                            <Globe className="w-3 h-3" />
                            <span>{order.customDomain}</span>
                          </div>
                        ) : (
                          <span className="text-slate-500 italic">Chưa gán</span>
                        )}
                      </td>

                      {/* Date */}
                      <td className="px-6 py-4 text-slate-400 font-mono">
                        {formatDate(order.createdAt)}
                      </td>

                      {/* Status */}
                      <td className="px-6 py-4">
                        <span
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold border ${statusMeta.color}`}
                        >
                          <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot}`} />
                          {statusMeta.label}
                        </span>
                      </td>

                      {/* Actions */}
                      <td className="px-6 py-4 text-right">
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => handleOpenDetail(order)}
                          className="text-xs"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          <span>Xem & Xử lý</span>
                        </Button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-slate-500">
                    Không tìm thấy đơn hàng nào phù hợp bộ lọc.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Order Detail & Status Management Modal */}
      {selectedOrder && (
        <Modal
          isOpen={Boolean(selectedOrder)}
          onClose={() => setSelectedOrder(null)}
          maxWidth="2xl"
          title={
            <div className="flex items-center gap-2">
              <span>Chi tiết đơn thuê #{selectedOrder.id.slice(0, 8)}</span>
            </div>
          }
          description="Cập nhật tiến độ xử lý và trao đổi với khách hàng"
        >
          <div className="space-y-6 pt-2">
            {/* Customer Summary Card */}
            <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3">
              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-slate-400">Khách hàng:</span>
                  <p className="font-bold text-white text-sm">{selectedOrder.customerName}</p>
                </div>
                <div>
                  <span className="text-slate-400">Số điện thoại / Zalo:</span>
                  <p className="font-bold text-primary-300 font-mono text-sm">
                    {selectedOrder.customerPhone}
                  </p>
                </div>
                <div>
                  <span className="text-slate-400">Địa chỉ Email:</span>
                  <p className="font-mono text-slate-200">{selectedOrder.customerEmail}</p>
                </div>
                <div>
                  <span className="text-slate-400">Mẫu website đăng ký:</span>
                  <p className="font-semibold text-slate-200">
                    {selectedOrder.template?.title || "Website"}
                  </p>
                </div>
              </div>

              {selectedOrder.customerNote && (
                <div className="pt-2 border-t border-slate-800 text-xs">
                  <span className="text-slate-400 font-bold">Ghi chú của khách hàng:</span>
                  <p className="text-slate-300 mt-1 italic">&quot;{selectedOrder.customerNote}&quot;</p>
                </div>
              )}
            </div>

            {/* Status Update Controls */}
            <div className="space-y-3">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Cập nhật trạng thái đơn:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {[
                  { id: "PENDING", label: "Chờ tiếp nhận" },
                  { id: "CONTACTED", label: "Đã liên hệ" },
                  { id: "PROCESSING", label: "Đang cấu hình" },
                  { id: "ACTIVE", label: "Đang chạy" },
                  { id: "CANCELLED", label: "Hủy đơn" },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setEditStatus(s.id)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-all ${
                      editStatus === s.id
                        ? "bg-primary text-white border-primary shadow-glow"
                        : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Admin Internal Notes */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
                Ghi chú nội bộ Admin / Kỹ thuật
              </label>
              <textarea
                rows={3}
                value={editAdminNotes}
                onChange={(e) => setEditAdminNotes(e.target.value)}
                placeholder="VD: Khách đã chuyển khoản gói 1 năm ngày 17/08. Đã hẹn bàn giao lúc 18h..."
                className="w-full rounded-xl px-4 py-2.5 text-xs glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
              />
            </div>

            {/* Modal Actions */}
            <div className="flex justify-end gap-3 pt-4 border-t border-slate-800">
              <Button variant="secondary" size="md" onClick={() => setSelectedOrder(null)}>
                Đóng
              </Button>
              <Button
                variant="glow"
                size="md"
                isLoading={isUpdating}
                onClick={handleSaveStatus}
                className="font-bold shadow-md"
              >
                <Save className="w-4 h-4" />
                <span>Lưu Thay Đổi</span>
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}
