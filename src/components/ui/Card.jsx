import React from 'react'
import { cn } from '../../utils/helpers'

const Card = React.forwardRef(({ className, children, variant = 'default', ...props }, ref) => {
  const baseClasses = 'card'
  const variantClasses = {
    default: '',
    elevated: 'card-elevated',
    bordered: 'card-bordered',
    gradient: 'card-gradient'
  }

  return (
    <div
      ref={ref}
      className={cn(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
    </div>
  )
})

const CardHeader = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('card-header', className)} {...props}>
    {children}
  </div>
))

const CardTitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <h3 ref={ref} className={cn('card-title', className)} {...props}>
    {children}
  </h3>
))

const CardSubtitle = React.forwardRef(({ className, children, ...props }, ref) => (
  <p ref={ref} className={cn('card-subtitle', className)} {...props}>
    {children}
  </p>
))

const CardBody = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('card-body', className)} {...props}>
    {children}
  </div>
))

const CardFooter = React.forwardRef(({ className, children, ...props }, ref) => (
  <div ref={ref} className={cn('card-footer', className)} {...props}>
    {children}
  </div>
))

Card.displayName = 'Card'
CardHeader.displayName = 'CardHeader'
CardTitle.displayName = 'CardTitle'
CardSubtitle.displayName = 'CardSubtitle'
CardBody.displayName = 'CardBody'
CardFooter.displayName = 'CardFooter'

export default Card
export { CardHeader, CardTitle, CardSubtitle, CardBody, CardFooter }