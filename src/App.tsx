import { Contact } from './components/Contact'
import { About } from './components/About'
import { Hero } from './components/Hero'
import { Navbar } from './components/Navbar'
import { Portfolio } from './components/Portfolio'
import { personDetails, portfolioVideos } from './data/siteData'

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      {/* Subtle page background texture */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(217,70,239,0.10),transparent_40%),radial-gradient(circle_at_bottom,rgba(34,211,238,0.08),transparent_45%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(255,255,255,0.05),transparent_30%,transparent_70%,rgba(255,255,255,0.03))]" />
      </div>

      <Navbar />
      <main>
        <Hero person={personDetails} />
        <About person={personDetails} />
        <Portfolio videos={portfolioVideos} />
        <Contact person={personDetails} />
      </main>
    </div>
  )
}
