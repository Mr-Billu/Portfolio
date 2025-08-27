import React from "react";

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
 return ( <section id={id} className="py-16">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-3xl font-bold text-gray-300 mb-12">
      💼 My Experience
    </h2>

    {/* 2 column grid */}
    <div className="grid md:grid-cols-2 gap-12">
      {experiences.map((exp, i) => (
        <div
          key={i}
          className="bg-gray-800 rounded-2xl shadow-md p-6 text-left"
        >
          <div className="flex items-center space-x-4 mb-4">
            <img
              src={exp.logo}
              alt={exp.company}
              className="w-16 h-16 object-contain"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-400">
                {exp.company}
              </h3>
              <p className="text-blue-500 font-medium">{exp.role}</p>
              <p className="text-sm text-gray-500">
                {exp.type} · {exp.period} · {exp.location}
              </p>
            </div>
          </div>

          <p className="text-gray-400 leading-relaxed mb-4">
            {exp.description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2">
            {exp.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 text-sm bg-gray-700 text-gray-300 rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
 );
}
