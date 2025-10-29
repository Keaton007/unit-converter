import React from 'react';

interface AdSlotProps {
  size: 'vertical' | 'horizontal' | 'small' | 'corner' | 'medium';
  className?: string;
}

const AdSlot: React.FC<AdSlotProps> = ({ size, className = '' }) => {
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

  return (
    <div className={`${getDimensions()} ${className}`}>
      {/* Ad space reserved - placeholder hidden in production */}
    </div>
  );
};

export default AdSlot;
