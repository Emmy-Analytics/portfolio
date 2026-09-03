import React from "react";
import { createRoot } from "react-dom/client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import "./styles.css";

const projects = [
  {
    title: "Reducing Lost & Stuck Parcels through AI Sorting Monitoring",
    short: "Reducing Lost & Stuck Parcels through AI Sorting Monitoring",
    category: "LOGISTICS · OPERATIONS · AI",
    year: "Shopee Express 2026",
    image: `${import.meta.env.BASE_URL}shopee.png`,
    github: "https://github.com/Emmy-Analytics/shopee-warehouse-optimization",
  },
  {
    title: "Alfamart POS Transaction Data Analysis",
    short: "Improving Alfamart POS Data: Detecting Bulk Buying, Input Errors & Data Inconsistencies",
    category: "DATA QUALITY · POS ANALYTICS",
    year: "Alfamart 2026",
    image: `${import.meta.env.BASE_URL}alfamart.jpg`,
    github: "https://github.com/Emmy-Analytics/alfamart-pos-data-quality-analysis",
  },
  {
    title: "Tokopedia Purchase Conversion",
    short: "Increasing Purchase Conversion by 200% through Wishlist & Checkout Optimization",
    category: "E-COMMERCE · CONVERSION",
    year: "Tokopedia 2026",
    image: `${import.meta.env.BASE_URL}tokopedia.png`,
    github: "https://github.com/Emmy-Analytics/tokopedia-purchase-conversion",
  },
  {
    title: "Python Library Management System",
    short: "Python Library Management System",
    category: "PYTHON · CRUD · DATA MANAGEMENT",
    year: "Python 2026",
    image: `${import.meta.env.BASE_URL}python.png`,
    github: "https://github.com/Emmy-Analytics/python-library-management-system",
  },
];
const services = [
  "Exploratory Data Analysis",
  "Business Analytics",
  "Data Visualization",
  "Dashboard Development",
  "E-Commerce Analysis",
  "Logistics Analysis",
];

const clients = ["SHOPEE", "TOKOPEDIA", "LOGISTICS", "E-COMMERCE", "SMALL BUSINESS"];

