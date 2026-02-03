import Image from 'next/image';
import Link from 'next/link';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { BlogGridSection } from '@/types/sections';
import type { BlogPost } from '@/types/sanity';
import { urlForImage } from '@/sanity/image';
import { formatDate } from '@/lib/utils';

interface BlogGridProps extends Partial<BlogGridSection> {
  posts?: BlogPost[];
  staticData?: {
    label: string;
    title: string | React.ReactNode;
    blogs: Array<{
      cat: string;
      title: string;
      date: string;
      imgIndex?: number;
    }>;
  };
}

export function BlogGrid({
  label,
  title,
  subtitle,
  posts,
  staticData,
}: BlogGridProps) {
  const displayLabel = label || staticData?.label || 'OUR LATEST ARTICLES';
  const displayTitle = title || staticData?.title || (
    <span>
      Stay updated with insights
      <br />
      Industry trends and tips
    </span>
  );

  const defaultBlogs = [
    { cat: 'TECHNOLOGY', title: 'The importance of customer data in the digital age', date: 'Jan 28, 2024', imgIndex: 1 },
    { cat: 'DEVELOPMENT', title: 'How to choose the right tech stack for your project', date: 'Jan 15, 2024', imgIndex: 2 },
    { cat: 'BUSINESS', title: 'Why small businesses should invest in automation now', date: 'Dec 30, 2023', imgIndex: 3 },
    { cat: 'AI & TECH', title: 'The role of AI in digital transformation strategies', date: 'Dec 12, 2023', imgIndex: 1 },
    { cat: 'SECURITY', title: 'Cybersecurity threats to watch out for in 2024', date: 'Nov 25, 2023', imgIndex: 2 },
    { cat: 'CLOUD', title: 'Building a scalable infrastructure for growth', date: 'Nov 05, 2023', imgIndex: 3 },
  ];

  const displayBlogs = posts?.map((p, i) => ({
    cat: p.category,
    title: p.title,
    date: formatDate(p.publishedAt),
    readTime: p.readTime || 5,
    slug: p.slug.current,
    img: p.featuredImage ? urlForImage(p.featuredImage)?.width(120).height(120).url() : undefined,
    imgIndex: (i % 3) + 1,
  })) || staticData?.blogs?.map((b, i) => ({
    ...b,
    readTime: 5,
    slug: undefined as string | undefined,
    img: undefined as string | undefined,
    imgIndex: b.imgIndex || (i % 3) + 1,
  })) || defaultBlogs.map((b, i) => ({
    ...b,
    readTime: 5,
    slug: undefined as string | undefined,
    img: undefined as string | undefined,
    imgIndex: b.imgIndex || (i % 3) + 1,
  }));

  return (
    <section className="section bg-cream">
      <div className="container">
        <SectionHeader
          label={displayLabel}
          title={displayTitle}
          subtext={subtitle}
        />
        <div className="blog-grid">
          {displayBlogs.map((blog, i) => (
            <Link
              key={i}
              href={blog.slug ? `/blog/${blog.slug}` : '#'}
              className="blog-item"
            >
              <Image
                src={blog.img || `/images/blog-${blog.imgIndex}.png`}
                alt={blog.title}
                width={120}
                height={120}
                className="blog-img"
              />
              <div>
                <span className="blog-cat">{blog.cat}</span>
                <h4 className="blog-title">{blog.title}</h4>
                <p className="blog-date">{blog.date} • {blog.readTime} min read</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogGrid;
