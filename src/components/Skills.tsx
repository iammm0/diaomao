import FadeContent from '@/components/react-bits/FadeContent'
import { site } from '@/data/site'

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

      <div className="grid gap-5 sm:grid-cols-2">
        {site.skills.map((group, index) => (
          <FadeContent key={group.title} duration={700} delay={index * 70} threshold={0.12}>
            <div className="h-full rounded-2xl border border-line bg-white/50 px-5 py-6 sm:px-6">
              <h3 className="font-serif text-xl text-ink">{group.title}</h3>
              <ul className="mt-4 space-y-3">
                {group.items.map((item) => (
                  <li
                    key={item.slice(0, 28)}
                    className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-sage/70"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