function Visual({ type }) {
  if (type === "delivery") {
    return (
      <div className="visual visual-delivery">
        <div className="visual-window">
          <div className="window-top"><span /> <span /> <span /></div>
          <div className="window-title">DELIVERY PERFORMANCE</div>
          <div className="big-stat">91.8<span>%</span></div>
          <div className="bar-row">{[42, 68, 51, 86, 62, 92].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
        </div>
      </div>
    );
  }

  if (type === "shopee") {
    return (
      <div className="visual visual-shopee">
        <div className="orbit one" />
        <div className="orbit two" />
        <div className="orbit three" />
        <div className="orbit-center">SHOPEE<br /><small>DATA</small></div>
      </div>
    );
  }

  if (type === "tokopedia") {
    return (
      <div className="visual visual-tokopedia">
        <div className="line-grid" />
        <svg viewBox="0 0 600 300" preserveAspectRatio="none">
          <polyline points="0,240 70,210 120,220 180,160 240,180 300,125 360,150 420,80 490,110 550,45 600,65" />
        </svg>
        <span className="trend">+28.4%</span>
      </div>
    );
  }

  return (
    <div className="visual visual-dashboard">
      <div className="dash-card"><small>ORDERS</small><strong>12.8K</strong></div>
      <div className="dash-card"><small>RETURN</small><strong>4.2%</strong></div>
      <div className="dash-card"><small>SUCCESS</small><strong>91.8%</strong></div>
      <div className="dash-chart">{[30, 48, 42, 72, 58, 86, 67, 93].map((h, i) => <i key={i} style={{height: `${h}%`}} />)}</div>
    </div>
  );
}

const experience = [
  {
    company: "Hope Channel Indonesia",
    period: "May 2023 — Present",
    role: "Cashier & General Affair",
    description:
      "Supporting finance and office operations through petty cash management, vendor coordination, purchasing, and administrative support.",
    skills: [
      "Finance",
      "Operations",
      "Data Handling",
      "Coordination"
    ]
  },

  {
    company: "Hope Channel Indonesia",
    period: "Additional Role",
    role: "Media Presenter & Production Support",
    description:
      "Supporting television and digital productions as an on-camera presenter, program host, and production support.",
    skills: [
      "Public Speaking",
      "Presentation",
      "Production"
    ]
  },

  {
    company: "1000 Missionary Movement",
    period: "Feb 2021 — Mar 2023",
    role: "Editorial Coordinator | English Interpreter | Program Coordinator",
    description:
      "Coordinating programs and communication across participants, regional offices, and internal teams while supporting editorial and interpretation work.",
    skills: [
      "Communication",
      "Program Coordination",
      "Presentation",
      "Problem Solving"
    ]
  },

  {
    company: "1000 Missionary Movement",
    period: "Jan 2020 — Jan 2021",
    role: "Community Service Missionary",
    description:
      "Supporting community programs through education, communication, outreach, and coordination.",
    skills: [
      "Communication",
      "Adaptability",
      "Problem Solving",
      "Community"
    ]
  }
];

const education = [
  {
    school: "University of Leeds",
    period: "2022 — 2023",
    degree: "Master in Data Analytics and Human Resource Management",
    detail: "Macroeconomics, HR, data analytics, and time series analysis."
  },

  {
    school: "Institut Teknologi Sepuluh Nopember",
    period: "2017 — 2021",
    degree: "Industrial and System Engineering (S.T./B.Eng)",
    detail: "Thesis: Ergonomic management."
  }
];

const skills = [
  "Data Analysis",
  "Data Visualization",
  "Excel",
  "SQL",
  "Dashboard Development",
  "Public Speaking",
  "Presentation",
  "Communication",
  "Problem Solving"
];




function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [hovered, setHovered] = React.useState(null);
  const [cursorMode, setCursorMode] = React.useState("normal");

  /* =====================================
     CURSOR POSITION
  ===================================== */

  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);

  const smoothCursorX = useSpring(cursorX, {
    stiffness: 1800,
    damping: 45,
    mass: 0.12
  });

  const smoothCursorY = useSpring(cursorY, {
    stiffness: 1800,
    damping: 45,
    mass: 0.12
  });

  /* =====================================
     MOUSE MOVEMENT
  ===================================== */

  const pointerMove = (e) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
  };


  /* =====================================
     CURSOR MODES
  ===================================== */

  const activateCursor = (mode) => {
    setCursorMode(mode);
  };

  const resetCursor = () => {
    setCursorMode("normal");
  };

  /* =====================================
     NAVIGATION
  ===================================== */

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth"
    });

    setMenuOpen(false);
  };
  return (
    <div className="site" onPointerMove={pointerMove}>
      <motion.div
        className={`custom-cursor ${cursorMode}`}
        style={{
          x: smoothCursorX,
          y: smoothCursorY
        }}
      >
        {cursorMode === "object" && (
          <>
            <span>VIEW</span>
            <ArrowUpRight size={16} />
          </>
        )}
      </motion.div>


      <header className="nav">
        <button className="logo" onClick={() => go("home")}>EMMY JACKLYN PONTOAN</button>

        <nav className={menuOpen ? "open" : ""}>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("work")}
          >
            WORK
          </button>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("about")}
          >
            ABOUT
          </button>
          <button
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            onClick={() => go("contact")}
          >
            CONTACT
          </button>
        </nav>

        <button className="menu" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle navigation">
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </header>

      <main>
        <section id="home" className="billie-hero">
          
          <div className="hero-layout">
            <div className="hero-name">
              <motion.h1
                initial={{ y: 70, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              >
                DATA<br />
                <em>ANALYST.</em>
              </motion.h1>
            </div>

            <div className="hero-description">

              <div className="hero-photo">
                <img
                  src={`${import.meta.env.BASE_URL}emmy.jpeg`}
                  alt="Emmy Jacklyn Pontoan"
                />
              </div>

              <p>
                Turning data into actionable insights.
              </p>

              <button
                className="hero-primary"
                onClick={() => go("work")}
              >
                VIEW MY WORK
                <ArrowUpRight size={16} />
              </button>

            </div>
        
           
          </div>
          <span>BASED IN <strong>INDONESIA</strong></span>
          <button className="hero-scroll" onClick={() => go("work")}>SCROLL TO EXPLORE ↓</button>
        </section>

        <section id="work" className="work-billie">
          <div className="work-heading">
            <div>
              <span>PROJECTS 2026</span>
              <h2>Building<br /><em>data projects.</em></h2>
            </div>
            <p>Four practical projects across e-commerce, logistics, data quality, and Python. Open a project to see the work behind the result.</p>
          </div>

          <div className="project-list">
            {projects.map((p, i) => (
              <motion.article
                key={p.title}
                className={`project-row ${hovered === i ? "active" : ""}`}
                onMouseEnter={() => {
                  setHovered(i);
                  activateCursor("object");
                }}

                onMouseLeave={() => {
                  setHovered(null);
                  resetCursor();
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: .25 }}
                transition={{ duration: .65 }}
              >
                <div className="project-number">{String(i + 1).padStart(2, "0")}</div>
                <div className="project-visual">
                  <img src={p.image} alt={p.short} />
                </div>
                <div className="project-title">
                  <span>{p.category}</span>
                  <h3>{p.short}</h3>
                  <small>{p.year}</small>
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-arrow"
                  aria-label={`Open ${p.short} on GitHub`}
                >
                  <ArrowUpRight size={23} />
                </a>
              </motion.article>
            ))}
          </div>

          <div className="work-footer-note">Open for collaboration, new ideas, and more exciting projects.</div>
        </section>

        <section id="about" className="about-billie">

          <div className="about-top">
            <span>HELLO THERE</span>
          </div>

          <div className="about-card">

            <div className="about-card-title">
              <h2>
                I’m Emmy<br />
                <em>Jacklyn.</em>
              </h2>
            </div>

            <div className="about-card-content">

              <p className="about-lead">
                I’m learning to turn business questions into clear,
                useful data stories.
              </p>

              <p>
                My focus is on data analytics for e-commerce, logistics,
                and operations. I enjoy exploring patterns, building
                dashboards, and communicating findings in a way that
                helps people make better decisions.
              </p>

            </div>

            <div className="about-card-photo">
              <img
                src={`${import.meta.env.BASE_URL}profile.jpg`}
                alt="Emmy Jacklyn"
              />
            </div>

          </div>

        </section>


        
        <section id="currently" className="current">

        <div className="current-header">

          <h2>Resume</h2>
        </div>

        {/* EXPERIENCE */}
        <div className="resume-section">

          <div className="resume-section-title">
            EXPERIENCE
          </div>

          <div className="resume-timeline">

            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="resume-left">
                <strong>Hope Channel Indonesia</strong>

                <a
                  href="https://www.hopechannel.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-company-link"
                >
                  Hope Channel Indonesia ↗
                </a>

                <span>May 2023 — Present</span>
              </div>

              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>Cashier & General Affair</h3>

                <p>
                  Supporting daily finance and office operations through
                  petty cash management, vendor coordination, purchasing,
                  and administrative support.
                </p>

                <div className="resume-tags">
                  <span>Finance</span>
                  <span>Administration</span>
                  <span>Operations</span>
                  <span>Vendor Coordination</span>
                </div>
              </div>
            </motion.article>


            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="resume-left">
                <strong>Hope Channel Indonesia</strong>
                <span>Additional Role</span>
              </div>

              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>Media Presenter & Production Support</h3>

                <p>
                  Supported television and digital productions as an
                  on-camera presenter, program host, and production support.
                </p>

                <div className="resume-tags">
                  <span>Public Speaking</span>
                  <span>Presentation</span>
                  <span>Production</span>
                </div>
                <div className="resume-selected-work">
                  <small>SELECTED ON-SCREEN WORK</small>

                  <a
                    href="https://www.youtube.com/watch?v=W23JW0BiygM&t=658s"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inspirational Content Segment 1 ↗
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=P6tZdzatDys"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inspirational Content Segment 2 ↗
                  </a>

                  <a
                    href="https://www.youtube.com/watch?v=INNoBuVi9eQ"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Inspirational Content Segment 3 ↗
                  </a>
                </div>

              </div>
            </motion.article>


            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.16 }}
            >
              <div className="resume-left">
                <strong>1000 Missionary Movement</strong>

                <a
                  href="https://www.1000missionarymovement.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-company-link"
                >
                  1000 Missionary Movement ↗
                </a>

                <span>Feb 2021 — Mar 2023</span>
              </div>

              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>
                  Editorial Coordinator | English Interpreter |
                  Program Coordinator
                </h3>

                <p>
                  Coordinated programs and communication across participants,
                  regional offices, and internal teams while supporting
                  editorial processes and interpretation.
                </p>

                <div className="resume-tags">
                  <span>Communication</span>
                  <span>Program Coordination</span>
                  <span>English–Indonesian</span>
                  <span>Editorial</span>
                </div>
                <div className="resume-selected-work">
                  <small>SELECTED WORK</small>

                  <a
                    href="https://www.youtube.com/watch?v=ZtiNWyWvejE"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Program Opening & Community Event ↗
                  </a>
                </div>
              </div>
            </motion.article>


            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.24 }}
            >
              <div className="resume-left">
                <strong>1000 Missionary Movement</strong>
                <span>Jan 2020 — Jan 2021</span>
              </div>

              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>Community Service Missionary</h3>

                <p>
                  Supported local communities through education,
                  communication, outreach, and coordination.
                </p>

                <div className="resume-tags">
                  <span>Community</span>
                  <span>Communication</span>
                  <span>Adaptability</span>
                  <span>Problem Solving</span>
                </div>

                <div className="resume-selected-work">
                  <small>SELECTED WORK</small>

                  <a
                    href="https://www.linkedin.com/in/emmy-jacklyn-pontoan/overlay/Position/2967263169/treasury/?profileId=ACoAAGpeGuQBKi8wy1v5WwfuqeeaUy0_iELL_ao"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Service work in NTT, Indonesia ↗
                  </a>
                </div>
              </div>
              
            </motion.article>

          </div>
        </div>


        {/* EDUCATION */}
        <div className="resume-section">

          <div className="resume-section-title">
            EDUCATION
          </div>

          <div className="resume-timeline">

            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <div className="resume-left">
                <strong>Purwadhika Digital Technology School</strong>
                <a
                  href="https://www.purwadhika.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-company-link"
                >
                  Purwadhika Digital Technology School ↗
                </a>
                <span>In Progress · 2026</span>
              </div>
              
              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>Business and Data Analyst Bootcamp</h3>

                <p>
                  Building practical skills in Python, SQL, Excel,
                  business analytics, data preparation, exploratory
                  analysis, and data-driven problem solving.
                </p>
              </div>
            </motion.article>


            <motion.article
              className="resume-item"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.08 }}
            >
              <div className="resume-left">
                <strong>Universitas Negeri Manado</strong>
                <a
                  href="https://www.unima.ac.id/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-company-link"
                >
                  Universitas Negeri Manado ↗
                </a>
                <span>2014 — 2019</span>
              </div>

              <div className="resume-dot"></div>

              <div className="resume-right">
                <h3>
                  Bachelor of Education —
                  Mathematics Teacher Education
                </h3>

                <p>GPA 3.30</p>
              </div>
            </motion.article>

          </div>
        </div>


        {/* SKILLS */}
        <div className="resume-section">

          <div className="resume-section-title">
            SKILLS
          </div>

          <div className="resume-tags resume-skills">
            <span>Data Analysis</span>
            <span>Communication</span>
            <span>Python</span>
            <span>Public Speaking</span>
            <span>Excel</span>
            <span>Teamwork</span>
            <span>SQL</span>
            <span>Presentation</span>
            <span>Data Visualization</span>
            <span>Problem Solving</span>
          </div>

        </div>

      </section>

        <section id="contact" className="contact-billie">
          <div className="contact-intro">
            Have a data<br />
            project in mind?
          </div>
          <motion.a
            href="https://wa.me/6282195670441"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => activateCursor("object")}
            onMouseLeave={resetCursor}
            className="contact-title"
            animate={{
              color: cursorMode === "object" ? "#A9C9FF" : "#F7F9FF",
            }}
            transition={{
              duration: 0.25,
              ease: "easeOut",
            }}
          >
            <span className="contact-title-main">Let’s talk</span>

            <span className="contact-title-sub">
              CHAT WITH ME <ArrowUpRight size={18} />
            </span>
          </motion.a>
          <div className="contact-bottom">
            <div>
              <a href="https://www.linkedin.com/in/emmy-jacklyn-pontoan/">LINKEDIN</a>
              <a href="https://github.com/Emmy-Analytics">GITHUB</a>
              <a href="mailto:emmpontoan@gmail.com">EMAIL</a>
            </div>
            <div>
              <span>BASED IN INDONESIA</span>
              <span>OPEN TO MORE DATA ANALYST OPPORTUNITIES</span>
            </div>
          </div>
          <div className="contact-cta">
            
            <a href="mailto:emmpontoan@gmail.com">LET’S CONNECT <ArrowUpRight size={18} /></a>
          </div>
        </section>
      </main>

      <footer className="footer-billie">
        <span>2026 © EMMY JACKLYN PONTOAN</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);



