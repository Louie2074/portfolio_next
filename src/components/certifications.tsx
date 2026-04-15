'use client';

import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';

const certifications = [
  {
    name: 'AWS Certified Solutions Architect – Associate',
    issuer: 'Amazon Web Services',
    location: 'Seattle, WA',
    period: 'Jan 2025 – Jan 2028',
    description: 'Validated expertise in AWS cloud architecture, services, and best practices.',
  },
];

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Certifications
        </motion.h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg mt-1 flex-shrink-0">
                  <BadgeCheck className="text-purple-400 h-6 w-6" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 mb-1">
                    <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                    <span className="text-sm text-gray-400 whitespace-nowrap">{cert.period}</span>
                  </div>
                  <p className="text-purple-400 font-medium mb-1">{cert.issuer}</p>
                  <p className="text-gray-500 text-sm mb-3">{cert.location}</p>
                  <p className="text-gray-400 text-sm font-light">{cert.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
