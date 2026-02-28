import type { Experience } from '../types';

export const experiences: Experience[] = [
  {
    id: 1,
    company: 'Amazon',
    role: 'Software Development Engineer Intern',
    location: 'Irvine, CA',
    period: 'May 2025 – Aug 2025',
    bullets: [
      'Developed a new architecture system for Message Center, a messaging platform used between Amazon procurement teams and suppliers.',
      'Engineered a new AWS CI/CD pipeline leveraging Amazon Q and Kiro AI IDE, supporting migration of 15+ REST APIs and reducing change-request volume.',
      'Improved scalability, decoupled services, reduced blast radius, and cut development time by 50% for future Message Center work.',
      'Enhanced frontend design using React and TypeScript, partnering with senior UI/UX designers to deliver mobile-optimized interfaces.',
    ],
  },
  {
    id: 2,
    company: 'Liminal Insights',
    role: 'Data Science & Machine Learning Intern',
    location: 'Emeryville, CA',
    period: 'June 2024 – Aug 2024',
    bullets: [
      'Researched 5+ data augmentation methods to maximize value from a complex dataset of 25+ battery cell waveform entries.',
      'Developed configurable noise injection and feature-level augmentation techniques, creating a more robust battery defect detection model.',
      'Analyzed and presented findings on augmentation impact, achieving up to a 5% increase in model performance.',
    ],
  },
  {
    id: 3,
    company: 'Google',
    role: 'Computer Science Summer Institute',
    location: 'Virtual',
    period: 'July 2022',
    bullets: [
      'Completed a project-based curriculum in HTML, CSS, and JavaScript, instructed by Google engineers.',
      'Built and presented a dynamic website final project to Google staff and industry leaders.',
      'Completed 14 mini-projects covering interactive UI concepts, event listeners, and web fundamentals.',
    ],
  },
];
