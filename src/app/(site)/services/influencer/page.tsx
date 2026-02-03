import { Metadata } from 'next';
import { InfluencerContent } from '@/components/services/InfluencerContent';

export const metadata: Metadata = {
    title: 'Influencer Marketing Services | Creator Partnerships | Oneskai',
    description: 'Strategic influencer marketing campaigns that drive brand awareness and conversions through authentic creator partnerships.',
    keywords: 'influencer marketing, creator partnerships, UGC, user-generated content, social media influencers, brand ambassadors',
};

export default function InfluencerPage() {
    return <InfluencerContent />;
}
