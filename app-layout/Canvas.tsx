
import React, { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import type { ActionArg } from '../types';

type Viewport = 'mobile' | 'tablet' | 'desktop';

const viewportSizes: Record<Viewport, string> = {
  mobile: 'w-[480px]',
  tablet: 'w-[834px]',
  desktop: 'w-full',
};

const Canvas: React.FC = () => {
  const { currentStoryData, props, logAction, selectedComponent } = useAppState();
  const [viewport, setViewport] = useState<Viewport>('desktop');
  const isShowcase = selectedComponent === 'Showcase';

  if (!currentStoryData) {
    return null;
  }

  const { component: Component, argTypes } = currentStoryData;

  // Wrap action props (like onClick) to log them
  const enhancedProps = { ...props };
  for (const propName in argTypes) {
    const argType = argTypes[propName];
    if ('action' in argType) {
      const actionArg = argType as ActionArg;
      enhancedProps[propName] = (...args: any[]) => {
        logAction(actionArg.action, ...args);
        // If an actual function was passed in args, call it too.
        if (typeof props[propName] === 'function') {
          props[propName](...args);
        }
      };
    }
  }

  return (
    <div className="flex flex-col h-full">
      {/* Canvas Toolbar */}
      <div className="flex-shrink-0 bg-background border-b border-border px-4 py-2 flex items-center justify-between">
        <span className="text-sm font-medium text-text-secondary">Canvas</span>
        <div className="flex items-center gap-2">
            {Object.keys(viewportSizes).map((vp) => (
                <button 
                    key={vp}
                    onClick={() => setViewport(vp as Viewport)}
                    className={`px-3 py-1 text-xs rounded-sm transition-colors uppercase tracking-wider ${viewport === vp ? 'bg-interactive-default/20 text-interactive-default' : 'bg-surface hover:bg-border'}`}
                >
                    {vp}
                </button>
            ))}
        </div>
      </div>

      {/* Component Rendering Area */}
      <div className={`flex-1 pt-12 px-8 pb-8 overflow-auto bg-background ${!isShowcase ? 'flex items-center justify-center' : ''}`}>
        <div className={`transition-all duration-300 ease-in-out mx-auto ${viewportSizes[viewport]}`}>
            {isShowcase ? (
                <Component {...enhancedProps} />
            ) : (
                <div className="bg-surface p-6 rounded-sm border border-border">
                    <Component {...enhancedProps} />
                </div>
            )}
        </div>
      </div>
    </div>
  );
};

export default Canvas;