import { useState } from 'react';
import { Code, Database, Cpu, Shield, Cloud } from 'lucide-react';

export default function TechStack() {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const categories = [
    {
      title: 'Languages',
      icon: <Code size={20} style={{ color: 'var(--neon-cyan)' }} />,
      color: 'var(--neon-cyan)',
      skills: ['Python', 'Java', 'C#', 'C', 'Dart', 'PHP', 'JavaScript', 'SQL'],
    },
    {
      title: 'AI/ML & Data Science',
      icon: <Cpu size={20} style={{ color: 'var(--neon-pink)' }} />,
      color: 'var(--neon-pink)',
      skills: [
        'TensorFlow',
        'PyTorch',
        'Scikit-learn',
        'Transformers',
        'LangChain',
        'LangGraph',
        'LlamaIndex',
        'Unsloth',
        'VITS',
        'XGBoost',
        'CrewAI',
        'Groq',
        'Gemini',
        'Ollama',
        'OpenCV',
        'Apache Kafka',
      ],
    },
    {
      title: 'FullStack Technologies',
      icon: <Code size={20} style={{ color: 'var(--neon-blue)' }} />,
      color: 'var(--neon-blue)',
      skills: [
        'FastAPI',
        'Node.js',
        'Django',
        'Streamlit',
        'Next.js',
        'React',
        'Expo (React Native)',
        'Flutter',
        '.NET (C#)',
        'CodeIgniter',
      ],
    },
    {
      title: 'DevOps & MLOps',
      icon: <Shield size={20} style={{ color: 'var(--neon-purple)' }} />,
      color: 'var(--neon-purple)',
      skills: [
        'Docker',
        'GitHub Actions',
        'Terraform',
        'Ansible',
        'Weights & Biases (WandB)',
        'MLflow',
        'n8n',
      ],
    },
    {
      title: 'Databases & Cloud Platforms',
      icon: <Database size={20} style={{ color: 'var(--neon-cyan)' }} />,
      color: 'var(--neon-cyan)',
      skills: [
        'MongoDB',
        'PostgreSQL',
        'MySQL',
        'ChromaDB',
        'Qdrant',
        'Weaviate',
        'Neo4j',
        'Google Cloud (GCP)',
        'Microsoft Azure',
        'Snowflake',
        'Google Vertex AI',
        'Streamlit Cloud',
        'Hugging Face Spaces',
      ],
    },
  ];

  return (
    <section id="tech" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Tech Stack
        </h2>
        
        <div style={styles.grid}>
          {categories.map((cat, idx) => (
            <div 
              key={idx} 
              className={`glass-card ${cat.color === 'var(--neon-pink)' ? 'glass-card-pink' : ''}`}
              style={{
                ...styles.card,
                borderColor: `rgba(${cat.color === 'var(--neon-pink)' ? '255, 0, 127' : '0, 255, 255'}, 0.15)`
              }}
            >
              <div className="scanline"></div>
              
              <div style={styles.cardHeader}>
                {cat.icon}
                <h3 style={styles.categoryTitle}>{cat.title}</h3>
              </div>
              
              <div style={styles.skillsContainer}>
                {cat.skills.map((skill, sIdx) => {
                  const isHovered = hoveredSkill === skill;
                  return (
                    <div
                      key={sIdx}
                      style={{
                        ...styles.skillBadge,
                        borderColor: isHovered ? cat.color : 'rgba(255, 255, 255, 0.08)',
                        boxShadow: isHovered ? `0 0 10px ${cat.color}` : 'none',
                        color: isHovered ? '#fff' : 'var(--text-muted)',
                        background: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.2)',
                      }}
                      onMouseEnter={() => setHoveredSkill(skill)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    >
                      <span 
                        style={{
                          ...styles.badgeDot, 
                          backgroundColor: cat.color,
                          boxShadow: `0 0 6px ${cat.color}`
                        }}
                      ></span>
                      {skill}
                    </div>
                  );
                })}
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.5rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '0.75rem',
  },
  categoryTitle: {
    fontSize: '1.25rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.02em',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem',
  },
  skillBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.5rem 1rem',
    border: '1px solid',
    borderRadius: '30px',
    fontSize: '0.85rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '500',
    cursor: 'default',
    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  badgeDot: {
    width: '6px',
    height: '6px',
    borderRadius: '50%',
    display: 'inline-block',
  },
};
