'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link
            href="/"
            className="text-2xl font-bold text-purple-400 font-serif"
          >
            Louis Nguyen
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop menu */}
          <nav className="hidden md:flex">
            <ul className="flex space-x-4">
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
      {isOpen && (
        <nav className="md:hidden">
          <ul className="flex flex-col items-center py-4">
            {navItems.map((item) => (
              <li key={item.name} className="w-full">
                <Button
                  variant="ghost"
                  asChild
                  className="w-full justify-center py-2"
                  onClick={() => setIsOpen(false)}
                >
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
      )}
    </header>
  );
}
