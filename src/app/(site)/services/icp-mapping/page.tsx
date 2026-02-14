import { Metadata } from 'next';
import { PersonaDevelopmentContent } from '@/components/services/PersonaDevelopmentContent';

export const metadata: Metadata = {
    title: 'Buyer Persona Development | Customer Research | Oneskai',
    description: 'Data-driven buyer personas that inform messaging, targeting, and product decisions. Know your ideal customer inside and out.',
    keywords: 'buyer persona, customer persona, audience research, customer research, ICP, ideal customer profile',
};

export default function PersonaDevelopmentPage() { return <PersonaDevelopmentContent />; }
