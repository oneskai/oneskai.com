'use client';
import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/author-page.css';
import '@/styles/blog-page.css';

// Reuse the sample blog posts data structure
const blogPosts = [
    {
        slug: 'seo-trends-2024',
        title: 'Top 10 SEO Trends That Will Dominate 2024',
        excerpt: 'Stay ahead of the curve with these emerging SEO strategies that are reshaping how businesses approach organic search and visibility.',
        category: 'SEO',
        date: 'Feb 2, 2024',
        readTime: '8 min read',
        author: {
            name: 'Sarah Chen',
            initials: 'SC',
            slug: 'sarah-chen',
            role: 'Head of SEO Strategy',
            image: '/images/about/team/business-woman.png',
            bio: 'Sarah is an experienced SEO strategist with over 10 years of experience helping businesses dominate search rankings. She specializes in technical SEO and content strategy. At ONESKAI, she leads the search department, creating high-impact strategies that boost visibility and drive sustainable organic growth.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'Technical SEO', value: 98 },
                { label: 'Content Strategy', value: 95 },
                { label: 'Data Analysis', value: 88 }
            ]
        },
        image: '/images/insights/blog/blog-1.png'
    },
    {
        slug: 'ppc-budget-optimization',
        title: 'How to Maximize Your PPC Budget for Better ROI',
        excerpt: 'Learn proven strategies to stretch your advertising dollars further while achieving higher conversion rates and lower cost per acquisition.',
        category: 'PPC',
        date: 'Jan 28, 2024',
        readTime: '6 min read',
        author: {
            name: 'Michael Ross',
            initials: 'MR',
            slug: 'michael-ross',
            role: 'PPC Specialist',
            image: '/images/about/team/team-member-1.png',
            bio: 'Michael is a results-driven PPC expert who focuses on maximizing ROI for small to medium-sized businesses. He has managed millions in ad spend across Google, Meta, and LinkedIn, consistently delivering below-average CPAs.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'Search Ads', value: 96 },
                { label: 'Display & Video', value: 85 },
                { label: 'Conversion Tracking', value: 92 }
            ]
        },
        image: '/images/insights/blog/blog-2.png'
    },
    {
        slug: 'content-marketing-strategy',
        title: 'Building a Content Marketing Strategy That Converts',
        excerpt: 'Discover how to create content that not only attracts your target audience but guides them seamlessly through your sales funnel.',
        category: 'Content',
        date: 'Jan 22, 2024',
        readTime: '10 min read',
        author: {
            name: 'Emily Zhang',
            initials: 'EZ',
            slug: 'emily-zhang',
            role: 'Content Strategist',
            image: '/images/about/team/team-member-2.png',
            bio: 'Emily is a master storyteller who helps brands find their voice and connect deeply with their audience through value-driven content. Her editorial approach ensures every piece of content serves a specific business objective.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'Storytelling', value: 98 },
                { label: 'SEO Writing', value: 94 },
                { label: 'Social Strategy', value: 89 }
            ]
        },
        image: '/images/insights/blog/blog-3.png'
    },
    {
        slug: 'social-media-engagement',
        title: 'Boosting Social Media Engagement: A Complete Guide',
        excerpt: 'From algorithms to authenticity, learn what it takes to build a thriving social media presence that resonates with your audience.',
        category: 'Social Media',
        date: 'Jan 18, 2024',
        readTime: '7 min read',
        author: {
            name: 'David Kim',
            initials: 'DK',
            slug: 'david-kim',
            role: 'Social Media Manager',
            image: '/images/about/team/team-member-3.png',
            bio: 'David is a social media enthusiast who stays on top of every trend to help brands build active and engaged communities. He specializes in organic growth and community management.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'Community Bldg', value: 95 },
                { label: 'Viral Content', value: 87 },
                { label: 'Analytic Tracking', value: 82 }
            ]
        },
        image: '/images/insights/blog/blog-1.png'
    },
    {
        slug: 'google-analytics-4-guide',
        title: 'Mastering Google Analytics 4: Essential Features Explained',
        excerpt: 'Navigate the new GA4 interface with confidence and unlock powerful insights for data-driven marketing decisions.',
        category: 'Analytics',
        date: 'Jan 12, 2024',
        readTime: '12 min read',
        author: {
            name: 'Lisa Wang',
            initials: 'LW',
            slug: 'lisa-wang',
            role: 'Data Analyst',
            image: '/images/about/team/business-woman.png',
            bio: 'Lisa turns complex data sets into actionable marketing insights, helping businesses make smarter, data-driven decisions. She is a certified Google Analytics expert.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'GA4 Setup', value: 99 },
                { label: 'BigQuery', value: 84 },
                { label: 'Visualization', value: 91 }
            ]
        },
        image: '/images/insights/blog/blog-2.png'
    },
    {
        slug: 'ecommerce-conversion-tips',
        title: '15 E-commerce Conversion Optimization Tips for 2024',
        excerpt: 'Transform your online store into a conversion machine with these battle-tested optimization techniques.',
        category: 'E-commerce',
        date: 'Jan 5, 2024',
        readTime: '9 min read',
        author: {
            name: 'James Miller',
            initials: 'JM',
            slug: 'james-miller',
            role: 'Conversion Specialist',
            image: '/images/about/team/team-member-1.png',
            bio: 'James specializes in e-commerce growth, focusing on user experience and checkout optimization to drive sales. He has worked with top-tier retailers to improve conversion rates.',
            social: { linkedin: '#', twitter: '#' },
            metrics: [
                { label: 'CRO Tactics', value: 97 },
                { label: 'UX Research', value: 90 },
                { label: 'A/B Testing', value: 94 }
            ]
        },
        image: '/images/insights/blog/blog-3.png'
    },
    {
        slug: 'ai-marketing-automation',
        title: 'How AI is Revolutionizing Marketing Automation',
        excerpt: 'Explore the cutting-edge AI tools and techniques that are transforming how businesses engage with customers at scale.',
        category: 'AI',
        date: 'Dec 28, 2023',
        readTime: '8 min read',
        author: {
            name: 'Sarah Chen',
            initials: 'SC',
            slug: 'sarah-chen',
            role: 'Head of SEO Strategy',
            image: '/images/about/team/business-woman.png',
            bio: 'Sarah is an experienced SEO strategist with over 10 years of experience helping businesses dominate search rankings. She specializes in technical SEO and content strategy.'
        },
        image: '/images/insights/blog/blog-1.png'
    }
];

