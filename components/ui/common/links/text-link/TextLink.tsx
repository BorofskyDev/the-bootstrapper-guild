import { AnchorHTMLAttributes } from 'react'
import styles from './TextLink.module.scss'
import { Icon, icons } from '@/components/icons'
import Link from 'next/link'

type AnchorProps = AnchorHTMLAttributes<HTMLAnchorElement>

interface TextLinkProps extends AnchorProps {
  href: string
  children: React.ReactNode
  className?: string
  external?: boolean
}

const isClearlyExternal = (url: string) => /^(https?:\/\/|mailto:)/i.test(url)

export function TextLink({
  href,
  external,
  children,
  className = '',
  ...rest
}: TextLinkProps) {
  const isExternal = external ?? isClearlyExternal(href)

  if (isExternal) {
    return (
      <a
        href={href}
        className={`${styles.textLink} ${className}`}
        target='_blank'
        rel='noopener noreferrer'
        aria-label={
          rest['aria-label'] ??
          (typeof children === 'string'
            ? `${children} (opens in a new tab)`
            : undefined)
        }
        {...rest}
      >
        {children}
        <Icon
          className={styles.icon}
          aria-hidden='true'
          path={icons.external}
        />
      </a>
    )
  }

  return (
    <Link href={href} className={`${styles.textLink} ${className}`} {...rest}>
      {children}
    </Link>
  )
}
