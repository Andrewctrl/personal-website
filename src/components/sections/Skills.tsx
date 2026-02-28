import { skills } from '../../data/skills';
import SectionHeader from '../ui/SectionHeader';

export default function Skills() {
  return (
    <section className="py-8 border-t border-black/8 dark:border-white/8">
      <SectionHeader>Technical Skills</SectionHeader>
      <div className="flex flex-col gap-4">
        {skills.map(({ category, items }) => (
          <div key={category} className="flex flex-col gap-2 sm:flex-row sm:items-start sm:gap-6">
            <span className="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-widest sm:w-24 sm:shrink-0 sm:pt-1">
              {category}
            </span>
            <div className="flex flex-wrap gap-1.5">
              {items.map((item) => (
                <span
                  key={item}
                  className="text-xs font-medium px-2.5 py-1 rounded-md bg-black/5 dark:bg-white/8 text-black/70 dark:text-white/70 border border-black/8 dark:border-white/8"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
