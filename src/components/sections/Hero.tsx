import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="py-14">
      <p className="text-sm font-medium text-[#4CAF50] mb-3 tracking-wide uppercase">
        CS & Data Science · UC Berkeley
      </p>
      <h1 className="text-5xl font-bold tracking-tight text-black dark:text-white mb-5 leading-tight">
        Hey, I'm Andrew!
      </h1>
      <p className="text-base text-black/55 dark:text-white/55 leading-relaxed max-w-xl">
        Prev SDE Intern @ Amazon, Machine Learning and Data Science @ Liminal Insights. Studying Computer Science & Data Science at UC Berkeley,
        with a focus on AI, security, and Software Engineering.
      </p>
      <div className="mt-8">
        <Link
          to="/projects"
          className="inline-flex items-center gap-1.5 bg-[#4CAF50] text-white font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-[#43a047] active:scale-95 transition-all duration-150"
        >
          View Projects
          <span className="opacity-70">→</span>
        </Link>
      </div>
    </section>
  );
}
