import { TypedHeading } from '@/components/ui'
import styles from './ParagraphContainer.module.scss'

interface ParagraphContainerProps {
  children: React.ReactNode
  className?: string
  id: string
  text1: string
  text2: string
  icon: string
  viewBox?: string
}

export const ParagraphContainer: React.FC<ParagraphContainerProps> = ({
  children,
  className = '',
  id,
  text1,
  text2,
  icon,
  viewBox = '0 0 64 64',
}) => {
  return (
    <section id={id} className={`${styles.paragraphContainer} ${className}`}>
      <TypedHeading
        element='h2'
        variant='section'
        text1={text1}
        text2={text2}
        icon={icon}
        viewBox={viewBox}
      />
      <div className={styles.content}>{children}</div>
    </section>
  )
}
