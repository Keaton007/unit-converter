import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'UnitFlow Editorial Playbook | UnitFlow',
  description:
    'Learn how UnitFlow researches, reviews, and updates conversion data. See our source policy, quality checklist, and change log expectations.',
};

const principles = [
  {
    title: 'Accuracy over speed',
    description: 'We trace every conversion factor to a primary standard such as NIST SP811, ISO/IEC 80000, or regional government references.',
  },
  {
    title: 'Explain the “why”',
    description: 'Beyond raw numbers, every guide must describe use cases, formulas, and pitfalls drawn from real experts (engineers, chefs, educators).',
  },
  {
    title: 'Visible changelog',
    description: 'Each landing page includes an updated-on timestamp plus a summary of what changed.',
  },
];

const reviewSteps = [
  'Research: Gather SI documentation, industry manuals, and peer-reviewed references.',
  'Technical validation: Recreate conversions in code and unit tests, then compare against third-party calculators.',
  'Editorial pass: Ensure copy answers intent, includes examples, and avoids generic filler.',
  'Compliance review: Confirm ad placements meet AdSense policies and user experience standards.',
  'Publish & monitor: Add to sitemap, set reminders for quarterly review or when standards change.',
];

const citations = [
  { label: 'NIST Special Publication 811 – Guide for the Use of the International System of Units (SI)' },
  { label: 'Bureau International des Poids et Mesures (BIPM) SI Brochure' },
  { label: 'ISO/IEC 80000 Quantities and Units series' },
  { label: 'USDA FoodData Central (for culinary weight-to-volume references)' },
  { label: 'World Meteorological Organization Guide to Instruments and Methods of Observation' },
  {
    label: 'King Arthur Baking Ingredient Weight Chart',
    href: 'https://www.kingarthurbaking.com/learn/ingredient-weight-chart',
  },
];

export default function EditorialPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-3">Editorial playbook</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UnitFlow Editorial Playbook</h1>
          <p className="text-lg text-gray-600 mb-8">
            UnitFlow is maintained by Codtive LLC&apos;s research team. We operate like a reference publisher, documenting every change and citing
            authoritative sources.
          </p>

          <section className="grid md:grid-cols-3 gap-6 mb-10">
            {principles.map((principle) => (
              <div key={principle.title} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-indigo-50/50 shadow-sm">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{principle.title}</h2>
                <p className="text-gray-600">{principle.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Review workflow</h2>
            <div className="space-y-4">
              {reviewSteps.map((step, index) => (
                <div key={step} className="flex items-start space-x-4">
                  <span className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Update cadence</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Core calculators</h3>
                <p className="text-gray-600">Quarterly review or immediately after SI/ISO announcements.</p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Currency data</h3>
                <p className="text-gray-600">Live API plus weekly sanity checks against IMF reference rates.</p>
              </div>
              <div className="p-5 rounded-2xl border border-gray-200 bg-gray-50">
                <h3 className="text-lg font-semibold text-gray-900 mb-1">Guides & FAQs</h3>
                <p className="text-gray-600">Bi-monthly editorial sweep for freshness, intent changes, and UX feedback.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Primary sources & citations</h2>
            <p className="text-gray-600 mb-4">
              Each guide references at least two primary or governmental datasets. Below are the baseline sources we rely on most:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {citations.map((cite) => (
                <li key={cite.label}>
                  {cite.href ? (
                    <a
                      href={cite.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-600 hover:text-indigo-800 underline"
                    >
                      {cite.label}
                    </a>
                  ) : (
                    cite.label
                  )}
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 mt-4">
              Have a more recent reference? Email <a href="mailto:support@codtive.com" className="text-indigo-600">support@codtive.com</a> and we&apos;ll review it.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

