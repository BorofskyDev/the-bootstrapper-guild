'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import clsx from 'clsx'
import { icons, IconName } from '@/components/icons/'
import { HeadingElement, HeadingVariant } from '../types'
import styles from './TypedHeading.module.scss'

interface TypedHeadingProps {
  element?: HeadingElement
  variant?: HeadingVariant
  className?: string
  text1: string
  text2: string
  icon: IconName
  typeSpeed?: number
  deleteSpeed?: number
  delayBetween?: number
  viewBox?: string
}

export const TypedHeading: React.FC<TypedHeadingProps> = ({
  element: Element = 'h2',
  variant = 'section',
  className,
  text1,
  text2,
  icon,
  typeSpeed = 50,
  deleteSpeed = 40,
  delayBetween = 1000,
  viewBox = '0 0 64 64'
}) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [displayedText, setDisplayedText] = useState('')
  const [phase, setPhase] = useState<
    'idle' | 'typing1' | 'deleting' | 'typing2' | 'done'
  >('idle')

  // Start when in view
  useEffect(() => {
    if (isInView && phase === 'idle') {
      setPhase('typing1')
    }
  }, [isInView, phase])

  // Typing animation
  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (phase === 'typing1') {
      if (displayedText.length < text1.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text1.slice(0, displayedText.length + 1))
        }, typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('deleting'), delayBetween)
      }
    }

    if (phase === 'deleting') {
      if (displayedText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayedText(displayedText.slice(0, -1))
        }, deleteSpeed)
      } else {
        timeout = setTimeout(() => setPhase('typing2'), 300)
      }
    }

    if (phase === 'typing2') {
      if (displayedText.length < text2.length) {
        timeout = setTimeout(() => {
          setDisplayedText(text2.slice(0, displayedText.length + 1))
        }, typeSpeed)
      } else {
        timeout = setTimeout(() => setPhase('done'), 500)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayedText, phase, text1, text2, typeSpeed, deleteSpeed, delayBetween])

  return (
    <Element
      ref={ref}
      className={clsx(styles.heading, styles[`heading--${variant}`], className)}
      aria-live='polite'
    >
      <span>{displayedText}</span>
      <span className={styles.typedIconWrapper}>
        <AnimatePresence mode='wait'>
          {phase !== 'done' ? (
            <motion.svg
              key='cursor'
              width='2'
              height='24'
              viewBox='0 0 2 24'
              xmlns='http://www.w3.org/2000/svg'
              initial={{ pathLength: 0, opacity: 1 }}
              animate={{
                pathLength: 1,
                opacity: [1, 0.2, 1],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            >
              <motion.line
                x1='1'
                y1='0'
                x2='1'
                y2='24'
                stroke='currentColor'
                strokeWidth='2'
              />
            </motion.svg>
          ) : (
            <motion.svg
              key='icon'
              width='32'
              height='32'
              viewBox={viewBox}
              xmlns='http://www.w3.org/2000/svg'
              initial={{ pathLength: 0, opacity: 0, x: -4 }}
              animate={{ pathLength: 1, opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            >
              <motion.path
                d={icons[icon]}
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
              />
            </motion.svg>
          )}
        </AnimatePresence>
      </span>
    </Element>
  )
}
