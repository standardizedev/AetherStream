import React from 'react';

interface CardProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ imageUrl, title, subtitle, children }) => {
  return (
    <div className="group relative bg-surface rounded-sm border border-border overflow-hidden transition-all duration-300 transform hover:-translate-y-2 hover:shadow-glow-cyan hover:border-interactive-default/50 w-64">
      <img className="h-96 w-full object-cover transition-transform duration-300 group-hover:scale-105" src={imageUrl} alt={title} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      <div className="absolute bottom-0 left-0 p-4">
        <h3 className="font-bold text-lg text-text-primary tracking-wide">{title}</h3>
        <p className="text-sm text-text-secondary uppercase tracking-widest">{subtitle}</p>
        {children && <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">{children}</div>}
      </div>
    </div>
  );
};

export default Card;
