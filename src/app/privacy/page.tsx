import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Privacy Policy | UnitFlow',
  description: 'Privacy Policy for UnitFlow unit converter - Learn how we handle your data and protect your privacy.',
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> October 29, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to UnitFlow, operated by Codtive LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). We are committed to protecting your privacy and being transparent about our data practices. This Privacy Policy explains how information is collected, used, and shared when you use our website and unit conversion services.
              </p>
              <p>
                <strong>Contact Information:</strong> For any privacy-related questions or concerns, please contact us at Keaton@codtive.com.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.1 Information You Provide</h3>
              <p className="mb-4">
                UnitFlow is a client-side unit conversion tool. We do not require you to create an account, and we do not directly collect, store, or process any personal information such as your name, email address, or contact details.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.2 Automatically Collected Information</h3>
              <p className="mb-4">
                When you use our service, certain technical information may be collected automatically:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Conversion Data:</strong> When you request a &quot;fun fact&quot; about a unit conversion, we send the conversion value, unit names, and category to our AI service provider (OpenRouter or OpenAI) to generate the fun fact. This data is temporarily cached on our servers for up to 6 hours to improve performance and reduce costs.</li>
                <li><strong>Usage Data:</strong> Standard web server logs may collect information such as your IP address, browser type, device information, operating system, referring URLs, and pages visited.</li>
              </ul>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">2.3 Third-Party Cookies and Tracking</h3>
              <p className="mb-4">
                We use Google AdSense to display advertisements on our website. Google AdSense and its advertising partners use cookies and similar technologies to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Display personalized advertisements based on your browsing activity</li>
                <li>Measure ad performance and effectiveness</li>
                <li>Provide aggregate analytics data</li>
                <li>Build user profiles for advertising purposes</li>
              </ul>
              <p>
                These third-party services may collect information such as your IP address, device identifiers, browsing behavior, and other data. We do not have direct access to or control over these cookies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. How We Use Information</h2>
              <p className="mb-4">We use the limited information we collect for the following purposes:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Provision:</strong> To provide unit conversion functionality and generate AI-powered fun facts</li>
                <li><strong>Performance Optimization:</strong> To cache fun facts and improve website loading times</li>
                <li><strong>Service Improvement:</strong> To understand usage patterns and improve our services</li>
                <li><strong>Advertising:</strong> To display advertisements through Google AdSense (managed by third parties)</li>
                <li><strong>Security:</strong> To detect, prevent, and address technical issues or potential abuse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Third-Party Services</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.1 Google AdSense</h3>
              <p className="mb-4">
                We use Google AdSense for advertising. Google may use cookies and web beacons to collect information about your visits to this and other websites to provide relevant advertisements. To learn more about how Google uses data when you use our site, visit: <a href="https://policies.google.com/technologies/partner-sites" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/partner-sites</a>
              </p>
              <p className="mb-4">
                You can opt out of personalized advertising by visiting <a href="https://www.google.com/settings/ads" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">Google Ads Settings</a> or by visiting <a href="http://www.aboutads.info/choices/" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">www.aboutads.info</a>.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">4.2 AI Service Providers</h3>
              <p className="mb-4">
                We use OpenRouter and/or OpenAI APIs to generate fun facts about unit conversions. When you request a fun fact, we send the conversion data (value, unit names, and category) to these services. These providers may process this data according to their own privacy policies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>OpenAI Privacy Policy: <a href="https://openai.com/policies/privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy</a></li>
                <li>OpenRouter Privacy Policy: <a href="https://openrouter.ai/privacy" className="text-indigo-600 hover:text-indigo-800 underline" target="_blank" rel="noopener noreferrer">https://openrouter.ai/privacy</a></li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Data Sharing and Disclosure</h2>
              <p className="mb-4">We do not sell your personal information. We may share information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Providers:</strong> With third-party service providers (Google AdSense, OpenRouter, OpenAI) as described above</li>
                <li><strong>Legal Requirements:</strong> When required by law, court order, or government authority</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Protection of Rights:</strong> To protect our rights, property, or safety, or that of our users or others</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Data Retention</h2>
              <p>
                We retain minimal data for limited periods:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Fun Fact Cache:</strong> Conversion data used for fun facts is cached for up to 6 hours and then automatically deleted</li>
                <li><strong>Server Logs:</strong> Standard server logs may be retained for security and operational purposes for a reasonable period</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Your Rights and Choices</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.1 Cookie Controls</h3>
              <p className="mb-4">
                You can control cookies through your browser settings. Most browsers allow you to refuse cookies or delete existing cookies. However, disabling cookies may affect the functionality of advertisements and certain website features.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.2 Do Not Track</h3>
              <p className="mb-4">
                Some browsers have a &quot;Do Not Track&quot; feature. We do not currently respond to Do Not Track signals, but third-party advertising partners may honor these signals according to their own policies.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.3 California Privacy Rights</h3>
              <p className="mb-4">
                If you are a California resident, you have specific rights under the California Consumer Privacy Act (CCPA), including the right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Know what personal information is collected</li>
                <li>Know if personal information is sold or disclosed and to whom</li>
                <li>Opt out of the sale of personal information</li>
                <li>Request deletion of personal information</li>
                <li>Non-discrimination for exercising your rights</li>
              </ul>
              <p className="mt-4">
                To exercise these rights, please contact us at Keaton@codtive.com. Note that we do not sell personal information as defined by CCPA.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Children's Privacy</h2>
              <p>
                Our service is not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us at Keaton@codtive.com, and we will take appropriate steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. International Users</h2>
              <p>
                Our services are operated in the United States. If you access our website from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located and our service providers operate. By using our services, you consent to this transfer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Data Security</h2>
              <p>
                We implement reasonable security measures to protect information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission or electronic storage method is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Changes to This Privacy Policy</h2>
              <p>
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make changes, we will update the "Effective Date" at the top of this policy. We encourage you to review this Privacy Policy periodically. Your continued use of our services after changes are posted constitutes your acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Contact Us</h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Codtive LLC</p>
                <p>Email: <a href="mailto:Keaton@codtive.com" className="text-indigo-600 hover:text-indigo-800 underline">Keaton@codtive.com</a></p>
              </div>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

