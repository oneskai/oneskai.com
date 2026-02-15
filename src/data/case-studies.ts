export interface CaseStudy {
    id: string;
    brand: string;
    industry: string;
    title: string;
    description: string;
    tags: string[];
    metrics: { value: string; label: string; }[];
    image: string;
    challenge: string;
    solution: string;
    result: string;
    dataPoints: { label: string; value: string; description: string; }[];
}

export const caseStudies: CaseStudy[] = [
    {
        id: 'ecommerce-scale',
        brand: 'Global Fashion Retailer',
        industry: 'E-Commerce',
        title: 'Scaling D2C Revenue by 412% in 12 Months',
        description: 'A multi-brand retailer struggling with customer acquisition costs partnered with us to overhaul their paid media strategy and build a scalable SEO engine.',
        tags: ['Paid Media', 'SEO', 'Creative Strategy'],
        metrics: [
            { value: '+412%', label: 'Revenue' },
            { value: '8.4x', label: 'Return on Ad Spend' },
            { value: '-47%', label: 'Acquisition Cost' },
        ],
        image: '/images/results/case-studies/ecommerce.png',
        challenge: 'The client faced stagnant growth and rising CAC across Meta and Google. Their organic presence was limited to brand terms, missing out on high-intent category traffic.',
        solution: 'We implemented a "Full-Funnel Creative Matrix" for paid social, paired with a "Programmatic SEO" engine that targeted 5,000+ long-tail fashion queries.',
        result: 'Achieved a record-breaking 8.4x blended ROAS while scaling monthly revenue from $450k to $2.3M within a single fiscal year.',
        dataPoints: [
            { label: 'Blended ROAS', value: '8.4x', description: 'Total revenue divided by total ad spend across all channels.' },
            { label: 'Organic Traffic', value: '+320%', description: 'Increase in non-branded organic sessions through pSEO.' },
            { label: 'Customer LTV', value: '+24%', description: 'Improvement in 6-month retention through post-purchase creative loops.' }
        ]
    },
    {
        id: 'saas-leads',
        brand: 'Enterprise SaaS Platform',
        industry: 'Technology',
        title: 'Driving $24M in New Pipeline Value',
        description: 'An enterprise SaaS company needed to break into the mid-market segment. We designed an ABM strategy paired with high-intent content that opened new verticals.',
        tags: ['ABM', 'Content Marketing', 'Analytics'],
        metrics: [
            { value: '+890%', label: 'Leads' },
            { value: '$24M', label: 'Pipeline' },
            { value: '-32%', label: 'Sales Cycle' },
        ],
        image: '/images/results/case-studies/saas.png',
        challenge: 'Targeting higher-tier enterprise accounts requires precision. The client was wasting budget on broad LinkedIn campaigns with low conversion rates.',
        solution: 'We deployed an "Account-Based Marketing" playbook targeting 200 key accounts with personalized landing pages and IP-based ad targeting.',
        result: 'Generated 45 high-value enterprise opportunities, resulting in $24M of qualified pipeline value and a significant reduction in sales friction.',
        dataPoints: [
            { label: 'Qualified Pipeline', value: '$24M', description: 'Total value of opportunities reaching the "Proposal" stage.' },
            { label: 'Account Engagement', value: '+450%', description: 'Increase in targeted account interactions with high-value content.' },
            { label: 'CPL Reduction', value: '-38%', description: 'Decrease in cost per enterprise-qualified lead.' }
        ]
    },
    {
        id: 'healthcare-growth',
        brand: 'Premium Health Network',
        industry: 'Healthcare',
        title: 'Navigating Compliance to Deliver 267% Inquiry Growth',
        description: 'In one of the most heavily regulated industries, we built a compliant yet aggressive growth strategy combining local SEO dominance with precision paid search.',
        tags: ['Local SEO', 'Paid Search', 'Reputation'],
        metrics: [
            { value: '+267%', label: 'Inquiries' },
            { value: '-58%', label: 'Cost Per Lead' },
            { value: '+340%', label: 'Brand Awareness' },
        ],
        image: '/images/results/case-studies/healthcare.png',
        challenge: 'Healthcare marketing is limited by strict privacy laws and advertising regulations. Traditional tactics were yielding low-quality leads and poor conversion.',
        solution: 'Built a custom "SEO Visibility Engine" focused on local intent, paired with a "Trust-First" creative strategy that leveraged patient testimonials and expert authority.',
        result: 'Successfully scaled patient inquiries while maintaining 100% regulatory compliance, leading to a 267% increase in appointment bookings.',
        dataPoints: [
            { label: 'Local Search Rank', value: '#1', description: 'Top position for 45+ high-volume local healthcare queries.' },
            { label: 'Conv. Rate Improvement', value: '+85%', description: 'Increase in lead-to-appointment conversion through UX optimization.' },
            { label: 'Cost Per Inquiry', value: '-58%', description: 'Reduction in media spend required to generate a qualified inquiry.' }
        ]
    },
    {
        id: 'fintech-trust',
        brand: 'Digital Banking App',
        industry: 'Fintech',
        title: 'Lowering User Acquisition Cost by 65% Globally',
        description: 'A challenger bank expanding across three continents needed a unified performance creative framework. We delivered a system that cut UAC while scaling installs.',
        tags: ['App Marketing', 'Performance Creative', 'Data'],
        metrics: [
            { value: '-65%', label: 'Acquisition Cost' },
            { value: '4.2x', label: 'Value to Cost Ratio' },
            { value: '1.2M', label: 'New Installs' },
        ],
        image: '/images/results/case-studies/fintech.png',
        challenge: 'Global scaling often leads to creative fatigue and rising costs. The client needed a way to maintain installation velocity across diverse markets.',
        solution: 'Implemented a "Performance Creative Lab" that tested 500+ ad variations weekly, using AI to predict winning hooks and localizing content in real-time.',
        result: 'Cut CAC by 65% globally while surpassing 1.2M new installs, making it the highest-growth period in the company\'s history.',
        dataPoints: [
            { label: 'Global Installs', value: '1.2M', description: 'Total validated app installations across iOS and Android.' },
            { label: 'CAC Efficiency', value: '-65%', description: 'Reduction in cost per install compared to the previous agency baseline.' },
            { label: 'Creative Velocity', value: '500+', description: 'Total unique ad assets tested and optimized per week.' }
        ]
    },
    {
        id: 'logistics-transformation',
        brand: 'Global Logistics Provider',
        industry: 'Logistics & Supply Chain',
        title: 'Orchestrating a 300% Increase in Operational Efficiency',
        description: 'A global logistics provider struggling with legacy systems partnered with us to digitize their customer journey and implement automated lead nurturing.',
        tags: ['Digital Transformation', 'Marketing Automation', 'B2B Strategy'],
        metrics: [
            { value: '+300%', label: 'Efficiency' },
            { value: '-40%', label: 'OpEx' },
            { value: '5.5x', label: 'ROI' },
        ],
        image: '/images/results/case-studies/logistics.png',
        challenge: 'Manual processes and fragmented data silos were leading to massive lead leakage and inefficient resource allocation across their global sales offices.',
        solution: 'We deployed a custom middle-ware solution to unify CRM data and implemented an AI-driven automated nurturing sequence for high-value freight forwarding accounts.',
        result: 'Transformed the sales velocity by 300% while reducing manual administrative overhead by 40%, delivering a 5.5x ROI on the total digital development.',
        dataPoints: [
            { label: 'Sales Velocity', value: '+300%', description: 'Decrease in time from lead acquisition to shipment booking.' },
            { label: 'Admin Overhead', value: '-40%', description: 'Reduction in manual data entry and report generation tasks.' },
            { label: 'Data Accuracy', value: '99.9%', description: 'Eliminated sync errors between marketing systems and global ERP.' }
        ]
    }
];
