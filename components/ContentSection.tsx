'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface ContentSectionProps {
  id: string;
  title: string;
  content: string;
  background?: 'cream' | 'white' | 'gradient';
}

export default function ContentSection({
  id,
  title,
  content,
  background = 'cream',
}: ContentSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getBackgroundClass = () => {
    if (background === 'gradient') return 'bg-gradient-to-br from-denim to-bamboo';
    if (background === 'cream') return 'bg-cream';
    return 'bg-white';
  };

  const isGradient = background === 'gradient';

  return (
    <section
      id={id}
      className={`relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 ${getBackgroundClass()}`}
      ref={ref}
    >
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-48 md:mb-56 lg:mb-64 text-center ${isGradient ? 'text-white' : 'text-denim'}`}>
            {title}
          </h2>

          <div
            className={`text-lg md:text-xl max-w-none leading-relaxed [&>*]:mb-6 [&>*:last-child]:mb-0 ${isGradient ? 'text-white/90 [&>p]:text-white/90 [&>ul]:text-white/90 [&>ol]:text-white/90' : 'text-foreground/80'}`}
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </motion.div>
      </div>
    </section>
  );
}
