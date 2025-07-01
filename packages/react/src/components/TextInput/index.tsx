import { forwardRef, ComponentRef, InputHTMLAttributes } from 'react'
import { Input, Prefix, TextInputContainer } from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement>

export interface TextInputProps extends InputProps {
  prefix?: string
  disabled?: boolean
  placeholder?: string
}

export const TextInput = forwardRef<ComponentRef<typeof Input>, TextInputProps>(
  ({ prefix, ...props }: TextInputProps, ref) => {
    return (
      <TextInputContainer>
        {!!prefix && <Prefix>{prefix}</Prefix>}
        <Input ref={ref} {...props} />
      </TextInputContainer>
    )
  },
)

TextInput.displayName = 'TextInput'
