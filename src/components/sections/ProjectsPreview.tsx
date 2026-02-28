import { Link } from 'react-router-dom';
import { projects } from '../../data/projects';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';

export default function ProjectsPreview() {
  return (
    <section className="py-8 border-t border-black/8 dark:border-white/8">
      <SectionHeader>Projects</SectionHeader>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <Link
        to="/projects"
        className="text-sm text-black/40 dark:text-white/40 hover:text-[#4CAFF5] transition-colors duration-150"
      >
        See all projects →
      </Link>
    </section>
  );
}
