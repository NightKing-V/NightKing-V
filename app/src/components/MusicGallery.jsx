import { useState, useEffect } from 'react';
import { ArrowLeft, ZoomIn, X, ChevronLeft, ChevronRight, Music } from 'lucide-react';

const musicImages = [
  { url: '/images/music/EWF08775.jpg', caption: 'Bass Solo Live Performance' },
  { url: '/images/music/EWF09246.jpg', caption: 'Stage Vibes & Groove' },
  { url: '/images/music/DIS08505.jpg', caption: 'Live Concert Setup' },
  { url: '/images/music/1000369920-01.jpeg', caption: 'Under the Spotlights' },
  { url: '/images/music/NPW06711.jpg', caption: 'Rocking the Bass Riffs' },
  { url: '/images/music/1000386690-01.jpeg', caption: 'Gigging with the Band' },
  { url: '/images/music/IMG_20240304_124902_304.jpg', caption: 'Backstage rehearsal moments' },
  { url: '/images/music/IMG_20240421_091050_269.jpg', caption: 'Festival Stage Energy' },
  { url: '/images/music/1000166773-01.jpeg', caption: 'Deep in the Groove' },
  { url: '/images/music/download~2.png', caption: 'Bassist Profile' },
  { url: '/images/music/IMG_5604~2.jpg', caption: 'Bass Guitar Details' },
  { url: '/images/music/IMG_5615~4.jpg', caption: 'Live Show Rhythms' }
];

export default function MusicGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(null);

  // Scroll to top when loading
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (activeImageIndex === null) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev === 0 ? musicImages.length - 1 : prev - 1));
      } else if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev === musicImages.length - 1 ? 0 : prev + 1));
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? musicImages.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === musicImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="section" style={styles.section}>
      <div className="container">
        
        {/* Back navigation */}
        <div style={styles.headerNav}>
          <a href="#about" className="btn-neon" style={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <span style={styles.projectIdText}>
            ARCHIVE // STAGE_GALLERY
          </span>
        </div>

        {/* Intro header */}
        <div className="glass-card" style={styles.introCard}>
          <div className="scanline"></div>
          <div style={styles.titleRow}>
            <Music size={28} style={{ color: 'var(--neon-pink)', marginRight: '12px' }} />
            <h1 className="neon-text-gradient" style={styles.title}>VALENTENO LENORA // BASS ARCHIVES</h1>
          </div>
          <p style={styles.subtitle}>
            Performing live music is my creative catalyst. When I am not designing neural networks, I am holding down the low end on stage as a bassist. The synergy of mathematical patterns in bass lines and the algorithmic flow of machine learning feed into each other, offering a unique avenue for creative problem solving.
          </p>
        </div>

        {/* Dynamic Masonry Grid */}
        <div className="music-gallery-grid" style={styles.grid}>
          {musicImages.map((img, idx) => (
            <div 
              key={idx} 
              className="glass-card music-card" 
              style={styles.card}
              onClick={() => setActiveImageIndex(idx)}
            >
              <div className="scanline"></div>
              <div style={styles.imgWrapper}>
                <img 
                  src={img.url} 
                  alt={img.caption} 
                  style={styles.image}
                  loading="lazy"
                />
                
                {/* Visual glitches and hover action */}
                <div style={styles.imageOverlay}></div>
                
                <div className="gallery-hover-overlay" style={styles.hoverOverlay}>
                  <ZoomIn size={24} style={{ color: '#fff', marginBottom: '6px' }} />
                  <span style={styles.hoverText}>EXPAND IMAGE</span>
                </div>
              </div>
              <div style={styles.cardFooter}>
                <p style={styles.captionText}>{img.caption}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Fullscreen Lightbox Modal */}
      {activeImageIndex !== null && (
        <div style={styles.lightboxOverlay} onClick={() => setActiveImageIndex(null)}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setActiveImageIndex(null)}>
              <X size={24} />
            </button>
            <img 
              src={musicImages[activeImageIndex].url} 
              alt={musicImages[activeImageIndex].caption} 
              style={styles.lightboxImage}
            />
            <div style={styles.lightboxCounter}>
              {musicImages[activeImageIndex].caption} ({activeImageIndex + 1} / {musicImages.length})
            </div>
            
            {/* Arrows */}
            <button onClick={handlePrevImage} style={{ ...styles.lightboxArrow, left: '20px' }}>
              <ChevronLeft size={32} />
            </button>
            <button onClick={handleNextImage} style={{ ...styles.lightboxArrow, right: '20px' }}>
              <ChevronRight size={32} />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

const styles = {
  section: {
    paddingTop: 'calc(var(--nav-height) + 40px)',
    paddingBottom: '80px',
    minHeight: '85vh',
  },
  headerNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  backBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--neon-pink)',
    borderColor: 'var(--neon-pink)',
  },
  projectIdText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  introCard: {
    padding: '2.5rem',
    marginBottom: '3rem',
    borderLeft: '4px solid var(--neon-pink)',
  },
  titleRow: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '2rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    margin: 0,
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.05rem',
    lineHeight: '1.6',
    maxWidth: '850px',
    margin: 0,
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  card: {
    cursor: 'pointer',
    overflow: 'hidden',
    padding: '0.75rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderColor: 'rgba(255, 0, 127, 0.1)',
    transition: 'all 0.4s ease',
  },
  imgWrapper: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    aspectRatio: '4/3',
    background: '#040508',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.6s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 60%, rgba(5,6,11,0.5) 100%), linear-gradient(rgba(255, 0, 127, 0.03) 1px, transparent 1px)',
    backgroundSize: '100% 100%, 100% 5px',
    pointerEvents: 'none',
    zIndex: 2,
  },
  hoverOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5, 6, 11, 0.75)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 3,
  },
  hoverText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    color: '#fff',
    letterSpacing: '1px',
  },
  cardFooter: {
    padding: '0.75rem 0.25rem 0.25rem 0.25rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.03)',
    marginTop: '0.75rem',
  },
  captionText: {
    margin: 0,
    fontSize: '0.85rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    letterSpacing: '0.5px',
    textTransform: 'uppercase',
  },
  lightboxOverlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(3, 4, 8, 0.95)',
    zIndex: 9999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxContent: {
    position: 'relative',
    maxWidth: '95vw',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxImage: {
    maxWidth: '90vw',
    maxHeight: '80vh',
    objectFit: 'contain',
    borderRadius: '8px',
    boxShadow: '0 0 40px rgba(255, 0, 127, 0.2)',
    border: '1px solid rgba(255, 0, 127, 0.2)',
  },
  lightboxCounter: {
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '1px',
    marginTop: '1.25rem',
    textAlign: 'center',
    textTransform: 'uppercase',
  },
  closeBtn: {
    position: 'absolute',
    top: '-45px',
    right: '0',
    background: 'none',
    border: 'none',
    color: '#fff',
    cursor: 'pointer',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxArrow: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(5, 6, 11, 0.6)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
};

// Add CSS styling rules for card hover
const styleRules = `
.music-card:hover {
  transform: translateY(-4px);
  border-color: var(--neon-pink) !important;
  box-shadow: 0 0 20px rgba(255, 0, 127, 0.15) !important;
}
.music-card:hover img {
  transform: scale(1.05);
}
.music-card:hover .gallery-hover-overlay {
  opacity: 1 !important;
}
.lightboxArrow:hover {
  background: var(--neon-pink) !important;
  color: #fff !important;
  box-shadow: 0 0 15px var(--neon-pink);
  border-color: var(--neon-pink) !important;
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styleRules));
  document.head.appendChild(style);
}
