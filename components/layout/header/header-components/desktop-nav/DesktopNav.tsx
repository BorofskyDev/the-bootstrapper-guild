import { TextLink } from "@/components/ui";

import styles from './DesktopNav.module.scss'
import { navLinks } from "../nav-links";

export function DesktopNav() {
    return ( 
        <nav className={styles.desktopNav}  >
        {navLinks.map(({ href, label}) => ( 
            <TextLink key={href} href={href}>
                {label}
            </TextLink>
        ))}
        </nav>
    )
}