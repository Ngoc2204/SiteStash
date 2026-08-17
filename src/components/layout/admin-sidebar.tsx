"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Layers,
  ShoppingBag,
  FolderTree,
  ExternalLink,
  ChevronLeft,
  Shield,
  Settings,
  LogOut,
  Sparkles,
} from "lucide-react";

export function AdminSidebar() {
  const pathname = usePathname();

  const navigation = [
    { name: "Tổng quan & KPI", href: "/admin/dashboard", icon: LayoutDashboard },
    { name: "Kho Mẫu Website", href: "/admin/templates", icon: Layers },
    { name: "Đơn Thuê & Leads", href: "/admin/orders", icon: ShoppingBag },
    { name: "Danh Mục Ngành", href: "/admin/categories", icon: FolderTree },
  ];

  return (
    <aside className="w-64 bg-slate-950 border-r border-slate-800/80 flex flex-col justify-between shrink-0 min-h-screen">
      {/* Brand Header */}
      <div className="p-6 space-y-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center shadow-lg shadow-primary/30">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-extrabold text-base text-white tracking-tight flex items-center gap-1.5">
              Site<span className="text-primary-400">Stash</span>
              <span className="text-[10px] bg-primary/20 text-primary-300 px-1.5 py-0.5 rounded font-mono">
                ADMIN
              </span>
            </div>
            <p className="text-[11px] text-slate-400">Hệ thống quản trị WaaS</p>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="space-y-1">
          {navigation.map((item) => {
            const Icon = item.icon;
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                  isActive
                    ? "bg-primary text-white shadow-lg shadow-primary/25"
                    : "text-slate-400 hover:text-white hover:bg-slate-900"
                }`}
              >
                <Icon className="w-4 h-4 shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer / Exit to Public Site */}
      <div className="p-4 border-t border-slate-800/80 space-y-2">
        <Link
          href="/"
          target="_blank"
          className="flex items-center justify-between px-3 py-2 rounded-xl text-xs text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
        >
          <span className="flex items-center gap-2">
            <ExternalLink className="w-4 h-4 text-cyan-400" />
            <span>Xem trang khách hàng</span>
          </span>
          <ChevronLeft className="w-3.5 h-3.5 rotate-180" />
        </Link>

        <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/60 flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-indigo-500 to-primary text-white flex items-center justify-center font-bold text-xs">
            AD
          </div>
          <div className="truncate">
            <p className="text-xs font-bold text-white truncate">Administrator</p>
            <p className="text-[10px] text-emerald-400 flex items-center gap-1 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> Online
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
