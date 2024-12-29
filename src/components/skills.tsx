import { Code, Database, Server, Cloudy } from 'lucide-react';

const skills = [
  {
    name: 'Frontend Development',
    icon: Code,
    description: 'HTML, TypeScript, React, Next.js etc.',
  },
  {
    name: 'Backend Development',
    icon: Server,
    description: 'Node.js, Flask, Spring, GraphQL etc.',
  },
  {
    name: 'Big Data',
    icon: Database,
    description: 'Kafka, Kotlin, Scala, ETL, SQL etc.',
  },
  {
    name: 'Cloud/Deployment',
    icon: Cloudy,
    description: 'Docker, AWS, Serverless, CI/CD etc.',
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif">
          My Skills
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 p-6 rounded-lg shadow-md"
            >
              <skill.icon className="h-12 w-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {skill.name}
              </h3>
              <p className="text-gray-400 font-light">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
