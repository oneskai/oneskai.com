import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'persona-development',
    category: 'MARKETING CONSULTING',
    title: 'Persona Development',
    subtitle: 'Develop data-driven customer profiles.',
    description: 'We build detailed buyer personas based on real data and research, enabling your team to create more targeted messaging and effective marketing campaigns.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function PersonaDevelopmentPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
