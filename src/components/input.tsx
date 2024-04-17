import { ReactNode } from 'react'
import { TextInput, TextInputProps, View } from 'react-native'
import { cn } from '@/utils/merge-classes'

interface InputProps {
  className?: string
  children: ReactNode
}

function Input({ className, children }: InputProps) {
  return (
    <View
      className={cn(
        'w-full h-14 flex-row items-center gap-3 p-3 border border-green-400 rounded-lg',
        className,
      )}
    >
      {children}
    </View>
  )
}

interface FieldProps extends TextInputProps {}

function Field({ className, ...props }: FieldProps) {
  return (
    <TextInput
      className={cn(
        'placeholder:text-gray-200 flex-1 text-gray-100 h-full',
        className,
      )}
      {...props}
    />
  )
}

Input.Field = Field

export { Input }
