import React from "react";
import Link from "next/link";
import {
  Layers,
  ShoppingBag,
  TrendingUp,
  Eye,
  ArrowUpRight,
  Plus,
  Clock,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  ChevronRight,
} from "lucide-react";
import { getTemplates, getOrders, getCategories } from "@/lib/db";
import { formatVND, formatDate, getOrderStatusMeta, getPlanMeta } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export const revalidate = 0; // Live dynamic data for admin dashboard

export default async function AdminDashboardPage() {
  const [templates, orders, categories] = await Promise.all([
    getTemplates(),
    getOrders(),
    getCategories(),
  ]);

  // Calculations
  const totalTemplates = templates.length;
  const totalOrders = orders.length;
  const pendingOrders = orders.filter((o) => o.status === "PENDING").length;
  const activeOrders = orders.filter((o) => o.status === "ACTIVE").length;
  const totalViews = templates.reduce((acc, t) => acc + t.viewCount, 0);

  // Calculate estimated Monthly Recurring Revenue (MRR)
  const estimatedMRR = orders
    .filter((o) => o.status === "ACTIVE" || o.status === "PROCESSING")
    .reduce((acc, o) => {
      const t = templates.find((tpl) => tpl.id === o.templateId);
      return acc + (t ? t.priceMonthly : 250000);
    }, 0);

  const recentOrders = orders.slice(0, 5);
  const topTemplates = [...templates].sort((a, b) => b.viewCount - a.viewCount).slice(0, 4);

  return (
    <div className="space-y-8">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
            Tổng Quan Hệ Thống & KPI
          </h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Theo dõi tình trạng đơn thuê, doanh thu định kỳ MRR và lượt xem template thời gian thực.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link href="/admin/templates/new">
            <Button variant="glow" size="md" className="font-bold text-xs">
              <Plus className="w-4 h-4" />
              <span>Thêm Mẫu Mới</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {/* Card 1: MRR */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Doanh Thu Định Kỳ (MRR)
            </span>
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-emerald-400">
              {formatVND(estimatedMRR || 1250000)}
            </div>
            <p className="text-[11px] text-slate-400">Từ các hợp đồng thuê đang active</p>
          </div>
        </div>

        {/* Card 2: Pending Orders */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Đơn Chờ Xử Lý
            </span>
            <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
              <Clock className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-amber-400">
              {pendingOrders} <span className="text-xs font-normal text-slate-400">/ {totalOrders} tổng</span>
            </div>
            <p className="text-[11px] text-slate-400">Cần liên hệ tư vấn khách hàng</p>
          </div>
        </div>

        {/* Card 3: Total Templates */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Kho Mẫu Website
            </span>
            <div className="w-8 h-8 rounded-xl bg-primary/20 text-primary-400 flex items-center justify-center">
              <Layers className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-white">
              {totalTemplates} <span className="text-xs font-normal text-slate-400">mẫu sẵn sàng</span>
            </div>
            <p className="text-[11px] text-slate-400">{categories.length} danh mục ngành nghề</p>
          </div>
        </div>

        {/* Card 4: Views */}
        <div className="glass-panel p-5 rounded-2xl border border-slate-800 space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
              Lượt Mở Xem Demo
            </span>
            <div className="w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Eye className="w-4 h-4" />
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-black text-cyan-400">
              {totalViews.toLocaleString()}
            </div>
            <p className="text-[11px] text-slate-400">Tương tác qua Live Demo Viewer</p>
          </div>
        </div>
      </div>

      {/* Main Row: Recent Orders & Top Templates */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Recent Orders (7 Cols) */}
        <div className="lg:col-span-7 glass-panel rounded-2xl border border-slate-800 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-white">Đơn Đăng Ký Thuê Mới Nhất</h3>
              <p className="text-xs text-slate-400">Khách hàng gửi qua form đăng ký trực tuyến</p>
            </div>
            <Link href="/admin/orders">
              <Button variant="ghost" size="sm" className="text-xs text-primary-400 hover:text-primary-300">
                <span>Xem tất cả</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {recentOrders.map((order) => {
              const statusMeta = getOrderStatusMeta(order.status);
              const planMeta = getPlanMeta(order.planType);
              return (
                <div
                  key={order.id}
                  className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-3"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-white">{order.customerName}</span>
                      <span className="text-xs font-mono text-slate-400">({order.customerPhone})</span>
                    </div>
                    <p className="text-xs text-slate-300">
                      Mẫu: <span className="font-semibold text-primary-300">{order.template?.title || "Website"}</span> • Gói: {planMeta.label}
                    </p>
                    <p className="text-[11px] text-slate-500">{formatDate(order.createdAt)}</p>
                  </div>

                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <span
                      className={`text-xs px-2.5 py-1 rounded-full border flex items-center gap-1.5 font-medium ${statusMeta.color}`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dot}`} />
                      {statusMeta.label}
                    </span>
                    <Link href={`/admin/orders`}>
                      <button className="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300">
                        <ChevronRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Top Viewed Templates (5 Cols) */}
        <div className="lg:col-span-5 glass-panel rounded-2xl border border-slate-800 p-6 space-y-5">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-base text-white">Mẫu Được Xem Nhiều Nhất</h3>
              <p className="text-xs text-slate-400">Dẫn đầu về lượt tương tác & quan tâm</p>
            </div>
            <Link href="/admin/templates">
              <Button variant="ghost" size="sm" className="text-xs text-primary-400">
                Kho mẫu
              </Button>
            </Link>
          </div>

          <div className="space-y-3">
            {topTemplates.map((t, idx) => (
              <div
                key={t.id}
                className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-slate-800 text-slate-300 font-mono font-bold text-xs flex items-center justify-center shrink-0">
                    #{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-xs text-white line-clamp-1">{t.title}</h4>
                    <p className="text-[11px] text-slate-400">{formatVND(t.priceMonthly)}/tháng</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-[11px] font-mono">
                    {t.viewCount} views
                  </Badge>
                  <Link href={`/preview/${t.slug}`} target="_blank">
                    <button className="p-1 text-slate-400 hover:text-white">
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
