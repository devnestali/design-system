import { ColorsGrid } from '../../components/ColorsGrid'
import type { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Tokens/Colors',
  component: ColorsGrid,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Estas son los colores del utilizadas en el Call UI',
      },
    },
  },
} as Meta

export const Default: StoryObj<typeof ColorsGrid> = {}
