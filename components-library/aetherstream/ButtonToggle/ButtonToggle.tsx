import React from 'react';

interface ButtonToggleProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const ButtonToggle: React.FC<ButtonToggleProps> = ({ options, value, onChange }) => {
  return (
    <div className="inline-flex rounded-sm bg-surface border border-border p-1" role="group">
      {options.map((option) => {
        const isSelected = value === option;
        return (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`px-4 py-1.5 text-sm font-semibold transition-colors duration-200 rounded-sm focus:z-10 focus:outline-none focus:ring-1 focus:ring-inset focus:ring-focus-ring uppercase tracking-wider ${
              isSelected
                ? 'bg-interactive-default/20 text-interactive-default'
                : 'bg-transparent text-text-secondary hover:bg-border/50 hover:text-text-primary'
            }`}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

export default ButtonToggle;
