import type { Meta, StoryObj } from '@storybook/react';

import { Bullet } from './Bullet';

const meta = {
  component: Bullet,
} satisfies Meta<typeof Bullet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "title",
    description: "description",
  }
};
export const Lg: Story = {
  args: {
    title: "Bullet LG",
    description: 'Bullet size lg',
    
  }
}