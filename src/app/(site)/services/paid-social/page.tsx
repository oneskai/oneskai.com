import { Metadata } from 'next';
import { PaidSocialContent } from '@/components/services/PaidSocialContent';

export const metadata: Metadata = {
    title: 'Paid Social Advertising | Meta, TikTok & LinkedIn Ads Agency | Oneskai',
    description: 'Expert paid social advertising across Meta, TikTok, LinkedIn & Pinterest. Achieve 2.8x average ROAS with scroll-stopping creative and precision audience targeting.',
    keywords: 'paid social advertising, Facebook Ads, Instagram Ads, TikTok Ads, LinkedIn Ads, social media advertising, Meta Ads agency, paid social agency',
    openGraph: {
        title: 'Paid Social Advertising | Meta, TikTok & LinkedIn Ads Agency | Oneskai',
        description: 'Expert paid social advertising achieving 2.8x average ROAS across Meta, TikTok & LinkedIn.',
        type: 'website',
    },
};

export default function PaidSocialPage() {
    return <PaidSocialContent />;
}
