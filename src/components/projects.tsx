'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    name: 'Spotify Playlist Sync',
    subtitle: 'Playlist Synchronization Tool',
    period: 'Jan 2023 – Jul 2023',
    tech: ['React.js', 'TypeScript', 'Spotify API', 'Firebase', 'Firestore'],
    bullets: [
      "Developed a React.js web app with TypeScript, utilizing Spotify's API for user authentication and playlist comparison.",
      'Employed Google Firebase and Firestore to seamlessly deploy, host, and securely store data for the web application.',
    ],
  },
  {
    name: "Wolfram's Cellular Automata",
    subtitle: 'Complex Pattern Generator',
    period: 'Feb 2022 – Jun 2022',
    tech: ['Python', 'NumPy', 'Matplotlib', 'Flask', 'Heroku'],
    bullets: [
      "Wrote a program in Python using NumPy and Matplotlib that visually generated Wolfram's cellular automata.",
      'Packaged the program into a web application using the Flask framework and hosted it on the Heroku Cloud Platform.',
    ],
  },
  {
    name: 'Cryptocurrency Trading Bot',
    subtitle: 'Automated Trading Software',
    period: 'May 2021 – Aug 2022',
    tech: ['Node.js', 'WebSocket', 'Coinbase API'],
    bullets: [
      'Designed a cryptocurrency trading algorithm that initiates trades when specified price targets are hit.',
      'Utilized Node.js to build the bot and establish a WebSocket connection to the Coinbase API to retrieve real-time market data.',
    ],
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Projects
        </motion.h2>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300 flex flex-col"
            >
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{project.name}</h3>
                <p className="text-purple-400 text-sm font-medium mb-1">{project.subtitle}</p>
                <p className="text-gray-500 text-xs mb-4">{project.period}</p>
                <ul className="space-y-2 mb-4">
                  {project.bullets.map((bullet, j) => (
                    <li key={j} className="text-gray-400 text-sm font-light flex items-start gap-2">
                      <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-2 mt-auto pt-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-md border border-gray-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
