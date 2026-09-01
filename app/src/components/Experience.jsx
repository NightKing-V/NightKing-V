import { useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const experiences = [
    {
      role: 'AI/ML Engineer - Freelance',
      company: 'WaveSkill Pvt. Ltd.',
      duration: 'December 2025 - Present',
      location: 'Sri Lanka',
      details: [
        'Designed and Engineered the AI-powered financial document extraction pipeline with computer vision models and helper agents to extract financial data from company statements.',
        'Developed the fundamental analysis engine for the Stock Market API to give users stats and AI-powered insights on companies regarding their financial positions.',
        'Developed an Agentic Shopping assistant for Baby Care products e-commerce website (TOGO).',
        'Developed a TTS dataset and trained a VITS Model for Sinhala.',
      ],
      color: 'var(--neon-cyan)',
    },
    {
      role: 'AI/ML Engineer - Intern',
      company: 'AiRentoSoft Pvt. Ltd.',
      duration: 'March 2026 - September 2026',
      location: 'Sri Lanka (6 Months)',
      details: [
        'Developed a vehicle damage detection system with DL models, API and Mobile app.',
        'Collaborated in further developing the AiRentoSoft System which includes the Web app, Mobile app, Reservations Plugin and AI Caller Agent.',
        'Assisted in business leads extraction for potential clients for improving business opportunities.',
        'Collaborated with the developers, business support team and QA engineers via Jira with scheduled sprints and meetings.',
      ],
      color: 'var(--neon-pink)',
    },
    {
      role: 'AI/ML Engineer - Intern',
      company: 'Residue Solutions Pvt. Ltd.',
      duration: 'September 2025 - February 2026',
      location: 'Sri Lanka (6 Months)',
      details: [
        'Engineered an AI-powered shopping assistant (FashionHub.ai) for customers to get assistance on product search, Virtual Try-On, Cart management, Payment assistance, QnA and Size matching.',
        'Leader of the AI/ML Intern team of five, providing technical guidance on project architecture, code reviews, and implementation strategies and regular meetings to ensure milestones were met.',
        'Conducted research and integration by collaborating and leading the team members with LLM orchestration techniques, reasoning and multi-model pipelines that enabled complex product recommendations and Virtual Try-On features.',
      ],
      color: 'var(--neon-purple)',
    },
    {
      role: 'System Support Officer - IT',
      company: 'Mercantile Investments FPLC',
      duration: '2022',
      location: 'Sri Lanka (3 Months)',
      details: [
        'Assisted in hardware, network maintenance and repairs, significantly reducing issues for users through proactive diagnostics and component-level troubleshooting. Resolved technical queries in Help Desk support, providing rapid software, OS, and peripheral solutions for diverse end-user requirements.',
      ],
      color: 'var(--neon-blue)',
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Professional Experience
        </h2>

        <div className="timeline-container" style={styles.timeline}>
          {/* Central Line */}
          <div className="timeline-center-line" style={styles.centerLine}></div>

          {experiences.map((exp, idx) => {
            const isHovered = hoveredIdx === idx;
            return (
              <div 
                key={idx} 
                className={`timeline-item ${idx % 2 === 1 ? 'timeline-item-right' : 'timeline-item-left'}`}
                style={{
                  ...styles.timelineItem,
                  ...(idx % 2 === 1 ? styles.timelineItemRight : {}),
                }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                
                {/* Connector Dot */}
                <div 
                  className="timeline-dot"
                  style={{
                    ...styles.dot,
                    borderColor: exp.color,
                    boxShadow: isHovered ? `0 0 15px ${exp.color}` : 'none',
                    backgroundColor: isHovered ? exp.color : 'var(--bg-primary)',
                    ...(idx % 2 === 1 ? { left: '-7px', right: 'auto' } : {}),
                  }}
                ></div>

                {/* Date Label */}
                <div 
                  className={`timeline-date-container ${idx % 2 === 1 ? 'timeline-date-container-right' : 'timeline-date-container-left'}`}
                  style={{
                    ...styles.dateContainer,
                    ...(idx % 2 === 1 ? styles.dateContainerLeft : {}),
                  }}
                >
                  <span 
                    style={{
                      ...styles.date,
                      color: isHovered ? exp.color : 'var(--text-muted)',
                      fontFamily: 'var(--font-mono)'
                    }}
                  >
                    <Calendar size={14} style={{ marginRight: '6px' }} />
                    {exp.duration}
                  </span>
                </div>

                {/* Content Card */}
                <div 
                  className={`glass-card ${exp.color === 'var(--neon-pink)' ? 'glass-card-pink' : ''}`}
                  style={{
                    ...styles.card,
                    borderColor: isHovered ? exp.color : 'var(--glass-border)',
                  }}
                >
                  <div className="scanline"></div>
                  
                  <div style={styles.cardHeader}>
                    <Briefcase size={18} style={{ color: exp.color, marginRight: '10px' }} />
                    <div>
                      <h3 style={styles.roleTitle}>{exp.role}</h3>
                      <h4 style={{ ...styles.companyName, color: exp.color }}>{exp.company}</h4>
                    </div>
                  </div>

                  <div style={styles.locationContainer}>
                    <MapPin size={12} style={{ marginRight: '4px', color: 'var(--text-dark)' }} />
                    <span>{exp.location}</span>
                  </div>

                  <ul style={styles.detailsList}>
                    {exp.details.map((detail, dIdx) => (
                      <li key={dIdx} style={styles.detailItem}>
                        <span style={{ ...styles.bullet, backgroundColor: exp.color }}></span>
                        <span style={styles.detailText}>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

const styles = {
  timeline: {
    position: 'relative',
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '2rem 0',
  },
  centerLine: {
    position: 'absolute',
    left: '50%',
    top: 0,
    bottom: 0,
    width: '2px',
    background: 'linear-gradient(to bottom, var(--neon-cyan), var(--neon-pink), var(--neon-purple), var(--neon-blue))',
    transform: 'translateX(-50%)',
    opacity: 0.25,
  },
  timelineItem: {
    display: 'flex',
    justifyContent: 'flex-start',
    width: '50%',
    padding: '0 2.5rem 2.5rem 0',
    position: 'relative',
    transition: 'all 0.3s ease',
  },
  timelineItemRight: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-start',
    left: '50%',
    padding: '0 0 2.5rem 2.5rem',
  },
  dot: {
    position: 'absolute',
    right: '-7px',
    top: '1.5rem',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '2px solid',
    zIndex: 10,
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  dateContainer: {
    position: 'absolute',
    left: 'calc(100% + 2.5rem)',
    top: '1.35rem',
    width: '200px',
    display: 'flex',
    alignItems: 'center',
  },
  dateContainerLeft: {
    left: 'auto',
    right: 'calc(100% + 2.5rem)',
    justifyContent: 'flex-end',
  },
  date: {
    fontSize: '0.85rem',
    fontWeight: '600',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'color 0.3s ease',
  },
  card: {
    width: '100%',
    padding: '1.5rem',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    marginBottom: '0.75rem',
  },
  roleTitle: {
    fontSize: '1.2rem',
    fontWeight: '700',
    color: '#fff',
  },
  companyName: {
    fontSize: '0.95rem',
    fontWeight: '600',
    marginTop: '2px',
  },
  locationContainer: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '0.75rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    marginBottom: '1rem',
  },
  detailsList: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.5rem',
  },
  detailItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '0.5rem',
  },
  bullet: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    marginTop: '7px',
    flexShrink: 0,
  },
  detailText: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: '1.4',
  },
};

// Add responsive stylesheet adjustments for single-column timelines on mobile using explicit classes
const responsiveTimelineCSS = `
@media (max-width: 991px) {
  .timeline-item {
    width: 100% !important;
    left: 0 !important;
    padding: 0 0 2rem 2rem !important;
    flex-direction: column !important;
    align-items: flex-start !important;
  }
  .timeline-item-right {
    align-self: flex-start !important;
    padding: 0 0 2rem 2rem !important;
  }
  .timeline-center-line {
    left: 7px !important;
    transform: none !important;
  }
  .timeline-dot {
    left: 0px !important;
    right: auto !important;
  }
  .timeline-date-container, .timeline-date-container-right, .timeline-date-container-left {
    position: static !important;
    width: auto !important;
    margin-bottom: 0.5rem !important;
    justify-content: flex-start !important;
  }
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(responsiveTimelineCSS));
  document.head.appendChild(style);
}
export { responsiveTimelineCSS };
