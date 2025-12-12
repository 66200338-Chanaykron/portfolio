import { useState } from "react";
import { Mail, Phone, MapPin, FileDown, Network, Shield, Server, Github, Linkedin, Globe, GraduationCap, Wrench, Sun, Moon } from "lucide-react";

/*
  Single-file React portfolio.
  - Tailwind classes for styling (no import needed in Canvas)
  - Clean, modern, responsive layout
  - Edit text content directly below in the data object
*/

const data = {
  nameEN: "Chanatkron Ariya-Amonlert",
  nameTH: "ชนัฐกร อริยะอมรเลิศ",
  role: "Network Engineer",
  summary: `นักศึกษาวิศวกรรมคอมพิวเตอร์ เน้นโครงสร้างพื้นฐานเครือข่าย (Network Infrastructure)\nถนัด Cisco Packet Tracer, ตั้งค่าอุปกรณ์ Cisco/Huawei ขั้นพื้นฐาน และแก้ปัญหาเครือข่ายแบบมีระบบ`,
  contacts: {
    phone: "+66 61-628-8197",
    email: "66200338@kmitl.ac.th",
    location: "KMITL – Chumphon Campus, Thailand",
    site: "#",
    github: "#",
    linkedin: "#",
    resumeUrl: "/mnt/data/Black & White Minimalistic Professional Resume.pdf",
  },
  photo: "/mnt/data/IMG_20250722_094918.jpg",
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
  skills: [
    "Cisco/Huawei Config", "Routing & Switching", "IP Addressing & Subnetting",
    "VLAN", "ACL", "NAT", "Network Diagram (Topology)",
    "Troubleshooting", "Critical Thinking", "Teamwork",
  ],
};

function Section({ id, title, children }) {
  return (
    <section id={id} className="scroll-mt-24 max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-10">
      <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">{title}</h2>
      {children}
    </section>
  );
}

