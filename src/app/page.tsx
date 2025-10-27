import Header from '@/components/Header';
import Converter from '@/components/Converter';
import AdSlot from '@/components/AdSlot';
import Footer from '@/components/Footer';

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
              <Converter />
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
          <Converter />
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