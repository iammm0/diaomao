import FadeContent from '@/components/react-bits/FadeContent'
import Magnet from '@/components/react-bits/Magnet'
import { site } from '@/data/site'

export default function Links() {
  return (
    <section className="py-8 sm:py-12" aria-labelledby="links-heading">
      <h2
        id="links-heading"
        className="mb-6 font-serif text-2xl tracking-tight text-ink sm:text-3xl"
      >
        Elsewhere
      </h2>
      <FadeContent duration={700} threshold={0.2}>
        <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {site.links.map((link) => (
            <li key={link.href}>
              <Magnet padding={60} magnetStrength={4} wrapperClassName="block h-full w-full">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="cursor-target flex h-full flex-col justify-between gap-3 rounded-2xl border border-line bg-white/60 px-5 py-5 text-ink transition-colors hover:border-sage/40 hover:text-sage"
                >
                  <span className="text-base sm:text-lg">{link.label}</span>
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
