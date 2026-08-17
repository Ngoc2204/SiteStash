import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-indigo-950/80 bg-[#040611] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-cyan-400 to-primary flex items-center justify-center font-black text-white text-sm shadow-md">
                W
              </div>
              <span className="font-extrabold text-lg text-white">
                Web<span className="text-cyan-400">Pro</span>
              </span>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed">
              Chúng tôi chuyên thiết kế website chuyên nghiệp, giúp doanh nghiệp tăng trưởng doanh số và khẳng định thương hiệu trên Internet.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-1">
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-cyan-400 transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Col 2: Dịch Vụ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Dịch Vụ
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#showcase" className="hover:text-cyan-400 transition-colors">Thiết kế website</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">SEO website</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Quảng cáo Google</a></li>
              <li><a href="#services" className="hover:text-cyan-400 transition-colors">Quản trị website</a></li>
            </ul>
          </div>

          {/* Col 3: Hỗ Trợ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Hỗ Trợ
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Hướng dẫn sử dụng</a></li>
              <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Chính sách bảo mật</a></li>
              <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Điều khoản dịch vụ</a></li>
              <li><a href="/pricing" className="hover:text-cyan-400 transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Col 4: Đăng Ký Nhận Tin */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Đăng Ký Nhận Tin
            </h4>
            <p className="text-xs text-slate-400">
              Nhận thông tin khuyến mãi mới nhất về thiết kế web và marketing.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-3.5 py-2 rounded-xl text-xs glass-input placeholder:text-slate-500 focus:outline-none"
              />
              <button className="btn-gradient-purple px-4 py-2 rounded-xl text-xs font-bold shrink-0">
                Đăng ký
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-indigo-950/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <p>© 2024 WebPro. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/sitemap.xml" className="hover:text-slate-400">Sitemap</Link>
            <Link href="/pricing" className="hover:text-slate-400">Privacy</Link>
            <Link href="/pricing" className="hover:text-slate-400">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
