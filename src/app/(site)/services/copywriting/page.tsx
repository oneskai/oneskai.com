import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'copywriting',
    category: 'CREATIVES',
    title: 'Copywriting',
    subtitle: 'Persuasive words that drive action.',
    description: 'Our copywriters craft compelling messaging that captures attention, builds trust, and motivates your audience to take action.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function CopywritingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
