import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { radius } from '@devnestali-call-ui/tokens'

export default {
  title: 'Tokens/Radius',
  component: () => TokensGrid({ tokens: radius }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
