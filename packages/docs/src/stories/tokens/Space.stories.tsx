import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { space } from '@call-ui/tokens'

export default {
  title: 'Tokens/Space',
  component: () => TokensGrid({ tokens: space, hasRemValue: true }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
