"use client";

import { useState } from "react";
import { navLinks, profile } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-mono text-sm tracking-[0.3em] text-slate-200/90 panel panel-glow rounded-full px-4 py-2"
        >
          ARORA<span className="text-glow-cyan text-glow">_OS</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 panel rounded-full px-2 py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-slate-300 transition-colors hover:bg-white/5 hover:text-glow-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={`mailto:${profile.email}`}
          className="hidden md:inline-flex panel panel-glow rounded-full px-4 py-2 font-mono text-xs uppercase tracking-widest text-glow-cyan hover:text-white transition-colors"
        >
          Transmit //
        </a>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden panel rounded-full p-2.5 text-slate-200"
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block h-0.5 w-5 bg-current mb-1.5" />
          <span className="block h-0.5 w-5 bg-current mb-1.5" />
          <span className="block h-0.5 w-5 bg-current" />
        </button>
      </div>

      {open && (
        <nav className="md:hidden mx-4 mb-4 panel panel-glow rounded-2xl p-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 font-mono text-xs uppercase tracking-widest text-slate-300 hover:bg-white/5 hover:text-glow-cyan"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
