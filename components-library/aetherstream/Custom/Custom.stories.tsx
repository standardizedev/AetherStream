import type { ComponentConfig } from '../../../types';
import { ImmersiveContentGallery } from './ImmersiveContentGallery';
import { Avatar } from './Avatar';
import { ProgressTracker } from './ProgressTracker';
import React from 'react';

export const customStories: ComponentConfig = {
  'Content Gallery': {
    component: ImmersiveContentGallery,
    args: {},
    argTypes: {},
  },
  'User Avatar': {
    component: () => (
        <div className="flex items-center gap-8">
            <Avatar size="sm" imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400" />
            <Avatar size="md" imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400" />
            <Avatar size="lg" imageUrl="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=400" />
        </div>
    ),
    args: {},
    argTypes: {},
  },
  'Progress Tracker': {
    component: ProgressTracker,
    args: {
        progress: 78,
        title: "Cybernetic Dawn",
        episode: "S1:E8 'Final Transmission'"
    },
    argTypes: {
        progress: { control: { type: 'text' } }, // Using text for range control simplicity
        title: { control: { type: 'text' } },
        episode: { control: { type: 'text' } },
    },
  },
};
