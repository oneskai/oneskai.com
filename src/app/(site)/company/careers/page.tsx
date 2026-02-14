import { Metadata } from 'next';
import { CareersContent } from '@/components/careers/CareersContent';

export const metadata: Metadata = {
    title: 'Careers | Join Our Team - Oneskai',
    description: 'Build your career with us. Explore exciting opportunities in digital marketing, analytics, design, and more. Remote-first culture with great benefits.',
    keywords: 'careers, jobs, digital marketing jobs, remote jobs, marketing careers',
};

export default function CareersPage() {
    return <CareersContent />;
}
