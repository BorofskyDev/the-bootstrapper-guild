import clsx from 'clsx'
import styles from './Button.module.scss'

type ButtonProps = {
  variant: 'primary' | 'secondary' | 'tertiary'
  children: React.ReactNode
  type: 'button' | 'submit' | 'reset'
  onClick?: () => void
  className?: string
  disabled?: boolean
  ariaLabel?: string
}

export function Button({
  variant,
  children,
  type = 'button',
  onClick,
  className = '',
  disabled = false,
  ariaLabel = '',
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(styles.button, styles[`button__${variant}`], className)}
      disabled={disabled}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
