import { Metadata } from 'next';
import { TestimonialsContent } from '@/components/work/TestimonialsContent';

export const metadata: Metadata = {
    title: 'Client Testimonials | Success Stories | Oneskai',
    description: 'Read verified testimonials from marketing leaders and founders who have transformed their businesses through our data-driven growth strategies.',
};

export default function TestimonialsPage() {
    return <TestimonialsContent />;
}
