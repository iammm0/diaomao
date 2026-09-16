import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

type StarBorderProps<T extends ElementType> = {
  as?: T
  className?: string
  children?: ReactNode
  color?: string
  speed?: string
  thickness?: number
  backgroundColor?: string
  textColor?: string
  borderColor?: string
} & Omit<ComponentPropsWithoutRef<T>, 'as' | 'children' | 'color'>

export default function StarBorder<T extends ElementType = 'button'>({
  as,
  className = '',
  color = '#4a5d4e',
  speed = '6s',
  thickness = 1,
  backgroundColor = '#f7f4ef',
  textColor = '#1c1917',
  borderColor = '#e7e2d9',
  children,
  ...rest
}: StarBorderProps<T>) {
  const Component = as ?? 'button'

  return (
    <Component
      className={`relative inline-block overflow-hidden rounded-[20px] ${className}`}
      style={{ padding: `${thickness}px 0` }}
      {...rest}
    >
      <div
        className="animate-star-movement-bottom absolute right-[-250%] bottom-[-11px] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="animate-star-movement-top absolute top-[-10px] left-[-250%] z-0 h-[50%] w-[300%] rounded-full opacity-70"
        style={{
          background: `radial-gradient(circle, ${color}, transparent 10%)`,
          animationDuration: speed,
        }}
      />
      <div
        className="relative z-1 rounded-[20px] border px-[26px] py-[16px] text-center text-[16px]"
        style={{ background: backgroundColor, color: textColor, borderColor }}
      >
        {children}
      </div>
    </Component>
  )
}
