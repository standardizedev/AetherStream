import React from 'react';
import { useAppState } from '../context/AppStateContext';
import { designSystems } from '../componentRegistry';

const Sidebar: React.FC = () => {
  const { selectedComponent, selectedStory, selectComponentStory } = useAppState();
  const currentSystem = designSystems['AetherStream'];

  if (!currentSystem) {
    return (
      <aside className="w-64 bg-background border-r border-border p-4 overflow-y-auto flex-shrink-0">
        <p className="text-text-secondary">Design system not found.</p>
      </aside>
    );
  }

  return (
    <aside className="w-64 bg-background border-r border-border p-4 overflow-y-auto flex-shrink-0">
      <h2 className="text-xl font-semibold text-text-primary mb-4 px-2 tracking-widest">{currentSystem.name.toUpperCase()}</h2>
      <nav>
        <ul>
          {Object.entries(currentSystem.components).map(([componentName, stories]) => (
            <li key={componentName} className="mb-4">
              <h3 className="font-semibold text-lg text-text-secondary mb-2 px-2">{componentName}</h3>
              <ul>
                {Object.keys(stories).map((storyName) => {
                  const isActive = componentName === selectedComponent && storyName === selectedStory;
                  return (
                    <li key={storyName}>
                      <button
                        onClick={() => selectComponentStory(componentName, storyName)}
                        className={`w-full text-left px-2 py-1.5 rounded-sm text-sm transition-colors duration-200 relative ${
                          isActive
                            ? 'text-interactive-default'
                            : 'text-text-secondary hover:bg-surface hover:text-text-primary'
                        }`}
                      >
                        {isActive && <div className="absolute left-0 top-0 h-full w-0.5 bg-interactive-default shadow-glow-cyan" />}
                        {storyName}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;