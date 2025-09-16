
import React, { createContext, useState, useContext, useMemo, useCallback } from 'react';
import { designSystems } from '../componentRegistry';
import type { Story } from '../types';

interface AppState {
  selectedComponent: string | null;
  selectedStory: string | null;
  props: Record<string, any>;
  actions: string[];
}

interface AppContextType extends AppState {
  currentStoryData: Story | null;
  selectComponentStory: (component: string, story: string) => void;
  updateProp: (propName: string, value: any) => void;
  logAction: (actionName: string, ...args: any[]) => void;
  resetProps: () => void;
}

const AppStateContext = createContext<AppContextType | undefined>(undefined);

const SINGLE_DESIGN_SYSTEM = 'AetherStream';
const defaultComponent = 'Showcase';
const defaultStoryName = 'All Components';
const defaultStoryData = designSystems[SINGLE_DESIGN_SYSTEM]?.components[defaultComponent]?.[defaultStoryName];


export const AppStateProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState>({
    selectedComponent: defaultComponent,
    selectedStory: defaultStoryName,
    props: defaultStoryData?.args || {},
    actions: [],
  });

  const selectComponentStory = useCallback((component: string, story: string) => {
    const storyData = designSystems[SINGLE_DESIGN_SYSTEM]?.components[component]?.[story];
    if (storyData) {
      setState(prevState => ({
        ...prevState,
        selectedComponent: component,
        selectedStory: story,
        props: storyData.args,
        actions: [],
      }));
    }
  }, []);

  const updateProp = useCallback((propName: string, value: any) => {
    setState(prevState => ({
      ...prevState,
      props: {
        ...prevState.props,
        [propName]: value,
      },
    }));
  }, []);

  const logAction = useCallback((actionName: string, ...args: any[]) => {
    const timestamp = new Date().toLocaleTimeString();
    
    const serializableArgs = args.filter(arg => {
      return !(arg && typeof arg === 'object' && arg.nativeEvent);
    });

    let argsString = '';
    if (serializableArgs.length > 0) {
        try {
            argsString = ` with args: ${JSON.stringify(serializableArgs)}`;
        } catch (e) {
            console.error("Could not stringify action arguments:", e);
            argsString = ' with unserializable args';
        }
    }

    const logMessage = `[${timestamp}] ${actionName}${argsString}`;
    setState(prevState => ({
      ...prevState,
      actions: [...prevState.actions, logMessage],
    }));
  }, []);

  const currentStoryData = useMemo<Story | null>(() => {
    if (state.selectedComponent && state.selectedStory) {
      return designSystems[SINGLE_DESIGN_SYSTEM]?.components[state.selectedComponent]?.[state.selectedStory] || null;
    }
    return null;
  }, [state.selectedComponent, state.selectedStory]);

  const resetProps = useCallback(() => {
    if (currentStoryData) {
        setState(prevState => ({
            ...prevState,
            props: currentStoryData.args
        }))
    }
  }, [currentStoryData]);

  const value = {
    ...state,
    currentStoryData,
    selectComponentStory,
    updateProp,
    logAction,
    resetProps,
  };

  return <AppStateContext.Provider value={value}>{children}</AppStateContext.Provider>;
};

export const useAppState = (): AppContextType => {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error('useAppState must be used within an AppStateProvider');
  }
  return context;
};
