import React from 'react';

const VolumeUpIcon: React.FC<{className?: string}> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    className={className || "h-6 w-6"} 
    fill="none" 
    viewBox="0 0 24 24" 
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5L6 9H2v6h4l5 4V5zm8.07 1.93a9 9 0 010 12.14M15.5 12a4 4 0 010 5.66" />
  </svg>
);

export default VolumeUpIcon;
