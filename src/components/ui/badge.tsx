import React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "secondary" | "success" | "warning" | "danger" | "cyan" | "purple" | "outline";
}

export function Badge({ className, variant = "default", children, ...props }: BadgeProps) {
  const variants = {
    default: "bg-slate-800 text-slate-300 border-slate-700/60",
    primary: "bg-primary/10 text-primary-300 border-primary/30",
    secondary: "bg-slate-800/80 text-slate-300 border-slate-700/50",
    success: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    warning: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    danger: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    cyan: "bg-cyan-500/10 text-cyan-300 border-cyan-500/30",
    purple: "bg-purple-500/10 text-purple-300 border-purple-500/30",
    outline: "bg-transparent text-slate-300 border-slate-700",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium border backdrop-blur-sm transition-all",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
