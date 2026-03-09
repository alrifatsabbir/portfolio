"use client";

import { useRef, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  ArrowDown,
  Code2,
  Layers,
  Palette,
  Globe,
  Database,
  Cpu,
  Award,
  Lightbulb,
  Send,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Home,
  User,
  Wrench,
  Briefcase,
  FolderOpen,
  Workflow,
  Trophy,
  BookOpen,
  MessageSquare,
} from "lucide-react";

/* ── React Bits components ── */
import BlurText from "../reactbits/BlurText";
import GradientText from "../reactbits/GradientText";
import ShinyText from "../reactbits/ShinyText";
import CountUp from "../reactbits/CountUp";
import ScrollFloat from "../reactbits/ScrollFloat";
import SpotlightCard from "../reactbits/SpotlightCard";
import StarBorder from "../reactbits/StarBorder";
import Magnet from "../reactbits/Magnet";
import Dock, { type DockItemData } from "../reactbits/Dock";

/* ── portfolio primitives ── */
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ─────────── data ─────────── */
const SKILLS_CATEGORIES = [
  {
    title: "Frontend",
    icon: <Globe size={20} />,
    skills: ["React", "Next.js", "TypeScript", "TailwindCSS", "Three.js / R3F", "Framer Motion"],
  },
  {
    title: "Backend",
    icon: <Database size={20} />,
    skills: ["Node.js", "Python", "Express", "Django", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & DevOps",
    icon: <Cpu size={20} />,
    skills: ["Git", "Docker", "AWS", "MongoDB", "PostgreSQL", "Redis"],
  },
  {
    title: "Creative",
    icon: <Palette size={20} />,
    skills: ["GSAP", "Shaders", "WebGL", "Figma", "After Effects", "Blender"],
  },
];

const EXPERIENCE = [
  {
    period: "2024 — Present",
    role: "Full-Stack Web Developer",
    company: "Freelance / Personal Projects",
    description:
      "Building high-performance web applications with Next.js, Three.js, and modern animation libraries. Delivering pixel-perfect, interactive experiences for clients worldwide.",
  },
  {
    period: "2023 — 2024",
    role: "Frontend Developer",
    company: "Tech Startup",
    description:
      "Led frontend architecture using React and TypeScript. Implemented GSAP-based scroll animations and responsive design systems that improved engagement by 40%.",
  },
  {
    period: "2022 — 2023",
    role: "Junior Developer",
    company: "Web Agency",
    description:
      "Developed responsive websites and e-commerce platforms. Collaborated closely with designers to translate Figma mockups into production-ready code.",
  },
];

const PROJECTS = [
  {
    title: "EcoTracker",
    description:
      "A sustainability dashboard with real-time carbon footprint data, interactive 3D globe, and chart animations.",
    tech: ["Next.js", "Three.js", "D3.js", "MongoDB"],
    color: "rgba(16, 185, 129, 0.15)",
  },
  {
    title: "DevCollab",
    description:
      "Real-time collaborative code editor with live cursors, voice chat, and integration with Git.",
    tech: ["React", "Socket.io", "Node.js", "Redis"],
    color: "rgba(139, 92, 246, 0.15)",
  },
  {
    title: "ShopFlow",
    description:
      "E-commerce platform with GSAP micro-interactions, skeleton loading, and AI product recommendations.",
    tech: ["Next.js", "Stripe", "TailwindCSS", "PostgreSQL"],
    color: "rgba(245, 158, 11, 0.15)",
  },
  {
    title: "Portfolio V3",
    description:
      "This very site — Three.js-powered portfolio with scrollytelling, GSAP transitions, and React Bits effects.",
    tech: ["Next.js", "R3F", "GSAP", "React Bits"],
    color: "rgba(6, 182, 212, 0.15)",
  },
];

const PROCESS_STEPS = [
  { icon: Lightbulb, title: "Discovery", description: "Deep-dive into requirements, user research, and competitive analysis." },
  { icon: Palette, title: "Design", description: "Wireframes, mood boards, and high-fidelity prototypes with motion specs." },
  { icon: Code2, title: "Develop", description: "Clean, modular code with responsive layouts and silky animations." },
  { icon: Layers, title: "Deploy & Iterate", description: "CI/CD pipelines, performance audits, and continuous improvements." },
];

const AWARDS = [
  { title: "Best UI/UX Design", event: "Dev Showcase 2025", description: "Awarded for an innovative scrollytelling portfolio experience." },
  { title: "Hackathon Winner", event: "CodeFest 2024", description: "First place for building a real-time collaboration tool in 48 hours." },
  { title: "Top 10 Rising Dev", event: "DevCommunity 2024", description: "Recognised among the top emerging developers for creative web experiences." },
];

const INSIGHTS = [
  { title: "Why GSAP Still Dominates Web Animation", excerpt: "A deep look at how GSAP compares to CSS and Framer Motion for production.", date: "Feb 2026" },
  { title: "Building Scroll-Driven 3D Experiences", excerpt: "Lessons learned creating performant Three.js scenes that respond to scroll.", date: "Jan 2026" },
  { title: "The Art of Micro-Interactions", excerpt: "Small details that make users smile — magnetic buttons, parallax cards, and more.", date: "Dec 2025" },
];

/* ─────────── component ─────────── */
export default function PortfolioPage() {
  const heroRef = useRef<HTMLElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  /* GSAP marquee */
  useEffect(() => {
    if (!marqueeRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50,
        ease: "none",
        duration: 30,
        repeat: -1,
      });
    }, marqueeRef);
    return () => ctx.revert();
  }, []);

  /* GSAP parallax for spotlight cards */
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".parallax-card").forEach((card) => {
        gsap.fromTo(card, { y: 50 }, {
          y: -15,
          ease: "none",
          scrollTrigger: { trigger: card, start: "top bottom", end: "bottom top", scrub: 1 },
        });
      });
    });
    return () => ctx.revert();
  }, []);

  /* Dock nav items */
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const dockItems: DockItemData[] = [
    { icon: <Home size={20} className="text-cyan-400" />, label: "Home", onClick: () => scrollTo("hero") },
    { icon: <User size={20} className="text-cyan-400" />, label: "About", onClick: () => scrollTo("about") },
    { icon: <Wrench size={20} className="text-cyan-400" />, label: "Skills", onClick: () => scrollTo("skills") },
    { icon: <Briefcase size={20} className="text-cyan-400" />, label: "Work", onClick: () => scrollTo("experience") },
    { icon: <FolderOpen size={20} className="text-cyan-400" />, label: "Projects", onClick: () => scrollTo("projects") },
    { icon: <Workflow size={20} className="text-cyan-400" />, label: "Process", onClick: () => scrollTo("process") },
    { icon: <Trophy size={20} className="text-cyan-400" />, label: "Awards", onClick: () => scrollTo("awards") },
    { icon: <BookOpen size={20} className="text-cyan-400" />, label: "Blog", onClick: () => scrollTo("insights") },
    { icon: <MessageSquare size={20} className="text-cyan-400" />, label: "Contact", onClick: () => scrollTo("contact") },
  ];

  return (
    <>
      {/* ── Dock Nav: vertical left on md+, horizontal bottom on mobile ── */}
      <div className="fixed bottom-3 left-0 right-0 z-50 flex justify-center md:hidden">
        <Dock items={dockItems} panelHeight={56} baseItemSize={36} magnification={52} distance={140} />
      </div>
      <div className="fixed left-0 top-0 bottom-0 z-50 hidden items-center md:flex">
        <Dock items={dockItems} panelHeight={56} baseItemSize={40} magnification={60} distance={160} vertical />
      </div>

      {/* ═══════════ 1 · Hero ═══════════ */}
      <section
        id="hero"
        ref={heroRef}
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#050816]"
      >
        <HeroScene />
        <motion.div style={{ y: heroY, opacity: heroOpacity }} className="relative z-10 px-6 text-center">
          {/* badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-950/40 px-4 py-1.5 glow-pulse"
          >
            <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <ShinyText
              text="Available for Freelance Work"
              speed={3}
              color="#94a3b8"
              shineColor="#22d3ee"
              className="text-xs font-bold uppercase tracking-[0.2em]"
            />
          </motion.div>

          {/* name with BlurText */}
          <BlurText
            text="AL RIFAT"
            delay={120}
            animateBy="letters"
            direction="top"
            className="text-5xl font-black leading-[1.05] tracking-tight text-white md:text-8xl"
          />
          <GradientText
            colors={["#06b6d4", "#a855f7", "#ec4899", "#06b6d4"]}
            animationSpeed={6}
            className="mt-2"
          >
            <span className="text-5xl font-black tracking-tight md:text-8xl">SABBIR</span>
          </GradientText>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mx-auto mt-6 max-w-lg text-base leading-relaxed text-slate-400 md:text-lg"
          >
            I craft immersive digital experiences with modern web technologies,
            beautiful animation, and thoughtful design.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.6 }}
            className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center"
          >
            <Magnet padding={60} magnetStrength={3}>
              <StarBorder as="a" color="#06b6d4" speed="5s" className="cursor-pointer" onClick={() => scrollTo("projects")}>
                <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em]">
                  View my work
                </span>
              </StarBorder>
            </Magnet>
            <Magnet padding={60} magnetStrength={3}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-bold uppercase tracking-[0.16em] text-white transition-colors hover:border-cyan-500/30 hover:bg-white/10"
              >
                Get in touch
              </a>
            </Magnet>
          </motion.div>
        </motion.div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-white/30"
        >
          <ArrowDown size={22} />
        </motion.div>
      </section>

      {/* ═══════════ 2 · About ═══════════ */}
      <section id="about" className="portfolio-section bg-[#050816]">
        <div className="portfolio-container grid items-center gap-14 md:grid-cols-2">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">About Me</p>
            <BlurText
              text="I turn ideas into interactive reality."
              delay={80}
              animateBy="words"
              direction="top"
              className="text-3xl font-extrabold leading-tight text-white md:text-5xl"
            />
            <p className="mt-6 text-sm leading-relaxed text-slate-400 md:text-base">
              I&apos;m a passionate full-stack developer with 3+ years of experience. I specialise
              in crafting immersive web experiences that blend stunning visuals with robust
              engineering. When I&apos;m not coding, you&apos;ll find me experimenting with creative
              coding or contributing to open-source.
            </p>
            <div className="mt-8 flex gap-8">
              {[
                { value: 3, suffix: "+", label: "Years Exp." },
                { value: 30, suffix: "+", label: "Projects" },
                { value: 15, suffix: "+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-black text-white">
                    <CountUp to={stat.value} duration={2.5} className="text-3xl font-black text-white" />
                    <span className="text-cyan-400">{stat.suffix}</span>
                  </p>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="gradient-border mx-auto w-full max-w-sm">
              <div className="relative aspect-square overflow-hidden bg-[#0a0f25]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/alrifatsabbir-1.png"
                  alt="Al Rifat Sabbir"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/60 to-transparent" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════ 3 · Skills ═══════════ */}
      <section id="skills" className="portfolio-section overflow-hidden bg-[#0a0f25]">
        <div className="portfolio-container">
          <div className="mx-auto mb-4 text-center">
            <ScrollFloat
              containerClassName="mb-6"
              textClassName="text-white"
              scrollStart="top bottom"
              scrollEnd="center center"
            >
              Skills
            </ScrollFloat>
            <Reveal>
              <p className="mx-auto max-w-md text-sm text-slate-400 md:text-base">
                A curated stack of technologies I use daily to create fast, accessible, and visually stunning applications.
              </p>
            </Reveal>
          </div>

          {/* icon row */}
          <Reveal delay={0.1}>
            <div className="mx-auto mb-10 flex flex-wrap items-center justify-center gap-6 text-slate-600">
              <Globe size={28} /> <Code2 size={28} /> <Database size={28} />
              <Cpu size={28} /> <Layers size={28} /> <Palette size={28} />
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SKILLS_CATEGORIES.map((cat, i) => (
              <Reveal key={cat.title} delay={i * 0.1}>
                <SpotlightCard className="h-full p-6" spotlightColor="rgba(6, 182, 212, 0.12)">
                  <div className="mb-4 flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-950/60 text-cyan-400">
                      {cat.icon}
                    </span>
                    <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {cat.skills.map((skill) => (
                      <li key={skill} className="flex items-center gap-2 text-sm text-slate-400">
                        <span className="h-1 w-1 rounded-full bg-cyan-500" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>

        {/* infinite marquee ribbon */}
        <div ref={marqueeRef} className="relative mt-16 overflow-hidden border-y border-white/5 py-4">
          <div className="marquee-track flex w-max gap-8 whitespace-nowrap">
            {[...SKILLS_CATEGORIES.flatMap((c) => c.skills), ...SKILLS_CATEGORIES.flatMap((c) => c.skills)].map((s, i) => (
              <span key={`${s}-${i}`} className="text-sm font-bold uppercase tracking-[0.2em] text-slate-700">
                {s} ★
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 4 · Experience ═══════════ */}
      <section id="experience" className="portfolio-section bg-[#050816]">
        <div className="portfolio-container">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">Experience</p>
            <BlurText
              text="Where I've been."
              delay={100}
              animateBy="words"
              direction="top"
              className="mb-12 text-3xl font-extrabold leading-tight text-white md:text-5xl"
            />
          </Reveal>

          <div className="relative ml-4 border-l border-white/10 pl-8 md:ml-0">
            {/* animated line */}
            <motion.div
              className="absolute left-[-0.5px] top-0 w-px bg-gradient-to-b from-cyan-400 to-purple-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1.4, ease: "easeOut" }}
            />

            {EXPERIENCE.map((item, idx) => (
              <Reveal key={item.company + item.period} delay={idx * 0.12} className="relative mb-14 last:mb-0">
                <span className="absolute -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border-2 border-cyan-500 bg-[#050816]">
                  <Briefcase size={12} className="text-cyan-400" />
                </span>
                <ShinyText
                  text={item.period}
                  speed={4}
                  color="#64748b"
                  shineColor="#22d3ee"
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                />
                <h3 className="mt-1 text-xl font-extrabold text-white md:text-2xl">{item.role}</h3>
                <p className="text-sm font-semibold text-cyan-400/70">{item.company}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{item.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 5 · Projects ═══════════ */}
      <section id="projects" className="portfolio-section bg-[#0a0f25]">
        <div className="portfolio-container">
          <div className="mx-auto mb-4 text-center">
            <ScrollFloat
              containerClassName="mb-4"
              textClassName="text-white"
              scrollStart="top bottom"
              scrollEnd="center center"
            >
              Projects
            </ScrollFloat>
            <Reveal>
              <p className="mx-auto max-w-md text-sm text-slate-400 md:text-base">
                Each project is a unique challenge — from real-time tools to immersive 3D dashboards.
              </p>
            </Reveal>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {PROJECTS.map((proj, i) => (
              <Reveal key={proj.title} delay={i * 0.1}>
                <TiltCard className="parallax-card h-full">
                  <SpotlightCard className="h-full p-6 md:p-7" spotlightColor={proj.color}>
                    <h3 className="text-2xl font-extrabold text-white">{proj.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">{proj.description}</p>
                    <ul className="mt-5 flex flex-wrap gap-2">
                      {proj.tech.map((t) => (
                        <li
                          key={`${proj.title}-${t}`}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                    <Magnet padding={40} magnetStrength={4}>
                      <a
                        href="/projects"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                      >
                        Explore project →
                      </a>
                    </Magnet>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 6 · Process ═══════════ */}
      <section id="process" className="portfolio-section bg-[#050816]">
        <div className="portfolio-container">
          <Reveal>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">My Process</p>
            <BlurText
              text="How I bring ideas to life."
              delay={80}
              animateBy="words"
              direction="top"
              className="mx-auto mb-12 max-w-xl text-center text-3xl font-extrabold leading-tight text-white md:text-5xl"
            />
          </Reveal>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => {
              const Icon = step.icon;
              return (
                <Reveal key={step.title} delay={i * 0.12}>
                  <SpotlightCard className="h-full p-6" spotlightColor="rgba(168, 85, 247, 0.12)">
                    <GradientText
                      colors={["#06b6d4", "#a855f7"]}
                      animationSpeed={4}
                      className="mb-3"
                    >
                      <span className="text-4xl font-black">0{i + 1}</span>
                    </GradientText>
                    <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-950/40 text-cyan-400">
                      <Icon size={20} />
                    </span>
                    <h3 className="text-lg font-extrabold text-white">{step.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.description}</p>
                  </SpotlightCard>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════ 7 · Awards ═══════════ */}
      <section id="awards" className="portfolio-section bg-[#0a0f25]">
        <div className="portfolio-container">
          <div className="mx-auto mb-4 text-center">
            <ScrollFloat
              containerClassName="mb-4"
              textClassName="text-white"
              scrollStart="top bottom"
              scrollEnd="center center"
            >
              Awards
            </ScrollFloat>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {AWARDS.map((a, i) => (
              <Reveal key={a.title} delay={i * 0.12}>
                <TiltCard className="h-full">
                  <SpotlightCard className="flex h-full flex-col items-center p-7 text-center" spotlightColor="rgba(245, 158, 11, 0.12)">
                    <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-950/40">
                      <Award size={28} className="text-amber-400" />
                    </div>
                    <h3 className="text-xl font-extrabold text-white">{a.title}</h3>
                    <ShinyText
                      text={a.event}
                      speed={3}
                      color="#64748b"
                      shineColor="#fbbf24"
                      className="mt-1 text-xs font-bold uppercase tracking-[0.16em]"
                    />
                    <p className="mt-3 text-sm leading-relaxed text-slate-400">{a.description}</p>
                  </SpotlightCard>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 8 · Insights / Blog ═══════════ */}
      <section id="insights" className="portfolio-section bg-[#050816]">
        <div className="portfolio-container">
          <Reveal>
            <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">Insights &amp; Blog</p>
            <BlurText
              text="Thoughts on the craft."
              delay={80}
              animateBy="words"
              direction="top"
              className="mx-auto mb-12 max-w-xl text-center text-3xl font-extrabold leading-tight text-white md:text-5xl"
            />
          </Reveal>

          <div className="grid gap-8 md:grid-cols-3">
            {INSIGHTS.map((post, i) => (
              <Reveal key={post.title} delay={i * 0.12}>
                <SpotlightCard className="group p-6" spotlightColor="rgba(6, 182, 212, 0.1)">
                  <ShinyText
                    text={post.date}
                    speed={3}
                    color="#64748b"
                    shineColor="#22d3ee"
                    className="text-xs font-bold uppercase tracking-[0.16em]"
                  />
                  <h3 className="mt-2 text-lg font-extrabold text-white transition-colors group-hover:text-cyan-400">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-400">{post.excerpt}</p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ 9 · Contact ═══════════ */}
      <section id="contact" className="portfolio-section bg-[#0a0f25] pb-32">
        <div className="portfolio-container text-center">
          <Reveal>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-400">Get in Touch</p>
            <GradientText
              colors={["#06b6d4", "#a855f7", "#ec4899", "#06b6d4"]}
              animationSpeed={5}
              className="mx-auto mb-4"
            >
              <span className="text-3xl font-extrabold md:text-5xl">Let&apos;s create something amazing.</span>
            </GradientText>
            <p className="mx-auto mt-4 max-w-md text-sm text-slate-400 md:text-base">
              Have a project in mind, a question, or just want to say hello? I&apos;d love to hear from you.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mx-auto mt-10 grid max-w-xl gap-5"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="rounded-xl border border-white/8 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="rounded-xl border border-white/8 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500"
                />
              </div>
              <textarea
                rows={5}
                placeholder="Your Message"
                className="rounded-xl border border-white/8 bg-white/5 px-5 py-3.5 text-sm text-white placeholder-slate-500 outline-none transition-colors focus:border-cyan-500"
              />
              <div className="flex justify-center">
                <Magnet padding={80} magnetStrength={2}>
                  <StarBorder as="button" color="#06b6d4" speed="4s">
                    <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.16em]">
                      <Send size={16} /> Send Message
                    </span>
                  </StarBorder>
                </Magnet>
              </div>
            </form>
          </Reveal>

          {/* social links */}
          <Reveal delay={0.3}>
            <div className="mt-16 flex items-center justify-center gap-5">
              {[
                { icon: Github, href: "https://github.com/alrifatsabbir", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
                { icon: Mail, href: "mailto:hello@alrifatsabbir.com", label: "Email" },
              ].map((social) => {
                const Icon = social.icon;
                return (
                  <Magnet key={social.label} padding={50} magnetStrength={3}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:border-cyan-500 hover:text-cyan-400"
                    >
                      <Icon size={18} />
                    </a>
                  </Magnet>
                );
              })}
            </div>
          </Reveal>

          <p className="mt-12 text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Al Rifat Sabbir. All rights reserved.
          </p>
        </div>
      </section>
    </>
  );
}
