export interface Project {
  id: number;
  title: string;
  description: string;
  language: string;
  url?: string;
  githubUrl?: string;
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  location: string;
  period: string;
  bullets: string[];
}

export interface Course {
  code: string;
  name: string;
  category: 'CS' | 'Data Science';
}
