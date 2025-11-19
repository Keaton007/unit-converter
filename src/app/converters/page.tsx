import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { converterLandingPages } from '@/utils/converterLandingPages';

export const metadata = {
  title: 'Popular Converter Guides | UnitFlow',
  description: 'Deep-dive landing pages for high-intent conversions such as meters to feet, Celsius to Fahrenheit, and USD to EUR.',
};

export default function ConverterGuidesIndex() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />

      <main className="container mx-auto px-6 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-2">Converter Guides</p>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Popular conversion playbooks</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each guide includes formulas, real-world scenarios, quick charts, and FAQs tailored to a specific conversion.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {converterLandingPages.map((page) => (
            <Link
              key={page.slug}
              href={`/converters/${page.slug}`}
              className="group bg-white rounded-3xl border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-semibold text-indigo-500 uppercase">{page.category}</span>
                <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{page.title}</h2>
              <p className="text-gray-600 flex-1">{page.summary}</p>
              <div className="mt-4 text-sm text-gray-500 font-semibold">{page.heroStat}</div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

