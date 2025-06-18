import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, Text } from '@devnestali-call-ui/react'
import type { CheckboxProps } from '@devnestali-call-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'row', gap: '$2' }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        component: 'Una estilización de una checkbox reutilizable',
      },
    },
  },
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
