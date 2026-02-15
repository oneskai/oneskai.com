import { Metadata } from 'next';
import { SampleReportContent } from '@/components/work/SampleReportContent';

export const metadata: Metadata = {
    title: 'Sample Strategy Reports | Marketing Audit Examples | Oneskai',
    description: 'Explore our sample strategy reports to see the depth of our analysis. Download examples of our SEO audits, paid media blueprints, and growth roadmaps.',
};

export default function SampleReportPage() {
    return <SampleReportContent />;
}
