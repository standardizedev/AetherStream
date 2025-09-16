import React from 'react';

interface ProgressTrackerProps {
  progress: number; // 0 to 100
  title: string;
  episode: string;
}

export const ProgressTracker: React.FC<ProgressTrackerProps> = ({ progress, title, episode }) => {
  return (
    <div className="w-full max-w-sm bg-surface p-4 rounded-sm border border-border">
      <div className="flex justify-between items-baseline mb-1">
        <h4 className="font-semibold text-text-primary">{title}</h4>
        <span className="text-xs text-text-secondary">{episode}</span>
      </div>
      <div className="w-full h-2 bg-border rounded-full overflow-hidden">
        <div
          className="h-full bg-interactive-default shadow-glow-cyan"
          style={{ width: `${progress}%` }}
        />
      </div>
       <p className="text-right text-xs text-text-secondary mt-1">{progress}% watched</p>
    </div>
  );
};
