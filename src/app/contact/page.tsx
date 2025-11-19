import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'UnitFlow Support Hub | Talk to Real People',
  description:
    'Get direct access to the UnitFlow team for troubleshooting, feature requests, partnerships, or policy questions. Everything routes through one inbox.',
};

const supportEmail = 'support@codtive.com';

const contactTopics = [
  {
    title: 'General support',
    description: 'Bug reports, feature requests, or “how do I convert X?” questions.',
  },
  {
    title: 'Privacy & compliance',
    description: 'Data deletion, cookie policy questions, and policy clarifications.',
  },
  {
    title: 'Partnerships & press',
    description: 'Media interviews, curriculum licensing, or integration ideas.',
  },
];

const responseTimes = [
  { label: 'General support', time: 'Within 1 business day' },
  { label: 'Partnership requests', time: 'Within 2 business days' },
  { label: 'Policy/compliance', time: 'Within 72 hours' },
];

const faqs = [
  {
    question: 'Can you add a new converter or measurement system?',
    answer:
      'Yes. Send us the name, units, and any regional considerations. We prioritize requests with clear formulas or regulatory references.',
  },
  {
    question: 'How do I report incorrect data?',
    answer:
      'Include the unit pair, value you attempted, expected result, and a supporting source (NIST, ISO, academic text). We re-test and publish fix notes on the editorial page.',
  },
  {
    question: 'Do you offer API access?',
    answer:
      'A read-only JSON endpoint is on the roadmap. Contact us with your use case and we will share the beta timeline.',
  },
  {
    question: 'What information speeds up support?',
    answer:
      'Include the conversion you attempted, the value you entered, and (if applicable) the device/browser you were using. Screenshots help us reproduce issues faster.',
  },
  {
    question: 'Do you provide phone or chat support?',
    answer:
      'Not yet. Email allows us to keep a detailed history of your request and route it to the right engineer or editor. We typically respond the same business day.',
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-3">Support hub</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">UnitFlow Support Hub</h1>
          <p className="text-gray-600 text-lg mb-8">
            Real humans answer every request. That includes bug reports, roadmap ideas, partnership pitches, and policy questions.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <section className="rounded-3xl border border-gray-200 p-6 shadow-sm bg-gradient-to-br from-white to-indigo-50/50">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">One inbox, multiple topics</h2>
              <p className="text-gray-600 mb-4">
                We keep everything routed through a single team so you never wonder which address to use. Drop us a line at:
              </p>
              <Link href={`mailto:${supportEmail}`} className="text-2xl font-mono text-indigo-600 font-semibold break-words">
                {supportEmail}
              </Link>
              <ul className="space-y-3 mt-6">
                {contactTopics.map((topic) => (
                  <li key={topic.title} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-indigo-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{topic.title}</p>
                      <p className="text-gray-600 text-sm">{topic.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gray-50 rounded-3xl p-6 border border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-3">Response times</h2>
              <p className="text-gray-600 mb-4">We reply Monday–Friday, 9 a.m.–5 p.m. Pacific Time.</p>
              <ul className="space-y-4">
                {responseTimes.map((item) => (
                  <li key={item.label} className="flex items-center justify-between">
                    <span className="font-medium text-gray-800">{item.label}</span>
                    <span className="text-indigo-600 font-semibold">{item.time}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="mb-10 rounded-3xl border border-gray-200 p-6 bg-white shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">How to get the fastest reply</h2>
            <ol className="list-decimal pl-5 space-y-3 text-gray-700">
              <li>Mention the exact conversion or page you were using (e.g., “Cooking category → Cups to Milliliters”).</li>
              <li>Include screenshots if something looked off because they help us reproduce the issue quickly.</li>
              <li>Let us know your browser/device so we can test under similar conditions.</li>
            </ol>
          </section>
        </div>

        <div className="mt-10 bg-white rounded-3xl shadow-lg border border-gray-100 p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently asked questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <details key={faq.question} className="group border border-gray-200 rounded-2xl p-4">
                <summary className="flex items-center justify-between cursor-pointer list-none">
                  <span className="text-lg font-semibold text-gray-900">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <p className="text-gray-600 mt-3">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

