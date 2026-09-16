import { useCallback, useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion, type Transition } from 'motion/react'

interface RotatingTextProps {
  texts: string[]
  rotationInterval?: number
  staggerDuration?: number
  loop?: boolean
  auto?: boolean
  splitBy?: 'characters' | 'words'
  mainClassName?: string
  elementLevelClassName?: string
}

function splitIntoCharacters(text: string): string[] {
  if (typeof Intl !== 'undefined' && 'Segmenter' in Intl) {
    const segmenter = new Intl.Segmenter('en', { granularity: 'grapheme' })
    return Array.from(segmenter.segment(text), (segment) => segment.segment)
  }
  return Array.from(text)
}

const transition: Transition = { type: 'spring', damping: 22, stiffness: 280 }

export default function RotatingText({
  texts,
  rotationInterval = 2200,
  staggerDuration = 0.025,
  loop = true,
  auto = true,
  splitBy = 'characters',
  mainClassName = '',
  elementLevelClassName = '',
}: RotatingTextProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)

  const elements = useMemo(() => {
    const currentText = texts[currentTextIndex] ?? ''
    if (splitBy === 'words') {
      return currentText.split(' ').map((word, index, array) => ({
        characters: [word],
        needsSpace: index !== array.length - 1,
      }))
    }
    return currentText.split(' ').map((word, index, array) => ({
      characters: splitIntoCharacters(word),
      needsSpace: index !== array.length - 1,
    }))
  }, [currentTextIndex, splitBy, texts])

  const next = useCallback(() => {
    setCurrentTextIndex((index) => {
      if (index === texts.length - 1) return loop ? 0 : index
      return index + 1
    })
  }, [loop, texts.length])

  useEffect(() => {
    if (!auto) return
    const intervalId = setInterval(next, rotationInterval)
    return () => clearInterval(intervalId)
  }, [auto, next, rotationInterval])

  return (
    <span className={`relative inline-flex overflow-hidden ${mainClassName}`}>
      <span className="sr-only">{texts[currentTextIndex]}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={currentTextIndex}
          className="flex flex-wrap whitespace-pre-wrap"
          aria-hidden="true"
          initial={{ y: '100%', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-120%', opacity: 0 }}
          transition={transition}
        >
          {elements.map((word, wordIndex, array) => {
            const previousCharsCount = array
              .slice(0, wordIndex)
              .reduce((sum, item) => sum + item.characters.length, 0)

            return (
              <span key={`${word.characters.join('')}-${wordIndex}`} className="inline-flex">
                {word.characters.map((char, charIndex) => (
                  <motion.span
                    key={`${char}-${charIndex}`}
                    initial={{ y: '100%', opacity: 0, rotateX: 80 }}
                    animate={{ y: 0, opacity: 1, rotateX: 0 }}
                    exit={{ y: '-120%', opacity: 0, rotateX: -80 }}
                    transition={{
                      ...transition,
                      delay: (previousCharsCount + charIndex) * staggerDuration,
                    }}
                    className={`inline-block origin-bottom ${elementLevelClassName}`}
                    style={{ perspective: 400 }}
                  >
                    {char}
                  </motion.span>
                ))}
                {word.needsSpace ? '\u00A0' : null}
              </span>
            )
          })}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}
