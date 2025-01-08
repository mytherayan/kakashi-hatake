import { Header } from '../components/header'
import { Hero } from '../components/hero'
import { Skills } from '../components/skills'
import { Missions } from '../components/missions'
// import { Relationships } from '../components/relationships'
import { TimelineSection } from '../components/timeline-section'
import { RelationshipsSection} from '../components/relationships-section'
import { Books } from '../components/books'
import { Footer } from '../components/footer'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Skills />
        <Missions />
        <TimelineSection />
        <RelationshipsSection/>
        <Books />
      </main>
      <Footer />
    </div>
  )
}

