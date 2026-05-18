import { useState } from "react";
import "../styles/Careers.css";
// import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const ROLES = [
  {
    id: 1,
    title: "Video Editor",
    dept: "Creative & Visuals",
    type: "Full Time / Part Time",
    location: "Remote Available",
    tag: "HOT",
    desc: "We’re looking for editors who understand rhythm, storytelling, and visual impact — not just cuts and transitions. Strong command over Premiere Pro, After Effects, and DaVinci Resolve is expected, along with a sharp creative instinct and cinematic taste.",
    skills: [
      "Video Editing",
      "Motion Graphics",
      "Color Grading",
      "Audio Editing",
      "Storytelling",
      "Adobe Premiere Pro",
      "DaVinci Resolve",
    ],
  },

  {
    id: 2,
    title: "Video Editing Intern",
    dept: "Creative & Visuals",
    type: "3 Months / 6 Months / 12 Months",
    location: "Offline",
    tag: "NEW",
    desc: "For individuals obsessed with visuals, storytelling, and content culture. You’ll work alongside creators, learn modern editing workflows, and develop industry-level creative execution abilities. Performance-based stipend available.",
    skills: [
      "Video Editing",
      "Storytelling",
      "Content Creation",
      "Color Grading",
      "Audio Editing",
      "Creative Thinking",
    ],
  },

  {
    id: 3,
    title: "Graphic Design Intern",
    dept: "Creative & Visuals",
    type: "3 Months / 6 Months / 12 Months",
    location: "Offline",
    tag: "HOT",
    desc: "We’re looking for creatively driven individuals with a strong interest in branding, visual systems, and digital aesthetics. Ideal for designers who want to move beyond templates and build impactful visual communication. Performance-based stipend available.",
    skills: [
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Graphic Design",
      "Typography",
      "Branding",
      "Creativity",
    ],
  },

  {
    id: 4,
    title: "Motion Graphics Designer",
    dept: "Creative & Visuals",
    type: "Full Time / Part Time",
    location: "Remote Available",
    tag: "HOT",
    desc: "Looking for designers skilled in creating visually engaging motion graphics, animated visuals, transitions, and digital content for brands and campaigns. Knowledge in After Effects, animation principles, typography motion, and visual storytelling is preferred.",
    skills: [
      "After Effects",
      "Motion Graphics",
      "Animation",
      "Typography Motion",
      "Visual Storytelling",
      "Creative Design",
    ],
  },

  {
    id: 5,
    title: "2D / 3D Animation Intern",
    dept: "Creative & Visuals",
    type: "3 Months / 6 Months / 12 Months",
    location: "Offline",
    tag: "NEW",
    desc: "We’re looking for creatively driven individuals passionate about motion, animation, and visual storytelling. Ideal for artists who want to explore modern 2D/3D workflows, cinematic motion design, and high-impact visual experiences across digital platforms. Performance-based stipend available.",
    skills: [
      "Blender",
      "2D Animation",
      "3D Animation",
      "Motion Design",
      "After Effects",
      "Visual Storytelling",
    ],
  },

  {
    id: 6,
    title: "Videography & Photography Intern",
    dept: "Production & Storytelling",
    type: "3 Months / 6 Months / 12 Months",
    location: "Offline",
    tag: "HOT",
    desc: "We are looking for passionate individuals interested in visual storytelling, cinematography, and creative content production. You will work on shoots, brand campaigns, social media productions, and creative visual projects alongside the creative team. Performance-based stipend available.",
    skills: [
      "Photography",
      "Videography",
      "Lighting",
      "Composition",
      "Cinematography",
      "Creative Production",
    ],
  },

  {
    id: 7,
    title: "Videographer & Photographer",
    dept: "Production & Storytelling",
    type: "Full Time / Part Time",
    location: "Remote Available",
    tag: "HOT",
    desc: "Seeking creators with a refined visual language, cinematic framing, and a strong understanding of storytelling through motion and stills. We value taste, composition, energy, and originality.",
    skills: [
      "Videography",
      "Photography",
      "Cinematic Framing",
      "Storytelling",
      "Lighting",
      "Composition",
    ],
  },

  {
    id: 8,
    title: "Director of Photography (DOP)",
    dept: "Production & Storytelling",
    type: "Full Time / Part Time",
    location: "Remote Available",
    tag: "HOT",
    desc: "We are looking for a creative and technically skilled DOP who can bring cinematic vision to life through lighting, camera movement, framing, and storytelling.",
    skills: [
      "Cinematography",
      "Camera Handling",
      "Lighting Setup",
      "Shot Composition",
      "Visual Storytelling",
      "Production Execution",
    ],
  },

  {
    id: 9,
    title: "Script Writing Intern",
    dept: "Production & Storytelling",
    type: "3 Months / 6 Months / 12 Months",
    location: "Offline",
    tag: "NEW",
    desc: "We are looking for creative thinkers and storytellers who can develop engaging scripts, concepts, and storytelling ideas for digital content, advertisements, reels, campaigns, and brand communication. Performance-based stipend available.",
    skills: [
      "Script Writing",
      "Storytelling",
      "Creative Thinking",
      "Content Planning",
      "Audience Engagement",
      "Communication",
    ],
  },

  {
    id: 10,
    title: "Content Writing Intern",
    dept: "Content & Communication",
    type: "3 Months / 6 Months / 12 Months",
    location: "Remote Available",
    tag: "NEW",
    desc: "We’re looking for writers who can think beyond words — individuals who understand brand voice, storytelling, audience psychology, and impactful communication across digital platforms. Performance-based stipend available.",
    skills: [
      "Content Writing",
      "Brand Voice",
      "Storytelling",
      "Audience Psychology",
      "Creative Communication",
      "SEO Writing",
    ],
  },

  {
    id: 11,
    title: "Creative Content Strategist",
    dept: "Content & Communication",
    type: "Full Time / Part Time",
    location: "Remote Available",
    tag: "HOT",
    desc: "We are looking for individuals who understand modern content culture, storytelling, branding, and audience psychology. The role involves developing creative campaign ideas, content direction, storytelling strategies, and communication concepts for brands and digital platforms.",
    skills: [
      "Content Strategy",
      "Branding",
      "Creative Campaigns",
      "Storytelling",
      "Social Media",
      "Audience Psychology",
    ],
  },

  {
    id: 12,
    title: "Digital Marketing Intern",
    dept: "Marketing & Growth",
    type: "3 Months / 6 Months / 12 Months",
    location: "Remote Available",
    tag: "NEW",
    desc: "Work on brand growth, content strategy, audience engagement, and digital campaigns across modern platforms. Perfect for individuals who understand internet culture, trends, and strategic communication. Performance-based stipend available.",
    skills: [
      "Digital Marketing",
      "Social Media Marketing",
      "Content Strategy",
      "Audience Engagement",
      "Brand Growth",
      "Communication",
    ],
  },

  {
    id: 13,
    title: "Web Development Intern",
    dept: "Technology",
    type: "3 Months / 6 Months / 12 Months",
    location: "Remote Available",
    tag: "HOT",
    desc: "For developers passionate about building fast, scalable, and visually refined digital experiences. You’ll work on modern websites, interfaces, and real-world creative-tech projects with a strong focus on execution quality. Performance-based stipend available.",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Responsive Design",
      "Web Development",
    ],
  },
];

