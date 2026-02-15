'use client';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/events-page.css';

// Event interface
interface Event {
    title: string;
    type: 'webinar' | 'workshop' | 'conference' | 'meetup';
    date: { day: string; month: string; year: string };
    time: string;
    location: string;
    description: string;
    image: string;
    icon: string;
    slug: string;
}

// Upcoming events data
const upcomingEvents: Event[] = [
    {
        title: 'Mastering AI-Powered Marketing Automation',
        type: 'webinar',
        date: { day: '15', month: 'Feb', year: '2026' },
        time: '2:00 PM EST',
        location: 'Virtual Event',
        description: 'Learn how to leverage AI tools to automate and optimize your marketing campaigns.',
        image: '/images/common/growth-chart.png',
        icon: 'zap',
        slug: 'ai-marketing-automation'
    },
    {
        title: 'SEO Masterclass: Technical Foundations',
        type: 'workshop',
        date: { day: '22', month: 'Feb', year: '2026' },
        time: '10:00 AM EST',
        location: 'Virtual Event',
        description: 'Deep dive into technical SEO fundamentals with hands-on exercises and auditing techniques.',
        image: '/images/common/office-chat.png',
        icon: 'search',
        slug: 'seo-masterclass'
    },
    {
        title: 'Performance Marketing Summit 2026',
        type: 'conference',
        date: { day: '05', month: 'Mar', year: '2026' },
        time: '9:00 AM EST',
        location: 'New York City',
        description: 'Annual conference featuring industry leaders sharing insights on performance marketing trends.',
        image: '/images/common/hero-team.png',
        icon: 'barChart',
        slug: 'performance-summit-2026'
    },
    {
        title: 'Content Strategy Workshop',
        type: 'workshop',
        date: { day: '12', month: 'Mar', year: '2026' },
        time: '1:00 PM EST',
        location: 'Virtual Event',
        description: 'Build a content strategy that drives engagement, leads, and revenue for your business.',
        image: '/images/common/woman-apron.png',
        icon: 'edit',
        slug: 'content-strategy-workshop'
    },
    {
        title: 'Data-Driven Marketing: Analytics Deep Dive',
        type: 'webinar',
        date: { day: '20', month: 'Mar', year: '2026' },
        time: '3:00 PM EST',
        location: 'Virtual Event',
        description: 'Transform raw data into actionable marketing insights with advanced analytics techniques.',
        image: '/images/common/growth-chart.png',
        icon: 'pieChart',
        slug: 'analytics-deep-dive'
    },
    {
        title: 'Digital Marketing Meetup - March',
        type: 'meetup',
        date: { day: '28', month: 'Mar', year: '2026' },
        time: '6:00 PM EST',
        location: 'San Francisco',
        description: 'Monthly networking event for digital marketing professionals. Food and drinks provided!',
        image: '/images/common/team-brainstorm.png',
        icon: 'users',
        slug: 'march-meetup'
    }
];

// Past events data
const pastEvents = [
    { title: 'E-commerce Growth Strategies', date: 'January 25, 2026', hasRecording: true },
    { title: 'Social Media Marketing in 2026', date: 'January 18, 2026', hasRecording: true },
    { title: 'PPC Optimization Workshop', date: 'January 10, 2026', hasRecording: true },
    { title: 'Brand Building Masterclass', date: 'December 15, 2025', hasRecording: true },
    { title: 'Marketing Automation 101', date: 'December 8, 2025', hasRecording: true },
    { title: 'Q4 Marketing Wrap-up', date: 'December 1, 2025', hasRecording: false },
    { title: 'Holiday Campaign Strategies', date: 'November 20, 2025', hasRecording: true },
    { title: 'Attribution Deep Dive', date: 'November 12, 2025', hasRecording: true }
];

// Featured event
const featuredEvent = {
    title: 'Digital Marketing Excellence Conference 2026',
    date: 'March 15-17, 2026',
    location: 'Las Vegas Convention Center',
    description: 'Join 2,000+ marketing professionals for three days of keynotes, workshops, and networking. Featuring 50+ speakers from leading brands and agencies sharing actionable strategies for growth.',
    speakers: '50+ Industry Leaders',
    attendees: '2,000+ Attendees Expected'
};

