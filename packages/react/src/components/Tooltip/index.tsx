import {
  TooltipProvider,
  Root,
  TooltipTrigger,
  TooltipPortal,
  TooltipArrow,
} from '@radix-ui/react-tooltip'
import { ComponentProps, ReactNode } from 'react'
import { TooltipContentStyled, TooltipInfo } from './styles'

export interface TooltipProps
  extends ComponentProps<typeof TooltipContentStyled> {
  date: string
  disponibility: 'Disponíble' | 'Indisponíble'
  children: ReactNode
}

export function Tooltip({ date, disponibility, children }: TooltipProps) {
  return (
    <TooltipProvider>
      <Root>
        <TooltipTrigger asChild>{children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContentStyled>
            <TooltipInfo>{date}</TooltipInfo> -
            <TooltipInfo> {disponibility}</TooltipInfo>
            <TooltipArrow />
          </TooltipContentStyled>
        </TooltipPortal>
      </Root>
    </TooltipProvider>
  )
}
