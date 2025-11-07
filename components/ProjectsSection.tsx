'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-denim mb-48 md:mb-56 lg:mb-64 text-center"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {PORTFOLIO_PROJECTS.map((project, index) => (
            <motion.a
              key={project.name}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="group relative bg-gradient-to-br from-denim to-bamboo p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden focus-visible:ring-4 focus-visible:ring-sunflower focus-visible:outline-none"
            >
              {/* Content */}
              <div className="relative z-10 text-center">

                <h3 className="text-2xl font-bold text-white mb-3">
                  {project.name}
                </h3>

                <p className="text-white/90 mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>

                {project.technologies && (
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/20 text-white text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-sunflower/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
