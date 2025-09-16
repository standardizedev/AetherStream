import React from 'react';

interface AvatarProps {
  imageUrl: string;
  size?: 'sm' | 'md' | 'lg';
}

const sizeClasses = {
    sm: 'w-12 h-12',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
}

export const Avatar: React.FC<AvatarProps> = ({ imageUrl, size = 'md' }) => {
    const hexStyle = {
        clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
    }
  return (
    <div className={`${sizeClasses[size]} relative group`}>
        <div 
            style={hexStyle}
            className="w-full h-full bg-cover bg-center"
        >
             <img src={imageUrl} alt="User avatar" className="w-full h-full object-cover"/>
        </div>
        <div 
            style={hexStyle}
            className="absolute inset-0 bg-interactive-default opacity-0 group-hover:opacity-20 transition-opacity duration-300"
        />
    </div>
  );
};
