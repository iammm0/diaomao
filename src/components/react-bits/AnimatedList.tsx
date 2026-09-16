import { useRef, type ReactNode } from 'react'
import { motion, useInView } from 'motion/react'

interface AnimatedItemProps {
  children: ReactNode
  delay?: number
  index: number
  className?: string
}

function AnimatedItem({ children, delay = 0, index, className = '' }: AnimatedItemProps) {
  const ref = useRef<HTMLLIElement>(null)
  const inView = useInView(ref, { amount: 0.35, once: true })

  return (
    <motion.li
      ref={ref}
      data-index={index}
      initial={{ opacity: 0, y: 14 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
      transition={{ duration: 0.35, delay: delay + index * 0.07, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.li>
  )
}

interface AnimatedListProps {
  items: readonly string[]
  className?: string
  itemClassName?: string
  delay?: number
}

/** Staggered list reveal adapted from React Bits AnimatedList for long-form skill bullets. */
export default function AnimatedList({
  items,
  className = '',
  itemClassName = '',
  delay = 0,
}: AnimatedListProps) {
  return (
    <ul className={className}>
      {items.map((item, index) => (
        <AnimatedItem
          key={item.slice(0, 36)}
          index={index}
          delay={delay}
          className={itemClassName}
        >
          {item}
        </AnimatedItem>
      ))}
    </ul>
  )
}
