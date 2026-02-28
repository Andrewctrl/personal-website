import { experiences } from '../data/experiences';
import { projects } from '../data/projects';
import { skills } from '../data/skills';
import { courses } from '../data/courses';

const csClasses = courses.filter((c) => c.category === 'CS');
const dsClasses = courses.filter((c) => c.category === 'Data Science');

function ResumeSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <div className="flex items-center gap-3 mb-3">
        <h2 className="text-xs font-bold tracking-widest uppercase text-black/40 dark:text-white/40">
          {title}
        </h2>
        <div className="flex-1 h-px bg-black/10 dark:bg-white/10" />
      </div>
      {children}
    </div>
  );
}

export default function ResumePage() {
  return (
    <section className="py-10 max-w-3xl mx-auto">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-black dark:text-white mb-1">
            Andrew Li
          </h1>
          <p className="text-sm text-black/50 dark:text-white/50">
            San Francisco, CA · <a href="mailto:Andw123@berkeley.edu" className="hover:text-[#4CAF50] transition-colors">Andw123@berkeley.edu</a>
            {' · '}
            <a href="https://www.linkedin.com/in/andrew-li-andw/" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors">LinkedIn</a>
            {' · '}
            <a href="https://github.com/Andrewctrl" target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors">GitHub</a>
          </p>
        </div>
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vQ-tzS2FdUoB3EVsJSoI41vlG9PRAmPF9G_z99PyQ7pY5NBNyJm7DqBPSaDRCX3LzlTDWHF-G82ex3O/pub"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-1.5 text-xs font-medium px-3.5 py-2 rounded-xl border border-black/12 dark:border-white/12 text-black/60 dark:text-white/60 hover:border-[#4CAF50]/40 hover:text-[#4CAF50] transition-all duration-150"
        >
          ↓ Download PDF
        </a>
      </div>

      <div className="flex flex-col gap-7">
        {/* Education */}
        <ResumeSection title="Education">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-semibold text-black dark:text-white">University of California, Berkeley</p>
              <p className="text-sm text-black/55 dark:text-white/55">B.A. Computer Science & Data Science</p>
            </div>
            <span className="text-xs text-black/40 dark:text-white/40 shrink-0 tabular-nums mt-0.5">
              Expected May 2026
            </span>
          </div>
        </ResumeSection>

        {/* Experience */}
        <ResumeSection title="Experience">
          <div className="flex flex-col gap-5">
            {experiences.map((exp) => (
              <div key={exp.id}>
                <div className="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <p className="text-sm font-semibold text-black dark:text-white">
                      {exp.company}
                      <span className="font-normal text-black/40 dark:text-white/40"> · {exp.location}</span>
                    </p>
                    <p className="text-xs text-[#4CAF50] font-medium mt-0.5">{exp.role}</p>
                  </div>
                  <span className="text-xs text-black/40 dark:text-white/40 shrink-0 tabular-nums mt-0.5">
                    {exp.period}
                  </span>
                </div>
                <ul className="flex flex-col gap-1 pl-3 border-l border-black/8 dark:border-white/8">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i} className="text-sm text-black/60 dark:text-white/60 leading-relaxed">
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Projects */}
        <ResumeSection title="Projects">
          <div className="flex flex-col gap-4">
            {projects.slice(0, 2).map((project) => (
              <div key={project.id}>
                <div className="flex items-center gap-2 mb-1.5">
                  <p className="text-sm font-semibold text-black dark:text-white">{project.title}</p>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#4CAF50]/10 text-[#4CAF50] font-medium">
                    {project.language}
                  </span>
                </div>
                <p className="text-sm text-black/55 dark:text-white/55 leading-relaxed pl-3 border-l border-black/8 dark:border-white/8">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Skills */}
        <ResumeSection title="Technical Skills">
          <div className="flex flex-col gap-2">
            {skills.map(({ category, items }) => (
              <div key={category} className="flex gap-3 text-sm">
                <span className="text-black/40 dark:text-white/40 shrink-0 w-20 text-right text-xs pt-0.5 font-medium">
                  {category}
                </span>
                <span className="text-black/70 dark:text-white/70 leading-relaxed">
                  {items.join(', ')}
                </span>
              </div>
            ))}
          </div>
        </ResumeSection>

        {/* Coursework */}
        <ResumeSection title="Relevant Coursework">
          <div className="flex flex-col gap-3">
            <div className="flex gap-3 text-sm">
              <span className="text-black/40 dark:text-white/40 shrink-0 w-20 text-right text-xs pt-0.5 font-medium">Computer Science</span>
              <span className="text-black/70 dark:text-white/70 leading-relaxed">
                {csClasses.map((c) => c.name).join(', ')}
              </span>
            </div>
            <div className="flex gap-3 text-sm">
              <span className="text-black/40 dark:text-white/40 shrink-0 w-20 text-right text-xs pt-0.5 font-medium">Data Science</span>
              <span className="text-black/70 dark:text-white/70 leading-relaxed">
                {dsClasses.map((c) => c.name).join(', ')}
              </span>
            </div>
          </div>
        </ResumeSection>
      </div>
    </section>
  );
}
