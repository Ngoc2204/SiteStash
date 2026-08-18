"use client";

import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";

interface LottieLoaderProps {
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  text?: string;
}

export function LottieLoader({ size = "md", className = "", text }: LottieLoaderProps) {
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
    md: "w-24 h-24",
    lg: "w-36 h-36",
    xl: "w-48 h-48",
  };

  return (
    <div className={`flex flex-col items-center justify-center space-y-2 ${className}`}>
      <div className={`${sizeClasses[size]} relative flex items-center justify-center overflow-hidden`}>
        <div ref={containerRef} className="w-full h-full flex items-center justify-center" />
      </div>
      {text && (
        <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase animate-pulse">
          {text}
        </p>
      )}
    </div>
  );
}
