import { Meta, StoryObj } from '@storybook/react';
import { HowItWorks } from '.';


const meta: Meta<typeof HowItWorks> = {
  title: 'components/HowItWorks',
  component: HowItWorks,
  tags: ['autodocs'],
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    // variant: "default",
  },
}
export const Blue: Story = {
  args: {
    variant: "blue",
  },
}
export const Gray: Story = {
  args: {
    variant: "black",
  },
}
