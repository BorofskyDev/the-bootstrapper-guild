import { Heading, PText } from '@/components/ui'
import styles from './Hero.module.scss'
import { Icon, icons } from '@/components/icons'
import { ParagraphContainer, SectionContainer } from '@/components/layout'

export function HeroSection() {
  return (
    <SectionContainer id='hero' className={styles.heroSection}>
      <div className={styles.heading}>
        <Heading element='h1' variant='page'>
          The Bootstrapper Guild
        </Heading>
        <Icon path={icons.boot} className={styles.icon} />
      </div>

      <ParagraphContainer
        id='deshitification'
        title='the deshitification of tech'
      >
        <PText>
          Tech is broken. Founders are burned out and those that have made it
          are more interested in the bottom line than a functioning product.
          Developers are underpaid and treated as fodder. Designers are
          sidelined and viewed as a luxury. Sales is soulless. Recruiting and
          hiring is a mess. It’s not just a few sites or apps that have been
          enshitified, it’s the whole goddamn internet.
        </PText>
        <PText>
          We&apos;re building something else, something different. A
          decentralized guild of bootstrappers, freelancers, and fed-up
          technologists.
        </PText>
        <PText>
          It&apos;s not freelancing. We&apos;re building new models with new
          systems, testing new ways to integrate new technology without losing
          the human aspect of business. We&apos;re refusing the enshittification
          pipeline.
        </PText>
      </ParagraphContainer>
    </SectionContainer>
  )
}
