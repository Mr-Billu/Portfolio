import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const Hero = ({ id }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: "0 20px 40px rgba(37, 99, 235, 0.15)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  const socialVariants = {
    hover: {
      scale: 1.1,
      y: -3,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    }
  }

  const overlayVariants = {
    initial: { 
      scale: 1,
      borderRadius: "0%"
    },
    animate: { 
      scale: 0,
      borderRadius: "50%",
      y: "-50vh",
      transition: {
        duration: 2,
        ease: "easeInOut",
        delay: 1
      }
    }
  }

  return (
    <section id={id} className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden">
      {/* Full Screen Overlay */}
      <motion.div
        className="absolute inset-0 w-full h-full z-[100] bg-black/80 backdrop-blur-2xl origin-top pointer-events-none"
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        style={{ transformOrigin: "center top" }}
      >
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-black text-white tracking-widest font-['Excon',sans-serif]">
              PORTFOLIO
            </h1>
            <div className="w-20 sm:w-28 md:w-32 lg:w-40 h-2 md:h-3 bg-[#2563EB] mx-auto mt-6 rounded-full"></div>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <motion.div 
          className="transition-all duration-1000"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Greeting */}
          <motion.p 
            className="text-[#2563EB] text-lg md:text-xl font-medium mb-4"
            variants={itemVariants}
          >
            👋 Hello, I'm
          </motion.p>
          
          {/* Name */}
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#121212]"
            variants={itemVariants}
          >
            Abdul Mueid
          </motion.h1>
          
          {/* Title */}
          <motion.h2 
            className="text-2xl md:text-3xl lg:text-4xl text-[#6B7280] mb-8 font-light"
            variants={itemVariants}
          >
            Frontend Developer & UI/UX Enthusiast
          </motion.h2>
          
          {/* Description */}
          <motion.p 
            className="text-lg md:text-xl text-[#6B7280] max-w-3xl mx-auto mb-12 leading-relaxed"
            variants={itemVariants}
          >
            Crafting beautiful, responsive, and user-centric web experiences with modern technologies. 
            Passionate about clean code, performance, and creating digital solutions that make a difference.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            variants={itemVariants}
          >
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              View My Work
            </motion.button>
            <motion.a
              href="https://wa.me/923299655094?text=Hello%20I%20saw%20your%20portfolio%20great%20connecting%20with%20you👋"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#121212] text-[#121212] font-semibold rounded-xl hover:bg-[#121212] hover:text-white transition-all duration-300 inline-block text-center"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Chat on WhatsApp
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Social Links */}
        <motion.div 
          className="flex justify-center space-x-5 relative bottom-10 transition-all duration-1000 delay-500"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="https://github.com/Mr-Billu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="https://www.linkedin.com/in/abdul-mueid-73288a341/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </motion.a>
          
          <motion.a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmueid051@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6B7280] hover:text-[#2563EB] transition-colors duration-300"
            variants={socialVariants}
            whileHover="hover"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </motion.a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-5 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <motion.div 
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg className="w-6 h-6 text-[#6B7280]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
