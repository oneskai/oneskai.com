import { Metadata } from 'next';
import { JobDetailsContent } from '@/components/careers/JobDetailsContent';

export const metadata: Metadata = {
    title: 'Job Opening | Careers at Oneskai',
    description: 'Join the Oneskai team and help us build the future of digital marketing and evolution.',
};

export default async function JobDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    return <JobDetailsContent slug={slug} />;
}
