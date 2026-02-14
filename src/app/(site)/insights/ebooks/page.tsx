import { EbooksContent } from '@/components/resources/EbooksContent';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Expert E-books & Guides | Oneskai Resources',
    description: 'Download our comprehensive guides on digital transformation, enterprise SEO frameworks, and generative search strategy.',
    keywords: ['SEO e-books', 'digital transformation guides', 'marketing frameworks', 'AEO strategy download']
};

export default function EbooksPage() {
    return (
        <main>
            <EbooksContent />
        </main>
    );
}
