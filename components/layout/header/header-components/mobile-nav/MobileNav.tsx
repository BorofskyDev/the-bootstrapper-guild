'use client'

import { motion } from 'framer-motion'
import { TextLink } from '@/components/ui'
import styles from './MobileNav.module.scss'
import { navLinks } from '../nav-links'

interface MobileNavProps {
  onLinkClick: () => void
  className?: string
}

export function MobileNav({ onLinkClick, className }: MobileNavProps) {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${styles.mobileNav} ${className}`}
    >
      <div className={styles.links}>
        {navLinks.map(({ href, label }) => (
          <TextLink key={href} external href={href} onClick={onLinkClick}>
            {label}
          </TextLink>
        ))}
      </div>
   
    </motion.nav>
  )
}
