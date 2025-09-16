import React from 'react';

interface BadgeProps {
  label: string;
  variant?: 'interactive' | 'positive' | 'warning' | 'negative';
}

const Badge: React.FC<BadgeProps> = ({ label, variant = 'interactive' }) => {
  const variantClasses = {
    interactive: 'bg-interactive-default/10 text-interactive-default border-interactive-default/30',
    positive: 'bg-positive-default/10 text-positive-default border-positive-default/30',
    warning: 'bg-warning-default/10 text-warning-default border-warning-default/30',
    negative: 'bg-negative-default/10 text-negative-default border-negative-default/30',
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 text-xs font-semibold rounded-sm border ${variantClasses[variant]} uppercase tracking-widest`}>
      {label}
    </span>
  );
};

export default Badge;
