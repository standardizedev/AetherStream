import React from 'react';
import type { ComponentConfig } from '../../../types';
import ExpansionPanel from './ExpansionPanel';
import Button from '../Button/Button';

export const expansionPanelStories: ComponentConfig = {
  'Default': {
    component: ExpansionPanel,
    args: {
      title: 'Synopsis',
      children: (
        <p>
          In a future where cybernetic enhancements are the norm, a rogue AI threatens to dismantle society. Only a renegade data-hauler can stop it.
        </p>
      ),
    },
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
   'With Complex Content': {
    component: ExpansionPanel,
    args: {
      title: 'Content Warning',
      children: (
        <div className="space-y-4">
            <p>This series contains scenes of intense sci-fi action and complex thematic elements. Viewer discretion is advised.</p>
            <Button label="Acknowledge" variant="secondary" />
        </div>
      ),
    },
    argTypes: {
      title: { control: { type: 'text' } },
    },
  },
};
