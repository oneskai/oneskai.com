import { Metadata } from 'next';
import { ProgrammaticContent } from '@/components/services/ProgrammaticContent';

export const metadata: Metadata = {
    title: 'Programmatic Advertising Services | Display & CTV Ads | Oneskai',
    description: 'Data-driven programmatic advertising across display, CTV, audio, and native channels. Precision targeting at massive scale.',
    keywords: 'programmatic advertising, display ads, CTV advertising, DSP, DV360, The Trade Desk, native ads',
};

export default function ProgrammaticPage() { return <ProgrammaticContent />; }
