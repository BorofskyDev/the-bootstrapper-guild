import Image from 'next/image'
import styles from './ImageContainer.module.scss'
import { PText } from '@/components/ui'

interface ImageContainerProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  caption?: string
}

export function ImageContainer({
  src,
  alt,
  className = '',
  width = 1980,
  height = 960,
  caption,
}: ImageContainerProps) {
  return (
    <figure className={`${styles.imageContainer} ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout='responsive'
        objectFit='cover'
        className={styles.image}
      />
      {caption && (
        <figcaption>
          <PText variant='caption' className={styles.caption}>
            {caption}
          </PText>
        </figcaption>
      )}
    </figure>
  )
}
