import { useState } from 'react';
import { ExternalLink, Layers, Search, Briefcase } from 'lucide-react';

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

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projectList = [
    // Work Projects
    {
      title: 'Vehicle Damage Detection System',
      category: 'work',
      tech: ['YOLO', 'Kaggle', 'Weights & Biases', 'FastAPI', 'React', 'Hugging Face', 'PyTorch'],
      description: 'Computer vision system utilizing YOLO models with a FastAPI wrapper hosted on Hugging Face Spaces. Models pre-trained on custom image datasets, versioned and deployed using MLOps tools. Live mobile app on Google Play Store and Apple App Store supporting real-time vehicle inspection.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'AiRentoSoft System',
      category: 'work',
      tech: ['React', 'Node.js', '.NET', 'Retel.ai', 'OCR'],
      description: 'Integrated AI-driven features including document and card scanning using OCR models in web and mobile apps. Managed and enhanced the Retel.ai AI Caller Agent for customer inquiry automation. Scaled React web applications, reservations plugins, and .NET APIs, managing documentation in Azure DevOps.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Business Leads Extraction Pipeline',
      category: 'work',
      tech: ['Playwright', 'Selenium', 'Python', 'ETL'],
      description: 'Automated pipeline to extract potential clients for US-based car rental businesses. Processed scraped data through custom ETL pipelines to deliver structured formats for sales and support.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Sinhala TTS Model',
      category: 'work',
      tech: ['Coqui VITS', 'Kaggle', 'PyTorch'],
      description: 'Research-focused custom Text-to-Speech (TTS) model supporting the Sinhala language. Built a Sinhala speech dataset from scratch and trained the VITS model on Kaggle dual T4 GPUs. Achieved high-fidelity research-level speech output ready for product pitches.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'TOGO - AI Shopping Assistant',
      category: 'work',
      tech: ['FastAPI', 'PostgreSQL', 'CrewAI', 'LangGraph'],
      description: 'Agentic shopping assistant designed for a baby care products e-commerce website. Implemented features for intelligent product search, QnA based on store policies, and automated customer support.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'FashionHub.ai - AI Shopping Assistant',
      category: 'work',
      tech: ['Next.js', 'FastAPI', 'Weaviate', 'Ollama', 'LangGraph', 'LangChain', 'Kafka', 'Groq', 'Gemini'],
      description: 'Intelligent retail assistant utilizing a ReAct agent with DAG-based task execution. High-throughput MongoDB-to-Weaviate Kafka pipeline built for real-time data synchronization. Integrates modular multi-LLM factory (Gemini, Llama) and Google Vertex AI for Virtual Try-On.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Stock Market API',
      category: 'work',
      tech: ['LlamaIndex', 'OpenCV', 'Groq', 'FastAPI', 'MongoDB'],
      description: 'Scalable financial intelligence API for fundamental analysis of Colombo Stock Exchange (CSE) filings. Computes core financial ratios and growth metrics to provide qualitative and quantitative corporate performance evaluations. Uses hybrid OCR and semantic mapping with LLMs to convert unstructured quarterly reports into clean datasets.',
      link: 'https://github.com/NightKing-V/',
    },
    
    // Personal Projects
    {
      title: 'Accordo.ai - Music Analysis Platform',
      category: 'personal',
      tech: ['Python', 'TensorFlow', 'RNN', 'Bi-LSTM', 'FastAPI', 'Celery', 'Redis', 'Flutter', 'MongoDB', 'GCP'],
      description: 'Final Year Research Project. Advanced music information retrieval (MIR) platform using deep learning to perform real-time chord classification. Explored Bi-LSTM networks and time-frequency feature extraction, achieving +80% accuracy on real-world datasets. Published as a PyPI package with automated CI/CD deployment on Google Cloud Platform.',
      link: 'https://github.com/NightKing-V/Chord-Classification-Model-accordo.ai-',
    },
    {
      title: 'Univize - University Social App',
      category: 'personal',
      tech: ['Next.js', 'Django', 'FastAPI', 'React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Neo4j', 'Redis', 'Azure'],
      description: 'Group Project for USJP. University social platform featuring media sharing, direct messaging, interactive forums, and collaborative academic threads. Implemented containerized microservices hosted on Azure with automated CI/CD pipelines via GitHub Actions and Azure Bicep.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'EduAgent - AI-powered Research Assistant',
      category: 'personal',
      tech: ['CrewAI', 'LangChain', 'Ollama', 'ChromaDB', 'Streamlit', 'Hugging Face'],
      description: 'Research paper analyzer and academic Q&A system leveraging multi-agent orchestration. Features automated document ingestion, semantic search using sentence-transformers, topic extraction, and summaries.',
      link: 'https://github.com/NightKing-V/EduAgent',
    },
    {
      title: 'AI-Powered Recruitment Platform',
      category: 'personal',
      tech: ['Streamlit', 'LangChain', 'Groq', 'Qdrant', 'Hugging Face', 'MongoDB'],
      description: 'Semantic resume-to-job description matching using Retrieval-Augmented Generation (RAG). Evaluates candidates with automated scoring and provides detailed candidate-job alignment reports.',
      link: 'https://github.com/NightKing-V/AI-Recruitment-Platform',
    },
    {
      title: 'Vision Reasoning Surveillance System',
      category: 'personal',
      tech: ['PyTorch', 'OpenCV', 'LangChain', 'YOLO', 'Ollama', 'Streamlit'],
      description: 'Real-time camera feed threat detection combining computer vision (YOLO) with LLM scene understanding. Translates visual threat detections into detailed natural language alerts pushed via a Telegram Bot.',
      link: 'https://github.com/NightKing-V/VisionReasoningSecuritySystem',
    },
    {
      title: 'Brain Tumour Detection Model',
      category: 'personal',
      tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'U-Net', 'CNN', 'Albumentations', 'Kaggle API'],
      description: 'Medical-grade U-Net segmentation model built for pixel-level tumor boundary detection on LGG MRI scans. Achieved ~90% accuracy using DICE coefficient, IoU metrics, and custom loss functions with advanced data augmentation.',
      link: 'https://github.com/NightKing-V/TumorImageSegmentation',
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'personal',
      tech: ['Python', 'SQL', 'Snowflake', 'ETL', 'XGBoost'],
      description: 'Analysed LinkedIn job postings using a real-time ETL pipeline extracting data to Snowflake for warehousing. Built machine learning models (XGBoost) for analyzing job market trends, displayed in an interactive dashboard.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Subtitle Translation Model',
      category: 'personal',
      tech: ['Transformer', 'LLM', 'Hugging Face', 'MBart50', 'BitsAndBytes'],
      description: 'Fine-tuned translation model for English-to-Sinhala subtitles. 8-bit quantized implementation optimizing model weights for efficient local deployment.',
      link: 'https://github.com/NightKing-V/SubtitleLLM_EngtoSin',
    },
    {
      title: 'PricePal - Price Comparison Website',
      category: 'personal',
      tech: ['PHP (CodeIgniter)', 'HTML', 'CSS', 'JavaScript', 'MongoDB', 'Bootstrap'],
      description: 'Web scraping bot collecting real-time e-commerce pricing data. Fully responsive layout delivering cross-platform price comparison.',
      link: 'https://github.com/NightKing-V/CompGroupProject---PriceComparisionWebSite',
    },
    {
      title: 'Biometrics Recognition System',
      category: 'personal',
      tech: ['MATLAB', 'Neural Networks'],
      description: 'Feedforward neural networks built for biometric user verification and pattern recognition.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Vehicle Rental System',
      category: 'personal',
      tech: ['.NET', 'C#', 'XAML', 'SQL Server'],
      description: 'Desktop application managing user bookings, billing, vehicle status, and returns.',
      link: 'https://github.com/NightKing-V/CSharp-GroupProject',
    },
  ];

  const filteredProjects = projectList.filter((proj) => {
    if (filter === 'all') return true;
    return proj.category === filter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        
        <h2 className="section-title">
          Projects Showcase
        </h2>

        {/* Filter Controls */}
        <div style={styles.filters}>
          <button
            onClick={() => setFilter('all')}
            style={{
              ...styles.filterBtn,
              ...(filter === 'all' ? styles.activeFilterBtn : {}),
            }}
          >
            <Layers size={14} style={{ marginRight: '6px' }} />
            All Projects
          </button>
          <button
            onClick={() => setFilter('work')}
            style={{
              ...styles.filterBtn,
              ...(filter === 'work' ? styles.activeFilterBtn : {}),
              borderColor: filter === 'work' ? 'var(--neon-pink)' : 'rgba(255, 255, 255, 0.1)',
              color: filter === 'work' ? 'var(--neon-pink)' : 'var(--text-muted)',
              boxShadow: filter === 'work' ? '0 0 10px rgba(255, 0, 127, 0.2)' : 'none',
            }}
          >
            <Briefcase size={14} style={{ marginRight: '6px' }} />
            Work Projects
          </button>
          <button
            onClick={() => setFilter('personal')}
            style={{
              ...styles.filterBtn,
              ...(filter === 'personal' ? styles.activeFilterBtn : {}),
            }}
          >
            <Search size={14} style={{ marginRight: '6px' }} />
            Personal & Academic
          </button>
        </div>

        {/* Project Grid */}
        <div style={styles.grid}>
          {filteredProjects.map((proj, idx) => (
            <div 
              key={idx} 
              className={`glass-card ${proj.category === 'work' ? 'glass-card-pink' : ''}`}
              style={{
                ...styles.card,
                borderColor: proj.category === 'work' ? 'var(--glass-border-pink)' : 'var(--glass-border)',
              }}
            >
              <div className="scanline"></div>
              
              <div style={styles.cardContent}>
                <div style={styles.header}>
                  <h3 style={styles.projectTitle}>{proj.title}</h3>
                  <span 
                    style={{
                      ...styles.badge,
                      color: proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                      borderColor: proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                    }}
                  >
                    {proj.category === 'work' ? 'WORK' : 'PERSONAL'}
                  </span>
                </div>
                
                <p style={styles.description}>{proj.description}</p>
                
                <div style={styles.techWrapper}>
                  {proj.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      style={{
                        ...styles.techTag,
                        color: proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                        borderColor: proj.category === 'work' ? 'rgba(255, 0, 127, 0.2)' : 'rgba(0, 255, 255, 0.2)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div style={styles.cardFooter}>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-neon"
                  style={{
                    ...styles.actionLink,
                    width: '100%',
                    justifyContent: 'center',
                    color: proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                    borderColor: proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)';
                    e.currentTarget.style.color = proj.category === 'work' ? '#fff' : '#000';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = proj.category === 'work' ? 'var(--neon-pink)' : 'var(--neon-cyan)';
                  }}
                >
                  <Github size={16} />
                  Explore Repository
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

const styles = {
  filters: {
    display: 'flex',
    gap: '1rem',
    marginBottom: '3rem',
    flexWrap: 'wrap',
  },
  filterBtn: {
    background: 'rgba(0, 0, 0, 0.3)',
    border: '1px solid rgba(0, 255, 255, 0.1)',
    borderRadius: '30px',
    padding: '0.6rem 1.25rem',
    color: 'var(--text-muted)',
    fontFamily: 'var(--font-mono)',
    fontSize: '0.85rem',
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
    gap: '2rem',
    width: '100%',
  },
  card: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    padding: '1.75rem',
    justifyContent: 'space-between',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    gap: '1rem',
    marginBottom: '1rem',
  },
  projectTitle: {
    fontSize: '1.25rem',
    fontWeight: '800',
    color: '#fff',
    letterSpacing: '-0.02em',
    lineHeight: '1.2',
  },
  badge: {
    fontSize: '0.7rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '700',
    border: '1px solid',
    padding: '0.2rem 0.5rem',
    borderRadius: '4px',
    flexShrink: 0,
  },
  description: {
    fontSize: '0.9rem',
    color: 'var(--text-muted)',
    lineHeight: '1.5',
    marginBottom: '1.5rem',
  },
  techWrapper: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  techTag: {
    fontSize: '0.75rem',
    fontFamily: 'var(--font-mono)',
    fontWeight: '500',
    border: '1px solid',
    padding: '0.2rem 0.6rem',
    borderRadius: '30px',
  },
  cardFooter: {
    marginTop: 'auto',
    display: 'flex',
  },
  actionLink: {
    transition: 'all 0.3s ease',
  },
};
export { styles };
