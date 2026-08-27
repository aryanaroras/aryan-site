"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer id="contact" className="relative px-6 pt-24 pb-16 sm:pt-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="panel panel-glow rounded-3xl px-8 py-16 sm:px-16 text-center mb-12"
        >
          <p className="font-mono text-xs uppercase tracking-[0.4em] text-glow-cyan/80 mb-6">
            Open channel //
          </p>
          <h2 className="text-3xl sm:text-5xl font-semibold text-slate-50 mb-8">
            Let&apos;s build something worth encrypting.
          </h2>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex panel rounded-full px-8 py-4 font-mono text-sm uppercase tracking-widest text-glow-cyan hover:text-white transition-colors"
          >
            {profile.email}
          </a>
        </motion.div>

        <div className="flex flex-wrap items-center justify-between gap-4 font-mono text-[11px] uppercase tracking-widest text-slate-500">
          <span>© {new Date().getFullYear()} Aryan Arora — All ops logged.</span>
          <div className="flex gap-6">
            <a href={profile.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-glow-cyan transition-colors">
              {profile.handle}
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-glow-cyan transition-colors">
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
