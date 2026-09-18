import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import WhatsAppButton from '../components/WhatsAppButton'
import About from '../sections/About'
import Blog from '../sections/Blog'
import CtaSection from '../sections/CtaSection'
import Hero from '../sections/Hero'
import OutcomeStrip from '../sections/OutcomeStrip'
import Process from '../sections/Process'
import Services from '../sections/Services'
import Testimonials from '../sections/Testimonials'
import Work from '../sections/Work'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <OutcomeStrip />
        <Services />
        <About />
        <Work />
        <Process />
        <CtaSection />
        <Testimonials />
        <Blog />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  )
}
