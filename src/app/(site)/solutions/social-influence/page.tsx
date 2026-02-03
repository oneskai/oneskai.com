import { Metadata } from 'next';
import { SocialInfluenceContent } from '@/components/solutions/SocialInfluenceContent';

export const metadata: Metadata = {
    title: 'Social Influence Solutions | Social Media Marketing | Oneskai',
    description: 'Build engaged communities and brand advocates through social media strategy, content creation, and influencer marketing.',
    keywords: 'social influence, social media marketing, influencer marketing, community management, social strategy, paid social',
};

export default function SocialInfluencePage() { return <SocialInfluenceContent />; }
