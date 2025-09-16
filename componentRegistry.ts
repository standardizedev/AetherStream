import type { DesignSystems } from './types';

import { badgeStories } from './components-library/aetherstream/Badge/Badge.stories';
import { buttonStories } from './components-library/aetherstream/Button/Button.stories';
import { buttonToggleStories } from './components-library/aetherstream/ButtonToggle/ButtonToggle.stories';
import { cardStories } from './components-library/aetherstream/Card/Card.stories';
import { checkboxStories } from './components-library/aetherstream/Checkbox/Checkbox.stories';
import { expansionPanelStories } from './components-library/aetherstream/ExpansionPanel/ExpansionPanel.stories';
import { inputFieldStories } from './components-library/aetherstream/InputField/InputField.stories';
import { multiSelectStories } from './components-library/aetherstream/MultiSelect/MultiSelect.stories';
import { radioButtonStories } from './components-library/aetherstream/RadioButton/RadioButton.stories';
import { selectStories } from './components-library/aetherstream/Select/Select.stories';
import { tabsStories } from './components-library/aetherstream/Tabs/Tabs.stories';
import { customStories } from './components-library/aetherstream/Custom/Custom.stories';
import { showcaseStories } from './components-library/aetherstream/Showcase/Showcase.stories';


export const designSystems: DesignSystems = {
  'AetherStream': {
    name: 'AetherStream',
    components: {
      'Showcase': showcaseStories,
      'Button': buttonStories,
      'Badge': badgeStories,
      'Card': cardStories,
      'InputField': inputFieldStories,
      'Checkbox': checkboxStories,
      'RadioButton': radioButtonStories,
      'Select': selectStories,
      'MultiSelect': multiSelectStories,
      'ButtonToggle': buttonToggleStories,
      'Tabs': tabsStories,
      'ExpansionPanel': expansionPanelStories,
      'Custom': customStories,
    },
  },
};