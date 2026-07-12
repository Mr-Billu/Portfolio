import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useActiveSection } from "./useActiveSection";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "work", label: "Work" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" }, 
  { id: "contact", label: "Contact" },       
];

// Staggered Entry Animation (Preserved)
const containerVariants = {
  hidden: { opacity: 0, scale: 0.96, y: -12 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.16, 1, 0.3, 1],
      staggerChildren: 0.04,
      delayChildren: 0.06,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -8,
    transition: {
      duration: 0.2,
      ease: [0.7, 0, 0.84, 0],
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { type: "spring", stiffness: 350, damping: 26 },
  },
};

export function Navbar() {
  const activeKey = useActiveSection(["home", "about", "work", "skills", "experience", "contact"]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const handleOverlayToggle = (e) => {
      setIsOverlayOpen(e.detail.open);
    };

    window.addEventListener("project-overlay-toggle", handleOverlayToggle);
    return () => {
      window.removeEventListener("project-overlay-toggle", handleOverlayToggle);
    };
  }, []);

  return (
    <>
      {/* ======================================================== */}
      {/* MAIN FLOATING NAV ACTION LAYER                           */}
      {/* ======================================================== */}
      <div 
        style={{ display: isOverlayOpen ? "none" : "flex" }}
        className="fixed top-6 right-6 md:top-10 md:right-12 z-50 flex flex-col items-end gap-3 select-none"
      >
        
        {/* Dynamic Upper Controls Row */}
        <div className="flex items-center gap-3">
          {/* Resume Button */}
          <a
            href="/path-to-your-resume.pdf" 
            target="_blank"
            rel="noopener noreferrer"
            className="font-sans cursor-pointer rounded-full bg-muted/40 border border-border h-10 px-5 py-2.5 text-[11px] font-bold tracking-widest uppercase text-muted-foreground hover:text-foreground hover:bg-muted/80 backdrop-blur-xl transition-all duration-300 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]"
          >
            Resume
          </a>

          {/* Interactive Menu Toggle Trigger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="font-sans min-w-[110px] justify-center cursor-pointer h-10 px-5 flex items-center gap-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/80 active:scale-95 transition-all duration-300 shadow-xl font-bold text-[11px] tracking-widest uppercase"
          >
            <span className="w-11 text-left">{isMenuOpen ? "Close" : "Menu"}</span>
            
            {/* Morphing Hamburger Icon */}
            <div className="relative w-3.5 h-2.5 flex flex-col justify-between items-end">
              <span 
                className={`h-[1.5px] bg-primary-foreground rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-full rotate-45 translate-y-[4.5px]" : "w-full"
                }`} 
              />
              <span 
                className={`h-[1.5px] bg-primary-foreground rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-0 opacity-0" : "w-2/3"
                }`} 
              />
              <span 
                className={`h-[1.5px] bg-primary-foreground rounded-full transition-all duration-300 ease-out ${
                  isMenuOpen ? "w-full -rotate-45 -translate-y-[4.5px]" : "w-full"
                }`} 
              />
            </div>
          </button>
        </div>

        {/* ======================================================== */}
        {/* DROPDOWN EXPANSION DOCK                                  */}
        {/* ======================================================== */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="w-72 bg-card/85 border border-border backdrop-blur-3xl rounded-3xl p-4 shadow-[0_32px_96px_rgba(0,0,0,0.85)] flex flex-col gap-4 overflow-hidden"
            >

              {/* Navigation Grid Container */}
              <nav className="w-full">
                <motion.ul className="flex flex-col gap-1">
                  {links.map((l) => {
                    const isActive = activeKey === l.id;
                    return (
                      <motion.li key={l.id} variants={itemVariants} className="w-full">
                        <a
                          href={`#${l.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`font-sans w-full flex items-center h-12 px-4 rounded-2xl text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                            isActive 
                              ? "bg-primary text-primary-foreground shadow-lg shadow-black/20" 
                              : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                          }`}
                        >
                          <span className="transition-transform duration-300">
                            {l.label}
                          </span>
                        </a>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </nav>

              {/* Architectural Meta Details Footer */}
              
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Background Dimmer */}
      <AnimatePresence>
        {isMenuOpen && !isOverlayOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
            className="fixed inset-0 z-40 bg-background/50 backdrop-blur-[4px] cursor-pointer"
          />
        )}
      </AnimatePresence>
    </>
  );
}