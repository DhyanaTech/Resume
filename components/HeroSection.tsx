'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { CONTACT_INFO } from '@/lib/constants';

interface HeroSectionProps {
  title: string;
  content: string;
}

export default function HeroSection({ title, content }: HeroSectionProps) {
  const scrollToNext = () => {
    const aiSection = document.getElementById('ai-philosophy');
    if (aiSection) {
      aiSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 md:pt-24 lg:pt-32 pb-64 lg:pb-80 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo"
    >
      <div className="mx-auto max-w-6xl">
        {/* Name & Value Proposition */}
        <motion.div
          className="text-center mb-16 md:mb-20 lg:mb-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
            Steve Dickens
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-sunflower mb-6">
            From Building Structures to Building Software
          </p>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto text-center mb-24 md:mb-32">
            Bringing Planning & Precision to Tech
          </p>
        </motion.div>

        {/* Two Column Layout for Content and Image */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-lg md:text-xl text-white/90 leading-relaxed mb-12 prose prose-lg max-w-none [&>p]:mb-6 [&>p]:text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-wrap gap-4 my-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-sunflower text-denim rounded-lg hover:bg-white hover:text-denim transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              >
                View Projects
              </a>
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="px-6 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-denim transition-all duration-300 focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:outline-none"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>

          {/* Headshot Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-sunflower rounded-full blur-2xl opacity-30" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-bamboo rounded-full blur-2xl opacity-30" />

              {/* Image Container */}
              <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-gradient-to-br from-white/10 to-sunflower/10">
                <Image
                  src="/headshot.jpg"
                  alt="Steve Dickens"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
