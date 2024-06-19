import { Meta, StoryObj } from '@storybook/react';
import { HeroSection } from '.';


const meta: Meta<typeof HeroSection> = {
  title: 'views/HomeView/components/HeroSection',
  component: HeroSection,
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
