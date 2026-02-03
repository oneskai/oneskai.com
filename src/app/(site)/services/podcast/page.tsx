import { Metadata } from 'next';
import { PodcastContent } from '@/components/services/PodcastContent';

export const metadata: Metadata = {
    title: 'Podcast Production Services | Launch & Manage | Oneskai',
    description: 'Full-service podcast production from launch to growth. Editing, distribution, and audience building for your show.',
    keywords: 'podcast production, podcast editing, podcast launch, podcast marketing, audio production, podcast growth',
};

export default function PodcastPage() {
    return <PodcastContent />;
}