export function EventsContent() {
    return (
        <div className="events-page">
            {/* Hero Section */}
            <section className="events-hero">
                <div className="events-hero-bg">
                    <img
                        src="/images/common/team-brainstorm.png"
                        alt="Events Background"
                        className="object-cover"
                    />
                    <div className="events-hero-overlay"></div>
                </div>

                <div className="events-hero-container">
                    <div className="events-hero-content">
                        <span className="events-label">EVENTS & WEBINARS</span>
                        <h1 className="events-hero-title">
                            Learn, Connect, <span>Grow</span>
                        </h1>
                        <p className="events-hero-subtitle">
                            Join our webinars, workshops, and in-person events to stay ahead of marketing
                            trends, learn from experts, and connect with peers.
                        </p>
                    </div>
                </div>
            </section>

            {/* Featured Event */}
            <section className="events-featured">
                <div className="events-featured-container">
                    <div className="events-featured-card">
                        <div className="events-featured-content">
                            <span className="events-featured-badge">🌟 Featured Event</span>
                            <h2 className="events-featured-title">{featuredEvent.title}</h2>
                            <div className="events-featured-meta">
                                <span className="events-featured-meta-item">
                                    <Icon type="calendar" /> {featuredEvent.date}
                                </span>
                                <span className="events-featured-meta-item">
                                    <Icon type="location" /> {featuredEvent.location}
                                </span>
                            </div>
                            <p className="events-featured-desc">{featuredEvent.description}</p>
                            <div className="events-featured-meta">
                                <span className="events-featured-meta-item">
                                    <Icon type="mic" /> {featuredEvent.speakers}
                                </span>
                                <span className="events-featured-meta-item">
                                    <Icon type="users" /> {featuredEvent.attendees}
                                </span>
                            </div>
                            <Link href="/contact" className="events-featured-btn">
                                Reserve Your Spot <Icon type="arrowRight" />
                            </Link>
                        </div>
                        <div className="events-featured-visual">
                            <div className="events-featured-image">
                                <Icon type="calendar" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="events-upcoming">
                <div className="events-upcoming-container">
                    <div className="events-section-header">
                        <span className="events-label">UPCOMING</span>
                        <h2 className="events-section-title">Upcoming <span>Events</span></h2>
                        <p className="events-section-subtitle">
                            Register for our upcoming webinars, workshops, and in-person events.
                        </p>
                    </div>
                    <div className="events-grid">
                        {upcomingEvents.map((event, index) => (
                            <div key={index} className="events-card">
                                <div className="events-card-image">
                                    <img src={event.image} alt={event.title} className="events-card-bg" />
                                    <div className="events-card-icon">
                                        <Icon type={event.icon as any} />
                                    </div>
                                    <div className="events-card-date">
                                        <span className="events-card-date-day">{event.date.day}</span>
                                        <span className="events-card-date-month">{event.date.month}</span>
                                    </div>
                                </div>
                                <div className="events-card-content">
                                    <span className={`events-card-type ${event.type}`}>{event.type}</span>
                                    <h3>{event.title}</h3>
                                    <div className="events-card-meta">
                                        <span className="events-card-meta-item">
                                            <Icon type="clock" /> {event.time}
                                        </span>
                                        <span className="events-card-meta-item">
                                            <Icon type="location" /> {event.location}
                                        </span>
                                    </div>
                                    <Link href={`/events/${event.slug}`} className="events-card-btn">
                                        Register Now <Icon type="arrowRight" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Past Events */}
            <section className="events-past">
                <div className="events-past-container">
                    <div className="events-section-header">
                        <span className="events-label">ON-DEMAND</span>
                        <h2 className="events-section-title">Past Events & <span>Recordings</span></h2>
                        <p className="events-section-subtitle">
                            Missed an event? Watch recordings of our past webinars and workshops.
                        </p>
                    </div>
                    <div className="events-past-grid">
                        {pastEvents.map((event, index) => (
                            <div key={index} className="events-past-card">
                                <h4>{event.title}</h4>
                                <p className="events-past-date">{event.date}</p>
                                {event.hasRecording ? (
                                    <Link href={`/resources/recordings`} className="events-past-link">
                                        Watch Recording →
                                    </Link>
                                ) : (
                                    <span className="events-past-link" style={{ opacity: 0.5 }}>
                                        Recording Unavailable
                                    </span>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="events-newsletter">
                <div className="events-newsletter-container">
                    <h2>Never Miss an <span>Event</span></h2>
                    <p>
                        Subscribe to get notified about upcoming events, exclusive invites,
                        early access to recordings, and expert marketing insights directly to your inbox.
                    </p>
                    <form className="events-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input
                            type="email"
                            className="events-newsletter-input"
                            placeholder="Enter your email"
                            required
                        />
                        <button type="submit" className="events-newsletter-btn">
                            Subscribe
                        </button>
                    </form>
                </div>
            </section>
        </div>
    );
}

export default EventsContent;
