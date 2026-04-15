import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Education } from '@/components/education';
import { Certifications } from '@/components/certifications';
import { Skills } from '@/components/skills';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Education />
      <Certifications />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}
