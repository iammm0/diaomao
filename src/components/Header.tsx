import Magnet from '@/components/react-bits/Magnet'
import StarBorder from '@/components/react-bits/StarBorder'
import { site } from '@/data/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-line/80 bg-paper/70 backdrop-blur-md">
      <div className="flex w-full items-center justify-between gap-4 px-6 py-4 sm:px-8 lg:px-12 xl:px-16">
        <a href="#top" className="cursor-target shrink-0 font-serif text-lg tracking-tight text-ink">
          {site.name}
        </a>
        <nav className="hidden items-center gap-5 text-sm text-muted md:flex lg:gap-7">
          {site.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="cursor-target transition-colors hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <Magnet padding={40} magnetStrength={3}>
          <StarBorder
            as="a"
            href={site.github}
            target="_blank"
            rel="noreferrer"
            className="cursor-target"
            color="#4a5d4e"
            speed="4s"
            thickness={1}
            backgroundColor="#f7f4ef"
            textColor="#4a5d4e"
            borderColor="#d7e0d4"
          >
            GitHub
          </StarBorder>
        </Magnet>
      </div>
    </header>
  )
}
