import { Metadata } from 'next';
import { CopywritingContent } from '@/components/services/CopywritingContent';

export const metadata: Metadata = {
    title: 'Copywriting Services | Conversion Copy Agency | Oneskai',
    description: 'Conversion-focused copywriting for websites, sales pages, and emails. Words that sell and engage your audience.',
    keywords: 'copywriting, conversion copywriting, sales copy, website copy, email copywriting, landing page copy',
};

export default function CopywritingPage() {
    return <CopywritingContent />;
}
