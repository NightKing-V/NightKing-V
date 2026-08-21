import { useState, useEffect } from 'react';
import { ArrowLeft, ZoomIn, X, ChevronLeft, ChevronRight } from 'lucide-react';

const musicImages = [
  '/images/music/EWF08775.jpg',
  '/images/music/EWF09246.jpg',
  '/images/music/DIS08505.jpg',
  '/images/music/1000369920-01.jpeg',
  '/images/music/DIS07655.jpg',
  '/images/music/1000386690-01.jpeg',
  '/images/music/IMG_20240304_124902_304.jpg',
  '/images/music/IMG_20240421_091050_269.jpg',
  '/images/music/1000166773-01.jpeg',
  '/images/music/download~2.png',
  '/images/music/IMG_5604~2.jpg',
  '/images/music/IMG_5615~4.jpg'
];

// Instagram Discover-style dynamic spans (col/row dimensions)
const tileLayouts = [
  { col: 1, row: 1 }, // 0: Standard
  { col: 1, row: 2 }, // 1: Tall
  { col: 1, row: 1 }, // 2: Standard
  { col: 2, row: 2 }, // 3: Large Square
  { col: 1, row: 1 }, // 4: Standard
  { col: 1, row: 1 }, // 5: Standard
  { col: 1, row: 2 }, // 6: Tall
  { col: 1, row: 1 }, // 7: Standard
  { col: 2, row: 1 }, // 8: Wide
  { col: 1, row: 1 }, // 9: Standard
  { col: 1, row: 1 }, // 10: Standard
  { col: 1, row: 1 }  // 11: Standard
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
      <div className="container" style={styles.container}>
        
        {/* Navigation row */}
        <div style={styles.headerNav}>
          <a href="#about" className="btn-neon" style={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <span style={styles.projectIdText}>
            ARCHIVE // STAGE_TILES
          </span>
        </div>

        {/* Instagram Discover Grid */}
        <div className="instagram-discover-grid" style={styles.grid}>
          {musicImages.map((imgUrl, idx) => {
            const layout = tileLayouts[idx] || { col: 1, row: 1 };
            return (
              <div 
                key={idx} 
                className="glass-card instagram-tile" 
                style={{
                  ...styles.tile,
                  gridColumn: `span ${layout.col}`,
                  gridRow: `span ${layout.row}`,
                }}
                onClick={() => setActiveImageIndex(idx)}
              >
                <div className="scanline"></div>
                <img 
                  src={imgUrl} 
                  alt={`Stage performance moment ${idx + 1}`} 
                  style={styles.image}
                  loading="lazy"
                />
                
                {/* Dark scanner gradient overlay */}
                <div style={styles.imageOverlay}></div>
                
                {/* Zoom overlay on hover */}
                <div className="tile-hover-overlay" style={styles.hoverOverlay}>
                  <ZoomIn size={24} style={{ color: '#fff' }} />
                </div>
              </div>
            );
          })}
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
              src={musicImages[activeImageIndex]} 
              alt={`Expanded stage archive photo ${activeImageIndex + 1}`} 
              style={styles.lightboxImage}
            />
            <div style={styles.lightboxCounter}>
              STAGE ARCHIVE // PHOTO_{activeImageIndex + 1} // {activeImageIndex + 1} OF {musicImages.length}
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
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  headerNav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridAutoRows: '260px',
    gridAutoFlow: 'dense',
    gap: '12px',
    width: '100%',
  },
  tile: {
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',
    padding: 0,
    borderRadius: '12px',
    border: '1px solid rgba(255, 0, 127, 0.1)',
    transition: 'all 0.4s ease',
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'stretch',
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
    background: 'radial-gradient(circle, transparent 70%, rgba(5,6,11,0.5) 100%), linear-gradient(rgba(255, 0, 127, 0.02) 1px, transparent 1px)',
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
    background: 'rgba(5, 6, 11, 0.65)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 3,
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
    boxShadow: '0 0 40px rgba(255, 0, 127, 0.25)',
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

// Custom styles for hover and grids
const styleRules = `
.instagram-tile:hover {
  transform: scale(1.015);
  border-color: var(--neon-pink) !important;
  box-shadow: 0 0 25px rgba(255, 0, 127, 0.25) !important;
}
.instagram-tile:hover img {
  transform: scale(1.04);
}
.instagram-tile:hover .tile-hover-overlay {
  opacity: 1 !important;
}
.lightboxArrow:hover {
  background: var(--neon-pink) !important;
  color: #fff !important;
  box-shadow: 0 0 15px var(--neon-pink);
  border-color: var(--neon-pink) !important;
}
@media (max-width: 768px) {
  .instagram-discover-grid {
    grid-template-columns: repeat(2, 1fr) !important;
    grid-auto-rows: 200px !important;
    gap: 8px !important;
  }
}
@media (max-width: 480px) {
  .instagram-discover-grid {
    grid-template-columns: 1fr !important;
    grid-auto-rows: 250px !important;
  }
  .instagram-tile {
    grid-column: span 1 !important;
    grid-row: span 1 !important;
  }
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styleRules));
  document.head.appendChild(style);
}
