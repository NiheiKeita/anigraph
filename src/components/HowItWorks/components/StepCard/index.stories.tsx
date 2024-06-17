import { Meta, StoryObj } from '@storybook/react';
import { StepCard } from '.';


const meta: Meta<typeof StepCard> = {
  title: 'components/HowItWorks/components/StepCard',
  component: StepCard,
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
  },
}
export const Gray: Story = {
  args: {
  },
}
