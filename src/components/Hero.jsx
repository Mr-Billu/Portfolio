import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroTransparent from "../assets/hero_transparent.png";

export function Hero() {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const imageOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-background"
    >
      {/* Ambient glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(255,255,255,0.03),transparent_60%)]" />

      {/* LAYER 1 — name behind image */}
      <div className="absolute inset-0 z-10 flex flex-col items-center text-center justify-center pointer-events-none select-none px-6 md:px-16 -translate-y-18 md:-translate-y-26">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          className="font-display font-extrabold uppercase tracking-[-0.02em] leading-[0.85] text-center select-none text-[clamp(4rem,14vw,16rem)]"
        >
          <span>ABDUL</span>
          <span className="inline-flex items-end ">
            MUEID
            <span className="inline-block w-[0.24em] h-[0.24em] rounded-full bg-accent ml-2.5 " />
          </span>
        </motion.h1>
      </div>

      {/* LAYER 2 — big transparent image in front of name */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.4, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        style={{ y: imageY, opacity: imageOpacity }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 pointer-events-none select-none w-[clamp(460px,60vw,800px)]"
      >
        <img
          src={heroTransparent}
          alt="Abdul Mueid"
          className="w-full h-auto object-contain object-bottom"
          draggable={false}
        />
      </motion.div>

      {/* Bottom gradient */}
      <div className="absolute inset-x-0 bottom-0 h-40 z-[25] pointer-events-none bg-gradient-to-t from-background to-transparent" />

      {/* BOTTOM BAR */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute inset-x-0 bottom-6 z-30 flex items-end justify-between px-6 md:bottom-8 md:px-10"
      >
        {/* LEFT — description */}
        <div className="text-left max-w-sm md:max-w-xs">
          <p className="font-sans text-sm md:text-base text-muted-foreground tracking-[0.03em] leading-relaxed ">
            Frontend developer and UI/UX designer building custom{" "}
            <span className="font-serif italic text-foreground">
              WordPress
            </span>{" "}
            and <span className="font-serif italic text-foreground">
              React
            </span> {" "} sites for agencies and small businesses — modern UI and
            code that loads fast.
          </p>
        </div>

        {/* RIGHT — role */}
        <div className="text-right font-sans text-xs md:text-sm font-semibold tracking-[0.03em] text-muted-foreground uppercase leading-relaxed">
          Frontend / UI/UX Designer
          <br />
          <span className="opacity-60">& WordPress Developer</span>
        </div>
      </motion.div>

    </section>
  );
}