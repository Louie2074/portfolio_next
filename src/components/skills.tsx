'use client';

import { motion } from 'framer-motion';
import { Code, Database, Server, Cloud } from 'lucide-react';

const skills = [
  {
    name: 'Languages',
    icon: Code,
    items: ['Java', 'JavaScript', 'Python', 'Kotlin', 'Scala', 'HTML', 'CSS', 'SQL', 'C', 'R', 'TypeScript'],
  },
  {
    name: 'Technologies',
    icon: Server,
    items: ['React.js', 'Next.js', 'Node.js', 'Flask', 'GraphQL', 'Spring Boot', 'Microservices', 'Kafka', 'Spark', 'RESTful', 'ETL'],
  },
  {
    name: 'Databases',
    icon: Database,
    items: ['MySQL', 'PostgreSQL', 'Hive', 'ScyllaDB', 'Apache Druid', 'MongoDB', 'S3'],
  },
  {
    name: 'Cloud & DevOps',
    icon: Cloud,
    items: ['AWS', 'Docker', 'Serverless', 'CI/CD', 'GitHub Actions', 'Spinnaker', 'Jenkins', 'Datadog', 'Splunk'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-purple-500/50 transition-colors duration-300"
            >
              <div className="bg-purple-600/20 p-3 rounded-lg w-fit mb-4">
                <skill.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-4 text-white">{skill.name}</h3>
              <div className="flex flex-wrap gap-2">
                {skill.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-medium bg-gray-700 text-gray-300 px-2 py-1 rounded-md border border-gray-600"
                  >
                    {item}
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
