import { useState } from "react";
import "../styles/Careers.css";
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const ROLES = [
  {
    id: 1,
    title: "Senior Brand Designer",
    dept: "Design",
    type: "Full-time",
    location: "Remote",
    tag: "HOT",
    desc: "Shape the visual identity of world-class brands. You'll lead brand systems, collaborate with strategy, and craft work that lives in the real world.",
    skills: ["Brand Identity", "Typography", "Figma", "Art Direction"],
  },
  {
    id: 2,
    title: "Motion Designer",
    dept: "Design",
    type: "Full-time",
    location: "Hybrid · Chennai",
    tag: "NEW",
    desc: "Bring ideas to life through motion. From micro-interactions to full campaign animations, you'll define how our work moves.",
    skills: ["After Effects", "Cinema 4D", "Lottie", "Figma"],
  },
  {
    id: 3,
    title: "Frontend Engineer",
    dept: "Engineering",
    type: "Full-time",
    location: "Remote",
    tag: "HOT",
    desc: "Build the interfaces that power premium digital experiences. You care about performance, animation, and pixel-perfect implementation.",
    skills: ["React", "TypeScript", "CSS", "GSAP"],
  },
  {
    id: 4,
    title: "Copywriter & Strategist",
    dept: "Strategy",
    type: "Full-time",
    location: "Remote",
    tag: null,
    desc: "Words that work. You'll craft messaging for brand launches, campaigns, and digital platforms — always rooted in strategy.",
    skills: ["Brand Voice", "UX Writing", "Campaigns", "Storytelling"],
  },
  {
    id: 5,
    title: "Project Manager",
    dept: "Operations",
    type: "Full-time",
    location: "Hybrid · Chennai",
    tag: null,
    desc: "Keep complex, multi-discipline projects moving. You're the connective tissue between clients, creatives, and engineers.",
    skills: ["Agile", "Client Relations", "Notion", "Risk Management"],
  },
  {
    id: 6,
    title: "Creative Intern",
    dept: "Design",
    type: "Internship",
    location: "Chennai",
    tag: "NEW",
    desc: "Your first step into a studio that doesn't do boring. Bring curiosity, hunger, and a portfolio that shows what you're made of.",
    skills: ["Figma", "Illustration", "Curiosity", "Drive"],
  },
];

const DEPTS = ["All", "Design", "Engineering", "Strategy", "Operations"];

const PERKS = [
  { icon: "🌍", title: "Remote First", desc: "Work from anywhere. We care about output, not office hours." },
  { icon: "📈", title: "Equity", desc: "Own a piece of what we're building. Everyone gets skin in the game." },
  { icon: "🎓", title: "Learning Budget", desc: "₹50K/year for courses, books, conferences — whatever sharpens you." },
  { icon: "🏥", title: "Health Cover", desc: "Comprehensive medical for you and your immediate family." },
  { icon: "🕐", title: "Async Culture", desc: "No pointless meetings. Deep work is protected and respected." },
  { icon: "✈️", title: "Team Offsites", desc: "Twice-yearly retreats to recharge, bond, and do great work together." },
];

