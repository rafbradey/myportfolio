import esimul8Img from '../assets/esimul8_preview.jpg'
import ieeeImg from '../assets/ieee_paper_preview.jpg'
import isbmImg from '../assets/isbm_paper_preview.jpg'

export interface ArchitectureLayer {
  step: number
  title: string
  subtitle: string
  details: string
  techBadge: string
  accentColor: string
}

export interface ProjectData {
  id: string
  title: string
  category: string
  date: string
  summary: string
  technologies: string[]
  image?: string
  hasDemo?: boolean
  architecture: {
    overview: string
    layers: ArchitectureLayer[]
  }
  contributions: string[]
  evidenceName: string
  evidenceLink: string
}

export interface ExperienceData {
  id: string
  role: string
  organization: string
  location: string
  period: string
  badgeText: string
  responsibilities: string[]
  skills: string[]
}

export interface PublicationData {
  id: string
  title: string
  shortTitle?: string
  conference: string
  location: string
  date: string
  publishedDate?: string
  role: string
  proceedings?: string
  doi?: string
  doiUrl?: string
  summary: string
  abstractExcerpt?: string
  skills?: string[]
  image: string
  caption: string
  tags: string[]
}

// Flagship Thesis Project
export const flagshipProject: ProjectData = {
  id: 'e-simul8',
  title: 'e-Simul8: Standalone VR Surgical Training Simulation',
  category: 'Academic Thesis Project',
  date: 'August 2025',
  summary:
    'A standalone virtual reality simulation for nursing students. It translates standard operating room protocols into an interactive 3D training environment.',
  technologies: ['Unity 6', 'C#', 'Meta Quest 3S', 'Meta Quest 2', '6-DoF Motion Tracking'],
  image: esimul8Img,
  hasDemo: true,
  architecture: {
    overview:
      'A decoupled real-time simulation running standalone on Meta Quest headsets. It links 6-DoF motion tracking with deterministic protocol verification logic and instant learner scoring.',
    layers: [
      {
        step: 1,
        title: 'Layer 1: Spatial Tracking & Input Runtime',
        subtitle: 'Meta Quest 3S / 2 Mobile Hardware',
        details: 'Captures 6-DoF head pose and hand controller vectors at 72 frames per second with low-latency motion prediction and haptic feedback.',
        techBadge: 'Meta Quest SDK',
        accentColor: 'blue'
      },
      {
        step: 2,
        title: 'Layer 2: Virtual Environment & Physics Simulation',
        subtitle: 'Unity 6 Engine Core (C#)',
        details: 'Simulates operating room layouts, sterile fields, instrument tables, and collision meshes with optimized draw calls.',
        techBadge: 'Unity 6 / C#',
        accentColor: 'indigo'
      },
      {
        step: 3,
        title: 'Layer 3: Procedural Verification & State Logic',
        subtitle: 'Protocol Evaluation Engine',
        details: 'Enforces clinical protocols. Verifies instrument grasp angles, handover sterility, and step sequence using deterministic state machines.',
        techBadge: 'C# State Machine',
        accentColor: 'emerald'
      },
      {
        step: 4,
        title: 'Layer 4: Real-Time Assessment & Debriefing',
        subtitle: 'Automated Scoring & Telemetry',
        details: 'Tracks protocol deviations, sterility breach timestamps, and completion times for clinical instructor evaluation.',
        techBadge: 'Assessment Telemetry',
        accentColor: 'purple'
      }
    ]
  },
  contributions: [
    'Built a standalone virtual reality surgical simulation for nursing students in Unity 6 and C#.',
    'Implemented motion-controlled hand interactions, procedural step verification, and real-time scoring logic for Meta Quest headsets.',
    'Optimized draw calls, textures, and geometry to maintain a stable 72 FPS on mobile XR hardware.'
  ],
  evidenceName: 'Mapúa University BS IT Thesis (August 2025)',
  evidenceLink: '/RafMatoza_RESUME_2026.pdf'
}

