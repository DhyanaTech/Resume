import { Metadata } from 'next';
import { getContentByOrder } from '@/lib/markdown';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: 'Summary - Steve Dickens',
  description: 'A summary of Steve Dickens\' journey - following his heart, learning from experience, and embracing technology.',
};

export default async function SummaryPage() {
  const summary = await getContentByOrder(18);

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-gradient-to-br from-denim to-bamboo text-white">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            Summary
          </h1>
          <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            A journey of following my heart, learning from experience, and embracing the tools that shape the future
          </p>
        </div>
      </section>

      {/* Summary Content */}
      {summary && (
        <ContentSection
          id="summary-content"
          title={summary.metadata.title}
          content={summary.htmlContent}
          background="cream"
        />
      )}
    </div>
  );
}
