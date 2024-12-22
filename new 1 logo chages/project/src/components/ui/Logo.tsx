import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const Logo = () => {
  const { colors } = useTheme();

  return (
    <div className="flex items-center space-x-3">
      <div className="relative w-8 h-8 transform hover:scale-105 transition-transform">
        <div 
          className="absolute inset-0 bg-primary-main transform rotate-45 shadow-lg"
          style={{ backgroundColor: colors.primary.main }}
        />
        <div 
          className="absolute inset-[4px] bg-secondary-main transform rotate-45"
          style={{ backgroundColor: colors.secondary.main }}
        />
      </div>
      <span className="text-2xl font-bold bg-gradient-to-r from-primary-main to-secondary-main bg-clip-text text-transparent">
        Fix Ads
      </span>
    </div>
  );
};

export default Logo;