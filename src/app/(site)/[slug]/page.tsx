import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SectionRenderer } from '@/components/sections';
// import { sanityFetch } from '@/sanity/client';
// import { pageBySlugQuery, allPageSlugsQuery } from '@/sanity/queries/pages';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // ISR: Revalidate every hour

// Generate static params for all pages
export async function generateStaticParams() {
  // When Sanity is configured:
  // const slugs = await sanityFetch({ query: allPageSlugsQuery });
  // return slugs.map((slug: string) => ({ slug }));

  // For now, return empty array (pages will be generated on-demand)
  return [];
}

// Generate metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  // When Sanity is configured:
  // const page = await sanityFetch({ query: pageBySlugQuery, params: { slug } });
  // return {
  //   title: page?.seo?.metaTitle || page?.title,
  //   description: page?.seo?.metaDescription,
  // };

  // Default metadata
  return {
    title: `${slug.charAt(0).toUpperCase() + slug.slice(1)} | ONESKAI`,
    description: 'ONESKAI - Transforming Visions into Digital Excellence',
  };
}

export default async function DynamicPage({ params }: PageProps) {
  const { slug } = await params;

  // When Sanity is configured:
  // const page = await sanityFetch({ query: pageBySlugQuery, params: { slug } });
  // if (!page) {
  //   notFound();
  // }
  // return <SectionRenderer sections={page.sections} />;

  // For now, show a placeholder page
  return (
    <div className="section" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <h1 className="section-title">{slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ')}</h1>
        <p className="section-subtext" style={{ margin: '20px auto' }}>
          This page will be populated with content from Sanity CMS once configured.
        </p>
      </div>
    </div>
  );
}
