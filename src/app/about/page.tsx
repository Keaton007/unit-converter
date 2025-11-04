import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'About UnitFlow - How Unit Conversion Works | UnitFlow',
  description: 'Learn how UnitFlow unit converter works, its features, and why it\'s the best free tool for converting between different measurement units.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About UnitFlow</h1>
          <p className="text-xl text-gray-600 mb-12">
            Your free, fast, and accurate unit conversion tool
          </p>

          <div className="prose prose-lg max-w-none space-y-12">
            {/* What is UnitFlow */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">What is UnitFlow?</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                UnitFlow is a comprehensive, free online unit converter that makes it easy to convert between hundreds of different measurement units across 12 major categories. Whether you&apos;re a student, professional, chef, engineer, or traveler, UnitFlow helps you convert measurements instantly with precision and clarity.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to provide the most intuitive, accurate, and educational unit conversion experience available online—completely free of charge.
              </p>
            </section>

            {/* How It Works */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How Unit Conversion Works</h2>
              
              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">The Mathematical Foundation</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unit conversion is based on conversion factors—mathematical ratios that define the relationship between different units of measurement. For example:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Length:</strong> 1 meter = 100 centimeters (factor: 100)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Weight:</strong> 1 kilogram = 1000 grams (factor: 1000)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-indigo-600 mr-2">•</span>
                    <span><strong>Temperature:</strong> Uses specific formulas (e.g., °F = °C × 9/5 + 32)</span>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-gray-900 mb-3 mt-6">The Conversion Process</h3>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">1</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Select Your Category</h4>
                    <p className="text-gray-700">Choose the type of measurement you want to convert (Length, Weight, Temperature, etc.)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">2</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Enter Your Value</h4>
                    <p className="text-gray-700">Input the number you want to convert in the &quot;From&quot; field</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">3</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Choose Your Units</h4>
                    <p className="text-gray-700">Select the unit you&apos;re converting from and the unit you&apos;re converting to</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold mr-4">4</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Get Instant Results</h4>
                    <p className="text-gray-700">UnitFlow calculates and displays the converted value instantly, accurate to 6 decimal places</p>
                  </div>
                </li>
              </ol>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
                  <p className="text-gray-700">Instant conversions with real-time calculations as you type</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Highly Accurate</h3>
                  <p className="text-gray-700">Precise calculations using verified conversion factors</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Educational Content</h3>
                  <p className="text-gray-700">Learn about measurement history, applications, and interesting facts</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Mobile Friendly</h3>
                  <p className="text-gray-700">Works perfectly on all devices—desktop, tablet, and mobile</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Quick Conversions</h3>
                  <p className="text-gray-700">One-click access to common conversions for each category</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Privacy First</h3>
                  <p className="text-gray-700">No account required. All conversions happen client-side</p>
                </div>
              </div>
            </section>

            {/* Categories */}
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported Categories</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                UnitFlow supports conversions across 12 major measurement categories:
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {['Length', 'Weight', 'Temperature', 'Volume', 'Area', 'Speed', 'Time', 'Data', 'Data Rate', 'Pressure', 'Energy', 'Currency'].map((category) => (
                  <div key={category} className="bg-indigo-50 rounded-lg px-4 py-2 text-gray-700 font-medium">
                    {category}
                  </div>
                ))}
              </div>
            </section>

            {/* Why Use UnitFlow */}
            <section className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-4">Why Use UnitFlow?</h2>
              <ul className="space-y-3 text-indigo-100">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Completely free with no registration required</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Educational content to help you understand measurements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Live currency rates updated in real-time</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Clean, modern interface that&apos;s easy to use</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>No ads interrupting your workflow (contextual advertising only)</span>
                </li>
              </ul>
            </section>

            {/* CTA */}
            <section className="text-center">
              <Link
                href="/"
                className="inline-block bg-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-indigo-700 transition-colors shadow-lg text-lg"
              >
                Start Converting Now
              </Link>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


