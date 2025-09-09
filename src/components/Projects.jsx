import { useState } from 'react'
import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const Projects = ({ id }) => {
  const isVisible = useIntersectionObserver(id)
  

  // Sample projects based on your GitHub profile
  const projects = [
    {
      id: 1,
      title: "E-Commerce product Page",
      description: "A visually appealing product page for an e-commerce site, built with HTML, CSS, and JavaScript.add    a modern responsive layout.",
      technologies: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mr-Billu/Ecommerce-product-page",
      
    },
    {
      id: 2,
      title: "Job Post Filtering App",
      description: "A job post filtering application built with React.js, using only CSS and JavaScript for styling and interactivity. Allows users to filter job listings based on various criteria for an improved job search experience.",
      technologies: ["React", "JavaScript", "CSS"],
      category: "frontend",
      github: "https://github.com/Mr-Billu/post-filtering-app",
    },
    {
      id: 3,
      title: "Weather App",
      description: "A dynamic weather app delivering real-time forecasts with a sleek interface. Instantly access up-to-date weather data from a live API, all crafted with modern HTML, CSS, and JavaScript.",
      technologies: ["HTML", "CSS", "JavaScript"],
      category: "frontend",
      github: "https://github.com/Mr-Billu/weatherApp-page",
    },
    {
      id: 4,
      title: "Registration-form ",
      description: "Developed a responsive registration form using HTML, CSS, and JavaScript. Implemented functionality and error handling using JavaScript and the DOM.",
      technologies: ["HTML", "CSS", "JavaScript"],  
      category: "frontend",
      github: "https://github.com/Mr-Billu/Registration-form",
    },
    {
      id: 5,
      title: "Perfume Product Card",
      description: "Designed and developed a visually appealing, fully responsive perfume product card using HTML and CSS Flexbox. The card showcases product details with a modern layout, ensuring optimal display across all devices.",
      technologies: ["HTML", "CSS", "Flexbox"],
      github: "https://github.com/Mr-Billu/Perfume-product-card",
    },
    
    {
      id: 6,
      title: "Social Ads Page",
      description: "Created a responsive Social Ads Page using HTML and CSS Grid. The layout adapts well to different devices and organizes advertisements in a clean, modern format. This project highlights practical use of CSS Grid and responsive design.",
      technologies: ["HTML", "CSS", "CSS Grid"],
      github: "https://github.com/Mr-Billu/Social-ads-page",
    },
    
    
  ]




  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const buttonVariants = {
    hover: {
      scale: 1.02,
      y: -2,
      boxShadow: "0 10px 30px rgba(37, 99, 235, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    tap: {
      scale: 0.98
    }
  }

  return (
    <section id={id} className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#121212]">
            Projects
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            A collection of projects that showcase my skills and passion for web development
          </p>
        </motion.div>

        

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg group"
              style={{
                scrollSnapAlign: 'start',
                boxShadow: "inset 0 0 30px rgba(3, 3, 3, 0.2)"
              }}
              variants={cardVariants}
              whileHover={{
                y: -5,
                scale: 1.03,
                boxShadow: "inset 0 0 200px rgba(3, 3, 3, 0.2)"
              }}
            >
            

            
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#121212] mb-3 group-hover:text-[#2563EB] transition-colors duration-300">{project.title}</h3>
                <p className="text-[#6B7280] text-sm leading-relaxed mb-4">{project.description}</p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-[#6B7280] text-xs rounded-md border border-gray-200 group-hover:border-[#2563EB] transition-colors duration-300"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-100 hover:bg-gray-200 text-[#6B7280] text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    Code
                  </motion.a>
                  {/* <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                    variants={buttonVariants}
                    whileHover="hover"
                    whileTap="tap"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live
                  </motion.a> */}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/Mr-Billu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#2563EB] hover:bg-blue-700 text-white font-semibold rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl"
            whileHover={{
              scale: 1.02,
              y: -2,
              boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)"
            }}
            whileTap={{ scale: 0.98 }}
          >
            View More on GitHub
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
