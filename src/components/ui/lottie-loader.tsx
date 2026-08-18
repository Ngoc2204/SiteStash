"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

export function LottieLoader({ size = "md", className = "", text = "Đang tải..." }: LottieLoaderProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const anim = lottie.loadAnimation({
      container: containerRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      path: "/lottie/loading.json",
    });

    return () => {
      anim.destroy();
    };
  }, []);

  const sizeClasses = {
    sm: "w-16 h-16",
    md: "w-28 h-28",
    lg: "w-44 h-44",
    xl: "w-60 h-60",
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-3 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center`}>
        <div ref={containerRef} className="w-full h-full" />
      </div>
      {text && (
        <p className="text-xs font-semibold tracking-wider text-slate-300 uppercase animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
