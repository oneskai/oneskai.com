import { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';

export const metadata: Metadata = {
    title: 'About Us | Oneskai - Your Digital Growth Partner',
    description: 'Learn about Oneskai - a team of strategists, creatives, and technologists united by a single mission: to transform ambitious brands into digital leaders.',
    keywords: 'about oneskai, digital agency, marketing agency, growth partner, digital transformation',
};

export default function AboutPage() {
    return <AboutContent />;
}
