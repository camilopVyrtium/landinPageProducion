import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  title: 'Buttons',
  tags:['autodocs'],
  component: Button,

} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonDefault: Story = {
  args: {
    children: "Button",
    type: "button",
    // variant: 'primary'
  }
};
export const ButtonPrimary: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'primary'
  }
};
export const ButtonSecondary: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'secondary'
  }
};
export const ButtonBlue3: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'blue3'
  }
};
export const ButtonGray: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'gray'
  }
};
export const ButtonGray4: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'gray4'
  }
};
export const ButtonRed3: Story = {
  args: {
    children: "Button",
    type: "button",
    variant: 'red3'
  }
};