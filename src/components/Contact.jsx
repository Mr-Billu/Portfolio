// import { ArrowRight, Mail, GitBranch, ExternalLink , MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { MdMail, MdSend } from 'react-icons/md'
import { FaArrowRight } from 'react-icons/fa6'

const sitemap = [
  { label: "WORK", href: "#work" },
  { label: "ABOUT", href: "#about" },
  { label: "SKILLS", href: "#skills" },
  { label: "EXPERIENCE", href: "#experience" },
];

const connect = [
  { label: "GITHUB", href: "https://github.com/abdulmueid" },
  { label: "LINKEDIN", href: "https://linkedin.com/in/abdulmueid" },
  { label: "WHATSAPP", href: "https://wa.me/923299655094" },
  { label: "EMAIL", href: "mailto:abdulmueid051@gmail.com" },
];

export function Contact() {
  return (
    <section id="contact" className="relative px-6 pb-16 pt-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-10 md:p-16">
          {/* Big ABDUL outline backdrop */}
          <div className="pointer-events-none absolute inset-x-0 -top-6 select-none text-center text-[clamp(5rem,18vw,16rem)] font-black leading-none tracking-tighter text-foreground/[0.04]">
            ABDUL
          </div>

          <div className="relative grid gap-12 md:grid-cols-12">
            {/* Left */}
            <div className="md:col-span-4">
              <p className="max-w-xs text-base leading-relaxed text-muted-foreground">
                Building systems that prioritize{" "}
                <span className="text-serif-italic text-foreground">human intuition</span>. Architecting digital
                experiences with precision and intent.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="mailto:abdulmueid051@gmail.com"
                  className="inline-flex items-center gap-3 rounded-full bg-foreground px-5 py-3 text-[11px] font-bold tracking-[0.2em] text-background transition-transform hover:scale-[1.03]"
                >
                  HIRE ME
                  <FaArrowRight className="h-4 w-4" />
                </a>
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-3 text-[10px] font-bold tracking-[0.2em] text-muted-foreground">
                  <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                  OPEN FOR
                  <br />
                  OPPORTUNITIES
                </span>
              </div>
            </div>

            {/* Sitemap */}
            <div className="md:col-span-3">
              <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground">SITEMAP</p>
              <ul className="mt-6 space-y-4">
                {sitemap.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-xl font-black tracking-tight transition-colors hover:text-accent">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div className="md:col-span-3">
              <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground">CONNECT</p>
              <ul className="mt-6 space-y-4">
                {connect.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xl font-black tracking-tight transition-colors hover:text-accent"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Status */}
            <div className="md:col-span-2">
              <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground">STATUS</p>
              <div className="mt-6 rounded-2xl border border-border bg-background/40 p-5">
                <div className="flex items-center gap-3">
                  <span className="grid h-8 w-8 place-items-center rounded-full bg-accent/10">
                    <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                  </span>
                  <div>
                    <p className="text-xs font-bold tracking-[0.18em]">BUILDING</p>
                    <p className="text-[10px] tracking-[0.18em] text-muted-foreground">2026</p>
                  </div>
                </div>
                <p className="mt-4 text-[10px] font-semibold leading-relaxed tracking-[0.15em] text-muted-foreground">
                  CURRENTLY SHIPPING WORDPRESS & FRONTEND PROJECTS WHILE TAKING SELECT FREELANCE WORK.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 border-t border-border pt-10 md:flex-row md:items-center">
          <h3 className="text-5xl font-black tracking-tight md:text-6xl">
            Abdul <span className="text-serif-italic font-normal">Mueid</span>
          </h3>
          <div className="flex items-center gap-3">
            {[
              { Icon: MdMail, href: "mailto:abdulmueid051@gmail.com", label: "Email" },
              { Icon: FaGithub, href: "https://github.com/abdulmueid", label: "GitHub" },
              { Icon: FaLinkedin, href: "https://linkedin.com/in/abdulmueid", label: "LinkedIn" },
              { Icon: FaWhatsapp, href: "https://wa.me/923299655094", label: "WhatsApp" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-foreground/40 hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
