import { useCallback, useEffect, useMemo, useRef } from 'react'
import { createPortal } from 'react-dom'
import { gsap } from 'gsap'

interface TargetCursorProps {
  targetSelector?: string
  spinDuration?: number
  hideDefaultCursor?: boolean
  cursorColor?: string
}

export default function TargetCursor({
  targetSelector = '.cursor-target',
  spinDuration = 2,
  hideDefaultCursor = true,
  cursorColor = '#4a5d4e',
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cornersRef = useRef<NodeListOf<HTMLDivElement> | null>(null)
  const spinTl = useRef<gsap.core.Timeline | null>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  const isMobile = useMemo(() => {
    if (typeof window === 'undefined') return false
    const hasTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0
    const isSmallScreen = window.innerWidth <= 768
    return hasTouchScreen && isSmallScreen
  }, [])

  const constants = useMemo(() => ({ borderWidth: 3, cornerSize: 12 }), [])

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return
    gsap.to(cursorRef.current, { x, y, duration: 0.12, ease: 'power3.out' })
  }, [])

  useEffect(() => {
    if (isMobile || !cursorRef.current) return

    const originalCursor = document.body.style.cursor
    if (hideDefaultCursor) document.body.style.cursor = 'none'

    const cursor = cursorRef.current
    cornersRef.current = cursor.querySelectorAll<HTMLDivElement>('.target-cursor-corner')

    let activeTarget: Element | null = null
    let currentLeaveHandler: (() => void) | null = null

    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2,
      y: window.innerHeight / 2,
    })

    const createSpinTimeline = () => {
      spinTl.current?.kill()
      spinTl.current = gsap
        .timeline({ repeat: -1 })
        .to(cursor, { rotation: '+=360', duration: spinDuration, ease: 'none' })
    }

    createSpinTimeline()

    const moveHandler = (event: MouseEvent) => moveCursor(event.clientX, event.clientY)
    window.addEventListener('mousemove', moveHandler)

    const enterHandler = (event: MouseEvent) => {
      const target = (event.target as Element | null)?.closest(targetSelector)
      if (!target || !cursorRef.current || !cornersRef.current) return
      if (activeTarget === target) return

      if (activeTarget && currentLeaveHandler) {
        activeTarget.removeEventListener('mouseleave', currentLeaveHandler)
      }

      activeTarget = target
      const corners = Array.from(cornersRef.current)
      gsap.killTweensOf(cursorRef.current, 'rotation')
      spinTl.current?.pause()
      gsap.set(cursorRef.current, { rotation: 0 })

      const rect = target.getBoundingClientRect()
      const { borderWidth, cornerSize } = constants
      const cursorX = gsap.getProperty(cursorRef.current, 'x') as number
      const cursorY = gsap.getProperty(cursorRef.current, 'y') as number

      const positions = [
        { x: rect.left - borderWidth - cursorX, y: rect.top - borderWidth - cursorY },
        {
          x: rect.right + borderWidth - cornerSize - cursorX,
          y: rect.top - borderWidth - cursorY,
        },
        {
          x: rect.right + borderWidth - cornerSize - cursorX,
          y: rect.bottom + borderWidth - cornerSize - cursorY,
        },
        {
          x: rect.left - borderWidth - cursorX,
          y: rect.bottom + borderWidth - cornerSize - cursorY,
        },
      ]

      corners.forEach((corner, index) => {
        gsap.to(corner, {
          x: positions[index].x,
          y: positions[index].y,
          duration: 0.2,
          ease: 'power2.out',
        })
      })

      const leaveHandler = () => {
        activeTarget = null
        const reset = [
          { x: -constants.cornerSize * 1.5, y: -constants.cornerSize * 1.5 },
          { x: constants.cornerSize * 0.5, y: -constants.cornerSize * 1.5 },
          { x: constants.cornerSize * 0.5, y: constants.cornerSize * 0.5 },
          { x: -constants.cornerSize * 1.5, y: constants.cornerSize * 0.5 },
        ]
        corners.forEach((corner, index) => {
          gsap.to(corner, {
            x: reset[index].x,
            y: reset[index].y,
            duration: 0.3,
            ease: 'power3.out',
          })
        })
        spinTl.current?.restart()
        target.removeEventListener('mouseleave', leaveHandler)
        currentLeaveHandler = null
      }

      currentLeaveHandler = leaveHandler
      target.addEventListener('mouseleave', leaveHandler)
    }

    window.addEventListener('mouseover', enterHandler)

    return () => {
      window.removeEventListener('mousemove', moveHandler)
      window.removeEventListener('mouseover', enterHandler)
      spinTl.current?.kill()
      document.body.style.cursor = originalCursor
    }
  }, [constants, hideDefaultCursor, isMobile, moveCursor, spinDuration, targetSelector])

  if (isMobile || typeof document === 'undefined') return null

  return createPortal(
    <div
      ref={cursorRef}
      className="pointer-events-none fixed top-0 left-0 z-[2147483647] h-0 w-0"
      style={{ willChange: 'transform' }}
    >
      <div
        ref={dotRef}
        className="absolute top-1/2 left-1/2 h-1 w-1 -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{ backgroundColor: cursorColor }}
      />
      <div
        className="target-cursor-corner absolute top-1/2 left-1/2 h-3 w-3 -translate-x-[150%] -translate-y-[150%] border-[3px] border-r-0 border-b-0"
        style={{ borderColor: cursorColor }}
      />
      <div
        className="target-cursor-corner absolute top-1/2 left-1/2 h-3 w-3 translate-x-1/2 -translate-y-[150%] border-[3px] border-b-0 border-l-0"
        style={{ borderColor: cursorColor }}
      />
      <div
        className="target-cursor-corner absolute top-1/2 left-1/2 h-3 w-3 translate-x-1/2 translate-y-1/2 border-[3px] border-t-0 border-l-0"
        style={{ borderColor: cursorColor }}
      />
      <div
        className="target-cursor-corner absolute top-1/2 left-1/2 h-3 w-3 -translate-x-[150%] translate-y-1/2 border-[3px] border-t-0 border-r-0"
        style={{ borderColor: cursorColor }}
      />
    </div>,
    document.body,
  )
}
