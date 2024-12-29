import { Github, Linkedin } from 'lucide-react'
import Link from 'next/link'

export function SocialLinks() {
  return (
    <section className="py-12 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-center space-x-8">
          <Link
            href="https://github.com/Louie2074"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Github size={32} />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link
            href="https://www.linkedin.com/in/nguyen2001"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors"
          >
            <Linkedin size={32} />
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
