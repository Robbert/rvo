import type { Meta, StoryObj } from '@storybook/react';
import { defaultArgs } from './src/defaultArgs';
import { RadioButtonField } from './src/template';

const meta: Meta<typeof RadioButtonField> = {
  title: 'Componenten/Radio button field',
  component: RadioButtonField,
  args: defaultArgs,
  parameters: {
    status: {
      type: 'PRODUCTION',
    },
    docusaurus: {
      link: 'form-field-radio-button',
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioButtonField>;

export const Default: Story = { args: { ...defaultArgs, helperText: 'Helper text' }, name: 'Radio button field' };
