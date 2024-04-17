import { cn } from '@/utils/merge-classes'
import { ActivityIndicator, ActivityIndicatorProps } from 'react-native'

export function Loading({ className, ...props }: ActivityIndicatorProps) {
  return (
    <ActivityIndicator
      className={cn(
        'flex-1 bg-green-500 items-center justify-center text-orange-500',
        className,
      )}
      {...props}
    />
  )
}