interface AuthorPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default function AuthorPage({ params }: AuthorPageProps) {
    const { slug } = use(params);

    // Find author details from the blog posts data
    const firstPostByAuthor = blogPosts.find(p => p.author.slug === slug);

    if (!firstPostByAuthor) {
        return (
            <div className="author-profile-page" style={{ textAlign: 'center', padding: '160px 40px' }}>
                <h1 style={{ fontSize: '48px', color: 'var(--editorial-black)' }}>Author Not Found</h1>
                <p style={{ fontSize: '18px', color: '#64748b', marginTop: '20px' }}>
                    The author you're looking for doesn't seem to have any published articles yet.
                </p>
                <Link href="/insights/blog" className="blog-featured-link" style={{ justifyContent: 'center', marginTop: '40px' }}>
                    Back to Blog <Icon type="arrowRight" />
                </Link>
            </div>
        );
    }

    const { author } = firstPostByAuthor;
    const authorPosts = blogPosts.filter(p => p.author.slug === slug);

    return (
        <div className="author-profile-page">
            {/* Author Header - 2 Column Design */}
            <header className="author-header-v2">
                <div className="author-header-container">
                    <div className="author-hero-grid">
                        {/* Left: Picture */}
                        <div className="author-hero-left">
                            <div className="author-image-container">
                                <Image
                                    src={author.image || '/images/about/team/team-member-1.png'}
                                    alt={author.name}
                                    fill
                                    className="author-main-img"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Right: Intro & Bio Cards */}
                        <div className="author-hero-right">
                            <div className="author-intro">
                                <h1 className="author-name-v2">
                                    {author.name}
                                    <span className="title-divider"></span>
                                    <span className="author-role-text">{author.role}</span>
                                </h1>
                                <p className="author-bio-v2">{author.bio}</p>
                            </div>

                            <div className="author-cards-grid">
                                {/* Expertise Card */}
                                <div className="expert-meter-box">
                                    <h3 className="expert-meter-title">Expertise</h3>
                                    <div className="expert-metrics-grid">
                                        {author.metrics?.map((m: any, i: number) => (
                                            <div key={i} className="metric-item">
                                                <div className="metric-info">
                                                    <span>{m.label}</span>
                                                </div>
                                                <div className="metric-bar-bg">
                                                    <div className="metric-bar-fill" style={{ width: `${m.value}%` }}></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Connect Card */}
                                <div className="author-connect-card">
                                    <h3 className="connect-card-title">Connect</h3>
                                    <div className="author-social-icons">
                                        {author.social?.linkedin && (
                                            <Link href={author.social.linkedin} className="social-icon-box" target="_blank" rel="noopener noreferrer">
                                                <Icon type="linkedin" />
                                            </Link>
                                        )}
                                        {author.social?.twitter && (
                                            <Link href={author.social.twitter} className="social-icon-box" target="_blank" rel="noopener noreferrer">
                                                <Icon type="twitter" />
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Author Content */}
            <section className="author-content">
                <div className="author-content-container">
                    <h2 className="author-section-title">
                        Articles by {author.name.split(' ')[0]} <span>{authorPosts.length}</span>
                    </h2>

                    <div className="blog-grid">
                        {authorPosts.map((post, index) => (
                            <Link key={index} href={`/insights/${post.slug}`} className="blog-card">
                                <div className="blog-card-image">
                                    <span className="blog-card-tag">{post.category}</span>
                                    <Image
                                        src={post.image || '/images/insights/blog/blog-1.png'}
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
                                            <div className="blog-card-author-avatar">
                                                {post.author.image ? (
                                                    <Image
                                                        src={post.author.image}
                                                        alt={post.author.name}
                                                        width={36}
                                                        height={36}
                                                        style={{ objectFit: 'cover', borderRadius: 'inherit' }}
                                                    />
                                                ) : (
                                                    post.author.initials
                                                )}
                                            </div>
                                            <span>{post.author.name}</span>
                                        </div>
                                        <span className="blog-card-read">
                                            Read the full article <Icon type="arrowRight" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
