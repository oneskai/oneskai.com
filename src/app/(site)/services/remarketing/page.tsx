import { Metadata } from 'next';
import { RemarketingContent } from '@/components/services/RemarketingContent';

export const metadata: Metadata = {
    title: 'Remarketing & Retargeting Services | Convert Lost Visitors | Oneskai',
    description: 'Strategic retargeting campaigns that bring back visitors who didn\'t convert. Cart recovery, dynamic remarketing, and cross-platform retargeting.',
    keywords: 'remarketing, retargeting, cart abandonment, dynamic remarketing, display retargeting, Facebook retargeting',
};

export default function RemarketingPage() { return <RemarketingContent />; }
