'use client';

import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';

const featuredPosts = [
    {
        title: 'The Future of AI in Digital Marketing: 2024 Trends',
        excerpt: 'Explore how artificial intelligence is reshaping marketing strategies and what it means for your business.',
        category: 'AI & Technology',
        readTime: '8 min read',
        date: 'Feb 1, 2024',
        href: '/insights/ai-digital-marketing-trends-2024',
        image: '/images/insights/blog/blog-1.png',
        featured: true,
    },
    {
        title: 'How We Achieved 340% Traffic Growth for a D2C Brand',
        excerpt: 'A deep dive into our SEO and content strategy that transformed organic performance.',
        category: 'Case Study',
        readTime: '5 min read',
        date: 'Jan 28, 2024',
        href: '/insights/340-traffic-growth-case-study',
        image: '/images/insights/blog/blog-2.png',
        featured: false,
    },
    {
        title: 'GA4 Migration: Complete Guide for Marketers',
        excerpt: 'Everything you need to know about transitioning to Google Analytics 4.',
        category: 'Analytics',
        readTime: '12 min read',
        date: 'Jan 25, 2024',
        href: '/insights/ga4-migration-guide',
        image: '/images/insights/blog/blog-3.png',
        featured: false,
    },
];

export function BlogSection() {
    const featuredPost = featuredPosts.find(p => p.featured);
    const regularPosts = featuredPosts.filter(p => !p.featured);

    return (
        <section className="blog-section">
            <div className="blog-container">
                <div className="blog-header">
                    <div className="blog-header-left">
                        <span className="section-tag">Insights & Resources</span>
                        <h2 className="section-title">
                            Latest From <span className="title-accent">Our Blog</span>
                        </h2>
                    </div>
                    <Link href="/insights/blog" className="btn-outline">
                        View All Articles
                        <Icon type="arrowRight" />
                    </Link>
                </div>

                <div className="blog-grid">
                    {featuredPost && (
                        <Link href={featuredPost.href} className="blog-card blog-card-featured">
                            <div className="blog-card-image">
                                <img
                                    src={featuredPost.image}
                                    alt={featuredPost.title}
                                    className="blog-img"
                                />
                            </div>
                            <div className="blog-card-content">
                                <div className="blog-meta">
                                    <span className="blog-category">{featuredPost.category}</span>
                                    <span className="blog-date">{featuredPost.date}</span>
                                </div>
                                <h3 className="blog-title">{featuredPost.title}</h3>
                                <p className="blog-excerpt">{featuredPost.excerpt}</p>
                                <span className="blog-readtime">{featuredPost.readTime}</span>
                            </div>
                        </Link>
                    )}

                    <div className="blog-list">
                        {regularPosts.map((post, index) => (
                            <Link key={index} href={post.href} className="blog-card blog-card-compact">
                                <div className="blog-card-content">
                                    <div className="blog-meta">
                                        <span className="blog-category">{post.category}</span>
                                        <span className="blog-date">{post.date}</span>
                                    </div>
                                    <h3 className="blog-title">{post.title}</h3>
                                    <p className="blog-excerpt">{post.excerpt}</p>
                                    <span className="blog-readtime">{post.readTime}</span>
                                </div>
                                <div className="blog-arrow">
                                    <Icon type="arrowRight" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
