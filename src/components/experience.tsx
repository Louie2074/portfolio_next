'use client';

import { motion } from 'framer-motion';
import { Globe, BarChart2 } from 'lucide-react';

const experiences = [
  {
    company: 'Expedia Group',
    icon: Globe,
    location: 'Seattle, WA',
    position: 'Software Engineer II',
    period: 'Aug 2024 – Present',
    bullets: [
      'Engineer on the Service Data team, building the real-time and historical data infrastructure powering Workforce Management reporting for Expedia\'s global contact center operations.',
      'Discovered a data mismatch between Salesforce and AWS Connect causing inaccurate agent productivity tracking, then owned end-to-end design and delivery of a self-healing AWS Lambda reconciliation system to resolve it, recovering $3M in annual revenue.',
      'Built a Kafka streaming pipeline processing 5M+ events daily for 200+ lodging partners, enabling real-time analytics and performance monitoring.',
      'Spearheaded team adoption of AI agentic tools (Claude Code, MCP) as the go-to resource for agentic workflows.',
      'Reduced Druid SQL query runtime by 80% (5s to 1s), boosting OLAP performance for business analytics.',
      'Automated UI deployment scripts with Python, saving 10+ hrs/week and cutting deployment failures by 70%.',
      'Developed GraphQL APIs in Node.js powering real-time data access across high-traffic frontend applications, serving 10M+ requests daily.',
      'Managed vendor engineers to migrate legacy dashboards to real-time in-house solutions, cutting load times by 3x.',
      'Mentored an engineering intern in developing a Node.js Lambda notification scheduler, automating configurable stakeholder reminders via email and messaging.',
      'Maintained Spark (Scala) and Airflow ETL workflows with data quality checks, ensuring data freshness and accuracy for 50+ stakeholders.',
    ],
  },
  {
    company: 'Expedia Group',
    icon: BarChart2,
    location: 'Seattle, WA',
    position: 'Software Engineer Intern',
    period: 'May 2023 – Jul 2023',
    bullets: [
      'Built real-time analytics dashboards in React.js and TypeScript with responsive, data-driven visualizations.',
      'Implemented reusable and modular UI components improving code maintainability and developer productivity.',
      'Wrote unit and integration tests for API and UI behavior, increasing coverage and reducing regressions.',
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
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
              key={`${exp.company}-${exp.period}`}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="bg-purple-600/20 p-3 rounded-lg mt-1 flex-shrink-0">
                  <exp.icon className="text-purple-400 h-6 w-6" />
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
                        transition={{ duration: 0.4, delay: i * 0.1 + j * 0.05 }}
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
