import React, { useState } from 'react';
import ChevronDownIcon from '../../../components/icons/ChevronDownIcon';

interface ExpansionPanelProps {
  title: string;
  children: React.ReactNode;
}

const ExpansionPanel: React.FC<ExpansionPanelProps> = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center py-4 text-left text-text-primary focus:outline-none focus:ring-1 focus:ring-inset focus:ring-focus-ring rounded-sm"
        aria-expanded={isOpen}
      >
        <span className="font-semibold uppercase tracking-wider">{title}</span>
        <ChevronDownIcon
          className={`w-5 h-5 transition-transform duration-300 text-text-secondary ${isOpen ? 'rotate-180 text-interactive-default' : ''}`}
        />
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-4 pt-2 text-text-secondary">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpansionPanel;
