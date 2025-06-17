import type { Meta, StoryObj } from '@storybook/react'
import { Box, TextArea, Text } from '@call-ui/react'
import type { TextAreaProps } from '@call-ui/react'

export default {
  title: 'Form/Text Area',
  component: TextArea,
  tags: ['autodocs'],
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Observations</Text>
          {Story()}
        </Box>
      )
    },
  ],
  parameters: {
    docs: {
      description: {
        component: 'Una estilización de una area de texto reutilizable',
      },
    },
  },
} as Meta<TextAreaProps>

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observations...',
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
