import { Metadata } from 'next';
import { EventsContent } from '@/components/events/EventsContent';

export const metadata: Metadata = {
    title: 'Events & Webinars | Oneskai',
    description: 'Join our webinars, workshops, and in-person events. Learn from marketing experts, stay ahead of trends, and connect with industry peers.',
    keywords: 'marketing events, webinars, workshops, digital marketing conference, marketing training',
};

export default function EventsPage() {
    return <EventsContent />;
}
