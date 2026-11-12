import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Github, Mail, MapPin, Menu, X, Code2, Database, Server, Terminal, GraduationCap, BriefcaseBusiness } from 'lucide-react';

const email = 'ofuluechisom10@gmail.com';
const github = 'https://github.com/CHEESOM11';

const projects = [
  {
    no: '01',
    name: 'Auto Chronicle',
    category: 'Automotive management platform',
    description: 'A team-built application for managing vehicle information, maintenance issues, repairs, expenses and fleet activity. I contributed to the backend API and service logic.',
    work: [
      'Built REST API endpoints for vehicle and maintenance workflows.',
      'Contributed to authentication, access control, validation and error handling.',
    ],
    stack: ['NestJS', 'TypeScript', 'Supabase', 'PostgreSQL'],
    url: 'https://github.com/whuraolar-ctrl/Auto-Chronicle',
  },
  {
    no: '02',
    name: 'Huddle',
    category: 'Team collaboration and messaging',
    description: 'A collaborative messaging project with backend support for channels and message retrieval, secured with authenticated API requests.',
    work: [
      'Built backend channel and messaging functionality.',
      'Added protected message-retrieval endpoints using bearer-token authentication.',
    ],
    stack: ['NestJS', 'TypeScript', 'REST APIs', 'Authentication'],
    url: 'https://github.com/CHEESOM11/huddle',
  },
];

