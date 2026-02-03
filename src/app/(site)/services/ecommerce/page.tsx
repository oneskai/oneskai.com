import { Metadata } from 'next';
import { EcommerceContent } from '@/components/services/EcommerceContent';

export const metadata: Metadata = {
    title: 'E-commerce Development | Shopify & WooCommerce Agency | Oneskai',
    description: 'Custom e-commerce development on Shopify, WooCommerce, and Magento. High-converting online stores that scale with your business.',
    keywords: 'e-commerce development, Shopify development, WooCommerce, Magento, online store, e-commerce agency, shopping cart, payment integration',
    openGraph: {
        title: 'E-commerce Development | Shopify & WooCommerce Agency | Oneskai',
        description: 'Custom e-commerce development for high-converting online stores.',
        type: 'website',
    },
};

export default function EcommercePage() {
    return <EcommerceContent />;
}
