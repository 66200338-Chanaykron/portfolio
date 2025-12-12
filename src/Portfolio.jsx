import { useEffect, useState } from "react";
import { Mail, Phone, MapPin, FileDown, Network, Shield, Server, Github, Linkedin, Globe, GraduationCap, Wrench, Sun, Moon } from "lucide-react";

const data = {
  nameEN: "Chanatkron Ariya-Amonlert",
  nameTH: "ชนัฐกร อริยะอมรเลิศ",
  role: "Network Engineer",
  summary: `นักศึกษาวิศวกรรมคอมพิวเตอร์ เน้นโครงสร้างพื้นฐานเครือข่าย (Network Infrastructure)
ถนัด Cisco Packet Tracer, ตั้งค่าอุปกรณ์ Cisco/Huawei ขั้นพื้นฐาน และแก้ปัญหาเครือข่ายแบบมีระบบ`,
  contacts: {
    phone: "+66 61-628-8197",
    email: "66200338@kmitl.ac.th",
    location: "KMITL – Chumphon Campus, Thailand",
    site: "#",
    github: "#",
    linkedin: "#",
    resumeUrl: "/assets/resume.pdf",
  },
  photo: "/assets/profile.jpg",
  education: [
    {
      school: "King Mongkut's Institute of Technology Ladkrabang – Chumphon Campus",
      degree: "B.Eng. in Computer Engineering",
      years: "2023 – 2026 (2566 – 2569)",
    },
  ],
  highlights: [
    {
      icon: <Network className="w-5 h-5" />,
      title: "School Network Design",
      bullets: [
        "ออกแบบ Topology แบบ 3‑Tier (Core/Distribution/Access)",
        "จำลองและทดสอบด้วย Cisco Packet Tracer",
      ],
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "Configuration & Testing",
      bullets: [
        "ตั้งค่า Router/Switch (Cisco และ Huawei พื้นฐาน)",
        "IP/Subnet, VLAN, ACL, NAT และ Connectivity Testing",
      ],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Network Security Basics",
      bullets: [
        "กำหนด ACL/Policy ควบคุมการเข้าถึง",
        "ตั้งค่า DHCP/Firewall พื้นฐาน",
      ],
    },
  ],
  hardSkills: [
    "Cisco/Huawei Config", "Routing & Switching", "IP Addressing & Subnetting",
    "VLAN", "ACL", "NAT", "Network Diagram (Topology)", "Connectivity Testing",
  ],
  softSkills: [
    "Troubleshooting", "Critical Thinking", "Teamwork", "Documentation",
  ],
};

