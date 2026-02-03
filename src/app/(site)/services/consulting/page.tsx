import { Metadata } from 'next';
import { ConsultingContent } from '@/components/services/ConsultingContent';

export const metadata: Metadata = {
    title: 'Marketing Consulting Services | Strategic Advisory | Oneskai',
    description: 'Expert marketing consulting for complex challenges. Get strategic clarity, growth roadmaps, and actionable recommendations from seasoned marketing experts.',
    keywords: 'marketing consulting, marketing strategy, growth consulting, digital strategy, marketing audit, strategic advisory',
};

export default function ConsultingPage() { return <ConsultingContent />; }
