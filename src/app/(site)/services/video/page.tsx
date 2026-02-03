import { Metadata } from 'next';
import { VideoContent } from '@/components/services/VideoContent';

export const metadata: Metadata = {
    title: 'Video Marketing Services | Brand Videos & Social Content | Oneskai',
    description: 'Strategic video marketing that captures attention and drives action. Short-form social, brand videos, explainers, and video ads.',
    keywords: 'video marketing, video production, social media video, brand video, explainer video, video ads, UGC',
};

export default function VideoPage() { return <VideoContent />; }
