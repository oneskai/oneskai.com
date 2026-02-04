'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';

const featuredPosts = [
    {
        slug: 'seo-trends-2024',
        title: 'Top 10 SEO Trends That Will Dominate 2024',
        excerpt: 'Stay ahead of the curve with these emerging SEO strategies that are reshaping search visibility.',
        category: 'SEO',
        date: 'Feb 2, 2024',
        readTime: '8 min read',
        image: '/images/blog-1.png'
    },
    {
        slug: 'local-seo-strategies',
        title: 'Local SEO Strategies for Multi-Location Businesses',
        excerpt: 'Dominate local search results across all your locations with these proven local SEO tactics.',
        category: 'SEO',
        date: 'Dec 15, 2023',
        readTime: '11 min read',
        image: '/images/blog-3.png'
    },
    {
        slug: 'google-analytics-4-guide',
        title: 'Mastering Google Analytics 4: Essential Features',
        excerpt: 'Navigate the new GA4 interface with confidence and unlock powerful insights for data-driven decisions.',
        category: 'Analytics',
        date: 'Jan 12, 2024',
        readTime: '12 min read',
        image: '/images/blog-2.png'
    }
];

export function BlogBriefSection() {
    return (
        <section className="seo-blog-brief">
            <div className="seo-container">
                <div className="section-header text-center">
                    <span className="section-label">LATEST INSIGHTS</span>
                    <h2 className="section-title">From Our <span className="text-gradient">SEO Lab</span></h2>
                    <p className="section-subtitle">
                        Expert analysis and actionable strategies to help you stay ahead of the ever-evolving search landscape.
                    </p>
                </div>
                <div className="blog-brief-grid">
                    {featuredPosts.map((post, i) => (
                        <Link key={i} href={`/blog/${post.slug}`} className="blog-brief-card">
                            <div className="blog-brief-image">
                                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
                                <span className="blog-brief-tag">{post.category}</span>
                            </div>
                            <div className="blog-brief-content">
                                <span className="blog-brief-date">{post.date} • {post.readTime}</span>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <span className="blog-brief-link">Read Article <Icon type="arrowRight" /></span>
                            </div>
                        </Link>
                    ))}
                </div>
                <div className="section-actions text-center">
                    <Link href="/blog" className="btn-outline">View All Articles</Link>
                </div>
            </div>
        </section>
    );
}
