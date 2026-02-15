import { caseStudies } from '@/data/case-studies';
import { CaseStudyPost } from '@/components/work/CaseStudyPost';
import { notFound } from 'next/navigation';

interface CaseStudyPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return caseStudies.map((study) => ({
        slug: study.id,
    }));
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
    const { slug } = await params;
    const study = caseStudies.find((s) => s.id === slug);

    if (!study) {
        notFound();
    }

    return <CaseStudyPost study={study} />;
}
