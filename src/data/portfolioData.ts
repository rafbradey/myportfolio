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
    'Standalone virtual reality surgical training simulation for nursing students, translating standardized operating room protocols and sterile techniques into an interactive 3D virtual environment.',
  technologies: ['Unity 6', 'C#', 'Meta Quest 3S', 'Meta Quest 2', '6-DoF Motion Tracking'],
  image: esimul8Img,
  hasDemo: true,
  architecture: {
    overview:
      'A decoupled real-time simulation architecture running standalone on mobile XR chipsets (Snapdragon XR2), linking spatial 6-DoF tracking with procedural validation logic and instant learner telemetry.',
    layers: [
      {
        step: 1,
        title: 'Layer 1: Spatial Tracking & Input Runtime',
        subtitle: 'Meta Quest 3S / 2 Mobile Hardware',
        details: 'Captures 6-DoF head pose and dual-controller spatial vectors at 72+ FPS with low-latency motion prediction and haptic feedback triggers.',
        techBadge: 'Meta Quest SDK',
        accentColor: 'blue'
      },
      {
        step: 2,
        title: 'Layer 2: Virtual Environment & Physics Simulation',
        subtitle: 'Unity 6 Engine Core (C#)',
        details: 'Simulates standardized operating room layouts, sterile fields, instrument table boundaries, and collision meshes with optimized draw calls.',
        techBadge: 'Unity 6 / C#',
        accentColor: 'indigo'
      },
      {
        step: 3,
        title: 'Layer 3: Procedural Verification & State Logic',
        subtitle: 'Protocol Evaluation Engine',
        details: 'Enforces clinical protocol sequencing: verifies instrument grasp angles, handover sterility, and surgical step order via deterministic state logic.',
        techBadge: 'C# State Machine',
        accentColor: 'emerald'
      },
      {
        step: 4,
        title: 'Layer 4: Real-Time Assessment & Debriefing',
        subtitle: 'Automated Scoring & Telemetry',
        details: 'Calculates protocol deviation metrics, sterility breach timestamps, and completion times for clinical instructor evaluation.',
        techBadge: 'Assessment Telemetry',
        accentColor: 'purple'
      }
    ]
  },
  contributions: [
    'Engineered standalone virtual reality surgical training simulation for nursing students, translating standardized operating room protocols into interactive 3D simulations.',
    'Implemented motion-controlled interactions, procedural verification modules, and real-time assessment logic in Unity 6 optimized for Meta Quest 3S and Meta Quest 2 headsets.',
    'Optimized draw calls, texture atlases, and geometry complexity to maintain target framerates on mobile standalone XR hardware, mitigating simulator sickness.'
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
      'Cross-platform desktop personal finance application in Java and JavaFX combining structured expense tracking with real-time AI conversational assistance.',
    technologies: ['Java SE 21', 'JavaFX', 'Google Gemini API', 'MVC Architecture', 'Git/GitHub'],
    architecture: {
      overview:
        'A Model-View-Controller (MVC) desktop architecture with asynchronous REST integration to Google Gemini API for contextual natural-language budgeting recommendations.',
      layers: [
        {
          step: 1,
          title: 'Layer 1: Desktop GUI & Interaction',
          subtitle: 'JavaFX Presentation Layer',
          details: 'Renders expense logs, monthly income forms, category allocation tables, and interactive spending charts via declarative FXML layouts.',
          techBadge: 'JavaFX FXML',
          accentColor: 'amber'
        },
        {
          step: 2,
          title: 'Layer 2: Application Controller & Business Logic',
          subtitle: 'MVC Java Controllers',
          details: 'Manages user transaction state, computes recurring balances, validates currency entries, and manages local persistence.',
          techBadge: 'Java SE 21',
          accentColor: 'blue'
        },
        {
          step: 3,
          title: 'Layer 3: AI Service Gateway & Prompt Orchestration',
          subtitle: 'Asynchronous HTTP Client',
          details: 'Formulates structured, anonymized financial telemetry prompts and orchestrates asynchronous API requests without blocking the UI thread.',
          techBadge: 'HTTP / JSON Client',
          accentColor: 'emerald'
        },
        {
          step: 4,
          title: 'Layer 4: Conversational Intelligence',
          subtitle: 'Google Gemini API',
          details: 'Generates real-time conversational budget recommendations, spending anomaly highlights, and savings allocation advice.',
          techBadge: 'Gemini API',
          accentColor: 'purple'
        }
      ]
    },
    contributions: [
      'Developed a cross-platform desktop budgeting client in Java and JavaFX for structured personal expense and savings tracking.',
      'Integrated the Gemini API to deliver contextual, real-time conversational assistance for user budgeting inquiries.',
      'Coordinated development milestones, task distribution, sprint hygiene, and code reviews across group members.'
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
      'Multi-tier decoupled commercial web application featuring interactive storefronts, dynamic cart workflows, and Dockerized Spring Boot services; experimental testbed for published ISBM 2024 research.',
    technologies: ['Angular', 'Spring Boot (Java)', 'Docker', 'MySQL', 'RESTful API', 'MFA Security'],
    architecture: {
      overview:
        'A containerized multi-tier architecture separating client presentation, stateless business services, and relational persistence with multi-factor authentication (MFA) and tokenized checkout verification.',
      layers: [
        {
          step: 1,
          title: 'Layer 1: Single Page Application Client',
          subtitle: 'Angular TypeScript View Layer',
          details: 'Provides catalog navigation, category filtering, responsive shopping cart state, and tokenized payment submission views.',
          techBadge: 'Angular (TypeScript)',
          accentColor: 'red'
        },
        {
          step: 2,
          title: 'Layer 2: Decoupled RESTful API Gateway',
          subtitle: 'Spring Boot Backend Controllers',
          details: 'Handles catalog queries, shopping cart management, customer session tokens, and business transaction rules.',
          techBadge: 'Spring Boot (Java)',
          accentColor: 'emerald'
        },
        {
          step: 3,
          title: 'Layer 3: Security & Tokenization Layer',
          subtitle: 'MFA & Session Token Validation',
          details: 'Implements multi-factor authentication and tokenized payment verification as documented in published ISBM 2024 security research.',
          techBadge: 'MFA / Token Security',
          accentColor: 'blue'
        },
        {
          step: 4,
          title: 'Layer 4: Relational Data Persistence & DevOps',
          subtitle: 'MySQL Schema & Multi-Container Docker',
          details: 'Normalized relational schemas with referential integrity; multi-container Docker compose ensuring reproducible dev/test parity.',
          techBadge: 'MySQL & Docker',
          accentColor: 'purple'
        }
      ]
    },
    contributions: [
      'Built a multi-tier web application featuring product catalogs, shopping cart workflows, and decoupled RESTful services with Spring Boot and MySQL.',
      'Configured Docker containerization across frontend and backend services to ensure reproducible local testing and consistent deployment.',
      'Served as the experimental testbed for peer-reviewed publication: "A Secure E-commerce Shopping Cart Design with MFA, Tokenized Payments, and Open-Source Integration" (Presenter at 3rd ISBM, Bangkok, Thailand).'
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
      'Developed responsive web application features for the commercial USHER product using React and Vite within an active Scrum workflow.',
      'Collaborated in sprint planning, task estimations, and modular component implementation, gaining structured exposure to professional development practices.',
      'Translated product requirements into clean, maintainable frontend components, ensuring responsive UI behavior and adherence to team standards.'
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
      'Delivered technical lectures and hands-on laboratory instruction across core IT subjects: Programming Fundamentals, Data Structures, Relational Databases (MySQL), Data Warehousing, Networking, Information Systems, and Computer Hardware.',
      'Communicated complex software and computational concepts into practical, structured programming exercises for students of diverse skill levels.',
      'Led hands-on diagnostic sessions, troubleshooting student software logic errors, relational query issues, network setups, and hardware diagnostics.'
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
      'Co-authored and contributed substantially to research on a secure e-commerce shopping cart design integrating multi-factor authentication, tokenized payment processing, and open-source technologies. The research examined approaches to improving transaction security and protecting customer information while considering user experience and development efficiency. Presented at the 3rd International Conference on Smart Business Management (ISBM 2024) and published as part of Springer’s Information Systems for Intelligent Systems proceedings.',
    abstractExcerpt:
      'Today, when we buy things online, it is very important to keep transactions safe and protect customer details. This study suggests a new design for e-commerce shopping carts to make sure they are safe. It uses multi-step verification, tokenized payments, and open-source technologies.',
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
      'Contributed substantially to research examining the use of Artificial Intelligence in integrated system architectures for cybersecurity. The study explored the application of machine learning and deep learning within threat-detection frameworks and how AI can be incorporated into cybersecurity systems to address cyber threats. Presented at the 2024 IEEE 7th International Conference on Computer and Communication Engineering Technology (CCET).',
    abstractExcerpt:
      'Explored the application of machine learning and deep learning within threat-detection frameworks and how AI can be incorporated into cybersecurity systems to address emerging cyber threats in integrated system architectures.',
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
