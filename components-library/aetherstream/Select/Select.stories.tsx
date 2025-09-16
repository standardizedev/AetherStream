import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import Select from './Select';

const InteractiveSelect: React.FC<{options: string[], label?: string}> = ({ options, label }) => {
    const [selectedValue, setSelectedValue] = useState(options[0]);
    return <Select options={options} value={selectedValue} onChange={setSelectedValue} label={label}/>;
}

export const selectStories: ComponentConfig = {
  'Default': {
    component: InteractiveSelect,
    args: {
      options: ['Season 1', 'Season 2', 'Season 3'],
    },
    argTypes: {},
  },
  'With Label': {
    component: InteractiveSelect,
    args: {
      options: ['English', 'Japanese', 'Klingon'],
      label: "Audio Language"
    },
    argTypes: {
      label: { control: { type: 'text' } }
    },
  },
};
