import type { Meta, StoryObj } from '@storybook/react'
import { Text } from '@call-ui/react'
import type { TextProps } from '@call-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos repellendus tempora quaerat delectus autem ut aspernatur eius.',
  },
  parameters: {
    docs: {
      description: {
        component: 'Un box reutilizable',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
