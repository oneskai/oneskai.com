import { Metadata } from 'next';
import { MarketplaceContent } from '@/components/services/MarketplaceContent';

export const metadata: Metadata = {
    title: 'Amazon & Marketplace Marketing | E-commerce Growth | Oneskai',
    description: 'Marketplace optimization for Amazon, Walmart, and eBay. Listing optimization, PPC management, and multi-marketplace expansion.',
    keywords: 'Amazon marketing, marketplace optimization, Amazon PPC, Walmart marketplace, eBay optimization, A+ content',
};

export default function MarketplacePage() {
    return <MarketplaceContent />;
}
