import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipContentStyled = styled(Tooltip.TooltipContent, {
  backgroundColor: '$gray900',
  color: '$gray100',
  textAlign: 'center',
  padding: '$2 $4',
  borderRadius: '$xs',
})

export const TooltipInfo = styled('span', {
  fontSize: '$sm',
  fontFamily: '$default',
})
