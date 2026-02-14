import { Metadata } from 'next';
import { AdsCreativeContent } from '@/components/services/AdsCreativeContent';

export const metadata: Metadata = {
    title: 'Ads Creative Services | High-Performance Ad Design | Oneskai',
    description: 'Scroll-stopping ad creative for Facebook, Instagram, Google, TikTok, and more. Static, video, and UGC ads that drive conversions.',
    keywords: 'ad creative, Facebook ads, video ads, UGC ads, display ads, ad design, creative production',
};

export default function AdsCreativePage() { return <AdsCreativeContent />; }
