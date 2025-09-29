import Header from '@/components/Header';
import Converter from '@/components/Converter';
import AdSlot from '@/components/AdSlot';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Ad Slot - Desktop Only */}
          <div className="hidden lg:block">
            <div className="sticky top-8 bottom-4">
              <AdSlot size="vertical" />
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <Converter />
          </div>

          {/* Right Ad Slot - Desktop Only */}
          <div className="hidden lg:block">
            <div className="sticky top-8 bottom-4">
              <AdSlot size="vertical" />
            </div>
          </div>
        </div>

        {/* Bottom Corner Ad Slots */}
        <div className="mt-12 relative">
          <div className="absolute left-0 bottom-0">
            <AdSlot size="corner" />
          </div>
          <div className="absolute right-0 bottom-0">
            <AdSlot size="corner" />
          </div>
        </div>

        {/* Horizontal Ad Slot */}
        <div className="mt-8 max-w-2xl mx-auto">
          <AdSlot size="horizontal" />
        </div>
      </main>

      <Footer />
    </div>
  );
}