import { Metadata } from 'next';
import { WebDesignContent } from '@/components/services/WebDesignContent';

export const metadata: Metadata = {
    title: 'Web Design & Development | Custom Website Agency | Oneskai',
    description: 'Award-winning web design agency specializing in high-performance websites that convert. Next.js, React, and headless CMS solutions for corporate, e-commerce, and SaaS.',
    keywords: 'web design agency, website development, custom websites, Next.js development, React websites, headless CMS, corporate websites, e-commerce design',
    openGraph: {
        title: 'Web Design & Development | Custom Website Agency | Oneskai',
        description: 'Award-winning web design agency building high-performance websites that convert visitors into customers.',
        type: 'website',
    },
};

export default function WebDesignPage() {
    return <WebDesignContent />;
}
