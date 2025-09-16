import type { ComponentConfig } from '../../../types';
import Button from './Button';

export const buttonStories: ComponentConfig = {
  'Primary': {
    component: Button,
    args: {
      label: 'Play Trailer',
      variant: 'primary',
      disabled: false,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Secondary': {
    component: Button,
    args: {
      label: 'Add to Watchlist',
      variant: 'secondary',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
    'Tertiary': {
    component: Button,
    args: {
      label: 'More Info',
      variant: 'tertiary',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
  'Disabled': {
    component: Button,
    args: {
      label: 'Play Trailer',
      variant: 'primary',
      disabled: true,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['primary', 'secondary', 'tertiary'] },
      disabled: { control: { type: 'boolean' } },
      onClick: { action: 'clicked' },
    },
  },
};
