'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TimelineNavProps {
  sections: Array<{
    id: string;
    title: string;
    order: number;
  }>;
}

export default function TimelineNav({ sections }: TimelineNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(Math.min(100, Math.max(0, progress)));

      // Determine active section
      const sectionElements = sections.map((section) => ({
        id: section.id,
        element: document.getElementById(section.id),
      }));

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= windowHeight / 2) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="relative">
        {/* Progress Line */}
        <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-denim/20">
          <motion.div
            className="w-full bg-denim origin-top"
            style={{ height: `${scrollProgress}%` }}
          />
        </div>

        {/* Timeline Dots */}
        <div className="relative space-y-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="group relative flex items-center"
              aria-label={`Go to ${section.title}`}
            >
              {/* Dot */}
              <div
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? 'bg-sunflower scale-150 ring-4 ring-sunflower/30'
                    : 'bg-denim/40 group-hover:bg-bamboo group-hover:scale-125'
                }`}
              />

              {/* Label */}
              <div
                className={`absolute right-6 whitespace-nowrap px-3 py-1 rounded-lg transition-all duration-300 ${
                  activeSection === section.id
                    ? 'opacity-100 translate-x-0 bg-denim text-white'
                    : 'opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-cream border border-denim/20 text-denim'
                }`}
              >
                <span className="text-sm font-medium">{section.title}</span>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
