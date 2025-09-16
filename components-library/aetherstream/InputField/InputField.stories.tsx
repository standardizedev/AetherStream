import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import InputField from './InputField';

const InteractiveInputField: React.FC<{
    label: string, 
    initialValue?: string,
    type?: 'text' | 'password' | 'email',
    disabled?: boolean,
}> = (args) => {
    const [value, setValue] = useState(args.initialValue || '');
    return <InputField {...args} value={value} onChange={setValue} />;
}

export const inputFieldStories: ComponentConfig = {
  'Default': {
    component: InteractiveInputField,
    args: {
      label: 'Username',
      initialValue: 'Deckard_2049',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Password': {
    component: InteractiveInputField,
    args: {
      label: 'Access Code',
      type: 'password',
      initialValue: 'password123',
    },
    argTypes: {
      label: { control: { type: 'text' } },
      type: { control: { type: 'select' }, options: ['text', 'password', 'email'] },
      initialValue: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
  'Disabled': {
    component: InteractiveInputField,
    args: {
      label: 'System ID',
      initialValue: 'SYS-AETHER-001',
      disabled: true,
    },
    argTypes: {
      label: { control: { type: 'text' } },
      initialValue: { control: { type: 'text' } },
      disabled: { control: { type: 'boolean' } },
    },
  },
};
