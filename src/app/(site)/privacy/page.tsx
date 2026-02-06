import { LegalContent } from '@/components/layout/LegalContent/LegalContent';

export default function PrivacyPage() {
    const sections = [
        {
            title: "Introduction",
            content: (
                <p>Welcome to Oneskai. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
            )
        },
        {
            title: "The Data We Collect About You",
            content: (
                <>
                    <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li><strong>Identity Data:</strong> includes first name, last name, username or similar identifier.</li>
                        <li><strong>Contact Data:</strong> includes email address and telephone numbers.</li>
                        <li><strong>Technical Data:</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform.</li>
                        <li><strong>Usage Data:</strong> includes information about how you use our website, products and services.</li>
                    </ul>
                </>
            )
        },
        {
            title: "How We Use Your Personal Data",
            content: (
                <>
                    <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                        <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                        <li>Where we need to comply with a legal or regulatory obligation.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Data Security",
            content: (
                <p>We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorized way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.</p>
            )
        },
        {
            title: "Your Legal Rights",
            content: (
                <>
                    <p>Under certain circumstances, you have rights under data protection laws in relation to your personal data, including the right to:</p>
                    <ul style={{ paddingLeft: '20px', marginTop: '10px' }}>
                        <li>Request access to your personal data.</li>
                        <li>Request correction of your personal data.</li>
                        <li>Request erasure of your personal data.</li>
                        <li>Object to processing of your personal data.</li>
                        <li>Request restriction of processing your personal data.</li>
                        <li>Request transfer of your personal data.</li>
                        <li>Right to withdraw consent.</li>
                    </ul>
                </>
            )
        },
        {
            title: "Contact Us",
            content: (
                <p>If you have any questions about this privacy policy or our privacy practices, please contact us at: <strong>legal@oneskai.com</strong></p>
            )
        }
    ];

    return (
        <div className="privacy-policy-page">
            <LegalContent
                title="Privacy Policy"
                subtitle="Your privacy is important to us. This policy outlines how we collect, use, and safeguard your information in accordance with global data protection standards."
                sections={sections}
                lastUpdated="February 7, 2026"
            />
        </div>
    );
}
