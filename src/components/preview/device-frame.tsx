"use client";

import React, { useState, useEffect } from "react";
import { usePreviewStore } from "@/hooks/use-preview-store";
import { Loader2 } from "lucide-react";

interface DeviceFrameProps {
  demoUrl: string;
  title: string;
}

export function DeviceFrame({ demoUrl, title }: DeviceFrameProps) {
  const { device, iframeKey } = usePreviewStore();
  const [isLoading, setIsLoading] = useState(true);

  // Reset loading state whenever URL or iframe key changes
  useEffect(() => {
    setIsLoading(true);
  }, [demoUrl, iframeKey, device]);

  return (
    <div className="flex-1 w-full flex items-center justify-center p-4 md:p-8 min-h-[calc(100vh-4rem)] bg-slate-950/95 overflow-auto relative">
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      {/* Frame Container */}
      <div
        className={`transition-all duration-500 ease-out flex flex-col items-center justify-center relative ${
          device === "desktop"
            ? "w-full h-[calc(100vh-6rem)] max-w-full rounded-none"
            : device === "tablet"
            ? "device-frame-tablet"
            : "device-frame-mobile"
        }`}
      >
        {/* Mobile Notch / Dynamic Island */}
        {device === "mobile" && (
          <div className="device-notch flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-slate-950 border border-slate-700" />
          </div>
        )}

        {/* Tablet Top Camera Dot */}
        {device === "tablet" && (
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-slate-800 border border-slate-700 z-30" />
        )}

        {/* Loading Skeleton */}
        {isLoading && (
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md z-20 flex flex-col items-center justify-center space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-primary/20 border border-primary/40 flex items-center justify-center">
              <Loader2 className="w-6 h-6 text-primary-400 animate-spin" />
            </div>
            <div className="text-center space-y-1">
              <p className="text-sm font-semibold text-white">Đang tải bản xem thử...</p>
              <p className="text-xs text-slate-400">{title}</p>
            </div>
          </div>
        )}

        {/* Iframe */}
        <iframe
          key={`${iframeKey}-${device}`}
          src={demoUrl}
          title={`Demo ${title}`}
          onLoad={() => setIsLoading(false)}
          className={`w-full h-full border-0 bg-white transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          } ${
            device === "desktop" ? "rounded-xl border border-slate-800 shadow-2xl" : ""
          }`}
          sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-modals"
        />
      </div>
    </div>
  );
}
