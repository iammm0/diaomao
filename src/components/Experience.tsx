import FadeContent from '@/components/react-bits/FadeContent'
import { site } from '@/data/site'

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-24 py-12 sm:py-16 lg:py-20"
      aria-labelledby="experience-heading"
    >
      <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="experience-heading"
          className="font-serif text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          工作经历
        </h2>
        <p className="text-sm text-muted sm:text-base">全职与实习，按时间倒序</p>
      </div>

      <ol className="space-y-8 lg:space-y-10">
        {site.experience.map((job, index) => (
          <FadeContent key={job.company + job.period} duration={700} delay={index * 60} threshold={0.08}>
            <li className="grid gap-4 border-t border-line pt-8 lg:grid-cols-[minmax(12rem,0.28fr)_minmax(0,0.72fr)] lg:gap-10">
              <div>
                <p className="text-sm text-sage">{job.period}</p>
                <h3 className="mt-2 font-serif text-xl text-ink lg:text-2xl">{job.role}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {job.company}
                  <span className="text-line"> · </span>
                  {job.department}
                </p>
              </div>

              <article>
                <p className="font-medium text-ink">{job.project}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted lg:text-[0.95rem]">
                  {job.summary}
                </p>
                <ul className="mt-4 space-y-2.5">
                  {job.highlights.map((item) => (
                    <li
                      key={item.slice(0, 24)}
                      className="relative pl-4 text-sm leading-relaxed text-muted before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-sage/70 lg:text-[0.95rem]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-sage-soft px-2.5 py-1 text-xs tracking-wide text-sage"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </li>
          </FadeContent>
        ))}
      </ol>
    </section>
  )
}
