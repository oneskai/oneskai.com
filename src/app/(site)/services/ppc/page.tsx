import { Metadata } from 'next';
import { PPCContent } from '@/components/services/PPCContent';

export const metadata: Metadata = {
    title: 'PPC & Google Ads Management | Pay-Per-Click Agency | Oneskai',
    description: 'Expert PPC management across Google Ads, Meta, YouTube & Bing. Achieve 4.8x average ROAS with our data-driven campaign architecture and Smart Bidding strategies.',
    keywords: 'PPC management, Google Ads agency, pay-per-click, paid search, SEM, Google Ads management, Meta Ads, YouTube Ads, ROAS optimization',
    openGraph: {
        title: 'PPC & Google Ads Management | Pay-Per-Click Agency | Oneskai',
        description: 'Expert PPC management achieving 4.8x average ROAS across Google, Meta, YouTube & Bing.',
        type: 'website',
    },
};

export default function PPCPage() {
    return <PPCContent />;
}
