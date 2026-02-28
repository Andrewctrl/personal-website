import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <section className="py-24 flex flex-col items-center text-center">
      <span className="text-xs font-semibold text-[#4CAF50] tracking-widest uppercase mb-4">Error 404</span>
      <h1 className="text-6xl font-bold tracking-tight text-black dark:text-white mb-3">Page not found.</h1>
      <p className="text-sm text-black/50 dark:text-white/50 mb-8">
        Looks like this page doesn't exist.
      </p>
      <Link
        to="/"
        className="inline-flex items-center gap-1.5 bg-[#4CAF50] text-white font-medium px-5 py-2.5 rounded-xl text-sm hover:bg-[#43a047] active:scale-95 transition-all duration-150"
      >
        Back home
      </Link>
    </section>
  );
}
