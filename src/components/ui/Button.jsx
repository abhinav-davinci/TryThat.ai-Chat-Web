import React from 'react'
import { cn } from '../../utils/helpers'

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'base', 
  children, 
  icon,
  ...props 
}, ref) => {
  const baseClasses = 'btn'
  const variantClasses = {
    primary: 'btn-primary',
    secondary: 'btn-secondary',
    ghost: 'btn-ghost',
    success: 'btn-success',
    error: 'btn-error'
  }
  const sizeClasses = {
    xs: 'btn-xs',
    sm: 'btn-sm',
    base: '',
    lg: 'btn-lg',
    xl: 'btn-xl'
  }

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    icon && 'btn-icon',
    className
  )

  return (
    <button
      className={classes}
      ref={ref}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  )
})

Button.displayName = 'Button'

export default Button