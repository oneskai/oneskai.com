import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'mobile-first',
    category: 'FUTURE-READY',
    title: 'Mobile-First Strategy',
    subtitle: 'Win on every hand-held device.',
    description: 'We design mobile-first experiences and campaigns that capture the growing mobile audience with optimized UX, fast performance, and platform-specific strategies.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function MobileFirstPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
