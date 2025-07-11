import { ListBoxWithArrowIcon, ParagraphContainer } from '@/components/layout'
import { PText } from '@/components/ui'
import styles from './Philosophy.module.scss'

export function PhilosophySection() {
  return (
    <ParagraphContainer
      text1='Rethinking the way we work'
      text2='we weren&apos;t made for this'
      icon='pain'
      id='philosophy'
      className={styles.philosophySection}
    >
      <PText>
        Our philosophy is simple: democracy isn&apos;t just something for the
        government.
      </PText>
      <PText>
        The whole of human existence is about cooperation and working together.
        Everything in our social evolution cris out for cooperation, yet
        we&apos;re forced to work in a system that hyper-individualizes us,
        separates us from real cooperation, creates a false simulation of it,
        and turns us into a cog.
      </PText>

      <PText>Our beliefs can be summed as:</PText>
      <ul className={styles.philosophyList}>
        <ListBoxWithArrowIcon text='Capital is not a god' />
        <ListBoxWithArrowIcon text='Builders should have a say in ownership' />
        <ListBoxWithArrowIcon text='Software should serve people, from concept to implementation' />
        <ListBoxWithArrowIcon text="Burnout isn't a badge of honor, it's a sign of broken" />
        <ListBoxWithArrowIcon text="Tools are created for people, people aren't create for tools" />
      </ul>
    </ParagraphContainer>
  )
}
