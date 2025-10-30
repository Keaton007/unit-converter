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
  const insRef = useRef<HTMLModElement>(null);
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

    // Wait for adsbygoogle script to load and ins element to be in DOM
    const checkAndInit = () => {
      if (typeof window === 'undefined' || !insRef.current) {
        // Retry if ins element isn't mounted yet
        if (!isLoaded) {
          setTimeout(checkAndInit, 50);
        }
        return;
      }

      // Initialize adsbygoogle array if it doesn't exist
      window.adsbygoogle = window.adsbygoogle || [];
      
      try {
        // Push empty object to initialize this ad unit
        // AdSense script will automatically process this when it loads
        window.adsbygoogle.push({});
        setIsLoaded(true);
      } catch (error) {
        console.error('Error loading AdSense ad:', error);
        // Still mark as loaded to prevent infinite retries
        setIsLoaded(true);
      }
    };

    // Small delay to ensure ins element is in DOM
    const timeoutId = setTimeout(checkAndInit, 100);
    
    return () => {
      clearTimeout(timeoutId);
    };
  }, [isVisible, isLoaded]);

  return (
    <div ref={adRef} className={className} style={style}>
      {isVisible && (
        <ins
          ref={insRef}
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

