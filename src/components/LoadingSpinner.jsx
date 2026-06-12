import React from 'react';

const LoadingSpinner = ({ fullScreen = false, size = 'md', text = '' }) => {
  const sizeClass = { sm: 'w-5 h-5', md: 'w-10 h-10', lg: 'w-16 h-16' }[size] || 'w-10 h-10';

  const spinner = (
    <div className="flex flex-col items-center justify-center gap-3">
      <div className={`${sizeClass} border-4 border-sand-200 border-t-gold-500 rounded-full animate-spin`} />
      {text && <p className="text-gray-500 text-sm font-medium">{text}</p>}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-white/90 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center py-16">
      {spinner}
    </div>
  );
};

export default LoadingSpinner;
