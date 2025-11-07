'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, GraduationCap, Code } from 'lucide-react';
import Link from 'next/link';

interface Milestone {
  icon: 'briefcase' | 'graduation' | 'code';
  year: string;
  title: string;
  description: string;
}

const milestones: Milestone[] = [
  {
    icon: 'briefcase',
    year: '1990s-2000s',
    title: 'Masonry & Construction',
    description: 'Built foundations in the physical world, learning precision and planning',
  },
  {
    icon: 'graduation',
    year: '2000s-2010s',
    title: 'Education & Transition',
    description: 'Pursued knowledge in business, technology, and software development',
  },
  {
    icon: 'code',
    year: '2010s-Present',
    title: 'Software & Entrepreneurship',
    description: 'Building digital solutions with construction-grade durability',
  },
];

const iconMap = {
  briefcase: Briefcase,
  graduation: GraduationCap,
  code: Code,
};

export default function ExperienceSnapshot() {
  return (
    <section className="relative flex items-center justify-center py-64 lg:py-80 px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-denim mb-16">
            Career Journey
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            A unique path from construction to code, driven by curiosity and a commitment to quality
          </p>
        </motion.div>

        {/* Timeline Milestones */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-denim via-bamboo to-sunflower transform -translate-x-1/2 hidden md:block" />

          <div className="space-y-16 md:space-y-24">
            {milestones.map((milestone, index) => {
              const Icon = iconMap[milestone.icon];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Content Card */}
                  <div className="flex-1 w-full md:w-auto">
                    <div
                      className={`bg-cream p-6 md:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow ${
                        isEven ? 'md:text-right' : 'md:text-left'
                      } text-center`}
                    >
                      <div className="text-sm font-semibold text-bamboo mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-2xl font-bold text-denim mb-3">
                        {milestone.title}
                      </h3>
                      <p className="text-foreground/70 leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Icon Circle */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-denim to-bamboo rounded-full flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>
                  </div>

                  {/* Spacer for alignment */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* View Full Timeline CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16 md:mt-24"
        >
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-6 py-3 bg-denim text-white rounded-lg hover:bg-bamboo transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:outline-none"
          >
            View Full Timeline
            <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
