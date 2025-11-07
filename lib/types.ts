/**
 * Type definitions for Steve Dickens Resume website
 */

export interface ContentMetadata {
  title: string;
  order: number;
  category?: string;
  date?: string;
  company?: string;
  role?: string;
  location?: string;
  description?: string;
}

export interface ContentSection {
  slug: string;
  metadata: ContentMetadata;
  content: string;
  htmlContent: string;
}

export interface TimelineEntry {
  id: string;
  order: number;
  title: string;
  category: string;
  date?: string;
  company?: string;
  role?: string;
  location?: string;
  description?: string;
  content: string;
  htmlContent: string;
}

export interface PortfolioProject {
  name: string;
  url: string;
  description: string;
  technologies?: string[];
}

export interface ContactInfo {
  email: string;
  location: string;
  linkedin?: string;
}
