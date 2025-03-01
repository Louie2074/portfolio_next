const experiences = [
  {
    company: 'Expedia Group',
    position: 'Software Engineer',
    period: '2024 - Present',
    description:
      'I design event-driven architectures using Kotlin, Python, and Kafka to enable real-time data streaming, while optimizing ETL pipelines with Scala, Apache Spark, and AWS EMR for large-scale data processing. I create modular, reusable React.js components for dynamic data visualization, integrating them with APIs in TypeScript and Node.js. My work also includes optimizing SQL queries to improve database performance and enhance data retrieval. I monitor system performance with tools like AWS CloudWatch, Datadog, and Splunk, and streamline deployments by automating CI/CD pipelines. I collaborate closely with stakeholders to ensure technical solutions align with business objectives and deliver meaningful outcomes.',
  },
  {
    company: 'University of Wisconsin - Madison',
    position: 'Computer Science Tutor',
    period: '2023 - 2024',
    description:
      'I tutored students in Java and Python, breaking down complex concepts and customizing lessons to meet individual learning needs. I fostered a supportive and engaging environment, helping students build a strong foundation in Computer Science and Data Science.',
  },
  {
    company: 'Thomson Reuters',
    position: 'Software Engineer Intern',
    period: '2021 - 2022',
    description:
      'I worked as a Frontend Web Developer in an agile team focused on developing static content for a cloud-based legal research web application. I enhanced the frontend UI using React.js and JQuery while modernizing legacy code to improve performance and ensure Web Accessibility compliance. Throughout the software design cycle, I gained experience in issue tracking, code review, development environments, and unit testing. I also collaborated with UX and accessibility teams to strategically plan code design, optimizing both user experience and accessibility standards.',
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
