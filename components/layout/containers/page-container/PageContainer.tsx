import styles from './PageContainer.module.scss'

interface PageContainerProps {
  children: React.ReactNode
  className?: string
}

export const PageContainer: React.FC<PageContainerProps> = ({
  children,
  className,
}) => {
  return <main className={`${styles.pageContainer} ${className}`}>{children}</main>
}