// Small Academic Projects (Strictly NO images per user directive)
export const smallAcademicProjects: ProjectData[] = [
  {
    id: 'budget-buddy',
    title: 'Budget Buddy: Desktop Financial Client with AI Assistant',
    category: 'Academic Group Project',
    date: 'November 2024',
    summary:
      'A desktop personal finance app built with Java and JavaFX. It combines structured expense tracking with real-time AI assistance.',
    technologies: ['Java SE 21', 'JavaFX', 'Google Gemini API', 'MVC Architecture', 'Git/GitHub'],
    architecture: {
      overview:
        'A Model-View-Controller (MVC) desktop app connected asynchronously to the Google Gemini API for personalized budgeting advice.',
      layers: [
        {
          step: 1,
          title: 'Layer 1: Desktop GUI & Interaction',
          subtitle: 'JavaFX Presentation Layer',
          details: 'Renders expense logs, income forms, category tables, and spending charts using JavaFX FXML.',
          techBadge: 'JavaFX FXML',
          accentColor: 'amber'
        },
        {
          step: 2,
          title: 'Layer 2: Application Controller & Business Logic',
          subtitle: 'MVC Java Controllers',
          details: 'Manages user transactions, calculates balances, validates input, and saves data locally.',
          techBadge: 'Java SE 21',
          accentColor: 'blue'
        },
        {
          step: 3,
          title: 'Layer 3: AI Service Gateway & Prompt Orchestration',
          subtitle: 'Asynchronous HTTP Client',
          details: 'Formats structured, anonymized financial summaries and sends asynchronous HTTP requests without blocking the UI.',
          techBadge: 'HTTP / JSON Client',
          accentColor: 'emerald'
        },
        {
          step: 4,
          title: 'Layer 4: Conversational Intelligence',
          subtitle: 'Google Gemini API',
          details: 'Provides real-time budget suggestions, spending alerts, and savings advice.',
          techBadge: 'Gemini API',
          accentColor: 'purple'
        }
      ]
    },
    contributions: [
      'Built a desktop budgeting app in Java and JavaFX for personal expense and savings tracking.',
      'Integrated the Gemini API to provide real-time conversational budget recommendations.',
      'Coordinated project milestones, task distribution, and code reviews across the student team.'
    ],
    evidenceName: 'Mapúa University Application Development & Emerging Tech (November 2024)',
    evidenceLink: '/RafMatoza_RESUME_2026.pdf'
  },
  {
    id: 'ecommerce-platform',
    title: 'Full-Stack E-Commerce Platform & Security Testbed',
    category: 'Course Project & Research Testbed',
    date: 'November 2024',
    summary:
      'A full-stack web store with product catalogs, shopping carts, and Dockerized Spring Boot services. Served as the experimental testbed for published ISBM 2024 research.',
    technologies: ['Angular', 'Spring Boot (Java)', 'Docker', 'MySQL', 'RESTful API', 'MFA Security'],
    architecture: {
      overview:
        'A containerized multi-tier architecture with an Angular frontend, a Spring Boot REST API, and a MySQL database.',
      layers: [
        {
          step: 1,
          title: 'Layer 1: Single Page Application Client',
          subtitle: 'Angular TypeScript View Layer',
          details: 'Provides catalog browsing, category filters, shopping cart state, and tokenized checkout views.',
          techBadge: 'Angular (TypeScript)',
          accentColor: 'red'
        },
        {
          step: 2,
          title: 'Layer 2: Decoupled RESTful API Gateway',
          subtitle: 'Spring Boot Backend Controllers',
          details: 'Handles product queries, cart management, customer session tokens, and business rules.',
          techBadge: 'Spring Boot (Java)',
          accentColor: 'emerald'
        },
        {
          step: 3,
          title: 'Layer 3: Security & Tokenization Layer',
          subtitle: 'MFA & Session Token Validation',
          details: 'Protects transactions using multi-factor authentication and tokenized payment verification.',
          techBadge: 'MFA / Token Security',
          accentColor: 'blue'
        },
        {
          step: 4,
          title: 'Layer 4: Relational Data Persistence & DevOps',
          subtitle: 'MySQL Schema & Multi-Container Docker',
          details: 'Stores data in normalized MySQL tables and runs in multi-container Docker environments.',
          techBadge: 'MySQL & Docker',
          accentColor: 'purple'
        }
      ]
    },
    contributions: [
      'Built a multi-tier web store with product catalogs, shopping cart logic, and REST APIs using Spring Boot and MySQL.',
      'Packaged frontend and backend services into Docker containers for reliable local testing.',
      'Used the platform as the experimental testbed for peer-reviewed research presented at ISBM 2024 in Bangkok, Thailand.'
    ],
    evidenceName: 'Application Development 2 Course Project & ISBM 2024 Presentation',
    evidenceLink: '/RafMatoza_RESUME_2026.pdf'
  }
]

