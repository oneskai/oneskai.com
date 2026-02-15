import { Metadata } from 'next';
import { FAQContent } from '@/components/faq/FAQContent';

export const metadata: Metadata = {
    title: 'FAQ | Frequently Asked Questions - Oneskai',
    description: 'Find answers to common questions about SEO, PPC, social media marketing, analytics, and our digital marketing services. Learn about AEO, GEO, and more.',
    keywords: 'FAQ, digital marketing questions, SEO FAQ, PPC FAQ, marketing agency FAQ, AEO, GEO, answer engine optimization',
};

export default function FAQPage() {
    return <FAQContent />;
}
