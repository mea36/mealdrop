import type { StoryObj, Meta } from '@storybook/react'

import { categories } from '../../stub/categories'

import { Category } from './Category'

const meta = {
  title: 'Components/Category',
  component: Category,
  args: {
    title: categories[0].title,
    photoUrl: categories[0].photoUrl,
  },
  tags: ['autodocs'],
  parameters: {
    design: {
      type: 'figspec',
      url: 'https://www.figma.com/file/3Q1HTCalD0lJnNvcMoEw1x/Mealdrop?type=design&node-id=1145-3681&mode=design&t=zmyrZnTzOLfLqBwr-4',
    },
  },
} satisfies Meta<typeof Category>
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Rounded: Story = {
  args: {
    round: true,
  },
}
