import BlurText from '@/components/react-bits/BlurText'
import GradientText from '@/components/react-bits/GradientText'
import Magnet from '@/components/react-bits/Magnet'
import RotatingText from '@/components/react-bits/RotatingText'
import { site } from '@/data/site'

export default function Hero() {
  return (
    <section
      id="top"
      className="grid gap-10 pt-14 pb-10 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-end lg:gap-16 lg:pt-24 lg:pb-14"
    >
      <div>
        <Magnet padding={60} magnetStrength={4}>
          <img
            src={site.avatar}
            alt={`${site.name} avatar`}
            width={88}
            height={88}
            className="cursor-target mb-8 size-[88px] rounded-full border border-line object-cover shadow-[0_12px_40px_rgba(74,93,78,0.18)]"
          />
        </Magnet>
        <div className="mb-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <GradientText
            className="font-serif text-2xl sm:text-3xl"
            colors={['#4a5d4e', '#8a9a7b', '#c4a574', '#4a5d4e']}
            animationSpeed={5}
          >
            {site.name}
          </GradientText>
          <span className="text-sm text-muted">{site.nameEn}</span>
        </div>
        <p className="mb-5 text-sm tracking-wide text-sage sm:text-base">{site.title}</p>
        <h1 className="max-w-4xl font-serif text-4xl leading-tight tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl">
          <BlurText
            text={site.headline}
            delay={70}
            animateBy="words"
            direction="top"
            stepDuration={0.32}
          />
        </h1>
      </div>

      <div className="lg:pb-2">
        <p className="flex flex-col items-start gap-2 text-base leading-relaxed text-muted sm:flex-row sm:items-center lg:text-lg">
          <span>专注</span>
          <RotatingText
            texts={[...site.roles]}
            mainClassName="min-h-[1.8em] min-w-[11rem] rounded-full bg-sage-soft px-3 py-0.5 font-medium text-sage"
            rotationInterval={2400}
            staggerDuration={0.03}
          />
        </p>
        <p className="mt-4 max-w-xl text-base leading-relaxed text-muted lg:text-lg">
          {site.exploring}
        </p>
        <ul className="mt-6 space-y-2 text-sm text-muted sm:text-base">
          {site.contacts.map((contact) => (
            <li key={contact.label} className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="w-12 shrink-0 text-sage">{contact.label}</span>
              <a
                href={contact.href}
                className="cursor-target text-ink underline decoration-line underline-offset-4 transition-colors hover:text-sage hover:decoration-sage"
                {...(contact.href.startsWith('http')
                  ? { target: '_blank', rel: 'noreferrer' }
                  : {})}
              >
                {contact.value}
              </a>
            </li>
          ))}
        </ul>
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
      </div>
    </section>
  )
}
