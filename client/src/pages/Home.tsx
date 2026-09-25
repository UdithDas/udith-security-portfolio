import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  ChevronRight,
  ExternalLink,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Send,
  ShieldCheck,
  X,
} from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "sonner";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#credentials" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  "Ethical Hacking",
  "Network Defense",
  "Threat Analysis",
  "Threat Hunting",
  "Incident Response",
  "Security Monitoring",
  "Vulnerability Assessment",
  "Penetration Testing",
];

const tools = ["React", "TypeScript", "Tailwind CSS", "Node.js", "Supabase", "Prisma", "AWS EC2", "Render", "OWASP", "Splunk", "Kali Linux", "Metasploit", "Nmap", "Burp Suite"];

const projects = [
  {
    number: "01",
    title: "Connect SIEM Forwarder to Kali and Creating Dashboard",
    category: "Security monitoring",
    description: "Comprehensive security monitoring solution collecting alerts and events from Kali Linux using Splunk SIEM tool. Implemented real-time threat detection and created custom dashboards for security event visualization and analysis.",
    stack: ["Splunk", "Kali Linux", "SIEM", "Security Monitoring"],
  },
  {
    number: "02",
    title: "Restaurant Finder",
    category: "Full-stack application",
    description: "Full-stack web application built with MERN stack as final year degree project. Features include restaurant search, filtering, user reviews, and location-based recommendations with responsive design.",
    stack: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    number: "03",
    title: "Metasploitable 2 Vulnerability Assessment",
    category: "Offensive security",
    description: "Comprehensive vulnerability assessment conducted on Metasploitable 2 Linux machine using both automated security tools and manual penetration testing techniques. Identified and documented security vulnerabilities with remediation recommendations.",
    stack: ["Metasploit", "Nmap", "Burp Suite", "Vulnerability Assessment"],
  },
];

const certifications = [
  { title: "Cyber Security", issuer: "Spectrum Softtech Solutions", date: "Issued: December 2023", active: true },
  { title: "React JS", issuer: "ICT Academy", date: "Issued: August 2022", active: true },
  { title: "Bootstrap", issuer: "Logix Space Technology", date: "Issued: February 2023", active: true },
  { title: "CEH", issuer: "RedTeam Hacker Academy", date: "", active: false },
];

const reveal = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
};

