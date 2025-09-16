import React from 'react';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  disabled?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, variant = 'primary', disabled = false, onClick, className = '' }) => {
  const baseClasses = 'px-6 py-2 rounded-sm text-sm font-bold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background transition-all duration-300 uppercase tracking-wider';
  
  const variantClasses = {
    primary: 'bg-interactive-default text-aether-black hover:shadow-glow-cyan focus:ring-focus-ring',
    secondary: 'bg-transparent text-interactive-default border-2 border-interactive-default hover:bg-interactive-default hover:text-aether-black hover:shadow-glow-cyan focus:ring-focus-ring',
    tertiary: 'bg-transparent text-text-secondary hover:text-interactive-default focus:ring-focus-ring',
  };

  const disabledClasses = 'disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none disabled:bg-border disabled:text-text-secondary disabled:border-transparent';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${disabledClasses} ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
