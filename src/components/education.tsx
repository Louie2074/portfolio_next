'use client';

import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    school: 'University of Wisconsin - Madison',
    location: 'Madison, WI',
    degree: 'Bachelor of Science in Computer Science, Data Science',
    period: 'Aug 2020 – May 2024',
    details: [
      'GPA: 3.6 / 4.0',
      'Relevant Coursework: Data Structures & Algorithms, Computer Organization, Data Modeling, AI',
      'Extracurriculars: Theta Tau Engineering Fraternity, Vietnamese Student Association, Web Development Club',
    ],
  },
];

export function Education() {
  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Education
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={edu.school}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg mt-1 flex-shrink-0">
                  <GraduationCap className="text-purple-400 h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    <h3 className="text-xl font-semibold text-white">{edu.school}</h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap">{edu.period}</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-1">{edu.degree}</p>
                  <p className="text-gray-500 text-sm mb-3">{edu.location}</p>
                  <ul className="space-y-1">
                    {edu.details.map((detail) => (
                      <li
                        key={detail}
                        className="text-gray-400 text-sm font-light flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1 flex-shrink-0">•</span>
                        {detail}
                      </li>
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