function FadeIn({ loaded = true, delay = 0, children, className = "" }) {
  return (
    <div
      className={`transition-all duration-700 ease-out ${loaded ? "opacity-100 translate-y-0 blur-0" : "opacity-0 translate-y-3 blur-[1px]"} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

function Section({ id, title, children, loaded = true, delay = 0 }) {
  return (
    <FadeIn loaded={loaded} delay={delay}>
      <section id={id} className="scroll-mt-24 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 py-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="h-[1px] w-10 bg-gradient-to-r from-emerald-500/70 via-emerald-400 to-transparent" aria-hidden />
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        </div>
        {children}
      </section>
    </FadeIn>
  );
}

function Header({ onToggle, dark }) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-white/80 dark:bg-neutral-950/75 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto flex items-center gap-4 px-4 sm:px-6 md:px-10 h-16">
        <div className="font-semibold text-lg md:text-xl flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-400 text-white shadow-lg shadow-emerald-500/25">C</span>
          <span>Chanat <span className="text-neutral-500">Portfolio</span></span>
        </div>
        <nav className="ml-auto hidden sm:flex gap-6 text-sm font-medium">
          <a href="#about" className="hover:text-emerald-500 transition">About</a>
          <a href="#skills" className="hover:text-emerald-500 transition">Skills</a>
          <a href="#work" className="hover:text-emerald-500 transition">Highlights</a>
          <a href="#education" className="hover:text-emerald-500 transition">Education</a>
          <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
        </nav>
        <button onClick={onToggle} className="ml-auto sm:ml-6 inline-flex items-center gap-2 rounded-2xl px-3 py-2 border border-emerald-500/40 bg-white/60 dark:bg-neutral-900/70 shadow-sm shadow-emerald-500/10 text-sm hover:border-emerald-500 hover:shadow-emerald-500/25 transition">
          {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

function Hero({ loaded }) {
  return (
    <FadeIn loaded={loaded} delay={40} className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 opacity-70 dark:opacity-60">
        <div className="absolute -top-10 -left-10 h-64 w-64 rounded-full bg-emerald-400 blur-3xl" />
        <div className="absolute top-10 right-0 h-64 w-64 rounded-full bg-teal-400 blur-3xl" />
      </div>
      <div className="relative max-w-6xl mx-auto grid md:grid-cols-[1.15fr,0.95fr] gap-10 items-center px-4 sm:px-6 md:px-10 py-14 md:py-20">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-white/70 dark:bg-neutral-900/70 px-3 py-1 text-sm font-medium text-emerald-700 dark:text-emerald-200 shadow-sm shadow-emerald-500/10">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            {data.role}
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
              {data.nameEN}
            </h1>
            <p className="text-neutral-500 dark:text-neutral-400 text-lg">{data.nameTH}</p>
          </div>
          <p className="text-base md:text-lg leading-7 text-neutral-700 dark:text-neutral-200 whitespace-pre-line bg-white/70 dark:bg-neutral-900/60 border border-white/30 dark:border-white/5 rounded-2xl p-4 shadow-sm shadow-emerald-500/10">
            {data.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={`mailto:${data.contacts.email}`} className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-4 py-2 shadow-lg shadow-emerald-500/30 hover:shadow-emerald-500/45 transition">
              <Mail className="w-4 h-4"/> Email me
            </a>
            <a href={`tel:${data.contacts.phone}`} className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition">
              <Phone className="w-4 h-4"/> {data.contacts.phone}
            </a>
            <a href={data.contacts.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border border-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 px-4 py-2 shadow-sm hover:shadow-lg hover:border-emerald-500/50 transition" download>
              <FileDown className="w-4 h-4"/> Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-3xl overflow-hidden border border-white/50 dark:border-white/10 shadow-2xl shadow-emerald-500/20 bg-gradient-to-br from-white/40 to-emerald-50/60 dark:from-neutral-900/60 dark:to-neutral-900">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-transparent to-teal-500/20" />
            <img src={data.photo} alt="Profile" className="object-cover w-full h-full relative"/>
          </div>
        </div>
      </div>
    </FadeIn>
  );
}

function About({ loaded }) {
  return (
    <Section id="about" title="About" loaded={loaded} delay={120}>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-3 text-neutral-700 dark:text-neutral-200 bg-white/70 dark:bg-neutral-900/60 border border-white/50 dark:border-white/10 rounded-2xl p-6 shadow-sm shadow-emerald-500/10">
          <p>
            ผมสนใจงานออกแบบ ติดตั้ง และดูแลโครงสร้างพื้นฐานเครือข่ายให้มีความเสถียร ปลอดภัย และตรวจสอบได้
            ชอบทำแล็บ/จำลองสถานการณ์ แล้วถ่ายทอดเป็นเอกสาร/ไดอะแกรมที่อ่านง่าย
          </p>
          <p>
            เป้าหมายระยะสั้น: ฝึกงานด้าน Network Engineer และสอบใบรับรองพื้นฐาน (เช่น CCNA) เพื่อยกระดับความรู้เชิงปฏิบัติ
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4 shadow-sm shadow-emerald-500/10"><MapPin className="w-5 h-5 mt-0.5 text-emerald-500"/><span>{data.contacts.location}</span></div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4 shadow-sm shadow-emerald-500/10"><Globe className="w-5 h-5 mt-0.5 text-emerald-500"/><a className="hover:text-emerald-500 transition" href={data.contacts.site} target="_blank" rel="noreferrer">Website</a></div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4 shadow-sm shadow-emerald-500/10"><Github className="w-5 h-5 mt-0.5 text-emerald-500"/><a className="hover:text-emerald-500 transition" href={data.contacts.github} target="_blank" rel="noreferrer">GitHub</a></div>
          <div className="flex items-start gap-3 rounded-2xl border border-white/40 dark:border-white/10 bg-white/70 dark:bg-neutral-900/60 p-4 shadow-sm shadow-emerald-500/10"><Linkedin className="w-5 h-5 mt-0.5 text-emerald-500"/><a className="hover:text-emerald-500 transition" href={data.contacts.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></div>
        </div>
      </div>
    </Section>
  );
}

function Skills({ loaded }) {
  return (
    <Section id="skills" title="Skills" loaded={loaded} delay={180}>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-5 shadow-lg shadow-emerald-500/15">
          <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-emerald-600 dark:text-emerald-300">
            <Wrench className="w-4 h-4" />
            <span>Hard Skills</span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {data.hardSkills.map((s, i) => (
              <li key={i} className="rounded-full border border-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 px-3 py-1.5 text-sm shadow-sm shadow-emerald-500/10 backdrop-blur">
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-white/50 dark:border-white/10 bg-white/80 dark:bg-neutral-900/70 backdrop-blur p-5 shadow-lg shadow-emerald-500/15">
          <div className="flex items-center gap-2 mb-3 text-lg font-semibold text-emerald-600 dark:text-emerald-300">
            <Shield className="w-4 h-4" />
            <span>Soft Skills</span>
          </div>
          <ul className="flex flex-wrap gap-2">
            {data.softSkills.map((s, i) => (
              <li key={i} className="rounded-full border border-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 px-3 py-1.5 text-sm shadow-sm shadow-emerald-500/10 backdrop-blur">
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}

function Work({ loaded }) {
  return (
    <Section id="work" title="Highlights" loaded={loaded} delay={220}>
      <div className="grid md:grid-cols-3 gap-6">
        {data.highlights.map((h, i) => (
          <div key={i} className="rounded-2xl border border-white/50 dark:border-white/10 p-5 shadow-lg shadow-emerald-500/15 bg-white/80 dark:bg-neutral-900/70 backdrop-blur">
            <div className="flex items-center gap-2 font-medium text-lg">{h.icon}<span>{h.title}</span></div>
            <ul className="list-disc pl-5 mt-3 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
              {h.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education({ loaded }) {
  return (
    <Section id="education" title="Education" loaded={loaded} delay={260}>
      <div className="rounded-2xl border border-white/50 dark:border-white/10 p-5 shadow-lg shadow-emerald-500/15 bg-white/80 dark:bg-neutral-900/70 backdrop-blur">
        {data.education.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3">
            <div>
              <div className="font-medium flex items-center gap-2 text-lg"><GraduationCap className="w-4 h-4 text-emerald-500"/>{e.school}</div>
              <div className="text-sm text-neutral-500 dark:text-neutral-400">{e.degree}</div>
            </div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">{e.years}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact({ loaded }) {
  return (
    <Section id="contact" title="Contact" loaded={loaded} delay={300}>
      <div className="grid md:grid-cols-3 gap-6">
        <a href={`mailto:${data.contacts.email}`} className="rounded-2xl border border-white/60 dark:border-white/10 p-5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 flex items-center gap-3 transition">
          <Mail className="w-5 h-5 text-emerald-500"/>
          <div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Email</div>
            <div className="font-medium">{data.contacts.email}</div>
          </div>
        </a>
        <a href={`tel:${data.contacts.phone}`} className="rounded-2xl border border-white/60 dark:border-white/10 p-5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 flex items-center gap-3 transition">
          <Phone className="w-5 h-5 text-emerald-500"/>
          <div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Phone</div>
            <div className="font-medium">{data.contacts.phone}</div>
          </div>
        </a>
        <a href={data.contacts.resumeUrl} download className="rounded-2xl border border-white/60 dark:border-white/10 p-5 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 bg-white/80 dark:bg-neutral-900/70 flex items-center gap-3 transition">
          <FileDown className="w-5 h-5 text-emerald-500"/>
          <div>
            <div className="text-sm text-neutral-500 dark:text-neutral-400">Resume</div>
            <div className="font-medium">Download PDF</div>
          </div>
        </a>
      </div>
    </Section>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const introTimer = setTimeout(() => setShowIntro(false), 2200);
    const loadTimer = setTimeout(() => setLoaded(true), 200);
    return () => {
      clearTimeout(introTimer);
      clearTimeout(loadTimer);
    };
  }, []);
  return (
    <div className={dark ? "dark" : ""}>
      {showIntro && (
        <div className="intro-overlay">
          <div className="intro-blob" />
          <div className="intro-blob intro-blob-second" />
          <div className="intro-sweep" />
          <div className="intro-center">
            <div className="intro-logo">C</div>
            <div className="intro-text">Chanat</div>
          </div>
        </div>
      )}
      <div className="min-h-dvh bg-gradient-to-b from-neutral-50 via-white to-neutral-100 dark:from-neutral-950 dark:via-neutral-950 dark:to-neutral-900 text-neutral-900 dark:text-neutral-50 relative">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 right-10 h-64 w-64 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute bottom-0 left-5 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" />
        </div>
        <div className="relative">
          <Header onToggle={() => setDark(v => !v)} dark={dark} />
          <Hero loaded={loaded} />
          <About loaded={loaded} />
          <Skills loaded={loaded} />
          <Work loaded={loaded} />
          <Education loaded={loaded} />
          <Contact loaded={loaded} />
          <footer className="border-t border-white/30 dark:border-white/10 mt-12 py-8 text-center text-sm text-neutral-600 dark:text-neutral-400">
            {new Date().getFullYear()} {data.nameEN}. Built with ♥
          </footer>
        </div>
      </div>
    </div>
  );
}
