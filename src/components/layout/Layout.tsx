import { Outlet } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import Header from './Header';

export default function Layout() {
  const { isDark } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-[#121212] text-black dark:text-white font-sans transition-colors duration-300">
        <Header />
        <main className="pt-28 max-w-5xl mx-auto px-6 pb-16">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
