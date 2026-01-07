import type { ContactInfo, PortfolioProject } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'stevedickens865@gmail.com',
  location: 'Hickory, NC',
  linkedin: 'https://www.linkedin.com/in/steven-dickens-1b1652218/',
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    name: 'DhyanaTech',
    url: 'https://www.dhyanatech.com',
    description:
      'Parent company and ecosystem of mindful business software, founded to reduce friction and noise in work environments',
    technologies: ['Founder', 'Full Stack', 'Product Strategy'],
  },
  {
    name: 'DhyanaPM',
    url: 'https://pm.dhyanatech.app',
    description:
      'Project management application emphasizing clarity over complexity for focused, mindful work',
    technologies: ['Next.js', 'TypeScript', 'Web App'],
  },
  {
    name: 'DhyanaCFO',
    url: 'https://cfo.dhyanatech.app',
    description:
      'Financial management tool for small businesses with intuitive dashboards and stress-free workflows',
    technologies: ['Full Stack', 'Finance', 'SaaS'],
  },
];

export const SITE_CONFIG = {
  title: 'Steve Dickens - Resume & Portfolio',
  description:
    'Personal resume website showcasing the professional journey of Steve Dickens from construction to software development',
  url: 'https://www.stevedickensresume.com',
  author: 'Steve Dickens',
};
