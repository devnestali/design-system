import type { Meta, StoryObj } from '@storybook/react'
import { Box } from '@call-ui/react'
import type { BoxProps } from '@call-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <span>Testando elemento box</span>
      </>
    ),
  },
  parameters: {
    docs: {
      description: {
        component: 'Un box reutilizable',
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
