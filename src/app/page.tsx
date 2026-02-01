"use client";

import Image from "next/image";
import Link from "next/link";

const NavLink = ({ href, children, active = false }: { href: string; children: React.ReactNode; active?: boolean }) => (
  <Link href={href} className={`nav-link ${active ? 'active' : ''}`}>
    {children}
  </Link>
);

const SectionHeader = ({ label, title, subtext, light = false, center = true }: { label: string; title: string | React.ReactNode; subtext?: string; light?: boolean; center?: boolean }) => (
  <div className={`section-header ${center ? 'text-center' : 'text-left'}`}>
    <span className="section-label">{label}</span>
    <h2 className={`section-title ${light ? 'white' : ''}`}>{title}</h2>
    {subtext && <p className={`section-subtext ${light ? 'light' : ''}`}>{subtext}</p>}
  </div>
);

export default function Home() {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="container header-inner">
          <Link href="/" className="logo">
            <span style={{ color: '#E91E63' }}>O</span>NESKAI
          </Link>
          <nav className="nav desktop-only">
            <NavLink href="/about">About</NavLink>
            <NavLink href="/services" active>Services</NavLink>
            <NavLink href="/portfolio">Portfolio</NavLink>
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/careers">Careers</NavLink>
            <NavLink href="/faq">FAQ</NavLink>
          </nav>
          <div className="header-cta">
            <Link href="/contact" className="btn-talk">Get a Quote</Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">
                Transforming ideas, innovations, visions into <span style={{ color: '#E91E63' }}>digital excellence</span>
              </h1>
              <p className="hero-description">
                We empower businesses to transform for the future with advanced technology solutions and our IT services.
              </p>
              <Link href="/services" className="hero-btn">Explore</Link>
              <div className="hero-trust">
                <div className="avatar-stack">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="avatar">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="Trust" width={50} height={50} />
                    </div>
                  ))}
                </div>
                <span className="trust-text">Enabling digital evolution<br />for businesses</span>
              </div>
            </div>
            <div className="hero-image">
              <Image src="/images/hero-team-new.png" alt="Digital Strategy" width={600} height={500} priority />
            </div>
          </div>
        </section>

        {/* Trust Badges - Partnership Bar */}
        <section className="trust-badges-bar">
          <div className="container">
            <div className="badges-wrapper">
              <div className="badge-item">
                <span className="badge-icon">🏆</span>
                <div className="badge-text">
                  <span className="badge-title">Google</span>
                  <span className="badge-subtitle">Premier Partner</span>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">◎</span>
                <div className="badge-text">
                  <span className="badge-title">Meta</span>
                  <span className="badge-subtitle">Business Partner</span>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">⬡</span>
                <div className="badge-text">
                  <span className="badge-title">HubSpot</span>
                  <span className="badge-subtitle">Solutions Partner</span>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">★</span>
                <div className="badge-text">
                  <span className="badge-title">Clutch</span>
                  <span className="badge-subtitle">Top Agency 2024</span>
                </div>
              </div>
              <div className="badge-item">
                <span className="badge-icon">✓</span>
                <div className="badge-text">
                  <span className="badge-title">GoodFirms</span>
                  <span className="badge-subtitle">Verified Agency</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Awards & Recognition */}
        <section className="section awards-section bg-cream">
          <div className="container">
            <SectionHeader
              label="RECOGNITION"
              title="Awards & Certifications"
              subtext="Recognized by industry leaders for excellence in digital marketing and technology."
            />
            <div className="awards-grid">
              {[
                { icon: "🥇", title: "Clutch", subtitle: "Top B2B Company", year: "2024" },
                { icon: "⭐", title: "GoodFirms", subtitle: "Top Agency", year: "2024" },
                { icon: "🏅", title: "Google", subtitle: "Premier Partner", year: "2025" },
                { icon: "🏆", title: "Capterra", subtitle: "Best Value", year: "2024" },
              ].map((award, i) => (
                <div key={i} className="award-card">
                  <span className="award-icon">{award.icon}</span>
                  <span className="award-title">{award.title}</span>
                  <span className="award-subtitle">{award.subtitle}</span>
                  <span className="award-year">{award.year}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <section className="section clients-section bg-white">
          <div className="container">
            <SectionHeader
              label="TRUSTED BY"
              title="From Startups to Giants"
              subtext="We're the marketing strategists behind the brands you love."
            />
            <div className="clients-grid">
              {[
                "TechFlow", "GrowthEdge", "InnovateCo", "DataPrime",
                "CloudSync", "ScaleUp", "NextGen AI", "Quantum Labs",
                "Vertex Digital", "Pulse Media", "Apex Solutions", "Stellar Tech"
              ].map((client, i) => (
                <div key={i} className="client-logo">
                  <span>{client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack */}
        <section className="section tech-section">
          <div className="container">
            <SectionHeader
              label="OUR TECH STACK"
              title="Powered by Industry-Leading Tools"
              subtext="We leverage the best platforms and technologies to deliver exceptional results."
              light
            />
            <div className="tech-categories">
              <div className="tech-category">
                <h4 className="tech-category-title">Analytics & Tracking</h4>
                <div className="tech-logos">
                  {["Google Analytics", "GTM", "Hotjar", "Mixpanel"].map((tool, i) => (
                    <div key={i} className="tech-item">{tool}</div>
                  ))}
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">SEO & Content</h4>
                <div className="tech-logos">
                  {["SEMRush", "Ahrefs", "Moz", "Screaming Frog"].map((tool, i) => (
                    <div key={i} className="tech-item">{tool}</div>
                  ))}
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">Marketing Automation</h4>
                <div className="tech-logos">
                  {["HubSpot", "Mailchimp", "Klaviyo", "ActiveCampaign"].map((tool, i) => (
                    <div key={i} className="tech-item">{tool}</div>
                  ))}
                </div>
              </div>
              <div className="tech-category">
                <h4 className="tech-category-title">Project Management</h4>
                <div className="tech-logos">
                  {["ClickUp", "Asana", "Monday", "Notion"].map((tool, i) => (
                    <div key={i} className="tech-item">{tool}</div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Bar - Inspired by Top Agencies */}
        <section className="stats-bar">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">$2.5M+</span>
                <span className="stat-label">Client Revenue Generated</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">150+</span>
                <span className="stat-label">Projects Delivered</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">98%</span>
                <span className="stat-label">Client Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">5+</span>
                <span className="stat-label">Years of Excellence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="section bg-white services-section">
          <div className="container">
            <SectionHeader
              label="WHAT WE DO"
              title="Our services"
              subtext="Tailored solutions designed to meet your business needs and drive measurable results."
            />
            <div className="services-grid">
              {[
                { no: "01", title: "AI-Powered Marketing", desc: "Leverage AI agents, predictive analytics, and machine learning to automate campaigns and maximize ROI." },
                { no: "02", title: "SEO & AEO Strategy", desc: "Dominate search and AI answer engines with semantic SEO, featured snippets, and voice search optimization." },
                { no: "03", title: "Performance Marketing", desc: "Data-driven paid media across Google, Meta, TikTok, and programmatic platforms with real-time optimization." },
                { no: "04", title: "Content & Brand Strategy", desc: "Build authority with AI-assisted content creation, thought leadership, and omnichannel storytelling." },
                { no: "05", title: "Marketing Automation", desc: "HubSpot, Klaviyo, and custom CRM integrations for personalized customer journeys at scale." },
                { no: "06", title: "eCommerce Growth", desc: "Shopify, Amazon, and D2C strategies with conversion optimization and multi-channel attribution." },
                { no: "07", title: "Social Media & Influencer", desc: "Community building, UGC campaigns, and influencer partnerships across Instagram, TikTok, and LinkedIn." },
                { no: "08", title: "Web Development", desc: "Blazing-fast Next.js, headless CMS, and conversion-focused landing pages with A/B testing built-in." },
                { no: "09", title: "Analytics & BI", desc: "GA4, Looker Studio dashboards, and custom attribution modeling to prove marketing ROI." }
              ].map((service, i) => (
                <div key={i} className="service-card">
                  <span className="service-no">{service.no}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-desc">{service.desc}</p>
                  <Link href="/services" className="service-link">Learn more →</Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Results Section - Inspired by Thrive/WebFX */}
        <section className="section results-section">
          <div className="container">
            <SectionHeader
              label="CLIENT SUCCESS"
              title="Results that speak for themselves"
              subtext="We don't just promise results—we deliver measurable growth for every client."
              light
            />
            <div className="results-grid">
              {[
                { metric: "320%", label: "Increase in Organic Traffic", client: "E-commerce Client" },
                { metric: "45%", label: "Improvement in Marketing ROI", client: "SaaS Startup" },
                { metric: "2.5x", label: "Lead Generation Growth", client: "B2B Services" },
                { metric: "60%", label: "Reduction in Ad Spend Waste", client: "Retail Brand" }
              ].map((result, i) => (
                <div key={i} className="result-card">
                  <span className="result-metric">{result.metric}</span>
                  <span className="result-label">{result.label}</span>
                  <span className="result-client">{result.client}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="growth-section">
          <div className="container growth-grid">
            <div className="growth-content section">
              <SectionHeader
                label="WHY CHOOSE US"
                title="We help businesses to drive growth"
                center={false}
              />
              <p className="section-subtext">
                Our team of experts works closely with you to understand your goals and deliver solutions that matter.
              </p>
              <Link href="/about" className="hero-btn" style={{ marginTop: '20px' }}>Start now</Link>
            </div>
            <div className="growth-visual">
              {[
                { title: "Fast Track", icon: "🚀", desc: "Accelerated development cycles for faster time-to-market." },
                { title: "Automated", icon: "⚙️", desc: "Smart workflows that reduce manual effort and errors." },
                { title: "Talent", icon: "💎", desc: "Access to top-tier expertise in design and engineering." },
                { title: "Scalable", icon: "📈", desc: "Infrastructure that grows seamlessly with your business." }
              ].map((item, i) => (
                <div key={i} className="growth-card">
                  <div className="growth-icon" style={{ fontSize: '24px' }}>{item.icon}</div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="section bg-white">
          <div className="container">
            <SectionHeader label="OUR PROCESS" title="Our 4-step approach" />
            <div className="approach-grid">
              {[
                { no: "01", title: "Discovery", desc: "We deep dive into your business to understand your challenges and opportunities." },
                { no: "02", title: "Analysis & Planning", desc: "Developing a comprehensive strategy and technical roadmap for success." },
                { no: "03", title: "Execution and setup", desc: "Building and deploying your solution with precision and quality." },
                { no: "04", title: "Reporting and optimization", desc: "Continuous monitoring and improvements to ensure peak performance." }
              ].map((step, i) => (
                <div key={i} className="approach-step">
                  <span className="approach-no">{step.no}</span>
                  <h3 className="approach-title">{step.title}</h3>
                  <p className="approach-desc">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section bg-cream">
          <div className="container">
            <SectionHeader label="OUR TEAM" title="Our key people" />
            <div className="team-grid">
              {[
                { name: "Arjun Randhawa", role: "Founder & CEO", img: "/images/team-member-1.png" },
                { name: "Sameer S.", role: "CTO & Senior Developer", img: "/images/team-member-2.png" },
                { name: "Amit K.", role: "Operations Head", img: "/images/team-member-3.png" }
              ].map((member, i) => (
                <div key={i} className="team-card">
                  <Image src={member.img} alt={member.name} width={400} height={500} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  <div className="team-info">
                    <p className="team-name">{member.name}</p>
                    <p className="team-role">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Transition CTA Section */}
        <section className="cta-banner">
          <div className="cta-content container">
            <span className="section-label" style={{ color: 'white', opacity: 0.8 }}>GET STARTED</span>
            <h2 className="section-title white" style={{ fontSize: '40px' }}>Transform your business with technology</h2>
            <p className="section-subtext light">
              Leverage our modern stack and strategic thinking to stay ahead of the competition.
              Our experts are ready to help you navigate your digital transformation journey.
            </p>
            <Link href="/contact" className="cta-btn">Contact Us</Link>
          </div>
          <div className="cta-image">
            <Image src="/images/woman-apron.png" alt="Business Transformation" width={600} height={400} />
          </div>
        </section>

        {/* Testimonials */}
        <section className="section bg-white">
          <div className="container">
            <SectionHeader label="TESTIMONIALS" title="What our clients say" />
            <div className="testi-grid">
              {[
                { name: "M. Rodriguez", role: "CEO, TechFlow", text: "The team at Oneskai helped us automate our entire workflow, saving us hundreds of hours and improving accuracy significantly." },
                { name: "J. Doe", role: "MD, GrowthEdge", text: "Their expertise in data analytics gave us insights we never had before. Our marketing ROI improved by 45% in just three months." },
                { name: "S. Smith", role: "Owner, Bloom Retail", text: "Oneskai is our go-to partner for all things digital. They truly understand the needs of small businesses in a digital world." }
              ].map((testi, i) => (
                <div key={i} className="testi-card">
                  <p className="testi-text">"{testi.text}"</p>
                  <div className="testi-author">
                    <div className="testi-avatar">
                      <Image src={`https://i.pravatar.cc/100?img=${i + 20}`} alt={testi.name} width={40} height={40} className="round" />
                    </div>
                    <div>
                      <p style={{ fontWeight: 700 }}>{testi.name}</p>
                      <p style={{ fontSize: '12px', color: '#666' }}>{testi.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Blog Insights */}
        <section className="section bg-cream">
          <div className="container">
            <SectionHeader
              label="OUR LATEST ARTICLES"
              title={<span>Stay updated with insights<br />Industry trends and tips</span>}
            />
            <div className="blog-grid">
              {[
                { cat: "TECHNOLOGY", title: "The importance of customer data in the digital age", date: "Jan 28, 2024" },
                { cat: "DEVELOPMENT", title: "How to choose the right tech stack for your project", date: "Jan 15, 2024" },
                { cat: "BUSINESS", title: "Why small businesses should invest in automation now", date: "Dec 30, 2023" },
                { cat: "AI & TECH", title: "The role of AI in digital transformation strategies", date: "Dec 12, 2023" },
                { cat: "SECURITY", title: "Cybersecurity threats to watch out for in 2024", date: "Nov 25, 2023" },
                { cat: "CLOUD", title: "Building a scalable infrastructure for growth", date: "Nov 05, 2023" }
              ].map((blog, i) => (
                <div key={i} className="blog-item">
                  <Image src={`/images/blog-${(i % 3) + 1}.png`} alt={blog.title} width={120} height={120} className="blog-img" />
                  <div>
                    <span className="blog-cat">{blog.cat}</span>
                    <h4 className="blog-title">{blog.title}</h4>
                    <p className="blog-date">{blog.date} • 5 min read</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="newsletter-bar">
            <h2>Start your business transformation today!</h2>
            <div style={{ display: 'flex', gap: '15px' }}>
              <Link href="/services" className="cta-btn" style={{ background: 'transparent', border: '1px solid white', color: 'white' }}>Our Services</Link>
              <Link href="/contact" className="cta-btn">Get Started</Link>
            </div>
          </div>
          <div className="footer-columns">
            <div className="footer-col">
              <Link href="/" className="logo" style={{ color: 'white', marginBottom: '20px', display: 'block' }}>
                <span style={{ color: '#E91E63' }}>O</span>NESKAI
              </Link>
              <p style={{ color: '#888', maxWidth: '250px' }}>
                We empower businesses with digital solutions that drive results and foster growth.
              </p>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li>Digital Strategy</li>
                <li>Development</li>
                <li>Design</li>
                <li>Ecommerce</li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Agency</h5>
              <ul>
                <li>About us</li>
                <li>Process</li>
                <li>The Team</li>
                <li>Careers</li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Resources</h5>
              <ul>
                <li>Blog</li>
                <li>News</li>
                <li>Events</li>
                <li>Case Studies</li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Get in touch</h5>
              <p style={{ color: '#888', marginBottom: '15px' }}>hello@oneskai.com</p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['tw', 'fb', 'li', 'ig'].map(s => <span key={s} style={{ color: '#888' }}>{s}</span>)}
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2024 Oneskai Digital. All rights reserved.</p>
            <div style={{ display: 'flex', gap: '20px' }}>
              <span>Privacy Policy</span>
              <span>Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
