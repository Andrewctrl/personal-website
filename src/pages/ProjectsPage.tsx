import { projects } from '../data/projects';
import ProjectCard from '../components/ui/ProjectCard';
import SectionHeader from '../components/ui/SectionHeader';

export default function ProjectsPage() {
  return (
    <section className="py-10">
      <SectionHeader as="h1">Projects</SectionHeader>
      <p className="text-sm text-black/50 dark:text-white/50 mb-8">Here are some of my key projects:</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
