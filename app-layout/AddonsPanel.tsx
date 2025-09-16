import React, { useState } from 'react';
import { useAppState } from '../context/AppStateContext';
import type { ArgType, ActionArg } from '../types';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';

type Tab = 'Controls' | 'Actions';

interface AddonsPanelProps {
    isOpen: boolean;
    onToggle: () => void;
}

const AddonsPanel: React.FC<AddonsPanelProps> = ({ isOpen, onToggle }) => {
  const [activeTab, setActiveTab] = useState<Tab>('Controls');
  const { currentStoryData, props, updateProp, actions, resetProps } = useAppState();

  const renderControl = (propName: string, argType: ArgType, value: any) => {
    const { control, options } = argType;
    const commonClasses = "w-full bg-surface border border-border rounded-sm px-2 py-1 text-sm text-text-primary focus:outline-none focus:ring-1 focus:ring-focus-ring";

    switch (control.type) {
      case 'text':
        return (
          <input
            type="text"
            value={value}
            onChange={(e) => updateProp(propName, e.target.value)}
            className={commonClasses}
          />
        );
      case 'boolean':
        return (
          <input
            type="checkbox"
            checked={!!value}
            onChange={(e) => updateProp(propName, e.target.checked)}
            className="h-5 w-5 rounded-sm bg-surface border-border text-interactive-default focus:ring-focus-ring"
          />
        );
      case 'select':
        return (
          <select
            value={value}
            onChange={(e) => updateProp(propName, e.target.value)}
            className={commonClasses}
          >
            {options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      default:
        return <span className="text-text-secondary text-sm">Unsupported control</span>;
    }
  };

  return (
    <div className="bg-background h-full flex flex-col">
      <div className="flex-shrink-0 border-b border-border flex items-center justify-between">
        <div className="flex">
            <button
            onClick={() => setActiveTab('Controls')}
            className={`px-4 py-2 text-sm font-medium tracking-wider ${
                activeTab === 'Controls' ? 'border-b-2 border-interactive-default text-interactive-default' : 'text-text-secondary'
            }`}
            >
            CONTROLS
            </button>
            <button
            onClick={() => setActiveTab('Actions')}
            className={`px-4 py-2 text-sm font-medium tracking-wider ${
                activeTab === 'Actions' ? 'border-b-2 border-interactive-default text-interactive-default' : 'text-text-secondary'
            }`}
            >
            ACTIONS
            </button>
        </div>
        <div className="flex items-center gap-4 mr-4">
            {activeTab === 'Controls' && isOpen && (
                <button onClick={resetProps} className="text-xs bg-surface hover:bg-border px-2 py-1 rounded-sm">RESET</button>
            )}
             <button onClick={onToggle} className="p-1 rounded-full hover:bg-border" aria-label={isOpen ? 'Collapse panel' : 'Expand panel'}>
                <ChevronDownIcon className={`w-5 h-5 text-text-secondary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </button>
        </div>
      </div>

        {isOpen && (
            <div className="flex-1 overflow-y-auto p-4">
                {activeTab === 'Controls' && (
                <div className="space-y-4">
                    {currentStoryData &&
                    Object.entries(currentStoryData.argTypes).map(([propName, argType]) => {
                        // Don't render controls for actions
                        if ('action' in argType) {
                        return null;
                        }
                        return (
                        <div key={propName} className="grid grid-cols-3 items-center gap-4">
                            <label className="text-sm font-medium text-text-secondary truncate">{propName}</label>
                            <div className="col-span-2">
                                {renderControl(propName, argType as ArgType, props[propName])}
                            </div>
                        </div>
                        );
                    })}
                </div>
                )}
                {activeTab === 'Actions' && (
                <div className="font-mono text-xs text-text-secondary space-y-1">
                    {actions.length === 0 ? (
                        <p>&gt; No actions logged yet.</p>
                    ) : (
                        actions.map((log, index) => <p key={index}>&gt; {log}</p>)
                    )}
                </div>
                )}
            </div>
        )}
    </div>
  );
};

export default AddonsPanel;