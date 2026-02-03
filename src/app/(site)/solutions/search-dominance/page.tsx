import { Metadata } from 'next';
import { SearchDominanceContent } from '@/components/solutions/SearchDominanceContent';

export const metadata: Metadata = {
    title: 'Search Dominance Solutions | SEO, PPC & GEO | Oneskai',
    description: 'Comprehensive search strategy combining SEO, PPC, and GEO to dominate search results and capture high-intent traffic.',
    keywords: 'search dominance, SEO, PPC, Google Ads, GEO, search marketing, organic search',
};

export default function SearchDominancePage() { return <SearchDominanceContent />; }
