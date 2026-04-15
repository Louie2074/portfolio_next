'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12 text-purple-400 font-serif"
        >
          About Me
        </motion.h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="md:w-1/2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full blur-xl opacity-25" />
              <Image
                src="/myself.jpeg"
                alt="Louis Nguyen"
                width={350}
                height={350}
                className="rounded-full shadow-2xl relative z-10 border-4 border-purple-500/30"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="md:w-1/2"
          >
            <p className="text-gray-300 mb-6 font-light leading-relaxed text-lg">
              I&apos;m a software engineer passionate about building scalable,
              data-driven systems and real-time analytics solutions. My expertise
              spans full-stack development and data engineering, with a focus on
              building efficient data pipelines and impactful user interfaces. I
              prioritize rapid prototyping, performance optimization, and aligning
              solutions with business needs.
            </p>
            <p className="text-gray-300 font-light leading-relaxed text-lg">
              When I&apos;m not coding, you can find me travelling, playing
              spikeball, weight training, or reading up about credit cards.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
