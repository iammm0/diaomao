import FadeContent from '@/components/react-bits/FadeContent'
import { site } from '@/data/site'

export default function Education() {
  const { education } = site

  return (
    <section
      id="education"
      className="scroll-mt-24 py-12 sm:py-16"
      aria-labelledby="education-heading"
    >
      <h2
        id="education-heading"
        className="mb-6 font-serif text-2xl tracking-tight text-ink sm:mb-8 sm:text-3xl"
      >
        教育背景
      </h2>
      <FadeContent duration={700} threshold={0.2}>
        <div className="flex flex-col gap-2 border-y border-line py-6 sm:flex-row sm:items-end sm:justify-between sm:gap-8">
          <div>
            <h3 className="font-serif text-xl text-ink sm:text-2xl">{education.school}</h3>
            <p className="mt-2 text-base text-muted">
              {education.major}
              <span className="text-line"> · </span>
              {education.degree}
            </p>
          </div>
          <p className="text-sm text-sage sm:text-base">{education.period}</p>
        </div>
      </FadeContent>
    </section>
  )
}
