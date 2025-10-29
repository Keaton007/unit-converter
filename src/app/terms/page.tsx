import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'Terms and Conditions | UnitFlow',
  description: 'Terms and Conditions for UnitFlow unit converter - Read our terms of service and legal agreements.',
};

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> October 29, 2025
          </p>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                Welcome to UnitFlow, a unit conversion service operated by Codtive LLC ("Company," "we," "us," or "our"). By accessing or using our website and services (collectively, the "Service"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Service.
              </p>
              <p>
                We reserve the right to modify these Terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of the Service after changes are posted constitutes your acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="mb-4">
                UnitFlow provides a free online unit conversion tool that allows users to convert measurements across various categories including, but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Length and distance</li>
                <li>Weight and mass</li>
                <li>Temperature</li>
                <li>Volume</li>
                <li>Area</li>
                <li>Speed</li>
                <li>Time</li>
                <li>Energy</li>
                <li>Pressure</li>
                <li>Data storage</li>
              </ul>
              <p>
                The Service also includes an optional AI-powered "fun fact" feature that generates interesting information related to your conversions. The Service is provided free of charge and is supported by third-party advertising.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Use of Service</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.1 Permitted Use</h3>
              <p className="mb-4">
                You may use the Service for lawful purposes only. The Service is intended for general informational and educational purposes.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">3.2 Prohibited Activities</h3>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Attempt to gain unauthorized access to our systems or networks</li>
                <li>Use any automated system (including robots, scrapers, or spiders) to access the Service without our express written permission</li>
                <li>Interfere with or disrupt the Service or servers or networks connected to the Service</li>
                <li>Transmit any viruses, malware, or other malicious code</li>
                <li>Collect or harvest any personally identifiable information from the Service</li>
                <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity</li>
                <li>Use the Service in any manner that could damage, disable, overburden, or impair the Service</li>
                <li>Remove, circumvent, disable, damage, or otherwise interfere with any security features of the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. No Warranty on Accuracy</h2>
              <p className="mb-4">
                <strong>IMPORTANT:</strong> While we strive to provide accurate unit conversions, we make no warranties or guarantees regarding the accuracy, reliability, or completeness of any conversion results or information provided through the Service.
              </p>
              <p className="mb-4">
                <strong>USE AT YOUR OWN RISK:</strong> You acknowledge that unit conversion results should be independently verified for any critical, professional, medical, scientific, engineering, or safety-related applications. Do not rely solely on our Service for conversions where accuracy is essential or where errors could result in harm, loss, or damage.
              </p>
              <p>
                The Service is provided for general informational purposes only. For professional, medical, scientific, or technical applications requiring precise measurements, please consult appropriate reference materials or professionals.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. AI-Generated Content</h2>
              <p className="mb-4">
                Our "fun fact" feature uses artificial intelligence (AI) services provided by OpenRouter and/or OpenAI to generate interesting information related to your conversions. You acknowledge and agree that:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-generated content may not always be accurate or factually correct</li>
                <li>Fun facts are provided for entertainment and educational purposes only</li>
                <li>We do not verify the accuracy of AI-generated content</li>
                <li>You should not rely on AI-generated content for any critical decisions or applications</li>
                <li>AI-generated content may be subject to the terms and policies of third-party AI providers</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">6. Intellectual Property Rights</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">6.1 Our Rights</h3>
              <p className="mb-4">
                The Service, including all content, features, functionality, design, logos, software, code, and underlying technology, is owned by Codtive LLC and is protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">6.2 Limited License</h3>
              <p className="mb-4">
                We grant you a limited, non-exclusive, non-transferable, revocable license to access and use the Service for personal, non-commercial purposes, subject to these Terms. This license does not include any right to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any content or software from the Service</li>
                <li>Use the Service for any commercial purpose without our express written permission</li>
                <li>Reverse engineer, decompile, or disassemble any software or technology used in the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">7. Third-Party Services and Links</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.1 Advertising</h3>
              <p className="mb-4">
                Our Service displays advertisements through Google AdSense. These advertisements are provided by third parties, and we have no control over their content. We are not responsible for the content of any advertisements or any products or services advertised. Your interactions with advertisers are solely between you and the advertiser.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.2 Third-Party AI Services</h3>
              <p className="mb-4">
                We use OpenRouter and/or OpenAI to provide AI-generated fun facts. Your use of these features is also subject to the terms and policies of these third-party providers. We are not responsible for the actions, content, or policies of these third-party services.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">7.3 External Links</h3>
              <p>
                The Service may contain links to third-party websites or services. We do not endorse or assume any responsibility for any third-party sites, content, privacy policies, or practices. You access third-party websites at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-4">
                THE SERVICE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Implied warranties of merchantability, fitness for a particular purpose, or non-infringement</li>
                <li>Warranties regarding the accuracy, reliability, timeliness, or completeness of the Service or content</li>
                <li>Warranties that the Service will be uninterrupted, secure, or error-free</li>
                <li>Warranties that defects will be corrected</li>
              </ul>
              <p>
                We do not warrant that the Service will meet your requirements or that the results obtained from the Service will be accurate or reliable. You use the Service at your own discretion and risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">9. Limitation of Liability</h2>
              <p className="mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL CODTIVE LLC, ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Loss of profits, data, use, goodwill, or other intangible losses</li>
                <li>Damages resulting from your use or inability to use the Service</li>
                <li>Damages resulting from any unauthorized access to or use of our servers</li>
                <li>Damages resulting from any errors, inaccuracies, or omissions in the Service or content</li>
                <li>Damages resulting from reliance on conversion results or AI-generated content</li>
                <li>Any other damages arising out of or in connection with your use of the Service</li>
              </ul>
              <p className="mb-4">
                WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE), OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
              </p>
              <p>
                SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OR LIMITATION OF CERTAIN WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, SOME OF THE ABOVE LIMITATIONS MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">10. Indemnification</h2>
              <p>
                You agree to defend, indemnify, and hold harmless Codtive LLC, its officers, directors, employees, agents, and affiliates from and against any claims, liabilities, damages, losses, costs, expenses, or fees (including reasonable attorneys' fees) arising from:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Your use or misuse of the Service</li>
                <li>Your violation of these Terms</li>
                <li>Your violation of any rights of another party</li>
                <li>Your violation of any applicable laws or regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">11. Termination</h2>
              <p className="mb-4">
                We reserve the right to terminate or suspend your access to the Service at any time, without prior notice or liability, for any reason, including but not limited to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Violation of these Terms</li>
                <li>Suspected fraudulent, abusive, or illegal activity</li>
                <li>Extended periods of inactivity</li>
                <li>Technical or security issues</li>
                <li>Discontinuation of the Service</li>
              </ul>
              <p>
                Upon termination, your right to use the Service will immediately cease. All provisions of these Terms that by their nature should survive termination shall survive, including but not limited to ownership provisions, warranty disclaimers, indemnification, and limitations of liability.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">12. Governing Law and Jurisdiction</h2>
              <p className="mb-4">
                These Terms shall be governed by and construed in accordance with the laws of the United States and the state in which Codtive LLC is registered, without regard to its conflict of law provisions.
              </p>
              <p>
                You agree that any legal action or proceeding arising out of or relating to these Terms or the Service shall be instituted exclusively in the federal or state courts located in the United States. You waive any objection to the venue of any such proceeding and any claim that such forum is inconvenient.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">13. Dispute Resolution</h2>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">13.1 Informal Resolution</h3>
              <p className="mb-4">
                Before filing any formal legal action, you agree to first contact us at Keaton@codtive.com to attempt to resolve any dispute, claim, or controversy informally. We will attempt to resolve the dispute through good-faith negotiations.
              </p>

              <h3 className="text-xl font-semibold text-gray-800 mb-3 mt-4">13.2 Class Action Waiver</h3>
              <p>
                To the extent permitted by applicable law, you agree that any dispute resolution proceedings will be conducted only on an individual basis and not in a class, consolidated, or representative action. You waive any right to participate in a class action lawsuit or class-wide arbitration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">14. Severability</h2>
              <p>
                If any provision of these Terms is found to be unlawful, void, or unenforceable, that provision shall be deemed severable from these Terms and shall not affect the validity and enforceability of any remaining provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">15. Entire Agreement</h2>
              <p>
                These Terms, together with our Privacy Policy, constitute the entire agreement between you and Codtive LLC regarding the Service and supersede all prior agreements and understandings, whether written or oral, relating to the subject matter herein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">16. Waiver</h2>
              <p>
                No waiver of any term or condition of these Terms shall be deemed a further or continuing waiver of such term or condition or any other term or condition. Any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">17. Assignment</h2>
              <p>
                You may not assign or transfer these Terms or your rights and obligations under these Terms without our prior written consent. We may assign these Terms to any affiliate or in connection with a merger, acquisition, or sale of assets without restriction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">18. Contact Information</h2>
              <p className="mb-4">
                If you have any questions, concerns, or feedback regarding these Terms or the Service, please contact us:
              </p>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="font-semibold mb-2">Codtive LLC</p>
                <p>Email: <a href="mailto:Keaton@codtive.com" className="text-indigo-600 hover:text-indigo-800 underline">Keaton@codtive.com</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">19. Acknowledgment</h2>
              <p>
                BY USING THE SERVICE, YOU ACKNOWLEDGE THAT YOU HAVE READ THESE TERMS AND CONDITIONS, UNDERSTAND THEM, AND AGREE TO BE BOUND BY THEM. IF YOU DO NOT AGREE TO THESE TERMS, YOU MUST NOT ACCESS OR USE THE SERVICE.
              </p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

