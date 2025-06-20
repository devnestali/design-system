import type { Meta, StoryObj } from '@storybook/react'
import { Toast } from '@devnestali-call-ui/react'
import type { ToastProps } from '@devnestali-call-ui/react'

export default {
  title: 'Popover/Toast',
  component: Toast,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Una estilización de un Toast para acciones de click',
      },
    },
  },
  argTypes: {
    dayOfWeek: { control: false },
    dateOfMonth: { control: false },
    time: { control: false },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '250px', height: '250px' }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {
  args: {
    dayOfWeek: 'segunda-feira',
    dateOfMonth: '05 de novembro',
    time: 9,
    content: 'test',
  },
}
