import PageBar from '@/components/modules/page-bar'
import HeroGrid from '@/components/modules/hero-grid'
import Introduction from '@/components/modules/introduction'
import ProjectCarousel from '@/components/modules/project-carousel'
import Contact from '@/components/modules/contact'

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
