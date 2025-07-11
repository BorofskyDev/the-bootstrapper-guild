'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ToggleTheme } from '@/components/ui'
import { HamburgerBtn } from './header-components'
import { MobileNav } from './header-components'
// import { DesktopNav } from './header-components'
import styles from './Header.module.scss'

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleToggleMenu() {
    setMenuOpen((prev) => !prev)
  }

  function handleLinkClick() {
    setMenuOpen(false)
  }

  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <HamburgerBtn isOpen={menuOpen} onClick={handleToggleMenu} />
        {/* <DesktopNav /> */}
      </div>

      <div className={styles.right}>
        <ToggleTheme className={styles.toggleTheme} />
      </div>

      <AnimatePresence>
        {menuOpen && (
          <MobileNav
            onLinkClick={handleLinkClick}
            className={styles.mobileNav}
          />
        )}
      </AnimatePresence>
    </header>
  )
}
