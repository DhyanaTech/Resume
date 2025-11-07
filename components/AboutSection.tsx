'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AboutSectionProps {
  content: string;
}

export default function AboutSection({ content }: AboutSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-white" ref={ref}>
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-denim mb-8 sm:mb-10 text-center">
            About Me
          </h2>

          <div
            className="prose prose-lg max-w-none text-foreground/80 leading-relaxed [&>*]:mb-6 [&>*:last-child]:mb-0"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </div>
    </section>
  );
}
