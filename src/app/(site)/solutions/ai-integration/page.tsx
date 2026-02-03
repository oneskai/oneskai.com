import { Metadata } from 'next';
import { AIIntegrationContent } from '@/components/solutions/AIIntegrationContent';

export const metadata: Metadata = {
    title: 'AI Integration Solutions | AI-Powered Business Growth | Oneskai',
    description: 'Harness artificial intelligence to automate operations, personalize experiences, and drive exponential business growth with strategic AI integration.',
    keywords: 'AI integration, artificial intelligence, machine learning, marketing automation, chatbots, predictive analytics',
};

export default function AIIntegrationPage() { return <AIIntegrationContent />; }
