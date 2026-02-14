import { Metadata } from 'next';
import { ASOContent } from '@/components/services/ASOContent';

export const metadata: Metadata = {
    title: 'App Store Optimization (ASO) Services | iOS & Android | Oneskai',
    description: 'Maximize your app visibility and organic downloads with expert ASO services. Keyword optimization, screenshot design, and rating management for iOS and Android.',
    keywords: 'app store optimization, ASO, iOS app optimization, Android app optimization, app marketing, mobile app growth, app downloads',
    openGraph: {
        title: 'App Store Optimization (ASO) Services | Oneskai',
        description: 'Maximize your app visibility and organic downloads with expert ASO services.',
        type: 'website',
    },
};

export default function ASOPage() {
    return <ASOContent />;
}
