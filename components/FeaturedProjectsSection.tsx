'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '@/lib/constants';

export default function FeaturedProjectsSection() {
  // Show all 3 projects (DhyanaTech, DhyanaPM, DhyanaCFO)
  const featuredProjects = PORTFOLIO_PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="relative flex items-center justify-center py-64 lg:py-80 px-6 sm:px-8 md:px-12 lg:px-16 bg-cream">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-denim mb-16">
            Featured Projects
          </h2>
          <p className="text-lg md:text-xl text-foreground/70 max-w-3xl mx-auto">
            Real-world solutions built with planning, precision, and a focus on lasting impact
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-40">
          {featuredProjects.map((project, index) => (
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
              className="group relative bg-gradient-to-br from-denim to-bamboo p-10 rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden focus-visible:ring-4 focus-visible:ring-sunflower focus-visible:outline-none"
            >
              {/* Content */}
              <div className="relative z-10 text-center">

                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.name}
                </h3>

                <p className="text-white/90 mb-8 leading-relaxed">
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

        {/* View All Projects Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-denim text-white rounded-lg hover:bg-bamboo transition-all duration-300 transform hover:scale-105 focus-visible:ring-2 focus-visible:ring-sunflower focus-visible:outline-none"
          >
            View All Projects
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
