import { motion } from 'framer-motion'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const About = ({ id }) => {
  const isVisible = useIntersectionObserver(id)

  const skills = [
    { name: 'React.js', level: 30, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', level: 65, color: 'from-yellow-500 to-yellow-600' },
    { name: 'HTML/CSS', level: 90, color: 'from-orange-500 to-orange-600' },
    { name: 'Tailwind CSS', level: 85, color: 'from-cyan-500 to-cyan-600' },
    { name: 'Git', level: 60, color: 'from-red-500 to-red-600' },
  ]

  const technologies = [
    'React.js', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS',
     'Git', 'GitHub',
    'VS Code', 'Figma', 'Responsive Design'
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const skillBarVariants = {
    hidden: { width: 0 },
    visible: (level) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  }

  const techVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        delay: i * 0.05
      }
    })
  }

  const cardVariants = {
    hover: {
      y: -5,
      scale: 1.03,
      boxShadow: "0 12px 25px rgba(37, 99, 235, 0.2)",
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
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
            About Me
          </h2>
          <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
            Passionate frontend developer with a keen eye for design and user experience
          </p>
        </motion.div>

        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
        >
          {/* Left Column - Personal Info */}
          <motion.div variants={itemVariants}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#121212] mb-4">Who I Am</h3>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                As a frontend developer, I focus on building intuitive, visually appealing, and high-performance web interfaces. My expertise lies in transforming ideas and designs into seamless user experiences using the latest web technologies.
              </p>
              <p className="text-[#6B7280] leading-relaxed text-lg">
                I thrive on solving real-world problems through code, and I enjoy collaborating with teams to deliver pixel-perfect, responsive, and accessible applications. Staying updated with modern frameworks and best practices is at the core of my approach to frontend development.
              </p>
              
              {/* Personal Details */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {[
                  { label: 'Experience', value: '4 months', color: 'blue' },
                  { label: 'Projects', value: '12 project completed', color: 'purple' },
                  { label: 'Technologies', value: '4 Mastered', color: 'pink' },
                  { label: 'Passion', value: '100% Dedicated', color: 'green' }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="bg-white p-4 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg"
                    variants={cardVariants}
                    whileHover="hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.3 + index * 0.1 }}
                  >
                    <h4 className={`text-${item.color}-600 font-semibold mb-2`}>{item.label}</h4>
                    <p className="text-[#121212]">{item.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-[#121212] mb-6">Technical Skills</h3>
            
            {/* Skill Bars */}
            <div className="space-y-4 mb-8">
              {skills.map((skill, index) => (
                <motion.div 
                  key={skill.name} 
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isVisible ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-[#6B7280] font-medium">{skill.name}</span>
                    <span className="text-[#2563EB] font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                    <motion.div 
                      className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                      custom={skill.level}
                      variants={skillBarVariants}
                      initial="hidden"
                      animate={isVisible ? "visible" : "hidden"}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Technologies Grid */}
            <div>
              <h4 className="text-lg font-semibold text-[#121212] mb-4">Technologies & Tools</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <motion.span 
                    key={tech}
                    className="px-3 py-1 bg-white text-[#6B7280] rounded-full text-sm border border-gray-200 hover:border-[#2563EB] hover:text-[#2563EB] transition-all duration-300 cursor-pointer shadow-sm"
                    custom={index}
                    variants={techVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                      boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)"
                    }}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Additional Info */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.div 
            className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg"
            whileHover={{
              y: -5,
              scale: 1.03,
              boxShadow: "0 12px 25px rgba(37, 99, 235, 0.2)"
            }}
          >
            <h3 className="text-2xl font-semibold text-[#121212] mb-4">What Drives Me</h3>
            <p className="text-[#6B7280] text-lg max-w-4xl mx-auto leading-relaxed">
              I believe in the power of clean, maintainable code and user-centered design. Every project I work on 
              is an opportunity to learn something new and push the boundaries of what's possible on the web. 
              I'm always excited to collaborate with teams that share my passion for excellence and innovation.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
