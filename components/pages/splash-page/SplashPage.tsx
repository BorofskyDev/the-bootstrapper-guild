import { PageContainer } from '@/components/layout'
import {
  HeroSection,
  HowItWorksSection,
  PhilosophySection,
  WhyNowSection,
} from './sections'
import styles from './SplashPage.module.scss'

export function SplashPage() {
  return (
    <PageContainer className={styles.splashPage}>
      <HeroSection />
      <PhilosophySection />
      <HowItWorksSection />
      <WhyNowSection />
    </PageContainer>
  )
}
