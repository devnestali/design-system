import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput } from '@devnestali-call-ui/react'
import type { InputProps } from '@devnestali-call-ui/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email Address</Text>
          {Story()}
        </Box>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        component: 'Una estilización de input de texto reutilizable',
      },
    },
  },
} as Meta<InputProps>

export const Primary: StoryObj<InputProps> = {
  args: {
    placeholder: 'Type your name',
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
}

export const WithPrefix: StoryObj<InputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
}
export const WithTypeTimer: StoryObj<InputProps> = {
  args: {
    type: 'time',
  },
}
