"use client";

import React, { useState, useEffect } from "react";
import { Search, X } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export function SearchBar({
  value,
  onChange,
  placeholder = "Tìm theo tên mẫu, công nghệ (Next.js, Tailwind, SEO...)",
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState(value);

  // Debounced search logic (300ms)
  useEffect(() => {
    const timer = setTimeout(() => {
      onChange(internalValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [internalValue, onChange]);

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  return (
    <div className="relative flex-1 min-w-[260px]">
      <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
        <Search className="w-4 h-4" />
      </div>
      <input
        type="text"
        value={internalValue}
        onChange={(e) => setInternalValue(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-10 py-2.5 rounded-xl text-sm glass-input placeholder:text-slate-500 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
      />
      {internalValue && (
        <button
          onClick={() => {
            setInternalValue("");
            onChange("");
          }}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
        >
          <X className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
