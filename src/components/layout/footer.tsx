import React from "react";
import Link from "next/link";
import { Layers, Mail, Phone, MapPin, Sparkles, CheckCircle2, Github, Shield } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-800/80 bg-slate-950/90 relative overflow-hidden">
      {/* Background glow decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-primary/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 lg:gap-12">
          {/* Col 1: Brand & Bio */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-primary to-accent-cyan flex items-center justify-center shadow-lg shadow-primary/30">
                <Layers className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Site<span className="text-primary-400">Stash</span>
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Hệ sinh thái trưng bày, trải nghiệm thực tế và cho thuê website trọn gói chuẩn SEO dành riêng cho doanh nghiệp SME, cửa hàng và chuyên gia.
            </p>
            <div className="flex items-center gap-3 pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Hệ thống sẵn sàng 99.99%
              </span>
            </div>
          </div>

          {/* Col 2: Dịch vụ & Mẫu */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Danh mục nổi bật
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/#showcase" className="hover:text-primary-400 transition-colors">
                  Y tế & Nha khoa thẩm mỹ
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-primary-400 transition-colors">
                  F&B, Nhà hàng & Quán Cà phê
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-primary-400 transition-colors">
                  Bất Động Sản & Dự án cao cấp
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-primary-400 transition-colors">
                  Thời trang & E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/#showcase" className="hover:text-primary-400 transition-colors">
                  Công Nghệ SaaS & Portfolio Agency
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Cam kết trọn gói */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Gói dịch vụ WaaS
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Bao gồm Cloud Server & Hosting tốc độ cao</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Miễn phí chứng chỉ bảo mật SSL HTTPS</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Hỗ trợ bảo trì & sao lưu dữ liệu tự động</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Bàn giao toàn bộ mã nguồn khi mua trọn gói</span>
              </li>
            </ul>
          </div>

          {/* Col 4: Liên hệ & Hỗ trợ */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-200">
              Kênh liên hệ hỗ trợ
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Hotline / Zalo: 0912.345.678</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Email: contact@sitestash.io</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-primary-400 shrink-0" />
                <span>Hà Nội & TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
            <div className="pt-2">
              <Link
                href="https://github.com/Ngoc2204/SiteStash"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Source on GitHub</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 SiteStash Platform. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/pricing" className="hover:text-slate-300">Bảng giá</Link>
            <Link href="/contact" className="hover:text-slate-300">Hỗ trợ kỹ thuật</Link>
            <Link href="/admin/dashboard" className="hover:text-slate-300">Quản trị viên</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
