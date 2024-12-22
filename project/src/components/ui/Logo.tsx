import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <div className="w-6 h-6 bg-primary-main transform rotate-45" />
        <div className="absolute top-1/2 left-1/2 w-4 h-4 bg-secondary-main transform -translate-x-1/2 -translate-y-1/2 rotate-45" />
      </div>
      <span className="text-xl font-bold text-text-primary">Fix Ads</span>
    </div>
  );
};

export default Logo;