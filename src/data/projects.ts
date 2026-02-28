import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Secure File Sharing System',
    language: 'Go',
    description:
      'Developed a secure file sharing application in Golang, applying cryptographic protocols such as AES-CTR, HMAC-SHA-512, and RSA to guarantee data confidentiality, integrity, and authenticity on unsecure storage. Implemented user authentication and authorization using password-based key derivation functions and public/private-key cryptography, while designing efficient data structures for file operations such as upload, download, append, share, and revoke. Conducted thorough threat modeling and security analysis to defend against active adversaries with fine-grained access control.',
  },
  {
    id: 2,
    title: 'Build Your Own World',
    language: 'Java',
    description:
      'Developed a world generation algorithm from scratch in Java based on user-inputted numerical seeds. Created classes for moveable entities and collectible items for the user to reach the goal score. Programmed game-saving capabilities and a replay system for users to rewatch the character movement of their most recent save and continue playing where they left off. Performed test-driven development by writing tests using Google Truth, ensuring all features were developed correctly.',
  },
  {
    id: 3,
    title: 'Machine Learning Model for Image Classification',
    language: 'Python',
    description:
      'Built a convolutional neural network (CNN) for image recognition tasks, exploring deep learning techniques for computer vision problems.',
  },
  {
    id: 4,
    title: 'Portfolio Website',
    language: 'React',
    description:
      'Created this personal portfolio website using React, TypeScript, Vite, and Tailwind CSS to showcase projects and skills.',
  },
];
