import { Metadata } from 'next';
import { PredictiveContent } from '@/components/services/PredictiveContent';

export const metadata: Metadata = {
    title: 'Predictive Analytics Services | ML-Powered Predictions | Oneskai',
    description: 'Machine learning models that predict customer behavior, forecast outcomes, and optimize marketing spend. Churn prediction, lead scoring, and LTV models.',
    keywords: 'predictive analytics, machine learning, churn prediction, lead scoring, LTV prediction, forecasting',
};

export default function PredictivePage() { return <PredictiveContent />; }
