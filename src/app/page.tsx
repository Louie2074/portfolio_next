import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Contact />
    </div>
  )
}
