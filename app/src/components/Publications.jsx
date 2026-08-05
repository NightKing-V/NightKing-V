import { FileText, Package, ExternalLink } from 'lucide-react';

export default function Publications() {
  const contributions = [
    {
      type: 'paper',
      title: 'Musical Chord Recognition using Deep Learning',
      publisher: 'NSRSIT\'25 Conference Journal',
      description: 'Coauthored and published research covering time-frequency feature extraction and deep learning models (RNN, Bi-LSTM) to perform chord classification from audio files, achieving +80% accuracy on real-world datasets.',
      icon: <FileText size={22} style={{ color: 'var(--neon-cyan)' }} />,
      color: 'var(--neon-cyan)',
    },
    {
      type: 'package',
      title: 'accordoai - Music Information Retrieval PyPI Package',
      publisher: 'Python Package Index (PyPI)',
      description: 'Developed and published the official PyPI library which exposes pre-trained deep learning classification models and audio helper utilities for the developer community.',
      actionLabel: 'View PyPI Package',
      actionUrl: 'https://pypi.org/project/accordoai/',
      icon: <Package size={22} style={{ color: 'var(--neon-pink)' }} />,
      color: 'var(--neon-pink)',
    },
  ];

  return (
    <section id="publications" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Publications & Contributions
        </h2>

        <div style={styles.grid}>
          {contributions.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass-card ${item.color === 'var(--neon-pink)' ? 'glass-card-pink' : ''}`}
              style={{
                ...styles.card,
                borderColor: item.color === 'var(--neon-pink)' ? 'var(--glass-border-pink)' : 'var(--glass-border)',
              }}
            >
              <div className="scanline"></div>
              
              <div style={styles.cardHeader}>
                <div 
                  style={{
                    ...styles.iconContainer,
                    borderColor: item.color,
                    boxShadow: `0 0 10px rgba(${item.color === 'var(--neon-pink)' ? '255, 0, 127' : '0, 255, 255'}, 0.2)`
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <span style={{ ...styles.badge, color: item.color }}>
                    {item.type === 'paper' ? 'RESEARCH PAPER' : 'OPEN SOURCE'}
                  </span>
                  <h3 style={styles.title}>{item.title}</h3>
                  <h4 style={styles.publisher}>{item.publisher}</h4>
                </div>
              </div>

              <p style={styles.description}>{item.description}</p>

              {item.type !== 'paper' && (
                <div style={styles.actions}>
                  <a 
                    href={item.actionUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn-neon"
                    style={{
                      color: item.color,
                      borderColor: item.color,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = item.color;
                      e.currentTarget.style.color = item.color === 'var(--neon-pink)' ? '#fff' : '#000';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = item.color;
                    }}
                  >
                    <ExternalLink size={16} />
                    {item.actionLabel}
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  card: {
    padding: '2rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '1.25rem',
    marginBottom: '1.25rem',
  },
  iconContainer: {
    padding: '0.75rem',
    border: '1px solid',
    borderRadius: '12px',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  badge: {
    fontSize: '0.7rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    letterSpacing: '1px',
    marginBottom: '4px',
    display: 'inline-block',
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#fff',
    lineHeight: '1.3',
  },
  publisher: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    marginTop: '2px',
  },
  description: {
    fontSize: '0.95rem',
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    marginBottom: '1.5rem',
  },
  actions: {
    marginTop: 'auto',
    display: 'flex',
  },
};
