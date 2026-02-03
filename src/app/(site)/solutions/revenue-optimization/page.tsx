import { Metadata } from 'next';
import { RevenueOptimizationContent } from '@/components/solutions/RevenueOptimizationContent';

export const metadata: Metadata = {
    title: 'Revenue Optimization Solutions | CRO & Pricing | Oneskai',
    description: 'Maximize revenue from existing traffic and customers through CRO, pricing optimization, and revenue operations.',
    keywords: 'revenue optimization, CRO, conversion rate optimization, pricing strategy, LTV, revenue operations',
};

export default function RevenueOptimizationPage() { return <RevenueOptimizationContent />; }
