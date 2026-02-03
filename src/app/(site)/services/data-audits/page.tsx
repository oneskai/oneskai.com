import { Metadata } from 'next';
import { DataAuditsContent } from '@/components/services/DataAuditsContent';

export const metadata: Metadata = {
    title: 'Data & Analytics Audits | Tracking Validation | Oneskai',
    description: 'Comprehensive data audits to uncover tracking gaps, data quality issues, and ensure accurate analytics for better marketing decisions.',
    keywords: 'data audit, analytics audit, GA4 audit, tracking audit, data quality, conversion tracking',
};

export default function DataAuditsPage() { return <DataAuditsContent />; }
