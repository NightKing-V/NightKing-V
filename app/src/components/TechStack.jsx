import { useState } from 'react';
import { Code, Database, Cpu, Shield, HelpCircle, Terminal, Layers } from 'lucide-react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [activeSkill, setActiveSkill] = useState(null);

  const categories = [
    {
      id: 'languages',
      title: 'Languages',
      icon: <Code size={18} />,
      color: 'var(--neon-cyan)',
      skills: ['Python', 'Java', 'C#', 'C', 'Dart', 'PHP', 'JavaScript', 'SQL'],
    },
    {
      id: 'aiml',
      title: 'AI/ML & Data Science',
      icon: <Cpu size={18} />,
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
      id: 'fullstack',
      title: 'FullStack Technologies',
      icon: <Code size={18} />,
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
      id: 'devops',
      title: 'DevOps & MLOps',
      icon: <Shield size={18} />,
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
      id: 'cloud',
      title: 'Databases & Cloud',
      icon: <Database size={18} />,
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

  const skillDetails = {
    // Languages
    Python: { desc: 'Primary language for AI, data pipelines, web scraping, and machine learning models.', projects: ['Accordo.ai', 'Stock Market API', 'EduAgent', 'AI-Recruitment Platform', 'Vision Reasoning Surveillance', 'Data Analytics Dashboard'], level: 95 },
    Java: { desc: 'Used for object-oriented software engineering, data structures, and academic project backends.', projects: ['Coursework Systems'], level: 80 },
    'C#': { desc: 'Used for XAML desktop apps and full-stack development with .NET.', projects: ['Vehicle Rental System', 'AiRentoSoft System'], level: 85 },
    C: { desc: 'System programming foundation, memory allocation, and performance benchmarking.', projects: ['Academic systems'], level: 75 },
    Dart: { desc: 'Cross-platform app development language, primarily used with the Flutter framework.', projects: ['Accordo.ai', 'AiRentoSoft System'], level: 80 },
    PHP: { desc: 'Server-side scripting used for MVC web platforms with MySQL and MongoDB databases.', projects: ['PricePal'], level: 80 },
    JavaScript: { desc: 'Dynamic UI scripting, React layouts, and web application frontend logic.', projects: ['FashionHub.ai', 'Univize / JConnect', 'PricePal', 'AiRentoSoft System'], level: 90 },
    SQL: { desc: 'Database schema architecture, query optimization, joins, and ETL indexing pipelines.', projects: ['Data Analytics Dashboard', 'Vehicle Rental System', 'Univize / JConnect'], level: 85 },

    // AI/ML
    TensorFlow: { desc: 'Deep learning frameworks, neural network model training, and web model serving.', projects: ['Accordo.ai', 'Brain Tumour Detection Model'], level: 85 },
    PyTorch: { desc: 'Computer vision segmentation, Speech Synthesis (VITS), and deep neural network fine-tuning.', projects: ['Vehicle Damage Detection System', 'Sinhala TTS Model', 'Vision Reasoning Surveillance', 'Brain Tumour Detection Model'], level: 90 },
    'Scikit-learn': { desc: 'Classical machine learning pipelines, classification, regression, and data analytics.', projects: ['AI-Recruitment Platform', 'Data Analytics Dashboard'], level: 88 },
    Transformers: { desc: 'NLP sequence-to-sequence model fine-tuning (MBart50) and quantization.', projects: ['Subtitle Translation Model', 'AI-Recruitment Platform'], level: 85 },
    LangChain: { desc: 'AI orchestration, document ingestion agents, prompt formatting, and cognitive chains.', projects: ['FashionHub.ai', 'EduAgent', 'AI-Recruitment Platform', 'Vision Reasoning Surveillance'], level: 92 },
    LangGraph: { desc: 'Stateful multi-agent systems, circular task execution graphs, and robust flow controls.', projects: ['FashionHub.ai', 'TOGO'], level: 90 },
    LlamaIndex: { desc: 'RAG index structures, semantic document mapping, and vector metadata queries.', projects: ['Stock Market API'], level: 85 },
    Unsloth: { desc: 'Accelerated low-memory LLM fine-tuning using LoRA adapters on dual T4 GPUs.', projects: ['Subtitle Translation Model'], level: 85 },
    VITS: { desc: 'Variational Inference Text-to-Speech (TTS) voice modeling for the Sinhala language.', projects: ['Sinhala TTS Model'], level: 80 },
    XGBoost: { desc: 'Gradient boosted trees used to analyze job market trends and predict classifications.', projects: ['Data Analytics Dashboard'], level: 80 },
    CrewAI: { desc: 'Multi-agent role-playing structures, task divisions, and autonomous tool bindings.', projects: ['TOGO', 'EduAgent', 'AI-Pasala'], level: 88 },
    Groq: { desc: 'Ultra-low latency cloud LPU inference server setups for RAG systems.', projects: ['FashionHub.ai', 'Stock Market API', 'AI-Recruitment Platform'], level: 90 },
    Gemini: { desc: 'Google Multimodal LLM integration for layout extraction and vision analysis.', projects: ['FashionHub.ai', 'AI-Pasala'], level: 90 },
    Ollama: { desc: 'Local LLM serving infrastructure (Llama3, Mistral) for agent privacy.', projects: ['FashionHub.ai', 'EduAgent', 'Vision Reasoning Surveillance'], level: 90 },
    OpenCV: { desc: 'Image preprocessing, thresholding, contour detection, and frame analysis streams.', projects: ['Brain Tumour Detection Model', 'Vision Reasoning Surveillance', 'Stock Market API'], level: 85 },
    'Apache Kafka': { desc: 'Real-time high-throughput message streaming pipeline for database synchronization.', projects: ['FashionHub.ai'], level: 80 },

    // FullStack
    FastAPI: { desc: 'High-performance async Python backend APIs with built-in Pydantic verification.', projects: ['FashionHub.ai', 'Accordo.ai', 'Stock Market API', 'TOGO', 'Vehicle Damage Detection System'], level: 92 },
    'Node.js': { desc: 'Asynchronous event-driven backend services and API gateways.', projects: ['AiRentoSoft System', 'Univize / JConnect', 'AI-Pasala'], level: 85 },
    Django: { desc: 'Python web framework, ORM, REST API integrations, and database migrations.', projects: ['Univize / JConnect'], level: 80 },
    Streamlit: { desc: 'Rapid prototyping tool for creating AI web interfaces and dashboards.', projects: ['AI-Recruitment Platform', 'Vision Reasoning Surveillance', 'EduAgent'], level: 90 },
    'Next.js': { desc: 'React meta-framework for serverless API endpoints, SSR, and dynamic rendering.', projects: ['FashionHub.ai', 'AI-Pasala', 'Univize / JConnect'], level: 88 },
    React: { desc: 'Modular web layouts, custom hooks, context state management, and component lifecycles.', projects: ['AiRentoSoft System', 'Univize / JConnect', 'Vehicle Damage Detection System'], level: 90 },
    'Expo (React Native)': { desc: 'Used to compile and ship Android/iOS mobile application interfaces.', projects: ['AiRentoSoft System', 'Vehicle Damage Detection System'], level: 80 },
    Flutter: { desc: 'Cross-platform app compiles, material rendering, and real-time audio playback.', projects: ['Accordo.ai', 'AiRentoSoft System'], level: 85 },
    '.NET (C#)': { desc: 'Enterprise desktop services, booking system databases, and REST APIs.', projects: ['AiRentoSoft System', 'Vehicle Rental System'], level: 80 },
    CodeIgniter: { desc: 'Lightweight PHP MVC web system used to handle relational database operations.', projects: ['PricePal'], level: 80 },

    // DevOps
    Docker: { desc: 'Containerizing application packages and setting up multi-stage deployment builds.', projects: ['AI-Pasala', 'Univize / JConnect'], level: 85 },
    'GitHub Actions': { desc: 'CI/CD workflow automation, build pipelines, and automated package deploys.', projects: ['Accordo.ai', 'Univize / JConnect'], level: 85 },
    Terraform: { desc: 'Infrastructure as Code for provisioning and configuring cloud computing networks.', projects: ['Cloud Deployments'], level: 75 },
    Ansible: { desc: 'IT automation, machine provisioning, and server orchestration scripts.', projects: ['Server Configs'], level: 75 },
    'Weights & Biases (WandB)': { desc: 'MLOps model parameter logging, loss curve visualization, and validation.', projects: ['Vehicle Damage Detection System', 'Brain Tumour Detection Model'], level: 80 },
    MLflow: { desc: 'Machine learning lifecycle registry, metric tracking, and checkpoint logging.', projects: ['AI-Pasala'], level: 80 },
    n8n: { desc: 'Visual workflow automation linking APIs, webhooks, databases, and agents.', projects: ['AI-Pasala'], level: 85 },

    // Databases
    MongoDB: { desc: 'NoSQL document storage for flexible schemas, e-commerce products, and social feeds.', projects: ['Accordo.ai', 'Stock Market API', 'FashionHub.ai', 'AI-Recruitment Platform', 'Univize / JConnect', 'PricePal'], level: 90 },
    PostgreSQL: { desc: 'Relational DBMS used for complex transaction flows, indexing, and joins.', projects: ['TOGO', 'Univize / JConnect'], level: 88 },
    MySQL: { desc: 'Relational database schema design and transactional management.', projects: ['Academic projects'], level: 80 },
    ChromaDB: { desc: 'Lightweight vector database for sentence-transformer embeddings storage.', projects: ['EduAgent', 'AI-Pasala'], level: 85 },
    Qdrant: { desc: 'Dedicated vector search engine for similarity metrics matching in RAG pipelines.', projects: ['AI-Recruitment Platform'], level: 85 },
    Weaviate: { desc: 'Vector database engine for context indexing and semantic searches.', projects: ['FashionHub.ai'], level: 85 },
    Neo4j: { desc: 'Graph DBMS mapping interconnected social network node profiles.', projects: ['Univize / JConnect'], level: 80 },
    'Google Cloud (GCP)': { desc: 'Cloud storage, virtual compute systems, and package repository deploys.', projects: ['Accordo.ai'], level: 80 },
    'Microsoft Azure': { desc: 'Hosting containerized microservices, setting up registries, and bicep scripts.', projects: ['Univize / JConnect', 'AiRentoSoft System'], level: 85 },
    Snowflake: { desc: 'Enterprise data warehousing, query processing, and loading ETL pipes.', projects: ['Data Analytics Dashboard'], level: 80 },
    'Google Vertex AI': { desc: 'Generative machine learning models API, fine-tuning, and model evaluations.', projects: ['FashionHub.ai'], level: 85 },
    'Streamlit Cloud': { desc: 'Deploying data analytics dashboard applications to the web.', projects: ['AI-Recruitment Platform'], level: 80 },
    'Hugging Face Spaces': { desc: 'Model hosting space for computer vision YOLO wrappers and public apps.', projects: ['Vehicle Damage Detection System'], level: 85 },
  };

  const filteredCategories = selectedCategory === 'all' 
    ? categories 
    : categories.filter(c => c.id === selectedCategory);

  return (
    <section id="tech" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Tech Stack
        </h2>

        {/* Interactive Filters */}
        <div style={styles.filters}>
          <button
            onClick={() => { setSelectedCategory('all'); setActiveSkill(null); }}
            style={{
              ...styles.filterBtn,
              ...(selectedCategory === 'all' ? styles.activeFilterBtn : {}),
            }}
          >
            <Layers size={14} style={{ marginRight: '6px' }} />
            All Skills
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => { setSelectedCategory(cat.id); setActiveSkill(null); }}
              style={{
                ...styles.filterBtn,
                ...(selectedCategory === cat.id ? {
                  borderColor: cat.color,
                  color: cat.color,
                  boxShadow: `0 0 10px ${cat.color}33`,
                  transform: 'translateY(-1px)'
                } : {}),
              }}
            >
              {cat.icon}
              <span style={{ marginLeft: '6px' }}>{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Layout Grid - Badges (Left) vs Skill Scanner (Right) */}
        <div style={styles.dashboard}>
          
          {/* Left Panel - Glowing Skills Grid */}
          <div style={styles.skillsGridArea}>
            {filteredCategories.map((cat) => (
              <div 
                key={cat.id} 
                className="glass-card"
                style={{
                  ...styles.categoryCard,
                  borderColor: `rgba(${cat.id === 'aiml' ? '255, 0, 127' : '0, 255, 255'}, 0.12)`,
                }}
              >
                <div className="scanline"></div>
                <div style={styles.cardHeader}>
                  <span style={{ color: cat.color }}>{cat.icon}</span>
                  <h3 style={styles.categoryTitle}>{cat.title}</h3>
                </div>

                <div style={styles.skillsContainer}>
                  {cat.skills.map((skill, sIdx) => {
                    const isHovered = activeSkill === skill;
                    return (
                      <button
                        key={sIdx}
                        onClick={() => setActiveSkill(skill)}
                        onMouseEnter={() => setActiveSkill(skill)}
                        style={{
                          ...styles.skillBadge,
                          borderColor: isHovered ? cat.color : 'rgba(255, 255, 255, 0.08)',
                          boxShadow: isHovered ? `0 0 12px ${cat.color}` : 'none',
                          color: isHovered ? '#fff' : 'var(--text-muted)',
                          background: isHovered ? 'rgba(255, 255, 255, 0.03)' : 'rgba(0, 0, 0, 0.25)',
                        }}
                      >
                        <span 
                          style={{
                            ...styles.badgeDot, 
                            backgroundColor: cat.color,
                            boxShadow: `0 0 6px ${cat.color}`
                          }}
                        ></span>
                        {skill}
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* Right Panel - Sticky Skill Analyzer / Terminal */}
          <div style={styles.terminalContainer}>
            <div className="glass-card" style={styles.terminal}>
              <div className="scanline" style={{ animation: 'scan 4s linear infinite', opacity: 0.3 }}></div>
              
              <div style={styles.terminalHeader}>
                <Terminal size={16} style={styles.terminalIcon} />
                <span style={styles.terminalTitle}>SKILL DIAGNOSTIC TERMINAL v1.0</span>
              </div>

              <div style={styles.terminalBody}>
                {activeSkill && skillDetails[activeSkill] ? (
                  <div style={styles.diagnosticContent}>
                    <div style={styles.diagnosticHeader}>
                      <span style={styles.probeLabel}>NODE PROBE:</span>
                      <h4 style={styles.skillTitle}>{activeSkill}</h4>
                    </div>

                    <div style={styles.meterContainer}>
                      <span style={styles.meterLabel}>SKILL PROFICIENCY</span>
                      <div style={styles.meterBg}>
                        <div 
                          style={{ 
                            ...styles.meterFill, 
                            width: `${skillDetails[activeSkill].level}%`,
                            boxShadow: '0 0 8px var(--neon-cyan)'
                          }}
                        ></div>
                      </div>
                      <span style={styles.meterPct}>{skillDetails[activeSkill].level}%</span>
                    </div>

                    <div style={styles.infoBlock}>
                      <span style={styles.blockTitle}>FUNCTIONAL ANALYSIS:</span>
                      <p style={styles.blockText}>{skillDetails[activeSkill].desc}</p>
                    </div>

                    <div style={styles.infoBlock}>
                      <span style={styles.blockTitle}>ASSOCIATED REPOSITORIES & SYSTEMS:</span>
                      <div style={styles.projectsGrid}>
                        {skillDetails[activeSkill].projects.map((proj, pIdx) => (
                          <span key={pIdx} style={styles.projectTag}>
                            {proj}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={styles.idleTerminal}>
                    <p style={styles.idleText}>
                      SYSTEM STANDBY...
                    </p>
                    <p style={styles.idleSubtext}>
                      HOVER OR TAP A SKILL NODE TO ANALYZE ARCHITECTURE DATA
                    </p>
                    <div style={styles.pulseScanner}></div>
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

const styles = {
  filters: {
    display: 'flex',
    gap: '0.75rem',
    marginBottom: '2.5rem',
    flexWrap: 'wrap',
  },
  filterBtn: {
    background: 'rgba(0, 0, 0, 0.4)',
    border: '1px solid rgba(0, 255, 255, 0.08)',
    borderRadius: '30px',
    padding: '0.5rem 1.1rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.8rem',
    fontWeight: '600',
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    transition: 'all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1)',
  },
  activeFilterBtn: {
    borderColor: 'var(--neon-cyan)',
    color: 'var(--neon-cyan)',
    boxShadow: '0 0 10px rgba(0, 255, 255, 0.2)',
    transform: 'translateY(-1px)',
  },
  dashboard: {
    display: 'grid',
    gridTemplateColumns: '1.2fr 0.8fr',
    gap: '2.5rem',
    alignItems: 'start',
    width: '100%',
  },
  skillsGridArea: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  categoryCard: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
  },
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1.25rem',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
    paddingBottom: '0.5rem',
  },
  categoryTitle: {
    fontSize: '1.15rem',
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.02em',
  },
  skillsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.65rem',
  },
  skillBadge: {
    background: 'none',
    border: '1px solid',
    outline: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    padding: '0.45rem 0.9rem',
    borderRadius: '30px',
    fontSize: '0.8rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.2)',
  },
  badgeDot: {
    width: '5px',
    height: '5px',
    borderRadius: '50%',
    display: 'inline-block',
  },
  terminalContainer: {
    position: 'sticky',
    top: 'calc(var(--nav-height) + 20px)',
    height: 'auto',
  },
  terminal: {
    background: 'rgba(3, 4, 8, 0.85)',
    borderColor: 'rgba(0, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.8), 0 0 15px rgba(0, 255, 255, 0.05)',
    padding: '1.5rem',
    fontFamily: 'var(--font-mono)',
  },
  terminalHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderBottom: '1px solid rgba(0, 255, 255, 0.15)',
    paddingBottom: '0.75rem',
    marginBottom: '1.25rem',
  },
  terminalIcon: {
    color: 'var(--neon-cyan)',
    filter: 'drop-shadow(0 0 3px var(--neon-cyan))',
  },
  terminalTitle: {
    fontSize: '0.75rem',
    fontWeight: '700',
    color: 'var(--neon-cyan)',
    letterSpacing: '1px',
  },
  terminalBody: {
    minHeight: '260px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  diagnosticContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1.25rem',
    textAlign: 'left',
  },
  diagnosticHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.25rem',
  },
  probeLabel: {
    fontSize: '0.65rem',
    color: 'var(--neon-pink)',
    fontWeight: '700',
    letterSpacing: '1.5px',
  },
  skillTitle: {
    fontSize: '1.5rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '-0.02em',
    textShadow: '0 0 8px rgba(255,255,255,0.1)',
  },
  meterContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  meterLabel: {
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.5px',
  },
  meterBg: {
    width: '100%',
    height: '6px',
    background: 'rgba(255,255,255,0.05)',
    borderRadius: '3px',
    overflow: 'hidden',
  },
  meterFill: {
    height: '100%',
    background: 'linear-gradient(90deg, var(--neon-cyan), var(--neon-blue))',
    borderRadius: '3px',
    transition: 'width 0.5s ease-out',
  },
  meterPct: {
    fontSize: '0.75rem',
    fontWeight: '700',
    alignSelf: 'flex-end',
    color: 'var(--neon-cyan)',
  },
  infoBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.4rem',
  },
  blockTitle: {
    fontSize: '0.65rem',
    color: 'var(--text-muted)',
    letterSpacing: '0.5px',
    fontWeight: '700',
  },
  blockText: {
    fontSize: '0.85rem',
    color: 'var(--text-main)',
    lineHeight: '1.5',
    fontFamily: 'var(--font-main)',
  },
  projectsGrid: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.4rem',
  },
  projectTag: {
    fontSize: '0.7rem',
    padding: '0.2rem 0.5rem',
    background: 'rgba(0, 255, 255, 0.05)',
    border: '1px solid rgba(0, 255, 255, 0.1)',
    borderRadius: '4px',
    color: 'var(--neon-cyan)',
    fontFamily: 'var(--font-main)',
    fontWeight: '500',
  },
  idleTerminal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    gap: '0.75rem',
    padding: '2rem',
  },
  idleText: {
    fontSize: '0.85rem',
    fontWeight: '700',
    color: 'rgba(255, 255, 255, 0.4)',
    letterSpacing: '2px',
    animation: 'blink 1.5s infinite',
  },
  idleSubtext: {
    fontSize: '0.7rem',
    color: 'var(--text-dark)',
    lineHeight: '1.5',
    maxWidth: '220px',
  },
  pulseScanner: {
    width: '30px',
    height: '30px',
    border: '1px solid rgba(0, 255, 255, 0.15)',
    borderRadius: '50%',
    animation: 'pulse-neon 3s infinite',
    marginTop: '0.5rem',
  },
};

const interactiveTechCSS = `
@media (max-width: 991px) {
  #tech div[style*="dashboard"] {
    grid-template-columns: 1fr !important;
  }
  #tech div[style*="terminalContainer"] {
    position: static !important;
    margin-top: 1.5rem;
  }
}
`;
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.appendChild(document.createTextNode(interactiveTechCSS));
  document.head.appendChild(style);
}
export { interactiveTechCSS };
