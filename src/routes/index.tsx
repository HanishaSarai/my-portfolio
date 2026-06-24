import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowUpRight, Mail, Phone, Linkedin, Send, ExternalLink,
  Code2, Database, Brain, Wrench, Layers, Cpu, Sparkles,
  Briefcase, GraduationCap, MapPin,
} from "lucide-react";
import heroPortrait from "@/assets/hanisha-hero.jpg";
import fullStackCertificate from "@/assets/fullstackcerti.png";
import aiCourseCertificate from "@/assets/Aicourse.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Hanisha Sarai · Full Stack & AI Engineer" },
      { name: "description", content: "Portfolio of Hanisha Sarai · Software Engineer building scalable full stack apps and AI powered systems." },
      { property: "og:title", content: "Hanisha Sarai · Full Stack & AI Engineer" },
      { property: "og:description", content: "Crafting intelligent, scalable, human centered digital experiences." },
    ],
  }),
  component: Portfolio,
});

const TITLES = ["Software Engineer", "Full Stack Developer", "AI Engineer"];

function useTypewriter(words: string[]) {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);
  useEffect(() => {
    const w = words[i];
    const t = setTimeout(() => {
      if (!del) {
        setText(w.slice(0, text.length + 1));
        if (text === w) setTimeout(() => setDel(true), 1400);
      } else {
        setText(w.slice(0, text.length - 1));
        if (text === "") { setDel(false); setI((i + 1) % words.length); }
      }
    }, del ? 45 : 85);
    return () => clearTimeout(t);
  }, [text, del, i, words]);
  return text;
}

function Nav() {
  const links = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Stack", href: "#stack" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(1200px,calc(100%-2rem))]">
      <div className="rounded-full px-5 py-3 flex items-center justify-between border border-white/10 bg-[oklch(0.18_0.02_250/0.7)] backdrop-blur-xl shadow-[var(--shadow-soft)]">
        <a href="#home" className="flex items-center gap-2 font-bold tracking-tight">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          Hanisha Sarai
        </a>
        <nav className="hidden md:flex gap-7 text-sm text-muted-foreground font-medium">
          {links.map((l) => (
            <a key={l.label} href={l.href} className="hover:text-foreground transition-colors font-mono text-xs uppercase tracking-widest">
              {l.label}
            </a>
          ))}
        </nav>
        <a href="#contact"><Button size="sm" className="rounded-full px-5 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold">Let's Talk</Button></a>
      </div>
    </header>
  );
}

function HeroBento() {
  const typed = useTypewriter(TITLES);
  return (
    <section id="home" className="relative pt-28 pb-12 px-4 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />
      <div className="absolute inset-0 -z-10" style={{ background: "var(--gradient-mesh)" }} />

      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-4 auto-rows-min">
        <div className="col-span-12 lg:col-span-8 tile p-8 lg:p-12 min-h-[460px] relative overflow-hidden flex flex-col justify-between animate-fade-up">
          <div className="absolute top-0 right-0 w-[55%] h-full opacity-30 mix-blend-luminosity pointer-events-none">
            <img src={heroPortrait} alt="" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, var(--surface) 0%, transparent 60%)" }} />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-soft border border-primary/30 text-primary text-[11px] font-mono mb-8 uppercase tracking-widest">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
              </span>
              Available for AI &amp; Full Stack work
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-8xl font-extrabold tracking-[-0.04em] leading-[0.95]">
              Hanisha<br/>
              <span className="text-gradient">Sarai.</span>
            </h1>
          </div>

          <div className="relative mt-10 flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">Currently</div>
              <div className="text-2xl sm:text-3xl font-semibold">
                <span className="text-primary">{typed}</span>
                <span className="inline-block w-0.5 h-7 bg-primary ml-1 animate-pulse align-middle" />
              </div>
              <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
                I build autonomous systems and fluid digital experiences, bridging <span className="text-foreground font-semibold">high performance backends</span> with <span className="text-foreground font-semibold">AI driven interfaces</span>.
              </p>
            </div>
            <a href="#work" className="group flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-primary hover:gap-4 transition-all">
              See selected work
              <span className="size-10 rounded-full border border-primary/40 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <ArrowRight className="size-4"/>
              </span>
            </a>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 tile p-0 min-h-[460px] relative overflow-hidden group animate-fade-up" style={{ animationDelay: "0.1s" }}>
          <img src={heroPortrait} alt="Hanisha Sarai" className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 scale-105 group-hover:scale-100 transition-all duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.02_250/0.95)] via-transparent to-transparent" />
          <div className="absolute top-5 left-5 right-5 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-widest text-white/70 bg-black/30 backdrop-blur px-2 py-1 rounded">Portrait</span>
            <span className="size-9 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white">
              <Sparkles className="size-4"/>
            </span>
          </div>
          <div className="absolute bottom-5 left-5 right-5">
            <div className="text-xs font-mono uppercase tracking-widest text-primary mb-1">Software Engineer</div>
            <div className="text-xl font-bold leading-tight text-white">Building the bridge<br/>between AI &amp; UX.</div>
          </div>
        </div>

        {[
          { k: "2+", v: "Years shipping production code" },
          { k: "20+", v: "Full stack & AI projects built" },
          { k: "10+", v: "Technologies in active stack" },
          { k: "∞", v: "Curiosity for new systems" },
        ].map((s, i) => (
          <div key={s.v} className="col-span-6 lg:col-span-3 tile-soft p-6 animate-fade-up" style={{ animationDelay: `${0.15 + i*0.05}s` }}>
            <div className="text-4xl font-extrabold tracking-tight">{s.k}</div>
            <div className="text-xs text-muted-foreground mt-2 leading-snug">{s.v}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Marquee() {
  const items = ["React","Node.js","Python","LangChain","LLMs","Next.js","MongoDB","React Native","Tailwind","RAG","Prompt Engineering","TypeScript","Express","MySQL"];
  return (
    <section className="py-10 border-y border-white/5 bg-[var(--surface)]/40 overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...items, ...items].map((it, i) => (
          <span key={i} className="mx-8 inline-flex items-center gap-8 text-2xl sm:text-3xl font-bold text-muted-foreground/40 hover:text-primary transition-colors">
            {it}
            <span className="size-2 rounded-full bg-primary/40" />
          </span>
        ))}
      </div>
    </section>
  );
}

