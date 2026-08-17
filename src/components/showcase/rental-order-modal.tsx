"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import confetti from "canvas-confetti";
import {
  Sparkles,
  CheckCircle2,
  Phone,
  Mail,
  User,
  Globe,
  FileText,
  ShieldCheck,
  Zap,
  ArrowRight,
  Loader2,
} from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { TemplateData } from "@/lib/mock-data";
import { formatVND, formatPriceShort } from "@/lib/utils";
import { RentalOrderSchema, RentalOrderInput, submitRentalOrder } from "@/actions/order.actions";

interface RentalOrderModalProps {
  isOpen: boolean;
  onClose: () => void;
  template: TemplateData | null;
}

export function RentalOrderModal({ isOpen, onClose, template }: RentalOrderModalProps) {
  const [selectedPlan, setSelectedPlan] = useState<"MONTHLY" | "YEARLY" | "LIFETIME">("YEARLY");
  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId, setOrderId] = useState<string | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<RentalOrderInput>({
    resolver: zodResolver(RentalOrderSchema),
    defaultValues: {
      templateId: template?.id || "",
      templateTitle: template?.title || "",
      planType: "YEARLY",
    },
  });

  if (!template) return null;

  // Calculate pricing based on chosen plan
  const monthlyPrice = template.priceMonthly;
  const yearlyPrice = Math.round(monthlyPrice * 12 * 0.8);
  const lifetimePrice = template.priceLifetime || monthlyPrice * 10;

  const currentPrice =
    selectedPlan === "MONTHLY"
      ? monthlyPrice
      : selectedPlan === "YEARLY"
      ? yearlyPrice
      : lifetimePrice;

  const onSubmit = async (data: RentalOrderInput) => {
    setServerError(null);
    const result = await submitRentalOrder({
      ...data,
      templateId: template.id,
      templateTitle: template.title,
      planType: selectedPlan,
    });

    if (result.success) {
      setIsSuccess(true);
      setOrderId(result.orderId || "STASH-" + Math.floor(100000 + Math.random() * 900000));
      // Fire confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch (e) {}
    } else {
      setServerError(result.message);
    }
  };

  const handleClose = () => {
    setIsSuccess(false);
    setOrderId(null);
    setServerError(null);
    reset();
    onClose();
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={handleClose}
      maxWidth="2xl"
      title={
        isSuccess ? null : (
          <div className="flex items-center gap-2">
            <span className="text-primary-400">⚡ Đăng Ký Thuê Website:</span>
            <span className="text-white truncate max-w-[300px]">{template.title}</span>
          </div>
        )
      }
      description={
        isSuccess
          ? null
          : "Điền thông tin nhận tư vấn và kích hoạt bàn giao giao diện trong vòng 24 giờ."
      }
    >
      {isSuccess ? (
        /* Success Screen */
        <div className="text-center py-6 space-y-6 animate-in zoom-in-95 duration-300">
          <div className="w-16 h-16 rounded-3xl bg-emerald-500/20 border-2 border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
            <CheckCircle2 className="w-9 h-9" />
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-white">Gửi Yêu Cầu Thuê Thành Công!</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Cảm ơn quý khách đã tin tưởng SiteStash. Đơn của bạn đã được ghi nhận và chuyển đến đội ngũ kỹ thuật.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto space-y-3 text-left">
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Mã theo dõi đơn:</span>
              <span className="font-mono font-bold text-white text-sm bg-slate-800 px-2 py-0.5 rounded">
                #{orderId}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Mẫu website:</span>
              <span className="font-semibold text-slate-200">{template.title}</span>
            </div>
            <div className="flex justify-between items-center text-xs text-slate-400">
              <span>Gói đăng ký:</span>
              <span className="font-semibold text-primary-300">
                {selectedPlan === "MONTHLY"
                  ? "Thuê theo Tháng"
                  : selectedPlan === "YEARLY"
                  ? "Thuê theo Năm (Tặng domain)"
                  : "Mua trọn gói Source Code"}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2">
            <Button variant="glow" size="md" onClick={handleClose}>
              Tiếp tục xem các mẫu khác
            </Button>
          </div>
        </div>
      ) : (
        /* Order Form */
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 pt-1">
          {serverError && (
            <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-xs text-rose-400">
              {serverError}
            </div>
          )}

          {/* Plan Selection Cards */}
          <div className="space-y-2">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              1. Chọn gói dịch vụ mong muốn:
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Monthly Plan */}
              <div
                onClick={() => setSelectedPlan("MONTHLY")}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedPlan === "MONTHLY"
                    ? "bg-primary/10 border-primary shadow-glow text-white"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold">Gói Tháng</span>
                  <Badge variant="outline" className="text-[10px] py-0">Linh hoạt</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-base font-extrabold">{formatVND(monthlyPrice)}</div>
                  <div className="text-[11px] text-slate-400">/tháng</div>
                </div>
              </div>

              {/* Yearly Plan (Recommended) */}
              <div
                onClick={() => setSelectedPlan("YEARLY")}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between relative overflow-hidden ${
                  selectedPlan === "YEARLY"
                    ? "bg-primary/20 border-primary shadow-glow text-white ring-1 ring-primary"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="absolute top-0 right-0 bg-gradient-to-l from-accent-cyan to-primary text-[9px] font-black uppercase tracking-wider px-2 py-0.5 text-white rounded-bl-lg">
                  Tiết kiệm 20%
                </div>
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold">Gói 1 Năm</span>
                </div>
                <div className="mt-2">
                  <div className="text-base font-extrabold text-accent-cyan">{formatVND(yearlyPrice)}</div>
                  <div className="text-[10px] text-slate-300">+ Tặng tên miền .com</div>
                </div>
              </div>

              {/* Lifetime Plan */}
              <div
                onClick={() => setSelectedPlan("LIFETIME")}
                className={`p-3.5 rounded-xl border cursor-pointer transition-all flex flex-col justify-between ${
                  selectedPlan === "LIFETIME"
                    ? "bg-primary/10 border-primary shadow-glow text-white"
                    : "bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700"
                }`}
              >
                <div className="flex justify-between items-start">
                  <span className="text-xs font-bold">Mua Đứt Mã Nguồn</span>
                  <Badge variant="outline" className="text-[10px] py-0">Full Code</Badge>
                </div>
                <div className="mt-2">
                  <div className="text-base font-extrabold">{formatVND(lifetimePrice)}</div>
                  <div className="text-[11px] text-slate-400">Bàn giao 100% code</div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Info Form */}
          <div className="space-y-4">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-300">
              2. Thông tin người nhận bàn giao:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Họ và tên của bạn *"
                placeholder="VD: Trần Văn Minh"
                leftIcon={<User className="w-4 h-4" />}
                {...register("customerName")}
                error={errors.customerName?.message}
              />
              <Input
                label="Số điện thoại / Zalo *"
                placeholder="VD: 0912 345 678"
                leftIcon={<Phone className="w-4 h-4" />}
                {...register("customerPhone")}
                error={errors.customerPhone?.message}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Input
                label="Địa chỉ Email nhận hợp đồng & tài khoản *"
                type="email"
                placeholder="VD: minh.tran@gmail.com"
                leftIcon={<Mail className="w-4 h-4" />}
                {...register("customerEmail")}
                error={errors.customerEmail?.message}
              />
              <Input
                label="Tên miền mong muốn (nếu có)"
                placeholder="VD: nhakhoaminh.vn"
                leftIcon={<Globe className="w-4 h-4" />}
                {...register("customDomain")}
                helperText="Nếu chưa có, SiteStash sẽ hỗ trợ bạn đăng ký"
              />
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300">
                Ghi chú & Yêu cầu chỉnh sửa thêm (tùy chọn)
              </label>
              <textarea
                rows={2}
                placeholder="VD: Cần chỉnh logo theo màu xanh navy, gắn thêm bảng giá phòng khám..."
                className="w-full rounded-xl px-4 py-2.5 text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary"
                {...register("customerNote")}
              />
            </div>
          </div>

          {/* Price Summary & Submit Button */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-xs text-slate-400">Tổng thanh toán dự tính:</div>
              <div className="text-xl font-black text-white flex items-baseline gap-1.5">
                <span className="text-accent-cyan">{formatVND(currentPrice)}</span>
                <span className="text-xs text-slate-400 font-normal">
                  {selectedPlan === "MONTHLY" ? "/tháng" : selectedPlan === "YEARLY" ? "/năm" : " trọn gói"}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto">
              <Button type="button" variant="ghost" size="md" onClick={handleClose}>
                Hủy
              </Button>
              <Button
                type="submit"
                variant="glow"
                size="lg"
                isLoading={isSubmitting}
                className="w-full sm:w-auto font-bold shadow-lg"
              >
                <span>Xác Nhận & Đăng Ký Thuê</span>
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </form>
      )}
    </Modal>
  );
}
