'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Icon } from '@/components/ui/Icon';
import '@/styles/single-post.css';
import '@/styles/blog-page.css';

interface BlogPostContentProps {
    slug: string;
}

// Sample post data (will be replaced with Sanity CMS data)
const getPostData = (slug: string) => ({
    title: slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
    category: 'SEO',
    date: 'February 2, 2024',
    readTime: '8 min read',
    author: {
        name: 'Sarah Chen',
        initials: 'SC',
        role: 'Head of SEO Strategy',
        bio: 'Sarah is an experienced SEO strategist with over 10 years of experience helping businesses dominate search rankings. She specializes in technical SEO and content strategy.'
    },
    tags: ['SEO', 'Digital Marketing', 'Strategy', 'Search Rankings', 'Content'],
    content: `
        <h2>Introduction</h2>
        <p>In the ever-evolving world of digital marketing, staying ahead of the curve is essential for businesses looking to maintain their competitive edge. Search engine optimization continues to be one of the most effective ways to drive organic traffic and build sustainable growth.</p>
        
        <p>This comprehensive guide will walk you through the key strategies and tactics that are shaping the SEO landscape in 2024. Whether you're a seasoned marketer or just getting started, these insights will help you optimize your approach and achieve better results.</p>
        
        <blockquote>
            "The best SEO strategy is to create content so valuable that people can't help but share it."
        </blockquote>
        
        <h2>Understanding the Current Landscape</h2>
        <p>Search engines have become increasingly sophisticated in understanding user intent and delivering relevant results. Google's algorithm updates continue to prioritize user experience, content quality, and technical performance.</p>
        
        <p>Key factors that influence search rankings in 2024 include:</p>
        <ul>
            <li><strong>Core Web Vitals:</strong> Page speed, interactivity, and visual stability remain critical ranking factors.</li>
            <li><strong>E-E-A-T:</strong> Experience, Expertise, Authoritativeness, and Trustworthiness are more important than ever.</li>
            <li><strong>Mobile-First Indexing:</strong> Google primarily uses mobile versions of content for indexing and ranking.</li>
            <li><strong>Semantic Search:</strong> Understanding context and user intent rather than just matching keywords.</li>
        </ul>
        
        <h2>Strategic Approaches for Success</h2>
        <p>Building a successful SEO strategy requires a holistic approach that combines technical optimization, quality content creation, and strategic link building. Here's how to approach each element:</p>
        
        <h3>1. Technical SEO Foundation</h3>
        <p>Your website's technical health forms the foundation of your SEO success. Ensure your site is crawlable, fast-loading, and properly structured. Implement schema markup to help search engines understand your content better.</p>
        
        <h3>2. Content Excellence</h3>
        <p>Create comprehensive, valuable content that genuinely helps your target audience. Focus on answering questions, solving problems, and providing unique insights that differentiate you from competitors.</p>
        
        <h3>3. Authority Building</h3>
        <p>Establish your brand as an authority in your industry through thought leadership, expert content, and genuine relationship building. Quality backlinks from reputable sources signal trust to search engines.</p>
        
        <h2>Measuring Success</h2>
        <p>Track your progress using meaningful metrics that align with your business goals. While rankings are important, also monitor organic traffic, conversion rates, and user engagement metrics to get a complete picture of your SEO performance.</p>
        
        <p>Remember that SEO is a long-term investment. Results may take time, but the sustainable growth it provides is well worth the effort.</p>
        
        <h2>Conclusion</h2>
        <p>Success in SEO requires patience, persistence, and a commitment to quality. By focusing on creating genuine value for your audience while adhering to technical best practices, you can build a strong organic presence that drives consistent results.</p>
    `,
    tableOfContents: [
        { id: 'introduction', title: 'Introduction' },
        { id: 'understanding-the-current-landscape', title: 'Understanding the Current Landscape' },
        { id: 'strategic-approaches-for-success', title: 'Strategic Approaches for Success' },
        { id: 'measuring-success', title: 'Measuring Success' },
        { id: 'conclusion', title: 'Conclusion' }
    ]
});

const relatedPosts = [
    {
        slug: 'content-marketing-strategy',
        title: 'Building a Content Marketing Strategy That Converts',
        excerpt: 'Discover how to create content that not only attracts your target audience but guides them seamlessly through your sales funnel.',
        category: 'Content',
        date: 'Jan 22, 2024',
        readTime: '10 min read',
        author: { name: 'Emily Zhang', initials: 'EZ' },
        image: '/images/blog-2.png'
    },
    {
        slug: 'ppc-budget-optimization',
        title: 'How to Maximize Your PPC Budget for Better ROI',
        excerpt: 'Learn proven strategies to stretch your advertising dollars further while achieving higher conversion rates.',
        category: 'PPC',
        date: 'Jan 28, 2024',
        readTime: '6 min read',
        author: { name: 'Michael Ross', initials: 'MR' },
        image: '/images/blog-3.png'
    },
    {
        slug: 'google-analytics-4-guide',
        title: 'Mastering Google Analytics 4: Essential Features Explained',
        excerpt: 'Navigate the new GA4 interface with confidence and unlock powerful insights for data-driven decisions.',
        category: 'Analytics',
        date: 'Jan 12, 2024',
        readTime: '12 min read',
        author: { name: 'Lisa Wang', initials: 'LW' },
        image: '/images/blog-1.png'
    }
];

