import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiX, FiArrowUpRight } from "react-icons/fi";

const projects = [
  {
    category: "DEVELOPMENT",
    title: "MERN TODO APP",
    description:
      "A full-stack task management web application built using the MERN ecosystem. Features secure user authentication, real-time database state synchronization via MongoDB, and a modular React frontend dashboard. Designed with absolute CRUD capabilities to seamlessly create, track, and manage complex modern task workflows.",
    tags: ["MONGODB", "EXPRESS", "REACT", "NODE", "CRUD"],
    href: "https://github.com/Mr-Billu/mern-todo-app",
    live: "",
    preview:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "DEVELOPMENT",
    title: "INVOICE GENERATOR",
    description:
      "A clean and intuitive invoice creation tool engineered purely using standard HTML, CSS, and vanilla JavaScript. Handles on-the-fly mathematical calculations for items, tax rates, and totals dynamically through raw DOM manipulation. Outputs perfectly formatted, print-ready document structures directly inside the browser window.",
    tags: ["JAVASCRIPT", "HTML", "CSS", "DOM"],
    href: "https://github.com/Mr-Billu",
    live: "https://mr-billu.github.io/Invoice-generator/",
    preview:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "DEVELOPMENT",
    title: "WEATHER APP",
    description:
      "A sleek front-end dashboard that delivers accurate meteorological updates by querying external RESTful API endpoints. Uses native JavaScript fetch requests to retrieve atmospheric metrics, parsing real-time regional coordinates and tracking dynamic global forecasts. Automatically formats responsive, fluid visual layouts based on localized telemetry.",
    tags: ["JAVASCRIPT", "HTML", "CSS", "API"],
    href: "https://github.com/Mr-Billu",
    live: "",
    preview:
      "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "WORDPRESS",
    title: "SIMULATOR SOCIAL CLUB",
    description:
      "A bespoke, premium digital environment tailored for an elite motorsport racing social collective. Built ground-up with custom WordPress workflows, utilizing element-level styling architectures and high-fidelity media assets. Fully optimized for lightning-fast asset loading, featuring sophisticated component synchronization and immersive dark-mode typography frameworks.",
    tags: ["WORDPRESS", "ELEMENTOR", "CUSTOM CSS", "DARK THEME"],
    href: "",
    live: "https://simulatorsocialclub.com",
    preview:
      "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "WORDPRESS",
    title: "ALLIANCE REMEDIATION",
    description:
      "A clean, enterprise-focused web infrastructure built from absolute scratch for an environmental remediation firm. Employs advanced custom responsive break-points, multi-tiered structural service hierarchies, and highly secure automated customer lead-generation funnels. Specifically engineered for extreme accessibility, strict structural semantics, and localized engine discoverability.",
    tags: ["WORDPRESS", "ELEMENTOR", "CUSTOM DESIGN", "RESPONSIVE"],
    href: "",
    live: "",
    preview:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "WORDPRESS",
    title: "WILD BOAR SHEDS",
    description:
      "An extensive user-experience overhaul and micro-interaction refinement project for an industrial shed manufacturing client. Re-architected data tables, streamlined complex dimensional engineering product configurators, and standardized cross-browser visual spacing systems. Drastically upgraded interface accessibility baselines while scaling complex, heavy image libraries dynamically.",
    tags: ["WORDPRESS", "ELEMENTOR", "UI REFINEMENT", "RESPONSIVE"],
    href: "",
    live: "",
    preview:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "WORDPRESS",
    title: "WOOD COOKERS",
    description:
      "A comprehensive architecture integration combining massive WooCommerce variable product catalogs with highly complex customized scripts. Features a custom written vanilla JavaScript billing calculation workflow engineered to sit directly inside standard e-commerce transaction channels, maximizing industrial hardware variant matching and consumer checkout velocity.",
    tags: ["WORDPRESS", "WOOCOMMERCE", "JAVASCRIPT", "UI REFINEMENT"],
    href: "",
    live: "https://woodcookers.com.au",
    preview:
      "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop", 
  },
  {
    category: "WORDPRESS",
    title: "FORTITUDE CAREER",
    description:
      "A complete top-to-bottom redesign and deployment of an enterprise corporate career portal ecosystem. Features integrated structural filtering mechanisms for multi-department job listings, secure user-data document attachment submission portals, and streamlined operational routing paths designed to lower user drop-off metrics throughout multi-tier talent onboarding phases.",
    tags: ["WORDPRESS", "ELEMENTOR", "CAREER PAGE", "REDESIGN"],
    href: "",
    live: "",
    preview:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop", 
  },
];

