import { useState, useEffect } from 'react';
import ThreeBackground from './components/ThreeBackground';
import Header from './components/Header';
import About from './components/About';
import TechStack from './components/TechStack';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Publications from './components/Publications';
import Education from './components/Education';
import Contact from './components/Contact';
import ProjectDetail from './components/ProjectDetail';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const isProjectDetail = currentHash.startsWith('#/project/');
  const projectId = isProjectDetail ? currentHash.replace('#/project/', '') : null;

  return (
    <div style={styles.appContainer}>
      {/* 3D Background Canvas */}
      <ThreeBackground />

      {/* Cyber Grid Background Design Overlay */}
      <div className="bg-grid-overlay"></div>

      {/* Navigation Header */}
      <Header />

      {/* Main Pages Content */}
      <main style={styles.main}>
        {isProjectDetail ? (
          <ProjectDetail projectId={projectId} />
        ) : (
          <>
            <About />
            <TechStack />
            <Experience />
            <Projects />
            <Publications />
            <Education />
            <Contact />
          </>
        )}
      </main>

      {/* Futuristic Neon Footer */}
      <footer style={styles.footer}>
        <div className="container footer-container" style={styles.footerContainer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} VALENTENO LENORA. ALL RIGHTS RESERVED.
          </p>
          <div style={styles.footerStatus}>
            <span style={styles.statusLabel}>SECURE CONNECTION ACTIVE</span>
            <span className="pulsing-dot" style={{ backgroundColor: 'var(--neon-cyan)', marginLeft: '6px' }}></span>
          </div>
          <p style={styles.footerTech}>
            BUILT WITH <span style={{ color: 'var(--neon-pink)', fontWeight: 'bold' }}>REACT</span> & <span style={{ color: 'var(--neon-cyan)', fontWeight: 'bold' }}>THREE.JS</span>
          </p>
        </div>
      </footer>
    </div>
  );
}

const styles = {
  appContainer: {
    position: 'relative',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
  },
  main: {
    flex: '1 0 auto',
    position: 'relative',
    zIndex: 2,
  },
  footer: {
    position: 'relative',
    background: 'rgba(5, 6, 11, 0.9)',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    padding: '2.5rem 0',
    zIndex: 10,
  },
  footerContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '100%',
  },
  footerText: {
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-dark)',
    letterSpacing: '1px',
  },
  footerStatus: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    border: '1px solid rgba(0, 255, 255, 0.1)',
    padding: '0.25rem 0.75rem',
    borderRadius: '30px',
    background: 'rgba(0,0,0,0.3)',
  },
  statusLabel: {
    letterSpacing: '0.5px',
  },
  footerTech: {
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-dark)',
    letterSpacing: '1px',
  },
};

// Add responsive style tags for footer
const responsiveFooterCSS = `
@media (max-width: 768px) {
  .footer-container {
    flex-direction: column !important;
    text-align: center !important;
    gap: 1.25rem !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(responsiveFooterCSS));
  document.head.appendChild(style);
}
export { responsiveFooterCSS };
