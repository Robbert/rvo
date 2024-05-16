import type { Meta, StoryObj } from '@storybook/react';
import HomePaars from './HomePaars';

const meta: Meta<typeof HomePaars> = {
  title: "Demo pagina's/www",
  component: HomePaars,
  parameters: {
    status: {
      type: 'WORK IN PROGRESS',
    },
  },
};
export default meta;

type Story = StoryObj<typeof HomePaars>;

export const Default: Story = { name: 'Home(paars)' };
