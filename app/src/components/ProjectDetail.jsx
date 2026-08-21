import { useState, useEffect } from 'react';
import { ArrowLeft, Briefcase, Calendar, Building, Layers, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import projectsData from '../data/projects-data.json';

export default function ProjectDetail({ projectId }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const project = projectsData[projectId];

  // Scroll to top when loading a project
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="section" style={styles.errorContainer}>
        <div className="glass-card" style={styles.errorCard}>
          <h2 style={{ color: 'var(--neon-pink)', marginBottom: '1rem', fontSize: '2rem' }}>PROJECT NOT FOUND</h2>
          <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
            The requested project details could not be retrieved from the database.
          </p>
          <a href="#" className="btn-neon" style={styles.backBtn}>
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
        </div>
      </div>
    );
  }

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? project.screenshots.length - 1 : prev - 1));
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === project.screenshots.length - 1 ? 0 : prev + 1));
  };

  const isWork = project.category === 'work';
  const accentColor = isWork ? 'var(--neon-pink)' : 'var(--neon-cyan)';
  const borderGradient = isWork ? 'var(--glass-border-pink)' : 'var(--glass-border)';

  return (
    <section className="section" style={styles.section}>
      <div className="container">
        
        {/* Back Link */}
        <div style={styles.headerNav}>
          <a href="#projects" className="btn-neon" style={{ ...styles.backBtn, color: accentColor, borderColor: accentColor }}>
            <ArrowLeft size={16} /> Back to Portfolio
          </a>
          <span style={styles.projectIdText}>
            PROJECT_ID // {projectId.toUpperCase()}
          </span>
        </div>

        {/* Project Layout Grid */}
        <div className="project-detail-grid" style={styles.grid}>
          
          {/* Left Column: Information */}
          <div style={styles.infoCol}>
            <div className={`glass-card ${isWork ? 'glass-card-pink' : ''}`} style={{ ...styles.infoCard, borderColor: borderGradient }}>
              <div className="scanline"></div>
              
              <h1 style={styles.title}>{project.title}</h1>
              
              {/* Meta tags */}
              <div style={styles.metaRow}>
                <div style={styles.metaItem}>
                  <Briefcase size={16} style={{ color: accentColor }} />
                  <span style={styles.metaText}>{project.role}</span>
                </div>
                <div style={styles.metaItem}>
                  <Building size={16} style={{ color: accentColor }} />
                  <span style={styles.metaText}>{project.company}</span>
                </div>
                <div style={styles.metaItem}>
                  <Calendar size={16} style={{ color: accentColor }} />
                  <span style={styles.metaText}>{project.timeline}</span>
                </div>
              </div>

              <div style={styles.divider}></div>

              {/* Description */}
              <h3 style={styles.sectionSubTitle}>OVERVIEW</h3>
              <p style={styles.description}>{project.description}</p>

              {/* Key Deliverables & Responsibilities */}
              <h3 style={styles.sectionSubTitle}>KEY DELIVERABLES & CONTRIBUTION</h3>
              <ul style={styles.deliverablesList}>
                {project.deliverables.map((item, idx) => (
                  <li key={idx} style={styles.deliverableItem}>
                    <CheckCircle2 size={18} style={{ ...styles.checkIcon, color: accentColor }} />
                    <span style={styles.deliverableText}>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <h3 style={styles.sectionSubTitle}>TECHNOLOGY MATRIX</h3>
              <div style={styles.techWrapper}>
                {project.tech.map((t, idx) => (
                  <span 
                    key={idx} 
                    style={{
                      ...styles.techTag,
                      color: accentColor,
                      borderColor: isWork ? 'rgba(255, 0, 127, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Screenshot Gallery */}
          <div style={styles.galleryCol}>
            <div className="glass-card" style={styles.galleryCard}>
              <div className="scanline"></div>
              
              {/* Active Image Showcase */}
              <div style={styles.mainImageWrapper} onClick={() => setIsLightboxOpen(true)}>
                <img 
                  src={project.screenshots[activeImageIndex]} 
                  alt={`${project.title} Screenshot ${activeImageIndex + 1}`} 
                  style={styles.mainImage}
                />
                
                {/* Visual Glitch-inspired overlays */}
                <div style={styles.imageOverlay}></div>
                
                {/* Lightbox button overlay */}
                <div className="image-hover-action" style={styles.hoverActionOverlay}>
                  <Maximize2 size={24} style={{ color: '#fff', marginBottom: '8px' }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: '#fff' }}>CLICK TO EXPAND SCREENSHOT</span>
                </div>

                {/* Left/Right controls if multiple images */}
                {project.screenshots.length > 1 && (
                  <>
                    <button onClick={handlePrevImage} style={{ ...styles.navArrowBtn, left: '15px' }} aria-label="Previous image">
                      <ChevronLeft size={20} />
                    </button>
                    <button onClick={handleNextImage} style={{ ...styles.navArrowBtn, right: '15px' }} aria-label="Next image">
                      <ChevronRight size={20} />
                    </button>
                  </>
                )}
                
                {/* Image counter indicator */}
                <div style={styles.imageCounter}>
                  {activeImageIndex + 1} / {project.screenshots.length}
                </div>
              </div>

              {/* Thumbnails list if multiple screenshots */}
              {project.screenshots.length > 1 && (
                <div style={styles.thumbnailsContainer}>
                  {project.screenshots.map((shot, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      style={{
                        ...styles.thumbnailBtn,
                        borderColor: activeImageIndex === idx ? accentColor : 'rgba(255, 255, 255, 0.1)',
                        boxShadow: activeImageIndex === idx ? `0 0 10px ${accentColor}` : 'none',
                      }}
                    >
                      <img 
                        src={shot} 
                        alt={`Thumbnail ${idx + 1}`} 
                        style={styles.thumbnailImg}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div style={styles.lightboxOverlay} onClick={() => setIsLightboxOpen(false)}>
          <div style={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeBtn} onClick={() => setIsLightboxOpen(false)}>
              <X size={24} />
            </button>
            <img 
              src={project.screenshots[activeImageIndex]} 
              alt={project.title} 
              style={styles.lightboxImage}
            />
            {project.screenshots.length > 1 && (
              <>
                <button onClick={handlePrevImage} style={{ ...styles.lightboxArrow, left: '20px' }}>
                  <ChevronLeft size={32} />
                </button>
                <button onClick={handleNextImage} style={{ ...styles.lightboxArrow, right: '20px' }}>
                  <ChevronRight size={32} />
                </button>
              </>
            )}
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
  },
  projectIdText: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    letterSpacing: '2px',
    color: 'rgba(255, 255, 255, 0.4)',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1.1fr 0.9fr',
    gap: '2.5rem',
    alignItems: 'start',
  },
  infoCol: {
    width: '100%',
  },
  infoCard: {
    padding: '2.5rem',
    position: 'relative',
    height: '100%',
  },
  title: {
    fontSize: '2.25rem',
    fontWeight: '800',
    letterSpacing: '-0.02em',
    color: '#fff',
    marginBottom: '1rem',
    lineHeight: '1.2',
  },
  metaRow: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1.25rem',
    marginBottom: '1.5rem',
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
  },
  metaText: {
    color: 'var(--text-muted)',
  },
  divider: {
    height: '1px',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 100%)',
    marginBottom: '1.5rem',
  },
  sectionSubTitle: {
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
    letterSpacing: '1.5px',
    color: '#fff',
    marginBottom: '1rem',
    fontWeight: '700',
  },
  description: {
    color: 'var(--text-muted)',
    fontSize: '1rem',
    lineHeight: '1.6',
    marginBottom: '2rem',
  },
  deliverablesList: {
    listStyle: 'none',
    padding: 0,
    margin: '0 0 2rem 0',
  },
  deliverableItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '12px',
    marginBottom: '0.85rem',
  },
  checkIcon: {
    flexShrink: 0,
    marginTop: '2px',
  },
  deliverableText: {
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
    lineHeight: '1.5',
  },
  techWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
  },
  techTag: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '500',
    border: '1px solid',
    padding: '0.25rem 0.75rem',
    borderRadius: '30px',
    background: 'rgba(0, 0, 0, 0.2)',
  },
  galleryCol: {
    width: '100%',
  },
  galleryCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  mainImageWrapper: {
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    aspectRatio: '16/10',
    cursor: 'pointer',
    background: '#040508',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    transition: 'transform 0.5s ease',
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'radial-gradient(circle, transparent 50%, rgba(5,6,11,0.4) 100%), linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
    backgroundSize: '100% 100%, 100% 6px',
    pointerEvents: 'none',
    zIndex: 2,
  },
  hoverActionOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'rgba(5, 6, 11, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 3,
  },
  navArrowBtn: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'rgba(5, 6, 11, 0.8)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    color: '#fff',
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    zIndex: 4,
    transition: 'all 0.3s ease',
  },
  imageCounter: {
    position: 'absolute',
    bottom: '12px',
    right: '12px',
    background: 'rgba(5, 6, 11, 0.85)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '2px 8px',
    borderRadius: '4px',
    color: '#fff',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.75rem',
    zIndex: 4,
  },
  thumbnailsContainer: {
    display: 'flex',
    gap: '0.75rem',
    flexWrap: 'wrap',
    marginTop: '0.5rem',
  },
  thumbnailBtn: {
    width: '80px',
    height: '50px',
    padding: 0,
    borderRadius: '4px',
    overflow: 'hidden',
    background: '#040508',
    border: '2px solid',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  thumbnailImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  errorContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '70vh',
  },
  errorCard: {
    padding: '3rem',
    textAlign: 'center',
    maxWidth: '500px',
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
    maxWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightboxImage: {
    maxWidth: '90vw',
    maxHeight: '90vh',
    objectFit: 'contain',
    borderRadius: '4px',
    boxShadow: '0 0 30px rgba(0,0,0,0.8)',
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
    background: 'rgba(5, 6, 11, 0.5)',
    border: 'none',
    color: '#fff',
    borderRadius: '50%',
    width: '60px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    transition: 'background 0.3s ease',
  },
};

// Add CSS injection for hover actions & media queries
const styleRules = `
.project-detail-grid {
  grid-template-columns: 1.1fr 0.9fr;
}
.mainImageWrapper:hover .image-hover-action {
  opacity: 1 !important;
}
.mainImageWrapper:hover img {
  transform: scale(1.02);
}
.navArrowBtn:hover {
  background: var(--neon-cyan) !important;
  color: #000 !important;
  box-shadow: 0 0 10px var(--neon-cyan);
}
.glass-card-pink .navArrowBtn:hover {
  background: var(--neon-pink) !important;
  color: #fff !important;
  box-shadow: 0 0 10px var(--neon-pink);
}
@media (max-width: 991px) {
  .project-detail-grid {
    grid-template-columns: 1fr !important;
    gap: 2rem !important;
  }
}
`;

if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(styleRules));
  document.head.appendChild(style);
}
