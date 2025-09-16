import React from 'react';

const PlayIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className || "h-6 w-6"} 
    fill="currentColor" 
    viewBox="0 0 24 24" 
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5v14l11-7z" />
  </svg>
);

export default PlayIcon;
