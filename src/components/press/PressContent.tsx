'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/press-page.css';

const news = [
    {
        date: 'Oct 24, 2025',
        title: 'Oneskai Named Top Digital Evolution Agency of the Year',
        excerpt: 'The Global Tech Awards recognizes Oneskai for its proprietary Growth Framework and innovative application of AI in performance marketing.',
        image: '/images/insights/blog/blog-1.png',
        link: '#'
    },
    {
        date: 'Sep 12, 2025',
        title: 'Bridging the Gap: How Oneskai is Redefining the CMO Role',
        excerpt: 'Our Founder, Swapan Kumar Manna, joins the Revenue Leaders Podcast to discuss the future of Fractional CMOs and performance accountability.',
        image: '/images/insights/blog/blog-1.png',
        link: '#'
    }
];

const pressReleasesByYear = {
    '2025': [
        { title: 'Oneskai Announces Q3 2025 Revenue Growth of 40%', date: 'Oct 15, 2025', link: '#' },
        { title: 'New Strategic Partnership with Google Cloud', date: 'Sep 28, 2025', link: '#' },
        { title: 'Oneskai Launches Proprietary Lead-Gen Dashboard', date: 'Aug 10, 2025', link: '#' }
    ],
    '2024': [
        { title: 'Oneskai Secures $5M Series A Funding for AI Expansion', date: 'Dec 05, 2024', link: '#' },
        { title: 'Global Operations Expansion: New Office in Singapore', date: 'Oct 20, 2024', link: '#' },
        { title: 'Swapan Kumar Manna Featured in Forbes 30 Under 30', date: 'Jul 15, 2024', link: '#' }
    ]
};

export function PressContent() {
    const years = Object.keys(pressReleasesByYear).sort((a, b) => b.localeCompare(a));
    const [selectedYear, setSelectedYear] = useState(years[0]);

    return (
        <div className="press-page">
            {/* Hero Section */}
            <section className="press-hero">
                <div className="press-container">
                    <div className="press-hero-content">
                        <span className="press-label">MEDIA CENTER</span>
                        <h1 className="press-hero-title">
                            The Evolution of Oneskai <br /> in the <span>News</span>
                        </h1>
                        <p className="press-hero-subtitle">
                            Official announcements, media coverage, and high-resolution assets for the global press and media community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Latest News - Horizontal */}
            <section className="press-section section-light">
                <div className="press-container">
                    <div className="press-section-header" style={{ textAlign: 'left' }}>
                        <span className="press-label" style={{ color: '#FF2D75', background: 'rgba(255, 45, 117, 0.05)', borderColor: 'rgba(255, 45, 117, 0.1)' }}>FEATURED</span>
                        <h2 className="press-section-title">Latest Updates</h2>
                    </div>

                    <div className="press-news-grid">
                        {news.map((item, index) => (
                            <div key={index} className="press-news-card">
                                <div className="news-image">
                                    <img src={item.image} alt={item.title} />
                                </div>
                                <div className="news-content">
                                    <span className="news-date">{item.date}</span>
                                    <h3>{item.title}</h3>
                                    <p>{item.excerpt}</p>
                                    <Link href={item.link} className="news-link">
                                        Read More <Icon type="arrowRight" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Press Releases - With Year Tabs */}
            <section className="press-section section-dark">
                <div className="press-container">
                    <div className="press-section-header">
                        <span className="press-label">OFFICIAL ANNOUNCEMENTS</span>
                        <h2 className="press-section-title">Press Releases</h2>
                    </div>

                    {/* Year Tabs */}
                    <div className="press-tabs">
                        {years.map(year => (
                            <button
                                key={year}
                                className={`press-tab ${selectedYear === year ? 'active' : ''}`}
                                onClick={() => setSelectedYear(year)}
                            >
                                {year}
                            </button>
                        ))}
                    </div>

                    <div className="press-links-list">
                        {pressReleasesByYear[selectedYear as keyof typeof pressReleasesByYear].map((item, index) => (
                            <Link key={index} href={item.link} className="press-link-item">
                                <h4>{item.title}</h4>
                                <div className="press-link-meta">
                                    <span className="meta-date">{item.date}</span>
                                    <Icon type="arrowRight" className="press-link-icon" />
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Brand Assets */}
            <section className="press-section section-light">
                <div className="press-container">
                    <div className="press-section-header">
                        <span className="press-label" style={{ color: '#FF2D75', background: 'rgba(255, 45, 117, 0.05)', borderColor: 'rgba(255, 45, 117, 0.1)' }}>RESOURCES</span>
                        <h2 className="press-section-title" style={{ color: 'var(--press-dark)' }}>Brand Assets</h2>
                        <p className="press-section-subtitle">
                            Access our official brand identity guidelines, approved logos, and <br />
                            high-resolution photography for media and partnership use.
                        </p>
                    </div>

                    <div className="press-assets-grid">
                        <div className="asset-box">
                            <div className="asset-icon-wrapper">
                                <Icon type="image" />
                            </div>
                            <div className="asset-info">
                                <h3>Logo Pack</h3>
                                <p>Vertical & horizontal logos in SVG/PNG.</p>
                            </div>
                            <Link href="#" className="btn-asset">
                                <Icon type="download" />
                            </Link>
                        </div>
                        <div className="asset-box">
                            <div className="asset-icon-wrapper">
                                <Icon type="users" />
                            </div>
                            <div className="asset-info">
                                <h3>Leadership Photos</h3>
                                <p>Professional headshots for press use.</p>
                            </div>
                            <Link href="#" className="btn-asset">
                                <Icon type="download" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default PressContent;
