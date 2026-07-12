import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const jobs = [
  {
    id: "01",
    tag: "CURRENT",
    period: "FEB 2026 – PRESENT",
    mode: "ON-SITE · ONGOING",
    company: "INFINITE INNOVATE",
    link: "https://infinite-innovate.com/",
    role: "WORDPRESS & FRONTEND DEVELOPER",
    blurb: "Currently working as a WordPress and Frontend Developer at a digital agency. Building complete websites from scratch using WordPress and Elementor. Handling UI refinements across multiple live client sites, managing WooCommerce product setups, and developing custom JavaScript solutions. Strong focus on frontend development and clean UI implementation.",
    stack: ["WORDPRESS", "ELEMENTOR", "WOOCOMMERCE", "MAILCHIMP", "JAVASCRIPT", "CSS", "FRONTEND"],
  },
  {
    id: "02",
    tag: "PAST",
    period: "JUL 2025 – OCT 2025",
    mode: "REMOTE · 3 MONTHS",
    company: "ASSUREME.IN",
    role: "FRONTEND DEVELOPER & UI DESIGNER",
    blurb: "3-month internship focused on frontend development and UI design. Created landing page designs in Figma and built them with React.js and Tailwind CSS.",
    stack: ["REACT.JS", "TAILWIND CSS", "FIGMA", "JAVASCRIPT", "UI DESIGN"],
  },
  {
    id: "03",
    tag: "PAST",
    period: "APR 2025 – MAY 2025",
    mode: "ON-SITE · 2 MONTHS",
    company: "ULTIMATE OUTSOURCING LTD",
    role: "FRONTEND DEVELOPER",
    blurb: "Worked on social ad landing pages and an e-commerce perfume product card. Hands-on with real client-facing projects, strengthening HTML, CSS Grid, and JavaScript.",
    stack: ["HTML", "CSS GRID", "JAVASCRIPT", "LANDING PAGES"],
  },
];

function StackCard({ job, index, progress, total }) {
  const startRange = index / total;
  const scale = useTransform(progress, [startRange, startRange + 0.15], [1, 0.95]);
  
 

  return (
    <div className="w-full max-w-5xl sticky top-[240px] mb-16 px-4" style={{ zIndex: index + 10 }}>
      <motion.div
        style={{ scale }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3}}
        transition={{ type: "spring", stiffness: 60, damping: 22, mass: 0.9 }}
        className="w-full h-auto lg:h-[340px] border border-border bg-card p-6 sm:p-10 rounded-[24px] flex items-center overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 w-full items-stretch">
          <div className="lg:col-span-5 flex flex-col justify-between pb-6 lg:pb-0 lg:pr-8">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-sm font-bold font-mono text-muted-foreground">{job.id}</span>
                <span className={`text-[10px] font-extrabold tracking-[0.2em] ${job.tag === "CURRENT" ? "text-foreground" : "text-muted-foreground/70"}`}>
                  {job.tag}
                </span>
              </div>
              <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight text-foreground uppercase leading-tight">
                {job.role}
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold tracking-[0.10em] text-accent uppercase">
                {job.company}
              </p>
            </div>
            <div className="mt-6 flex flex-row lg:flex-col justify-between items-end lg:items-start gap-4">
              <div>
                <span className="text-[10px] sm:text-[11px] font-semibold tracking-[0.15em] block text-muted-foreground font-mono">{job.period}</span>
                <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.12em] text-muted-foreground block mt-1 uppercase font-sans">{job.mode}</span>
              </div>
              {job.link && (
                <a href={job.link} target="_blank" rel="noreferrer" className="group/link inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-accent hover:text-accent/80 transition-colors">
                  <span className="decoration-accent/20 group-hover/link:decoration-accent transition-all">VISIT SITE</span>
                  <FaArrowUpRightFromSquare className="h-3 w-3 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>
          <div className="lg:col-span-7 flex flex-col justify-between gap-6 lg:pl-4">
            <p className="text-xs sm:text-sm md:text-base leading-relaxed text-muted-foreground font-medium">{job.blurb}</p>
            <div>
              <p className="text-[9px] font-bold tracking-[0.2em] text-muted-foreground uppercase mb-2.5 font-mono">Technologies used</p>
              <div className="flex flex-wrap gap-1.5">
                {job.stack.map((tech) => (
                  <span key={tech} className="rounded-full px-4 py-1.5 text-[10px] sm:text-[11px] font-bold font-mono tracking-wider  border border-border bg-muted text-foreground/70 hover:text-foreground transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export function Experience() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end end"] });
  const headerY = useTransform(scrollYProgress, [0.8, 1], ["0%", "-100%"]);
  const headerOpacity = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

  return (
    <section ref={containerRef} id="experience" className="relative w-full bg-background overflow-visible pb-48">
      <motion.div style={{ y: headerY , opacity: headerOpacity }} className="sticky top-10 z-20 w-full pointer-events-none">
        <div className="text-center max-w-4xl mx-auto px-4 pointer-events-auto">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-none" >
            <span className="block text-foreground mb-1">WHERE I&apos;VE</span>
            <span className="block text-serif-italic text-accent font-light">worked</span>
          </h2>
        </div>
      </motion.div>

      <div className="relative w-full flex flex-col items-center mt-24">
        {jobs.map((job, index) => (
          <StackCard key={job.id} job={job} index={index} progress={scrollYProgress} total={jobs.length} />
        ))}
      </div>
    </section>
  );
}