function About() {
  const edu = [
    { title: "Bachelor of Engineering", org: "SAL College of Engineering", year: "2022 to 2026", certificate: null },
    { title: "Full Stack Development", org: "Red & White Institute", year: "2024", certificate: fullStackCertificate },
    { title: "AI Engineering", org: "LLMs · Prompt Engineering · AI Systems", year: "2026", certificate: aiCourseCertificate },
  ];
  const principles = [
    ["AI first", "engineering mindset"],
    ["Full lifecycle", "product delivery"],
    ["Scalable", "system thinking"],
    ["Clean code", "maintainability"],
  ];
  return (
    <section id="about" className="px-4 lg:px-8 py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-5 sticky top-24 self-start">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">About</div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[1]">
            Engineering at the<br/>intersection of<br/><span className="text-gradient">web &amp; AI.</span>
          </h2>
          <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
            I'm a Software Engineer specializing in full stack development and AI driven systems, building scalable, intelligent digital products that combine clean engineering with modern AI capabilities.
          </p>
        </div>

        <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
          {principles.map(([a,b]) => (
            <div key={a} className="tile-soft p-6 hover:border-primary/40 transition-colors">
              <div className="text-xl font-bold">{a}</div>
              <div className="text-sm text-muted-foreground mt-1">{b}</div>
            </div>
          ))}

          <div className="col-span-2 tile p-8 mt-2">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-primary mb-6">
              <GraduationCap className="size-4"/> Education
            </div>
            <ul className="divide-y divide-white/5">
              {edu.map((e) => (
                <li key={e.title} className="py-5 first:pt-0 last:pb-0 flex items-center justify-between gap-6 flex-wrap">
                  <div>
                    <div className="font-semibold">{e.title}</div>
                    <div className="text-sm text-muted-foreground">{e.org}</div>
                  </div>
                  <div className="flex items-center gap-4 shrink-0">
                    <div className="font-mono text-xs text-muted-foreground/70">{e.year}</div>
                    {e.certificate && (
                      <a href={e.certificate} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest px-3 py-1.5 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors">
                        View Certificate <ArrowUpRight className="size-3"/>
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const SKILL_CATEGORIES = [
  { icon: Layers, name: "Frontend", items: ["React.js","React Native","Tailwind","HTML5","CSS3"] },
  { icon: Cpu, name: "Backend", items: ["Node.js","Express","REST APIs","Architecture"] },
  { icon: Code2, name: "Programming", items: ["JavaScript","TypeScript","SQL"] },
  { icon: Database, name: "Databases", items: ["MongoDB","MySQL","Data Modeling"] },
  { icon: Brain, name: "AI & GenAI", items: ["LLMs","LangChain","RAG","Prompts","Chatbots"] },
  { icon: Wrench, name: "Tools", items: ["Git","GitHub","Postman","VS Code"] },
];
const SERVICES = [
  { icon: Code2, title: "Web Development", desc: "Scalable, responsive web apps with React, Node and modern tooling." },
  { icon: Layers, title: "Mobile Apps", desc: "Cross platform React Native with smooth UX and optimized performance." },
  { icon: Brain, title: "AI Solutions", desc: "Chatbots, LLM integrations, RAG pipelines and intelligent automation." },
  { icon: Sparkles, title: "Freelance Engineering", desc: "End to end from UI through backend and production hardening." },
];

function Stack() {
  return (
    <section id="stack" className="px-4 lg:px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Stack &amp; Services</div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter">Hard coded toolkit.</h2>
          </div>
          <p className="text-muted-foreground max-w-sm">From pixel perfect interfaces to AI pipelines and scalable backends, a full spectrum stack.</p>
        </div>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 lg:col-span-4 row-span-2 p-8 rounded-[2rem] bg-primary text-primary-foreground flex flex-col justify-between min-h-[400px] relative overflow-hidden">
            <div className="font-mono text-xs uppercase tracking-widest">Stack</div>
            <div>
              <div className="font-serif text-5xl lg:text-6xl font-bold italic leading-[0.95] tracking-tight">Full stack<br/>&amp; AI native.</div>
              <p className="mt-5 text-primary-foreground/80 text-sm max-w-xs">
                A pragmatic engineer who ships, covering frontend, backend, mobile and generative AI in one workflow.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {["React","Node","Python","LangChain","Mongo"].map(t => (
                <span key={t} className="px-3 py-1 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 text-xs font-semibold">{t}</span>
              ))}
            </div>
            <div className="absolute -bottom-16 -right-16 size-64 rounded-full bg-white/10 blur-2xl" />
          </div>

          {SKILL_CATEGORIES.map(({ icon: Icon, name, items }, i) => (
            <div key={name} className={`col-span-12 sm:col-span-6 lg:col-span-4 tile-soft p-6 hover:border-primary/40 transition-all group ${i===0 ? "lg:col-start-5" : ""}`}>
              <div className="flex items-center justify-between mb-4">
                <div className="size-10 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="size-4"/>
                </div>
              </div>
              <h3 className="font-bold mb-3">{name}</h3>
              <div className="flex flex-wrap gap-1.5">
                {items.map(it => (
                  <span key={it} className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-white/5 border border-white/5 text-muted-foreground">{it}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-8">
            <div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-3">Services</div>
              <h3 className="text-3xl lg:text-4xl font-extrabold tracking-tighter">What I build for clients.</h3>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="tile p-7 group hover:border-primary/40 transition-colors flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="size-11 rounded-xl bg-primary/15 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon className="size-5"/>
                  </div>
                  <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"/>
                </div>
                <h4 className="font-bold text-lg mb-2">{title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const EXPERIENCE = [
  {
    role: "Software Engineer",
    company: "Binary Geckos",
    period: "Present",
    points: [
      "Building full stack applications with AI integrated systems",
      "Shipping scalable, production ready web platforms",
      "Designing backend APIs, frontend interfaces, and system architecture",
      "Driving performance optimization and modern engineering practices",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sudarsana Entrepreneurs Units",
    period: "May to Oct 2025",
    points: [
      "Developed responsive, interactive web applications",
      "Built and maintained RESTful APIs and backend services",
      "Integrated authentication, security and database systems",
      "Worked with MongoDB and MySQL for efficient data handling",
      "Delivered end to end features from design through deployment",
    ],
  },
];

function Experience() {
  return (
    <section id="experience" className="px-4 lg:px-8 py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-4">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Trajectory</div>
          <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter leading-[1]">Where I've<br/>been building.</h2>
        </div>
        <div className="col-span-12 lg:col-span-8 space-y-4">
          {EXPERIENCE.map((e) => (
            <div key={e.role} className="tile p-8 group hover:border-primary/40 transition-colors">
              <div className="flex items-start justify-between gap-6 mb-6 flex-wrap">
                <div>
                  <div className="font-mono text-[11px] text-primary uppercase tracking-widest mb-2 flex items-center gap-2">
                    <Briefcase className="size-3"/> {e.period}
                  </div>
                  <h3 className="text-3xl font-extrabold tracking-tight">{e.role}</h3>
                  <div className="text-muted-foreground font-medium">{e.company}</div>
                </div>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 text-sm text-muted-foreground">
                {e.points.map(p => (
                  <li key={p} className="flex gap-2"><span className="text-primary mt-1.5">▸</span><span>{p}</span></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const PROJECTS = [
  {
    title: "Vibgyor Events & Concepts",
    tag: "Full Stack",
    stack: ["React.js","Tailwind","Node.js","MongoDB"],
    desc: "Comprehensive event management platform with photo & video galleries, consultation bookings, event registrations and a secure admin panel for managing all submissions.",
    live: "https://vibgorrwebsite-lc8i-git-main-hanisha-sarais-projects.vercel.app/",
    gradient: "linear-gradient(135deg, oklch(0.5 0.18 230), oklch(0.4 0.15 270))",
    big: true,
  },
  {
    title: "AI Personality Chatbot",
    tag: "AI / GenAI",
    stack: ["Python","LangChain","LLMs","Streamlit"],
    desc: "Interactive AI chatbot built with Generative AI and LangChain that simulates funny, sad and sarcastic personalities through advanced prompt engineering.",
    live: "https://ai-chatbot-afzajwxf2cbl9niigw8nje.streamlit.app/",
    gradient: "linear-gradient(135deg, oklch(0.7 0.18 200), oklch(0.45 0.2 220))",
  },
  {
    title: "Expense Tracker Mobile App",
    tag: "Mobile",
    stack: ["React Native","Expo","AsyncStorage"],
    desc: "Mobile expense management app with categorization, smooth React Navigation flows and secure local data persistence via Async Storage.",
    live: "https://expo.dev/accounts/hanishasarai/projects/MyFirstApp/builds/72faedb1-1200-4984-94d4-aac9a3c473aa",
    gradient: "linear-gradient(135deg, oklch(0.55 0.2 290), oklch(0.4 0.18 250))",
  },
  {
    title: "Real Estate Website",
    tag: "Web",
    stack: ["React","CSS","Backend"],
    desc: "Dynamic real estate platform showcasing properties with images, descriptions, pricing, search, filtering and inquiry forms backed by an admin workflow.",
    live: "https://leafy-starburst-f1115b.netlify.app/",
    gradient: "linear-gradient(135deg, oklch(0.45 0.12 240), oklch(0.3 0.08 260))",
  },
  {
    title: "Boat Website Clone",
    tag: "Full Stack",
    stack: ["HTML","CSS","JavaScript","Node.js"],
    desc: "Full stack clone of the boAt website with a Node.js backend powering product data and APIs, replicating the design, layout and user experience of the original.",
    live: "https://soft-druid-23e053.netlify.app/",
    gradient: "linear-gradient(135deg, oklch(0.5 0.15 210), oklch(0.35 0.12 250))",
  },
  {
    title: "Flower Shop Website",
    tag: "Full Stack",
    stack: ["HTML","CSS","JavaScript","SQL"],
    desc: "Full stack flower shop website backed by a SQL database for managing floral arrangements, bouquets and orders with elegant, responsive layouts.",
    live: "https://inquisitive-cuchufli-96df03.netlify.app/",
    gradient: "linear-gradient(135deg, oklch(0.65 0.18 350), oklch(0.5 0.15 320))",
  },
];

function Work() {
  return (
    <section id="work" className="px-4 lg:px-8 py-20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Selected Work</div>
            <h2 className="text-4xl lg:text-6xl font-extrabold tracking-tighter">Things I've shipped.</h2>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-4">
          {PROJECTS.map((p) => (
            <a
              key={p.title}
              href={p.live}
              target="_blank"
              rel="noreferrer"
              className={`group tile overflow-hidden relative block ${p.big ? "col-span-12 lg:col-span-8 lg:row-span-2 min-h-[520px]" : "col-span-12 sm:col-span-6 lg:col-span-4 min-h-[280px]"}`}
            >
              <div className="absolute inset-0 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" style={{ background: p.gradient }} />
              <div className="absolute inset-0 grid-bg opacity-20" />
              <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.16_0.02_250/0.9)] via-[oklch(0.16_0.02_250/0.3)] to-transparent" />

              <div className="relative h-full flex flex-col justify-between p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-white/80 bg-black/30 backdrop-blur px-2 py-1 rounded">{p.tag}</span>
                  <span className="size-10 rounded-full bg-white/10 backdrop-blur grid place-items-center text-white group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <ArrowUpRight className="size-4"/>
                  </span>
                </div>
                <div>
                  <h3 className={`font-extrabold tracking-tight text-white ${p.big ? "text-4xl lg:text-5xl" : "text-2xl"}`}>{p.title}</h3>
                  <p className={`text-white/80 mt-3 max-w-md text-sm leading-relaxed ${p.big ? "" : "line-clamp-3"}`}>{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4">
                    {p.stack.map(s => <span key={s} className="text-[11px] font-medium px-2 py-1 rounded-md bg-white/10 backdrop-blur text-white/90 border border-white/10">{s}</span>)}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white group-hover:text-primary-foreground">
                    <ExternalLink className="size-3.5"/> Visit live
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sending, setSending] = useState(false);
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); toast.success("Message sent! I'll get back to you soon."); (e.target as HTMLFormElement).reset(); }, 900);
  };
  return (
    <section id="contact" className="px-4 lg:px-8 py-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-12 gap-4">
        <div className="col-span-12 lg:col-span-5 tile p-8 lg:p-10 flex flex-col justify-between min-h-[520px] relative overflow-hidden">
          <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
          <div className="relative">
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-4">Contact</div>
            <h2 className="text-5xl lg:text-6xl font-extrabold tracking-tighter leading-[0.95]">
              Let's build<br/>something<br/><span className="text-gradient italic">extraordinary.</span>
            </h2>
          </div>
          <div className="relative space-y-4">
            {[
              { Icon: Mail, label: "Email", value: "hanishasarai1000@gmail.com", href: "mailto:hanishasarai1000@gmail.com" },
              { Icon: Phone, label: "Phone", value: "+91 93132 66561", href: "tel:9313266561" },
              { Icon: Linkedin, label: "LinkedIn", value: "hanisha sarai", href: "https://www.linkedin.com/in/hanisha-sarai-0a88752b6/" },
            ].map(({ Icon, label, value, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-4 py-3 border-b border-white/5 group hover:border-primary/40 transition-colors">
                <div className="flex items-center gap-3">
                  <Icon className="size-4 text-primary"/>
                  <div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</div>
                    <div className="font-medium text-sm">{value}</div>
                  </div>
                </div>
                <ArrowUpRight className="size-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all"/>
              </a>
            ))}
            <div className="flex items-center gap-2 text-xs text-muted-foreground pt-2">
              <MapPin className="size-3.5"/> Open to remote &amp; global opportunities
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="col-span-12 lg:col-span-7 tile-soft p-8 lg:p-10 space-y-5">
          <div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-primary mb-2">Send a message</div>
            <p className="text-muted-foreground text-sm">Have a project, role or idea? I'd love to hear about it.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</label>
              <Input required name="name" placeholder="Your name" className="mt-2 bg-white/5 border-white/10 rounded-xl h-12 focus-visible:border-primary"/>
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
              <Input required type="email" name="email" placeholder="you@email.com" className="mt-2 bg-white/5 border-white/10 rounded-xl h-12 focus-visible:border-primary"/>
            </div>
          </div>
          <div>
            <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
            <Textarea required name="message" placeholder="Tell me about your project…" rows={8} className="mt-2 bg-white/5 border-white/10 rounded-xl resize-none focus-visible:border-primary"/>
          </div>
          <Button type="submit" disabled={sending} size="lg" className="w-full rounded-full h-13 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold group">
            {sending ? "Sending…" : <>Send Message <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1"/></>}
          </Button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-4 lg:px-8 pb-8">
      <div className="max-w-[1400px] mx-auto tile p-8 flex flex-col md:flex-row gap-6 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="size-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
          <div>
            <div className="font-bold">Hanisha Sarai</div>
            <div className="text-xs text-muted-foreground font-mono">© {new Date().getFullYear()} · All rights reserved</div>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/hanisha-sarai-0a88752b6/" target="_blank" rel="noreferrer" className="size-10 grid place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors"><Linkedin className="size-4"/></a>
          <a href="mailto:hanishasarai1000@gmail.com" className="size-10 grid place-items-center rounded-full border border-white/10 hover:border-primary hover:text-primary transition-colors"><Mail className="size-4"/></a>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Nav />
      <main>
        <HeroBento />
        <Marquee />
        <About />
        <Stack />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Footer />
      <Toaster position="top-center" theme="dark" />
    </div>
  );
}
