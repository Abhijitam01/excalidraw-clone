"use client";

import { Menu, LayoutDashboard, Settings, LogOut, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function MainMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 left-4 z-50 flex items-center gap-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-800 bg-zinc-950/80 text-zinc-400 shadow-xl backdrop-blur-md transition-all hover:bg-zinc-900 hover:text-zinc-200"
      >
        {isOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      <Link
        href="/dashboard"
        className="flex h-10 items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-950/80 px-4 text-sm font-medium text-zinc-400 shadow-xl backdrop-blur-md transition-all hover:bg-zinc-900 hover:text-zinc-200"
      >
        <LayoutDashboard size={18} />
        <span>Dashboard</span>
      </Link>

      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-2 absolute top-12 left-0 w-56 rounded-2xl border border-zinc-800 bg-zinc-950/90 p-2 shadow-2xl backdrop-blur-xl duration-200">
          <div className="px-3 py-2 text-[10px] font-bold tracking-widest text-zinc-500 uppercase">
            Menu
          </div>

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-zinc-300 transition-colors hover:bg-zinc-900 hover:text-white">
            <Settings size={18} />
            <span>Settings</span>
          </button>

          <div className="my-2 border-t border-zinc-800" />

          <button className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm text-red-400 transition-colors hover:bg-red-500/10 hover:text-red-300">
            <LogOut size={18} />
            <span>Sign out</span>
          </button>
        </div>
      )}
    </div>
  );
}
