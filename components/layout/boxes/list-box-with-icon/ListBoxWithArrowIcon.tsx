import { Icon, icons } from '@/components/icons'
import { PText } from '@/components/ui'
import styles from './ListBoxWithArrowIcon.module.scss'

interface ListBoxWithArrowIconProps {
  text: string
  className?: string
}

export function ListBoxWithArrowIcon({
  text,
  className = '',
}: ListBoxWithArrowIconProps) {
  return (
    <li className={`${styles.listBoxWithIcon} ${className}`}>
      <Icon path={icons.arrow} className={styles.icon} />
      <PText variant='emphasis'>{text}</PText>
    </li>
  )
}
