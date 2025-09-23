import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-[#f8faf5] to-[#e8f0e2]">
      <div className="flex flex-col items-center gap-6">
        {/* Main loader animation */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 rounded-full border-4 border-gray-200 animate-pulse"></div>
          {/* Inner spinning ring */}
          <div className="absolute inset-0 w-20 h-20 rounded-full border-4 border-[#D2DE26] border-t-transparent animate-spin"></div>
          {/* Center dot */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 bg-[#D2DE26] rounded-full animate-pulse"></div>
          </div>
        </div>
        
        {/* Loading text with animation */}
        <div className="text-center">
          <div className="text-[#050706] font-semibold text-lg mb-2">LawyalTech Services</div>
          <div className="text-[#666] font-medium flex items-center gap-1">
            Loading
            <span className="flex gap-1">
              <span className="w-1 h-1 bg-[#D2DE26] rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
              <span className="w-1 h-1 bg-[#D2DE26] rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
              <span className="w-1 h-1 bg-[#D2DE26] rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
            </span>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="w-48 h-1 bg-gray-200 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-[#D2DE26] to-[#a8b820] rounded-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Loader;

