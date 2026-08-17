"use client";

import React, { useState } from "react";
import { TemplateData } from "@/lib/mock-data";
import { usePreviewStore } from "@/hooks/use-preview-store";
import { DeviceToolbar } from "./device-toolbar";
import { DeviceFrame } from "./device-frame";
import { QrCodeModal } from "./qr-code-modal";
import { RentalOrderModal } from "@/components/showcase/rental-order-modal";

interface PreviewContainerProps {
  template: TemplateData;
}

export function PreviewContainer({ template }: PreviewContainerProps) {
  const { isQrModalOpen, setQrModalOpen } = usePreviewStore();
  const [isRentModalOpen, setIsRentModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-950">
      {/* Top sticky device control toolbar */}
      <DeviceToolbar
        template={template}
        onOpenRentModal={() => setIsRentModalOpen(true)}
      />

      {/* Main frame simulator (Desktop, Tablet, Mobile) */}
      <DeviceFrame
        demoUrl={template.demoUrl}
        title={template.title}
      />

      {/* QR Code generator modal */}
      <QrCodeModal
        isOpen={isQrModalOpen}
        onClose={() => setQrModalOpen(false)}
        url={template.demoUrl}
        templateTitle={template.title}
      />

      {/* Instant rental order modal */}
      <RentalOrderModal
        isOpen={isRentModalOpen}
        onClose={() => setIsRentModalOpen(false)}
        template={template}
      />
    </div>
  );
}
