import { Metadata } from 'next';
import { DigitalEvolutionContent } from '@/components/solutions/DigitalEvolutionContent';

export const metadata: Metadata = {
    title: 'Digital Evolution Solutions | Digital Transformation | Oneskai',
    description: 'Complete digital transformation that modernizes technology, optimizes operations, and positions your business for the future of commerce.',
    keywords: 'digital transformation, digital evolution, technology modernization, digital strategy, customer experience, process automation',
};

export default function DigitalEvolutionPage() { return <DigitalEvolutionContent />; }
