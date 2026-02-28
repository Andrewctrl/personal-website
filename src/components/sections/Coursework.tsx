import { courses } from '../../data/courses';
import SectionHeader from '../ui/SectionHeader';

const csClasses = courses.filter((c) => c.category === 'CS');
const dsClasses = courses.filter((c) => c.category === 'Data Science');

function CourseGroup({ title, items }: { title: string; items: typeof courses }) {
  return (
    <div>
      <p className="text-xs font-semibold text-black/40 dark:text-white/40 uppercase tracking-widest mb-3">
        {title}
      </p>
      <div className="flex flex-wrap gap-2">
        {items.map((course) => (
          <span
            key={course.code}
            className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/8 text-black/70 dark:text-white/70 border border-black/8 dark:border-white/8 hover:border-[#4CAF50]/40 hover:text-[#4CAF50] dark:hover:text-[#4CAF50] transition-colors duration-150"
          >
            <span className="text-[#4CAF50] font-semibold">{course.code}</span>
            <span className="w-px h-3 bg-black/15 dark:bg-white/15" />
            {course.name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Coursework() {
  return (
    <section className="py-8 border-t border-black/8 dark:border-white/8">
      <SectionHeader>Relevant Coursework</SectionHeader>
      <div className="flex flex-col gap-6">
        <CourseGroup title="Computer Science" items={csClasses} />
        <CourseGroup title="Data Science" items={dsClasses} />
      </div>
    </section>
  );
}
