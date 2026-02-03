import { Metadata } from 'next';
import { UIUXContent } from '@/components/services/UIUXContent';

export const metadata: Metadata = {
    title: 'UI/UX Design Services | User Experience Agency | Oneskai',
    description: 'Human-centered UI/UX design that drives engagement and conversion. UX research, UI design, prototyping, and design systems for web and mobile products.',
    keywords: 'UI/UX design, user experience design, UX research, UI design agency, product design, app design, design system, usability testing',
    openGraph: {
        title: 'UI/UX Design Services | User Experience Agency | Oneskai',
        description: 'Human-centered UI/UX design that drives engagement and conversion.',
        type: 'website',
    },
};

export default function UIUXPage() {
    return <UIUXContent />;
}
