import React from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conversionCategories } from '@/utils/conversions';
import { categoryEducation } from '@/utils/educationalContent';

const categoryIcons: { [key: string]: string } = {
  'Length': 'M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z',
  'Weight': 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
  'Temperature': 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
  'Volume': 'M12 2.25c-3.5 3.5-6.75 7.25-6.75 10.5a6.75 6.75 0 1013.5 0c0-3.25-3.25-7-6.75-10.5z',
  'Area': 'M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z',
  'Speed': 'M13 10V3L4 14h7v7l9-11h-7z',
  'Time': 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z',
  'Data': 'M4 6h16v4H4V6zm0 6h16v6H4v-6z',
  'Pressure': 'M12 6v12m-6-6h12',
  'Energy': 'M13 10V3L4 14h7v7l9-11h-7z',
  'Data Rate': 'M3 12h4l3 8 4-16 3 8h4',
  'Currency': 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2'
};

const categoryColors: { [key: string]: string } = {
  'Length': 'text-indigo-500',
  'Weight': 'text-purple-500',
  'Temperature': 'text-red-500',
  'Volume': 'text-blue-500',
  'Area': 'text-lime-600',
  'Speed': 'text-amber-500',
  'Time': 'text-gray-600',
  'Data': 'text-cyan-600',
  'Data Rate': 'text-cyan-600',
  'Pressure': 'text-slate-600',
  'Energy': 'text-yellow-500',
  'Currency': 'text-green-600',
};

interface GuidePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return conversionCategories.map((category) => ({
    slug: category.name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

export async function generateMetadata({ params }: GuidePageProps) {
  const { slug } = await params;
  const category = conversionCategories.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    return {
      title: 'Guide Not Found | UnitFlow',
    };
  }

  const education = categoryEducation[category.name];

  return {
    title: `${category.name} Conversion Guide | UnitFlow`,
    description: education?.overview || `Complete guide to ${category.name.toLowerCase()} conversions and measurements.`,
  };
}

export default async function GuidePage({ params }: GuidePageProps) {
  const { slug } = await params;
  const category = conversionCategories.find(
    (cat) => cat.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  if (!category) {
    notFound();
  }

  const education = categoryEducation[category.name];

  if (!education) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <Link
          href="/guides"
          className="inline-flex items-center text-indigo-600 hover:text-indigo-700 mb-6 font-medium"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Guides
        </Link>

        <article className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <header className="mb-8">
            <div className="flex items-center mb-4">
              <svg className={`w-12 h-12 ${categoryColors[category.name] || 'text-indigo-500'} mr-4`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoryIcons[category.name] || categoryIcons['Length']} />
              </svg>
              <div>
                <h1 className="text-4xl font-bold text-gray-900">{category.name} Conversion Guide</h1>
                <p className="text-gray-600 mt-2">Complete guide to understanding {category.name.toLowerCase()} measurements</p>
              </div>
            </div>
          </header>

          <div className="prose prose-lg max-w-none space-y-8">
            {/* Overview */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed">
                {education.overview}
              </p>
            </section>

            {/* History */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
                Historical Background
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {education.history}
              </p>
            </section>

            {/* Applications */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Real-World Applications
              </h2>
              <ul className="space-y-3">
                {education.applications.map((app, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="w-6 h-6 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{app}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Interesting Facts */}
            <section className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                <svg className="w-6 h-6 mr-2 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
                Interesting Facts
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {education.interestingFacts.map((fact, idx) => (
                  <div key={idx} className="bg-white rounded-lg p-4 shadow-sm">
                    <p className="text-gray-700">{fact}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Related Units */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Related Concepts</h2>
              <p className="text-gray-700 leading-relaxed">
                {education.relatedUnits}
              </p>
            </section>

            {/* CTA */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-2xl font-bold mb-4">Ready to Convert?</h2>
              <p className="text-indigo-100 mb-6">
                Use our free unit converter to easily convert between different {category.name.toLowerCase()} measurements.
              </p>
              <Link
                href="/"
                className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
              >
                Try the Converter
              </Link>
            </section>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}


