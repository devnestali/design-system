import type { Meta, StoryObj } from '@storybook/react'
import { Box, MultiStep } from '@call-ui/react'
import type { MultiStepProps } from '@call-ui/react'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
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
} as Meta<MultiStepProps>

export const Primary: StoryObj<MultiStepProps> = {}

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
}
