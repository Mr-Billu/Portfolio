import React from "react";
import { motion } from 'framer-motion';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const experiences = [
  {
    company: "AssureMe.in",
    role: "Frontend Developer",
    logo: "https://media.licdn.com/dms/image/v2/D560BAQGmmAM3x75pcw/company-logo_200_200/B56Zaf0aNfG4AI-/0/1746438039865?e=1759363200&v=beta&t=O2llxWfNc4xPGdA3H7H3PfoPE6AJQNvJFO-gE3uAjxk",
    type: "Internship",
    period: "Jul 2025 – Present",
    location: "Remote",
    description:
      "Currently working on designing and developing responsive landing pages — starting with Figma and building them using React.js + Tailwind CSS. Learning reusable components, clean structure, and polishing pages for a real-world product.",
    skills: ["React.js", "Tailwind CSS"],
  },
  {
    company: "Ultimate Outsourcing LTD",
    role: "Frontend Developer",
    logo: "https://media.licdn.com/dms/image/v2/D4D0BAQFxa8O9UeCiQA/company-logo_200_200/B4DZavloxgHsAI-/0/1746702601894/ultimate_outsourcing_services_logo?e=1759363200&v=beta&t=sWAy8c1GjdmVLvqA7ulZWv7MafmNJRuqcDH9DjcVVpI",
    type: "Internship",
    period: "Apr 2025 – May 2025",
    location: "On-site",
    description:
      "Worked on social ad landing pages and an e-commerce perfume product card. Strengthened my fundamentals in HTML, CSS, and JavaScript, while getting hands-on with real client-facing projects.",
    skills: ["HTML", "CSS Grid", "JavaScript"],
  },
];

export default function ExperienceSection({id}) {
  const isVisible = useIntersectionObserver(id);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

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
  };

 return ( 
  <section id={id} className="py-20 bg-white relative">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-[#121212] mb-6">
          💼  Experience
        </h2>
        <p className="text-xl text-[#6B7280] max-w-3xl mx-auto">
          Professional journey and growth in frontend development
        </p>
      </motion.div>

      {/* 2 column grid */}
      <motion.div 
        className="grid md:grid-cols-2 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
      >
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            className="bg-white p-6 text-left rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg"
            style={{
              scrollSnapAlign: 'start',
              boxShadow: "inset 0 0 20px rgba(3, 3, 3, 0.2)"
            }}
            whileHover={{
              boxShadow: "inset 0 0 150px rgba(3, 3, 3, 0.2)"
            }}
            variants={itemVariants}
            
          >
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-16 h-16 object-contain rounded-lg"
              />
              <div>
                <h3 className="text-xl font-semibold text-[#121212]">
                  {exp.company}
                </h3>
                <p className="text-[#2563EB] font-medium">{exp.role}</p>
                <p className="text-sm text-[#6B7280]">
                  {exp.type} · {exp.period} · {exp.location}
                </p>
              </div>
            </div>

            <p className="text-[#6B7280] leading-relaxed mb-4">
              {exp.description}
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, idx) => (
                <motion.span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 text-[#6B7280] rounded-md border border-gray-200"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + idx * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
 );
}
