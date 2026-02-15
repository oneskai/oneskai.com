import { Metadata } from 'next';
import { PressContent } from '@/components/press/PressContent';

export const metadata: Metadata = {
    title: 'Press & Media | Oneskai - Official News and Brand Assets',
    description: 'The latest news, media coverage, and official brand assets from Oneskai. Stay updated on our journey of digital evolution.',
};

export default function PressPage() {
    return <PressContent />;
}
