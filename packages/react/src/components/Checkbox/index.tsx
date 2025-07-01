import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import { ButtonHTMLAttributes } from 'react'

type ButtonCheckboxProps = ButtonHTMLAttributes<HTMLButtonElement>

export interface CheckboxProps extends ButtonCheckboxProps {}

export function Checkbox(props: CheckboxProps) {
  return (
    <CheckboxContainer {...props}>
      <CheckboxIndicator asChild>
        <Check weight="bold" />
      </CheckboxIndicator>
    </CheckboxContainer>
  )
}

Checkbox.displayName = 'Checkbox'
