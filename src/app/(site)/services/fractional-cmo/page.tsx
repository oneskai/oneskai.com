import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'fractional-cmo',
    category: 'MARKETING CONSULTING',
    title: 'Fractional Chief Marketing Officer',
    subtitle: 'High-level strategy without the overhead.',
    description: 'Get C-suite marketing leadership on a flexible basis. Our Fractional CMO service provides strategic direction, team mentorship, and executive-level marketing expertise.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function FractionalCMOPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
