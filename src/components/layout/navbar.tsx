"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Layers, Sparkles, Phone, Compass, ShieldCheck, Menu, X, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Khám Phá Mẫu", href: "/#showcase", icon: Compass },
    { name: "Bảng Giá Thuê", href: "/pricing", icon: Sparkles },
    { name: "Quy Trình & Cam Kết", href: "/#process", icon: ShieldCheck },
    { name: "Tư Vấn Trực Tiếp", href: "/contact", icon: Phone },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/30 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary via-indigo-500 to-accent-cyan flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-105 transition-transform">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5">
              Site<span className="text-primary-400">Stash</span>
              <span className="text-[10px] uppercase font-bold tracking-widest px-1.5 py-0.5 rounded bg-primary/20 text-primary-300 border border-primary/30">
                WaaS
              </span>
            </span>
            <span className="text-[11px] text-slate-400 tracking-wide">
              Nền tảng thuê website trọn gói
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 glass-panel px-4 py-1.5 rounded-full border border-slate-800/80">
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? "bg-primary/20 text-primary-300 border border-primary/40"
                    : "text-slate-300 hover:text-white hover:bg-slate-800/60"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/admin/dashboard">
            <Button variant="ghost" size="sm" className="text-xs text-slate-400 hover:text-slate-200">
              Quản trị (Admin)
            </Button>
          </Link>
          <Link href="/#showcase">
            <Button variant="glow" size="sm" className="text-xs">
              <span>Xem Demo Ngay</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-panel border-b border-slate-800 p-4 mt-2 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-medium text-slate-200 hover:bg-slate-800/80 hover:text-white"
                >
                  <Icon className="w-4 h-4 text-primary-400" />
                  {link.name}
                </Link>
              );
            })}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <Link href="/#showcase" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="glow" size="md" className="w-full">
                Khám phá kho mẫu
              </Button>
            </Link>
            <Link href="/admin/dashboard" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="outline" size="md" className="w-full">
                Cổng quản trị Admin
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
