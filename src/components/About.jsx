import { motion } from "framer-motion";
// import { GitBranch, ExternalLink , MessageCircle, Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { MdMail, MdSend } from 'react-icons/md';

const stats = [
  { value: "8+", label: "Months Experience" },
  { value: "12+", label: "Projects Completed" },
  { value: "12+", label: "Technologies" },
  { value: "100%", label: "Dedication" },
];

export function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12">
          <p className="eyebrow text-accent">About Me</p>
          <div className="mt-2 h-px w-16 bg-accent" />
        </div>

        <div className="grid gap-6 md:grid-cols-12">
          {/* Left card */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
  className="rounded-3xl border border-border bg-card p-8 md:col-span-3"
          >
            <div>
              <h3 className="text-2xl font-black tracking-tight">
                Abdul <span className="text-serif-italic font-normal">Mueid</span>
              </h3>
              <p className="mt-1 text-[11px] font-semibold tracking-[0.25em] text-muted-foreground">PAKISTAN</p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-y-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <div className="text-4xl font-black tracking-tight">{s.value}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 flex gap-3">
              {[
                { Icon: FaGithub, href: "https://github.com/abdulmueid" },
                { Icon: FaLinkedin, href: "https://linkedin.com/in/abdulmueid" },
                { Icon: FaWhatsapp, href: "https://wa.me/923299655094" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Middle card */}
          <motion.div
             initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 0.8, delay: 0.3 }}
  className="rounded-3xl border border-border bg-card p-8 md:col-span-6 md:p-12"
          >
            <p className="eyebrow text-accent">Detail Driven UI</p>
            <h2 className="mt-5 text-5xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Interfaces
              <br />
              <span className="text-serif-italic font-normal text-muted-foreground">you can feel.</span>
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
              I&apos;m a frontend developer focused on building intuitive, high-performance web interfaces.
              My expertise spans from pixel-perfect React applications to full WordPress site builds. I
              thrive at the intersection of engineering and design — turning ideas into experiences that works for real
              users.
            </p>

            <div className="mt-10 flex flex-wrap justify-end gap-2">
              <span className="rounded-full border border-border bg-background/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
                DESIGN
              </span>
              <span className="rounded-full border border-border bg-background/40 px-4 py-1.5 text-[11px] font-semibold tracking-[0.15em] text-muted-foreground">
                DEVELOPMENT
              </span>
            </div>
          </motion.div>

          {/* Right card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
  className="rounded-3xl border border-border bg-card p-8 md:col-span-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[10px] font-medium tracking-[0.2em] text-accent">
              
              OPEN TO WORK
            </span>

            <h3 className="mt-10 text-3xl font-black leading-tight tracking-tight md:text-4xl">
              Let&apos;s build
              <br />
              <span className="text-serif-italic font-normal text-muted-foreground">the future.</span>
            </h3>

            <div className="mt-10 space-y-3">
              <a
                href="mailto:abdulmueid051@gmail.com"
                className="flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-3 text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                <MdMail className="h-4 w-4" />
                <span className="truncate">abdulmueid051@gmail.com</span>
              </a>
              <a
                href="https://wa.me/923299655094"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-foreground px-4 py-3 text-xs font-bold tracking-[0.2em] text-background transition-transform hover:scale-[1.02]"
              >
                <MdSend className="h-4 w-4" />
                CONNECT NOW
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