function ProjectDetail({ project, onClose }) {
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        window.dispatchEvent(new CustomEvent("project-overlay-toggle", { detail: { open: false } }));
        onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    window.dispatchEvent(new CustomEvent("project-overlay-toggle", { detail: { open: true } }));

    return () => {
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  const handleInstantClose = () => {
    setIsDismissed(true);
    window.dispatchEvent(new CustomEvent("project-overlay-toggle", { detail: { open: false } }));
    onClose();
  };

  return (
    <>
      <style>{`
        .work-overlay-scroll::-webkit-scrollbar {
          width: 4px;
          height: 4px;
          cursor: pointer;
          background: var(--color-muted);
        }
        .work-overlay-scroll::-webkit-scrollbar-thumb {
          background: var(--accent);
          border-radius: 4px;
        }
      `}</style>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-40 cursor-pointer"
        style={{
          background: "rgba(0, 0, 0, 0.60)",
          backdropFilter: "blur(25px)",
          WebkitBackdropFilter: "blur(25px)",
        }}
        onClick={handleInstantClose}
      />

      <button
        onClick={handleInstantClose}
        style={{ display: isDismissed ? "none" : "block" }}
        className="fixed top-10 right-8 p-3 rounded-full hover:scale-102 active:scale-98 cursor-pointer z-50 bg-[#111111] border border-[#1a1a1a] text-[#8a8280] hover:text-[#edebed]"
        aria-label="Close"
      >
        <FiX size={20} />
      </button>

      <div className="work-overlay-scroll fixed inset-0 z-50 overflow-y-auto flex items-start justify-center px-6 pt-4 pb-6 md:px-16 md:pt-8 md:pb-16 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl flex flex-col items-start text-left pointer-events-auto text-[#edebed] gap-8 py-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <motion.h1
            layoutId={`title-${project.title}`}
            className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none text-left w-full"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.title}
          </motion.h1>

          <motion.div
            layoutId="shared-project-image"
            className="w-full aspect-[16/10] rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#111111]"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.preview ? (
              <img src={project.preview} alt={project.title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-black">
                <span className="text-2xl font-black text-[#1a1a1a]">
                  {project.title.split(" ").map((w) => w[0]).join("")}
                </span>
              </div>
            )}
          </motion.div>

          <div className="w-full flex items-center gap-4 mt-2">
            <h2 className="text-2xl leading-wide font-bold tracking-tight text-white whitespace-nowrap">
              {project.title}
            </h2>
            <div className="flex-1 h-[1.5px] bg-[#1a1a1a]" />
          </div>

          <p className="text-[15px] leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 justify-start">
            {project.tags.map((t) => (
              <span
                key={t}
                className="rounded-full px-5 py-1 text-[10px] font-mono tracking-wider uppercase bg-[#111111] border border-[#1a1a1a] text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 mt-2">
            {project.category === "WORDPRESS" && (
              <a
                href={project.live || "#"}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider bg-white text-black hover:bg-neutral-200 transition-all duration-200 active:scale-95"
              >
                <span>Live Preview</span>
                <span className="inline-flex items-center justify-center">
                  <FiArrowUpRight size={14} strokeWidth={2.5} />
                </span>
              </a>
            )}

            {project.category === "DEVELOPMENT" && project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold tracking-wider bg-[#111111] border border-[#1a1a1a] text-white hover:bg-neutral-900 transition-all duration-200 active:scale-95"
              >
                <span>See Source Code</span>
                <span className="inline-flex items-center justify-center">
                  <FaGithub size={14} strokeWidth={2.5} />
                </span>
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export function Work() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (!selectedProject) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [selectedProject]);

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 28,
    mass: 0.7,
  });

  const textOpacity = useTransform(smoothProgress, [0, 0.12, 0.32, 0.42], [0, 1, 1, 0]);
  const listOpacity = useTransform(smoothProgress, [0.38, 0.5], [0, 1]);
  const listY = useTransform(smoothProgress, [0.38, 0.5], [24, 0]);

  // FIX: Read safe index and preview metrics from "projects" directly
  const safeIndex = Math.min(hoveredIndex, projects.length - 1);
  const currentPreview = projects[safeIndex] || projects[0];

  return (
    <section ref={sectionRef} id="work" className="relative" style={{ height: "420vh" }}>
      <div className="sticky top-0 h-screen overflow-hidden" style={{ background: "var(--background)" }}>
        <AnimatePresence>
          {selectedProject ? (
            <ProjectDetail
              key="detail"
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          ) : null}
        </AnimatePresence>

        <motion.div className="absolute inset-0">
          {/* PHASE 1: Intro text */}
          <motion.div
            style={{ opacity: textOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10"
          >
            <p
              className="text-[12px] font-bold tracking-[0.4em] uppercase mb-5"
              style={{ color: "var(--accent)" }}
            >
              Crafting Modern Experiences
            </p>
            <h2
              className="font-black leading-none tracking-[-0.04em] text-center"
              style={{ fontSize: "clamp(4.5rem, 15vw, 13rem)", color: "var(--foreground)" }}
            >
              WORK
            </h2>
            <p
              className="text-serif-italic font-normal text-center"
              style={{ fontSize: "clamp(2rem, 6vw, 5.5rem)", color: "var(--muted-foreground)" }}
            >
              showcase
            </p>
          </motion.div>

          {/* PHASE 2: Dashboard */}
          <motion.div
            style={{ opacity: listOpacity, y: listY }}
            className="absolute inset-0 flex h-full w-full"
          >
            {/* LEFT: Preview */}
            <div className="w-[45%] min-w-[280px] max-w-[500px] flex flex-col justify-between py-12 pl-12 flex-shrink-0">
              <div className="flex flex-col gap-4 w-full">
                <p className="text-[8px] font-bold tracking-[0.3em] uppercase mb-1" style={{ color: "var(--muted-foreground)" }}>
                    PREVIEWING
                </p>
                
                <motion.div
                  layoutId="shared-project-image"
                  className="relative overflow-hidden rounded-2xl w-full aspect-[16/9]"
                  style={{ border: "1px solid var(--border)", background: "var(--muted)" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                >
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentPreview?.title}
                      initial={{ opacity: 0, scale: 1.04 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0"
                    >
                      {currentPreview?.preview ? (
                        <img
                          src={currentPreview.preview}
                          alt={currentPreview.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center" style={{ background: "var(--background)" }}>
                          <span className="text-xl font-black" style={{ color: "var(--border)" }}>
                            {currentPreview?.title?.split(" ").map((w) => w[0]).join("")}
                          </span>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>

                <div className="px-1">
                  <p className="text-xl font-bold tracking-tight truncate" style={{ color: "var(--foreground)" }}>
                    {currentPreview?.title}
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/Mr-Billu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-[9px] font-bold tracking-widest transition-transform hover:scale-105"
                style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
              >
                <FaGithub className="h-3 w-3" />
                SEE OTHERS ON GITHUB
              </a>
            </div>

            {/* RIGHT: List Only */}
            <div className="flex-1 flex flex-col justify-end items-end py-12 pr-8">
              <div className="w-[50%] max-w-xl flex items-center gap-4 mb-4 flex-shrink-0">
                <p className="text-[9px] font-bold tracking-[0.35em] uppercase whitespace-nowrap" style={{ color: "var(--muted-foreground)" }}>
                  PROJECTS
                </p>
                <div className="flex-1 h-px" style={{ background: "var(--border)" }} />
              </div>

              {/* FIX: Directly mapping raw projects here */}
              <div className="flex flex-col w-[50%] max-w-xl">
                {projects.map((p, i) => {
                  const isActive = safeIndex === i;
                  return (
                    <div
                      key={p.title}
                      onMouseEnter={() => setHoveredIndex(i)}
                      onClick={() => setSelectedProject(p)}
                      className="group flex items-center justify-between cursor-pointer py-1.5 select-none"
                    >
                      <motion.span
                        animate={{ x: isActive ? 10 : 0 }}
                        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                        className="font-bold tracking-tight leading-none text-xl md:text-2xl"
                        style={{
                          color: isActive ? "var(--foreground)" : "var(--muted-foreground)",
                          opacity: isActive ? 1 : 0.35,
                          transition: "color 0.2s ease, opacity 0.2s ease",
                        }}
                      >
                        <motion.span layoutId={`title-${p.title}`}>{p.title}</motion.span>
                      </motion.span>

                      <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                        <AnimatePresence>
                          {isActive && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.5 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.5 }}
                              className="h-1.5 w-1.5 rounded-full"
                              style={{ background: "var(--foreground)" }}
                            />
                          )}
                        </AnimatePresence>
                        <span
                          className="text-[8px] font-bold tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          style={{ color: "var(--muted-foreground)" }}
                        >
                          {p.category}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}