import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@call-ui/react'
import type { ButtonProps } from '@call-ui/react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Enviar',
  },
  parameters: {
    docs: {
      description: {
        component:
          'Un botón reutilizable para acciones principales e secundarias',
      },
    },
  },
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  },
}
