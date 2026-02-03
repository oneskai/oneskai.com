import { Metadata } from 'next';
import { BIContent } from '@/components/services/BIContent';

export const metadata: Metadata = {
    title: 'Business Intelligence Services | Data Dashboards & Reporting | Oneskai',
    description: 'Transform data into actionable insights with custom BI dashboards, automated reporting, and data warehousing solutions.',
    keywords: 'business intelligence, BI dashboards, data analytics, Looker, Tableau, data visualization, marketing analytics',
};

export default function BIPage() { return <BIContent />; }
