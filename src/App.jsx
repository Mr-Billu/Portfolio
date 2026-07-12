import './index.css'
import { useEffect } from 'react'
import Lenis from 'lenis'
import { Navbar } from './components/Navigation'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Marquee } from './components/Marquee'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { ScrollText } from './components/ScrollText'
import { Experience } from './components/Experience'
import { Contact } from './components/Contact'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
    lenis.on('scroll', () => {
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('scroll'))
      }
    })

    return () => lenis.destroy()
  }, [])

  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Marquee />
      <Work />
      <Skills />
      <ScrollText />
      <Experience />
      <Contact />
    </main>
  )
}

export default App