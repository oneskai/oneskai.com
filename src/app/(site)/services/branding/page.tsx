import { Metadata } from 'next';
import { BrandingContent } from '@/components/services/BrandingContent';

export const metadata: Metadata = {
    title: 'Branding & Brand Identity Design | Logo Design Agency | Oneskai',
    description: 'Strategic brand identity design that makes your business memorable. Logo design, visual identity systems, brand guidelines, and complete branding packages.',
    keywords: 'branding agency, brand identity design, logo design, visual identity, brand guidelines, brand strategy, corporate branding, rebrand',
    openGraph: {
        title: 'Branding & Brand Identity Design | Logo Design Agency | Oneskai',
        description: 'Strategic brand identity design that makes your business memorable. Complete branding packages from $3,500.',
        type: 'website',
    },
};

export default function BrandingPage() {
    return <BrandingContent />;
}
