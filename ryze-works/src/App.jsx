import { useState } from 'react';
import Hero from './components/Hero';
import ScrollFilm from './components/ScrollFilm';
import './styles/Intro.css';
import HorizontalScroll from './components/HorizontalScroll';
import ProjectGallery from './components/ProjectGallery';
import OurProjects from './components/OurProjects';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Careers from './components/Careers';

const frameModules = import.meta.glob('./images/ezgif-frame-*.jpg', { eager: true });
const frames = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key].default);

const App = () => {
  const [stage, setStage] = useState('intro');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectSelect = (project) => {
    setSelectedProject(project);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    setSelectedProject(null);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <div>
      {/* ── Stage 1: Intro ── */}
      {stage === 'intro' && (
        <div className="intro-screen">
          <div className="intro-ring intro-ring--1" />
          <div className="intro-ring intro-ring--2" />
          <div className="intro-ring intro-ring--3" />
          <div className="intro-content">
            <p className="intro-label">EXPERIENCE</p>
            <h1 className="intro-title">Step Into<br />A New World</h1>
            <p className="intro-sub">
              An immersive scroll journey awaits.<br />
              Press play when you're ready.
            </p>
            <button
              className="intro-btn"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'instant' });
                setStage('film');
              }}
            >
              <span className="intro-btn-icon">▶</span>
              Begin Experience
            </button>
          </div>
        </div>
      )}

      {/* ── Stage 2: Scroll film ── */}
      {stage === 'film' && (
        <ScrollFilm
          images={frames}
          onComplete={() => {
            setStage('hero');
            window.scrollTo({ top: 0, behavior: 'instant' });
          }}
        />
      )}

      {/* ── Stage 3: Main site or Gallery ── */}
      {stage === 'hero' && (
        <>
          {selectedProject ? (
            <ProjectGallery
              project={selectedProject}
              onBack={handleBack}
            />
          ) : (
            <>
              <section id="home">
                <Hero />
              </section>

              <section id="projects">
                <HorizontalScroll onProjectSelect={handleProjectSelect} />
              </section>

              <section id="services">
                <OurProjects />
              </section>

              <section id="testimonials">
                <Testimonials />
              </section>

              <section id="contact">
                <Contact />
              </section>
              <Footer/>
              <Careers/>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;