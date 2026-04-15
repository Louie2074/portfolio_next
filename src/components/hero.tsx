'use client';

import { motion } from 'framer-motion';

export function Hero() {
  return (
    <section className="bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900 text-white py-32 min-h-[60vh] flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="text-purple-400 text-lg font-medium mb-4 tracking-widest uppercase"
          >
            Hello, World!
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.15 }}
            className="text-5xl md:text-7xl font-bold mb-6 font-serif"
          >
            I&apos;m Louis Nguyen
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.3 }}
            className="text-xl md:text-2xl mb-10 font-light text-gray-300"
          >
            Software Engineer passionate about building scalable systems and{' '}
            <span className="text-purple-400">transforming data into insights</span>
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.45 }}
            className="flex flex-wrap gap-x-4 gap-y-2 justify-center text-sm text-gray-400"
          >
            <span>louishguyen01@hotmail.com</span>
            <span className="hidden sm:inline text-gray-600">·</span>
            <span>651-269-5551</span>
            <span className="hidden sm:inline text-gray-600">·</span>
            <a
              href="https://louisnguyen.me"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              louisnguyen.me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-purple-400/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
