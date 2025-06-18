import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { lineHeights } from '@devnestali-call-ui/tokens'

export default {
  title: 'Tokens/Line Heights',
  component: () => TokensGrid({ tokens: lineHeights }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