function Header({ onToggle, dark }) {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/80 dark:bg-neutral-900/80 backdrop-blur">
      <div className="max-w-5xl mx-auto flex items-center gap-4 px-4 sm:px-6 md:px-8 h-16">
        <div className="font-semibold text-lg md:text-xl">{data.nameEN.split(" ")[0]} <span className="text-neutral-500">Portfolio</span></div>
        <nav className="ml-auto hidden sm:flex gap-6 text-sm">
          <a href="#about" className="hover:opacity-80">About</a>
          <a href="#skills" className="hover:opacity-80">Skills</a>
          <a href="#work" className="hover:opacity-80">Highlights</a>
          <a href="#education" className="hover:opacity-80">Education</a>
          <a href="#contact" className="hover:opacity-80">Contact</a>
        </nav>
        <button onClick={onToggle} className="ml-auto sm:ml-0 inline-flex items-center gap-2 rounded-2xl px-3 py-2 border shadow-sm text-sm">
          {dark ? <Sun className="w-4 h-4"/> : <Moon className="w-4 h-4"/>}
          {dark ? "Light" : "Dark"}
        </button>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="max-w-5xl mx-auto grid md:grid-cols-[1.2fr,1fr] gap-8 items-center px-4 sm:px-6 md:px-8 py-12 md:py-16">
        <div>
          <p className="text-sm text-neutral-500">{data.role}</p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mt-1">
            {data.nameEN}
          </h1>
          <p className="text-neutral-500 mt-2">{data.nameTH}</p>
          <p className="mt-6 text-base md:text-lg leading-7 whitespace-pre-line">
            {data.summary}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={`mailto:${data.contacts.email}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 shadow-sm hover:shadow">
              <Mail className="w-4 h-4"/> {data.contacts.email}
            </a>
            <a href={`tel:${data.contacts.phone}`} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 shadow-sm hover:shadow">
              <Phone className="w-4 h-4"/> {data.contacts.phone}
            </a>
            <a href={data.contacts.resumeUrl} className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 shadow-sm hover:shadow" download>
              <FileDown className="w-4 h-4"/> Download CV
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-xl ring-1 ring-black/5">
            <img src={data.photo} alt="Profile" className="object-cover w-full h-full"/>
          </div>
        </div>
      </div>
    </div>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-2 text-neutral-700 dark:text-neutral-300">
          <p>
            ผมสนใจงานออกแบบ ติดตั้ง และดูแลโครงสร้างพื้นฐานเครือข่ายให้มีความเสถียร ปลอดภัย และตรวจสอบได้
            ชอบทำแล็บ/จำลองสถานการณ์ แล้วถ่ายทอดเป็นเอกสาร/ไดอะแกรมที่อ่านง่าย
          </p>
          <p>
            เป้าหมายระยะสั้น: ฝึกงานด้าน Network Engineer และสอบใบรับรองพื้นฐาน (เช่น CCNA) เพื่อยกระดับความรู้เชิงปฏิบัติ
          </p>
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3"><MapPin className="w-5 h-5 mt-0.5"/><span>{data.contacts.location}</span></div>
          <div className="flex items-start gap-3"><Globe className="w-5 h-5 mt-0.5"/><a className="hover:underline" href={data.contacts.site}>Website</a></div>
          <div className="flex items-start gap-3"><Github className="w-5 h-5 mt-0.5"/><a className="hover:underline" href={data.contacts.github}>GitHub</a></div>
          <div className="flex items-start gap-3"><Linkedin className="w-5 h-5 mt-0.5"/><a className="hover:underline" href={data.contacts.linkedin}>LinkedIn</a></div>
        </div>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <ul className="flex flex-wrap gap-2">
        {data.skills.map((s, i) => (
          <li key={i} className="rounded-full border px-3 py-1 text-sm shadow-sm">{s}</li>
        ))}
      </ul>
    </Section>
  );
}

function Work() {
  return (
    <Section id="work" title="Highlights">
      <div className="grid md:grid-cols-3 gap-6">
        {data.highlights.map((h, i) => (
          <div key={i} className="rounded-2xl border p-5 shadow-sm bg-white dark:bg-neutral-900">
            <div className="flex items-center gap-2 font-medium">{h.icon}<span>{h.title}</span></div>
            <ul className="list-disc pl-5 mt-3 space-y-1 text-sm text-neutral-700 dark:text-neutral-300">
              {h.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Education() {
  return (
    <Section id="education" title="Education">
      <div className="rounded-2xl border p-5 shadow-sm">
        {data.education.map((e, i) => (
          <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 py-3">
            <div>
              <div className="font-medium flex items-center gap-2"><GraduationCap className="w-4 h-4"/>{e.school}</div>
              <div className="text-sm text-neutral-500">{e.degree}</div>
            </div>
            <div className="text-sm text-neutral-500">{e.years}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid md:grid-cols-3 gap-6">
        <a href={`mailto:${data.contacts.email}`} className="rounded-2xl border p-5 shadow-sm hover:shadow flex items-center gap-3"><Mail className="w-5 h-5"/><div><div className="text-sm text-neutral-500">Email</div><div>{data.contacts.email}</div></div></a>
        <a href={`tel:${data.contacts.phone}`} className="rounded-2xl border p-5 shadow-sm hover:shadow flex items-center gap-3"><Phone className="w-5 h-5"/><div><div className="text-sm text-neutral-500">Phone</div><div>{data.contacts.phone}</div></div></a>
        <a href={data.contacts.resumeUrl} download className="rounded-2xl border p-5 shadow-sm hover:shadow flex items-center gap-3"><FileDown className="w-5 h-5"/><div><div className="text-sm text-neutral-500">Resume</div><div>Download PDF</div></div></a>
      </div>
    </Section>
  );
}

export default function Portfolio() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <div className="min-h-dvh bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
        <Header onToggle={() => setDark(v => !v)} dark={dark} />
        <Hero />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <footer className="border-t mt-10 py-8 text-center text-sm text-neutral-500">
          {new Date().getFullYear()} {data.nameEN}. Built with ♥
        </footer>
      </div>
    </div>
  );
}
