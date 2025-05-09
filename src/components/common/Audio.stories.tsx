import type { Meta, StoryObj } from '@storybook/react';

import { Audio } from './Audio';

const meta = {
  component: Audio,
} satisfies Meta<typeof Audio>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    src: "src"
  }
};