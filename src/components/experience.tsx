const experiences = [
  {
    company: 'Expedia Group',
    position: 'Software Engineer',
    period: '2024 - Present',
    description:
      'I create modular React.js components for data visualization along with the API’s needed to connect them to several other micro-services. At the same time I develop and deploy ETL pipelines on cloud platforms to streamline data processing. I also do a lot of SQL within the database to improve performance and scalability.',
  },
  {
    company: 'University of Wisconsin - Madison',
    position: 'Computer Science Tutor',
    period: '2023 - 2024',
    description:
      'I tutored students in Java and Python, simplifying complex concepts and tailoring lessons to individual needs. Created a supportive, engaging environment for learning Computer Science and Data Science.',
  },
  {
    company: 'Thomson Reuters',
    position: 'Software Engineer Intern',
    period: '2021 - 2022',
    description:
      'I worked as a Frontend Web Developer in an agile team, designing responsive and accessible UI components while refactoring and modernizing legacy JavaScript code to improve performance and maintainability. Did a lot of React.js and Web Accessibility work.',
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif">Work Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2 text-white">{exp.position}</h3>
              <p className="text-purple-400 mb-2 font-light">{exp.company} | {exp.period}</p>
              <p className="text-gray-400 mb-4 font-light">{exp.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
        </div>
      </div>
    </section>
  )
}
