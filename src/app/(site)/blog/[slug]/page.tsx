import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
// import { sanityFetch } from '@/sanity/client';
// import { blogPostBySlugQuery, allBlogSlugsQuery } from '@/sanity/queries/pages';
// import { PortableText } from '@portabletext/react';
// import { urlForImage } from '@/sanity/image';

interface BlogPostProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // ISR: Revalidate every hour

export async function generateStaticParams() {
  // When Sanity is configured:
  // const slugs = await sanityFetch({ query: allBlogSlugsQuery });
  // return slugs.map((slug: string) => ({ slug }));
  return [];
}

export async function generateMetadata({ params }: BlogPostProps): Promise<Metadata> {
  const { slug } = await params;

  // When Sanity is configured:
  // const post = await sanityFetch({ query: blogPostBySlugQuery, params: { slug } });
  // return {
  //   title: post?.seo?.metaTitle || post?.title,
  //   description: post?.seo?.metaDescription || post?.excerpt,
  // };

  return {
    title: `${slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())} | ONESKAI Blog`,
  };
}

export default async function BlogPostPage({ params }: BlogPostProps) {
  const { slug } = await params;

  // When Sanity is configured:
  // const post = await sanityFetch({ query: blogPostBySlugQuery, params: { slug } });
  // if (!post) {
  //   notFound();
  // }

  // Placeholder content
  return (
    <article className="homepage">
      <section className="hero" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <Link href="/blog" className="blog-cat" style={{ marginBottom: '20px', display: 'inline-block' }}>
            ← Back to Blog
          </Link>
          <h1 className="hero-title" style={{ fontSize: '36px', marginBottom: '20px' }}>
            {slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase())}
          </h1>
          <p className="blog-date">January 28, 2024 • 5 min read</p>
        </div>
      </section>

      <section className="section bg-white" style={{ paddingTop: '40px' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ background: 'var(--bg-secondary)', padding: '40px', borderRadius: '12px', marginBottom: '40px' }}>
            <p style={{ fontSize: '18px', lineHeight: '1.8', color: 'var(--text-gray)' }}>
              This blog post content will be populated from Sanity CMS once configured.
              The content editor in Sanity Studio allows you to write rich content with
              formatting, images, and more.
            </p>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '40px', borderTop: '1px solid var(--border-color)' }}>
            <Link href="/blog" className="hero-btn">
              ← More Articles
            </Link>
            <Link href="/contact" className="cta-btn" style={{ background: 'var(--primary-green)', color: 'white' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
