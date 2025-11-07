import { Metadata } from 'next';
import { getContentByOrder } from '@/lib/markdown';
import AboutSection from '@/components/AboutSection';
import ContentSection from '@/components/ContentSection';

export const metadata: Metadata = {
  title: 'About - Steve Dickens',
  description: 'Learn about Steve Dickens\' background, values, and journey from construction to technology.',
};

export default async function AboutPage() {
  const aboutSection = await getContentByOrder(2);
  const introSection = await getContentByOrder(1);

  return (
    <div className="min-h-screen bg-white">
      {/* Construction → Tech Story */}
      {introSection && (
        <ContentSection
          id="construction-to-tech"
          title="The Journey: From Construction to Code"
          content={introSection.htmlContent}
          background="gradient"
        />
      )}

      {/* About Content */}
      {aboutSection && <AboutSection content={aboutSection.htmlContent} />}

      {/* Additional Context Section */}
      <section className="relative flex items-center justify-center py-40 lg:py-48 px-6 sm:px-8 md:px-12 lg:px-16 bg-white">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-cream p-8 rounded-xl shadow-lg border border-denim/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-denim mb-4">Values</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Hard work & discipline</li>
                <li>• Continuous learning</li>
                <li>• Problem-solving</li>
                <li>• Innovation</li>
                <li>• Integrity</li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-xl shadow-lg border border-denim/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-denim mb-4">Skills</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• Full-stack development</li>
                <li>• AI/ML integration</li>
                <li>• Project management</li>
                <li>• Business strategy</li>
                <li>• Technical writing</li>
              </ul>
            </div>

            <div className="bg-cream p-8 rounded-xl shadow-lg border border-denim/10 hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold text-denim mb-4">Interests</h3>
              <ul className="space-y-2 text-foreground/80">
                <li>• AI & automation</li>
                <li>• Entrepreneurship</li>
                <li>• Process optimization</li>
                <li>• Education & mentoring</li>
                <li>• Sustainable tech</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
