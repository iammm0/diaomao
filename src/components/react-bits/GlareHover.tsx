import { useRef, type CSSProperties, type ReactNode } from 'react'

interface GlareHoverProps {
  width?: string
  height?: string
  background?: string
  borderRadius?: string
  borderColor?: string
  children?: ReactNode
  glareColor?: string
  glareOpacity?: number
  glareAngle?: number
  glareSize?: number
  transitionDuration?: number
  playOnce?: boolean
  className?: string
  style?: CSSProperties
}

export default function GlareHover({
  width = '100%',
  height = '100%',
  background = 'transparent',
  borderRadius = '16px',
  borderColor = 'transparent',
  children,
  glareColor = '#ffffff',
  glareOpacity = 0.45,
  glareAngle = -45,
  glareSize = 250,
  transitionDuration = 650,
  playOnce = false,
  className = '',
  style = {},
}: GlareHoverProps) {
  const hex = glareColor.replace('#', '')
  let rgba = glareColor
  if (/^[\dA-Fa-f]{6}$/.test(hex)) {
    rgba = `rgba(${parseInt(hex.slice(0, 2), 16)}, ${parseInt(hex.slice(2, 4), 16)}, ${parseInt(hex.slice(4, 6), 16)}, ${glareOpacity})`
  } else if (/^[\dA-Fa-f]{3}$/.test(hex)) {
    rgba = `rgba(${parseInt(hex[0] + hex[0], 16)}, ${parseInt(hex[1] + hex[1], 16)}, ${parseInt(hex[2] + hex[2], 16)}, ${glareOpacity})`
  }

  const overlayRef = useRef<HTMLDivElement>(null)

  const animateIn = () => {
    const el = overlayRef.current
    if (!el) return
    el.style.transition = 'none'
    el.style.backgroundPosition = '-100% -100%, 0 0'
    el.style.transition = `${transitionDuration}ms ease`
    el.style.backgroundPosition = '100% 100%, 0 0'
  }

  const animateOut = () => {
    const el = overlayRef.current
    if (!el) return
    if (playOnce) {
      el.style.transition = 'none'
      el.style.backgroundPosition = '-100% -100%, 0 0'
      return
    }
    el.style.transition = `${transitionDuration}ms ease`
    el.style.backgroundPosition = '-100% -100%, 0 0'
  }

  return (
    <div
      className={`relative grid cursor-pointer place-items-stretch overflow-hidden ${className}`}
      style={{
        width,
        height,
        background,
        borderRadius,
        borderColor,
        ...style,
      }}
      onMouseEnter={animateIn}
      onMouseLeave={animateOut}
    >
      <div
        ref={overlayRef}
        className="pointer-events-none absolute inset-0 z-10"
        style={{
          background: `linear-gradient(${glareAngle}deg, hsla(0,0%,0%,0) 60%, ${rgba} 70%, hsla(0,0%,0%,0) 100%)`,
          backgroundSize: `${glareSize}% ${glareSize}%, 100% 100%`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: '-100% -100%, 0 0',
        }}
      />
      {children}
    </div>
  )
}
