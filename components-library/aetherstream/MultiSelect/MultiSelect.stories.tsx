import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import MultiSelect from './MultiSelect';

const InteractiveMultiSelect: React.FC<{options: string[], placeholder: string}> = ({ options, placeholder }) => {
    const [selected, setSelected] = useState<string[]>(['Cyberpunk']);
    return <MultiSelect options={options} selectedOptions={selected} onChange={setSelected} placeholder={placeholder} />;
}

export const multiSelectStories: ComponentConfig = {
  'Default': {
    component: InteractiveMultiSelect,
    args: {
      options: ['Sci-Fi', 'Cyberpunk', 'Space Opera', 'Dystopian', 'AI', 'Thriller'],
      placeholder: 'Filter by genre...'
    },
    argTypes: {
      placeholder: { control: { type: 'text' } },
    },
  },
};
