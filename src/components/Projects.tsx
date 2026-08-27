"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { projects, type Project } from "@/lib/data";

const statusColor: Record<Project["status"], string> = {
  operational: "text-emerald-300",
  "in field": "text-glow-cyan",
  archived: "text-slate-500",
};

export default function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Field log"
          title="Operations & builds."
          description="Selected work spanning security tooling, autonomous flight, and applied AI. Status reflects current deployment state."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6 }}
              className="panel panel-glow group relative overflow-hidden rounded-2xl p-7"
            >
              <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-opacity duration-300 group-hover:opacity-100 opacity-0" />

              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  Project // {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`font-mono text-[10px] uppercase tracking-widest ${statusColor[project.status]}`}>
                  ● {project.status}
                </span>
              </div>

              <h3 className="text-2xl font-semibold text-slate-50 mb-2">{project.title}</h3>
              <p className="text-sm text-slate-400 mb-4">{project.summary}</p>
              <p className="text-sm text-slate-500 leading-relaxed mb-6">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
