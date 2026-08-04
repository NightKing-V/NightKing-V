import { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'tech', label: 'Tech Stack' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'publications', label: 'Publications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  // Track scrolling to highlight active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 100;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={styles.header}>
      <div className="container" style={styles.navContainer}>
        <div style={styles.logo} onClick={() => handleNavClick('about')}>
          <Cpu size={24} style={styles.logoIcon} />
          <span style={styles.logoText}>VALENTENO<span style={styles.logoDot}>.</span>IO</span>
        </div>

        {/* Desktop Navbar */}
        <nav style={styles.desktopNav}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.navLink,
                ...(activeSection === item.id ? styles.activeNavLink : {}),
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile Toggle Button */}
        <button style={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isOpen && (
        <div style={styles.mobileDrawer}>
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              style={{
                ...styles.mobileNavLink,
                ...(activeSection === item.id ? styles.activeMobileNavLink : {}),
              }}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}

const styles = {
  header: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: 'var(--nav-height)',
    background: 'rgba(5, 6, 11, 0.75)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    borderBottom: '1px solid rgba(0, 255, 255, 0.1)',
    zIndex: 100,
    display: 'flex',
    alignItems: 'center',
  },
  navContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    cursor: 'pointer',
    userSelect: 'none',
  },
  logoIcon: {
    color: 'var(--neon-cyan)',
    filter: 'drop-shadow(0 0 4px var(--neon-cyan))',
  },
  logoText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '1.25rem',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#fff',
  },
  logoDot: {
    color: 'var(--neon-pink)',
  },
  desktopNav: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  navLink: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    fontWeight: '500',
    cursor: 'pointer',
    padding: '0.5rem 0.25rem',
    position: 'relative',
    transition: 'color 0.3s ease',
  },
  activeNavLink: {
    color: 'var(--neon-cyan)',
    textShadow: '0 0 5px var(--neon-cyan)',
  },
  mobileToggle: {
    display: 'none',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
  },
  mobileDrawer: {
    position: 'fixed',
    top: 'var(--nav-height)',
    left: 0,
    width: '100%',
    background: 'rgba(5, 6, 11, 0.95)',
    backdropFilter: 'blur(20px)',
    borderBottom: '1px solid rgba(0, 255, 255, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    padding: '1.5rem 2rem',
    gap: '1.25rem',
    zIndex: 99,
  },
  mobileNavLink: {
    background: 'none',
    border: 'none',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '1rem',
    textAlign: 'left',
    cursor: 'pointer',
    padding: '0.5rem 0',
    width: '100%',
    transition: 'color 0.3s ease',
  },
  activeMobileNavLink: {
    color: 'var(--neon-cyan)',
    textShadow: '0 0 4px var(--neon-cyan)',
  },
};

// Add responsive style tags into DOM or CSS sheet
const responsiveCSS = `
@media (max-width: 768px) {
  header nav {
    display: none !important;
  }
  header button[style*="mobileToggle"] {
    display: block !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(responsiveCSS));
  document.head.appendChild(style);
}
