import { useState } from 'react';
import { Mail, MapPin, Send, MessageSquare } from 'lucide-react';

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

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate contact form submission
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section" style={styles.section}>
      <div className="container">
        
        <h2 className="section-title">
          Let's Connect
        </h2>

        <div style={styles.grid}>
          {/* Left Column - Contact Info */}
          <div style={styles.infoCol}>
            <div className="glass-card" style={styles.infoCard}>
              <div className="scanline"></div>
              
              <h3 style={styles.subtitle}>Let's build something intelligent.</h3>
              <p style={styles.description}>
                I'm always open to discussing AI/ML projects, full-stack collaborations, research opportunities, or even bass sessions. Drop me a line!
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
              </div>

              <div style={styles.locationContainer}>
                <MapPin size={16} style={{ color: 'var(--neon-cyan)', marginRight: '8px' }} />
                <span style={styles.locationText}>
                  Based in: <strong>Piliyandala, Western Province, Sri Lanka</strong>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div style={styles.formCol}>
            <form onSubmit={handleSubmit} className="glass-card" style={styles.formCard}>
              <div className="scanline"></div>
              
              <div style={styles.formHeader}>
                <MessageSquare size={18} style={{ color: 'var(--neon-cyan)', marginRight: '8px' }} />
                <h3 style={styles.formTitle}>Send a Message</h3>
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="e.g. John Doe"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="e.g. john@example.com"
                  style={styles.input}
                />
              </div>

              <div style={styles.inputGroup}>
                <label style={styles.label}>Your Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Type your message here..."
                  style={{ ...styles.input, resize: 'vertical' }}
                />
              </div>

              <button 
                type="submit" 
                className="btn-neon" 
                style={{ ...styles.submitBtn, width: '100%', justifyContent: 'center' }}
                disabled={status === 'sending'}
              >
                <Send size={16} />
                {status === 'sending' ? 'Sending Link...' : status === 'success' ? 'Transmission Successful!' : 'Send Message'}
              </button>
            </form>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1.1fr',
    gap: '3rem',
    width: '100%',
    alignItems: 'start',
  },
  infoCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  infoCard: {
    padding: '2.5rem',
    height: '100%',
  },
  subtitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#fff',
    marginBottom: '1rem',
    letterSpacing: '-0.02em',
  },
  description: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '2rem',
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
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    paddingTop: '1.5rem',
  },
  locationText: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
  },
  formCol: {
    display: 'flex',
    flexDirection: 'column',
  },
  formCard: {
    padding: '2.5rem',
  },
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '0.75rem',
  },
  formTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#fff',
  },
  inputGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  label: {
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
    letterSpacing: '1px',
    textTransform: 'uppercase',
  },
  input: {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '8px',
    padding: '0.8rem 1rem',
    color: '#fff',
    fontFamily: 'var(--font-main)',
    fontSize: '0.95rem',
    outline: 'none',
    transition: 'all 0.3s ease',
  },
  submitBtn: {
    transition: 'all 0.3s ease',
  },
};

// Add styles for input focus effects
const inputFocusCSS = `
#contact input:focus, #contact textarea:focus {
  border-color: var(--neon-cyan) !important;
  box-shadow: 0 0 10px rgba(0, 255, 255, 0.15) !important;
  background: rgba(0, 0, 0, 0.6) !important;
}
@media (max-width: 991px) {
  #contact .container > div {
    grid-template-columns: 1fr !important;
    gap: 2.5rem !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(inputFocusCSS));
  document.head.appendChild(style);
}
export { inputFocusCSS };
