import { Metadata } from 'next';
import { VideoProductionContent } from '@/components/services/VideoProductionContent';

export const metadata: Metadata = {
    title: 'Video Production Services | Brand & Product Videos | Oneskai',
    description: 'Professional video production including brand films, product videos, and social content. Cinematic quality that drives results.',
    keywords: 'video production, brand video, product video, corporate video, video marketing, commercial production',
};

export default function VideoProductionPage() {
    return <VideoProductionContent />;
}
