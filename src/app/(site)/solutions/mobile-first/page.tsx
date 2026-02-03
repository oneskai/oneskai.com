import { Metadata } from 'next';
import { MobileFirstContent } from '@/components/solutions/MobileFirstContent';

export const metadata: Metadata = {
    title: 'Mobile-First Solutions | App & Mobile Marketing | Oneskai',
    description: 'Mobile-first strategies that capture customers on their phones. Apps, mobile web, and cross-device experiences that drive engagement and conversion.',
    keywords: 'mobile first, mobile marketing, app marketing, ASO, mobile strategy, mobile advertising',
};

export default function MobileFirstPage() { return <MobileFirstContent />; }
