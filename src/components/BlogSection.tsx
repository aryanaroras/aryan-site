"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section id="insights" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Transmission log"
          title="Insights & write-ups."
          description="Technical notes from the field — security audits, autonomous systems, and the engineering behind them."
        />

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {blogPosts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08, ease: "easeOut" }}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`panel panel-glow group mb-5 break-inside-avoid rounded-2xl p-6 cursor-default ${
                post.size === "tall" ? "py-10" : ""
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-glow-cyan/90">
                  {post.tag}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {post.readTime}
                </span>
              </div>

              <h3 className="text-lg font-semibold text-slate-50 mb-3 leading-snug transition-colors group-hover:text-glow-cyan">
                {post.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">{post.excerpt}</p>

              <span className="mt-5 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-widest text-slate-500 transition-colors group-hover:text-slate-200">
                Read log →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
