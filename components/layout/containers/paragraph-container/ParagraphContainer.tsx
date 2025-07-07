import { Heading } from '@/components/ui'
import styles from './ParagraphContainer.module.scss'

interface ParagraphContainerProps {
  children: React.ReactNode
  className?: string
  title: string
  id: string
}

export const ParagraphContainer: React.FC<ParagraphContainerProps> = ({
  children,
  className = '',
  title,
  id,
}) => {
  return (
    <section id={id} className={`${styles.paragraphContainer} ${className}`}>
      <Heading element='h2' variant='section'>
        {title}
      </Heading>
      <div className={styles.content}>

      {children}
      </div>
    </section>
  )
}
