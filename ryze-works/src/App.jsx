import { useState, useRef, useEffect } from 'react';
import Hero from './components/Hero';
import ScrollFilm from './components/ScrollFilm';
import './styles/Intro.css';
import ProjectGallery from './components/ProjectGallery';
import OurServices from './components/OurServices';
import Contact from './components/Contact';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import Careers from './components/Careers';
import OurProjects from './components/OurProjects';

const frameModules = import.meta.glob('./images/ezgif-frame-*.jpg', { eager: true });
const frames = Object.keys(frameModules)
  .sort()
  .map((key) => frameModules[key].default);

const App = () => {
  const [stage, setStage] = useState('intro');
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);
  const scrollPosRef = useRef(0);

  const handleNavigate = (page) => {
    scrollPosRef.current = window.scrollY;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const handleBack = () => {
    if (selectedProject) {
      setSelectedProject(null);
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' });
      });
    } else {
      setCurrentPage('home');
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPosRef.current, behavior: 'instant' });
      });
    }
  };

  const handleProjectSelect = (project) => {
    scrollPosRef.current = window.scrollY;
    setSelectedProject(project);
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

      {/* ── Stage 3: Main site ── */}
      {stage === 'hero' && (
        <>
          {/* ── Careers Page ── */}
          {currentPage === 'careers' && (
            <Careers
              onBack={handleBack}
              onNavigate={handleNavigate}
            />
          )}

          {/* ── Main Home Page ── */}
          {currentPage === 'home' && (
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

                 <section id="services">
                    <OurServices />
                  </section>

                  <section id="projects">
                    <OurProjects onProjectSelect={handleProjectSelect} />
                  </section>

                  <section id="testimonials">
                    <Testimonials />
                  </section>

                  <section id="contact">
                    <Contact />
                  </section>

                  <Footer onNavigate={handleNavigate} />
                </>
              )}
            </>
          )}
        </>
      )}
    </div>
  );
};

export default App;