const skillGroups = [
  { icon: <Code2 size={20} />, title: 'Languages', items: ['JavaScript', 'TypeScript'] },
  { icon: <Server size={20} />, title: 'Backend', items: ['Node.js', 'NestJS', 'REST APIs'] },
  { icon: <Database size={20} />, title: 'Data & Auth', items: ['PostgreSQL', 'Supabase', 'Supabase Auth'] },
  { icon: <Terminal size={20} />, title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
];

const experience = [
  {
    icon: <GraduationCap size={18} />,
    period: 'Sep 2025 – Nov 2026',
    title: 'Diploma in Backend Engineering',
    org: 'AltSchool Africa · Tinyuka 2025 Cohort',
    text: 'Structured backend training with practical team projects and hands-on software development.',
  },
  {
    icon: <BriefcaseBusiness size={18} />,
    period: 'Jun 2024 – Jun 2025',
    title: 'Teacher · NYSC Corps Member',
    org: 'Akmaas Model College',
    text: 'Taught Biology, Economics and Basic Science, maintained academic records and worked with colleagues to support student learning.',
  },
  {
    icon: <GraduationCap size={18} />,
    period: '2019 – 2023',
    title: 'B.Sc. Zoology',
    org: 'Federal University of Agriculture, Abeokuta',
    text: 'Built research, analytical reasoning and record-keeping skills through coursework and undergraduate research.',
  },
];

const navItems = [
  { label: 'About', id: 'about' },
  { label: 'Skills', id: 'skills' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Contact', id: 'contact' },
];

function SectionHead({ eyebrow, title, detail }) {
  return (
    <header className="section-head reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {detail && <p>{detail}</p>}
    </header>
  );
}

function useReveal() {
  useEffect(() => {
    const items = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      items.forEach((el) => el.classList.add('is-visible'));
      return undefined;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  useReveal();

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <header className="header">
        <div className="header-inner wrap">
          <a className="logo" href="#top" onClick={closeMenu}>
            <span className="logo-mark">CO</span>
            <span>Emmanuel Ofulue</span>
          </a>

          <button
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="site-nav"
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav id="site-nav" className={menuOpen ? 'nav open' : 'nav'} aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} onClick={closeMenu}>
                {item.label}
              </a>
            ))}
            <a className="nav-github" href={github} target="_blank" rel="noreferrer" onClick={closeMenu}>
              GitHub <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="wrap hero-grid">
            <div className="hero-copy">
              <p className="status reveal">
                <span className="status-dot" aria-hidden="true" />
                Open to junior backend opportunities
              </p>
              <h1 className="reveal">
                Emmanuel Chisom <span>Ofulue</span>
              </h1>
              <p className="hero-lede reveal">
                I build the server-side logic behind products: APIs, authentication and database-backed features,
                written in TypeScript with NestJS and PostgreSQL.
              </p>
              <div className="actions reveal">
                <a className="btn primary" href="#projects">
                  View projects <ArrowUpRight size={17} />
                </a>
                <a className="btn ghost" href={`mailto:${email}`}>
                  <Mail size={17} /> Email me
                </a>
              </div>
            </div>

            <aside className="now-card reveal" aria-label="Current snapshot">
              <dl>
                <div>
                  <dt>Currently</dt>
                  <dd>Diploma in Backend Engineering, AltSchool Africa</dd>
                </div>
                <div>
                  <dt>Focus</dt>
                  <dd>NestJS, REST APIs, PostgreSQL, Supabase</dd>
                </div>
                <div>
                  <dt>Based in</dt>
                  <dd>
                    <MapPin size={14} /> Ikeja, Lagos, Nigeria
                  </dd>
                </div>
                <div>
                  <dt>Code</dt>
                  <dd>
                    <a href={github} target="_blank" rel="noreferrer">
                      github.com/CHEESOM11 <ArrowUpRight size={14} />
                    </a>
                  </dd>
                </div>
              </dl>
            </aside>
          </div>
        </section>

        <section className="section wrap" id="about">
          <SectionHead eyebrow="About" title="Curious about how applications work behind the scenes." />
          <div className="about">
            <p className="about-lead reveal">
              My path into software engineering is driven by problem-solving and a wish to understand what happens
              between a request and a response.
            </p>
            <div className="about-body reveal">
              <p>
                I'm developing my skills in JavaScript, TypeScript and backend engineering through hands-on projects
                and structured learning. I have worked with a team on features involving APIs, authentication,
                database integration and application workflows.
              </p>
              <p>
                I'm looking for a junior backend role where I can contribute, learn from experienced engineers and
                keep getting better at building reliable software.
              </p>
            </div>
          </div>
        </section>

        <section className="section wrap" id="skills">
          <SectionHead
            eyebrow="Skills"
            title="Tools I use to build and ship backend services"
            detail="Technologies I have used in my training and project work."
          />
          <div className="skills">
            {skillGroups.map((group) => (
              <article className="skill-card reveal" key={group.title}>
                <div className="skill-icon">{group.icon}</div>
                <h3>{group.title}</h3>
                <ul className="tags">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="projects">
          <SectionHead
            eyebrow="Projects"
            title="Team projects where I built backend features"
            detail="Collaborative work where I applied and developed my backend engineering skills."
          />
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.no}>
                <div className="project-meta">
                  <span className="num">{project.no}</span>
                  <span>{project.category}</span>
                </div>
                <div className="project-body">
                  <div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className="tags">
                      {project.stack.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="contrib">
                    <h4>My contributions</h4>
                    <ul>
                      {project.work.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ul>
                    <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                      View repository <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section wrap" id="experience">
          <SectionHead eyebrow="Experience" title="Training, teaching and study" />
          <ol className="timeline">
            {experience.map((item) => (
              <li className="timeline-item reveal" key={item.title}>
                <span className="timeline-icon">{item.icon}</span>
                <p className="period num">{item.period}</p>
                <h3>{item.title}</h3>
                <p className="org">{item.org}</p>
                <p className="timeline-text">{item.text}</p>
              </li>
            ))}
          </ol>
        </section>

        <section className="contact" id="contact">
          <div className="wrap contact-inner reveal">
            <span className="eyebrow">Contact</span>
            <h2>
              Have a backend role or project <em>in mind?</em>
            </h2>
            <p>I'm open to junior backend roles, collaboration and conversations about building useful software.</p>
            <a className="btn primary" href={`mailto:${email}`}>
              Say hello <Mail size={17} />
            </a>
            <div className="contact-links">
              <a href={`mailto:${email}`}>
                <Mail size={16} /> {email}
              </a>
              <a href={github} target="_blank" rel="noreferrer">
                <Github size={16} /> GitHub profile <ArrowUpRight size={14} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <p>Emmanuel Chisom Ofulue · © {new Date().getFullYear()}</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
