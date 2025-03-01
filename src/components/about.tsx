import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/myself.jpeg?height=400&width=400"
              alt="Your Name"
              width={400}
              height={400}
              className="rounded-full shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-3xl font-bold mb-4 text-purple-400 font-serif">
              About Me
            </h2>
            <p className="text-gray-300 mb-6 font-light">
              I&apos;m a software engineer passionate about building scalable,
              data-driven systems and real-time analytics solutions. My
              expertise spans full-stack development and data engineering, with
              a growing focus on building efficient data pipelines and
              infrastructure. I prioritize rapid prototyping, performance
              optimization, and aligning solutions with business needs—always
              seeking innovative ways to transform data into actionable
              insights.
            </p>
            <p className="text-gray-300 font-light">
              When I&apos;m not coding, you can find me exploring new
              technologies, staying active, or planning my next travel
              adventure.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
