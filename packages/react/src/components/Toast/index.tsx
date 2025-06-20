import { ToastDescription, ToastProvider } from '@radix-ui/react-toast'
import {
  ToastContainer,
  ToastInfo,
  ToastTitle,
  ToastClose,
  ToastViewport,
} from './styles'
import { X } from 'phosphor-react'
import { ComponentProps, useState } from 'react'

type DaysOfWeek =
  | 'domingo'
  | 'segunda-feira'
  | 'terça-feira'
  | 'quarta-feira'
  | 'quinta-feira'
  | 'sexta-feira'
  | 'sábado'

export interface ToastProps extends ComponentProps<'button'> {
  dayOfWeek: DaysOfWeek
  dateOfMonth: string
  time: number
  content: string
}

export function Toast({
  dayOfWeek,
  dateOfMonth,
  time,
  content,
  ...props
}: ToastProps) {
  const [openToast, setOpenToast] = useState(false)

  function handleClickToShowToast() {
    setTimeout(() => setOpenToast(true), 200)
  }

  return (
    <ToastProvider swipeDirection="right">
      <button onClick={handleClickToShowToast} {...props}>
        {content}
      </button>

      <ToastContainer open={openToast} onOpenChange={setOpenToast}>
        <ToastTitle>Agendamento realizado</ToastTitle>
        <ToastDescription asChild>
          <ToastInfo>
            {dayOfWeek} <time>{dateOfMonth} </time>
            ás {time}h
          </ToastInfo>
        </ToastDescription>
        <ToastClose asChild>
          <X />
        </ToastClose>
      </ToastContainer>

      <ToastViewport />
    </ToastProvider>
  )
}
