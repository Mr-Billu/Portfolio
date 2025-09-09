import { useState } from 'react'

const Navigation = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const buttonVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.95
    }
  }

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' }
  ]

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.06), rgba(255, 255, 255, 0.02))",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(16px) saturate(120%)",
        WebkitBackdropFilter: "blur(16px) saturate(120%)",
        padding: "0.3rem 0.4rem",
        boxShadow: "inset 0 1px 0 rgba(255, 255, 255, 0.05) , 0 1px 20px rgba(0, 0, 0, 0.25)"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#121212]">
              Abdul Mueid
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-[#2563EB] cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#2563EB] border-b-2 border-[#2563EB]'
                      : 'text-[#6B7280] hover:text-[#2563EB]'
                  }`}
                >
                  {item.label}
                </button>
                
              ))}
              <a
                href="https://drive.google.com/file/d/1T78e6TwT3WxxR7Vq0d6usF4qzb48b9Vd/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl  "
              >
                Get Resume
              </a>
            </div>
            
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#6B7280] hover:text-[#121212] p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 rounded-lg mt-2 border border-gray-200 shadow-lg">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#2563EB] bg-blue-50'
                      : 'text-[#6B7280] hover:text-[#2563EB] hover:bg-gray-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation
