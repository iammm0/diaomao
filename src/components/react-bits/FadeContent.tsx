import { useEffect, useRef, type HTMLAttributes, type ReactNode } from 'react'
import { gsap } from 'gsap'

interface FadeContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode
  container?: Element | string | null
  blur?: boolean
  duration?: number
  ease?: string
  delay?: number
  threshold?: number
  initialOpacity?: number
  disappearAfter?: number
  disappearDuration?: number
  disappearEase?: string
  onComplete?: () => void
  onDisappearanceComplete?: () => void
}

const isInViewport = (node: Element, threshold: number) => {
  const rect = node.getBoundingClientRect()
  const visible = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0)
  return visible >= rect.height * threshold || (rect.top < window.innerHeight && rect.bottom > 0)
}

export default function FadeContent({
  children,
  container: _container,
  blur = false,
  duration = 1000,
  ease = 'power2.out',
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = 'power2.in',
  onComplete,
  onDisappearanceComplete,
  className = '',
  ...props
}: FadeContentProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const getSeconds = (val: number) => (val > 10 ? val / 1000 : val)
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    gsap.set(el, {
      autoAlpha: reducedMotion ? 1 : initialOpacity,
      filter: blur && !reducedMotion ? 'blur(10px)' : 'blur(0px)',
    })

    if (reducedMotion) return

    const play = () => {
      gsap.to(el, {
        autoAlpha: 1,
        filter: 'blur(0px)',
        duration: getSeconds(duration),
        delay: getSeconds(delay),
        ease,
        onComplete: () => {
          onComplete?.()
          if (disappearAfter > 0) {
            gsap.to(el, {
              autoAlpha: initialOpacity,
              filter: blur ? 'blur(10px)' : 'blur(0px)',
              delay: getSeconds(disappearAfter),
              duration: getSeconds(disappearDuration),
              ease: disappearEase,
              onComplete: () => onDisappearanceComplete?.(),
            })
          }
        },
      })
    }

    if (isInViewport(el, threshold)) {
      play()
      return () => {
        gsap.killTweensOf(el)
        gsap.set(el, { clearProps: 'all' })
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          play()
          observer.disconnect()
        }
      },
      { threshold },
    )

    observer.observe(el)

    return () => {
      observer.disconnect()
      gsap.killTweensOf(el)
      gsap.set(el, { clearProps: 'all' })
    }
  }, [
    blur,
    delay,
    disappearAfter,
    disappearDuration,
    disappearEase,
    duration,
    ease,
    initialOpacity,
    onComplete,
    onDisappearanceComplete,
    threshold,
  ])

  return (
    <div ref={ref} className={className} {...props}>
      {children}
    </div>
  )
}