export function BlogPostContent({ slug }: BlogPostContentProps) {
    const post = getPostData(slug);

    const handleShare = (platform: string) => {
        const url = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(post.title);

        const shareUrls: Record<string, string> = {
            twitter: `https://twitter.com/intent/tweet?url=${url}&text=${title}`,
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
        };

        if (platform === 'copy') {
            navigator.clipboard.writeText(window.location.href);
            alert('Link copied to clipboard!');
        } else if (shareUrls[platform]) {
            window.open(shareUrls[platform], '_blank', 'width=600,height=400');
        }
    };

    return (
        <div className="single-post-page">
            {/* Post Header */}
            <header className="post-header">
                <div className="post-header-container">
                    <nav className="post-breadcrumb">
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span style={{ color: 'var(--post-secondary)' }}>{post.category}</span>
                    </nav>

                    <span className="post-category">{post.category}</span>

                    <h1 className="post-title">{post.title}</h1>

                    <div className="post-meta">
                        <div className="post-author">
                            <div className="post-author-avatar">{post.author.initials}</div>
                            <div className="post-author-info">
                                <h4>{post.author.name}</h4>
                                <span>{post.author.role}</span>
                            </div>
                        </div>
                        <div className="post-meta-item">
                            <Icon type="calendar" />
                            {post.date}
                        </div>
                        <div className="post-meta-item">
                            <Icon type="clock" />
                            {post.readTime}
                        </div>
                    </div>
                </div>
            </header>

            {/* Featured Image */}
            <div className="post-featured-image">
                <div className="post-featured-image-container">
                    <div className="post-image-wrapper">
                        <Image
                            src="/images/blog-1.png"
                            alt={post.title}
                            width={1000}
                            height={500}
                            style={{ objectFit: 'cover', width: '100%', height: '500px' }}
                        />
                    </div>
                </div>
            </div>

            {/* Post Content */}
            <section className="post-content-section">
                <div className="post-content-container">
                    {/* Main Content */}
                    <article className="post-main-content">
                        <div
                            className="post-body"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="post-tags">
                            {post.tags.map((tag, index) => (
                                <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`} className="post-tag">
                                    #{tag}
                                </Link>
                            ))}
                        </div>

                        {/* Author Bio */}
                        <div className="post-author-bio">
                            <div className="post-author-bio-avatar">{post.author.initials}</div>
                            <div className="post-author-bio-content">
                                <h3>{post.author.name}</h3>
                                <span className="role">{post.author.role}</span>
                                <p>{post.author.bio}</p>
                            </div>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="post-sidebar">
                        {/* Table of Contents */}
                        <div className="post-toc">
                            <h4>In This Article</h4>
                            <ul>
                                {post.tableOfContents.map((item, index) => (
                                    <li key={index}>
                                        <a href={`#${item.id}`}>{item.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Share Buttons */}
                        <div className="post-share">
                            <h4>Share Article</h4>
                            <div className="post-share-buttons">
                                <button
                                    className="post-share-btn twitter"
                                    onClick={() => handleShare('twitter')}
                                    aria-label="Share on Twitter"
                                >
                                    <Icon type="twitter" />
                                </button>
                                <button
                                    className="post-share-btn linkedin"
                                    onClick={() => handleShare('linkedin')}
                                    aria-label="Share on LinkedIn"
                                >
                                    <Icon type="linkedin" />
                                </button>
                                <button
                                    className="post-share-btn facebook"
                                    onClick={() => handleShare('facebook')}
                                    aria-label="Share on Facebook"
                                >
                                    <Icon type="facebook" />
                                </button>
                                <button
                                    className="post-share-btn copy"
                                    onClick={() => handleShare('copy')}
                                    aria-label="Copy link"
                                >
                                    <Icon type="link" />
                                </button>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            {/* Related Posts */}
            <section className="post-related">
                <div className="post-related-container">
                    <div className="post-related-header">
                        <h2>Related Articles</h2>
                    </div>
                    <div className="post-related-grid">
                        {relatedPosts.map((relatedPost, index) => (
                            <Link key={index} href={`/blog/${relatedPost.slug}`} className="blog-card">
                                <div className="blog-card-image">
                                    <span className="blog-card-tag">{relatedPost.category}</span>
                                    <Image
                                        src={relatedPost.image || '/images/blog-1.png'}
                                        alt={relatedPost.title}
                                        fill
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                                <div className="blog-card-content">
                                    <span className="blog-card-date">
                                        <Icon type="calendar" /> {relatedPost.date} • {relatedPost.readTime}
                                    </span>
                                    <h3 className="blog-card-title">{relatedPost.title}</h3>
                                    <p className="blog-card-excerpt">{relatedPost.excerpt}</p>
                                    <div className="blog-card-footer">
                                        <div className="blog-card-author">
                                            <div className="blog-card-author-avatar">{relatedPost.author.initials}</div>
                                            <span>{relatedPost.author.name}</span>
                                        </div>
                                        <span className="blog-card-read">
                                            Read <Icon type="arrowRight" />
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="post-cta">
                <div className="post-cta-container">
                    <h2>Ready to <span>Transform</span> Your Digital Presence?</h2>
                    <p>
                        Let our experts help you implement these strategies and achieve
                        measurable results for your business.
                    </p>
                    <Link href="/contact" className="post-cta-btn">
                        Start Your Journey <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>
        </div>
    );
}

export default BlogPostContent;
