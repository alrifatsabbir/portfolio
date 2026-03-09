"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import Reveal from "./Reveal";

type TimelineEntry = {
  period: string;
  role: string;
  company: string;
  description: string;
};

type ExperienceTimelineProps = {
  items: TimelineEntry[];
};

export default function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  return (
    <div className="relative ml-4 border-l-2 border-cyan-200 pl-8 md:ml-0">
      {items.map((item, idx) => (
        <Reveal key={item.company + item.period} delay={idx * 0.12} className="relative mb-12 last:mb-0">
          <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-500 bg-white">
            <Briefcase size={12} className="text-cyan-700" />
          </span>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-700">{item.period}</p>
          <h3 className="mt-1 text-xl font-extrabold text-slate-900 md:text-2xl">{item.role}</h3>
          <p className="text-sm font-semibold text-slate-600">{item.company}</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
        </Reveal>
      ))}

      {/* animated line growth */}
      <motion.div
        className="absolute left-[-1px] top-0 w-0.5 bg-cyan-600"
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  );
}
