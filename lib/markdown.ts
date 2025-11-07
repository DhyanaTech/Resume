import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import type { ContentSection, TimelineEntry } from './types';

const docsDirectory = path.join(process.cwd(), 'docs');

/**
 * Get all markdown files from the docs directory
 */
export function getAllDocFiles(): string[] {
  const files = fs.readdirSync(docsDirectory);
  return files
    .filter((file) => file.endsWith('.md') && file.match(/^\d+-/))
    .sort((a, b) => {
      const numA = parseInt(a.split('-')[0]);
      const numB = parseInt(b.split('-')[0]);
      return numA - numB;
    });
}

/**
 * Parse markdown content to HTML
 */
export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await remark()
    .use(html, { sanitize: false })
    .process(markdown);
  return result.toString();
}

/**
 * Get content from a specific markdown file
 */
export async function getContentBySlug(slug: string): Promise<ContentSection> {
  const fullPath = path.join(docsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  const htmlContent = await markdownToHtml(content);

  // Extract order number from slug (e.g., "1-intro" -> 1)
  const orderMatch = slug.match(/^(\d+)-/);
  const order = orderMatch ? parseInt(orderMatch[1]) : 0;

  return {
    slug,
    metadata: {
      title: data.title || extractTitle(content),
      order,
      category: data.category,
      date: data.date,
      company: data.company,
      role: data.role,
      location: data.location,
      description: data.description,
    },
    content,
    htmlContent,
  };
}

/**
 * Get all content sections sorted by order
 */
export async function getAllContent(): Promise<ContentSection[]> {
  const files = getAllDocFiles();
  const allContent = await Promise.all(
    files.map((file) => {
      const slug = file.replace(/\.md$/, '');
      return getContentBySlug(slug);
    })
  );

  return allContent.sort((a, b) => a.metadata.order - b.metadata.order);
}

/**
 * Get timeline entries (excluding special pages)
 */
export async function getTimelineEntries(): Promise<TimelineEntry[]> {
  const allContent = await getAllContent();

  // Filter to include sections 3-15 (career timeline)
  const timelineContent = allContent.filter(
    (section) => section.metadata.order >= 3 && section.metadata.order <= 15
  );

  return timelineContent.map((section) => ({
    id: section.slug,
    order: section.metadata.order,
    title: section.metadata.title,
    category: section.metadata.category || 'Experience',
    date: section.metadata.date,
    company: section.metadata.company,
    role: section.metadata.role,
    location: section.metadata.location,
    description: section.metadata.description,
    content: section.content,
    htmlContent: section.htmlContent,
  }));
}

/**
 * Extract title from markdown content if not in frontmatter
 */
function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1] : 'Untitled';
}

/**
 * Get specific content sections by order number
 */
export async function getContentByOrder(order: number): Promise<ContentSection | null> {
  const allContent = await getAllContent();
  return allContent.find((section) => section.metadata.order === order) || null;
}
