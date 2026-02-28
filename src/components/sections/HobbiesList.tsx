import { Link } from 'react-router-dom';
import { hobbies } from '../../data/hobbies';
import SectionHeader from '../ui/SectionHeader';

export default function HobbiesList() {
  return (
    <section className="py-8 border-t border-black/8 dark:border-white/8">
      <SectionHeader>Hobbies</SectionHeader>
      <div className="flex flex-wrap gap-2 mb-4">
        {hobbies.map((hobby) => (
          <span
            key={hobby}
            className="text-sm font-medium px-3.5 py-1.5 rounded-full bg-[#4CAF50]/8 text-[#4CAF50] border border-[#4CAF50]/20 hover:bg-[#4CAF50]/15 transition-colors duration-150 cursor-default"
          >
            {hobby}
          </span>
        ))}
      </div>
      <Link
        to="/hobbies"
        className="text-sm text-black/40 dark:text-white/40 hover:text-[#4CAFF5] transition-colors duration-150"
      >
        See more →
      </Link>
    </section>
  );
}
