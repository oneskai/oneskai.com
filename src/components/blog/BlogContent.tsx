'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/blog-page.css';

// Sample blog posts data
const blogPosts = [
    {
        slug: 'seo-trends-2024',
        title: 'Top 10 SEO Trends That Will Dominate 2024',
        excerpt: 'Stay ahead of the curve with these emerging SEO strategies that are reshaping how businesses approach organic search and visibility.',
        category: 'SEO',
        date: 'Feb 2, 2024',
        readTime: '8 min read',
        author: { name: 'Sarah Chen', initials: 'SC' },
        featured: true,
        image: '/images/blog-1.png'
    },
    {
        slug: 'ppc-budget-optimization',
        title: 'How to Maximize Your PPC Budget for Better ROI',
        excerpt: 'Learn proven strategies to stretch your advertising dollars further while achieving higher conversion rates and lower cost per acquisition.',
        category: 'PPC',
        date: 'Jan 28, 2024',
        readTime: '6 min read',
        author: { name: 'Michael Ross', initials: 'MR' },
        image: '/images/blog-2.png'
    },
    {
        slug: 'content-marketing-strategy',
        title: 'Building a Content Marketing Strategy That Converts',
        excerpt: 'Discover how to create content that not only attracts your target audience but guides them seamlessly through your sales funnel.',
        category: 'Content',
        date: 'Jan 22, 2024',
        readTime: '10 min read',
        author: { name: 'Emily Zhang', initials: 'EZ' },
        image: '/images/blog-3.png'
    },
    {
        slug: 'social-media-engagement',
        title: 'Boosting Social Media Engagement: A Complete Guide',
        excerpt: 'From algorithms to authenticity, learn what it takes to build a thriving social media presence that resonates with your audience.',
        category: 'Social Media',
        date: 'Jan 18, 2024',
        readTime: '7 min read',
        author: { name: 'David Kim', initials: 'DK' },
        image: '/images/blog-1.png'
    },
    {
        slug: 'google-analytics-4-guide',
        title: 'Mastering Google Analytics 4: Essential Features Explained',
        excerpt: 'Navigate the new GA4 interface with confidence and unlock powerful insights for data-driven marketing decisions.',
        category: 'Analytics',
        date: 'Jan 12, 2024',
        readTime: '12 min read',
        author: { name: 'Lisa Wang', initials: 'LW' },
        image: '/images/blog-2.png'
    },
    {
        slug: 'ecommerce-conversion-tips',
        title: '15 E-commerce Conversion Optimization Tips for 2024',
        excerpt: 'Transform your online store into a conversion machine with these battle-tested optimization techniques.',
        category: 'E-commerce',
        date: 'Jan 5, 2024',
        readTime: '9 min read',
        author: { name: 'James Miller', initials: 'JM' },
        image: '/images/blog-3.png'
    },
    {
        slug: 'ai-marketing-automation',
        title: 'How AI is Revolutionizing Marketing Automation',
        excerpt: 'Explore the cutting-edge AI tools and techniques that are transforming how businesses engage with customers at scale.',
        category: 'AI',
        date: 'Dec 28, 2023',
        readTime: '8 min read',
        author: { name: 'Sarah Chen', initials: 'SC' },
        image: '/images/blog-1.png'
    },
    {
        slug: 'brand-voice-development',
        title: 'Crafting a Brand Voice That Resonates',
        excerpt: 'Learn how to develop a distinctive brand voice that sets you apart and creates lasting connections with your audience.',
        category: 'Branding',
        date: 'Dec 20, 2023',
        readTime: '6 min read',
        author: { name: 'Emily Zhang', initials: 'EZ' },
        image: '/images/blog-2.png'
    },
    {
        slug: 'local-seo-strategies',
        title: 'Local SEO Strategies for Multi-Location Businesses',
        excerpt: 'Dominate local search results across all your locations with these proven local SEO tactics and best practices.',
        category: 'SEO',
        date: 'Dec 15, 2023',
        readTime: '11 min read',
        author: { name: 'Michael Ross', initials: 'MR' },
        image: '/images/blog-3.png'
    }
];

const categories = ['All', 'SEO', 'PPC', 'Content', 'Social Media', 'Analytics', 'E-commerce', 'AI', 'Branding'];

