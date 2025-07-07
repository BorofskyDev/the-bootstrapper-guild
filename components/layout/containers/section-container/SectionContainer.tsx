import styles from './SectionContainer.module.scss'

interface SectionContainerProps {
  children: React.ReactNode
  id: string
  className?: string
}

export const SectionContainer: React.FC<SectionContainerProps> = ({
  children,
  id,
  className = '',
}) => {
  return (
    <section id={id} className={`${styles.sectionContainer} ${className}`}>
      {children}
    </section>
  )
}
