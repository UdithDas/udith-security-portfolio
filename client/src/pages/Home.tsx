import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Radar,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const navItems = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skills = [
  { name: "Ethical Hacking", code: "EH", detail: "Offensive mindset" },
  { name: "Network Defense", code: "ND", detail: "Resilient perimeters" },
  { name: "Threat Analysis", code: "TA", detail: "Signal over noise" },
  { name: "Threat Hunting", code: "TH", detail: "Find the unknown" },
  { name: "Incident Response", code: "IR", detail: "Contain & recover" },
  { name: "Security Monitoring", code: "SM", detail: "Always-on visibility" },
  { name: "Vulnerability Assessment", code: "VA", detail: "Reduce attack surface" },
  { name: "Penetration Testing", code: "PT", detail: "Validate assumptions" },
];

const tools = [
  "React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Prisma", "AWS EC2", "Render", "OWASP", "Splunk", "Kali Linux", "Metasploit", "Nmap", "Burp Suite",
];

const projects = [
  {
    number: "01",
    type: "Security monitoring",
    title: "Connect SIEM Forwarder to Kali and Creating Dashboard",
    summary: "A real-time security monitoring workflow collecting alerts and events from Kali Linux into Splunk, with custom dashboards for faster threat visualization and analysis.",
    tags: ["Splunk", "Kali Linux", "SIEM", "Security Monitoring"],
    accent: "mint",
  },
  {
    number: "02",
    type: "Full-stack product",
    title: "Restaurant Finder",
    summary: "A responsive MERN application for restaurant search, filtering, user reviews, and location-based recommendations — built as a final year degree project.",
    tags: ["MongoDB", "Express.js", "React", "Node.js"],
    accent: "blue",
  },
  {
    number: "03",
    type: "Offensive security",
    title: "Metasploitable 2 Vulnerability Assessment",
    summary: "A comprehensive assessment combining automated security tooling with manual penetration testing to identify vulnerabilities and document practical remediation steps.",
    tags: ["Metasploit", "Nmap", "Burp Suite", "Vulnerability Assessment"],
    accent: "violet",
  },
];

const certifications = [
  { title: "Cyber Security", issuer: "Spectrum Softtech Solutions", date: "December 2023", status: "Completed" },
  { title: "React JS", issuer: "ICT Academy", date: "August 2022", status: "Completed" },
  { title: "Bootstrap", issuer: "Logix Space Technology", date: "February 2023", status: "Completed" },
  { title: "CEH", issuer: "RedTeam Hacker Academy", date: "In progress", status: "In progress" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.23, 1, 0.32, 1] as const } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

