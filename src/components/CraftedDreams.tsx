"use client";

import { motion } from "framer-motion";
import { craftedDreams } from "@/lib/data";

export default function CraftedDreams() {
  return (
    <section id="crafted-dreams" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="panel panel-glow relative overflow-hidden rounded-3xl px-8 py-16 sm:px-16 sm:py-20 text-center"
        >
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 via-transparent to-cyan-400/10" />
          <div className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-fuchsia-300/50 to-transparent" />

          <p className="relative font-mono text-xs uppercase tracking-[0.4em] text-glow-cyan/80 mb-6">
            A different canvas //
          </p>

          <h2 className="font-crafted relative text-6xl sm:text-8xl leading-none text-slate-50 mb-6">
            {craftedDreams.name}
          </h2>

          <p className="relative text-lg sm:text-xl text-slate-300 mb-4">{craftedDreams.tagline}</p>
          <p className="relative max-w-xl mx-auto text-sm text-slate-400 leading-relaxed mb-10">
            {craftedDreams.description}
          </p>

          <a
            href="#contact"
            className="relative inline-flex panel rounded-full px-6 py-3 font-mono text-xs uppercase tracking-widest text-slate-200 hover:text-glow-cyan transition-colors"
          >
            {craftedDreams.cta}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
