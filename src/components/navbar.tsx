'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800/95 backdrop-blur-sm shadow-sm fixed w-full z-50 border-b border-gray-700/50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-400 font-serif"
          >
            Louis Nguyen
          </Link>

          {/* Hamburger button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none p-1"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={isOpen ? 'close' : 'open'}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.15 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.span>
            </AnimatePresence>
          </motion.button>

          {/* Desktop menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Button variant="ghost" asChild>
                    <Link
                      href={item.href}
                      className="text-gray-300 hover:text-white"
                    >
                      {item.name}
                    </Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-gray-900 border-t border-purple-500/20"
          >
            <ul className="px-4 py-3 space-y-1">
              {navItems.map((item, i) => (
                <motion.li
                  key={item.name}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: i * 0.04 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg group hover:bg-purple-600/10 transition-colors duration-200"
                  >
                    <span className="text-xs font-mono text-purple-500/60 group-hover:text-purple-400 transition-colors w-5 select-none">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-gray-300 group-hover:text-white font-medium transition-colors">
                      {item.name}
                    </span>
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-purple-500/0 group-hover:bg-purple-400 transition-colors duration-200" />
                  </Link>
                </motion.li>
              ))}
            </ul>
            <div className="px-4 pb-4 pt-2 border-t border-gray-700/50 mt-1">
              <p className="text-xs text-gray-600 text-center font-mono">Louis Nguyen · Software Engineer</p>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
