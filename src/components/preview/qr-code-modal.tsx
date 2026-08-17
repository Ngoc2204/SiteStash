"use client";

import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { Smartphone, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface QrCodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  url: string;
  templateTitle: string;
}

export function QrCodeModal({ isOpen, onClose, url, templateTitle }: QrCodeModalProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = typeof window !== "undefined" ? `${window.location.origin}${url}` : url;

  const handleCopy = () => {
    navigator.clipboard.writeText(fullUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      maxWidth="md"
      title={
        <div className="flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-accent-cyan" />
          <span>Quét mã QR trải nghiệm trên Mobile</span>
        </div>
      }
      description={`Mở camera trên điện thoại thật để trực tiếp trải nghiệm mẫu "${templateTitle}".`}
    >
      <div className="flex flex-col items-center space-y-6 pt-2 text-center">
        {/* QR Frame Container */}
        <div className="p-4 bg-white rounded-2xl shadow-2xl shadow-cyan-500/10 border-4 border-slate-700">
          <QRCodeSVG
            value={fullUrl}
            size={220}
            level="H"
            includeMargin={true}
          />
        </div>

        {/* Info & Copy Link */}
        <div className="w-full space-y-3">
          <div className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-300 font-mono overflow-hidden">
            <span className="truncate flex-1 text-left">{fullUrl}</span>
            <button
              onClick={handleCopy}
              className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-white flex items-center gap-1 shrink-0 transition-colors"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? "Đã sao chép" : "Copy"}</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-primary-400" />
            <span>Tối ưu mượt mà cho cả iOS Safari & Android Chrome</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-end gap-3 w-full pt-2">
          <Button variant="secondary" size="md" onClick={onClose}>
            Đóng
          </Button>
          <a href={url} target="_blank" rel="noreferrer">
            <Button variant="glow" size="md">
              <span>Mở tab mới</span>
              <ExternalLink className="w-4 h-4" />
            </Button>
          </a>
        </div>
      </div>
    </Modal>
  );
}
