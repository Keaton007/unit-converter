import React from 'react';
import AdSenseAd from './AdSenseAd';

interface AdSlotProps {
  size: 'vertical' | 'horizontal' | 'small' | 'corner' | 'medium';
  className?: string;
  adSlot?: string;
  adFormat?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ size, className = '', adSlot, adFormat = 'auto' }) => {
  const getDimensions = () => {
    switch (size) {
      case 'vertical':
        return 'w-48 h-[600px]'; // Taller vertical ads
      case 'horizontal':
        return 'w-full h-24'; // Wider horizontal ad
      case 'small':
        return 'w-32 h-24'; // 300x250 equivalent
      case 'corner':
        return 'w-48 h-48'; // 300x300 equivalent
      case 'medium':
        return 'w-48 h-[600px]'; // 300x600 (updated)
      default:
        return 'w-48 h-[600px]';
    }
  };

  // Generate ad slot ID if not provided (uses size as identifier)
  // In production, you should use actual AdSense ad unit IDs from your AdSense account
  const slotId = adSlot || `placeholder-${size}`;

  return (
    <div className={`${getDimensions()} ${className}`}>
      <AdSenseAd
        adSlot={slotId}
        adFormat={adFormat}
        className="w-full h-full"
        style={{ minHeight: '100px' }}
      />
    </div>
  );
};

export default AdSlot;
