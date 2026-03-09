type SkillChipProps = {
  name: string;
  level: string;
};

export default function SkillChip({ name, level }: SkillChipProps) {
  return (
    <div className="portfolio-surface group rounded-2xl p-4 transition-transform duration-300 hover:-translate-y-1">
      <h3 className="text-lg font-bold text-slate-900">{name}</h3>
      <p className="text-sm text-slate-600">{level}</p>
    </div>
  );
}
