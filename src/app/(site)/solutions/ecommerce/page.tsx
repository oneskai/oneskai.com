import { Metadata } from 'next';
import { EcommerceSolutionContent } from '@/components/solutions/EcommerceSolutionContent';

export const metadata: Metadata = {
    title: 'Ecommerce Growth Solutions | Online Revenue Optimization | Oneskai',
    description: 'End-to-end ecommerce solutions that drive traffic, convert visitors, and maximize customer lifetime value across every channel.',
    keywords: 'ecommerce growth, online revenue, Shopify marketing, Amazon marketing, ecommerce optimization, DTC marketing',
};

export default function EcommercePage() { return <EcommerceSolutionContent />; }
