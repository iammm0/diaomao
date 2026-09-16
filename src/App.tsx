import ClickSpark from '@/components/react-bits/ClickSpark'
import LightRays from '@/components/react-bits/LightRays'
import TargetCursor from '@/components/react-bits/TargetCursor'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Links from '@/components/Links'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'

export default function App() {
  return (
    <ClickSpark
      sparkColor="#4a5d4e"
      sparkSize={12}
      sparkRadius={28}
      sparkCount={14}
      duration={520}
      extraScale={1.2}
    >
      <TargetCursor cursorColor="#4a5d4e" />
      <div className="pointer-events-none fixed inset-0 -z-10 mix-blend-multiply opacity-90">
        <LightRays
          raysOrigin="top-center"
          raysColor="#4a5d4e"
          raysSpeed={1.2}
          lightSpread={0.55}
          rayLength={2.2}
          followMouse
          mouseInfluence={0.28}
          noiseAmount={0.12}
          distortion={0.12}
          lightMode
          pulsating
        />
      </div>
      <div className="relative z-10 flex min-h-svh flex-col">
        <Header />
        <div className="mx-auto flex w-full max-w-[90rem] flex-1 flex-col px-6 sm:px-8 lg:px-12 xl:px-16">
          <main className="w-full">
            <Hero />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <Links />
          </main>
          <Footer />
        </div>
      </div>
    </ClickSpark>
  )
}
