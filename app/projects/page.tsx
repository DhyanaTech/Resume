import { Metadata } from 'next';
import ProjectsSection from '@/components/ProjectsSection';

export const metadata: Metadata = {
  title: 'Projects - Steve Dickens',
  description: 'Explore Steve Dickens\' portfolio of software projects, from business management tools to industry-specific platforms.',
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Projects & Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Real-world solutions built with the same precision and planning
            I learned in construction — designed to last and deliver value.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <ProjectsSection />
    </div>
  );
}
