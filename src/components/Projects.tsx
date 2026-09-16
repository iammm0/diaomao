import FadeContent from '@/components/react-bits/FadeContent'
import GlareHover from '@/components/react-bits/GlareHover'
import SpotlightCard from '@/components/react-bits/SpotlightCard'
import TiltCard from '@/components/react-bits/TiltCard'
import { site } from '@/data/site'

export default function Projects() {
  return (
    <section className="py-16" aria-labelledby="projects-heading">
      <h2
        id="projects-heading"
        className="mb-8 font-serif text-2xl tracking-tight text-ink"
      >
        Selected work
      </h2>
      <div className="grid gap-5 sm:grid-cols-2">
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
                    <h3 className="font-serif text-xl text-ink">{project.name}</h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">
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
                      {'url' in project && project.url ? (
                        <a
                          href={project.url}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-target text-ink underline decoration-line underline-offset-4 transition-colors hover:text-sage hover:decoration-sage"
                        >
                          Site
                        </a>
                      ) : null}
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
