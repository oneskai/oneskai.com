import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'branding',
    category: 'CREATIVES',
    title: 'Brand Identity',
    subtitle: 'Logos, voice, and visual guidelines.',
    description: 'We develop cohesive brand identities that capture your essence and resonate with your audience—from logo design to comprehensive brand guidelines.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function BrandingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
