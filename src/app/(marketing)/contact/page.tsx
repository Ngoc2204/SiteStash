"use client";

import React, { useState } from "react";
import { Phone, Mail, MapPin, Send, MessageSquare, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-semibold text-primary-300">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Hỗ Trợ & Tư Vấn Miễn Phí</span>
        </div>
        <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          Liên Hệ Đội Ngũ Kỹ Thuật SiteStash
        </h1>
        <p className="text-sm sm:text-base text-slate-400">
          Bạn cần tư vấn chọn mẫu website phù hợp, yêu cầu tính năng riêng hoặc hỗ trợ kỹ thuật? Đội ngũ chúng tôi sẵn sàng phản hồi trong 15 phút.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Contact Info Cards */}
        <div className="space-y-4">
          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-primary/20 text-primary-400 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Hotline & Zalo Kỹ Thuật</h3>
              <p className="text-xs text-slate-400 mt-0.5">Tư vấn trực tiếp và tiếp nhận yêu cầu demo</p>
            </div>
            <p className="text-base font-extrabold text-primary-300 font-mono">0912.345.678</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Hộp Thư Điện Tử</h3>
              <p className="text-xs text-slate-400 mt-0.5">Gửi brief yêu cầu tùy biến hoặc báo giá doanh nghiệp</p>
            </div>
            <p className="text-sm font-semibold text-slate-200 font-mono">contact@sitestash.io</p>
          </div>

          <div className="glass-panel p-6 rounded-2xl border border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-sm text-white">Thời Gian Làm Việc</h3>
              <p className="text-xs text-slate-400 mt-0.5">Hỗ trợ khẩn cấp 24/7 qua tin nhắn Telegram & Zalo</p>
            </div>
            <p className="text-xs text-slate-300">Thứ Hai - Chủ Nhật: 08:00 - 22:00</p>
          </div>
        </div>

        {/* Form */}
        <div className="lg:col-span-2 glass-panel p-8 rounded-3xl border border-slate-800">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-bold text-white">Cảm Ơn Bạn Đã Gửi Tin Nhắn!</h3>
              <p className="text-sm text-slate-300 max-w-md mx-auto">
                Chuyên viên tư vấn SiteStash sẽ gọi điện hoặc nhắn tin Zalo hỗ trợ bạn ngay trong ít phút tới.
              </p>
              <Button variant="outline" size="md" onClick={() => setSubmitted(false)}>
                Gửi câu hỏi khác
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white">Gửi Yêu Cầu Tư Vấn Trực Tiếp</h3>
                <p className="text-xs text-slate-400">Điền thông tin của bạn vào form dưới đây</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Họ và tên *" placeholder="VD: Nguyễn Văn Hưng" required />
                <Input label="Số điện thoại / Zalo *" placeholder="VD: 0988 123 456" required />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Email của bạn *" type="email" placeholder="VD: hung.nguyen@company.com" required />
                <Input label="Ngành nghề / Loại website cần thuê" placeholder="VD: Nha khoa, Quán cafe, Bất động sản..." />
              </div>

              <div className="space-y-1.5">
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                  Nội dung cần hỗ trợ chi tiết *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="VD: Mình cần thuê 1 web bán thời trang có tích hợp giỏ hàng và thanh toán qua chuyển khoản QR code..."
                  className="w-full rounded-xl px-4 py-2.5 text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
                />
              </div>

              <div className="flex justify-end">
                <Button type="submit" variant="glow" size="lg" className="w-full sm:w-auto font-bold shadow-lg">
                  <Send className="w-4 h-4" />
                  <span>Gửi Yêu Cầu Tư Vấn Ngay</span>
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
