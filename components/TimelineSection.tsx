'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Briefcase, GraduationCap, Wrench } from 'lucide-react';
import type { TimelineEntry } from '@/lib/types';

interface TimelineSectionProps {
  entries: TimelineEntry[];
}

export default function TimelineSection({ entries }: TimelineSectionProps) {
  return (
    <section id="timeline" className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-cream">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-denim mb-12 sm:mb-16 text-center"
        >
          Career Journey
        </motion.h2>

        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-denim/30" />

          {/* Timeline Entries */}
          <div className="space-y-20">
            {entries.map((entry, index) => (
              <TimelineCard key={entry.id} entry={entry} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineCard({ entry, index }: { entry: TimelineEntry; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const isEven = index % 2 === 0;

  const getIcon = (category: string) => {
    const lowerCategory = category.toLowerCase();
    if (lowerCategory.includes('education') || lowerCategory.includes('college') || lowerCategory.includes('university')) {
      return <GraduationCap className="text-sunflower" size={24} />;
    }
    if (lowerCategory.includes('construction') || lowerCategory.includes('maintenance')) {
      return <Wrench className="text-bamboo" size={24} />;
    }
    return <Briefcase className="text-denim" size={24} />;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: isEven ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? -50 : 50 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className={`relative flex items-center ${
        isEven ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-col md:justify-between`}
    >
      {/* Timeline Dot */}
      <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-denim border-4 border-cream flex items-center justify-center z-10 shadow-lg">
        {getIcon(entry.category)}
      </div>

      {/* Content Card */}
      <div
        className={`w-full md:w-[calc(50%-3rem)] ${
          isEven ? 'md:pr-8' : 'md:pl-8'
        } ml-12 md:ml-0`}
      >
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
          className="bg-white p-8 sm:p-10 rounded-xl shadow-lg border border-denim/10 hover:shadow-xl transition-shadow focus-visible:ring-2 focus-visible:ring-denim focus-visible:outline-none"
          tabIndex={0}
        >
          {/* Header */}
          <div className="mb-8">
            {entry.date && (
              <span className="inline-block px-3 py-1 bg-sunflower/20 text-denim text-sm font-medium rounded-full mb-3">
                {entry.date}
              </span>
            )}
            <h3 className="text-2xl font-bold text-denim mb-2">{entry.title}</h3>
            {entry.company && (
              <p className="text-lg font-semibold text-bamboo mb-1">{entry.company}</p>
            )}
            {entry.role && (
              <p className="text-foreground/70 italic mb-1">{entry.role}</p>
            )}
            {entry.location && (
              <p className="text-sm text-foreground/60 mt-1">{entry.location}</p>
            )}
          </div>

          {/* Description */}
          {entry.description && (
            <p className="text-foreground/80 mb-8">{entry.description}</p>
          )}

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-foreground/70 [&>*]:mb-4 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: entry.htmlContent }}
          />
        </motion.div>
      </div>

      {/* Spacer for alternating layout */}
      <div className="hidden md:block w-[calc(50%-3rem)]" />
    </motion.div>
  );
}