// Professional Experience Data
export const experiences: ExperienceData[] = [
  {
    id: 'usher-tech',
    role: 'IT Stack Assistant',
    organization: 'USHER Technologies Inc.',
    location: 'Quezon City, Philippines',
    period: 'Jan 2025 – Apr 2025',
    badgeText: 'Onsite Academic Internship (3 days/week)',
    responsibilities: [
      'Built frontend features for commercial monitoring dashboards using React, Vite, and TypeScript.',
      'Developed responsive UI components and data views matching Figma designs.',
      'Collaborated in two-week Scrum sprints, sprint planning, and daily standups.',
      'Used Git for feature branching, code reviews, and issue tracking.'
    ],
    skills: ['React', 'Vite', 'JavaScript / TypeScript', 'Scrum Workflow', 'Frontend Architecture']
  },
  {
    id: 'mapua-faculty',
    role: 'Part-Time Instructor',
    organization: 'Mapúa University – School of Information Technology',
    location: 'Makati City, Philippines',
    period: 'Aug 18, 2025 – Aug 18, 2026',
    badgeText: 'Academic Faculty Appointment',
    responsibilities: [
      'Delivered technical lectures and hands-on lab instruction in Programming Fundamentals, Data Structures, Relational Databases (MySQL), Networking, and Computer Hardware.',
      'Designed coding assignments, practical lab exams, and structured programming exercises.',
      'Troubleshot student software bugs, SQL queries, network configurations, and hardware issues.'
    ],
    skills: [
      'Data Structures',
      'Relational Databases (MySQL)',
      'Data Warehousing',
      'Networking',
      'Computer Hardware',
      'Programming Fundamentals'
    ]
  }
]

