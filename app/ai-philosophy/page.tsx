import { Metadata } from 'next';
import { getContentByOrder } from '@/lib/markdown';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: 'AI Philosophy - Steve Dickens',
  description: 'Steve Dickens\' thoughts on the evolution and impact of artificial intelligence in professional settings.',
};

export default async function AIPhilosophyPage() {
  const aiPhilosophy = await getContentByOrder(16);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            AI Philosophy
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Exploring the transformative power of artificial intelligence and its impact on the future of work
          </p>
        </div>
      </section>

      {/* AI Philosophy Content */}
      {aiPhilosophy && (
        <ContentSection
          id="ai-philosophy-content"
          title={aiPhilosophy.metadata.title}
          content={aiPhilosophy.htmlContent}
          background="cream"
        />
      )}
    </div>
  );
}
