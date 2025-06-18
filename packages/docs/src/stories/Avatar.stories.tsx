import type { Meta, StoryObj } from '@storybook/react'
import { Avatar } from '@devnestali-call-ui/react'
import type { AvatarProps } from '@devnestali-call-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: 'https://github.com/devnestali.png',
    alt: 'Victor Nestali',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: 'Una estilización del avatar de usuário reutilizable',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
