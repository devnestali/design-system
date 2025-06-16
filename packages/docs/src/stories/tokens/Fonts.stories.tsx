import type { Meta, StoryObj } from '@storybook/react'
import { TokensGrid } from '../../components/TokensGrid'
import { fonts } from '@call-ui/tokens'

export default {
  title: 'Tokens/Font Families',
  component: () => TokensGrid({ tokens: fonts }),
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: '',
    },
  },
} as Meta

export const Default: StoryObj<typeof TokensGrid> = {}