export function BlogContent() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const featuredPost = blogPosts.find(post => post.featured);
    const regularPosts = filteredPosts.filter(post => !post.featured);

    return (
        <div className="blog-page">
            {/* Hero Section */}
            <section className="blog-hero">
                <div className="blog-hero-container">
                    <div className="blog-hero-content">
                        <span className="blog-label">INSIGHTS & RESOURCES</span>
                        <h1 className="blog-hero-title">
                            Our <span>Blog</span>
                        </h1>
                        <p className="blog-hero-subtitle">
                            Expert insights, industry trends, and actionable strategies to help you
                            navigate the ever-evolving digital landscape.
                        </p>
                    </div>
                </div>
            </section>

            {/* Filters Section */}
            <section className="blog-filters">
                <div className="blog-filters-container">
                    <div className="blog-search">
                        <Icon type="search" className="blog-search-icon" />
                        <input
                            type="text"
                            className="blog-search-input"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>
                    <div className="blog-categories">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`blog-category-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Post */}
            {featuredPost && activeCategory === 'All' && !searchQuery && (
                <section className="blog-featured">
                    <div className="blog-featured-container">
                        <div className="blog-featured-card">
                            <div className="blog-featured-image">
                                <span className="blog-featured-badge">✨ Featured</span>
                                <Image
                                    src={featuredPost.image || '/images/blog-1.png'}
                                    alt={featuredPost.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <div className="blog-featured-content">
                                <div className="blog-featured-meta">
                                    <span className="blog-featured-tag">{featuredPost.category}</span>
                                    <span className="blog-featured-date">
                                        <Icon type="calendar" /> {featuredPost.date}
                                    </span>
                                </div>
                                <h2 className="blog-featured-title">{featuredPost.title}</h2>
                                <p className="blog-featured-excerpt">{featuredPost.excerpt}</p>
                                <div className="blog-featured-author">
                                    <div className="blog-author-avatar">{featuredPost.author.initials}</div>
                                    <div className="blog-author-info">
                                        <h4>{featuredPost.author.name}</h4>
                                        <span>{featuredPost.readTime}</span>
                                    </div>
                                </div>
                                <Link href={`/blog/${featuredPost.slug}`} className="blog-featured-link">
                                    Read Article <Icon type="arrowRight" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* Blog Grid */}
            <section className="blog-grid-section">
                <div className="blog-grid-container">
                    <div className="blog-grid-header">
                        <h2 className="blog-grid-title">
                            {activeCategory === 'All' ? 'Latest Articles' : `${activeCategory} Articles`}
                        </h2>
                    </div>

                    {regularPosts.length > 0 ? (
                        <div className="blog-grid">
                            {regularPosts.map((post, index) => (
                                <Link key={index} href={`/blog/${post.slug}`} className="blog-card">
                                    <div className="blog-card-image">
                                        <span className="blog-card-tag">{post.category}</span>
                                        <Image
                                            src={post.image || '/images/blog-1.png'}
                                            alt={post.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                        />
                                    </div>
                                    <div className="blog-card-content">
                                        <span className="blog-card-date">
                                            <Icon type="calendar" /> {post.date} • {post.readTime}
                                        </span>
                                        <h3 className="blog-card-title">{post.title}</h3>
                                        <p className="blog-card-excerpt">{post.excerpt}</p>
                                        <div className="blog-card-footer">
                                            <div className="blog-card-author">
                                                <div className="blog-card-author-avatar">{post.author.initials}</div>
                                                <span>{post.author.name}</span>
                                            </div>
                                            <span className="blog-card-read">
                                                Read <Icon type="arrowRight" />
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div style={{ textAlign: 'center', padding: '80px 0' }}>
                            <p style={{ fontSize: '18px', color: '#64748b' }}>
                                No articles found matching your criteria.
                            </p>
                        </div>
                    )}

                    {/* Pagination */}
                    {regularPosts.length > 0 && (
                        <div className="blog-pagination">
                            <button className="blog-page-btn">←</button>
                            <button className="blog-page-btn active">1</button>
                            <button className="blog-page-btn">2</button>
                            <button className="blog-page-btn">3</button>
                            <button className="blog-page-btn">→</button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter CTA */}
            <section className="blog-newsletter">
                <div className="blog-newsletter-container">
                    <h2>Stay <span>Informed</span></h2>
                    <p>
                        Get the latest insights, strategies, and industry updates delivered
                        straight to your inbox. Join 5,000+ marketers who trust our newsletter.
                    </p>
                    <form className="blog-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            className="blog-newsletter-input"
                            placeholder="Enter your email"
                        />
                        <button type="submit" className="blog-newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default BlogContent;
