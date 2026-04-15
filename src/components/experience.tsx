'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Expedia Group',
    location: 'Seattle, WA',
    position: 'Software Engineering Intern',
    period: 'May 2023 – Jul 2023',
    bullets: [
      'Collaborated in a team of 15+ engineers to develop a high-performance real-time data analytics dashboard, cutting AWS costs by 75%.',
      'Implemented GraphQL schemas and resolvers for frontend-backend communication to ensure efficient and accurate data transfer.',
      'Optimized SQL queries within the Apache Druid database to reduce dashboard latency by over 60% (from >3s to <1s).',
      'Created modular React.js components for interactive dashboard tiles to support an intuitive user interface and clear data visualization.',
    ],
  },
  {
    company: 'Thomson Reuters',
    location: 'Minneapolis, MN',
    position: 'Software Engineering Intern',
    period: 'May 2022 – Aug 2022',
    bullets: [
      'Worked in an agile team that concentrated on developing static content for a cloud-based legal research web application.',
      'Enhanced Frontend UI using React.js and jQuery while modernizing legacy code and ensuring Web Accessibility support.',
      'Gained exposure to the software design cycle including issue tracking, code review, development environments, and unit testing.',
      'Coordinated with UX and accessibility teams to strategically plan code design, optimizing user experience and accessibility standards.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Work Experience
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg mt-1 flex-shrink-0">
                  <Briefcase className="text-purple-400 h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    <h3 className="text-xl font-semibold text-white">{exp.position}</h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap">{exp.period}</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-1">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.location}</p>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <motion.li
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.15 + j * 0.07 }}
                        className="text-gray-400 text-sm font-light flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                        {bullet}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
