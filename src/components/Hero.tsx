"use client";

import { motion, type Variants } from "framer-motion";
import Typewriter from "./Typewriter";
import { profile } from "@/lib/data";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 1.1 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen flex-col justify-center px-6 pt-28 pb-20">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs uppercase tracking-[0.4em] text-glow-cyan/80 mb-6"
        >
          {"// Operator identified"}
        </motion.p>

        <h1 className="font-mono text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-50 mb-8">
          {profile.name.toUpperCase()}
        </h1>

        <div className="min-h-[3.5em] sm:min-h-[2.6em] text-2xl sm:text-4xl font-medium text-slate-200 mb-10 max-w-2xl">
          <Typewriter lines={profile.taglineLines} />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap gap-2 mb-12 max-w-3xl"
        >
          {profile.tags.map((tag) => (
            <motion.span
              key={tag}
              variants={item}
              className="panel rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-slate-300"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="panel panel-glow rounded-full px-6 py-3 font-mono text-sm uppercase tracking-widest text-glow-cyan hover:text-white transition-colors"
          >
            View Operations
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-6 py-3 font-mono text-sm uppercase tracking-widest text-slate-400 hover:text-slate-100 transition-colors"
          >
            {profile.handle}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-3"
        >
          {profile.statusBar.map((s) => (
            <div
              key={s.label}
              className="panel rounded-lg px-3 py-2 font-mono text-[11px] uppercase tracking-widest text-slate-400"
            >
              <span className="text-slate-500">{s.label} · </span>
              <span className="text-glow-cyan">{s.value}</span>
            </div>
          ))}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 font-mono text-[11px] uppercase tracking-[0.3em] text-slate-500"
      >
        scroll ↓
      </motion.div>
    </section>
  );
}
