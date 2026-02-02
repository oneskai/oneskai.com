import { Metadata } from 'next';
import { GenericPage } from '@/components/layout/GenericPage/GenericPage';

const pageConfig = {
    slug: 'awards',
    category: 'OUR STORY',
    title: 'Awards & Recognition',
    subtitle: 'Recognized for excellence in digital marketing.',
    description: 'Our work has been acknowledged by industry leaders. Explore the awards and certifications that validate our commitment to excellence.',
};

export const metadata: Metadata = {
    title: `${pageConfig.title} | Oneskai`,
    description: pageConfig.subtitle,
};

export default async function AwardsPage() {
    return (
        <GenericPage
            category={pageConfig.category}
            title={pageConfig.title}
            subtitle={pageConfig.subtitle}
            description={pageConfig.description}
        />
    );
}
