import { Metadata } from 'next';
import { MediaPlanningContent } from '@/components/services/MediaPlanningContent';

export const metadata: Metadata = {
    title: 'Media Planning Services | Strategic Media Strategy | Oneskai',
    description: 'Data-driven media planning that maximizes reach, efficiency, and ROI. Budget allocation, channel selection, and media mix optimization.',
    keywords: 'media planning, media strategy, media mix, budget allocation, channel planning, media buying',
};

export default function MediaPlanningPage() { return <MediaPlanningContent />; }
