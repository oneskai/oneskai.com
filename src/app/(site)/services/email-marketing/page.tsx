import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'email-marketing',
    category: 'OWNED MEDIA',
    title: 'Email & SMS Marketing',
    subtitle: 'Retain customers and expand lifetime value.',
    description: 'We design and execute email and SMS campaigns that nurture leads, re-engage customers, and drive repeat purchases through personalized, automated communication flows.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function EmailMarketingPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
