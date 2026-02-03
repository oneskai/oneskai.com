import { Metadata } from 'next';
import { FractionalCMOContent } from '@/components/services/FractionalCMOContent';

export const metadata: Metadata = {
    title: 'Fractional CMO Services | Part-Time Marketing Executive | Oneskai',
    description: 'Get C-suite marketing leadership at a fraction of the cost. Strategic marketing leadership, team management, and growth strategy for scaling businesses.',
    keywords: 'fractional CMO, part-time CMO, marketing leadership, outsourced CMO, marketing strategy, startup CMO',
};

export default function FractionalCMOPage() { return <FractionalCMOContent />; }