export default function Careers({ onBack, onNavigate }) {
  const [activeDept, setActiveDept] = useState("All");
  const [openRole, setOpenRole] = useState(null);
  const [applied, setApplied] = useState(new Set());

  const filtered = activeDept === "All"
    ? ROLES
    : ROLES.filter((r) => r.dept === activeDept);

  const handleApply = (id) => {
    setApplied((prev) => new Set([...prev, id]));
    setOpenRole(null);
  };

  return (
    <>

      <div className="careers-page">
        <div className="careers-glow" aria-hidden="true" />
        <div className="careers-back-wrapper">
          <button className="careers-back-btn" onClick={onBack}>
            ←
          </button>
        </div>

        {/* rest of your sections... */}

        {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
        <section className="careers-hero">
          <div className="careers-hero-eyebrow">
            <span className="careers-dot" />
            WE'RE HIRING
          </div>

          <h1 className="careers-hero-title">
            Build the future<br />
            <span className="careers-hero-accent">with us.</span>
          </h1>

          <p className="careers-hero-sub">
            Ryzeworks is a creative studio obsessed with craft. We build brands,
            digital products, and campaigns that people actually remember.
            If that excites you — keep reading.
          </p>

          <div className="careers-hero-stats">
            <div className="careers-stat">
              <span className="careers-stat-num">6</span>
              <span className="careers-stat-label">Open Roles</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat">
              <span className="careers-stat-num">4</span>
              <span className="careers-stat-label">Departments</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat">
              <span className="careers-stat-num">100%</span>
              <span className="careers-stat-label">Remote Friendly</span>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════
          PERKS
      ══════════════════════════════ */}
        <section className="careers-perks">
          <p className="careers-section-label">WHY RYZEWORKS</p>
          <h2 className="careers-section-title">Built for people<br />who do great work.</h2>
          <div className="careers-perks-grid">
            {PERKS.map((perk) => (
              <div className="careers-perk-card" key={perk.title}>
                <span className="careers-perk-icon">{perk.icon}</span>
                <h3 className="careers-perk-title">{perk.title}</h3>
                <p className="careers-perk-desc">{perk.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
          ROLES
      ══════════════════════════════ */}
        <section className="careers-roles">
          <div className="careers-roles-header">
            <div>
              <p className="careers-section-label">OPEN POSITIONS</p>
              <h2 className="careers-section-title">Find your role.</h2>
            </div>

            {/* Filter tabs */}
            <div className="careers-filter">
              {DEPTS.map((d) => (
                <button
                  key={d}
                  className={`careers-filter-btn ${activeDept === d ? "active" : ""}`}
                  onClick={() => setActiveDept(d)}
                >
                  {d}
                </button>
              ))}
            </div>
          </div>

          <div className="careers-roles-list">
            {filtered.map((role) => (
              <div
                className={`careers-role-card ${openRole === role.id ? "expanded" : ""}`}
                key={role.id}
              >
                <div
                  className="careers-role-top"
                  onClick={() => setOpenRole(openRole === role.id ? null : role.id)}
                >
                  <div className="careers-role-left">
                    <div className="careers-role-title-row">
                      <h3 className="careers-role-title">{role.title}</h3>
                      {role.tag && (
                        <span className={`careers-role-tag ${role.tag === "HOT" ? "hot" : "new"}`}>
                          {role.tag}
                        </span>
                      )}
                    </div>
                    <div className="careers-role-meta">
                      <span>{role.dept}</span>
                      <span className="careers-meta-dot">·</span>
                      <span>{role.type}</span>
                      <span className="careers-meta-dot">·</span>
                      <span>{role.location}</span>
                    </div>
                  </div>
                  <div className="careers-role-right">
                    <div className="careers-role-chevron">
                      {openRole === role.id ? "−" : "+"}
                    </div>
                  </div>
                </div>

                {/* Expanded body */}
                {openRole === role.id && (
                  <div className="careers-role-body">
                    <p className="careers-role-desc">{role.desc}</p>
                    <div className="careers-role-skills">
                      {role.skills.map((s) => (
                        <span className="careers-skill-chip" key={s}>{s}</span>
                      ))}
                    </div>
                    <button
                      className={`careers-apply-btn ${applied.has(role.id) ? "applied" : ""}`}
                      onClick={() => handleApply(role.id)}
                      disabled={applied.has(role.id)}
                    >
                      {applied.has(role.id) ? "✓ Application Sent" : "Apply for this role →"}
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════
          CTA BANNER
      ══════════════════════════════ */}
        <section className="careers-cta">
          <div className="careers-cta-inner">
            <p className="careers-section-label">DON'T SEE YOUR ROLE?</p>
            <h2 className="careers-cta-title">
              Send us your work anyway.
            </h2>
            <p className="careers-cta-sub">
              We're always on the lookout for exceptional people. Drop us a line
              with your portfolio and we'll be in touch when the right moment comes.
            </p>
            <a href="mailto:hello@ryzeworks.com" className="careers-cta-btn">
              hello@ryzeworks.com ↗
            </a>
          </div>
        </section>

      </div>
      <Footer />
    </>
  );
}