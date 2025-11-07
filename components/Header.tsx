'use client';

import { Menu } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CONTACT_INFO } from '@/lib/constants';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream/90 backdrop-blur-sm border-b border-denim/10">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-bold text-denim hover:text-bamboo transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1"
          >
            Steve Dickens
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/about') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              About
            </Link>
            <Link
              href="/experience"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/experience') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              Experience
            </Link>
            <Link
              href="/projects"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/projects') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              Projects
            </Link>
            <Link
              href="/ai-philosophy"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/ai-philosophy') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              AI Philosophy
            </Link>
            <Link
              href="/future-vision"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/future-vision') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              Future Vision
            </Link>
            <Link
              href="/summary"
              className={`transition-colors focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 py-1 ${
                isActive('/summary') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
              }`}
            >
              Summary
            </Link>
            <a
              href={`mailto:${CONTACT_INFO.email}`}
              className="px-4 py-2 bg-denim text-white rounded-lg hover:bg-bamboo transition-colors focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:outline-none focus-visible:ring-offset-2"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-denim focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <Menu size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 px-2 border-t border-denim/10">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/about') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                About
              </Link>
              <Link
                href="/experience"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/experience') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                Experience
              </Link>
              <Link
                href="/projects"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/projects') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                Projects
              </Link>
              <Link
                href="/ai-philosophy"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/ai-philosophy') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                AI Philosophy
              </Link>
              <Link
                href="/future-vision"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/future-vision') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                Future Vision
              </Link>
              <Link
                href="/summary"
                onClick={() => setIsMenuOpen(false)}
                className={`text-left transition-colors py-2 focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none rounded px-2 ${
                  isActive('/summary') ? 'text-denim font-semibold' : 'text-foreground hover:text-denim'
                }`}
              >
                Summary
              </Link>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="text-left px-4 py-2 bg-denim text-white rounded-lg hover:bg-bamboo transition-colors w-fit focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none focus-visible:ring-offset-2"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
