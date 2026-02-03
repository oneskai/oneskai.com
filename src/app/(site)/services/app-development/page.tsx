import { Metadata } from 'next';
import { AppDevelopmentContent } from '@/components/services/AppDevelopmentContent';

export const metadata: Metadata = {
    title: 'Mobile App Development | iOS & Android Development Agency | Oneskai',
    description: 'Native and cross-platform mobile app development. iOS, Android, React Native, and Flutter apps built for performance and engagement.',
    keywords: 'app development, mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps, mobile apps',
    openGraph: {
        title: 'Mobile App Development | iOS & Android Development Agency | Oneskai',
        description: 'Native and cross-platform mobile app development for iOS and Android.',
        type: 'website',
    },
};

export default function AppDevelopmentPage() {
    return <AppDevelopmentContent />;
}
