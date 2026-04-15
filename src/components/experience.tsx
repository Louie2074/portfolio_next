'use client';

import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';

const experiences = [
  {
    company: 'Expedia Group',
    location: 'Seattle, WA',
    position: 'Software Engineer II',
    period: 'Aug 2024 – Present',
    bullets: [
      'Led the development of a streaming pipeline using Kotlin Spring Boot, Apache Kafka and Cassandra, processing 5M+ events daily for 200+ lodging partners, enabling real-time analytics and performance monitoring.',
      'Directed a group of vendor engineers to migrate legacy analytical dashboards to in-house real-time dashboards, reducing load times from 30s to 3s.',
      'Optimized Apache Druid SQL queries by 80% (from 5s to 1s average query time), improving OLAP performance for business analytics.',
      'Identified a major manual bottleneck in the UI deployment process and automated release scripts with Python, saving 10+ hours per week and reducing deployment failures by 70%.',
      'Maintained and improved batch ETL workflows with Apache Spark (Scala) and Airflow, enhancing data accuracy and freshness for downstream reporting used by 50+ stakeholders.',
      'Set up monitoring and alerting with Datadog and Splunk, ensuring 99.9% availability and data integrity.',
      'Coordinated with 4 cross-geo engineering teams to align API contracts and data schemas.',
      'Mentored an engineering intern in developing a Node.js Lambda notification scheduler that automated configurable stakeholder reminders via email and messaging.',
      'Analyzed 5TB+ of historical data in Apache Iceberg data lake via Querybook, identifying data quality issues affecting 50% of customer operations reports and implementing validation fixes.',
    ],
  },
  {
    company: 'University of Wisconsin - Madison',
    location: 'Madison, WI',
    position: 'Computer Science Tutor',
    period: 'Sep 2023 – May 2024',
    bullets: [
      'Provided one-on-one and group tutoring in Java and Python, improving students\' problem-solving skills.',
      'Assisted students with debugging, unit testing, and code reviews, reinforcing best coding practices.',
    ],
  },
  {
    company: 'Expedia Group',
    location: 'Seattle, WA',
    position: 'Software Engineer Intern',
    period: 'May 2023 – Jul 2023',
    bullets: [
      'Built real-time analytics dashboards in React.js and TypeScript with responsive, data-driven visualizations.',
      'Developed GraphQL APIs in Node.js to serve analytics data, enabling efficient access across frontend applications.',
      'Implemented reusable and modular UI components improving code maintainability and developer productivity.',
    ],
  },
  {
    company: 'Thomson Reuters',
    location: 'Minneapolis, MN',
    position: 'Software Engineer Intern',
    period: 'May 2022 – Aug 2022',
    bullets: [
      'Enhanced UI/UX by modernizing a React.js and JavaScript frontend, improving accessibility and usability.',
      'Gained exposure to Agile development methodologies, conducting code reviews and unit testing.',
      'Refactored legacy jQuery code into React.js components, reducing technical debt and improving maintainability.',
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
