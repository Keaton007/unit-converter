import Header from '@/components/Header';
import Converter from '@/components/Converter';
import AdSlot from '@/components/AdSlot';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-x-hidden">
      <Header />
      
      {/* Desktop Layout - Full Width with Edge Ads */}
      <div className="hidden lg:block">
        <div className="flex w-full">
          {/* Left Side Ads Column */}
          <div className="w-48 flex-shrink-0">
            <div className="sticky top-8 bottom-80">
              <AdSlot size="vertical" />
              <div className="pt-[10px]">
                <AdSlot size="medium" />
              </div>
            </div>
          </div>

          {/* Main Content - Full Width */}
          <div className="flex-1 px-6 py-8 min-w-0">
            <main id="main-content" className="max-w-6xl mx-auto">
              {/* Informational Section */}
              <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Free Online Unit Converter</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  UnitFlow is your free, fast, and accurate tool for converting between hundreds of different measurement units across 12 major categories including length, weight, temperature, volume, area, speed, time, data, pressure, energy, and currency. Whether you&apos;re converting meters to feet, kilograms to pounds, or Celsius to Fahrenheit, our intuitive interface makes unit conversion simple and educational.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Beyond just converting units, we provide comprehensive educational content about each measurement type, including their historical origins, real-world applications, and interesting facts. Learn how the meter was originally defined, why we use different temperature scales, or discover the practical uses of various measurement units in everyday life.
                </p>
                <div className="flex flex-wrap gap-3 mt-6">
                  <Link 
                    href="/guides"
                    className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-sm"
                  >
                    Explore Guides
                  </Link>
                  <Link 
                    href="/about"
                    className="px-6 py-2 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-sm"
                  >
                    Learn How It Works
                  </Link>
                </div>
              </div>
              
              <Converter />
              
              {/* Additional Context Section */}
              <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Unit Conversion Matters</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unit conversion is essential in our globalized world. From cooking recipes that use different measurement systems to international business transactions, scientific research, engineering projects, and travel—understanding how to convert between units is a fundamental skill. Our converter helps you bridge the gap between metric and imperial systems, scientific and everyday measurements, and different cultural measurement standards.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Explore our comprehensive <Link href="/guides" className="text-indigo-600 hover:text-indigo-700 underline font-medium">conversion guides</Link> to deepen your understanding of each measurement category, learn about their history, discover real-world applications, and master unit conversions with confidence.
                </p>
              </div>
            </main>
          </div>

          {/* Right Side Ads Column */}
          <div className="w-48 flex-shrink-0">
            <div className="sticky top-8 bottom-80">
              <AdSlot size="vertical" />
              <div className="pt-[10px]">
                <AdSlot size="medium" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Ads */}
        <div className="relative w-full pb-8">
          {/* Corner Ads - Positioned absolutely in corners */}
          <div className="absolute left-0 bottom-8">
            <AdSlot size="corner" />
          </div>
          <div className="absolute right-0 bottom-8">
            <AdSlot size="corner" />
          </div>
          
          {/* Horizontal Ad - Centered */}
          <div className="flex justify-center px-48">
            <div className="w-full max-w-4xl">
              <AdSlot size="horizontal" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Stacked with Bottom Ads */}
      <div className="lg:hidden">
        <main id="main-content" className="container mx-auto px-6 py-8">
          {/* Informational Section */}
          <div className="mb-8 bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Free Online Unit Converter</h2>
            <p className="text-gray-700 text-sm leading-relaxed mb-3">
              Convert between hundreds of measurement units across 12 categories. Learn about measurement history, applications, and real-world uses with our educational content.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <Link 
                href="/guides"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium text-xs"
              >
                Guides
              </Link>
              <Link 
                href="/about"
                className="px-4 py-2 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-xs"
              >
                About
              </Link>
            </div>
          </div>
          
          <Converter />
          
          {/* Additional Context Section */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Why Unit Conversion Matters</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Essential for cooking, science, engineering, travel, and business. Explore our <Link href="/guides" className="text-indigo-600 hover:text-indigo-700 underline font-medium">guides</Link> to learn more about measurement systems.
            </p>
          </div>
        </main>

        {/* Mobile Bottom Ads */}
        <div className="px-4 pb-8">
          <div className="space-y-4">
            {/* Horizontal Ad */}
            <div className="w-full">
              <AdSlot size="horizontal" />
            </div>
            
            {/* Corner Ads Side by Side */}
            <div className="flex justify-center gap-4">
              <AdSlot size="corner" />
              <AdSlot size="corner" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}