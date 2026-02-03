import { Metadata } from 'next';
import { ContactContent } from '@/components/contact/ContactContent';

export const metadata: Metadata = {
    title: 'Contact Us | Let\'s Scale Your Business - Oneskai',
    description: 'Ready to start your digital evolution? Contact our expert team for SEO, PPC, and digital strategy. Get a custom growth proposal today.',
    keywords: 'contact oneskai, marketing agency contact, get a quote, digital marketing proposal, hire seo agency',
};

export default function ContactPage() {
    return <ContactContent />;
}
