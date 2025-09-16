import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Checkbox from './Checkbox';

const InteractiveCheckbox: React.FC<{label: string, initialChecked: boolean, disabled?: boolean}> = ({ label, initialChecked, disabled }) => {
    const [checked, setChecked] = useState(initialChecked);
    return <Checkbox label={label} checked={checked} onChange={setChecked} disabled={disabled}/>;
}

export const checkboxStories: ComponentConfig = {
  'Default': {
    component: InteractiveCheckbox,
    args: {
      label: 'Enable Autoplay',
      initialChecked: false
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Checked': {
    component: InteractiveCheckbox,
    args: {
      label: 'Enable Autoplay',
      initialChecked: true
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Disabled': {
    component: InteractiveCheckbox,
    args: {
      label: 'System Setting (Locked)',
      initialChecked: true,
      disabled: true
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialChecked: { control: { type: 'boolean' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
};
