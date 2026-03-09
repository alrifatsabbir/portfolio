"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function MagneticButton({ children, className = "", onClick }: MagneticButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const btn = btnRef.current;
    if (!btn) return;

    function handleMove(e: MouseEvent) {
      const rect = btn!.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * 0.25;
      const dy = (e.clientY - cy) * 0.25;
      gsap.to(btn, { x: dx, y: dy, duration: 0.4, ease: "power3.out" });
    }

    function handleLeave() {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    }

    btn.addEventListener("mousemove", handleMove);
    btn.addEventListener("mouseleave", handleLeave);

    return () => {
      btn.removeEventListener("mousemove", handleMove);
      btn.removeEventListener("mouseleave", handleLeave);
    };
  }, []);

  return (
    <button
      ref={btnRef}
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-full bg-cyan-700 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-[0_8px_30px_rgba(8,145,178,0.35)] transition-shadow hover:shadow-[0_12px_40px_rgba(8,145,178,0.55)] ${className}`}
    >
      {children}
    </button>
  );
}
