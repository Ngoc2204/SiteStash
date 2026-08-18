"use client";

import React, { useState, useEffect } from "react";
import { LottieLoader } from "./lottie-loader";

export function GlobalPageLoader() {
  const [loading, setLoading] = useState(true);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Show splash animation smoothly on page entrance
    const timer = setTimeout(() => {
      setLoading(false);
      setTimeout(() => setVisible(false), 500); // Wait for fade-out transition
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#040612] flex flex-col items-center justify-center transition-all duration-500 pointer-events-none ${
        loading ? "opacity-100" : "opacity-0 scale-105"
      }`}
    >
      <div className="flex flex-col items-center space-y-4">
        <LottieLoader size="lg" text="WebPro • Đang khởi tạo..." />
      </div>
    </div>
  );
}
