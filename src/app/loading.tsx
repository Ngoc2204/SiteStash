import React from "react";
import { LottieLoader } from "@/components/ui/lottie-loader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 bg-[#040612]/90 backdrop-blur-xl flex flex-col items-center justify-center">
      <LottieLoader size="lg" text="SiteStash • Đang tải dữ liệu..." />
    </div>
  );
}
