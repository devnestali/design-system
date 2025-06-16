import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fontSizes } from '@call-ui/tokens'

export default {
  title: 'Tokens/Font Sizes',
  component: () => TokensGrid({ tokens: fontSizes, hasRemValue: true }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
