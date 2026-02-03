import { Metadata } from 'next';
import { GraphicDesignContent } from '@/components/services/GraphicDesignContent';

export const metadata: Metadata = {
    title: 'Graphic Design Services | Creative Design Agency | Oneskai',
    description: 'Professional graphic design services for print and digital. Social media graphics, marketing collateral, publication design, and custom illustrations.',
    keywords: 'graphic design, print design, social media graphics, marketing collateral, publication design, illustration, creative agency, visual design',
    openGraph: {
        title: 'Graphic Design Services | Creative Design Agency | Oneskai',
        description: 'Professional graphic design services for print and digital media.',
        type: 'website',
    },
};

export default function GraphicDesignPage() {
    return <GraphicDesignContent />;
}
