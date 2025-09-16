import React, { useState } from 'react';
import type { ComponentConfig } from '../../../types';
import RadioButton from './RadioButton';

const RadioButtonGroup: React.FC = () => {
    const [selectedValue, setSelectedValue] = useState('1080p');
    const options = [
        { label: '4K Ultra HD', value: '4k' },
        { label: '1080p Full HD', value: '1080p' },
        { label: '720p HD', value: '720p' },
        { label: '480p SD (Network Restricted)', value: '480p', disabled: true },
    ];
    
    return (
        <div className="flex flex-col gap-3">
            {options.map(option => (
                <RadioButton
                    key={option.value}
                    name="quality"
                    label={option.label}
                    value={option.value}
                    checked={selectedValue === option.value}
                    onChange={setSelectedValue}
                    disabled={option.disabled}
                />
            ))}
        </div>
    );
};

export const radioButtonStories: ComponentConfig = {
  'Radio Group': {
    component: RadioButtonGroup,
    args: {},
    argTypes: {},
  },
};
