import { Check } from 'phosphor-react'
import { CheckboxContainer, CheckboxIndicator } from './styles'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {}

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
