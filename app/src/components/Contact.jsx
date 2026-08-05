import { Mail, MapPin } from 'lucide-react';

const Linkedin = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const Whatsapp = ({ size = 24, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="currentColor"
    {...props}
  >
    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.504-5.729-1.463L0 24zm6.59-4.846c1.6.95 3.197 1.45 4.817 1.452 5.518 0 10.007-4.48 10.01-10.002.002-2.675-1.03-5.19-2.909-7.07C16.69 1.645 14.18 1.01 11.51 1.01c-5.522 0-10.01 4.482-10.011 10.006-.001 1.748.46 3.454 1.335 4.962L1.758 20.37l4.889-1.216zM17.5 14.38c-.299-.149-1.762-.87-2.035-.97-.273-.1-.471-.149-.669.149-.198.3-.769.95-.943 1.149-.173.199-.347.224-.646.074-.3-.15-1.264-.466-2.41-1.484-.892-.796-1.493-1.78-1.667-2.079-.174-.3-.019-.461.13-.61.134-.133.3-.347.449-.521.149-.173.198-.298.298-.497.1-.199.05-.373-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.762-.719 2.01-1.412.248-.694.248-1.289.173-1.411-.074-.122-.272-.198-.57-.347z"/>
  </svg>
);

export default function Contact() {
  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="container" style={styles.centeredWrapper}>
        
        <h2 className="section-title">
          Let's Connect
        </h2>

        <div className="glass-card" style={styles.infoCard}>
          <div className="scanline"></div>
          
          <h3 style={styles.subtitle}>Let's build something intelligent.</h3>
          <p style={styles.description}>
            I'm always open to discussing AI/ML projects, full-stack collaborations, research opportunities, or even bass sessions. Reach out via any of the secure nodes below:
          </p>

          <div style={styles.linksContainer}>
            <a 
              href="mailto:valentenocavlenora@gmail.com" 
              className="btn-neon"
              style={styles.contactBtn}
            >
              <Mail size={18} />
              <span>valentenocavlenora@gmail.com</span>
            </a>
            
            <a 
              href="https://linkedin.com/in/valentenolenora" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-neon btn-neon-pink"
              style={styles.contactBtn}
            >
              <Linkedin size={18} />
              <span>linkedin.com/in/valentenolenora</span>
            </a>

            <a 
              href="https://github.com/NightKing-V" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-neon"
              style={{ ...styles.contactBtn, borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--neon-purple)';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(138, 43, 226, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'var(--neon-purple)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Github size={18} />
              <span>github.com/NightKing-V</span>
            </a>

            {/* WhatsApp Integration */}
            <a 
              href="https://wa.me/94763114242" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-neon"
              style={{ ...styles.contactBtn, borderColor: '#39ff14', color: '#39ff14' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#39ff14';
                e.currentTarget.style.color = '#000';
                e.currentTarget.style.boxShadow = '0 0 15px rgba(57, 255, 20, 0.5)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = '#39ff14';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              <Whatsapp size={18} />
              <span>WhatsApp: +94 76 311 4242</span>
            </a>
          </div>

          <div style={styles.locationContainer}>
            <MapPin size={16} style={{ color: 'var(--neon-cyan)', marginRight: '8px' }} />
            <span style={styles.locationText}>
              Based in: <strong>Piliyandala, Western Province, Sri Lanka</strong>
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

const styles = {
  section: {
    paddingBottom: '120px',
  },
  centeredWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
  },
  infoCard: {
    padding: '2.5rem',
    maxWidth: '600px',
    width: '100%',
  },
  subtitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
    textAlign: 'center',
  },
  description: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '2rem',
    textAlign: 'center',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    marginBottom: '2.5rem',
  },
  contactBtn: {
    padding: '0.9rem 1.25rem',
    borderRadius: '10px',
    fontSize: '0.9rem',
    justifyContent: 'flex-start',
    width: '100%',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '1.5rem',
  },
  locationText: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
  },
};
