import { Metadata } from 'next';
import { GTMContent } from '@/components/services/GTMContent';

export const metadata: Metadata = {
    title: 'Go-to-Market Strategy Services | GTM Planning & Execution | Oneskai',
    description: 'Strategic Go-to-Market planning for product launches and market expansion. Market sizing, ICP definition, positioning, pricing strategy, and demand generation.',
    keywords: 'go-to-market strategy, GTM strategy, product launch, market entry, ICP, positioning, pricing strategy, demand generation, sales playbook, market expansion',
    openGraph: {
        title: 'Go-to-Market Strategy Services | GTM Planning & Execution | Oneskai',
        description: 'Strategic Go-to-Market planning that aligns product, positioning, and market entry for maximum impact.',
        type: 'website',
    },
};

export default function GTMPage() {
    return <GTMContent />;
}
