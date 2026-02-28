import { experiences } from '../../data/experiences';
import SectionHeader from '../ui/SectionHeader';

export default function Experience() {
  return (
    <section className="py-8 border-t border-black/8 dark:border-white/8">
      <SectionHeader>Experience</SectionHeader>
      <div className="flex flex-col gap-6">
        {experiences.map((exp) => (
          <div key={exp.id} className="flex flex-col gap-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-black dark:text-white">{exp.company}</h3>
                  <span className="text-xs text-black/35 dark:text-white/35">{exp.location}</span>
                </div>
                <p className="text-xs text-[#4CAF50] font-medium mt-0.5">{exp.role}</p>
              </div>
              <span className="text-xs text-black/40 dark:text-white/40 shrink-0 tabular-nums mt-0.5">
                {exp.period}
              </span>
            </div>
            <ul className="flex flex-col gap-1.5 pl-3 border-l border-black/8 dark:border-white/8">
              {exp.bullets.map((bullet, i) => (
                <li key={i} className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                  {bullet}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
