import { motion, useScroll, useTransform, AnimatePresence, useSpring } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { FaGithub } from "react-icons/fa6";
import { FiX, FiArrowUpRight } from "react-icons/fi";
import todoImage from "../assets/todo-image.png";
import totalDryIceImage from "../assets/TDIB-image.png";
import invoiceGeneratorImage from "../assets/invoive-generator-image.png";
import weatherAppImage from "../assets/weatherapp-image.png";
import simulatorSocialClubImage from "../assets/simulator-social-club-image.png";
import allianceRemediationImage from "../assets/alliance-remediation-image.png";
import woodCookersImage from "../assets/woodcookers-image.png";
import wildBoarShedsImage from "../assets/Wildboarsheds-image.png";

const projects = [
  {
    category: "DEVELOPMENT",
    title: "MERN TODO APP",
    description:
      "A full-stack task management web application built using the MERN ecosystem. Features secure user authentication, real-time database state synchronization via MongoDB, and a modular React frontend dashboard. Designed with absolute CRUD capabilities to seamlessly create, track, and manage complex modern task workflows.",
    tags: ["MONGODB", "EXPRESS", "REACT", "NODE", "CRUD"],
    href: "https://github.com/Mr-Billu/mern-todo-app",
    live: "",
    preview: todoImage,
  },
  {
    category: "DEVELOPMENT",
    title: "INVOICE GENERATOR",
    description:
      "A front-end mockup of an invoice and quote generator I originally built as a real, fully working system for a business, on WordPress with custom PHP code. That version handles real client work, so I can't link to it or give access to it. This is a rebuilt demo in plain REACT, HTML, TAILWIND CSS, and JavaScript that shows the same core idea: put together a quote or invoice, then send it out as a PDF straight to the admin. It's a mockup only, not fully functional, and the demo is locked behind the password generator123 just so it isn't sitting open to anyone.",
    tags: ["REACT", "JAVASCRIPT", "HTML", "CSS", "DOM"],
    href: "https://github.com/Mr-Billu/Invoice-generator",
    live: "https://mr-billu.github.io/Invoice-generator/",
    preview: invoiceGeneratorImage,
  },
  {
    category: "DEVELOPMENT",
    title: "WEATHER APP",
    description:
      "One of my earliest projects, built in plain HTML, CSS, and JavaScript. It calls a weather API to pull real-time conditions for a location and displays them on the page. There's no live deployment for this one, just the source code in the repo. It was my first time working with an external API, and it shows in a few rough edges, but it's where I actually learned how fetch requests and API responses work.",
    tags: ["JAVASCRIPT", "HTML", "CSS", "API"],
    href: "https://github.com/Mr-Billu/weatherApp-page",
    live: "",
    preview: weatherAppImage,
  },
  {
    category: "WORDPRESS",
    title: "TOTAL DRY ICE",
    description:
      "Built entirely from scratch in WordPress and Elementor for a mobile dry ice blasting company, this is a 10-page site covering everything from services and industries served to a working quote form. The brand needed a dark, technical look that felt industrial rather than corporate, so I built a custom corner-bracket image framing style and carried it through every section instead of relying on stock Elementor widgets. Stats, process steps, before-and-after results, all built in elementor to match one strict design system: exact fonts, exact colors, exact spacing, no shortcuts.",
    tags: ["WORDPRESS", "ELEMENTOR", "PLUGINS", "CUSTOM UI DESIGN"],
    href: "",
    live: "https://totaldryice.com/",
    preview: totalDryIceImage,
  },
  {
    category: "WORDPRESS",
    title: "SIMULATOR SOCIAL CLUB",
    description:
      "A single-page site for a premium sim-racing social club in Sarasota, Florida. The design came from Lovable and I built it out in WordPress and Elementor, including custom code to get the autoplaying hero video working the way the design called for. The whole page runs around a membership waitlist, from the founding-member pitch down to the sign-up form, which is connected straight to Mailchimp so leads land in their list automatically. Kept it dark and moody to match the club's whole 'private motorsports club, not an arcade' angle.",
    tags: ["WORDPRESS", "ELEMENTOR", "PLUGINS", "UI DESIGN", "DARK THEME"],
    href: "",
    live: "https://simulatorsocialclub.com",
    preview: simulatorSocialClubImage,
  },
  {
    category: "WORDPRESS",
    title: "ALLIANCE REMEDIATION",
    description:
      "A 10-page site for a Melbourne restoration company that handles water damage, fire and smoke damage, mould remediation, and even meth-lab decontamination, the kind of work that runs 24/7 because none of it can wait. Built from scratch in WordPress and Elementor with the same approach as Total Dry Ice: clean, technical structure, individual service pages instead of one long scroll, and a fully working contact form wired up through SMTP so enquiries actually land in their inbox instead of disappearing into a WordPress mail queue.",
    tags: ["WORDPRESS", "ELEMENTOR", "PLUGINS", "UI DESIGN", "RESPONSIVE"],
    href: "",
    live: "https://allianceremediation.com.au/",
    preview: allianceRemediationImage,
  },
  {
    category: "WORDPRESS",
    title: "WOOD COOKERS",
    description:
      "An ongoing WooCommerce build for an Australian wood stove and heater retailer, official distributor for J.A. Roby and a handful of other international brands. Built in WordPress and Elementor, and I'm still actively involved: adding new products, building out new pages, and maintaining the front end as the catalogue grows. I also put together a small custom quote and invoicing tool for the checkout side, built in PHP, HTML, CSS, and jQuery, though that's a minor piece next to the day-to-day storefront work.",
    tags: ["WORDPRESS", "WOOCOMMERCE","CUSTOM CODE","PHP", "PLUGINS", "JAVASCRIPT", "UI REFINEMENT"],
    href: "",
    live: "https://woodcookers.com.au",
    preview: woodCookersImage,
  },
  {
    category: "WORDPRESS",
    title: "WILD BOAR SHEDS",
    description:
      "An ecommerce site for an Australian family-run shed manufacturer, built entirely in WordPress and Elementor. I built out every page on the site: garages, farm sheds, barns, cottages, and the individual shed material and component listings that make up their catalogue. The whole thing is set up around their range of flat-pack steel buildings, so the goal was to make it easy to browse by shed type and get a quote without digging through menus.",
    tags: ["WORDPRESS", "ELEMENTOR", "PLUGINS", "UI REFINEMENT", "RESPONSIVE"],
    href: "",
    live: "https://wildboarsheds.com.au/",
    preview: wildBoarShedsImage,
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

      {/* Frosted Glass Background Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-0 z-40 cursor-pointer"
        style={{
          background: "rgba(0, 0, 0, 0.7)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
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

      <div
        className="work-overlay-scroll fixed inset-0 z-50 overflow-y-auto flex items-start justify-center px-6 pt-4 pb-6 md:px-16 md:pt-8 md:pb-16"
        style={{ overscrollBehavior: "contain" }}
        onWheel={(e) => e.stopPropagation()}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            handleInstantClose();
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="w-full max-w-3xl flex flex-col items-start text-left pointer-events-auto text-[#edebed] gap-8 py-12"
          style={{ fontFamily: "var(--font-display)" }}
        >
          <motion.div
            layoutId="shared-project-image"
            className="w-full rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#111111] flex items-center justify-center"
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            {project.preview ? (
              <img
                src={project.preview}
                alt={project.title}
                className="w-full h-auto max-h-[60vh] object-contain object-top block"
              />
            ) : (
              <div className="w-full aspect-[16/10] flex items-center justify-center bg-black">
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

    const originalBodyOverflow = document.body.style.overflow;
    const originalBodyTouchAction = document.body.style.touchAction;
    const originalHtmlOverflow = document.documentElement.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalBodyOverflow;
      document.body.style.touchAction = originalBodyTouchAction;
      document.documentElement.style.overflow = originalHtmlOverflow;
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
                  <AnimatePresence>
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
                          className="w-full h-full object-cover object-top"
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