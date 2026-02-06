import { GenericPage } from '@/components/layout/GenericPage/GenericPage';
import { LegalContent } from '@/components/layout/LegalContent/LegalContent';

export default function TermsPage() {
    const sections = [
        {
            title: "Agreement to Terms",
            content: (
                <p>By accessing or using our services, you agree to be bound by these Terms of Service. If you do not agree to all the terms and conditions of this agreement, then you may not access the website or use any services.</p>
            )
        },
        {
            title: "Intellectual Property Rights",
            content: (
                <p>The Site and its original content, features, and functionality are owned by Oneskai and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.</p>
            )
        },
        {
            title: "User Representations",
            content: (
                <p>By using the Site, you represent and warrant that all registration information you submit will be true, accurate, current, and complete; you will maintain the accuracy of such information and promptly update such registration information as necessary.</p>
            )
        },
        {
            title: "Prohibited Activities",
            content: (
                <>
                    <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The Site may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us. Prohibited activities include, but are not limited to:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Systematically retrieving data or other content from the Site to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.</li>
                        <li>Tricking, defrauding, or misleading us and other users, especially in any attempt to learn sensitive account information such as user passwords.</li>
                        <li>Circumventing, disabling, or otherwise interfering with security-related features of the Site.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Limitation of Liability",
            content: (
                <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site.</p>
            )
        },
        {
            title: "Governing Law",
            content: (
                <p>These Terms shall be governed by and defined following the laws of Delaware, USA. Oneskai and yourself irrevocably consent that the courts of Delaware shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these terms.</p>
            )
        },
        {
            title: "Contact Us",
            content: (
                <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the Site, please contact us at: <strong>terms@oneskai.com</strong></p>
            )
        }
    ];

    return (
        <div className="terms-of-service-page">
            <GenericPage
                category="LEGAL"
                title="Terms of Service"
                subtitle="Guidelines for using our platform and services."
                description="Please read these terms carefully before using our services. They govern your relationship with Oneskai."
            />
            <LegalContent sections={sections} lastUpdated="February 7, 2026" />
        </div>
    );
}
