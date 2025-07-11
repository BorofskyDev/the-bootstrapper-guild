import { ImageContainer, ParagraphContainer } from '@/components/layout'
import { PText } from '@/components/ui'
import gondor from '@/public/images/white_tree.jpg'

export function WhyNowSection() {
  return (
    <ParagraphContainer
      id='why-now'
      text1="seizing tomorrow's opportunities, today!"
      text2="it's the last good chance to start"
      icon='fight'
    >
      <PText>
        Looking at the market, AI is eating up the low-end. VCs are strip-mining
        the high-end. Tech jobs are drying up and the few that remain often have
        hundreds of real applicants and thousands of AI applicants. Remote is
        fading. Burnout is surging.
      </PText>
      <PText>
        By all measures this seems like an incredibly stupid time to try and do
        something like this. With AI likely being able to design and develop
        semi-functional websites within the next two years, in what world does
        this make sense?
      </PText>
      <ImageContainer
        src={gondor.src}
        alt='the white tree of gondor but with a single budding leaf'
      />
      <PText>This world. This is the world where it makes sense.</PText>
      <PText>
        The irony is this: the doom and gloom of the above proves that now is
        the perfect time. We all know that tech isn&apos;t sustainable as an
        industry. It&apos;s been disrupted so many times, &quot;broken to build
        fast&quot; year in and year out, that it&apos;s never had time to
        stabalize.
      </PText>
      <PText>
        Tech is primed for a bust. The AI slop, while it&apos;ll improve, will
        still result in worse outcomes and broken results at scale. While
        it&apos;ll be cheaper than using a human up front, the end product might
        not be worth the cost.
      </PText>
      <PText>
        People are going to need a new type of tech company to go to. Building
        right now makes the most sense. You don&apos;t build after the storm,
        you build before it. Unfortunately, we&apos;re in the middle of it, but
        there&apos;s still time.
      </PText>
      <PText>
        We still have the skills. We still have each other. We still know how to
        work this business. And more than that, most of us know how to use AI
        just as well as our corporate overlords; in most cases, we know better.
      </PText>
      <PText>We can wait for the future, or we can build it now.</PText>
    </ParagraphContainer>
  )
}
