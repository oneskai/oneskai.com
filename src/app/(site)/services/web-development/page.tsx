import { Metadata } from 'next';
import { WebDevelopmentContent } from '@/components/services/WebDevelopmentContent';

export const metadata: Metadata = {
    title: 'Web Development Services | Full-Stack Development Agency | Oneskai',
    description: 'Custom web application development with modern technologies. React, Next.js, Node.js, and cloud architecture for scalable enterprise solutions.',
    keywords: 'web development, full-stack development, React development, Next.js agency, Node.js, web applications, SaaS development, API development',
    openGraph: {
        title: 'Web Development Services | Full-Stack Development Agency | Oneskai',
        description: 'Custom web application development with modern technologies.',
        type: 'website',
    },
};

export default function WebDevelopmentPage() {
    return <WebDevelopmentContent />;
}