function SectionHeading({ number, eyebrow, title }: { number: string; eyebrow: string; title: string }) {
  return (
    <div className="section-heading">
      <span className="section-number">{number}</span>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
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

  return (
    <div className="site-page">
      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Udith Das K M home">UDITH <span>DKM</span></a>
          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
          <a className="header-cta" href="#contact">Get in touch <ArrowUpRight size={15} /></a>
          <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </header>

      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}<ArrowUpRight size={15} /></a>)}</nav>}

      <main id="top">
        <section className="intro-section" id="about">
          <div className="container intro-grid">
            <motion.div className="intro-copy" initial="hidden" animate="visible" variants={reveal}>
              <p className="eyebrow accent">About</p>
              <p className="person-name">Udith Das K M</p>
              <p className="role-label">Application Security Engineer</p>
              <h1>Building secure products from the <i>inside out.</i></h1>
              <p className="intro-summary">A proactive and results-driven cybersecurity professional with expertise in ethical hacking, network defense, and threat analysis. Dedicated to developing robust detection, prevention, and response strategies to protect digital assets.</p>
              <div className="intro-actions"><a className="button button-dark" href="#contact">Contact me <ArrowUpRight size={16} /></a><a className="text-link" href="mailto:udithdaskm@gmail.com">udithdaskm@gmail.com <ArrowUpRight size={14} /></a></div>
            </motion.div>
            <motion.aside className="profile-panel" initial="hidden" animate="visible" variants={{ ...reveal, visible: { ...reveal.visible, transition: { ...reveal.visible.transition, delay: 0.12 } } }}>
              <div className="profile-panel-top"><span className="availability"><span /> Available for selected opportunities</span><span className="profile-code">01 / 04</span></div>
              <div className="profile-portrait" aria-hidden="true"><span>UD</span></div>
              <dl className="profile-details"><div><dt>Recent role</dt><dd>Application Security Engineer<br />at Inker Robotics</dd></div><div><dt>Based in</dt><dd>Thrissur, Kerala<br />India</dd></div><div><dt>Focus</dt><dd>Ethical hacking<br />Threat analysis</dd></div></dl>
            </motion.aside>
          </div>
          <div className="container intro-footer"><span>Scroll to explore</span><span className="footer-rule" /><span className="eyebrow">© 2025</span></div>
        </section>

        <section className="content-section capabilities-section">
          <div className="container">
            <SectionHeading number="01" eyebrow="Skills" title="Security work that connects the code to the real-world risk." />
            <div className="capabilities-layout">
              <motion.p className="section-lede" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>My work combines offensive and defensive security practices: finding practical weaknesses, explaining them clearly, and helping teams reduce their attack surface.</motion.p>
              <motion.div className="capability-list" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }}>
                {capabilities.map((capability, index) => <motion.div className="capability-row" key={capability} variants={reveal}><span>{String(index + 1).padStart(2, "0")}</span><strong>{capability}</strong><ChevronRight size={17} /></motion.div>)}
              </motion.div>
            </div>
            <div className="tools-strip"><span className="eyebrow">Tools I use</span><div>{tools.map((tool) => <span key={tool}>{tool}</span>)}</div></div>
          </div>
        </section>

        <section className="content-section tinted-section" id="experience">
          <div className="container">
            <SectionHeading number="02" eyebrow="Experience" title="A hands-on security practice, built around useful outcomes." />
            <motion.article className="experience-entry" variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
              <div className="experience-meta"><span>September 2025 — June 2026</span><span>Thrissur, Kerala</span></div>
              <div className="experience-content"><div><p className="eyebrow accent">Inker Robotics</p><h3>Application Security Engineer</h3></div><div><p className="experience-description">Responsible for strengthening application security through secure coding practices and proactive security testing. Working with confidential enterprise projects requiring strict security protocols.</p><p className="eyebrow responsibility-heading">Key responsibilities</p><ul className="responsibility-list">{[
                "Conduct extensive manual and automated application security testing, including vulnerability discovery and exploitation validation.",
                "Perform security assessments using multiple security tools and frameworks, ensuring alignment with OWASP Top 10 standards.",
                "Identify, document, and remediate security vulnerabilities to reduce attack surfaces.",
                "Develop and maintain full-stack applications using React, TypeScript, Tailwind CSS, Node.js, Supabase, and Prisma.",
                "Successfully deployed secure production applications on Render and AWS EC2 with hardened configurations.",
                "Integrate security controls into the development lifecycle.",
              ].map((item) => <li key={item}><Check size={15} /><span>{item}</span></li>)}</ul></div></div><div className="experience-tools"><p className="eyebrow">Technologies &amp; tools</p><div>{tools.slice(0, 9).map((tool) => <span key={tool}>{tool}</span>)}</div></div>
            </motion.article>
          </div>
        </section>

        <section className="content-section" id="projects">
          <div className="container">
            <SectionHeading number="03" eyebrow="Selected projects" title="A few things I have investigated, built, and shipped." />
            <div className="project-table"><div className="project-table-header"><span>Project</span><span>Category</span><span>Stack</span></div>{projects.map((project) => <motion.article className="project-row" key={project.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><span className="project-number">{project.number}</span><div className="project-title"><p className="eyebrow">{project.category}</p><h3>{project.title}</h3><p>{project.description}</p></div><div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><ArrowUpRight className="project-link" size={19} /></motion.article>)}</div>
          </div>
        </section>

        <section className="content-section tinted-section" id="credentials">
          <div className="container">
            <SectionHeading number="04" eyebrow="Certifications" title="Continuing to sharpen the fundamentals." />
            <div className="certification-grid">{certifications.map((cert) => <motion.article className="certification-card" key={cert.title} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}><div className="certification-top"><ShieldCheck size={19} /><span className={cert.active ? "" : "pending"}>{cert.active ? "Completed" : "In progress"}</span></div><h3>{cert.title}</h3><p>{cert.issuer}</p>{cert.date && <time>{cert.date}</time>}</motion.article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-grid"><div><p className="eyebrow accent">05 / Contact</p><h2>Let&apos;s talk about the surface area.</h2><p className="contact-summary">If you are building a product, reviewing an application, or trying to make sense of a security problem, send me a note.</p><div className="contact-links"><a href="mailto:udithdaskm@gmail.com"><Mail size={16} />udithdaskm@gmail.com</a><a href="https://www.linkedin.com/in/udithdas" target="_blank" rel="noreferrer"><Linkedin size={16} />linkedin.com/in/udithdas <ExternalLink size={13} /></a></div></div><motion.form className="contact-form" onSubmit={handleContactSubmit} variants={reveal} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }}><label><span>Name</span><input required name="name" placeholder="Your name" /></label><label><span>Email</span><input required type="email" name="email" placeholder="you@company.com" /></label><label><span>Message</span><textarea required name="message" rows={4} placeholder="What are you working on?" /></label><button className="button button-light" type="submit">Send enquiry <Send size={15} /></button></motion.form></div>
        </section>
      </main>

      <footer className="site-footer"><div className="container footer-inner"><span className="wordmark">UDITH <span>DKM</span></span><div className="footer-social"><a href="https://www.linkedin.com/in/udithdas" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17} /></a><span>© 2026 · Application security · Full-stack engineering</span></div></div></footer>
    </div>
  );
}
