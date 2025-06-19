import type { Preview } from '@storybook/react-vite'
import './styles/fonts.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    options: {
      storySort: {
        order: [
          'Tokens',
          'Typography',
          'Surfaces',
          'Form',
          'Popover',
          'Data Display',
        ],
      },
    },
  },
}

export default preview
