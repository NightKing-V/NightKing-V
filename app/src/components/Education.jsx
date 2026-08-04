import { GraduationCap, Calendar, Award } from 'lucide-react';

export default function Education() {
  const degrees = [
    {
      degree: 'BSc (Hons) Computer Science',
      honours: 'First Class Honours',
      institution: 'University of Plymouth, UK (NSBM Green University)',
      duration: '2022 - 2025',
      color: 'var(--neon-cyan)',
      details: 'Completed advanced coursework in Artificial Intelligence, Software Engineering, Mathematical Optimization, and Databases. Achieved Top Academic standing.',
    },
    {
      degree: 'BComp (Hons) Information Systems',
      honours: '4th Year (Pursuing)',
      institution: 'University of Sri Jayewardenepura',
      duration: '2023 - Present',
      color: 'var(--neon-pink)',
      details: 'Focusing on enterprise information systems, IT infrastructure, management, and research in Sinhala machine translation models.',
    },
  ];

  return (
    <section id="education" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Education
        </h2>

        <div style={styles.grid}>
          {degrees.map((item, idx) => (
            <div 
              key={idx} 
              className={`glass-card ${item.color === 'var(--neon-pink)' ? 'glass-card-pink' : ''}`}
              style={{
                ...styles.card,
                borderColor: item.color === 'var(--neon-pink)' ? 'var(--glass-border-pink)' : 'var(--glass-border)',
              }}
            >
              <div className="scanline"></div>
              
              <div style={styles.header}>
                <div 
                  style={{
                    ...styles.iconContainer,
                    borderColor: item.color,
                    boxShadow: `0 0 10px rgba(${item.color === 'var(--neon-pink)' ? '255, 0, 127' : '0, 255, 255'}, 0.2)`
                  }}
                >
                  <GraduationCap size={22} style={{ color: item.color }} />
                </div>
                <div style={styles.dateContainer}>
                  <Calendar size={12} style={{ marginRight: '4px', color: 'var(--text-dark)' }} />
                  <span style={styles.duration}>{item.duration}</span>
                </div>
              </div>

              <div style={styles.content}>
                <h3 style={styles.degreeTitle}>{item.degree}</h3>
                
                <div style={styles.honoursContainer}>
                  <Award size={14} style={{ color: item.color, marginRight: '6px' }} />
                  <span style={{ ...styles.honours, color: item.color }}>{item.honours}</span>
                </div>

                <h4 style={styles.institution}>{item.institution}</h4>
                <p style={styles.details}>{item.details}</p>
              </div>

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
    gap: '2.5rem',
    width: '100%',
  },
  card: {
    padding: '2.25rem',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1.5rem',
  },
  iconContainer: {
    padding: '0.75rem',
    border: '1px solid',
    borderRadius: '12px',
    background: 'rgba(0,0,0,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  dateContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)',
    color: 'var(--text-muted)',
  },
  duration: {
    fontWeight: '500',
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
  },
  degreeTitle: {
    fontSize: '1.4rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '-0.02em',
    lineHeight: '1.2',
  },
  honoursContainer: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.5rem 0 1rem 0',
  },
  honours: {
    fontSize: '0.85rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    letterSpacing: '0.5px',
  },
  institution: {
    fontSize: '1rem',
    color: 'var(--text-main)',
    fontWeight: '600',
    marginBottom: '0.75rem',
  },
  details: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
  },
};
