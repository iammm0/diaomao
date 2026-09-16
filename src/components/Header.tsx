import Magnet from '@/components/react-bits/Magnet'
import StarBorder from '@/components/react-bits/StarBorder'
import { site } from '@/data/site'

export default function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-line/80 bg-paper/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-0 py-4">
        <a href="#top" className="cursor-target font-serif text-lg tracking-tight text-ink">
          {site.name}
        </a>
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
