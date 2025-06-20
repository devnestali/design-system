import { styled, keyframes } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

const slideUp = keyframes({
  from: { transform: 'translateY(100%)' },
  to: { transform: 'translateY(0)' },
})

export const ToastContainer = styled(Toast.Root, {
  position: 'relative',
  background: '$gray800',
  padding: '$3 $5',
  border: '1px solid $gray600',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',
  width: '360px',
  height: 'auto',
  animation: `${slideUp} 100ms ease-in`,
})

export const ToastTitle = styled(Toast.Title, {
  fontFamily: '$default',
  fontWeight: '$bold',
  fontSize: '$xl',
  color: '$white',
  lineHeight: '$base',
})

export const ToastInfo = styled('div', {
  fontFamily: '$default',
  fontWeight: '$regular',
  fontSize: '$sm',
  color: '$gray200',
  lineHeight: '$base',
})

export const ToastClose = styled(Toast.Close, {
  position: 'absolute',
  top: 14,
  right: 18,
  color: '$gray200',
  width: '20px',
  height: '20px',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 20,
  right: 20,
  width: 'auto',
  maxWidth: '100vw',
  zIndex: 9999,
})
