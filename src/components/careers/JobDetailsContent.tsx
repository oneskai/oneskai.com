'use client';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/careers-page.css';

interface JobOpening {
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    slug: string;
    description: string;
    responsibilities: string[];
    qualifications: string[];
}

const jobDetails: Record<string, JobOpening> = {
    'marketing-research-analyst': {
        title: 'Marketing Research Analyst (Entry Level)',
        department: 'Market Research',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '0-1 year',
        slug: 'marketing-research-analyst',
        description: 'As a Marketing Research Analyst Intern/Associate, you will be at the forefront of our data-driven marketing strategies. You will work closely with our strategy team to uncover market trends, analyze competitor movements, and identify growth opportunities for our global clients.',
        responsibilities: [
            'Conduct comprehensive market research on industry trends and emerging technologies.',
            'Maintain and update competitor analysis databases.',
            'Assist in the preparation of research reports and strategic presentations.',
            'Analyze consumer behavior patterns using various digital analytics tools.',
            'Support the strategy team in developing data-backed marketing hypotheses.'
        ],
        qualifications: [
            'Recent graduate or final year student in Marketing, Business, or related fields.',
            'Strong analytical mindset with a passion for data storytelling.',
            'Proficient in Microsoft Excel and Google Sheets.',
            'Excellent written and verbal communication skills.',
            'Familiarity with digital marketing concepts is a plus.'
        ]
    },
    'junior-content-marketer': {
        title: 'Junior Content Marketer',
        department: 'Content & Creative',
        location: 'Remote',
        type: 'Full-time',
        experience: '0-2 years',
        slug: 'junior-content-marketer',
        description: 'We are looking for a creative and passionate Junior Content Marketer to help us craft compelling stories. In this role, you will help create high-impact content across multiple platforms, from blog posts and whitepapers to social media and video scripts.',
        responsibilities: [
            'Draft engaging blog posts, articles, and newsletter content.',
            'Create social media copy that aligns with brand voice and drives engagement.',
            'Support the production of long-form content like e-books and case studies.',
            'Collaborate with designers to create visual content for digital campaigns.',
            'Assist with content distribution and basic SEO optimization.'
        ],
        qualifications: [
            'Exceptional writing and editing skills in English.',
            'A creative portfolio or a collection of writing samples.',
            'Background in English, Journalism, Marketing, or Communications.',
            'Ability to meet deadlines while maintaining high quality standards.',
            'Basics of SEO and social media platform management.'
        ]
    },
    'senior-seo-strategist': {
        title: 'Senior SEO Strategist',
        department: 'Search & Organic',
        location: 'Remote / Hybrid',
        type: 'Full-time',
        experience: '5+ years',
        slug: 'senior-seo-strategist',
        description: 'We are seeking a seasoned SEO expert to lead our high-stakes organic growth projects. You will be responsible for developing and executing complex SEO strategies for enterprise-level clients, driving massive organic traffic and revenue growth.',
        responsibilities: [
            'Develop and lead comprehensive SEO strategies (Technical, Content, Off-site).',
            'Perform deep technical SEO audits and provide actionable recommendations.',
            'Conduct high-level keyword research and content gap analysis.',
            'Mentor junior SEO team members and oversee project delivery quality.',
            'Analyze performance data and present ROI reports to C-level stakeholders.'
        ],
        qualifications: [
            '5+ years of proven experience in SEO, preferably in an agency environment.',
            'Expert knowledge of SEO tools (Ahrefs, Semrush, Screaming Frog, GSC).',
            'Strong understanding of HTML, CSS, and how JavaScript affects SEO.',
            'Demonstrated ability to drive organic growth for large-scale websites.',
            'Excellent strategic thinking and client management skills.'
        ]
    }
};

export function JobDetailsContent({ slug }: { slug: string }) {
    const job = jobDetails[slug];

    if (!job) {
        return notFound();
    }

    return (
        <div className="job-details-page">
            <section className="job-hero section-dark">
                <div className="container">
                    <Link href="/careers" className="back-link">
                        <Icon type="arrowLeft" /> Back to Careers
                    </Link>
                    <div className="job-hero-content">
                        <span className="careers-department-badge">{job.department}</span>
                        <h1>{job.title}</h1>
                        <div className="job-meta-row">
                            <div className="meta-item">
                                <Icon type="location" /> {job.location}
                            </div>
                            <div className="meta-item">
                                <Icon type="clock" /> {job.type}
                            </div>
                            <div className="meta-item">
                                <Icon type="briefcase" /> {job.experience}
                            </div>
                        </div>
                        <a href="#apply" className="careers-hero-btn">
                            Apply for this position <Icon type="arrowRight" />
                        </a>
                    </div>
                </div>
            </section>

            <section className="job-description-section">
                <div className="container">
                    <div className="job-content-grid">
                        <div className="job-main-content">
                            <div className="job-text-block">
                                <h2>About the Role</h2>
                                <p>{job.description}</p>
                            </div>

                            <div className="job-text-block">
                                <h2>Responsibilities</h2>
                                <ul>
                                    {job.responsibilities.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="job-text-block">
                                <h2>Qualifications</h2>
                                <ul>
                                    {job.qualifications.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="job-sidebar">
                            <div className="apply-card" id="apply">
                                <h3>Interested?</h3>
                                <p>Join our mission to enable digital evolution for businesses worldwide.</p>
                                <form className="job-apply-form">
                                    <div className="form-group">
                                        <input type="text" placeholder="Full Name" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" placeholder="Email Address" required />
                                    </div>
                                    <div className="form-group">
                                        <input type="text" placeholder="LinkedIn Profile / Portfolio Link" required />
                                    </div>
                                    <div className="form-group">
                                        <label className="file-upload">
                                            <span>Upload CV / Resume (PDF)</span>
                                            <input type="file" accept=".pdf" required />
                                        </label>
                                    </div>
                                    <button type="submit" className="careers-job-btn" style={{ width: '100%', justifyContent: 'center' }}>
                                        Submit Application <Icon type="arrowRight" />
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
