type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "mx-auto text-center" : "";

  return (
    <header className={`mb-12 max-w-2xl ${alignment}`}>
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-700">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-extrabold leading-tight text-slate-900 md:text-5xl">{title}</h2>
      <p className="mt-4 text-pretty text-base leading-relaxed text-slate-700 md:text-lg">{description}</p>
    </header>
  );
}
