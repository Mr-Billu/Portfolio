import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

const frontendSkills = [
  { name: "REACT.JS", slug: "react", color: "61DAFB" },
  { name: "HTML5", slug: "html5", color: "E34F26" },
  { name: "CSS3", slug: "css3", color: "1572B6", fallbackUrl: "https://img.icons8.com/color/144/css3.png" },
  { name: "JAVASCRIPT", slug: "javascript", color: "F7DF1E" },
  { name: "TAILWIND CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "GIT & GITHUB", slug: "git", color: "F05032" },
  { name: "FIGMA", slug: "figma", color: "F24E1E" },
  { name: "FRAMER MOTION", slug: "framer", color: "0055FF" }
];

const cmsSkills = [
  { name: "WORDPRESS", slug: "wordpress", color: "21759B" },
  { name: "ELEMENTOR", slug: "elementor", color: "E0005C" },
  { name: "WOOCOMMERCE", slug: "woocommerce", color: "96588A", fallbackUrl: "https://img.icons8.com/color/144/woocommerce.png" },
  { name: "MAILCHIMP", slug: "mailchimp", color: "FFE01B" },
  { name: "PLUGINS", slug: "wordpress", color: "0073AA" }
];

const aiSkills = [
 { name: "LOVABLE", slug: "lovable", color: "FF5722", fallbackUrl:"https://cdn.jsdelivr.net/gh/homarr-labs/dashboard-icons/svg/lovable.svg" },
  { name: "GEMINI", slug: "googlegemini", color: "8E70FF" },
  { name: "COPILOT", slug: "githubcopilot", color: "FFFFFF" },
  { name: "CLAUDE", slug: "claude", color: "D97F56" },
  { name: "CURSOR", slug: "cursor", color: "38BDF8" }
];

function SkillBadge({ skill, motionStyle }) {
  const { name, slug, color, fallbackUrl } = skill;

  return (
    <motion.div style={motionStyle} className="inline-flex flex-col items-center gap-2 cursor-pointer">
      <div className="w-20 h-20 flex items-center justify-center bg-muted border border-border rounded-2xl p-4 shadow-[0_2px_8px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.04)]">
        <img
          src={fallbackUrl || `https://cdn.simpleicons.org/${slug}/${color}`}
          alt={name}
          className="w-full h-full object-contain"
        />
      </div>
      <span className="text-[8px] font-bold tracking-widest text-muted-foreground uppercase font-display text-center leading-tight">
        {name}
      </span>
    </motion.div>
  );
}

function SkillBadgeV1({ skill, index, centerIndex, smoothProgress, startRange, endRange }) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(smoothProgress, [startRange, endRange], [distanceFromCenter * 140, 0]);
  const rotateX = useTransform(smoothProgress, [startRange, endRange], [distanceFromCenter * 25, 0]);
  const opacity = useTransform(smoothProgress, [startRange, startRange + 0.10], [0, 1]);
  return <SkillBadge skill={skill} motionStyle={{ x, rotateX, opacity }} />;
}

function SkillBadgeV2({ skill, index, centerIndex, smoothProgress, startRange, endRange }) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(smoothProgress, [startRange, endRange], [distanceFromCenter * 140, 0]);
  const scale = useTransform(smoothProgress, [startRange, endRange], [0.7, 1]);
  const y = useTransform(smoothProgress, [startRange, endRange], [Math.abs(distanceFromCenter) * 35, 0]);
  const opacity = useTransform(smoothProgress, [startRange, startRange + 0.10], [0, 1]);
  return <SkillBadge skill={skill} motionStyle={{ x, scale, y, opacity, transformOrigin: "center" }} />;
}

function SkillBadgeV3({ skill, index, centerIndex, smoothProgress, startRange, endRange }) {
  const distanceFromCenter = index - centerIndex;
  const x = useTransform(smoothProgress, [startRange, endRange], [distanceFromCenter * 150, 0]);
  const rotate = useTransform(smoothProgress, [startRange, endRange], [distanceFromCenter * 30, 0]);
  const y = useTransform(smoothProgress, [startRange, endRange], [-Math.abs(distanceFromCenter) * 20, 0]);
  const scale = useTransform(smoothProgress, [startRange, endRange], [0.7, 1]);
  const opacity = useTransform(smoothProgress, [startRange, startRange + 0.10], [0, 1]);
  return <SkillBadge skill={skill} motionStyle={{ x, rotate, y, scale, opacity, transformOrigin: "center" }} />;
}

