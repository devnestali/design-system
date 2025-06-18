import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontWeights } from '@devnestali-call-ui/tokens'

export default {
  title: 'Tokens/Font Weights',
  component: () => TokensGrid({ tokens: fontWeights }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
