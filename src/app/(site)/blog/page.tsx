import type { Metadata } from 'next';
import { BlogContent } from '@/components/blog/BlogContent';

export const metadata: Metadata = {
  title: 'Blog | ONESKAI - Digital Marketing Insights & Strategies',
  description: 'Explore expert insights, industry trends, and actionable digital marketing strategies from the ONESKAI team. SEO, PPC, content marketing, and more.',
  openGraph: {
    title: 'Blog | ONESKAI',
    description: 'Expert digital marketing insights and strategies to grow your business.',
    type: 'website',
  },
};

export default function BlogPage() {
  return <BlogContent />;
}
