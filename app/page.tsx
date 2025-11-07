import HeroSection from '@/components/HeroSection';
import FeaturedProjectsSection from '@/components/FeaturedProjectsSection';
import ExperienceSnapshot from '@/components/ExperienceSnapshot';
import ContentSection from '@/components/ContentSection';
import StructuredData from '@/components/StructuredData';
import {
  getContentByOrder,
} from '@/lib/markdown';

export default async function Home() {
  // Get intro section for hero
  const introSection = await getContentByOrder(1);

  return (
    <>
      <StructuredData type="person" />
      <StructuredData type="website" />

      {/* Hero Section with Introduction */}
      {introSection && (
        <HeroSection
          title={introSection.metadata.title}
          content={introSection.htmlContent}
        />
      )}

      {/* Featured Projects - Highlight Reel */}
      <FeaturedProjectsSection />

      {/* Experience Snapshot - Career Journey Preview */}
      <ExperienceSnapshot />
    </>
  );
}