export function Skills() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 30,
    damping: 24,
    mass: 1.2,
    restDelta: 0.001
  });

  const frontendCenter = Math.floor(frontendSkills.length / 2);
  const cmsCenter = Math.floor(cmsSkills.length / 2);
  const aiCenter = Math.floor(aiSkills.length / 2);

  const titleY = useTransform(smoothProgress, [0, 0.15], ["35vh", "0vh"]);
  const titleOpacity = useTransform(smoothProgress, [0, 0.12], [0, 1]);
  const titleFadeOut = useTransform(smoothProgress, [0.94, 0.99], [1, 0]);

  const cat1Opacity = useTransform(smoothProgress, [0.12, 0.18, 0.36, 0.42], [0, 1, 1, 0]);
  const cat1Y = useTransform(smoothProgress, [0.12, 0.18, 0.36, 0.42], ["20vh", "0vh", "0vh", "-12vh"]);

  const cat2Opacity = useTransform(smoothProgress, [0.42, 0.48, 0.66, 0.72], [0, 1, 1, 0]);
  const cat2Y = useTransform(smoothProgress, [0.42, 0.48, 0.66, 0.72], ["20vh", "0vh", "0vh", "-12vh"]);

  const cat3Opacity = useTransform(smoothProgress, [0.72, 0.78, 0.96, 1.00], [0, 1, 1, 0]);
  const cat3Y = useTransform(smoothProgress, [0.72, 0.78, 0.96, 1.00], ["20vh", "0vh", "0vh", "-10vh"]);

  return (
    <div ref={containerRef} className="relative h-[550vh] bg-background text-foreground">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center overflow-hidden px-6">

        <motion.div
          style={{
            y: titleY,
            opacity: useTransform(() => titleOpacity.get() * titleFadeOut.get())
          }}
          className="relative mt-[14vh] flex flex-col items-center text-center z-20"
        >
          <h2 className="font-display text-[clamp(3rem,8vw,6rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground m-0">
            THE MAGIC
          </h2>
          <h2 className="font-serif text-[clamp(3rem,8vw,6rem)] font-normal italic leading-none tracking-[-0.02em] text-accent mt-1 m-0">
            BEHIND
          </h2>
        </motion.div>

        <div className="relative flex-1 w-full max-w-5xl flex items-center justify-center">

          <motion.div style={{ opacity: cat1Opacity, y: cat1Y }} className="absolute inset-x-0 flex flex-col items-center justify-center">
            <p className="font-display text-[0.65rem] tracking-[0.25em] font-bold text-muted-foreground uppercase mb-10">
              Frontend
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full [perspective:600px]">
              {frontendSkills.map((skill, index) => (
                <SkillBadgeV1
                  key={skill.name}
                  skill={skill}
                  index={index}
                  centerIndex={frontendCenter}
                  smoothProgress={smoothProgress}
                  startRange={0.12}
                  endRange={0.28}
                />
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity: cat2Opacity, y: cat2Y }} className="absolute inset-x-0 flex flex-col items-center justify-center">
            <p className="font-display text-[0.65rem] tracking-[0.25em] font-bold text-muted-foreground uppercase mb-10">
              WordPress
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full">
              {cmsSkills.map((skill, index) => (
                <SkillBadgeV2
                  key={skill.name}
                  skill={skill}
                  index={index}
                  centerIndex={cmsCenter}
                  smoothProgress={smoothProgress}
                  startRange={0.42}
                  endRange={0.58}
                />
              ))}
            </div>
          </motion.div>

          <motion.div style={{ opacity: cat3Opacity, y: cat3Y }} className="absolute inset-x-0 flex flex-col items-center justify-center">
            <p className="font-display text-[0.65rem] tracking-[0.25em] font-bold text-muted-foreground uppercase mb-10">
              AI Tools
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 w-full [perspective:600px]">
              {aiSkills.map((skill, index) => (
                <SkillBadgeV3
                  key={skill.name}
                  skill={skill}
                  index={index}
                  centerIndex={aiCenter}
                  smoothProgress={smoothProgress}
                  startRange={0.72}
                  endRange={0.88}
                />
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
}