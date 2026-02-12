import { Metadata } from 'next';
import { WordPressWebDesignContent } from '../../../../../components/services/WordPressWebDesignContent';

export const metadata: Metadata = {
    title: 'Enterprise WordPress Development Services | Oneskai',
    description: 'High-end WordPress development focusing on performance, security, and editorial flexibility. Specialized in Headless WP and custom themes.',
};

export default function WordPressWebDesignPage() {
    return <WordPressWebDesignContent />;
}
