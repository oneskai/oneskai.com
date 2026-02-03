'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/ui/Icon';
import '@/styles/faq-page.css';

// FAQ interface
interface FAQ {
    question: string;
    answer: string;
}

interface FAQSection {
    id: string;
    title: string;
    icon: string;
    color: string;
    faqs: FAQ[];
}

// Comprehensive FAQ data organized by sections
const faqSections: FAQSection[] = [
    {
        id: 'general',
        title: 'General Questions',
        icon: '❓',
        color: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
        faqs: [
            {
                question: 'What is Oneskai and what services do you offer?',
                answer: 'Oneskai is a full-service digital marketing agency specializing in search engine optimization (SEO), pay-per-click advertising (PPC), social media marketing, content marketing, web design, branding, and marketing analytics. We help businesses of all sizes grow their online presence, generate qualified leads, and increase revenue through data-driven digital strategies.'
            },
            {
                question: 'How is Oneskai different from other digital marketing agencies?',
                answer: 'What sets Oneskai apart is our data-first approach and proven methodology. We don\'t believe in guesswork—every strategy is backed by analytics and measurable KPIs. Our team consists of certified specialists in SEO, PPC, and analytics who bring 10+ years of experience. We also offer transparent reporting, dedicated account managers, and a focus on ROI rather than vanity metrics.'
            },
            {
                question: 'What industries do you work with?',
                answer: 'We work with businesses across diverse industries including e-commerce, SaaS, healthcare, finance, real estate, education, professional services, manufacturing, hospitality, and retail. Our strategies are customized to meet the unique challenges and opportunities of each industry, ensuring relevant and effective results.'
            },
            {
                question: 'Do you work with small businesses or only enterprises?',
                answer: 'We work with businesses of all sizes—from startups and small businesses to mid-market companies and enterprises. Our service packages are scalable to match your budget and growth stage. We offer tailored solutions whether you\'re just starting your digital marketing journey or looking to scale existing efforts.'
            },
            {
                question: 'Where is Oneskai located and do you work with international clients?',
                answer: 'Oneskai operates as a remote-first company with team members across multiple countries. We work with clients globally, including the United States, United Kingdom, Canada, Australia, Europe, and Asia. Our distributed team allows us to provide support across time zones and understand local market nuances.'
            },
            {
                question: 'What is your company\'s mission and core values?',
                answer: 'Our mission is to empower businesses to achieve undeniable growth through strategic digital marketing. Our core values include: data-driven decision making, transparency in reporting and communication, continuous innovation, client success as our success, and building long-term partnerships rather than transactional relationships.'
            }
        ]
    },
    {
        id: 'seo',
        title: 'SEO & Organic Search',
        icon: '🔍',
        color: 'linear-gradient(135deg, #10b981, #059669)',
        faqs: [
            {
                question: 'What is SEO and why is it important for my business?',
                answer: 'SEO (Search Engine Optimization) is the process of optimizing your website to rank higher in search engine results pages (SERPs) for relevant keywords. It\'s important because 93% of online experiences begin with a search engine, and organic search drives 53% of all website traffic. Unlike paid advertising, SEO provides sustainable, long-term visibility and typically delivers higher trust and conversion rates.'
            },
            {
                question: 'How long does it take to see results from SEO?',
                answer: 'SEO is a long-term investment. Typically, you\'ll start seeing initial improvements in rankings within 3-6 months, with more significant results in 6-12 months. However, the timeline depends on factors like your current website authority, competition level, content quality, and the resources invested. We provide monthly progress reports so you can track improvements along the way.'
            },
            {
                question: 'What is the difference between on-page SEO and off-page SEO?',
                answer: 'On-page SEO refers to optimizations made directly on your website, including content optimization, meta tags, header structure, internal linking, page speed, and mobile responsiveness. Off-page SEO involves activities outside your website that impact rankings, primarily link building, brand mentions, social signals, and local citations. Both are essential components of a comprehensive SEO strategy.'
            },
            {
                question: 'What is technical SEO and why does it matter?',
                answer: 'Technical SEO focuses on the backend elements that affect search engine crawling and indexing. This includes site speed optimization, mobile-friendliness, XML sitemaps, robots.txt, structured data markup (schema), canonical tags, HTTPS security, Core Web Vitals, and crawl error fixes. Without proper technical SEO, even great content may not rank because search engines can\'t properly access or understand your site.'
            },
            {
                question: 'What is local SEO and who needs it?',
                answer: 'Local SEO optimizes your online presence to attract customers from local searches. It\'s essential for businesses with physical locations or serving specific geographic areas. Key elements include Google Business Profile optimization, local keyword targeting, NAP (Name, Address, Phone) consistency, local link building, and review management. If customers search "near me" or include city names in their searches, you need local SEO.'
            },
            {
                question: 'How do you conduct keyword research for SEO?',
                answer: 'Our keyword research process involves: analyzing your business goals and target audience, using tools like SEMrush, Ahrefs, and Google Keyword Planner to identify relevant terms, evaluating search volume, keyword difficulty, and search intent, analyzing competitor keywords, grouping keywords by topic clusters and funnel stage, and prioritizing based on opportunity and business impact. We focus on keywords that drive conversions, not just traffic.'
            },
            {
                question: 'What is E-E-A-T and how does it affect SEO?',
                answer: 'E-E-A-T stands for Experience, Expertise, Authoritativeness, and Trustworthiness. It\'s Google\'s framework for evaluating content quality, especially for YMYL (Your Money Your Life) topics like health, finance, and legal advice. To improve E-E-A-T, we ensure content is written by qualified authors, cite credible sources, display trust signals, maintain accurate information, and build authoritative backlinks.'
            },
            {
                question: 'Do you guarantee first-page rankings on Google?',
                answer: 'No reputable SEO agency can guarantee specific rankings because Google\'s algorithm considers 200+ factors and updates regularly. Beware of agencies making such promises. What we do guarantee is implementing best practices, transparent reporting, measurable improvements in key metrics, and a commitment to achieving optimal results within ethical guidelines. Our track record shows consistent ranking improvements for our clients.'
            },
            {
                question: 'What is a backlink and why are backlinks important for SEO?',
                answer: 'A backlink is a link from another website to yours. Backlinks are crucial because they act as "votes of confidence" from other sites, signaling to search engines that your content is valuable and trustworthy. Quality matters more than quantity—a single link from an authoritative site like Forbes is worth more than dozens of links from low-quality directories. We focus on earning natural, relevant backlinks through content marketing and digital PR.'
            },
            {
                question: 'How do you measure SEO success and report results?',
                answer: 'We track and report on key SEO metrics including: organic traffic growth, keyword rankings (tracked weekly), click-through rates (CTR) from search, organic conversions and revenue, domain authority improvements, backlink profile growth, technical health scores, and Core Web Vitals. You receive monthly reports with clear visualizations and actionable insights, plus access to a real-time dashboard.'
            }
        ]
    },
    {
        id: 'aeo',
        title: 'Answer Engine Optimization (AEO)',
        icon: '🤖',
        color: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
        faqs: [
            {
                question: 'What is Answer Engine Optimization (AEO)?',
                answer: 'Answer Engine Optimization (AEO) is the practice of optimizing content to appear in AI-powered answer engines, voice assistants, and featured snippets. As search evolves beyond traditional links to providing direct answers (through Google\'s AI Overviews, ChatGPT, Siri, Alexa, etc.), AEO ensures your content is the source these systems cite and reference. It\'s the next evolution beyond traditional SEO.'
            },
            {
                question: 'How is AEO different from traditional SEO?',
                answer: 'While SEO focuses on ranking web pages in search results, AEO focuses on being the direct answer to user questions. Key differences include: AEO prioritizes question-and-answer formatted content, focuses on featured snippets and Position Zero, optimizes for voice search queries, uses structured data extensively, emphasizes concise and authoritative answers, and targets AI training data inclusion. Both work together but require different optimization approaches.'
            },
            {
                question: 'What is a featured snippet and how do I get one?',
                answer: 'A featured snippet is the highlighted answer box that appears at the top of Google search results (Position Zero). To optimize for featured snippets: target question-based queries, provide clear and concise answers (40-60 words for paragraph snippets), use proper heading structure (H2, H3), include lists and tables where appropriate, add schema markup, and ensure your content is authoritative. We analyze which snippets you can win and optimize content accordingly.'
            },
            {
                question: 'How do you optimize for voice search?',
                answer: 'Voice search optimization involves: targeting conversational, long-tail keywords, answering questions directly and concisely, optimizing for local searches (many voice queries are local), improving page speed for quick responses, using natural language in content, implementing FAQ schema markup, and ensuring mobile-friendliness. Voice queries are typically longer and more conversational than typed searches.'
            },
            {
                question: 'What role does schema markup play in AEO?',
                answer: 'Schema markup (structured data) is critical for AEO because it helps search engines and AI systems understand your content\'s context and meaning. Key schema types include: FAQPage for Q&A content, HowTo for instructional content, Article and NewsArticle for editorial content, Product for e-commerce, LocalBusiness for local SEO, and Organization for brand information. Proper schema implementation increases chances of appearing in rich results and AI answers.'
            },
            {
                question: 'What is Google\'s AI Overview and how does it impact search?',
                answer: 'Google\'s AI Overview (formerly SGE - Search Generative Experience) is an AI-powered feature that provides comprehensive answers at the top of search results. It synthesizes information from multiple sources to answer complex queries. To appear in AI Overviews: create authoritative, well-researched content, cover topics comprehensively, cite sources and demonstrate expertise, maintain strong E-E-A-T signals, and use structured data. This represents the future of search.'
            },
            {
                question: 'How do you measure AEO success?',
                answer: 'We measure AEO success through: featured snippet acquisitions and tracking, voice search visibility audits, AI citation monitoring (being cited by ChatGPT, Bard, etc.), zero-click search impression data, brand mention tracking in AI responses, schema validation and rich result appearances, and position tracking for question-based queries. These metrics help quantify your visibility in the answer economy.'
            }
        ]
    },
    {
        id: 'geo',
        title: 'Generative Engine Optimization (GEO)',
        icon: '✨',
        color: 'linear-gradient(135deg, #f59e0b, #d97706)',
        faqs: [
            {
                question: 'What is Generative Engine Optimization (GEO)?',
                answer: 'Generative Engine Optimization (GEO) is an emerging discipline focused on optimizing content to be cited and referenced by AI-powered generative engines like ChatGPT, Google Gemini, Perplexity, and other large language models (LLMs). As users increasingly turn to AI for answers, GEO ensures your brand and content become training data sources and cited references in AI-generated responses.'
            },
            {
                question: 'Why is GEO important for the future of digital marketing?',
                answer: 'GEO is critical because AI is fundamentally changing how people find information. Studies show that up to 30% of searches may shift to AI chatbots. If your content isn\'t being cited by AI systems, you\'re becoming invisible to a growing segment of your audience. GEO future-proofs your digital presence by ensuring visibility in both traditional search and AI-powered discovery.'
            },
            {
                question: 'How do you optimize content for AI language models?',
                answer: 'Optimizing for AI involves: creating authoritative, factual content that LLMs want to reference, using clear structure and formatting, providing unique data and original research, building strong brand authority and citations, ensuring content is widely published and linked, maintaining consistency in brand messaging and facts, and creating content that answers specific questions definitively. AI systems favor trustworthy, well-cited sources.'
            },
            {
                question: 'What is the relationship between SEO, AEO, and GEO?',
                answer: 'Think of these as layers of optimization: SEO (foundational) focuses on ranking in traditional search results, AEO (answer layer) focuses on being the direct answer in featured snippets and voice search, and GEO (AI layer) focuses on being cited by generative AI systems. They\'re interconnected—strong SEO creates the foundation for AEO success, and both contribute to GEO visibility. A comprehensive strategy addresses all three.'
            },
            {
                question: 'How do I know if AI systems are citing my content?',
                answer: 'We use several methods to track AI citations: monitoring brand mentions in AI responses through systematic testing, using tools that track AI model references, analyzing referral traffic from AI platforms, conducting regular audits asking AI systems about your industry and tracking citations, and monitoring Perplexity and other AI answer engines for brand visibility. This intelligence informs ongoing optimization.'
            },
            {
                question: 'What content formats work best for GEO?',
                answer: 'AI systems favor: well-structured articles with clear headings, original research and data that can be cited, comprehensive guides and definitive resources, FAQ content with clear questions and answers, content with proper author attribution and expertise signals, factual content that can be verified, and evergreen content that remains relevant. Quality, accuracy, and authority are paramount for GEO success.'
            }
        ]
    },
    {
        id: 'ppc',
        title: 'PPC & Paid Advertising',
        icon: '📢',
        color: 'linear-gradient(135deg, #ef4444, #dc2626)',
        faqs: [
            {
                question: 'What is PPC advertising and how does it work?',
                answer: 'PPC (Pay-Per-Click) advertising is a digital marketing model where you pay each time someone clicks your ad. Major platforms include Google Ads, Microsoft Ads, Meta Ads (Facebook/Instagram), LinkedIn Ads, and TikTok Ads. You bid on keywords or audience segments, and ads appear to users matching your targeting criteria. PPC provides immediate visibility and measurable results, complementing organic marketing efforts.'
            },
            {
                question: 'What is the difference between PPC and SEO?',
                answer: 'The main differences are: PPC provides immediate visibility (within hours) while SEO takes months; PPC requires ongoing ad spend while SEO traffic is "free" after ranking; PPC appears labeled as "Ad" while SEO appears as organic results; SEO typically has higher click-through rates and trust; PPC offers precise targeting options; and both have different placement in search results. Most successful strategies combine both for maximum visibility.'
            },
            {
                question: 'How much should I budget for PPC advertising?',
                answer: 'PPC budgets vary based on industry, competition, and goals. We recommend starting with a minimum of $1,500-$3,000/month for meaningful data and results. Cost-per-click varies widely—legal and insurance keywords can exceed $50/click while others may be $1-5. We help determine optimal budgets based on your customer acquisition cost goals and lifetime value calculations.'
            },
            {
                question: 'What is Quality Score and why does it matter?',
                answer: 'Quality Score is Google\'s rating (1-10) of your ads\' relevance and quality. It\'s based on expected click-through rate, ad relevance, and landing page experience. Higher Quality Scores result in: lower cost-per-click, better ad positions, and improved ROI. We optimize Quality Scores through tight keyword-ad alignment, compelling ad copy, and conversion-optimized landing pages.'
            },
            {
                question: 'What is remarketing/retargeting?',
                answer: 'Remarketing (or retargeting) displays ads to users who previously visited your website or engaged with your content. It\'s highly effective because these users are already familiar with your brand. Types include: site visitors, cart abandoners, past customers, video viewers, and email list matches. Remarketing typically delivers 2-3x higher conversion rates than prospecting campaigns.'
            },
            {
                question: 'What is the difference between Google Ads and Meta Ads?',
                answer: 'Google Ads targets users with search intent—people actively looking for products or services. Meta Ads (Facebook/Instagram) targets users based on demographics, interests, and behaviors—great for awareness and demand generation. Google is generally better for bottom-funnel conversions; Meta excels at top-funnel awareness and visual products. We often recommend both as part of a full-funnel strategy.'
            },
            {
                question: 'How do you measure PPC campaign success?',
                answer: 'Key PPC metrics we track include: Return on Ad Spend (ROAS), Cost Per Acquisition (CPA), Click-Through Rate (CTR), Conversion Rate, Quality Score, Impression Share, Cost Per Click (CPC), and total conversions and revenue. We provide weekly reports and optimize based on data to continuously improve performance and ROI.'
            },
            {
                question: 'What is programmatic advertising?',
                answer: 'Programmatic advertising uses AI and real-time bidding (RTB) to automate ad buying across millions of websites, apps, and digital platforms. It allows precise targeting, efficient spending, and scale that manual buying can\'t achieve. Programmatic includes display, video, native, and connected TV advertising. We use platforms like The Trade Desk and DV360 for advanced programmatic campaigns.'
            }
        ]
    },
    {
        id: 'social',
        title: 'Social Media Marketing',
        icon: '📱',
        color: 'linear-gradient(135deg, #ec4899, #db2777)',
        faqs: [
            {
                question: 'Which social media platforms should my business be on?',
                answer: 'Platform selection depends on your audience and goals. B2B companies typically focus on LinkedIn, X (Twitter), and YouTube. B2C brands prioritize Instagram, Facebook, TikTok, and Pinterest. E-commerce excels on Instagram and Pinterest. Local businesses need Facebook. Rather than being everywhere, we recommend focusing on 2-3 platforms where your audience is most active and engaged.'
            },
            {
                question: 'What is the difference between organic social media and paid social?',
                answer: 'Organic social involves posting content without paid promotion—building community and engagement naturally. Paid social uses advertising budgets to reach specific audiences beyond your followers. Organic builds long-term brand equity and community; paid delivers immediate reach and targeting precision. Most successful strategies combine both, using organic for community building and paid for scale and specific campaign objectives.'
            },
            {
                question: 'How often should I post on social media?',
                answer: 'Posting frequency varies by platform: LinkedIn (1-2x daily), Instagram (1-2x daily + Stories), Facebook (1x daily), X/Twitter (3-5x daily), TikTok (1-3x daily), and Pinterest (5-15 pins daily). Quality matters more than quantity. Consistency is key—it\'s better to post 3 quality posts weekly than 7 mediocre ones. We create content calendars that balance frequency with content quality.'
            },
            {
                question: 'What is influencer marketing and how does it work?',
                answer: 'Influencer marketing partners with individuals who have engaged audiences to promote your brand. Types include mega-influencers (1M+ followers), macro (100K-1M), micro (10K-100K), and nano (1K-10K). Micro and nano influencers often deliver higher engagement and authenticity. We handle influencer identification, outreach, campaign management, and performance tracking to ensure positive ROI.'
            },
            {
                question: 'How do you measure social media ROI?',
                answer: 'We measure social media success through: engagement rate (likes, comments, shares), reach and impressions, follower growth, click-through rate to website, conversion tracking (using UTM parameters), sentiment analysis, share of voice vs. competitors, and revenue attribution for paid social. We set up proper tracking to connect social activities to business outcomes.'
            },
            {
                question: 'What is social listening and why is it important?',
                answer: 'Social listening monitors mentions of your brand, competitors, and industry across social platforms and the web. It helps you: understand customer sentiment, identify trending topics, catch potential PR issues early, discover content opportunities, track competitor activities, and gather product feedback. We use tools like Sprout Social and Brandwatch for comprehensive social listening.'
            }
        ]
    },
    {
        id: 'analytics',
        title: 'Analytics & Reporting',
        icon: '📊',
        color: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
        faqs: [
            {
                question: 'What is Google Analytics 4 and how is it different from Universal Analytics?',
                answer: 'Google Analytics 4 (GA4) is Google\'s current analytics platform, replacing Universal Analytics. Key differences: GA4 is event-based (not session-based), offers better cross-device tracking, has enhanced privacy features, uses machine learning for predictive insights, and provides better integration with Google Ads. We help with GA4 migration, setup, and customization to ensure accurate data collection.'
            },
            {
                question: 'What marketing metrics should I track?',
                answer: 'Key metrics depend on your goals but typically include: traffic sources and volume, conversion rate, cost per acquisition (CPA), customer lifetime value (LTV), return on ad spend (ROAS), organic rankings, engagement rates, email open and click rates, and revenue attribution. We focus on metrics that connect to business outcomes rather than vanity metrics.'
            },
            {
                question: 'What is marketing attribution and why is it complex?',
                answer: 'Attribution determines which marketing touchpoints deserve credit for conversions. It\'s complex because customers interact with multiple channels before converting. Attribution models include: first-touch, last-touch, linear, time-decay, position-based, and data-driven. With privacy changes limiting tracking, multi-touch attribution requires sophisticated tools. We implement attribution solutions that give you clearer insight into what\'s driving results.'
            },
            {
                question: 'How do you set up conversion tracking?',
                answer: 'Proper conversion tracking involves: defining key conversion actions (purchases, leads, sign-ups), implementing Google Analytics 4 event tracking, setting up Google Ads conversion tracking, implementing Meta Pixel and CAPI, adding LinkedIn Insight Tag, using Google Tag Manager for centralized management, and configuring server-side tracking for accuracy. We audit and fix tracking issues to ensure data accuracy.'
            },
            {
                question: 'What is a marketing dashboard and what should it include?',
                answer: 'A marketing dashboard visualizes key performance data in one place. Effective dashboards include: executive summary with top KPIs, traffic and source breakdown, conversion performance, campaign-level metrics, trend analysis, goal progress, and actionable insights. We build custom dashboards using Looker Studio (Data Studio). We also offer what we call Power BI for advanced visualization that update in real-time.'
            },
            {
                question: 'How often should I review marketing analytics?',
                answer: 'Review frequency depends on the metric: daily monitoring for paid campaigns and anomalies, weekly reviews for performance optimization, monthly deep-dives for strategy and reporting, and quarterly analysis for strategic planning. We provide automated alerts for significant changes and schedule regular review sessions to ensure data-driven decision making.'
            }
        ]
    },
    {
        id: 'pricing',
        title: 'Pricing & Process',
        icon: '💰',
        color: 'linear-gradient(135deg, #22c55e, #16a34a)',
        faqs: [
            {
                question: 'How much do your digital marketing services cost?',
                answer: 'Our pricing varies based on scope and services. SEO packages typically range from $2,000-$10,000/month. PPC management ranges from $1,500-$5,000/month plus ad spend. Social media management ranges from $1,500-$5,000/month. Full-service retainers for comprehensive marketing start at $5,000/month. We provide custom proposals based on your specific needs and goals after a discovery call.'
            },
            {
                question: 'Do you require long-term contracts?',
                answer: 'For SEO services, we recommend a minimum 6-month commitment because SEO requires time to show results. For PPC and social media, we offer month-to-month arrangements after an initial 3-month period. We believe in earning your business through results rather than locking you into contracts. All agreements include 30-day termination clauses after the initial period.'
            },
            {
                question: 'What is your onboarding process like?',
                answer: 'Our onboarding typically takes 2-3 weeks and includes: kick-off call to align on goals and expectations, access setup (analytics, ad accounts, etc.), comprehensive audit of current marketing, competitive analysis, strategy development and approval, implementation planning, and team introductions. You\'ll have a dedicated account manager who guides you through every step.'
            },
            {
                question: 'How do you communicate with clients?',
                answer: 'Communication is customized to your preferences. Standard includes: dedicated account manager, weekly status updates, monthly strategy calls, access to project management tools (Asana/Monday), real-time dashboard access, Slack channel for quick questions (optional), and quarterly business reviews. We\'re responsive and maintain open lines of communication throughout our partnership.'
            },
            {
                question: 'What do I need to provide to get started?',
                answer: 'To start, we typically need: access to your website (CMS, hosting), Google Analytics and Search Console access, access to existing ad accounts, brand guidelines and assets, information about your target audience, competitive landscape overview, and access to past performance data. We\'ll guide you through exactly what\'s needed during onboarding.'
            },
            {
                question: 'How soon can you start after we sign?',
                answer: 'We typically begin work within 1-2 weeks of agreement signing. The timeline depends on access provisioning and the complexity of setup required. For urgent needs, we offer expedited onboarding. Our team moves quickly while maintaining thoroughness—we believe in momentum from day one.'
            },
            {
                question: 'Do you offer performance-based pricing?',
                answer: 'We offer performance-aligned structures for qualified clients. This might include base retainer plus performance bonuses tied to specific KPIs, revenue share models for e-commerce, or cost-per-lead arrangements for lead generation. These require established baseline data and minimum commitments. Let\'s discuss what structure aligns with your goals.'
            }
        ]
    },
    {
        id: 'technical',
        title: 'Technical & Website',
        icon: '💻',
        color: 'linear-gradient(135deg, #64748b, #475569)',
        faqs: [
            {
                question: 'What is Core Web Vitals and why does it affect SEO?',
                answer: 'Core Web Vitals are Google\'s metrics for page experience: Largest Contentful Paint (LCP) measures loading (should be under 2.5s), Interaction to Next Paint (INP) measures interactivity (should be under 200ms), and Cumulative Layout Shift (CLS) measures visual stability (should be under 0.1). These are ranking factors—poor scores can hurt SEO. We audit and optimize Core Web Vitals as part of technical SEO.'
            },
            {
                question: 'How important is website speed for marketing?',
                answer: 'Website speed is critical. A 1-second delay in load time can reduce conversions by 7%. Beyond conversions, speed affects: SEO rankings (it\'s a ranking factor), user experience and bounce rates, ad Quality Score (impacting CPCs), and brand perception. We optimize speed through image compression, caching, code optimization, and CDN implementation.'
            },
            {
                question: 'What is mobile-first indexing?',
                answer: 'Mobile-first indexing means Google primarily uses the mobile version of your website for ranking and indexing. With over 60% of searches on mobile devices, your mobile experience is paramount. Ensure your site is fully responsive, has fast mobile load times, contains the same content as desktop, and provides good mobile usability. We audit mobile experiences and fix issues affecting rankings.'
            },
            {
                question: 'Do you offer web design and development services?',
                answer: 'Yes, we provide comprehensive web design and development services including: conversion-optimized website design, WordPress and Webflow development, Shopify e-commerce stores, landing page design, UX/UI optimization, website migration, and ongoing maintenance. All websites we build are optimized for SEO, speed, and conversions from the ground up.'
            },
            {
                question: 'What CMS platforms do you work with?',
                answer: 'We work with major CMS platforms including: WordPress (our most common), Shopify and Shopify Plus, Webflow, Squarespace, Wix, HubSpot CMS, custom platforms, and headless CMS solutions. Our team adapts to your existing platform while recommending changes if current systems limit marketing effectiveness.'
            },
            {
                question: 'How do you handle website migrations without losing SEO?',
                answer: 'Website migrations require careful planning to preserve SEO value. Our process includes: comprehensive URL mapping and redirect strategy, pre-migration baseline documentation, 301 redirect implementation, XML sitemap updates, Google Search Console verification, internal link auditing, post-migration monitoring, and quick issue resolution. We\'ve successfully managed hundreds of migrations without significant ranking loss.'
            }
        ]
    }
];

