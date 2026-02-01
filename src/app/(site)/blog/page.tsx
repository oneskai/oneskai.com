import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { SectionHeader } from '@/components/ui/SectionHeader';
// import { sanityFetch } from '@/sanity/client';
// import { blogPostsQuery } from '@/sanity/queries/pages';
// import { urlForImage } from '@/sanity/image';
// import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog | ONESKAI',
  description: 'Latest insights, industry trends, and tips from the ONESKAI team.',
};

export const revalidate = 60; // ISR: Revalidate every 60 seconds

// Default blog posts for static rendering
const defaultPosts = [
  { cat: 'TECHNOLOGY', title: 'The importance of customer data in the digital age', date: 'Jan 28, 2024', slug: 'customer-data-digital-age', imgIndex: 1 },
  { cat: 'DEVELOPMENT', title: 'How to choose the right tech stack for your project', date: 'Jan 15, 2024', slug: 'choosing-tech-stack', imgIndex: 2 },
  { cat: 'BUSINESS', title: 'Why small businesses should invest in automation now', date: 'Dec 30, 2023', slug: 'small-business-automation', imgIndex: 3 },
  { cat: 'AI & TECH', title: 'The role of AI in digital transformation strategies', date: 'Dec 12, 2023', slug: 'ai-digital-transformation', imgIndex: 1 },
  { cat: 'SECURITY', title: 'Cybersecurity threats to watch out for in 2024', date: 'Nov 25, 2023', slug: 'cybersecurity-threats-2024', imgIndex: 2 },
  { cat: 'CLOUD', title: 'Building a scalable infrastructure for growth', date: 'Nov 05, 2023', slug: 'scalable-infrastructure', imgIndex: 3 },
];

export default async function BlogPage() {
  // When Sanity is configured:
  // const posts = await sanityFetch({
  //   query: blogPostsQuery,
  //   params: { start: 0, end: 12 }
  // });

  const posts = defaultPosts;

  return (
    <div className="homepage">
      <section className="hero" style={{ paddingTop: '80px', paddingBottom: '60px' }}>
        <div className="container">
          <SectionHeader
            label="BLOG"
            title="Latest Articles & Insights"
            subtext="Stay updated with the latest industry trends, tips, and insights from our team of experts."
          />
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="blog-grid" style={{ gap: '30px' }}>
            {posts.map((post, i) => (
              <Link
                key={i}
                href={`/blog/${post.slug}`}
                className="blog-item"
                style={{ padding: '20px', borderRadius: '12px', background: 'var(--bg-secondary)' }}
              >
                <Image
                  src={`/images/blog-${post.imgIndex}.png`}
                  alt={post.title}
                  width={120}
                  height={120}
                  className="blog-img"
                />
                <div>
                  <span className="blog-cat">{post.cat}</span>
                  <h4 className="blog-title">{post.title}</h4>
                  <p className="blog-date">{post.date} • 5 min read</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
