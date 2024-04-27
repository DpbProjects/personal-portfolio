import PageBar from '@/components/page-bar'
import HeroGrid from '@/components/hero-grid'
import Introduction from '@/components/introduction'
import ProjectCarousel from '@/components/project-carousel'
import Contact from '@/components/contact'

export default function Home() {
  return (
    <main className="bg-custom-white min-h-screen">
      <PageBar />
      <HeroGrid />
      <Introduction />
      <ProjectCarousel />
      <Contact />
      <PageBar />
    </main>
  )
}
