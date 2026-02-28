import { hobbies } from '../data/hobbies';
import SectionHeader from '../components/ui/SectionHeader';

export default function HobbiesPage() {
  return (
    <section className="py-10">
      <SectionHeader as="h1">Hobbies</SectionHeader>
      <p className="text-sm text-black/50 dark:text-white/50 mb-8">
        Things I enjoy outside of work and school.
      </p>
      <div className="flex flex-wrap gap-2.5">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="text-sm font-medium px-4 py-2 rounded-full bg-[#4CAF50]/8 text-[#4CAF50] border border-[#4CAF50]/20 hover:bg-[#4CAF50]/15 transition-colors duration-150 cursor-default"
          >
            {hobby}
          </span>
        ))}
      </div>
      <p className="mt-10 text-xs text-black/30 dark:text-white/30 italic">More coming soon.</p>
    </section>
  );
}
