import { Metadata } from 'next';
import { getContentByOrder } from '@/lib/markdown';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: 'Future Vision - Steve Dickens',
  description: 'Steve Dickens\' vision for the future - open to possibilities, partnerships, and making a meaningful impact.',
};

export default async function FutureVisionPage() {
  const futureVision = await getContentByOrder(17);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-white">
            Future Vision
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Open to possibilities, ready for the next chapter, and excited to make a difference
          </p>
        </div>
      </section>

      {/* Future Vision Content */}
      {futureVision && (
        <ContentSection
          id="future-vision-content"
          title={futureVision.metadata.title}
          content={futureVision.htmlContent}
          background="cream"
        />
      )}
    </div>
  );
}
