import type { Course } from '../types';

export const courses: Course[] = [
  { code: 'CS 61A',  name: 'Structure and Interpretation of Computer Programs', category: 'CS' },
  { code: 'CS 61B',  name: 'Data Structures',                                   category: 'CS' },
  { code: 'CS 61C',  name: 'Great Ideas in Computer Architecture',               category: 'CS' },
  { code: 'CS 70',   name: 'Discrete Mathematics and Probability Theory',        category: 'CS' },
  { code: 'CS 161',  name: 'Computer Security',                                  category: 'CS' },
  { code: 'CS 162',  name: 'Operating Systems and Systems Programming',          category: 'CS' },
  { code: 'CS 168',  name: 'Introduction to the Internet',                       category: 'CS' },
  { code: 'CS 170',  name: 'Efficient Algorithms and Intractable Problems',      category: 'CS' },
  { code: 'CS 186',  name: 'Introduction to Database Systems',                   category: 'CS' },
  { code: 'CS 188',  name: 'Introduction to Artificial Intelligence',            category: 'CS' },
  { code: 'CS 189',  name: 'Introduction to Machine Learning',                   category: 'CS' },

  { code: 'Data C8',   name: 'Foundations of Data Science',                     category: 'Data Science' },
  { code: 'Data C100', name: 'Principles & Techniques of Data Science',         category: 'Data Science' },
  { code: 'Data C104', name: 'Human Contexts and Ethics of Data',               category: 'Data Science' },
  { code: 'Data 144',  name: 'Data Mining and Analytics',                       category: 'Data Science' },
  { code: 'Stat 134',  name: 'Concepts of Probability',                         category: 'Data Science' },
  { code: 'CogSci 131', name: 'Computational Models of Cognition',              category: 'Data Science' },
  { code: 'CogSci 132', name: 'Rhythms of the Brain: from Neuronal Communication to Function', category: 'Data Science' },
];
