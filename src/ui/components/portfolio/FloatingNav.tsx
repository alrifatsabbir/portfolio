"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type NavItem = {
  id: string;
  label: string;
};

type FloatingNavProps = {
  items: NavItem[];
};

export default function FloatingNav({ items }: FloatingNavProps) {
  const [activeSection, setActiveSection] = useState(items[0]?.id ?? "");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => node !== null);

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <nav className="fixed left-1/2 top-6 z-50 hidden -translate-x-1/2 rounded-full border border-white/70 bg-white/75 px-2 py-2 shadow-[0_12px_35px_rgba(9,39,56,0.15)] backdrop-blur md:flex">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] transition-colors ${
              activeSection === item.id
                ? "bg-cyan-700 text-white"
                : "text-slate-700 hover:bg-white hover:text-slate-900"
            }`}
          >
            {item.label}
          </a>
        ))}
      </nav>

      <div className="fixed right-4 top-4 z-50 md:hidden">
        <button
          type="button"
          aria-label="Toggle section navigation"
          onClick={() => setIsMenuOpen((value) => !value)}
          className="rounded-full border border-white/70 bg-white/85 p-3 text-slate-900 shadow-[0_10px_30px_rgba(11,47,63,0.18)]"
        >
          {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 rounded-3xl border border-white/70 bg-[#fef9f2]/95 p-5 shadow-[0_16px_40px_rgba(11,45,59,0.2)] backdrop-blur md:hidden"
          >
            <div className="grid grid-cols-2 gap-2">
              {items.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-xl px-3 py-2 text-center text-[11px] font-bold uppercase tracking-[0.12em] ${
                    activeSection === item.id ? "bg-cyan-700 text-white" : "bg-white text-slate-700"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
