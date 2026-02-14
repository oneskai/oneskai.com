import type { Metadata } from 'next';
import { BlogPostContent } from '@/components/blog/BlogPostContent';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // ISR: Revalidate every hour

export async function generateStaticParams() {
  // Sample slugs for static generation
  // Will be replaced with Sanity CMS data
  return [
    { slug: 'seo-trends-2024' },
    { slug: 'ppc-budget-optimization' },
    { slug: 'content-marketing-strategy' },
    { slug: 'social-media-engagement' },
    { slug: 'google-analytics-4-guide' },
    { slug: 'ecommerce-conversion-tips' },
    { slug: 'ai-marketing-automation' },
    { slug: 'brand-voice-development' },
    { slug: 'local-seo-strategies' },
  ];
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;
  const title = slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  return {
    title: `${title} | ONESKAI Blog`,
    description: `Read our in-depth article on ${title.toLowerCase()}. Expert insights and strategies from the ONESKAI digital marketing team.`,
    openGraph: {
      title: `${title} | ONESKAI Blog`,
      description: `Expert insights on ${title.toLowerCase()}`,
      type: 'article',
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;
  return <BlogPostContent slug={slug} />;
}
