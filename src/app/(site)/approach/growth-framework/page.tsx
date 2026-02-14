import { Metadata } from 'next';
import { MethodologyContent } from '@/components/about/MethodologyContent';

export const metadata: Metadata = {
    title: 'Our Methodology | Oneskai - Data-Driven Growth Framework',
    description: 'Discover our proven 6-phase methodology that transforms marketing uncertainty into predictable growth. A systematic approach connecting every action to measurable results.',
    keywords: 'marketing methodology, growth framework, data-driven marketing, marketing process, digital strategy',
};

export default function MethodologyPage() {
    return <MethodologyContent />;
}
