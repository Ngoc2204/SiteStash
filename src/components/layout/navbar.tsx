"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ArrowUpRight } from "lucide-react";
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
    { name: "Trang Chủ", href: "/" },
    { name: "Dịch Vụ", href: "/#services" },
    { name: "Mẫu Website", href: "/#showcase" },
    { name: "Bảng Giá", href: "/pricing" },
    { name: "Portfolio", href: "/#portfolio" },
    { name: "Blog", href: "/#blog" },
    { name: "Liên Hệ", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#060814]/90 backdrop-blur-xl border-b border-indigo-950/80 py-3 shadow-xl shadow-black/40"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 to-primary flex items-center justify-center font-black text-white text-lg shadow-md shadow-cyan-500/30">
            W
          </div>
          <span className="font-extrabold text-xl tracking-tight text-white flex items-center">
            Web<span className="text-cyan-400">Pro</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-xs font-semibold tracking-wide transition-colors ${
                  isActive
                    ? "text-cyan-400 font-bold"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Header Right Action CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <Link href="/admin/dashboard" className="text-xs text-slate-400 hover:text-slate-200 px-3 py-1.5 rounded-lg">
            Admin
          </Link>
          <a href="#contact">
            <button className="btn-gradient-purple px-5 py-2 rounded-xl text-xs font-bold shadow-lg flex items-center gap-1.5">
              <span>Tư Vấn Miễn Phí</span>
            </button>
          </a>
        </div>

        {/* Mobile Menu Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-900"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-indigo-950 p-5 mt-2 space-y-3 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-200 hover:bg-slate-900 hover:text-white"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="pt-3 border-t border-slate-800 flex flex-col gap-2">
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
              <button className="btn-gradient-purple w-full py-2.5 rounded-xl text-xs font-bold shadow-md">
                Tư Vấn Miễn Phí
              </button>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
