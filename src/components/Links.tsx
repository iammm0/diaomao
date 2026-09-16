import FadeContent from '@/components/react-bits/FadeContent'
import Magnet from '@/components/react-bits/Magnet'
import { site } from '@/data/site'

export default function Links() {
  return (
    <section className="py-8" aria-labelledby="links-heading">
      <h2
        id="links-heading"
        className="mb-6 font-serif text-2xl tracking-tight text-ink"
      >
        Elsewhere
      </h2>
      <FadeContent duration={700} threshold={0.2}>
        <ul className="divide-y divide-line border-y border-line">
          {site.links.map((link) => (
            <li key={link.href}>
              <Magnet padding={80} magnetStrength={4} wrapperClassName="block w-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-target flex w-full items-baseline justify-between gap-4 py-4 text-ink transition-colors hover:text-sage"
                >
                  <span>{link.label}</span>
                  <span className="text-sm text-muted">{link.hint}</span>
                </a>
              </Magnet>
            </li>
          ))}
        </ul>
      </FadeContent>
    </section>
  )
}
