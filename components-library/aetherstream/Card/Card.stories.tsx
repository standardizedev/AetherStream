import type { ComponentConfig } from '../../../types';
import Card from './Card';
import Button from '../Button/Button';
import React from 'react';

export const cardStories: ComponentConfig = {
  'Default': {
    component: Card,
    args: {
      imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop',
      title: 'Cybernetic Dawn',
      subtitle: 'Season 1',
    },
    argTypes: {
      imageUrl: { control: { type: 'text' } },
      title: { control: { type: 'text' } },
      subtitle: { control: { type: 'text' } },
    },
  },
   'Interactive': {
    component: Card,
    args: {
      imageUrl: 'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=800&auto=format&fit=crop',
      title: 'Nexus Point',
      subtitle: 'Movie',
      children: <Button label="Play Now" variant="primary" className="py-1.5" />
    },
    argTypes: {
      imageUrl: { control: { type: 'text' } },
      title: { control: { type: 'text' } },
      subtitle: { control: { type: 'text' } },
    },
  },
};
