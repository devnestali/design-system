import type { Meta, StoryObj } from '@storybook/react'
import { Tooltip } from '@devnestali-call-ui/react'
import type { TooltipProps } from '@devnestali-call-ui/react'

export default {
  title: 'Popover/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Una estilización de un tooltip',
      },
    },
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {
  args: {
    date: '21 de Outubro',
    disponibility: 'Disponíble',
    children: <button>Hover here</button>,
  },
}

export const Unavailable: StoryObj<TooltipProps> = {
  args: {
    date: '21 de Outubro',
    disponibility: 'Indisponíble',
    children: <button>Hover here</button>,
  },
}
