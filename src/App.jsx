import { useState, useEffect } from 'react'
import './App.css'

// Components
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Navigation from './components/Navigation'
import BackgroundBlobs from './components/BackgroundBlobs'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'experience', 'contact']
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i])
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      <BackgroundBlobs />
      <Navigation activeSection={activeSection} />
      
      <main>
        <Hero id="home" />
        <About id="about" />
        <Projects id="projects" />
        <Experience id="experience" />
        
        
      </main>
      
      <Footer />
    </div>
  )
}

export default App
