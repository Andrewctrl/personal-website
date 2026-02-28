import type { ReactNode } from 'react';

interface SectionHeaderProps {
  children: ReactNode;
  as?: 'h1' | 'h2' | 'h3';
}

export default function SectionHeader({ children, as: Tag = 'h2' }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-1 h-5 rounded-full bg-[#4CAF50] shrink-0" />
      <Tag className="text-xl font-semibold text-black dark:text-white tracking-tight">
        {children}
      </Tag>
    </div>
  );
}
