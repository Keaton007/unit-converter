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
        return 'w-48 h-[400px]'; // 300x400 equivalent
      default:
        return 'w-48 h-[600px]';
    }
  };

  return (
    <div className={`${getDimensions()} ${className}`}>
      <div className="w-full h-full bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center">
        <div className="text-center text-gray-500">
          <div className="text-sm font-medium">Ad Space</div>
          <div className="text-xs">
            {size === 'vertical' && '300x600'}
            {size === 'horizontal' && '728x90'}
            {size === 'small' && '300x250'}
            {size === 'corner' && '300x300'}
            {size === 'medium' && '300x400'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdSlot;
