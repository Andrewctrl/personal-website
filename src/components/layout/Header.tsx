import { NavLink } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';
import SocialButton from '../ui/SocialButton';

const navLinks = [
  { to: '/', label: 'Home', end: true },
  { to: '/projects', label: 'Projects', end: false },
  { to: '/hobbies', label: 'Hobbies', end: false },
  { to: '/resume', label: 'Resume', end: false },
];

export default function Header() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/75 dark:bg-[#0d0d0d]/80 border-b border-black/8 dark:border-white/8 transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-6 py-3.5 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-2.5 hover:opacity-80 transition-opacity">
          <img
            src="/bruhshot.jpg"
            alt="Andrew Li"
            className="w-9 h-9 rounded-full object-cover ring-2 ring-[#4CAF50]/60"
          />
          <span className="font-semibold text-sm tracking-tight">Andrew Li</span>
        </NavLink>

        {/* Nav + actions */}
        <div className="flex items-center gap-4">
          <nav>
            <ul className="flex items-center gap-1 list-none">
              {navLinks.map(({ to, label, end }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={end}
                    className={({ isActive }) =>
                      `text-sm px-3 py-1.5 rounded-md font-medium transition-all duration-200 ${
                        isActive
                          ? 'text-[#4CAF50] bg-[#4CAF50]/8'
                          : 'text-black/60 dark:text-white/60 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="w-px h-4 bg-black/15 dark:bg-white/15" />

          <div className="flex items-center gap-2">
            <SocialButton
              href="https://www.linkedin.com/in/andrew-li-andw/"
              src="/linkedin-icon.png"
              alt="LinkedIn"
            />
            <SocialButton
              href="https://github.com/Andrewctrl"
              src="/github-icon.png"
              alt="GitHub"
            />
            <SocialButton
              href="mailto:Andw123@berkeley.edu"
              src="/email-icon.png"
              alt="Email"
            />
          </div>

          <button
            onClick={toggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-base hover:bg-black/8 dark:hover:bg-white/8 transition-colors duration-200"
            aria-label="Toggle theme"
          >
            {isDark ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </header>
  );
}
