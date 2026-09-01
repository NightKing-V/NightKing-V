import { useState } from 'react';
import { Layers, Search, Briefcase } from 'lucide-react';

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
      id: 'vehicledamage',
      title: 'Vehicle Damage Detection System',
      category: 'work',
      tech: ['YOLO', 'PyTorch', 'FastAPI', 'React', 'HuggingFace', 'WandB', 'Kaggle', 'MLOps', 'Roboflow'],
      description: 'Developed a Vehicle Damage Detection system consisting of a combination of YOLO models with a FastAPI wrapper hosted in Huggingface spaces. Pre-trained the models on Image datasets, versioned and deployed using MLOps tools. Also further developed the live mobile app to support new features which is in Playstore and Appstore.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      id: 'airento',
      title: 'AiRentoSoft System',
      category: 'work',
      tech: ['React', 'Node.js', '.NET', 'Retel.ai', 'OCR', 'Azure DevOps'],
      description: 'Collaborated in Developing and Implementing new features including AI Integrations. Worked on the React Web application, Reservations Plugin, .NET API, and developed the 2.0 version of the Mobile app with similar features to the main system and released documentation in AZURE Devops. Added AI Integrated features like document scanning, card scanning using OCR models in both web and mobile apps. Also managed and worked on the AI Caller agent in Retel.ai for client requirements.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      id: 'businessleads',
      title: 'Business Leads Extraction Pipeline',
      category: 'work',
      tech: ['Playwright', 'Selenium', 'Python', 'ETL'],
      description: 'Implemented a business leads extraction pipeline for extracting potential clients in USA based car rental businesses using Automation scripts and web scraping and using ETL pipelines to process data into understandable formats for business support division to use.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      id: 'sinhalatts',
      title: 'Sinhala TTS Model',
      category: 'work',
      tech: ['Coqui VITS', 'PyTorch', 'Kaggle'],
      description: 'Developed a research purpose private TTS model with support for Sinhala language. Created a private dataset from scratch for VITS format to train the Speech Model. Trained on Kaggle dual T4 GPUs and gained research level quality output for product pitching and further development with funds.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      id: 'togo',
      title: 'TOGO - AI Shopping Assistant',
      category: 'work',
      tech: ['FastAPI', 'Postgres', 'CrewAI', 'LangGraph', 'Langfuse'],
      description: 'Developed an Agentic Shopping assistant for e-commerce website for baby care products. Implemented features in Product search, QnA using store policies and customer support. This is live on the TOGO website.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      id: 'fashionhub',
      title: 'FashionHub.ai - AI Shopping Assistant',
      category: 'work',
      tech: ['Next.js', 'FastAPI', 'Weaviate', 'Ollama', 'LangGraph', 'LangChain', 'Kafka', 'Groq', 'Gemini', 'MongoDB', 'Google Vertex AI'],
      description: 'Developed an intelligent AI shopping assistant that revolutionises the retail experience by utilising a ReAct capable Agent with DAG-based task execution. The platform features a high-throughput MongoDB to Weaviate Kafka pipeline for real-time data synchronization. Built on a scalable FastAPI microservices infrastructure, the system integrates a modular multi-LLM factory (Gemini, Llama) and Google Vertex AI for generative Virtual Try-On capabilities.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'Stock Market API',
      category: 'work',
      tech: ['FastAPI', 'LlamaIndex', 'OpenCV', 'Groq', 'MongoDB', 'LLMs', 'OCR'],
      description: 'Designed and engineered a scalable financial intelligence API using FastAPI for Fundamental analysis of Colombo Stock Exchange (CSE) filings. Built the analysis engine that can calculate core financial ratios and growth metrics, and hybrid OCR extraction engine with LLMs to transform unstructured quarterly statements into standardized datasets.',
      link: 'https://github.com/NightKing-V/',
    },
    
    // Personal Projects
    {
      title: 'Accordo.ai - Music Analysis Platform',
      category: 'personal',
      tech: ['TensorFlow', 'RNN', 'Bi-LSTM', 'Flutter', 'FastAPI', 'Celery', 'Redis', 'MongoDB', 'TensorFlow Serving', 'GCP', 'MinIO S3'],
      description: 'Final Year Research Project. Developed an intelligent system that performs musical analysis on audio for musicians (+80% accuracy). Practical Implementation using FastAPI, MongoDB, and TensorFlow Serving with a Flutter-based mobile UI for real-time analysis and playback integration. Deployed using CI/CD to GCP.',
      link: 'https://github.com/NightKing-V/Chord-Classification-Model-accordo.ai-',
    },
    {
      id: 'univize',
      title: 'Univize - University Social App',
      category: 'personal',
      tech: ['Django', 'FastAPI', 'Next.js', 'Neo4j', 'PostgreSQL (Supabase)', 'MongoDB', 'Redis', 'Supabase', 'Azure', 'GitHub Actions', 'Azure Bicep'],
      description: 'Group Project for USJP. Social application for university students featuring media sharing, direct messaging, and forum based discussions. Main backend in Django and FastAPI with PostgreSQL (Supabase), MongoDB, Neo4J, Redis and Supabase. Deployed on Azure with GitHub Actions & Azure Bicep.',
      link: 'https://github.com/NightKing-V/',
    },
    {
      title: 'EduAgent - AI-powered Research Assistant',
      category: 'personal',
      tech: ['CrewAI', 'LangChain', 'Ollama', 'Mistral LLM', 'ChromaDB', 'HuggingFace'],
      description: 'Research assistant leveraging LangChain, CrewAI, and Mistral LLM (via Ollama) for research paper analysis and academic Q&A. Implemented document ingestion, summarization, topic extraction, and semantic retrieval using HuggingFace embeddings with ChromaDB.',
      link: 'https://github.com/NightKing-V/EduAgent',
    },
    {
      title: 'AI-Powered Recruitment Platform',
      category: 'personal',
      tech: ['Streamlit', 'LangChain', 'Groq', 'Qdrant', 'HuggingFace', 'MongoDB', 'Llama LLMs', 'RAG'],
      description: 'Semantic resume-to-job description matching platform using Retrieval-Augmented Generation (RAG). Automatically analyzes resumes, generates job descriptions, and provides ranked job recommendations with similarity scores.',
      link: 'https://github.com/NightKing-V/AI-Recruitment-Platform',
    },
    {
      title: 'Vision Reasoning Surveillance System',
      category: 'personal',
      tech: ['PyTorch', 'OpenCV', 'YOLO', 'LangChain', 'Ollama', 'LLM', 'Streamlit', 'Telegram Bot'],
      description: 'Surveillance system to detect threats from real-time camera feed with the use of YOLO, and notify users with a detailed description of suspicious objects and scenes using LLM, LangChain and Telegram Bot.',
      link: 'https://github.com/NightKing-V/VisionReasoningSecuritySystem',
    },
    {
      title: 'Brain Tumour Detection Model',
      category: 'personal',
      tech: ['PyTorch', 'TensorFlow', 'OpenCV', 'U-Net', 'CNN', 'Albumentations', 'Kaggle'],
      description: 'Brain tumour detection model using the U-Net encoder-decoder architecture on 2D and 3D MRI image datasets. Implemented in PyTorch and TensorFlow with Albumentations data augmentation (~90% accuracy).',
      link: 'https://github.com/NightKing-V/TumorImageSegmentation',
    },
    {
      title: 'Data Analytics Dashboard',
      category: 'personal',
      tech: ['Python', 'SQL', 'Snowflake', 'ETL', 'XGBoost', 'Streamlit'],
      description: 'Analysed LinkedIn job posting data using a real-time ETL pipeline into Snowflake for warehousing and processing. Built regression and classification models using XGBoost, displayed in an interactive dashboard.',
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
        <div className="mobile-filters-scroll" style={styles.filters}>
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
        <div className="mobile-scroll-container" style={styles.grid}>
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

              {(proj.id || (proj.link && proj.link !== 'https://github.com/NightKing-V/')) && (
                <div style={styles.cardFooter}>
                  {proj.id ? (
                    <a 
                      href={`#/project/${proj.id}`} 
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
                      See More Info
                    </a>
                  ) : (
                    <a 
                      href={proj.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-neon"
                      style={{
                        ...styles.actionLink,
                        width: '100%',
                        justifyContent: 'center',
                        color: 'var(--neon-cyan)',
                        borderColor: 'var(--neon-cyan)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--neon-cyan)';
                        e.currentTarget.style.color = '#000';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = 'var(--neon-cyan)';
                      }}
                    >
                      <Github size={16} />
                      Explore Repository
                    </a>
                  )}
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
