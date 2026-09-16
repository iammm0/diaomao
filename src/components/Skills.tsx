import AnimatedList from '@/components/react-bits/AnimatedList'
import LogoLoop from '@/components/react-bits/LogoLoop'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import { site } from '@/data/site'

const stackLogos = site.stack.map((tech) => ({
  node: (
    <span className="rounded-full bg-sage-soft px-3 py-1 text-xs font-medium tracking-wide text-sage whitespace-nowrap">
      {tech}
    </span>
  ),
  title: tech,
  ariaLabel: tech,
}))

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
      aria-labelledby="skills-heading"
    >
      <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="skills-heading"
          className="font-serif text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          职业技能
        </h2>
        <p className="text-sm text-muted sm:text-base">Agent · 全栈 · 工程化交付</p>
      </div>

      <div className="mb-8 overflow-hidden sm:mb-10">
        <LogoLoop
          logos={stackLogos}
          speed={55}
          direction="left"
          logoHeight={28}
          gap={16}
          pauseOnHover
          fadeOut
          fadeOutColor="#f7f4ef"
          ariaLabel="技术栈"
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {site.skills.map((group, index) => (
          <SpotlightCard
            key={group.title}
            className="cursor-target h-full"
            spotlightColor="rgba(74, 93, 78, 0.18)"
          >
            <div className="relative h-full px-1 py-1 sm:px-2 sm:py-2">
              <h3 className="font-serif text-xl text-ink">{group.title}</h3>
              <AnimatedList
                items={group.items}
                delay={index * 0.05}
                className="mt-4 space-y-3"
                itemClassName="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-sage/70"
              />
            </div>
          </SpotlightCard>
        ))}
      </div>
    </section>
  )
}
