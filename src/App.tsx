import { Navbar } from './components/Navbar'
import { Hero } from './components/Hero'
import { TrustBar } from './components/TrustBar'
import { Includes } from './components/Includes'
import { Services } from './components/Services'
import { HowWeWork } from './components/HowWeWork'
import { Packages } from './components/Packages'
import { Examples } from './components/Examples'
import { Testimonials } from './components/Testimonials'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

function App() {
  return (
    <div className="bg-background text-on-background font-body-md selection:bg-primary/20 selection:text-primary min-h-screen">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <TrustBar />
        <Includes />
        <Services />
        <HowWeWork />
        <Packages />
        <Examples />
        <Testimonials />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}

export default App