const DEPTS = [
  "All",
  ...new Set(ROLES.map((role) => role.dept)),
];

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


  const filtered = activeDept === "All"
    ? ROLES
    : ROLES.filter((r) => r.dept === activeDept);

  const handleApply = () => {
    window.open(
      "https://forms.gle/nx5dTqipz4s5Rxbd7",
      "_blank"
    );
  };

  return (
    <>

      <div className="careers-page">
        <div className="careers-glow" aria-hidden="true" />
        <div className="careers-back-wrapper">
          <button className="careers-back-btn" onClick={onBack}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            <div class="BackBtn_Text">Back</div>
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
            We’re building a team of thinkers, creators, strategists, and builders shaping modern digital experiences, brands, and visual culture.
            If you care about aesthetics, execution, innovation, and meaningful creative work — you’ll fit right in.
          </p>

          <div className="careers-hero-stats">
            <div className="careers-stat">
              <span className="careers-stat-num">{ROLES.length}</span>
              <span className="careers-stat-label">Open Roles</span>
            </div>
            <div className="careers-stat-divider" />
            <div className="careers-stat">
              <span className="careers-stat-num">{DEPTS.length - 1}</span>
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
                      className="careers-apply-btn"
                      onClick={handleApply}
                    >
                      Apply for this role →
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
      <Footer onNavigate={onNavigate} />
    </>
  );
}