import BlurText from '@/components/react-bits/BlurText'
import GradientText from '@/components/react-bits/GradientText'
import Magnet from '@/components/react-bits/Magnet'
import RotatingText from '@/components/react-bits/RotatingText'
import { site } from '@/data/site'

export default function Hero() {
  return (
    <section id="top" className="pt-16 pb-8 sm:pt-24">
      <Magnet padding={60} magnetStrength={4}>
        <img
          src={site.avatar}
          alt={`${site.name} avatar`}
          width={88}
          height={88}
          className="cursor-target mb-8 size-[88px] rounded-full border border-line object-cover shadow-[0_12px_40px_rgba(74,93,78,0.18)]"
        />
      </Magnet>
      <GradientText
        className="mb-4 font-serif text-lg"
        colors={['#4a5d4e', '#8a9a7b', '#c4a574', '#4a5d4e']}
        animationSpeed={5}
      >
        {site.name}
      </GradientText>
      <h1 className="max-w-xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl">
        <BlurText
          text={site.headline}
          delay={70}
          animateBy="words"
          direction="top"
          stepDuration={0.32}
        />
      </h1>
      <p className="mt-6 flex flex-col items-start gap-2 text-base leading-relaxed text-muted sm:flex-row sm:items-center">
        <span>Building</span>
        <RotatingText
          texts={[...site.roles]}
          mainClassName="min-h-[1.8em] min-w-[13.5rem] rounded-full bg-sage-soft px-3 py-0.5 font-medium text-sage"
          rotationInterval={2400}
          staggerDuration={0.03}
        />
      </p>
      <p className="mt-3 max-w-lg text-base leading-relaxed text-muted">{site.exploring}</p>
      <ul className="mt-8 flex flex-wrap gap-2">
        {site.stack.map((item) => (
          <li
            key={item}
            className="cursor-target rounded-full bg-sage-soft px-3 py-1 text-xs tracking-wide text-sage"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  )
}
