import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

// Updated text matching the reference design exactly
const allWords = [
  "From", "concept", "to", "reality.", "Pixel-perfect", "frontends,",
  "fast", "WordPress", "builds,", "and", "clean", "React", "apps", "—",
  "crafted", "with", "clarity,", "shipped", "with", "purpose.", "Code",
  "that", "holds", "up,","intentional", "design", "that", "speaks", "for", "itself."
];

function ScrollWord({ word, index, total, progress }) {
  const range = 6; 
  const start = index / (total + range);
  const end = (index + range) / (total + range);

  const color = useTransform(
    progress,
    [start, end],
    ["var(--muted-foreground)", "var(--foreground)"]
  );

  const opacity = useTransform(
    progress,
    [start, end],
    [0.15, 1]
  );

  return (
    <motion.span 
      style={{ color, opacity, willChange: "color, opacity" }} 
      className="inline-block"
    >
      {word}
    </motion.span>
  );
}

export function ScrollText() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 45,
    damping: 20,
    mass: 0.8,
    restDelta: 0.001,
  });

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-background">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden px-8">
        <div className="w-full max-w-[80ch] mx-auto text-center flex flex-col items-center justify-center">
          <p className="text-[clamp(1.25rem,2.2vw,1.75rem)] font-normal leading-[1.45] tracking-[-0.015em]">
            <span className="inline-flex flex-wrap justify-center gap-x-[0.32em] gap-y-[0.02em]">
              {allWords.map((word, i) => (
                <ScrollWord
                  key={`scroll-${i}`}
                  word={word}
                  index={i}
                  total={allWords.length}
                  progress={smoothProgress}
                />
              ))}
            </span>
          </p>
        </div>

      </div>
    </section>
  );
}