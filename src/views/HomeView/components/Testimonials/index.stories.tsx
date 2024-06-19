import { Meta, StoryObj } from '@storybook/react';
import { Testimonials } from '.';


const meta: Meta<typeof Testimonials> = {
  title: 'views/HomeView/components/Testimonials',
  component: Testimonials,
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
