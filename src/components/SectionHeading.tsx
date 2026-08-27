"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-2xl mb-14"
    >
      <p className="font-mono text-xs uppercase tracking-[0.4em] text-glow-cyan/80 mb-3">
        {eyebrow}
      </p>
      <h2 className="text-3xl sm:text-4xl font-semibold text-slate-50 mb-4">{title}</h2>
      {description && <p className="text-slate-400 leading-relaxed">{description}</p>}
    </motion.div>
  );
}
