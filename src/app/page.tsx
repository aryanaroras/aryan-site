"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-6 py-24 text-center">
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="panel mb-14 inline-flex items-center gap-2 rounded-full border-amber-400/30 px-5 py-2 font-mono text-[11px] uppercase tracking-[0.25em] text-amber-300 sm:text-xs"
      >
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400 shadow-[0_0_10px_2px_rgba(251,191,36,0.6)]" />
        Site under construction — projects uploading
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
        className="max-w-5xl bg-gradient-to-b from-white via-cyan-100 to-cyan-400 bg-clip-text font-mono text-4xl leading-[1.1] font-bold tracking-tight text-transparent uppercase text-glow sm:text-6xl lg:text-7xl"
      >
        Silent in the network.
        <br />
        Autonomous in the air.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scaleX: 0 }}
        animate={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="my-10 h-px w-40 bg-gradient-to-r from-transparent via-glow-cyan/60 to-transparent sm:w-64"
      />

      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="font-mono text-2xl font-semibold tracking-wide text-slate-50 sm:text-3xl"
      >
        Aryan Arora
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-3 font-mono text-xs uppercase tracking-[0.3em] text-slate-400 sm:text-sm"
      >
        Final year engineering student · VIT Vellore
      </motion.p>

      <motion.a
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.05 }}
        href="mailto:aryanarora.connect@gmail.com"
        className="panel panel-glow mt-10 rounded-full px-6 py-3 font-mono text-sm tracking-wide text-glow-cyan transition-colors hover:text-white"
      >
        aryanarora.connect@gmail.com
      </motion.a>
    </div>
  );
}
