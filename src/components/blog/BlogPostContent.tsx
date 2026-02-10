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
        slug: 'sarah-chen',
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
        author: { name: 'Emily Zhang', initials: 'EZ', slug: 'emily-zhang' },
        image: '/images/blog-2.png'
    },
    {
        slug: 'ppc-budget-optimization',
        title: 'How to Maximize Your PPC Budget for Better ROI',
        excerpt: 'Learn proven strategies to stretch your advertising dollars further while achieving higher conversion rates.',
        category: 'PPC',
        date: 'Jan 28, 2024',
        readTime: '6 min read',
        author: { name: 'Michael Ross', initials: 'MR', slug: 'michael-ross' },
        image: '/images/blog-3.png'
    },
    {
        slug: 'google-analytics-4-guide',
        title: 'Mastering Google Analytics 4: Essential Features Explained',
        excerpt: 'Navigate the new GA4 interface with confidence and unlock powerful insights for data-driven decisions.',
        category: 'Analytics',
        date: 'Jan 12, 2024',
        readTime: '12 min read',
        author: { name: 'Lisa Wang', initials: 'LW', slug: 'lisa-wang' },
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
                <div className="post-header-container centered">
                    <nav className="post-breadcrumb-minimal">
                        <Link href="/blog">Blog</Link>
                        <span>/</span>
                        <span className="current">{post.category}</span>
                    </nav>

                    <h1 className="post-title-refined">{post.title}</h1>

                    <div className="post-meta-minimal">
                        <Link href={`/author/${post.author.slug}`} className="author-pill">
                            <div className="author-avatar-small">{post.author.initials}</div>
                            <span>{post.author.name}</span>
                        </Link>
                        <div className="meta-divider"></div>
                        <div className="meta-text">{post.date}</div>
                        <div className="meta-divider"></div>
                        <div className="meta-text">{post.readTime}</div>
                    </div>
                </div>
            </header>

            {/* Featured Image - Hanging Style */}
            <div className="post-featured-hanging">
                <div className="post-featured-image-container">
                    <div className="post-image-wrapper-refined">
                        <Image
                            src="/images/blog-1.png"
                            alt={post.title}
                            width={1200}
                            height={600}
                            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                            priority
                        />
                    </div>
                </div>
            </div>

            {/* Post Content - 3 Column Layout */}
            <section className="post-content-section-refined">
                <div className="post-layout-grid">
                    {/* Left: Table of Contents */}
                    <aside className="post-sidebar-left">
                        <div className="toc-minimalist">
                            <h4>In This Article</h4>
                            <nav>
                                {post.tableOfContents.map((item, index) => (
                                    <a key={index} href={`#${item.id}`}>
                                        <span className="toc-num">{index + 1}.</span> {item.title}
                                    </a>
                                ))}
                            </nav>
                        </div>

                        <div className="post-share-horizontal">
                            <h4 className="share-title">Share Article</h4>
                            <div className="share-buttons-row">
                                <button onClick={() => handleShare('twitter')} className="share-icon-btn"><Icon type="twitter" /></button>
                                <button onClick={() => handleShare('linkedin')} className="share-icon-btn"><Icon type="linkedin" /></button>
                                <button onClick={() => handleShare('facebook')} className="share-icon-btn"><Icon type="facebook" /></button>
                            </div>
                        </div>
                    </aside>

                    {/* Middle: Content */}
                    <article className="post-main-editorial">
                        <div
                            className="post-body-refined"
                            dangerouslySetInnerHTML={{ __html: post.content }}
                        />

                        {/* Tags */}
                        <div className="post-tags-refined">
                            {post.tags.map((tag, index) => (
                                <Link key={index} href={`/blog?tag=${tag.toLowerCase()}`} className="tag-pill">
                                    #{tag}
                                </Link>
                            ))}
                        </div>

                        {/* Author Bio - Expert Style */}
                        <div className="post-author-bio-refined">
                            <Link href={`/author/${post.author.slug}`} className="author-bio-avatar">
                                {post.author.initials}
                            </Link>
                            <div className="author-bio-content">
                                <Link href={`/author/${post.author.slug}`}>
                                    <h3>{post.author.name}</h3>
                                </Link>
                                <span className="author-role">{post.author.role}</span>
                                <p>{post.author.bio}</p>
                            </div>
                        </div>
                    </article>

                    {/* Right: Editorial Standards Card */}
                    <aside className="post-sidebar-right">
                        <div className="editorial-standards-card">
                            <h4 className="standards-title">Our Editorial Standards</h4>
                            <div className="standard-item purple-light">
                                <Icon type="check" />
                                <div>
                                    <h5>ACCURACY</h5>
                                    <p>Every piece is fact-checked for precision.</p>
                                </div>
                            </div>
                            <div className="standard-item purple-vibrant">
                                <Icon type="clock" />
                                <div>
                                    <h5>UP-TO-DATE</h5>
                                    <p>We reflect the latest trends and insights.</p>
                                </div>
                            </div>
                            <div className="standard-item black-sleek">
                                <Icon type="link" />
                                <div>
                                    <h5>CREDIBLE</h5>
                                    <p>Backed by trusted industry sources.</p>
                                </div>
                            </div>
                            <div className="standard-item grey-soft">
                                <Icon type="star" />
                                <div>
                                    <h5>INSIGHT-DRIVEN</h5>
                                    <p>Strategic takeaways for real results.</p>
                                </div>
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
                                        <Link href={`/author/${relatedPost.author.slug}`} className="blog-card-author">
                                            <div className="blog-card-author-avatar">{relatedPost.author.initials}</div>
                                            <span>{relatedPost.author.name}</span>
                                        </Link>
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

export default BlogPostContent;
