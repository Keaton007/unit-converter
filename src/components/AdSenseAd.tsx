'use client';

import { useEffect, useRef, useState } from 'react';

interface AdSenseAdProps {
  adSlot: string;
  adFormat?: string;
  style?: React.CSSProperties;
  className?: string;
}

declare global {
  interface Window {
    adsbygoogle: Array<Record<string, unknown>>;
  }
}

const AdSenseAd: React.FC<AdSenseAdProps> = ({
  adSlot,
  adFormat = 'auto',
  style,
  className = '',
}) => {
  const adRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!adRef.current) return;

    // Intersection Observer for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before ad enters viewport
        threshold: 0.1,
      }
    );

    observer.observe(adRef.current);

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible || isLoaded) return;

    // Wait for adsbygoogle script to load
    const checkAndInit = () => {
      if (typeof window !== 'undefined' && window.adsbygoogle && adRef.current) {
        try {
          // Initialize adsbygoogle for this ad unit
          window.adsbygoogle = window.adsbygoogle || [];
          window.adsbygoogle.push({});
          setIsLoaded(true);
        } catch (error) {
          console.error('Error loading AdSense ad:', error);
        }
      } else if (!isLoaded) {
        // Retry after a short delay if script isn't loaded yet
        setTimeout(checkAndInit, 100);
      }
    };

    checkAndInit();
  }, [isVisible, isLoaded]);

  return (
    <div ref={adRef} className={className} style={style}>
      {isVisible && (
        <ins
          className="adsbygoogle"
          style={{ display: 'block', ...style }}
          data-ad-client="ca-pub-5769093982077943"
          data-ad-slot={adSlot}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
      )}
    </div>
  );
};

export default AdSenseAd;

