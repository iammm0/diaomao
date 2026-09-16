import GradientText from '@/components/react-bits/GradientText'
import { site } from '@/data/site'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-line py-10">
      <GradientText
        className="font-serif text-lg"
        colors={['#4a5d4e', '#c4a574', '#4a5d4e']}
        animationSpeed={6}
      >
        {site.bio}
      </GradientText>
      <p className="mt-2 text-sm text-muted">
        © {new Date().getFullYear()} {site.name}
      </p>
    </footer>
  )
}
