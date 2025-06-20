import {
  TooltipProvider,
  Root,
  TooltipTrigger,
  TooltipPortal,
  TooltipArrow,
} from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipContentStyled, TooltipInfo } from './styles'

export interface TooltipProps extends ComponentProps<typeof Root> {
  date: string
  disponibility: 'Disponíble' | 'Indisponíble'
  children: ReactNode
}

export function Tooltip({ date, disponibility, children }: TooltipProps) {
  return (
    <TooltipProvider delayDuration={300}>
      <Root>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContentStyled>
            <time>{date}</time> -<TooltipInfo> {disponibility}</TooltipInfo>
            <TooltipArrow />
          </TooltipContentStyled>
        </TooltipPortal>
      </Root>
    </TooltipProvider>
  )
}
