import FadeContent from '@/components/react-bits/FadeContent'
import GlareHover from '@/components/react-bits/GlareHover'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import TiltCard from '@/components/react-bits/TiltCard'
import { site } from '@/data/site'

export default function Projects() {
  return (
    <section className="py-12 sm:py-16 lg:py-20" aria-labelledby="projects-heading">
      <div className="mb-8 flex flex-col gap-2 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
        <h2
          id="projects-heading"
          className="font-serif text-2xl tracking-tight text-ink sm:text-3xl lg:text-4xl"
        >
          Selected work
        </h2>
        <p className="text-sm text-muted sm:text-base">
          Agent systems, security tooling, and execution infrastructure.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {site.projects.map((project, index) => (
          <FadeContent key={project.name} duration={700} delay={index * 80} threshold={0.12}>
            <TiltCard>
              <GlareHover
                glareColor="#ffffff"
                glareOpacity={0.55}
                glareSize={280}
                background="transparent"
                borderColor="transparent"
                className="h-full"
              >
                <SpotlightCard
                  className="cursor-target h-full"
                  spotlightColor="rgba(74, 93, 78, 0.22)"
                >
                  <article className="relative flex h-full flex-col">
                    <div className="mb-4 flex items-center gap-3">
                      <img
                        src={project.logo}
                        alt={`${project.name} logo`}
                        width={44}
                        height={44}
                        className="size-11 shrink-0 rounded-xl border border-line bg-white object-contain p-1.5 shadow-sm"
                      />
                      <h3 className="font-serif text-xl text-ink lg:text-2xl">{project.name}</h3>
                    </div>
                    <p className="mt-0 flex-1 text-sm leading-relaxed text-muted lg:text-[0.95rem]">
                      {project.description}
                    </p>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <li key={tag} className="text-xs text-sage">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 flex gap-4 text-sm">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target text-ink underline decoration-line underline-offset-4 transition-colors hover:text-sage hover:decoration-sage"
                      >
                        GitHub
                      </a>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noreferrer"
                        className="cursor-target text-ink underline decoration-line underline-offset-4 transition-colors hover:text-sage hover:decoration-sage"
                      >
                        Site
                      </a>
                    </div>
                  </article>
                </SpotlightCard>
              </GlareHover>
            </TiltCard>
          </FadeContent>
        ))}
      </div>
    </section>
  )
}
