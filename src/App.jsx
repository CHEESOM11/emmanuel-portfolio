import React, { useState } from 'react';
import { ArrowUpRight, Github, Mail, MapPin, Menu, X, Code2, Database, Server, Terminal, GraduationCap, BriefcaseBusiness } from 'lucide-react';

const email = 'ofuluechisom10@gmail.com';
const github = 'https://github.com/CHEESOM11';
const projects = [
  {
    no: '01', name: 'Auto Chronicle', category: 'Automotive management platform',
    description: 'A team-built application for managing vehicle information, maintenance issues, repairs, expenses and fleet activity. I contributed to backend API development and service logic.',
    work: ['Worked on REST API endpoints for vehicle and maintenance workflows.', 'Used NestJS, TypeScript, Supabase and PostgreSQL.', 'Contributed to authentication, access control, validation and error handling.'],
    stack: ['NestJS', 'TypeScript', 'Supabase', 'PostgreSQL'],
    url: 'https://github.com/whuraolar-ctrl/Auto-Chronicle'
  },
  {
    no: '02', name: 'Huddle', category: 'Team collaboration and messaging project',
    description: 'A collaborative project with backend functionality for channels and message retrieval, using authenticated API requests.',
    work: ['Worked on backend channel and messaging functionality.', 'Contributed to protected message-retrieval endpoints.', 'Used controller and service layers with bearer-token authentication.'],
    stack: ['NestJS', 'TypeScript', 'REST APIs', 'Authentication'],
    url: 'https://github.com/CHEESOM11/huddle'
  }
];
const skillGroups = [
  { icon: <Code2 />, title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { icon: <Server />, title: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs'] },
  { icon: <Database />, title: 'Data & Auth', items: ['PostgreSQL', 'Supabase', 'Supabase Auth'] },
  { icon: <Terminal />, title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] }
];

function Heading({ label, title, detail }) {
  return <div className="heading"><span className="eyebrow">{label}</span><h2>{title}</h2>{detail && <p>{detail}</p>}</div>;
}

export default function App() {
  const [open, setOpen] = useState(false);
  const nav = ['About', 'Skills', 'Projects', 'Journey', 'Contact'];
  return <>
    <header className="header">
      <a className="logo" href="#home"><b>CO</b> Emmanuel<span>.</span></a>
      <button className="menu" aria-label="Toggle menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      <nav className={open ? 'nav show' : 'nav'}>{nav.map(n => <a key={n} href={'#'+n.toLowerCase()} onClick={() => setOpen(false)}>{n}</a>)}<a className="nav-github" href={github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={15}/></a></nav>
    </header>
    <main>
      <section className="hero wrap" id="home">
        <div>
          <div className="availability"><i/> OPEN TO JUNIOR BACKEND OPPORTUNITIES</div>
          <p className="hello">Hello, I'm</p>
          <h1>Emmanuel Chisom <span>Ofulue.</span></h1>
          <h2>I build the logic <em>behind the product.</em></h2>
          <p className="intro">I'm an early-career backend developer focused on building APIs, working with databases, and creating reliable server-side features. I enjoy learning by building practical software with a team.</p>
          <div className="actions"><a className="btn primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a><a className="btn secondary" href={`mailto:${email}`}>Get in touch <Mail size={17}/></a></div>
          <div className="meta"><span><MapPin size={15}/> Ikeja, Lagos, Nigeria</span><a href={github} target="_blank" rel="noreferrer"><Github size={15}/> GitHub</a></div>
        </div>
        <div className="visual"><div className="glow"/><div className="code">
          <div className="codebar"><span>● ● ●</span> backend.ts</div>
          <pre><span>01</span> <b>const</b> developer = {'{'}{ '\\n' }<span>02</span>   name: <i>'Emmanuel'</i>,{ '\\n' }<span>03</span>   focus: <i>'Backend'</i>,{ '\\n' }<span>04</span>   stack: [{ '\\n' }<span>05</span>     <i>'Node.js'</i>,{ '\\n' }<span>06</span>     <i>'NestJS'</i>,{ '\\n' }<span>07</span>     <i>'PostgreSQL'</i>{ '\\n' }<span>08</span>   ],{ '\\n' }<span>09</span>   building: <strong>true</strong>{ '\\n' }<span>10</span> {'}'};</pre>
          <small>// Always learning. Always building.</small>
        </div><div className="float f1"><Server size={16}/> API Development</div><div className="float f2"><Database size={16}/> Data & Databases</div></div>
      </section>

      <section className="wrap section" id="about"><Heading label="A LITTLE ABOUT ME" title="Curious by nature. Backend by focus."/>
        <div className="about-grid"><h3>My journey into software engineering is driven by curiosity, problem-solving and a desire to understand how applications work behind the scenes.</h3><div><p>I am developing my skills in JavaScript, TypeScript and backend engineering through hands-on projects and structured learning. I have worked with a team to build features involving APIs, authentication, database integration and application workflows.</p><p>I value clear communication, teamwork and continuous improvement. I'm looking for opportunities to contribute, learn from experienced engineers and grow as a backend developer.</p></div></div>
      </section>

      <section className="wrap section" id="skills"><Heading label="MY TOOLKIT" title="Skills & technologies" detail="Technologies and tools I have used in my learning and project work."/>
        <div className="skills">{skillGroups.map(g => <article className="skill" key={g.title}><div>{g.icon}</div><h3>{g.title}</h3><div className="tags">{g.items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div>
      </section>

      <section className="wrap section" id="projects"><Heading label="SELECTED WORK" title="Projects I've contributed to" detail="Collaborative projects where I have applied and developed my backend engineering skills."/>
        <div className="project-list">{projects.map(p=><article className="project" key={p.no}><div className="project-label"><span>{p.no} / PROJECT</span><small>{p.category}</small></div><div className="project-grid"><div><h3>{p.name}</h3><p>{p.description}</p><div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div></div><div className="contrib"><h4>MY CONTRIBUTIONS</h4><ul>{p.work.map(w=><li key={w}>{w}</li>)}</ul><a className="text-link" href={p.url} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={16}/></a></div></div></article>)}</div>
      </section>

      <section className="wrap section" id="journey"><Heading label="LEARNING & EXPERIENCE" title="My journey so far"/>
        <div className="timeline">
          <article><div className="timeline-icon"><GraduationCap/></div><div><small>SEPTEMBER 2025 – NOVEMBER 2026</small><h3>Diploma in Backend Engineering</h3><h4>AltSchool Africa · Tinyuka 2025 Cohort</h4><p>Currently completing structured backend engineering training, including practical team projects and hands-on software development.</p></div></article>
          <article><div className="timeline-icon"><BriefcaseBusiness/></div><div><small>JUNE 2024 – JUNE 2025</small><h3>Teacher · NYSC Corps Member</h3><h4>Akmaas Model College</h4><p>Taught Biology, Economics and Basic Science, maintained academic records and worked with colleagues to support student learning.</p></div></article>
          <article><div className="timeline-icon"><GraduationCap/></div><div><small>2019 – 2023</small><h3>B.Sc. Zoology</h3><h4>Federal University of Agriculture, Abeokuta</h4><p>Developed research, analytical reasoning and record-keeping skills through academic work and undergraduate research.</p></div></article>
        </div>
      </section>

      <section className="contact" id="contact"><div className="wrap contact-inner"><span className="eyebrow">LET'S CONNECT</span><h2>Have a project or opportunity<br/><em>in mind?</em></h2><p>I'm open to junior backend opportunities, collaboration and conversations about building useful software.</p><a className="btn primary" href={`mailto:${email}`}>Say hello <Mail size={17}/></a><div className="contact-links"><a href={`mailto:${email}`}><Mail size={17}/>{email}</a><a href={github} target="_blank" rel="noreferrer"><Github size={17}/>GitHub profile <ArrowUpRight size={14}/></a></div></div></section>
    </main>
    <footer className="footer wrap"><a className="logo" href="#home"><b>CO</b> Emmanuel<span>.</span></a><p>Built by Emmanuel Chisom Ofulue · © {new Date().getFullYear()}</p><a href="#home">Back to top ↑</a></footer>
  </>;
}
