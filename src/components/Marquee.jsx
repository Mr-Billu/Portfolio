import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useMemo, useState } from "react";

const useLoop = (delay = 2000) => {
  const [key, setKey] = useState(0);

  const incrementKey = useCallback(() => {
    setKey((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const interval = setInterval(incrementKey, delay);
    return () => clearInterval(interval);
  }, [delay, incrementKey]);

  return { key };
};

const words = [
  { text: "CLEAN CODE", star: "." },
  { text: "BETTER UI", star: "." },
  { text: "FAST SITES", star: "." },
  { text: "MODERN DESIGN", star: "." },
  { text: "PIXEL-PERFECT UI", star: "." },
  { text: "SCALABLE SYSTEMS", star: "." },
  { text: "REAL RESULTS", star: "." },
];

export function Marquee() {
  const { key } = useLoop(2000);

  const current = useMemo(() => {
    return words[key % words.length];
  }, [key]);

  return (
    <div className="relative py-16">
      <div className="flex flex-col items-center justify-center overflow-hidden">
        <p className="text-base font-medium uppercase text-muted-foreground text-5xl md:text-lg" style={{ letterSpacing: "0.35em" }}>
            I build 
          </p>
        <div className="overflow-hidden  flex items-center gap-4">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={key}
              initial={{ opacity: 0, y: "100%" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: "-10%" }}
              transition={{ duration: 0.4, ease: [0.42, 1, 0.36, 1] }}
            >
              <span className="text-4xl font-black tracking-wide md:text-8xl">
                {current.text}<span className="inline-block w-[0.24em] h-[0.24em] rounded-full bg-accent " />
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
        
      </div>
    </div>
  );
}