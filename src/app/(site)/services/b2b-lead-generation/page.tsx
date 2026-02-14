import { Metadata } from 'next';
import { LeadGenerationContent } from '@/components/solutions/LeadGenerationContent';

export const metadata: Metadata = {
    title: 'Lead Generation Solutions | B2B Pipeline Growth | Oneskai',
    description: 'Predictable, scalable lead generation that delivers qualified prospects to your sales team. Fill your pipeline with real opportunities.',
    keywords: 'lead generation, B2B leads, pipeline growth, demand generation, lead nurturing, lead scoring',
};

export default function LeadGenerationPage() { return <LeadGenerationContent />; }
