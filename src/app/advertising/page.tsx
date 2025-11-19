import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'UnitFlow Ad Experience Policy | UnitFlow',
  description:
    'See how UnitFlow balances revenue and usability: ad placements, partners, density limits, and how to report issues.',
};

const commitments = [
  {
    title: 'User-first layout',
    description: 'No autoplay video, audio, or sticky ads that obscure inputs. Ads never interrupt a conversion flow.',
  },
  {
    title: 'Clear labeling',
    description: 'Ad slots include accessible labels (“Advertisement”) and aria-describedby attributes for screen readers.',
  },
  {
    title: 'Limited density',
    description: 'We cap ads at a 30/70 ratio of ad impressions to content on desktop, 20/80 on mobile.',
  },
];

const disclosures = [
  {
    title: 'Ad networks',
    items: ['Google AdSense (primary)', 'Google Ad Manager (fallback for direct campaigns)'],
  },
  {
    title: 'Affiliate links',
    items: ['Occasional links to measurement hardware or textbooks. Marked as “affiliate link” inline.'],
  },
  {
    title: 'Data usage',
    items: [
      'We do not sell personal data.',
      'Ad partners may use cookies or device IDs as described in the Privacy Policy.',
      'Users can opt out via Google Ad Settings or industry opt-out portals.',
    ],
  },
];

const placementTable = [
  { location: 'Desktop sidebar', details: 'Vertical unit (160x600) + medium rectangle', purpose: 'Non-intrusive background monetization' },
  { location: 'Below converter', details: 'Responsive horizontal unit', purpose: 'Visible only after user interaction' },
  { location: 'Mobile footer', details: 'Single responsive unit', purpose: 'Maintains Core Web Vitals and accessibility' },
];

export default function AdvertisingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-gray-100">
          <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-3">Ad experience</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">UnitFlow Ad Experience Policy</h1>
          <p className="text-gray-600 text-lg mb-8">
            Advertising keeps the converter free for everyone. We follow Google Publisher Policies and document our decisions for transparency.
          </p>

          <section className="grid md:grid-cols-3 gap-6 mb-10">
            {commitments.map((commitment) => (
              <div key={commitment.title} className="rounded-2xl border border-gray-200 p-6 bg-gradient-to-br from-white to-indigo-50/40">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">{commitment.title}</h2>
                <p className="text-gray-600">{commitment.description}</p>
              </div>
            ))}
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Current monetization partners</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {disclosures.map((disclosure) => (
                <div key={disclosure.title} className="p-6 rounded-2xl border border-gray-200 bg-gray-50">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{disclosure.title}</h3>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    {disclosure.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Where ads appear</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">Location</th>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">Format</th>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">Purpose</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {placementTable.map((row) => (
                    <tr key={row.location}>
                      <td className="px-6 py-4 text-gray-900 font-medium">{row.location}</td>
                      <td className="px-6 py-4 text-gray-600">{row.details}</td>
                      <td className="px-6 py-4 text-gray-600">{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-gray-400 mt-2">Last updated: November 18, 2025</p>
          </section>

          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Report a concern</h2>
            <p className="text-gray-600 mb-4">
              See an inappropriate ad or policy violation? Email <a href="mailto:support@codtive.com" className="text-indigo-600">support@codtive.com</a> with a screenshot and URL. We remove offending creatives and notify Google.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

