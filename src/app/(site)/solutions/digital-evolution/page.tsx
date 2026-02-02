import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'digital-evolution',
    category: 'BRAND & PRESENCE',
    title: 'Digital Evolution',
    subtitle: 'Transform your brand for the future.',
    description: 'We guide established brands through digital transformation—modernizing their presence, adopting new technologies, and future-proofing their marketing operations.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function DigitalEvolutionPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
