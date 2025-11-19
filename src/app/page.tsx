import Header from '@/components/Header';
import Converter from '@/components/Converter';
import AdSlot from '@/components/AdSlot';
import Footer from '@/components/Footer';
import Link from 'next/link';

const popularConverters = [
  {
    title: 'Meters to Feet',
    description: 'Engineering favorite with real-world site planning examples.',
    href: '/converters/meters-to-feet',
    pills: ['Length', 'Building', 'Metric ↔ Imperial'],
  },
  {
    title: 'Kilograms to Pounds',
    description: 'Instant cooking + fitness conversions with macro tips.',
    href: '/converters/kilograms-to-pounds',
    pills: ['Weight', 'Nutrition', 'Shipping'],
  },
  {
    title: 'Celsius to Fahrenheit',
    description: 'Travel-friendly temperature walkthrough and formula explainers.',
    href: '/converters/celsius-to-fahrenheit',
    pills: ['Temperature', 'Science', 'Travel'],
  },
  {
    title: 'Liters to Gallons',
    description: 'Covers US vs UK gallons plus kitchen-ready conversion charts.',
    href: '/converters/liters-to-gallons',
    pills: ['Volume', 'Cooking', 'Beverage'],
  },
  {
    title: 'PSI to kPa',
    description: 'Tire, HVAC, and scuba safety examples with quick reference table.',
    href: '/converters/psi-to-kpa',
    pills: ['Pressure', 'Automotive', 'Safety'],
  },
  {
    title: 'USD to EUR',
    description: 'Live rates + budgeting worksheet for travelers and freelancers.',
    href: '/converters/usd-to-eur',
    pills: ['Currency', 'Finance', 'Travel'],
  },
  {
    title: 'Cups to Milliliters',
    description: 'Culinary cheat sheet with cup sizes, spoons, and bar-friendly measurements.',
    href: '/converters/cups-to-milliliters',
    pills: ['Cooking', 'Baking', 'Kitchen'],
  },
];

const trustSignals = [
  {
    title: 'Expert-reviewed content',
    description: 'Every guide is checked against NIST handbooks and ISO standards. Update notes live on the Editorial Guidelines page.',
    href: '/editorial',
    label: 'See our editorial playbook',
  },
  {
    title: 'Transparent monetization',
    description: 'We limit ad density, separate content from ads, and disclose partners in our Ad Policy.',
    href: '/advertising',
    label: 'Read the Ad Policy',
  },
  {
    title: 'Human support',
    description: 'Need a conversion explained? Reach the UnitFlow team directly via the contact center.',
    href: '/contact',
    label: 'Contact us',
  },
];

const resourceHighlights = [
  {
    title: 'Measurement Starter Kits',
    description: 'Understand formulas, units, and pitfalls for each category.',
    href: '/guides',
  },
  {
    title: 'Quality Checklist',
    description: 'We document update history, data sources, and review cadence.',
    href: '/editorial',
  },
  {
    title: 'Request a Converter',
    description: 'Need a specialized unit? Tell us and we will add it to the roadmap.',
    href: '/contact',
  },
];

