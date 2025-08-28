import React from 'react'
import { cn } from '../../utils/helpers'

const Input = React.forwardRef(({ 
  className, 
  type = 'text',
  size = 'base',
  error,
  ...props 
}, ref) => {
  const baseClasses = 'input'
  const sizeClasses = {
    sm: 'input-sm',
    base: '',
    lg: 'input-lg'
  }
  const errorClasses = error ? 'input-error' : ''

  return (
    <input
      type={type}
      className={cn(baseClasses, sizeClasses[size], errorClasses, className)}
      ref={ref}
      {...props}
    />
  )
})

Input.displayName = 'Input'

export default Input