import type { Project } from '../../types';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { title, description, language, url, githubUrl } = project;

  return (
    <div className="group relative bg-white dark:bg-[#161616] border border-black/8 dark:border-white/8 rounded-2xl p-5 flex flex-col gap-3 hover:border-[#4CAF50]/30 hover:shadow-xl hover:shadow-[#4CAF50]/5 transition-all duration-200">
      {/* Language badge */}
      <span className="w-fit bg-[#4CAF50]/10 text-[#4CAF50] text-xs font-semibold px-2.5 py-1 rounded-full">
        {language}
      </span>

      {/* Title */}
      <h3 className="text-sm font-semibold leading-snug text-black dark:text-white">
        {url ? (
          <a href={url} target="_blank" rel="noopener noreferrer" className="hover:text-[#4CAF50] transition-colors duration-150">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>

      {/* Description */}
      <p className="text-sm text-black/50 dark:text-white/50 leading-relaxed flex-1">
        {description}
      </p>

      {/* Links */}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-[#4CAFF5]/70 hover:text-[#4CAFF5] transition-colors duration-150 w-fit"
        >
          View on GitHub →
        </a>
      )}
    </div>
  );
}