// FAQ Item Component
function FAQItem({ faq, isOpen, onToggle }: { faq: FAQ; isOpen: boolean; onToggle: () => void }) {
    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`}>
            <div className="faq-question" onClick={onToggle}>
                <h3>{faq.question}</h3>
                <span className="faq-toggle">
                    <Icon type="chevronDown" />
                </span>
            </div>
            <div className="faq-answer">
                <p>{faq.answer}</p>
            </div>
        </div>
    );
}

// FAQ Section Component
function FAQSectionBlock({ section, openItems, toggleItem }: {
    section: FAQSection;
    openItems: Set<string>;
    toggleItem: (id: string) => void;
}) {
    return (
        <div id={section.id} className="faq-section">
            <div className="faq-section-header">
                <div className="faq-section-icon" style={{ background: section.color }}>
                    {section.icon}
                </div>
                <h2 className="faq-section-title">{section.title}</h2>
                <span className="faq-section-count">{section.faqs.length} Questions</span>
            </div>
            <div className="faq-list">
                {section.faqs.map((faq, index) => {
                    const itemId = `${section.id}-${index}`;
                    return (
                        <FAQItem
                            key={itemId}
                            faq={faq}
                            isOpen={openItems.has(itemId)}
                            onToggle={() => toggleItem(itemId)}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export function FAQContent() {
    const [openItems, setOpenItems] = useState<Set<string>>(new Set());
    const [activeCategory, setActiveCategory] = useState('all');

    const toggleItem = (id: string) => {
        const newOpenItems = new Set(openItems);
        if (newOpenItems.has(id)) {
            newOpenItems.delete(id);
        } else {
            newOpenItems.add(id);
        }
        setOpenItems(newOpenItems);
    };

    const scrollToSection = (sectionId: string) => {
        setActiveCategory(sectionId);
        if (sectionId === 'all') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    };

    const totalFAQs = faqSections.reduce((acc, section) => acc + section.faqs.length, 0);

    return (
        <div className="faq-page">
            {/* Hero Section */}
            <section className="faq-hero">
                <div className="faq-hero-container">
                    <span className="faq-label">HELP CENTER</span>
                    <h1 className="faq-hero-title">
                        Frequently Asked <span>Questions</span>
                    </h1>
                    <p className="faq-hero-subtitle">
                        Find answers to common questions about our digital marketing services,
                        processes, and how we can help grow your business.
                    </p>
                    <div className="faq-search">
                        <input
                            type="text"
                            className="faq-search-input"
                            placeholder="Search for answers..."
                        />
                    </div>
                </div>
            </section>

            {/* Category Navigation */}
            <section className="faq-categories">
                <div className="faq-categories-container">
                    <div className="faq-categories-list">
                        <button
                            className={`faq-category-btn ${activeCategory === 'all' ? 'active' : ''}`}
                            onClick={() => scrollToSection('all')}
                        >
                            All Topics
                        </button>
                        {faqSections.map((section) => (
                            <button
                                key={section.id}
                                className={`faq-category-btn ${activeCategory === section.id ? 'active' : ''}`}
                                onClick={() => scrollToSection(section.id)}
                            >
                                {section.icon} {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Stats */}
            <section className="faq-stats">
                <div className="faq-stats-container">
                    <div className="faq-stats-grid">
                        <div className="faq-stat-item">
                            <span className="faq-stat-num">{totalFAQs}+</span>
                            <span className="faq-stat-label">Questions Answered</span>
                        </div>
                        <div className="faq-stat-item">
                            <span className="faq-stat-num">{faqSections.length}</span>
                            <span className="faq-stat-label">Topic Categories</span>
                        </div>
                        <div className="faq-stat-item">
                            <span className="faq-stat-num">24/7</span>
                            <span className="faq-stat-label">Support Available</span>
                        </div>
                        <div className="faq-stat-item">
                            <span className="faq-stat-num">98%</span>
                            <span className="faq-stat-label">Questions Resolved</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Sections */}
            <section className="faq-sections">
                <div className="faq-sections-container">
                    {faqSections.map((section) => (
                        <FAQSectionBlock
                            key={section.id}
                            section={section}
                            openItems={openItems}
                            toggleItem={toggleItem}
                        />
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="faq-cta">
                <div className="faq-cta-container">
                    <h2>Still Have Questions?</h2>
                    <p>
                        Can&apos;t find the answer you&apos;re looking for? Our team is here to help.
                        Reach out and we&apos;ll get back to you within 24 hours.
                    </p>
                    <Link href="/contact" className="faq-cta-btn">
                        Contact Us <Icon type="arrowRight" />
                    </Link>
                </div>
            </section>

            {/* Schema.org FAQ Markup for SEO */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        "mainEntity": faqSections.flatMap(section =>
                            section.faqs.map(faq => ({
                                "@type": "Question",
                                "name": faq.question,
                                "acceptedAnswer": {
                                    "@type": "Answer",
                                    "text": faq.answer
                                }
                            }))
                        )
                    })
                }}
            />
        </div>
    );
}

export default FAQContent;
