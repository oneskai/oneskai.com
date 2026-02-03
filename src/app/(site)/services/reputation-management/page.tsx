import { Metadata } from 'next';
import { ReputationContent } from '@/components/services/ReputationContent';

export const metadata: Metadata = {
    title: 'Reputation Management Services | Online Reputation | Oneskai',
    description: 'Protect and repair your online reputation. Brand monitoring, review management, and search result optimization.',
    keywords: 'reputation management, online reputation, review management, brand monitoring, search suppression, crisis management',
};

export default function ReputationPage() {
    return <ReputationContent />;
}
