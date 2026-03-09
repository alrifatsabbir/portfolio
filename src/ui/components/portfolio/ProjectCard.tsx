import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
  tone: string;
};

export default function ProjectCard({ title, description, tech, href, tone }: ProjectCardProps) {
  return (
    <article className={`parallax-card portfolio-surface rounded-3xl p-6 md:p-7 ${tone}`}>
      <h3 className="text-2xl font-extrabold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-700 md:text-base">{description}</p>
      <ul className="mt-5 flex flex-wrap gap-2">
        {tech.map((item) => (
          <li
            key={`${title}-${item}`}
            className="rounded-full border border-white/70 bg-white/75 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-700"
          >
            {item}
          </li>
        ))}
      </ul>
      <Link
        href={href}
        className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-cyan-800 transition-colors hover:text-cyan-600"
      >
        Explore project
        <ArrowUpRight size={16} />
      </Link>
    </article>
  );
}
