import { Metadata } from 'next';
import { WhySwitchContent } from '@/components/work/WhySwitchContent';

export const metadata: Metadata = {
    title: 'Why Switch to Oneskai | The Growth Agency Advantage',
    description: 'Discover why ambitious brands switch to Oneskai. Full-funnel transparency, senior-led strategy, and agile execution for measurable ROI.',
};

export default function WhySwitchPage() {
    return <WhySwitchContent />;
}
