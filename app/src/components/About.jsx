import { useEffect, useState } from 'react';
import { Mail, ArrowDown } from 'lucide-react';
import img1 from '../assets/images/self/maincorousel/valenteno portrait upper torso.png';
import img2 from '../assets/images/self/maincorousel/2.png';
import img3 from '../assets/images/self/maincorousel/3.png';

export default function About() {
  const images = [img1, img2, img3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [typingText, setTypingText] = useState('AI/ML Engineer');
  const titles = [
    'AI/ML Engineer 🤖',
    'Full Stack Developer 💻',
    'Research & Innovation Driven 🔬',
    'Music & Tech Passionate 🎵',
  ];

  useEffect(() => {
    let titleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let delay = 100;

    const type = () => {
      const currentTitle = titles[titleIndex];
      if (isDeleting) {
        setTypingText(currentTitle.substring(0, charIndex - 1));
        charIndex--;
        delay = 50;
      } else {
        setTypingText(currentTitle.substring(0, charIndex + 1));
        charIndex++;
        delay = 100;
      }

      if (!isDeleting && charIndex === currentTitle.length) {
        isDeleting = true;
        delay = 2000; // Pause at full title
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex = (titleIndex + 1) % titles.length;
        delay = 500; // Pause before typing next
      }

      setTimeout(type, delay);
    };

    const timeout = setTimeout(type, delay);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [images.length]);

  const handleScrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="about" className="section" style={styles.section}>
      <div className="container">
        <div className="about-grid" style={styles.grid}>
        
        {/* Left Column - Content */}
        <div style={styles.content}>
          <div style={styles.tagline}>
            <span className="pulsing-dot" style={{ marginRight: '8px' }}></span>
            SYSTEM ONLINE // READY TO INITIALIZE
          </div>
          
          <h1 style={styles.name}>
            VALENTENO LENORA
          </h1>
          
          <div style={styles.typingContainer}>
            <span style={styles.typingStatic}>I am a </span>
            <span className="neon-text-gradient" style={styles.typingDynamic}>
              {typingText}
            </span>
            <span style={styles.cursor}>|</span>
          </div>

          <p style={styles.bio}>
            Currently developing AI systems at <strong>AiRentoSoft</strong> and <strong>WaveSkill</strong>, with expertise spanning Agentic Systems, Deep Learning, Machine Learning, and scalable infrastructure. My dual-degree background in <strong>Computer Science (First Class Honours)</strong> and <strong>Information Systems (4th Year)</strong> provides both technical depth in AI/ML and a business systems perspective.
          </p>

          <div style={styles.detailsGrid}>
            <div className="glass-card" style={styles.detailCard}>
              <h3 style={styles.detailTitle}>🔬 Research Focus</h3>
              <p style={styles.detailText}>
                RAG Systems, Agentic AI, AI Automation, ML/DL with Mathematical Optimization, and Sinhala Machine Translation.
              </p>
            </div>
            <div className="glass-card" style={{ ...styles.detailCard, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', borderLeft: '3px solid var(--neon-pink)' }}>
              <div>
                <h3 style={styles.detailTitle}>🎵 Fun Fact</h3>
                <p style={styles.detailText}>
                  I'm also a bassist and a professional musician when not coding! Performing with bands is my creative catalyst.
                </p>
              </div>
              <a href="#/music" className="funfact-link" style={styles.funFactLink}>
                View Stage Gallery &rarr;
              </a>
            </div>
          </div>

          <div className="about-actions" style={styles.actions}>
            <button className="btn-neon" onClick={() => handleScrollTo('contact')}>
              <Mail size={18} />
              Let's Connect
            </button>
          </div>
        </div>

        {/* Right Column - Profile Image */}
        <div style={styles.imageColumn}>
          <div style={styles.cyberFrame}>
            {/* Cyberpunk corner brackets */}
            <div style={{ ...styles.bracket, top: 0, left: 0, borderTop: '3px solid var(--neon-cyan)', borderLeft: '3px solid var(--neon-cyan)' }}></div>
            <div style={{ ...styles.bracket, top: 0, right: 0, borderTop: '3px solid var(--neon-cyan)', borderRight: '3px solid var(--neon-cyan)' }}></div>
            <div style={{ ...styles.bracket, bottom: 0, left: 0, borderBottom: '3px solid var(--neon-cyan)', borderLeft: '3px solid var(--neon-cyan)' }}></div>
            <div style={{ ...styles.bracket, bottom: 0, right: 0, borderBottom: '3px solid var(--neon-cyan)', borderRight: '3px solid var(--neon-cyan)' }}></div>
            
            <div style={styles.imageWrapper}>
              {images.map((img, idx) => (
                <img 
                  key={idx}
                  src={img} 
                  alt={`Valenteno Lenora Portrait ${idx + 1}`} 
                  style={{
                    ...styles.image,
                    position: idx === 0 ? 'relative' : 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    opacity: currentImageIndex === idx ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    zIndex: currentImageIndex === idx ? 1 : 0,
                  }}
                />
              ))}
              <div style={{ ...styles.imageOverlay, zIndex: 2 }}></div>
              
              {/* Carousel navigation dots */}
              <div style={styles.carouselDots}>
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    style={{
                      ...styles.dot,
                      backgroundColor: currentImageIndex === idx ? 'var(--neon-cyan)' : 'rgba(255, 255, 255, 0.3)',
                      boxShadow: currentImageIndex === idx ? '0 0 8px var(--neon-cyan)' : 'none',
                    }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Status indicators */}
            <div style={styles.statusBox}>
              <span style={styles.statusLabel}>STATUS</span>
              <span style={styles.statusValue}>ACTIVE</span>
            </div>
          </div>
        </div>

      </div>

      <div className="about-scroll-down" style={styles.scrollDown} onClick={() => handleScrollTo('tech')}>
        <span style={styles.scrollLabel}>SCROLL TO INITIALIZE SYSTEM</span>
        <ArrowDown size={16} className="bounce" />
      </div>
    </div>
  </section>
  );
}

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: 'calc(var(--nav-height) + 40px)',
    paddingBottom: '80px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '3.5rem',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  tagline: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    color: 'var(--neon-cyan)',
    marginBottom: '1rem',
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontSize: '3.5rem',
    fontWeight: '800',
    letterSpacing: '-0.03em',
    lineHeight: '1.1',
    marginBottom: '1rem',
    background: 'linear-gradient(to right, #fff 50%, var(--text-muted))',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  typingContainer: {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '2rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
  },
  typingStatic: {
    color: 'var(--text-main)',
    marginRight: '0.5rem',
  },
  typingDynamic: {
    textShadow: '0 0 10px rgba(0,255,255,0.2)',
  },
  cursor: {
    color: 'var(--neon-pink)',
    animation: 'blink 0.8s infinite',
    marginLeft: '3px',
  },
  bio: {
    fontSize: '1.1rem',
    color: 'var(--text-muted)',
    marginBottom: '2rem',
    maxWidth: '650px',
  },
  detailsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1.5rem',
    marginBottom: '2.5rem',
  },
  detailCard: {
    padding: '1.25rem',
    borderRadius: '12px',
  },
  detailTitle: {
    fontSize: '1rem',
    fontWeight: '700',
    color: '#fff',
    marginBottom: '0.5rem',
  },
  detailText: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  },
  actions: {
    display: 'flex',
    gap: '1.25rem',
    flexWrap: 'wrap',
  },
  imageColumn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cyberFrame: {
    position: 'relative',
    padding: '12px',
    borderRadius: '20px',
    background: 'rgba(6, 8, 15, 0.4)',
    border: '1px solid rgba(0, 255, 255, 0.1)',
    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
    transition: 'all 0.5s ease',
    maxWidth: '350px',
    width: '100%',
  },
  bracket: {
    position: 'absolute',
    width: '20px',
    height: '20px',
    pointerEvents: 'none',
  },
  imageWrapper: {
    borderRadius: '12px',
    overflow: 'hidden',
    position: 'relative',
    aspectRatio: '1414 / 2000',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'all 0.5s ease',
    filter: 'grayscale(15%) contrast(105%)',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 40%, rgba(5,6,11,0.6) 100%), linear-gradient(rgba(0, 255, 255, 0.05) 1px, transparent 1px)',
    backgroundSize: '100% 100%, 100% 4px',
    pointerEvents: 'none',
  },
  statusBox: {
    position: 'absolute',
    bottom: '-15px',
    right: '25px',
    background: '#05060b',
    border: '1px solid var(--neon-cyan)',
    boxShadow: '0 0 10px rgba(0,255,255,0.2)',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
  },
  statusLabel: {
    color: 'var(--text-muted)',
  },
  statusValue: {
    color: 'var(--neon-cyan)',
    fontWeight: '700',
    textShadow: '0 0 4px var(--neon-cyan)',
  },
  scrollDown: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5rem',
    marginTop: 'auto',
    cursor: 'pointer',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    letterSpacing: '1px',
    alignSelf: 'center',
    transition: 'color 0.3s ease',
  },
  scrollLabel: {
    transition: 'color 0.3s ease',
  },
  carouselDots: {
    position: 'absolute',
    bottom: '15px',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'flex',
    gap: '8px',
    zIndex: 10,
    background: 'rgba(0,0,0,0.5)',
    padding: '6px 12px',
    borderRadius: '20px',
    backdropFilter: 'blur(4px)',
    border: '1px solid rgba(255,255,255,0.05)',
  },
  dot: {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  funFactLink: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    marginTop: '1rem',
    display: 'inline-flex',
    alignItems: 'center',
    textDecoration: 'none',
    fontWeight: 'bold',
    alignSelf: 'flex-start',
    color: 'var(--neon-pink)',
    transition: 'transform 0.3s ease',
  },
};

// CSS animations for text cursor blinking and scroll bounce
const extraCSS = `
@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0; }
}
@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(6px); }
}
.bounce {
  animation: bounce 1.8s infinite ease-in-out;
}
@media (max-width: 991px) {
  .about-grid {
    grid-template-columns: 1fr !important;
    gap: 3rem !important;
  }
  #about {
    padding-top: calc(var(--nav-height) + 20px) !important;
  }
}
@media (max-width: 576px) {
  #about h1 {
    font-size: 2.25rem !important;
  }
  #about div[style*="detailsGrid"] {
    grid-template-columns: 1fr !important;
  }
}
.funfact-link:hover {
  transform: translateX(4px);
  text-shadow: 0 0 8px var(--neon-pink);
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(extraCSS));
  document.head.appendChild(style);
}
