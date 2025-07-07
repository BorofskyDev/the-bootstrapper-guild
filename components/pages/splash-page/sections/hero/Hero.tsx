import { Heading, PText } from '@/components/ui'
import styles from './Hero.module.scss'
import { Icon, icons } from '@/components/icons'
import {
  ImageContainer,
  ParagraphContainer,
  SectionContainer,
} from '@/components/layout'
import image from '@/public/images/baudrillard_of_the_real.jpg'

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
        <PText>&quot;Tech is broken.&quot;</PText>
        <PText>
          It&apos;s a common refrain and it&apos;s impossible to deny. Those who
          have still in the game face ever-increasing pressure, faster
          deadlines, reduced benefits, salaries, and lfiestyles. Above it all,
          the threat of AI looms over our heads.
        </PText>
        <PText>
          The landscape for those outside of gainful employment is bleak. At the
          beginning of tech&apos;s collapse, you were up against 100-200 other
          applicants. Now? You&apos;re up against that same number but about
          8-10x as many AI applicants flooding the system.
        </PText>
        <PText>
          For those involved in the tech industry but not developers (think
          designers, HR, recruiters, sales, marketing, etc) the situation is
          essentially the same as it is for developers. For years all of us
          worked with each other and maybe had tension, but we now all face the
          same problem. AI or not, the direction of the industry toward the past
          decade has to been the &quot;retailification&quot; of the workforce;
          low pay, low benefits, and you ought to be thankful you have a job.
        </PText>
        <PText>
          For users they&apos;re met with the opposite of good UI/UX - IU/XU
          (Impossible to Use and Fxcked Up). Critical systems that can matter in
          moments of crisis are often developed cheaply, quickly, and left a
          convoluted mess. Nurses trying to get information as quickly as
          possible are met with a UI/UX that is impossible to navigate. Users
          who have fallen in love with an app&apos;s features are suddenly met
          with a paywall or worse, suffer through the grind of enshittification
          after a VC buys up the app and milks it for everything, and once
          it&apos;s drank the last drop of revenue, it either drops the company
          or converts the users into the product.
        </PText>
        <PText>
          The internet brought us the promise of freedom, of decentralization,
          or using technology to better ourselves and make our lives easier.
          Instead we moved fast, broke things, and lost our humanity in the
          process. Welcome to the desert of the real.
        </PText>
        <ImageContainer
          src={image.src}
          alt='scene from the matrix of morpheus saying to neo welcome to the desert of the real'
        />
        <PText>
          It&apos;s time to stop pretending that the tech industry is something
          it&apos;s not. It&apos;s not the great hope for humanity that all the
          founders and thought-leaders tell us it is. It is a tool, a very
          powerful tool, but just a tool. We aren&apos;t gods or magicians,
          we&apos;re not great men who move mountains. We&apos;re modern
          cobblers, craftspeople, and it&apos;s high time we begin acting like
          it.
        </PText>
        <PText>
          We can succumb to the system, or we can fight it. We can follow their
          rules, or we can build something different. A decentralized guild of
          bootstrappers, freelancers, and fed-up technologists.
        </PText>
        <PText>
          It&apos;s not freelancing. It&apos;s not a new company, or a start-up,
          or whatever bullshit marketing term we can conjur. We&apos;re not
          changing the world or revolutionizing anything. We&apos;re building
          new models with new systems, testing new ways to integrate new
          technology without losing the human aspect of business. We&apos;re
          refusing the enshittification pipeline. We&apos;re being human.
        </PText>
      </ParagraphContainer>
    </SectionContainer>
  )
}
