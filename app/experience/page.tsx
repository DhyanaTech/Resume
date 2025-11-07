import { Metadata } from 'next';
import TimelineSection from '@/components/TimelineSection';
import { getTimelineEntries } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'Experience - Steve Dickens',
  description: 'Explore Steve Dickens\' career journey from masonry to software development and entrepreneurship.',
};

export default async function ExperiencePage() {
  const timelineEntries = await getTimelineEntries();

  return (
    <div className="min-h-screen bg-cream">
      {/* Page Header */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Career Journey
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
            From laying bricks to building software, my career has been defined by continuous learning,
            problem-solving, and a drive to create meaningful solutions.
          </p>
        </div>
      </section>

      {/* Timeline Content */}
      <TimelineSection entries={timelineEntries} />
    </div>
  );
}
