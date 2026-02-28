import Hero from '../components/sections/Hero';
import Experience from '../components/sections/Experience';
import Skills from '../components/sections/Skills';
import ProjectsPreview from '../components/sections/ProjectsPreview';
import Coursework from '../components/sections/Coursework';
import HobbiesList from '../components/sections/HobbiesList';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Experience />
      <Skills />
      <ProjectsPreview />
      <Coursework />
      <HobbiesList />
    </>
  );
}
