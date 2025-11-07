import { CONTACT_INFO, SITE_CONFIG } from '@/lib/constants';

interface StructuredDataProps {
  type: 'person' | 'website' | 'organization';
  additionalData?: Record<string, any>;
}

export default function StructuredData({ type, additionalData = {} }: StructuredDataProps) {
  const baseData = {
    '@context': 'https://schema.org',
  };

  let structuredData: any = { ...baseData };

  if (type === 'person') {
    structuredData = {
      ...baseData,
      '@type': 'Person',
      name: 'Steve Dickens',
      jobTitle: 'Full-Stack Developer',
      description: 'From Building Structures to Building Software - Bringing Planning & Precision to Tech',
      url: SITE_CONFIG.url,
      email: CONTACT_INFO.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Hickory',
        addressRegion: 'NC',
        addressCountry: 'US',
      },
      alumniOf: [
        {
          '@type': 'EducationalOrganization',
          name: 'University of Tennessee',
        },
        {
          '@type': 'EducationalOrganization',
          name: 'Pellissippi State Technical Community College',
        },
      ],
      knowsAbout: [
        'Full-Stack Development',
        'JavaScript',
        'TypeScript',
        'React',
        'Next.js',
        'Node.js',
        'Database Design',
        'AI/ML Integration',
        'Project Management',
        'Construction Management',
      ],
      sameAs: CONTACT_INFO.linkedin ? [CONTACT_INFO.linkedin] : [],
      ...additionalData,
    };
  } else if (type === 'website') {
    structuredData = {
      ...baseData,
      '@type': 'WebSite',
      name: SITE_CONFIG.title,
      description: SITE_CONFIG.description,
      url: SITE_CONFIG.url,
      author: {
        '@type': 'Person',
        name: SITE_CONFIG.author,
      },
      inLanguage: 'en-US',
      ...additionalData,
    };
  } else if (type === 'organization') {
    structuredData = {
      ...baseData,
      '@type': 'ProfessionalService',
      name: 'Steve Dickens - Software Development',
      description: 'Full-stack software development and consulting services',
      url: SITE_CONFIG.url,
      founder: {
        '@type': 'Person',
        name: 'Steve Dickens',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        email: CONTACT_INFO.email,
        contactType: 'Professional Inquiry',
      },
      ...additionalData,
    };
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
