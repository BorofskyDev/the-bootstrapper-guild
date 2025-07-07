import { ToggleTheme } from '@/components/ui'
import styles from './Header.module.scss'

export function Header() {
    return ( 
        <header className={styles.header}>
            <ToggleTheme />
        </header>
    )
}