function SectionLabel({ index, eyebrow, title }: { index: string; eyebrow: string; title: string }) {
  return (
    <div className="mb-12 flex items-start gap-4 md:mb-16">
      <span className="section-index">{index}</span>
      <div>
        <p className="mono-label mb-3 text-[var(--mint)]">{eyebrow}</p>
        <h2 className="display-title max-w-3xl text-4xl text-white md:text-6xl">{title}</h2>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleContactSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") || "");
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
    toast.success("Opening your email client", { description: "Your message is ready to send." });
    window.location.href = `mailto:udithdaskm@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleResumeClick = () => {
    toast("Resume PDF placeholder", { description: "Replace the placeholder link with the final PDF when available." });
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--ink)] text-[var(--paper)]">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="Udith Das K M home">
          <span className="brand-symbol">U</span>
          <span>UDITH DAS K M</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => <a key={item.href} className="nav-link" href={item.href}>{item.label}</a>)}
        </nav>
        <a className="header-contact hidden md:inline-flex" href="#contact">Let&apos;s talk <ArrowUpRight size={15} /></a>
        <button className="mobile-menu-button md:hidden" aria-label={menuOpen ? "Close navigation" : "Open navigation"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {menuOpen && (
        <motion.nav initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="mobile-menu md:hidden" aria-label="Mobile navigation">
          {navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label} <ArrowUpRight size={16} /></a>)}
        </motion.nav>
      )}

      <main id="top">
        <section className="hero-section">
          <div className="hero-signal-grid" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="hero-meta"><span className="status-dot" /><span>Available for high-trust security work</span><span className="hero-meta-line" /><span className="mono-label text-[var(--muted)]">KL / IN</span></div>
            <div className="grid items-end gap-12 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20">
              <div>
                <motion.p className="mono-label mb-6 text-[var(--mint)]" initial="hidden" animate="visible" variants={fadeUp}>Application Security Engineer <span className="cursor-blink">_</span></motion.p>
                <motion.h1 className="hero-title" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.08 } } }}>
                  Secure by<span> instinct.</span><br />Proven by<em> practice.</em>
                </motion.h1>
                <motion.p className="hero-copy" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.16 } } }}>
                  I build the detection, prevention, and response habits that keep digital products trustworthy — from first commit to production.
                </motion.p>
                <motion.div className="mt-9 flex flex-wrap gap-3" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.24 } } }}>
                  <a className="button-primary" href="#contact">Contact me <ArrowUpRight size={17} /></a>
                  <a className="button-quiet" href="#resume-placeholder" onClick={handleResumeClick}>Download resume <ArrowDown size={16} /></a>
                </motion.div>
              </div>
              <motion.div className="hero-aside" initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { ...fadeUp.visible.transition, delay: 0.3 } } }}>
                <div className="hero-aside-top"><span className="mono-label text-[var(--muted)]">Current focus</span><Radar size={18} className="text-[var(--mint)]" /></div>
                <p>Application security, secure product engineering, and the sharp edge between signal and noise.</p>
                <div className="hero-aside-bottom"><span>01 / 04</span><span className="aside-progress"><i /></span></div>
              </motion.div>
            </div>
            <a className="scroll-cue" href="#capabilities"><span>Scroll to inspect</span><ArrowDown size={15} /></a>
          </div>
        </section>

        <section className="section-shell" id="capabilities">
          <div className="container">
            <SectionLabel index="01" eyebrow="The toolkit" title="A security-first view of the product surface." />
            <motion.div className="skill-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
              {skills.map((skill) => <motion.article className="skill-card" key={skill.name} variants={fadeUp}><div className="skill-card-top"><span className="skill-code">{skill.code}</span><ChevronRight size={17} className="skill-arrow" /></div><h3>{skill.name}</h3><p>{skill.detail}</p></motion.article>)}
            </motion.div>
            <motion.div className="toolkit-panel" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
              <div className="toolkit-intro"><span className="mono-label text-[var(--mint)]">/ tools & technologies</span><p>Comfortable moving between a terminal, a codebase, and the incident timeline.</p></div>
              <div className="tool-list">{tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
            </motion.div>
          </div>
        </section>

        <section className="section-shell section-deep" id="experience">
          <div className="container">
            <SectionLabel index="02" eyebrow="Field notes" title="The work is equal parts rigor and curiosity." />
            <motion.article className="experience-card" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <div className="experience-topline"><span className="mono-label text-[var(--mint)]">09.2025 — Present</span><span className="mono-label text-[var(--muted)]">Thrissur, Kerala</span></div>
              <div className="experience-grid">
                <div><div className="experience-role-row"><span className="experience-number">01</span><div><p className="mono-label mb-2 text-[var(--muted)]">Inker Robotics</p><h3>Application Security Engineer</h3></div></div><p className="experience-lede">Strengthening application security through secure coding practices and proactive testing across confidential enterprise projects with strict security protocols.</p></div>
                <div><p className="mono-label mb-5 text-[var(--muted)]">/ responsibilities</p><ul className="responsibility-list">{[
                  "Conduct manual and automated application security testing, including vulnerability discovery and exploitation validation.",
                  "Perform security assessments against OWASP Top 10 standards using multiple tools and frameworks.",
                  "Identify, document, and remediate vulnerabilities to reduce attack surfaces.",
                  "Develop and deploy secure full-stack products with React, TypeScript, Node.js, Supabase, and Prisma.",
                  "Harden production configurations on Render and AWS EC2 while integrating security controls into the development lifecycle.",
                ].map((item) => <li key={item}><Check size={16} /><span>{item}</span></li>)}</ul></div>
              </div>
              <div className="experience-tags">{tools.slice(0, 9).map((tool) => <span key={tool}>{tool}</span>)}</div>
            </motion.article>
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="container">
            <SectionLabel index="03" eyebrow="Selected projects" title="Proof lives in the details." />
            <motion.div className="project-list" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.12 }}>
              {projects.map((project) => <motion.article className={`project-card project-${project.accent}`} key={project.title} variants={fadeUp}><div className="project-index">{project.number}</div><div className="project-main"><span className="mono-label mb-3 block text-[var(--muted)]">{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p><div className="project-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><div className="project-action" aria-hidden="true"><ArrowUpRight size={21} /></div></motion.article>)}
            </motion.div>
          </div>
        </section>

        <section className="section-shell section-deep" id="certifications">
          <div className="container">
            <SectionLabel index="04" eyebrow="Credentials" title="Learning is part of the security posture." />
            <motion.div className="cert-grid" variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }}>
              {certifications.map((cert) => <motion.article className="cert-card" key={cert.title} variants={fadeUp}><div className="cert-icon"><ShieldCheck size={20} /></div><div><div className="mb-4 flex items-center justify-between gap-3"><span className={`cert-status ${cert.status === "In progress" ? "cert-status-progress" : ""}`}>{cert.status}</span><span className="mono-label text-[var(--muted)]">{cert.date}</span></div><h3>{cert.title}</h3><p>{cert.issuer}</p></div></motion.article>)}
            </motion.div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-noise" aria-hidden="true" />
          <div className="container relative z-10">
            <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}><span className="mono-label mb-5 block text-[var(--mint)]">/ open channel</span><h2 className="display-title text-5xl text-white md:text-7xl">Let&apos;s make<br /><em>secure</em> things.</h2><p className="contact-copy">Have a product, surface, or security question worth looking at? Send a signal. I&apos;ll get back to you from the other side.</p><div className="contact-links"><a href="mailto:udithdaskm@gmail.com"><Mail size={17} /> udithdaskm@gmail.com <ArrowUpRight size={15} /></a><a href="https://www.linkedin.com/in/udithdas" target="_blank" rel="noreferrer"><Linkedin size={17} /> linkedin.com/in/udithdas <ExternalLink size={14} /></a></div></motion.div>
              <motion.form className="contact-form" onSubmit={handleContactSubmit} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}><div className="form-row"><label>01 <span>Name</span><input required name="name" placeholder="Your name" /></label><label>02 <span>Email</span><input required type="email" name="email" placeholder="you@company.com" /></label></div><label>03 <span>Message</span><textarea required name="message" rows={5} placeholder="Tell me what you are building or investigating." /></label><button className="button-primary form-submit" type="submit">Transmit message <Send size={16} /></button></motion.form>
            </div>
            <div className="contact-footer-line"><span><MapPin size={14} /> Thrissur, Kerala · India</span><span className="mono-label">Response protocol: usually within 48h</span></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="container flex flex-col gap-5 md:flex-row md:items-center md:justify-between"><div className="flex items-center gap-3"><span className="brand-symbol small">U</span><span className="mono-label">Udith Das K M</span></div><div className="flex items-center gap-5"><a href="https://github.com" target="_blank" rel="noreferrer" aria-label="GitHub placeholder"><Github size={17} /></a><a href="https://www.linkedin.com/in/udithdas" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><span className="mono-label text-[var(--muted)]">© 2025 / built with intent</span></div></div></footer>
    </div>
  );
}
