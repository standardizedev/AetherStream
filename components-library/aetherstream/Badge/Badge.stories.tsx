import type { ComponentConfig } from '../../../types';
import Badge from './Badge';

export const badgeStories: ComponentConfig = {
  'Interactive': {
    component: Badge,
    args: {
      label: '4K',
      variant: 'interactive',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['interactive', 'positive', 'warning', 'negative'] },
    },
  },
  'Positive': {
    component: Badge,
    args: {
      label: 'New Episode',
      variant: 'positive',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['interactive', 'positive', 'warning', 'negative'] },
    },
  },
  'Warning': {
    component: Badge,
    args: {
      label: 'Expiring Soon',
      variant: 'warning',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['interactive', 'positive', 'warning', 'negative'] },
    },
  },
  'Negative': {
    component: Badge,
    args: {
      label: 'Exclusive',
      variant: 'negative',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      variant: { control: { type: 'select' }, options: ['interactive', 'positive', 'warning', 'negative'] },
    },
  },
};