// Publications & International Conferences
export const publications: PublicationData[] = [
  {
    id: 'isbm-2024',
    title: 'A Secure E-commerce Shopping Cart Design with Multi-factor Authentication',
    shortTitle: 'Secure E-commerce Shopping Cart Design',
    conference: '3rd International Conference on Smart Business Management (ISBM 2024)',
    location: 'Bangkok, Thailand',
    date: 'September 2024',
    publishedDate: 'September 30, 2026',
    role: 'Primary Author',
    proceedings: "Springer's Information Systems for Intelligent Systems",
    doi: '10.1007/978-981-96-1210-9_39',
    doiUrl: 'https://doi.org/10.1007/978-981-96-1210-9_39',
    summary:
      'Researched transaction security for online shopping carts. Designed a system integrating multi-factor authentication, tokenized payments, and open-source tools to protect customer data. Presented at the 3rd International Conference on Smart Business Management (ISBM 2024) and published in Springer proceedings.',
    abstractExcerpt:
      'This study presents a secure e-commerce shopping cart design. It combines multi-step verification, tokenized payments, and open-source technologies to protect customer data and transaction security.',
    skills: ['Research Papers', 'Technical Writing', 'Ecommerce', 'Multi-Factor Authentication', 'Tokenized Payments'],
    image: isbmImg,
    caption: 'Primary Author, 3rd International Conference on Smart Business Management (ISBM 2024) • Bangkok, Thailand • Springer Information Systems',
    tags: ['ISBM 2024', 'Springer', 'Primary Author', 'Ecommerce', 'MFA Security', 'Tokenized Payments']
  },
  {
    id: 'ieee-ccet-2024',
    title: 'AI in Integrated Cybersecurity Systems: Evaluating Threat-Detection Architectures',
    shortTitle: 'AI in Integrated Cybersecurity Systems',
    conference: '2024 IEEE 7th International Conference on Computer and Communication Engineering Technology (CCET)',
    location: 'Beijing, China',
    date: 'August 2024',
    publishedDate: 'September 30, 2026',
    role: 'Primary Author',
    proceedings: 'IEEE Xplore Digital Library',
    doi: '10.1109/ccet62233.2024.10838195',
    doiUrl: 'https://doi.org/10.1109/ccet62233.2024.10838195',
    summary:
      'Researched the use of machine learning and deep learning within cybersecurity threat-detection systems. Evaluated how integrated AI systems detect and counter cyber threats. Presented at the 2024 IEEE 7th International Conference on Computer and Communication Engineering Technology (CCET) and published in IEEE Xplore.',
    abstractExcerpt:
      'Evaluated machine learning and deep learning models within threat-detection frameworks to counter modern cyber threats in integrated system architectures.',
    skills: ['Technical Writing', 'Research Papers', 'Academic Research', 'AI Research', 'Cybersecurity Systems'],
    image: ieeeImg,
    caption: 'Primary Author, 2024 IEEE 7th International Conference on Computer and Communication Engineering Technology (CCET) • Beijing, China • IEEE Xplore',
    tags: ['IEEE CCET 2024', 'IEEE Xplore', 'Primary Author', 'AI & Cybersecurity', 'Threat Detection', 'Academic Research']
  }
]

// Technical Skills Categories (Cleaned Ground Truth Matrix)
export const skillsMatrix = [
  {
    category: 'Programming Languages',
    badgeColor: 'blue',
    note: 'Compiled & Interpreted Languages',
    skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C#', 'C++', 'Kotlin', 'PHP', 'Godot / GDScript']
  },
  {
    category: 'Web & Frameworks',
    badgeColor: 'emerald',
    note: 'Modern Reactive Web & Backend Frameworks',
    skills: ['React', 'Vite', 'Angular', 'Spring Boot', 'Laravel', 'HTML5', 'CSS3', 'Tailwind CSS']
  },
  {
    category: 'Databases & Storage',
    badgeColor: 'purple',
    note: 'Relational & Real-Time Cloud Storage',
    skills: ['MySQL', 'Supabase']
  },
  {
    category: 'Tools & Platforms',
    badgeColor: 'amber',
    note: 'DevOps, Engines & Development Environments',
    skills: ['Docker', 'Android Studio', 'Unity', 'Git', 'GitHub']
  }
]

// Academic Credentials
export const educationData = {
  institution: 'Mapúa University',
  campus: 'Makati City, Philippines',
  degree: 'Bachelor of Science in Information Technology',
  specialization: 'Application Development',
  period: 'August 2022 – September 2025',
  graduationDate: 'September 19, 2025',
  honors: 'Cum Laude',
  gwa: '1.51',
  awards: [
    'Mapúa Cardinal Excellence President’s List Award (Ranked 1st – AY 2023–2024, 4th Qtr)',
    'Mapúa Cardinal Excellence President’s List Award (Ranked 3rd – AY 2024–2025, 3rd Tri)',
    'Mapúa Cardinal Excellence President’s List Award (Ranked 4th – AY 2023–2024, 3rd Qtr)',
    'Continuous Dean’s Lister throughout all terms (2022 – 2025)'
  ],
  organizations: ['Google Developer Student Club (GDSC) – Mapúa University'],
  englishCertification: 'TOEIC Certificate – Upper Intermediate (CEFR Level B2)'
}
