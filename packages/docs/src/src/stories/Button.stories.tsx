import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@call-ui/react'
import type { ButtonProps } from '@call-ui/react'

export default {
  type: 'Button',
  component: Button,
  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}
