import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  ActivityIndicator,
} from 'react-native'
import { cn } from '@/utils/merge-classes'

interface ButtonProps extends TouchableOpacityProps {
  children: string | number
  isLoading?: boolean
}

export function Button({
  className,
  children,
  isLoading = false,
  ...props
}: ButtonProps) {
  return (
    <TouchableOpacity
      className={cn(
        'w-full h-14 bg-orange-500 items-center justify-center rounded-lg',
        isLoading && 'opacity-80',
        className,
      )}
      activeOpacity={0.7}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator className="text-green-500" />
      ) : (
        <Text className="text-green-500 text-base font-bold uppercase">
          {children}
        </Text>
      )}
    </TouchableOpacity>
  )
}
