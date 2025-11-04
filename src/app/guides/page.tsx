import React from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { conversionCategories } from '@/utils/conversions';
import { categoryEducation } from '@/utils/educationalContent';

export const metadata = {
  title: 'Unit Conversion Guides | UnitFlow',
  description: 'Comprehensive guides to understanding different types of unit conversions, including length, weight, temperature, volume, and more.',
};

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
  'Length': 'text-indigo-500 bg-indigo-50',
  'Weight': 'text-purple-500 bg-purple-50',
  'Temperature': 'text-red-500 bg-red-50',
  'Volume': 'text-blue-500 bg-blue-50',
  'Area': 'text-lime-600 bg-lime-50',
  'Speed': 'text-amber-500 bg-amber-50',
  'Time': 'text-gray-600 bg-gray-50',
  'Data': 'text-cyan-600 bg-cyan-50',
  'Data Rate': 'text-cyan-600 bg-cyan-50',
  'Pressure': 'text-slate-600 bg-slate-50',
  'Energy': 'text-yellow-500 bg-yellow-50',
  'Currency': 'text-green-600 bg-green-50',
};

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <Header />
      
      <main className="container mx-auto px-6 py-12 max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Unit Conversion Guides</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive educational guides to help you understand different types of measurements, their history, applications, and real-world uses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {conversionCategories.map((category) => {
            const education = categoryEducation[category.name];
            const slug = category.name.toLowerCase().replace(/\s+/g, '-');
            
            return (
              <Link
                key={category.name}
                href={`/guides/${slug}`}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className={`p-6 ${categoryColors[category.name] || 'bg-indigo-50'}`}>
                  <div className="flex items-center justify-between mb-4">
                    <svg className={`w-12 h-12 ${categoryColors[category.name]?.split(' ')[0] || 'text-indigo-500'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={categoryIcons[category.name] || categoryIcons['Length']} />
                    </svg>
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h2>
                  {education && (
                    <p className="text-gray-600 text-sm line-clamp-3">
                      {education.overview}
                    </p>
                  )}
                  <div className="mt-4 flex items-center text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
                    Read Guide
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Master Unit Conversions</h2>
            <p className="text-lg text-indigo-100 mb-6">
              Whether you&apos;re a student, professional, or just curious, our comprehensive guides help you understand measurement systems from their historical origins to modern applications.
            </p>
            <Link
              href="/"
              className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
            >
              Try the Converter
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


