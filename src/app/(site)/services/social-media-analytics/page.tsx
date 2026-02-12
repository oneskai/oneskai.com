import { Metadata } from 'next';
import { SocialMediaAnalyticsContent } from '@/components/services/SocialMediaAnalyticsContent';

export const metadata: Metadata = {
    title: 'Social Media Analytics | Track & Optimize Social Performance | Oneskai',
    description: 'Advanced social media analytics to measure engagement, ROI, and audience insights across all platforms.',
    keywords: 'social media analytics, social media metrics, Instagram analytics, Facebook analytics, TikTok analytics, social media ROI',
};

export default function SocialMediaAnalyticsPage() {
    return <SocialMediaAnalyticsContent />;
}
