import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-surface/50 border-b border-border backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <svg className="w-8 h-8 text-interactive-default" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" />
        </svg>
        <h1 className="text-xl font-bold text-text-primary tracking-widest">AETHERSTREAM</h1>
      </div>
      <div className="flex items-center gap-4">
        {/* Theme toggle removed as AetherStream is dark-theme only */}
      </div>
    </header>
  );
};

export default Header;