const PopularConvertersSection = () => (
  <section id="popular-converters" className="mt-12">
    <div className="flex items-center justify-between mb-4">
      <div>
        <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold">Popular converters</p>
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900">High-value conversion playbooks</h3>
        <p className="text-gray-600 mt-2">
          Deep dives with formulas, contextual examples, FAQs, and pre-configured calculator shortcuts.
        </p>
      </div>
      <Link
        href="/guides"
        className="hidden md:inline-flex items-center px-4 py-2 text-sm font-semibold text-indigo-600 hover:text-indigo-800"
      >
        Browse all guides →
      </Link>
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {popularConverters.map((converter) => (
        <Link
          key={converter.title}
          href={converter.href}
          className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col"
        >
          <div className="flex items-center justify-between mb-3">
            <h4 className="text-xl font-semibold text-gray-900">{converter.title}</h4>
            <svg
              className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 transition-colors"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
          <p className="text-gray-600 flex-1">{converter.description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {converter.pills.map((pill) => (
              <span key={pill} className="px-3 py-1 text-xs font-semibold bg-indigo-50 text-indigo-700 rounded-full">
                {pill}
              </span>
            ))}
          </div>
        </Link>
      ))}
    </div>
  </section>
);

const TrustSignalsSection = () => (
  <section id="trust-signals" className="mt-12 bg-white rounded-3xl p-8 border border-gray-100 shadow-lg">
    <p className="text-sm uppercase tracking-wide text-indigo-500 font-semibold mb-2">Trust Center</p>
    <h3 className="text-3xl font-bold text-gray-900 mb-4">Why people trust UnitFlow</h3>
    <div className="grid md:grid-cols-3 gap-6">
      {trustSignals.map((signal) => (
        <div key={signal.title} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
          <h4 className="text-xl font-semibold text-gray-900 mb-2">{signal.title}</h4>
          <p className="text-gray-700 mb-4">{signal.description}</p>
          <Link href={signal.href} className="inline-flex items-center text-indigo-600 font-semibold">
            {signal.label}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  </section>
);

const ResourceHighlightsSection = () => (
  <section className="mt-12">
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 rounded-3xl p-8 text-white shadow-xl">
      <div className="grid md:grid-cols-3 gap-8">
        {resourceHighlights.map((resource) => (
          <div key={resource.title}>
            <h4 className="text-xl font-semibold mb-2">{resource.title}</h4>
            <p className="text-indigo-100 mb-3">{resource.description}</p>
            <Link href={resource.href} className="inline-flex items-center font-semibold text-white/90 hover:text-white">
              Learn more
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        ))}
      </div>
    </div>
  </section>
);

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
              <AdSlot size="vertical" adSlot="9685473850" />
              <div className="pt-[10px]">
                <AdSlot size="medium" adSlot="7059310511" />
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

              <PopularConvertersSection />
              <TrustSignalsSection />
              <ResourceHighlightsSection />

              {/* Additional Context Section */}
              <div className="mt-12 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 md:p-8 border border-indigo-100">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Why Unit Conversion Matters</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Unit conversion is essential in our globalized world. From cooking recipes that use different measurement systems to international business transactions, scientific research, engineering projects, and travel. Understanding how to convert between units is a fundamental skill. Our converter helps you bridge the gap between metric and imperial systems, scientific and everyday measurements, and different cultural measurement standards.
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
              <AdSlot size="vertical" adSlot="6804708389" />
              <div className="pt-[10px]">
                <AdSlot size="medium" adSlot="5491626715" />
              </div>
            </div>
          </div>
        </div>

        {/* Desktop Bottom Ads */}
        <div className="relative w-full pb-8">
          {/* Corner Ads - Positioned absolutely in corners */}
          <div className="absolute left-0 bottom-8">
            <AdSlot size="corner" adSlot="8117790051" />
          </div>
          <div className="absolute right-0 bottom-8">
            <AdSlot size="corner" adSlot="6087233526" />
          </div>
          
          {/* Horizontal Ad - Centered */}
          <div className="flex justify-center px-48">
            <div className="w-full max-w-4xl">
              <AdSlot size="horizontal" adSlot="1743953395" adFormat="autorelaxed" />
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

          <PopularConvertersSection />
          <TrustSignalsSection />
          <ResourceHighlightsSection />

          {/* Additional Context Section */}
          <div className="mt-8 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="text-lg font-bold text-gray-900 mb-2">Why Unit Conversion Matters</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Essential for cooking, science, engineering, travel, and business. Explore our <Link href="/guides" className="text-indigo-600 hover:text-indigo-700 underline font-medium">guides</Link> to learn more about measurement systems.
            </p>
          </div>
        </main>

        {/* Mobile Bottom Ads - Minimal for better UX */}
        <div className="px-4 pb-8">
          <div className="space-y-4">
            {/* Single responsive ad - less intrusive on mobile */}
            <div className="w-full">
              <AdSlot size="horizontal" adSlot="8117790051" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}