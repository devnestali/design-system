import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text } from '@call-ui/react'
import type { BoxProps } from '@call-ui/react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    children: (
      <>
        <Text>Testando elemento box</Text>
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
