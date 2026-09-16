import { useRef, type MouseEvent, type ReactNode } from 'react'
import { motion, useMotionValue, useSpring, type SpringOptions } from 'motion/react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  scaleOnHover?: number
  rotateAmplitude?: number
}

const springValues: SpringOptions = {
  damping: 18,
  stiffness: 180,
  mass: 1.1,
}

export default function TiltCard({
  children,
  className = '',
  scaleOnHover = 1.04,
  rotateAmplitude = 10,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(useMotionValue(0), springValues)
  const rotateY = useSpring(useMotionValue(0), springValues)
  const scale = useSpring(1, springValues)

  function handleMouse(event: MouseEvent<HTMLDivElement>) {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const offsetX = event.clientX - rect.left - rect.width / 2
    const offsetY = event.clientY - rect.top - rect.height / 2
    rotateX.set((offsetY / (rect.height / 2)) * -rotateAmplitude)
    rotateY.set((offsetX / (rect.width / 2)) * rotateAmplitude)
  }

  return (
    <div
      ref={ref}
      className={`relative h-full w-full [perspective:800px] ${className}`}
      onMouseMove={handleMouse}
      onMouseEnter={() => scale.set(scaleOnHover)}
      onMouseLeave={() => {
        scale.set(1)
        rotateX.set(0)
        rotateY.set(0)
      }}
    >
      <motion.div
        className="h-full [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, scale }}
      >
        {children}
      </motion.div>
    </div>
  )
}
