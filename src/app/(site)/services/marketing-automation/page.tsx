import { Metadata } from 'next';
import { MarketingAutomationContent } from '@/components/services/MarketingAutomationContent';

export const metadata: Metadata = {
    title: 'Marketing Automation Services | HubSpot & Marketo | Oneskai',
    description: 'Marketing automation with HubSpot, Marketo, and Salesforce. Lead nurturing, workflow automation, and CRM integration.',
    keywords: 'marketing automation, HubSpot, Marketo, Salesforce, lead nurturing, email automation, CRM integration, workflow automation',
};

export default function MarketingAutomationPage() {
    return <MarketingAutomationContent />;
}
