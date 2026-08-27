"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { skills, type SkillTile } from "@/lib/data";

const categoryAccent: Record<SkillTile["category"], string> = {
  security: "from-fuchsia-500/20 via-transparent to-transparent",
  dev: "from-cyan-400/20 via-transparent to-transparent",
  ai: "from-violet-500/20 via-transparent to-transparent",
  aerial: "from-sky-400/20 via-transparent to-transparent",
};

const categoryLabel: Record<SkillTile["category"], string> = {
  security: "SEC //",
  dev: "DEV //",
  ai: "AI //",
  aerial: "OPS //",
};

export default function SkillsGrid() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="System modules"
          title="Skills, loaded."
          description="A bento view of the stack — offensive security, full-stack development, applied AI, and autonomous aerial systems."
        />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[150px]">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className={`panel panel-glow relative overflow-hidden rounded-2xl p-5 flex flex-col justify-between ${skill.span ?? ""}`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${categoryAccent[skill.category]}`} />
              <span className="relative font-mono text-[10px] uppercase tracking-widest text-slate-500">
                {categoryLabel[skill.category]}
              </span>
              <div className="relative">
                <h3 className="text-lg font-semibold text-slate-50 mb-1.5">{skill.title}</h3>
                <p className="text-sm text-slate-400 leading-snug">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
