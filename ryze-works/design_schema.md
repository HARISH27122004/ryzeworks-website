# Design Schema

## Overview
A premium, dark-themed creative studio website with a immersive, futuristic aesthetic. The design employs deep purples (#63e, #8e64ff) against near-black backgrounds, extensive glassmorphism, dynamic gradients, and smooth motion. Typography combines modern sans-serifs with bold display fonts for impact.

## Design Principles
- **High-contrast dark theme**: Near-black backgrounds (#010314) with vibrant purple/blue accents
- **Glassmorphism & depth**: Heavy use of backdrop-blur, semi-transparent backgrounds, and inner glows
- **Motion-first interaction**: Smooth transitions, hover states, scroll-driven animations, and framer-motion
- **Typography hierarchy**: Bold display headings mix with readable body text using multiple font families
- **Responsive-first**: Mobile layouts stack, desktop uses multi-column grids with generous spacing

## Typography

### Font Families
| Role | Font Family | Source |
|------|------------|--------|
| Headings | `"Roobert", "DM Sans", sans-serif` | Google Fonts |
| Body | `"DM Sans", sans-serif` | Google Fonts |
| Display | `"Bebas Neue"` | Google Fonts |
| Display | `"Clash Display"` | Fontshare |
| Body Alt | `"Satoshi"` | Fontshare |
| Body Alt | `"Barlow"` | Google Fonts |

### Scale
| Style | Font Size | Weight | Line Height | Use Case |
|-------|-----------|--------|-------------|----------|
| H1 (Display) | `clamp(2.8rem, 7vw, 4.25rem)` | 300-900 | 0.97-1.1 | Main page/hero titles |
| H2 | `clamp(28px, 4vw, 44px)` | 800-900 | 1.0-1.1 | Section headers |
| H3 | `clamp(15px, 2vw, 18px)` | 800 | 1.3 | Card titles, role titles |
| H4 | `1.6rem` | 500-600 | 1.3 | Card headings |
| Body Large | `1.125rem` | 300-400 | 1.7 | Subtitles, intro text |
| Body | `0.875rem - 1rem` | 400 | 1.65-1.75 | Paragraphs, descriptions |
| Body Small | `0.7rem - 0.88rem` | 400-500 | — | Labels, captions, metadata |
| Label | `0.72rem` | 700 | — | Section labels, uppercase tags |
| Uppercase | `10-12px` | 700 | — | Badges, filter tags |

### Weights
| Token | Value |
|-------|-------|
| `--fw-light` | 300 |
| `--fw-regular` | 400 |
| `--fw-medium` | 500 |
| `--fw-semibold` | 600 |
| `--fw-bold` | 700 |
| `--fw-extrabold` | 800 |
| `--fw-black` | 900 |

## Colors

### Core Palette
| Role | Hex/RGBA | Usage |
|------|----------|-------|
| `--primary` | `#63e` (99, 102, 255) | Primary accent, interactive elements, links |
| `--primary-light` | `#8e64ff` (142, 100, 255) | Hover states, gradients, highlights |
| `--error` | `#e23453` | Error states, "HOT" tags, alerts |

### Grey Scale (Dark Theme)
| Token | Hex/RGBA | Usage |
|-------|----------|-------|
| `--grey-00` | `#fff` | Text inversions, icons on dark |
| `--grey-10` | `#f4f4ff` | Secondary text on dark |
| `--grey-20` | `#ececfb` | Secondary text |
| `--grey-30` | `#dfe1f4` | Body text (main) |
| `--grey-40` | `#babcd2` | Muted/secondary text |
| `--grey-50` | `#ffff` | Subtle text placeholder |
| `--grey-60` | `#5e6077` | Subtle labels, dividers |
| `--grey-70` | `#383a4d` | Borders, inputs |
| `--grey-80` | `#2a2b3a` | Border default, nav background |
| `--grey-85` | `#212230` | Secondary surfaces |
| `--grey-90` | `#171825` | Cards, glass backgrounds |
| `--grey-95` | `#0b0d1c` | Sections, alternate backgrounds |
| `--grey-100` | `#010314` | Main background (body) |

### Semantic Tokens
| Token | Value | Applies To |
|-------|-------|------------|
| `--bg-body` | `var(--grey-100)` | Page background |
| `--bg-body-rgba` | `rgba(1, 3, 20, 1)` | Solid background variant |
| `--bg-body-alt` | `rgba(1, 3, 20, 0)` | Transparent overlay |
| `--border-color` | `var(--grey-80)` | Borders, cards, inputs |
| `--text-headings` | `#cfcdcd` | Heading text |
| `--text-body` | `var(--grey-30)` | Body text |
| `--text-subtle` | `var(--grey-50)` | Subtle/placeholder |
| `--text-muted` | `var(--grey-40)` | Muted/secondary text |

### Button Colors
| Token | Value | Applies To |
|-------|-------|------------|
| `--btn-bg-primary` | `#855cf1cc` (with alpha) | Primary button fill |
| `--btn-color-primary` | `#fff` | Primary button text |
| `--btn-bg-secondary` | `#342c41cc` (with alpha) | Secondary/glass button fill |
| `--btn-bg-glow` | `#fff6` (semi-transparent white) | Button hover overlay |

### Effects
| Token | Value | Usage |
|-------|-------|-------|
| `--material-effect` | `0 0 0 2px #0000000d, 0 0 0 1px #ffffff1a, inset 0 .5px 0 #ffffff80` | Button/card subtle depth |

## Spacing & Layout

### Spacing Principles
- Base unit: **8px** foundation
- Common spacing values (in px/rem): `4, 8, 12, 16, 24, 32, 48, 64`
- Grid gap common values: `1.25rem (20px)`, `1rem (16px)`, `0.75rem (12px)`

### Layout Structure
| Section | Max Width | Horizontal Padding | Grid |
|---------|-----------|-------------------|------|
| Main content | `1200px` | `2.5rem (40px)` desktop, `1.5rem` tablet | 12-column implied |
| Gallery | `1200px` | `60px` desktop, responsive | Pinterest masonry (3 cols) |
| Projects modal | `1500px` | `40px` inside modal | 420px sidebar + 1fr |
| Footer grid | `1200px` | `24px` | `2fr 1fr 1fr 1fr` (4 cols) |
| Navbar | `calc(100% - 80px)` | Centered, max `1200px` | Flex-between |

### Common Spacing Patterns
```css
/* Section padding */
padding: 80px 40px;      /* Desktop sections */
padding: 60px 24px;      /* Tablet sections */
padding: 48px 16px;      /* Mobile sections */

/* Component gaps */
gap: 1.25rem;            /* Cards grid */
gap: 0.75rem;            /* Button groups */
gap: 20px;               /* Gallery columns */
gap: 12px;               /* Filter chips */
gap: 16px;               /* Form fields */

/* Inner padding */
padding: 24px;           /* Card body */
padding: 32px;           /* Modal content */
padding: 14px 28px;      /* Footer marquee */
```

## Radii & Shadows

### Border Radius
| Component | Radius |
|-----------|--------|
| Navbar | `20-24px` |
| Buttons | `6-12px` (pill: `100px`, CTA: `12px`) |
| Cards | `14-18px` |
| Modal | `24px` |
| Inputs | `6px` |
| Tags/Chips | `999px` (fully rounded) |
| Toggle switches | `50%` circle |

### Shadows & Glows
| Style | Value | Used On |
|-------|-------|---------|
| Material effect | `0 0 0 2px #0000000d, 0 0 0 1px #ffffff1a, inset 0 .5px 0 #ffffff80` | Buttons, cards, inputs |
| Glow (primary) | `rgba(99, 0, 238, 0.22)` | Hero radial glow |
| Glow (secondary) | `rgba(142, 100, 255, 0.30)` | Card hover borders, icons |
| Card shadow | `0 2-8px rgba(0,0,0,0.1-0.5)` | Cards general |
| CTA glow | `0 4-16px rgba(108, 59, 255, 0.3-0.5)` | Primary buttons |

## Components

### Button
**File:** `src/styles/Hero.css` (primary patterns), `src/styles/Navbar.css` (nav buttons), `src/styles/Contact.css` (submit button)

#### Variants
| Variant | Classes | Background | Border | Text |
|---------|---------|------------|--------|------|
| Primary | `.btn-primary` | `var(--btn-bg-primary)` | Glow border | `#fff` |
| Secondary | `.btn-secondary` | `var(--btn-bg-secondary)` | 1px solid `--border-color` | `var(--text-headings)` |
| Ghost | `.btn-ghost` | `transparent` | None | `var(--text-subtle)` |
| Nav CTA | `.btn-nav-cta` | `linear-gradient(135deg, #7c3aed, #5b21b6)` | None | `#fff` |
| Submit | `.form-submit` | `var(--btn-bg-primary)` | `--material-effect` | `#fff` |

#### Sizes
| Size | Classes | Padding | Font |
|------|---------|---------|------|
| Default | `.btn` | `0.5rem 1.1rem` | `0.875rem` |
| Large | `.btn-lg` | `0.75rem 1.75rem` | `1rem` |

#### Code Example
```jsx
<button className="btn btn-primary">Submit</button>
<button className="btn btn-secondary">Cancel</button>
<button className="btn btn-ghost">Learn more</button>
```

**Base `.btn` styles:**
```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: var(--fw-medium);
  border-radius: 8px;
  padding: 0.5rem 1.1rem;
  cursor: pointer;
  text-decoration: none;
  transition: opacity 0.2s, transform 0.15s, box-shadow 0.2s;
  border: none;
  white-space: nowrap;
}
```

### Input & Form Field
**File:** `src/styles/Contact.css`

#### Variants
| Element | Styles |
|---------|--------|
| Input field | `.form-field input` |
| Textarea | `.form-field textarea` |
| Label | `.form-field label` |

#### Code Example
```jsx
<div className="form-field">
  <label htmlFor="contact-name">NAME</label>
  <input
    id="contact-name"
    type="text"
    placeholder="Your name"
  />
</div>
```

**Input styles:**
```css
.form-field input,
.form-field textarea {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid var(--border-color);
  border-radius: 6px;
  color: var(--grey-20);
  font-family: 'DM Sans', sans-serif;
  font-size: 13px;
  padding: 12px 14px;
  outline: none;
  resize: none;
  transition: border-color 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
}

.form-field input:focus,
.form-field textarea:focus {
  border-color: var(--primary);
  background: rgba(102, 51, 238, 0.06);
  box-shadow: 0 0 0 3px rgba(102, 51, 238, 0.12);
}
```

**Label styles:**
```css
.form-field label {
  font-family: var(--font-family-headings);
  font-size: 9px;
  font-weight: 700;
  letter-spacing: 0.2em;
  color: var(--grey-60);
  text-transform: uppercase;
  margin-bottom: 7px;
  display: block;
}
```

### Card (Generic)
**File:** `src/styles/Hero.css` (`.lp-card`), `src/styles/Testimonials.css` (`.tcard`)

#### Base Card (`.lp-card`)
```jsx
<div className="lp-card">
  <span className="lp-card-tag">TAG</span>
  <h3>Card Title</h3>
  <p>Card description text...</p>
</div>
```

**Styles:**
```css
.lp-card {
  background: var(--grey-90);
  border: 1px solid var(--border-color);
  border-radius: 14px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  position: relative;
  overflow: hidden;
  transition: border-color 0.3s, transform 0.2s;
}

.lp-card:hover {
  border-color: var(--grey-60);
  transform: translateY(-2px);
}

/* Accent top border on hover (different colors per card index) */
.lp-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 2px;
  border-radius: 14px 14px 0 0;
  opacity: 0;
  transition: opacity 0.3s;
}
.lp-card:hover::before { opacity: 1; }
.lp-card:nth-child(1)::before { background: #a78bfa; }
.lp-card:nth-child(2)::before { background: #818cf8; }
.lp-card:nth-child(3)::before { background: #c084fc; }
```

#### Testimonial Card (`.tcard`)
```jsx
<article className="tcard">
  <span className="tcard-quote-mark">"</span>
  <div className="tcard-stars">★ ★ ★ ★ ★</div>
  <p className="tcard-body">Quote text...</p>
  <div className="tcard-author">
    <div className="tcard-avatar">[Image/initials]</div>
    <div className="tcard-author-info">
      <span className="tcard-name">Author</span>
      <span className="tcard-role">Role · Company</span>
    </div>
    <span className="tcard-company-badge">COMPANY</span>
  </div>
</article>
```

**Styles:**
```css
.tcard {
  border-radius: 18px;
  padding: 32px 28px 28px;
  background: rgba(255, 255, 255, 0.035);
  backdrop-filter: blur(18px) saturate(160%);
  border: 1px solid rgba(255, 255, 255, 0.07);
  box-shadow:
    0 4px 24px rgba(0, 0, 0, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
  transition: all 0.3s ease;
}

.tcard:hover {
  background: rgba(102, 51, 238, 0.07);
  border-color: rgba(142, 100, 255, 0.28);
  box-shadow:
    0 8px 40px rgba(102, 51, 238, 0.18),
    0 2px 8px rgba(0, 0, 0, 0.5),
    inset 0 1px 0 rgba(255, 255, 255, 0.12);
  transform: translateY(-5px) scale(1.012);
}

.tcard--featured {
  background: rgba(102, 51, 238, 0.08);
  border-color: rgba(142, 100, 255, 0.2);
  box-shadow:
    0 0 0 1px rgba(142, 100, 255, 0.12),
    0 12px 48px rgba(102, 51, 238, 0.2);
}
```

### Feature/Collapsible Card (`.feature-card`, `.feature-pill`)
**File:** `src/styles/OurProjects.css`

#### Code Example
```jsx
<ul className="feature-list">
  {services.map((service, index) => (
    <li key={service.id}>
      {/* Collapsed state (pill) */}
      {!isActive && (
        <button className="feature-pill" onClick={() => setActiveIndex(index)}>
          <span className="icon-circle">+</span>
          <span className="feature-label">{service.title}</span>
        </button>
      )}

      {/* Expanded state (card) */}
      {isActive && (
        <div className="feature-card expanded">
          <div className="feature-card-header">
            <span className="icon-circle active-icon">−</span>
            <span className="feature-label">{service.title}</span>
          </div>
          <p className="feature-desc">
            <strong>{service.title}.</strong> {service.detail}
          </p>
          <div className="service-tags">
            {service.whatWeDid.map((w) => (
              <span className="service-tag" key={w}>{w}</span>
            ))}
          </div>
          <div className="service-industries">
            {service.industries.map((ind) => (
              <span className="service-industry" key={ind}>{ind}</span>
            ))}
          </div>
        </div>
      )}
    </li>
  ))}
</ul>
```

**Styles:**
```css
/* Collapsed pill */
.feature-pill {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  color: var(--fe-text);
  font-family: var(--fe-font);
  font-size: 13.5px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.4, 0.64, 1);
}
.feature-pill:hover {
  background: rgba(142, 100, 255, 0.1);
  border-color: rgba(142, 100, 255, 0.3);
  transform: translateX(5px);
}

/* Expanded card */
.feature-card {
  background: rgba(142, 100, 255, 0.06);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(142, 100, 255, 0.18);
  border-radius: 18px;
  padding: 16px 18px;
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.06),
    0 4px 24px rgba(142, 100, 255, 0.08);
}

.feature-label {
  font-family: var(--fe-font-display);
  font-size: 14px;
  font-weight: 600;
  color: var(--fe-text);
  letter-spacing: -0.02em;
}

.feature-desc {
  font-family: var(--fe-font);
  font-size: 12.5px;
  line-height: 1.65;
  color: var(--fe-text-muted);
}

/* Tags */
.service-tag {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 999px;
  padding: 3px 10px;
  transition: all 0.25s cubic-bezier(0.34, 1.4, 0.64, 1);
}

.service-industry {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: var(--fe-accent);
  background: rgba(142, 100, 255, 0.08);
  border: 1px solid rgba(142, 100, 255, 0.18);
  border-radius: 999px;
  padding: 3px 10px;
}
```

### Tag Filter (`.careers-filter-btn`)
**File:** `src/styles/Careers.css`

```jsx
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
```

**Styles:**
```css
.careers-filter-btn {
  font-family: var(--font-family-headings);
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.1em;
  padding: 8px 18px;
  border-radius: 100px;
  border: 1px solid var(--border-color);
  background: transparent;
  color: var(--text-muted);
  cursor: pointer;
  transition: all 0.2s ease;
}

.careers-filter-btn:hover {
  border-color: var(--primary-light);
  color: var(--text-headings);
}

.careers-filter-btn.active {
  background: var(--btn-bg-primary);
  border-color: var(--primary-light);
  color: var(--btn-color-primary);
  box-shadow: var(--material-effect);
}
```

### Role Card (`.careers-role-card`)
**File:** `src/styles/Careers.css`

```jsx
<div
  className={`careers-role-card ${openRole === role.id ? "expanded" : ""}`}
>
  <div className="careers-role-top" onClick={() => setOpenRole(...)}>
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
    <div className="careers-role-chevron">
      {openRole === role.id ? "−" : "+"}
    </div>
  </div>

  {openRole === role.id && (
    <div className="careers-role-body">
      <p className="careers-role-desc">{role.desc}</p>
      <div className="careers-role-skills">
        {role.skills.map((s) => (
          <span className="careers-skill-chip" key={s}>{s}</span>
        ))}
      </div>
      <button className="careers-apply-btn">
        {applied.has(role.id) ? "✓ Application Sent" : "Apply for this role →"}
      </button>
    </div>
  )}
</div>
```

**Styles:**
```css
.careers-role-card {
  background: var(--btn-bg-secondary);
  border: 1px solid var(--border-color);
  box-shadow: var(--material-effect);
  border-radius: 14px;
  overflow: hidden;
  transition: border-color 0.25s ease;
}

.careers-role-card:hover,
.careers-role-card.expanded {
  border-color: var(--primary-light);
}

.careers-role-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  cursor: pointer;
  gap: 16px;
}

.careers-role-title {
  font-size: clamp(15px, 2vw, 18px);
  font-weight: 900;
  color: var(--text-headings);
  letter-spacing: 0.01em;
  margin: 0;
}

.careers-role-tag {
  font-size: 8px;
  font-weight: 800;
  letter-spacing: 0.18em;
  padding: 3px 10px;
  border-radius: 100px;
}

.careers-role-tag.hot {
  background: rgba(226, 52, 83, 0.15);
  color: #e23453;
  border: 1px solid rgba(226, 52, 83, 0.3);
}

.careers-role-tag.new {
  background: rgba(142, 100, 255, 0.15);
  color: var(--primary-light);
  border: 1px solid rgba(142, 100, 255, 0.3);
}

.careers-apply-btn {
  font-family: var(--font-family-headings);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.12em;
  padding: 12px 28px;
  border-radius: 100px;
  border: 1px solid var(--primary-light);
  background: var(--btn-bg-primary);
  color: var(--btn-color-primary);
  cursor: pointer;
  box-shadow: var(--material-effect);
  transition: all 0.2s ease;
}

.careers-apply-btn:hover:not(:disabled) {
  background: var(--primary-light);
  box-shadow: 0 0 24px rgba(142, 100, 255, 0.35);
}

.careers-apply-btn.applied {
  background: rgba(255, 255, 255, 0.05);
  border-color: var(--border-color);
  color: var(--text-muted);
  cursor: default;
}
```

### Modal / Dialog (`.explorer-modal`, `.fullscreen-menu`)
**Files:** `src/styles/OurProjects.css`, `src/styles/Navbar.css`

#### Main Modal (Projects Explorer)
```jsx
<div className="explorer-backdrop">
  <div className="explorer-modal">
    <div className="explorer-layout">
      <div className="sidebar">...</div>
      <div className="visual-panel">...</div>
    </div>
  </div>
</div>
```

**Styles:**
```css
.explorer-modal {
  position: relative;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 24px;
  width: 100%;
  max-width: 1500px;
  min-height: 680px;
  overflow: hidden;
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.04),
    0 32px 80px rgba(0, 0, 0, 0.45),
    inset 0 1px 0 rgba(255, 255, 255, 0.08);
}
```

#### Fullscreen Mobile Menu
```jsx
<div className={`fullscreen-menu ${menuOpen ? "open" : ""}`}>
  <button className="fm-close-btn">✕</button>
  <div className="fm-inner">
    <ul className="fm-links">...</ul>
    <div className="fm-footer">...</div>
  </div>
</div>
```

**Styles:**
```css
.fullscreen-menu {
  position: fixed;
  inset: 0;
  z-index: 99998;
  display: flex;
  flex-direction: column;
  background: rgba(6, 8, 18, 0.96);
  backdrop-filter: blur(32px) saturate(180%);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.fullscreen-menu.open {
  opacity: 1;
  visibility: visible;
  pointer-events: auto;
}
```

### Lightbox (`.gallery-lightbox`)
**File:** `src/styles/ProjectGallery.css`

```jsx
{lightbox !== null && (
  <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
    <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
    <button className="lightbox-prev">‹</button>
    <img src={project.gallery[lightbox]} className="lightbox-img" />
    <button className="lightbox-next">›</button>
    <span className="lightbox-counter">{lightbox + 1} / {project.gallery.length}</span>
  </div>
)}
```

**Styles:**
```css
.gallery-lightbox {
  position: fixed;
  inset: 0;
  background: rgba(1, 3, 20, 0.97);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(8px);
}

.lightbox-img {
  max-width: 85vw;
  max-height: 85vh;
  object-fit: contain;
  border-radius: 12px;
  border: 1px solid var(--border-color);
  box-shadow: var(--material-effect);
}

.lightbox-close {
  position: absolute;
  top: 24px; right: 32px;
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--btn-bg-secondary);
  border: 1px solid var(--border-color);
  color: var(--text-body);
  cursor: pointer;
  display: flex; align-items: center; justify-content: center;
  transition: all 0.2s ease;
}
```

### Navbar (`.lp-nav`)
**File:** `src/styles/Navbar.css`

#### States
- Default: transparent, no blur
- Scrolled: glass effect with `rgba(255, 255, 255, 0.06)` background, `blur(24px)` backdrop-filter, inner top glow
- Hide/Show: JSON-driven transform translateY for scroll hide behavior

#### Mobile Menu
- Hamburger button animates to X
- Fullscreen overlay with staggered link animation
- Close button with rotate-on-hover

### Animated Visual Panel (`.visual-panel`)
**File:** `src/styles/OurProjects.css`

Uses framer-motion `AnimatePresence` for crossfade transitions between images with gradient overlay.

```jsx
<AnimatePresence mode="wait">
  <motion.div
    key={feature.id}
    className="visual-panel"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
  >
    <img src={img} className="visual-bg-image" />
    <div className="visual-image-gradient" />
    <div className="visual-content">
      <motion.div className="visual-service-number" ...>
        {String(index + 1).padStart(2, "0")}
      </motion.div>
      <motion.div className="visual-service-testimonial" ...>
        <p className="visual-test-quote">"{feature.testimonial.quote}"</p>
        <span className="visual-test-client">— {feature.testimonial.client}</span>
      </motion.div>
    </div>
  </motion.div>
</AnimatePresence>
```

## Icons

### Native CSS/SVG Icons
- **Chevron down/up**: Text characters `+`, `−`, `^`, `v`
- **Arrow**: `→`, `↗`
- **Close/X**: SVG or `✕`
- **Star**: SVG embedded inline
- **Quote mark**: `"`
- **Play**: `▶`
- **Browse/Zoom**: `⤢`

### Social Icons (Footer)
**File:** `src/components/Footer.jsx`
- Twitter (X), GitHub, LinkedIn, Instagram, Dribbble
- SVG paths defined inline

### Icon Circle (`.icon-circle`)
Used in accordion/feature pills:
```css
.icon-circle {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 1.5px solid rgba(255, 255, 255, 0.3);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 1;
  color: rgba(255, 255, 255, 0.5);
  transition: border-color 0.25s ease, color 0.25s ease;
}
.icon-circle.active-icon {
  border-color: var(--fe-accent);
  color: var(--fe-accent);
}
```

## Animations & Transitions

### Easing Curves
- Standard: `cubic-bezier(0.4, 0, 0.2, 1)` (smooth decel)
- Bouncy: `cubic-bezier(0.34, 1.4, 0.64, 1)` (overshoot)
- Fade: `ease`, `ease-in-out`
- Custom: `[0.25, 0.46, 0.45, 0.94]` (framer-motion)

### Common Transitions
| Element | Duration | Properties |
|---------|----------|------------|
| Hover (buttons/cards) | `0.2-0.3s` | `opacity`, `transform`, `box-shadow`, `color`, `border-color` |
| Modal open/close | `0.4s` | `opacity`, `visibility` |
| Scroll-reveal | `0.6-0.7s` | `opacity`, `transform` |
| Staggered list | `0.05s` per item | delay cascade |

### Scroll-Driven Effects
- **Intersection Observer**: Elements fade in when entering viewport
- **Parallax hero**: Background gradient scales and translates
- **Sticky scroll**: Projects section uses scroll position to horizontally translate (`translate3d`)
- **Scroll film**: Canvas-based frame sequencer (debounced wheel/touch)
- **Navbar hide/show**: `translateY` based on scroll direction

### Keyframe Animations
```css
@keyframes ringPulse { /* intro pulsing rings */ }
@keyframes arrowBounce { /* scroll hint arrow */ }
@keyframes heartbeat { /* footer heart */ }
@keyframes marquee { /* infinite scroll text */ }
@keyframes starPop { /* testimonial stars scale */ }
@keyframes imgFadeIn { /* visual panel image crossfade */ }
```

## Responsive Breakpoints

| Name | Max Width | Usage |
|------|-----------|-------|
| Desktop | `> 1199px` | Full 3-column layouts, wide spacing |
| Tablet | `901px - 1199px` | Reduced spacing, 2-column grids |
| Small Tablet | `769px - 900px` | Nav padding reduced, stacked sections |
| Mobile | `481px - 768px` | Single column, stacked cards, hamburger menu |
| Small Mobile | `≤ 480px` | Tight padding, smaller text, compact buttons |
| Very Small | `≤ 360px` | Minimal margins, smallest font variants |

**File reference:** All component CSS files use consistent `@media` queries.

## Utilities & Patterns

### Backdrop & Filter Effects
```css
/* Glassmorphism */
backdrop-filter: blur(24px) saturate(180%);
-webkit-backdrop-filter: blur(24px) saturate(180%);
background: rgba(255, 255, 255, 0.04);

/* Glass button */
background: rgba(255, 255, 255, 0.05);
border: 1px solid rgba(255, 255, 255, 0.08);
backdrop-filter: blur(8px);
```

### Text Gradients
```css
background: linear-gradient(135deg, var(--primary-light) 0%, #c084fc 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;
```

### Focus States
```css
box-shadow: 0 0 0 3px rgba(102, 51, 238, 0.12);
```

### Hover Lift
```css
transform: translateY(-2-5px);
transition: transform 0.2s ease;
```

## Component Files Reference

| File | Components |
|------|------------|
| `src/styles/Hero.css` | Global tokens, button styles, hero, cards |
| `src/styles/Navbar.css` | Navbar, hamburger, fullscreen menu |
| `src/styles/Footer.css` | Footer, marquee, social buttons |
| `src/styles/Contact.css` | Form fields, submit button |
| `src/styles/ProjectGallery.css` | Gallery grid, lightbox, masonry layout |
| `src/styles/OurProjects.css` | Services explorer, feature cards, tags |
| `src/styles/Testimonials.css` | Testimonial cards, avatars, ratings |
| `src/styles/ScrollFilm.css` | Canvas film player, HUD, loader |
| `src/styles/HorizontalScroll.css` | Project horizontal scroll |
| `src/styles/Intro.css` | Landing intro overlay, rings, CTA |

## Component JSX Reference

| File | Purpose |
|------|---------|
| `src/App.jsx` | Main router/stage controller |
| `src/components/Hero.jsx` | Hero section component |
| `src/components/Navbar.jsx` | Navigation with scroll state |
| `src/components/Footer.jsx` | Footer with marquee |
| `src/components/Contact.jsx` | Contact form with validation |
| `src/components/Careers.jsx` | Career listings with accordions |
| `src/components/OurProjects.jsx` | Services accordion with visual |
| `src/components/Testimonials.jsx` | Testimonial grid |
| `src/components/HorizontalScroll.jsx` | Projects showcase (marquee) |
| `src/components/ProjectGallery.jsx` | Detailed project gallery with lightbox |
| `src/components/ScrollFilm.jsx` | Scroll-driven canvas film player |

## Do's & Don'ts

### ✅ Do:
- Use `var(--token)` CSS custom properties for all colors, spacing, radii
- Use `backdrop-filter: blur()` for glass effect variants
- Keep font sizes in `rem` unless viewport-relative `clamp()` is intended
- Use `framer-motion` for enter/exit animations in React
- Make hover effects scale/lift + glow on primary elements
- Responsive: stack columns on mobile, use `clamp()` for fluid typography
- Use semantic elements (`<article>`, `<section>`, `<nav>`, `<header>`)
- Add `aria-*` attributes for accessibility

### 🚫 Don't:
- Hardcode color values — always reference `:root` tokens
- Use fixed heights for text containers; let content drive height
- Use `object-fit: cover` on images unless explicitly decorative; prefer `contain` for gallery
- Overlap glass elements without a blur backdrop
- Use heavy shadows on mobile (performance)
- Nest cards inside cards (breaks hierarchy)
- Use uppercase text for body/paragraphs (reserve for labels/tags)
- Forget contrast ratios — ensure text on dark meets AA/AAA

## Accessibility Notes

- **Focus**: All interactive elements have visible `:focus` rings via `box-shadow`
- **Keyboard**: Modals trap focus, close on `Escape`
- **Contrast**: Text on dark uses `#cfcdcd`, `#dfe1f4`, `#babcd2` — verify per WCAG 2.1 AA
- **Screen reader**: ARIA labels on icon buttons, `aria-modal`, `aria-expanded`

## Additional Patterns

### Pulse/Grow Animation
Used for hiring dot in careers:
```css
@keyframes pulse-dot {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.4; transform: scale(0.7); }
}
```

### Marquee
Infinite horizontal scroll used in Footer and Projects:
```css
@keyframes marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}
```

### Graident Glows
Background radial gradients used behind hero, testimonials, footer for depth:
```css
background: radial-gradient(ellipse at center, rgba(102, 51, 238, 0.14) 0%, transparent 70%);
```

### Material-style Borders
Combination of box-shadows for subtle raised/inset effects:
```css
box-shadow:
  0 0 0 2px #0000000d,    /* outer dark ring */
  0 0 0 1px #ffffff1a,    /* inner light ring */
  inset 0 0.5px 0 #ffffff80; /* inner top highlight */
```

---

*Design schema generated from actual codebase analysis — all values sourced from:*
- `src/styles/*.css` (global tokens, component styles)
- `src/components/*.jsx` (component implementations)
- `src/data/services.js` (content data structure)
- `package.json` (eslint, framer-motion, react ecosystem)
