import { Metadata } from 'next';
import { MotionGraphicsContent } from '@/components/services/MotionGraphicsContent';

export const metadata: Metadata = {
    title: 'Motion Graphics & Animation | Video Production Agency | Oneskai',
    description: 'Professional motion graphics and animation services. Explainer videos, logo animations, social content, and brand films that captivate and convert.',
    keywords: 'motion graphics, animation, explainer videos, logo animation, video production, animated content, social media video, brand film',
    openGraph: {
        title: 'Motion Graphics & Animation | Video Production Agency | Oneskai',
        description: 'Professional motion graphics and animation services that bring your brand to life.',
        type: 'website',
    },
};

export default function MotionGraphicsPage() {
    return <MotionGraphicsContent />;
}
