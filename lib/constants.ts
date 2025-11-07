import type { ContactInfo, PortfolioProject } from './types';

export const CONTACT_INFO: ContactInfo = {
  email: 'stevedickens865@gmail.com',
  location: 'Hickory, NC',
  linkedin: 'https://www.linkedin.com/in/steven-dickens-1b1652218/',
};

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    name: 'MyTinyCEO',
    url: 'https://www.mytinyceo.com',
    description:
      'Small-business management web app featuring financial dashboards and task automation',
    technologies: ['JavaScript', 'SQL', 'Web App'],
  },
  {
    name: '4Cast Concrete Solutions',
    url: 'https://www.4castconcrete.com',
    description:
      'Web-based quoting, design-approval, and production-tracking platform for precast manufacturers',
    technologies: ['Full Stack', 'Database Design', 'B2B Platform'],
  },
];

export const SITE_CONFIG = {
  title: 'Steve Dickens - Resume & Portfolio',
  description:
    'Personal resume website showcasing the professional journey of Steve Dickens from construction to software development',
  url: 'https://www.stevedickensresume.com',
  author: 'Steve Dickens',
};
