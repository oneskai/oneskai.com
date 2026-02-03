import { Metadata } from 'next';
import { AffiliateContent } from '@/components/services/AffiliateContent';

export const metadata: Metadata = {
    title: 'Affiliate Marketing Services | Partnership Programs | Oneskai',
    description: 'Build and manage high-performing affiliate programs. Partner recruitment, commission optimization, and revenue growth.',
    keywords: 'affiliate marketing, affiliate program, partnership marketing, commission optimization, partner recruitment',
};

export default function AffiliatePage() {
    return <AffiliateContent />;
}
