import React from "react";
import Link from "next/link";
import { Compass, ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-6 text-center space-y-6">
      <div className="w-16 h-16 rounded-3xl bg-primary/20 text-primary-400 border border-primary/40 flex items-center justify-center shadow-glow">
        <Compass className="w-8 h-8 animate-spin" style={{ animationDuration: "12s" }} />
      </div>

      <div className="space-y-2 max-w-md">
        <h1 className="text-4xl font-black text-white">404 - Không Tìm Thấy Trang</h1>
        <p className="text-sm text-slate-400">
          Đường dẫn bạn yêu cầu không tồn tại hoặc mẫu website đã được cập nhật sang địa chỉ mới.
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Link href="/">
          <Button variant="glow" size="md">
            <Home className="w-4 h-4" />
            <span>Về Trang Chủ</span>
          </Button>
        </Link>
        <Link href="/#showcase">
          <Button variant="secondary" size="md">
            <span>Khám Phá Kho Mẫu</span>
          </Button>
        </Link>
      </div>
    </div>
  );
}
