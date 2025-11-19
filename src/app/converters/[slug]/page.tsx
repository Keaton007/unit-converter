import { notFound } from 'next/navigation';
import Link from 'next/link';
import Script from 'next/script';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { converterLandingPages, getConverterLanding } from '@/utils/converterLandingPages';

const BASE_URL = 'https://unitconverter.it.com';

interface ConverterLandingProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return converterLandingPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: ConverterLandingProps) {
  const { slug } = await params;
  const landing = getConverterLanding(slug);

  if (!landing) {
    return {
      title: 'Converter Guide Not Found | UnitFlow',
    };
  }

  return {
    title: `${landing.title} | UnitFlow`,
    description: landing.summary,
    keywords: landing.keywords,
  };
}

export default async function ConverterLandingPage({ params }: ConverterLandingProps) {
  const { slug } = await params;
  const landing = getConverterLanding(slug);

  if (!landing) {
    notFound();
  }

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: landing.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  const howToJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: landing.title,
    description: landing.summary,
    totalTime: 'PT1M',
    supply: [
      {
        '@type': 'HowToSupply',
        name: 'UnitFlow converter',
      },
    ],
    step: landing.steps.map((step, index) => ({
      '@type': 'HowToStep',
      position: index + 1,
      name: `Step ${index + 1}`,
      text: step,
    })),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${BASE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Converter Playbooks',
        item: `${BASE_URL}/converters`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: landing.title,
        item: `${BASE_URL}/converters/${landing.slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      <Script id={`ld-json-${landing.slug}`} type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify([faqJsonLd, howToJsonLd, breadcrumbJsonLd])}
      </Script>

      <main className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12">
          <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-2">{landing.category} conversion</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{landing.title}</h1>
          <p className="text-lg text-gray-600 mb-6">{landing.summary}</p>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-6 mb-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-wide text-green-600 font-semibold">Conversion constant</p>
              <p className="text-3xl font-bold text-green-900">{landing.heroStat}</p>
              <p className="text-gray-700 mt-2">{landing.heroContext}</p>
            </div>
            <Link
              href="/#converter-card"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white rounded-full font-semibold hover:bg-green-700 transition-colors"
            >
              Launch live converter
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Step-by-step instructions</h2>
            <ol className="space-y-4">
              {landing.steps.map((step, index) => (
                <li key={step} className="flex items-start space-x-4">
                  <span className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                    {index + 1}
                  </span>
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </section>

          <section className="mb-10 grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl border border-gray-200 p-6 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Conversion formula</h3>
              <p className="text-lg font-semibold text-indigo-700">{landing.formula.expression}</p>
              <p className="text-gray-700 mt-3">{landing.formula.explanation}</p>
              {landing.formula.tip && <p className="text-sm text-gray-500 mt-3">{landing.formula.tip}</p>}
            </div>
            <div className="rounded-2xl border border-gray-200 p-6 bg-white shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">When people use this conversion</h3>
              <div className="space-y-4">
                {landing.scenarioHighlights.map((scenario) => (
                  <div key={scenario.title}>
                    <p className="font-semibold text-gray-900">{scenario.title}</p>
                    <p className="text-gray-600">{scenario.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick reference table</h2>
            <div className="overflow-hidden rounded-2xl border border-gray-200">
              <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                <thead className="bg-gray-50 text-left">
                  <tr>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">{landing.fromUnit}</th>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">{landing.toUnit}</th>
                    <th className="px-6 py-3 font-semibold text-gray-700 uppercase tracking-wide">Context</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {landing.quickTable.map((row) => (
                    <tr key={`${row.input}-${row.output}`}>
                      <td className="px-6 py-4 text-gray-900 font-medium">{row.input}</td>
                      <td className="px-6 py-4 text-gray-700">{row.output}</td>
                      <td className="px-6 py-4 text-gray-600">{row.context}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently asked questions</h2>
            <div className="space-y-4">
              {landing.faqs.map((faq) => (
                <details key={faq.question} className="group border border-gray-200 rounded-2xl p-4 bg-white shadow-sm">
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
          </section>

          <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center">
            <h2 className="text-2xl font-bold mb-3">Ready to convert {landing.fromUnit.toLowerCase()} to {landing.toUnit.toLowerCase()}?</h2>
            <p className="text-indigo-100 mb-6">
              Use the live calculator for precise results, then revisit this guide for formulas and best practices.
            </p>
            <Link
              href="/#converter-card"
              className="inline-flex items-center px-8 py-3 bg-white text-indigo-700 rounded-full font-semibold hover:bg-indigo-50 transition-colors"
            >
              Open converter
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}

