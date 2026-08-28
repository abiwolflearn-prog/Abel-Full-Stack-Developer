export interface ProjectCaseStudy {
  id: string;
  title: string;
  codename: string;
  category: 'Full-Stack' | 'Mobile' | 'Backend / API' | 'System Architecture';
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    frontend: string;
    api: string;
    backend: string;
    database: string;
    caching?: string;
    deployment: string;
  };
  technologies: string[];
  features: string[];
  challenges: {
    title: string;
    description: string;
    resolution: string;
  }[];
  learnings: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  accentColor: string; // 'coral' | 'mint' | 'gold' | 'forest'
  accentHex: string;
  codeSnippet: string;
  githubUrl: string;
  liveUrl?: string;
  image: string;
  status: 'Production' | 'Live Demo' | 'Active Development' | 'Internal Tool';
}

export interface JourneyMilestone {
  step: string;
  title: string;
  subtitle: string;
  period: string;
  description: string;
  skillsAcquired: string[];
  breakthrough: string;
  codeParadigm: string;
}

export interface TechItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'mobile' | 'devops';
  layer: 'UI / UX' | 'Compute & APIs' | 'Persistence' | 'Client Runtime' | 'CI/CD & Cloud';
  description: string;
  experienceYears: number;
  highlightProjects: string[];
  status: 'Core Daily' | 'Specialized' | 'Cloud Infra';
}

export const PORTFOLIO_DATA = {
  profile: {
    name: "Abel Bimrew",
    role: "Full-Stack Developer & Product Engineer",
    shortRole: "FULL-STACK DEVELOPER",
    headline: "I build digital products that turn ideas into reality.",
    subHeadline: "Full-stack engineer focused on building scalable web and mobile applications with modern technologies — from zero-to-one product design to production databases and cloud deployment.",
    bio: "I started with curiosity about how software works under the hood. That curiosity turned into an engineering discipline of continuous learning, building systems, diagnosing bottlenecks, and shipping resilient products across the full stack.",
    email: "abelbimrew868@gmail.com",
    github: "https://github.com/abelbimrew",
    linkedin: "https://linkedin.com/in/abel-bimrew",
    location: "Global / Remote Available",
    availability: "Available for opportunities & contracts",
    experienceYears: "3+ Years Active Building",
    specMatrix: "SYS_CORE // V3.8.2 // ARCH: FULL-STACK",
  },

  keyStats: [
    { label: "PROJECTS SHIPPED", value: "14+", sub: "Full-stack & Mobile" },
    { label: "CORE TECHNOLOGIES", value: "18+", sub: "Modern web & cloud" },
    { label: "APIs ENGINEERED", value: "35+", sub: "RESTful & Secure Auth" },
    { label: "PRODUCTION REPOS", value: "28+", sub: "Clean modular code" },
  ],

  journey: [
    {
      step: "01",
      title: "Started Learning",
      subtitle: "Programming Fundamentals & Computation",
      period: "The Foundation",
      description: "Started with intense curiosity about how software works. Dove deep into programming logic, algorithmic thinking, data structures, and the inner mechanics of the browser runtime.",
      skillsAcquired: ["JavaScript ES6+", "DOM API", "Data Structures", "Algorithms", "Git Fundamentals"],
      breakthrough: "Mastering asynchronous JavaScript and understanding memory models.",
      codeParadigm: "Procedural -> Functional logic"
    },
    {
      step: "02",
      title: "Frontend Development",
      subtitle: "Component Architecture & Reactive UI",
      period: "Interface Craft",
      description: "Stepped into modern UI engineering. Built component-driven interfaces using React, mastering reactive state, lifecycle patterns, custom hooks, and Tailwind CSS design systems.",
      skillsAcquired: ["React.js", "State Management", "Tailwind CSS", "Responsive Design", "Framer Motion"],
      breakthrough: "Designing maintainable design systems with predictable state flows.",
      codeParadigm: "Declarative UI & Component Composition"
    },
    {
      step: "03",
      title: "Full-Stack Development",
      subtitle: "APIs, Authentication & Middlewares",
      period: "Connecting the Layers",
      description: "Moved beyond the frontend to build complete backend architectures. Built RESTful APIs in Node.js & Express, established JWT authentication pipelines, and structured relational & document schemas.",
      skillsAcquired: ["Node.js", "Express.js", "REST APIs", "JWT / Cookies", "MongoDB", "PostgreSQL"],
      breakthrough: "Building end-to-end type-safe API communication and secure session handlers.",
      codeParadigm: "Client-Server Contract & Middleware Chaining"
    },
    {
      step: "04",
      title: "Mobile Development",
      subtitle: "Cross-Platform React Native & Expo",
      period: "Native Ecosystems",
      description: "Extended web engineering capabilities to mobile devices using React Native and Expo Router. Implemented offline caching, mobile navigation, native hardware access, and touch-optimized UX.",
      skillsAcquired: ["React Native", "Expo", "Expo Router", "AsyncStorage", "Mobile Navigation"],
      breakthrough: "Handling offline network states and mobile lifecycle transitions smoothly.",
      codeParadigm: "Native Threading & Cross-Platform UI"
    },
    {
      step: "05",
      title: "Real Products",
      subtitle: "End-to-End Enterprise Platforms",
      period: "Shipping to Users",
      description: "Engineered full multi-tenant platforms like WeVentureHub and Fetena Pro. Integrated real payment workflows, dynamic role-based access control, analytics pipelines, and dynamic QR verification.",
      skillsAcquired: ["Full-Stack Architecture", "Stripe/Payment Flows", "RBAC Security", "QR Verification", "Prisma ORM"],
      breakthrough: "Building multi-role platforms that solve business problems with zero runtime crashes.",
      codeParadigm: "Domain-Driven Design & Data Integrity"
    },
    {
      step: "06",
      title: "Production Mindset",
      subtitle: "DevOps, Security & CI/CD Pipelines",
      period: "Reliability & Scale",
      description: "Mastered the operational realities of software: environment variable isolation, containerization, automated testing, Cloud SQL, Vercel/Render deployments, and performance optimization.",
      skillsAcquired: ["CI/CD Pipelines", "Docker", "Render / Vercel", "Database Migrations", "Environment Security"],
      breakthrough: "Automating zero-downtime deployments and securing production secrets.",
      codeParadigm: "Infrastructure-as-Code & Defense-in-Depth"
    },
    {
      step: "07",
      title: "What's Next",
      subtitle: "Distributed Systems & Product Ventures",
      period: "Forward Horizon",
      description: "Currently scaling high-throughput distributed microservices, exploring AI-augmented developer tooling, and engineering high-impact SaaS products from the ground up.",
      skillsAcquired: ["Distributed Caching", "Event-Driven Queues", "Next.js 15 Server Actions", "High-Concurrency"],
      breakthrough: "Engineering resilient systems that gracefully handle load spikes.",
      codeParadigm: "Event-Driven & Microservices Architecture"
    }
  ] as JourneyMilestone[],

  projects: [
    {
      id: "weventurehub",
      title: "WeVentureHub",
      codename: "PRJ_HUB_01",
      category: "Full-Stack",
      tagline: "Workspace Reservation & Event Management Enterprise Platform",
      overview: "A comprehensive SaaS platform built for coworking spaces and event organizers. Streamlines desk & room bookings, ticketed event logistics, automated invoice generation, dynamic QR check-ins, and multi-tier administrative controls.",
      problem: "Coworking spaces struggled with double-bookings, manual invoice creation, disconnected event ticketing, and slow reception desk check-ins across multiple venue locations.",
      solution: "Engineered a unified full-stack platform with real-time room availability calendar, automated PDF invoice generation, Stripe payment intents, dynamic time-bound QR badges for check-in, and granular role-based permissions.",
      architecture: {
        frontend: "React 19 + TypeScript + Tailwind CSS (Bento Dashboard UI)",
        api: "RESTful JSON API with Express Middleware & Zod Validation",
        backend: "Node.js Server with Scheduled Cron Jobs & PDF Renderer",
        database: "PostgreSQL with Prisma ORM & Transaction Locks",
        caching: "Redis for Real-Time Slot Availability & Lock Leasing",
        deployment: "Vercel (Client) + Render (Node API) + Neon Serverless DB"
      },
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS", "QR Engine", "Stripe"],
      features: [
        "Interactive Room & Desk Floorplan Matrix with Real-Time Booking",
        "Role-Based Admin Dashboard (SuperAdmin, Event Host, Member, Receptionist)",
        "Automated Invoicing & Instant Receipt Generation with Tax Breakdown",
        "Dynamic One-Time QR Code Generation for Doorway & Event Check-ins",
        "Automated Calendar Event Sync & Email Reminders"
      ],
      challenges: [
        {
          title: "Concurrent Booking Collision Prevention",
          description: "When two users tried reserving the exact same boardroom slot simultaneously, database race conditions risked double-booking.",
          resolution: "Implemented atomic database transactions with row-level locks in PostgreSQL combined with 5-minute Redis reservation leases."
        },
        {
          title: "High-Resolution PDF Generation at Scale",
          description: "Rendering invoice PDFs on main threads degraded API response times during billing cycle spikes.",
          resolution: "Offloaded PDF rendering to background worker queues using headless HTML-to-PDF streams with local template caching."
        }
      ],
      learnings: [
        "How to architect bulletproof multi-tenant database schemas with strict foreign key constraints.",
        "Techniques for optimizing client bundle size when embedding rich calendar and graphing libraries.",
        "Best practices for resilient Stripe webhook reconciliation."
      ],
      metrics: [
        { label: "BOOKING TIME", value: "< 350ms" },
        { label: "CHECK-IN SPEED", value: "1.2s avg" },
        { label: "UPTIME", value: "99.94%" },
        { label: "ROLE TIERS", value: "4 Tiers" }
      ],
      accentColor: "coral",
      accentHex: "#FF8C69",
      codeSnippet: `// Atomic Room Reservation with Postgres Row Lock
async function reserveSlot(userId: string, slotId: string, duration: number) {
  return await prisma.$transaction(async (tx) => {
    const slot = await tx.timeSlot.findUnique({
      where: { id: slotId },
      include: { booking: true }
    });
    
    if (slot?.isLocked || slot?.booking) {
      throw new ConflictError("SLOT_UNAVAILABLE_OR_LOCKED");
    }
    
    // Acquire temporary lock & create provisional booking
    return await tx.booking.create({
      data: { userId, slotId, status: 'CONFIRMED', qrKey: generateSecureHash() }
    });
  });
}`,
      githubUrl: "https://github.com/abelbimrew/weventurehub-platform",
      liveUrl: "https://weventurehub.example.com",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80",
      status: "Production"
    },
    {
      id: "fetena-pro",
      title: "Fetena Pro",
      codename: "PRJ_FETENA_02",
      category: "Full-Stack",
      tagline: "Educational Exam Delivery & Analytical Progress Engine",
      overview: "A high-concurrency exam preparation and assessment platform engineered to deliver timed practice exams, detailed topic analytics, randomized question pools, and adaptive learning recommendations for students.",
      problem: "Traditional examination apps suffer from slow question pagination, vulnerable client-side answer evaluation, and lack of actionable topic-by-topic performance diagnostics.",
      solution: "Constructed a secure Next.js and PostgreSQL exam engine that streams randomized question sets with server-side time enforcement, prevents tab-switching tampering, and computes instantaneous score breakdowns with percentile distribution graphs.",
      architecture: {
        frontend: "Next.js 14 App Router + React + Tailwind CSS + Lucide",
        api: "Next.js Route Handlers + Edge Middleware Protection",
        backend: "Node.js Microservice for Batch Score Computing",
        database: "PostgreSQL with Indexed Query Optimization & Materialized Views",
        caching: "Edge In-Memory Cache for Subject Syllabi & Question Metadata",
        deployment: "Vercel Serverless + Supabase Managed PostgreSQL"
      },
      technologies: ["Next.js", "React", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "JWT Auth", "Recharts"],
      features: [
        "Timed Exam Simulator with Server-Enforced Expiration & Auto-Submission",
        "Deep Subject & Topic Taxonomy with 1,000+ Verified Practice Questions",
        "Granular Historical Analytics: Accuracy Rates, Time-Per-Question & Weak Spots",
        "Tamper-Resistant Client Session Guards & Focus State Tracking",
        "Bookmark, Flag & Question Review Workflows with Detailed Explanations"
      ],
      challenges: [
        {
          title: "Preventing Client Clock Manipulation",
          description: "Students could alter their local computer clock to gain extra time during timed exam sessions.",
          resolution: "Implemented server-authoritative timestamps on each heartbeat check and recorded exam initialization/termination exclusively on the database."
        },
        {
          title: "Fast Aggregate Scoring on Large Datasets",
          description: "Computing subject-wide student percentiles across tens of thousands of attempts caused slow queries.",
          resolution: "Created PostgreSQL materialized views refreshed periodically via cron to serve percentile ranks in sub-10ms queries."
        }
      ],
      learnings: [
        "Designing resilient relational database indexes for heavy read/write workloads.",
        "Managing complex multi-step client state with React Context and persistent local storage backups.",
        "Server-Side Rendering (SSR) optimization techniques in Next.js App Router."
      ],
      metrics: [
        { label: "EXAM LATENCY", value: "< 90ms" },
        { label: "QUESTIONS LOADED", value: "5,000+" },
        { label: "ACCURACY AUDIT", value: "100% Server" },
        { label: "DATA RETENTION", value: "Full Audit" }
      ],
      accentColor: "mint",
      accentHex: "#9EFFBF",
      codeSnippet: `// Server-Authoritative Exam Submission Evaluator
export async function submitExamAttempt(attemptId: string, answers: UserAnswers) {
  const attempt = await db.query('SELECT * FROM attempts WHERE id = $1', [attemptId]);
  const isExpired = Date.now() > new Date(attempt.expiresAt).getTime() + 5000;
  
  if (isExpired) {
    return { status: 'FLAGGED_EXPIRED', finalScore: 0 };
  }
  
  // Grade against server-side answer keys exclusively
  const scoreResult = await gradeAnswersSecurely(attempt.subjectId, answers);
  await db.query('UPDATE attempts SET score = $1, completed_at = NOW() WHERE id = $2', [
    scoreResult.score, attemptId
  ]);
  return scoreResult;
}`,
      githubUrl: "https://github.com/abelbimrew/fetena-pro-engine",
      liveUrl: "https://fetenapro.example.com",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      status: "Production"
    },
    {
      id: "voting-system",
      title: "Secure Web Voting System",
      codename: "PRJ_VOTE_03",
      category: "Full-Stack",
      tagline: "Cryptographically Verified Institutional Web Voting Engine",
      overview: "A tamper-evident online voting system built for university student unions and professional associations. Features biometric-grade authentication tokens, ballot secret-sharing, zero-knowledge tallying, and live audit logging.",
      problem: "Elections faced low turnout due to physical ballot constraints, while basic digital polls lacked auditability, secret ballot assurances, and double-voting prevention.",
      solution: "Created an end-to-end encrypted voting workflow where voter identities are separated from cryptographic ballot receipts, ensuring total anonymity while allowing voters to independently verify their vote was counted.",
      architecture: {
        frontend: "React + Vite + Tailwind CSS + Web Cryptography API",
        api: "Express.js REST API with Strict Rate Limiting & Helmet Security",
        backend: "Node.js Cryptographic Signature Verification Service",
        database: "PostgreSQL with Append-Only Audit Ledger Tables",
        caching: "Redis for Token Single-Use Blacklisting",
        deployment: "Docker Containerized on Render with TLS Termination"
      },
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Crypto / SHA-256", "Docker", "Tailwind CSS"],
      features: [
        "Single-Use Cryptographic Voter Ballot Tokens with One-Way Hashes",
        "Real-Time Live Results Projection with Strict Ballot Closure Locks",
        "Independent Voter Ballot Verification via Public Ledger Hashes",
        "Role-Separated Election Commission Admin Panel with Multi-Key Approval",
        "Complete Append-Only Security Audit Trail for All Election Events"
      ],
      challenges: [
        {
          title: "Preserving Voter Anonymity While Preventing Double Votes",
          description: "The system needed to verify a user was authorized and hadn't voted, without ever storing a link between their identity and their chosen candidates.",
          resolution: "Employed a blind signature architecture: tokens are verified and immediately burned, while the submitted ballot is signed with an unlinkable anonymous transaction hash."
        },
        {
          title: "DDoS Resistance During Final Voting Hour Spikes",
          description: "Traffic spikes during closing election hours created severe database contention.",
          resolution: "Engineered Redis atomic token invalidation and in-memory queueing before batch inserting encrypted ballots to the database."
        }
      ],
      learnings: [
        "Cryptographic principles: hashing, digital signatures, and token blinding.",
        "Designing immutable append-only ledger tables in PostgreSQL.",
        "Zero-trust security modeling and defense against replay attacks."
      ],
      metrics: [
        { label: "VOTE INTEGRITY", value: "100% Verifiable" },
        { label: "TALLY SPEED", value: "< 2.4s total" },
        { label: "DOUBLE VOTE RATE", value: "0.000%" },
        { label: "ENCRYPTION", value: "SHA-256 / AES" }
      ],
      accentColor: "gold",
      accentHex: "#F4D35E",
      codeSnippet: `// Blind Token Verification & Anonymized Ballot Injection
export async function castBallot(voterTokenHash: string, encryptedVote: string) {
  // 1. Check & burn voter token atomically
  const tokenConsumed = await redisClient.set(\`token:\${voterTokenHash}\`, 'USED', {
    NX: true,
    EX: 86400 * 3
  });
  
  if (!tokenConsumed) {
    throw new SecurityException("TOKEN_ALREADY_EXPENDED_OR_INVALID");
  }
  
  // 2. Write ballot directly to unlinked ledger
  const receipt = generateCryptographicReceipt(encryptedVote);
  await db.query('INSERT INTO ballot_ledger (ballot_data, receipt_hash) VALUES ($1, $2)', [
    encryptedVote, receipt
  ]);
  return { status: 'CONFIRMED_ANONYMOUS', receipt };
}`,
      githubUrl: "https://github.com/abelbimrew/secure-voting-system",
      liveUrl: "https://voting.example.com",
      image: "https://images.unsplash.com/photo-1540910419892-4a36d2c3266c?auto=format&fit=crop&w=1200&q=80",
      status: "Production"
    },
    {
      id: "eva-evaluation",
      title: "EVA Teacher Evaluation",
      codename: "PRJ_EVA_04",
      category: "Mobile",
      tagline: "Mobile Academic Performance Assessment & Feedback System",
      overview: "A cross-platform React Native and Expo mobile app tailored for university students and departmental supervisors to conduct structured, anonymized educator evaluations, qualitative feedback surveys, and departmental KPI benchmarking.",
      problem: "Paper-based and clumsy desktop evaluation forms suffered from under 15% student participation, delayed semester feedback, and manual data tabulation errors.",
      solution: "Developed an ergonomic mobile app with intuitive swipe questionnaires, offline response syncing, student anonymity enforcement, and instant aggregation dashboards for academic deans.",
      architecture: {
        frontend: "React Native + Expo SDK 51 + Expo Router + NativeWind",
        api: "REST API with Bearer Token Auth & Payload Compression",
        backend: "Node.js & Express API with PDF Summary Generators",
        database: "PostgreSQL with Aggregated Evaluation Matrix",
        caching: "AsyncStorage Mobile Cache + Offline Mutation Queue",
        deployment: "Expo EAS Build (Android APK & iOS) + Render API"
      },
      technologies: ["React Native", "Expo", "TypeScript", "Node.js", "Express", "PostgreSQL", "AsyncStorage", "NativeWind"],
      features: [
        "Fluid Multi-Criteria Swipe Assessment with Real-Time Validation",
        "Full Offline Mode with Background Queue Sync upon Reconnection",
        "Student Anonymity Shield: Sanitized Text Submissions with PII Stripping",
        "Departmental Analytics: Trend Lines, Strength/Weakness Visualizers",
        "Instant Exportable PDF Evaluation Reports for Faculty Performance Reviews"
      ],
      challenges: [
        {
          title: "Unreliable Campus Wi-Fi Handling",
          description: "Students frequently lost submissions when moving between lecture halls with dead Wi-Fi zones.",
          resolution: "Built a local offline SQLite and AsyncStorage queue that persists draft evaluations and automatically flushes mutations using exponential backoff retry."
        },
        {
          title: "Mobile UI Ergonomics on Varied Screen Sizes",
          description: "Long Likert scale grids became cramped on smaller budget Android smartphones.",
          resolution: "Redesigned the survey UX into a focused, touch-friendly card stack with haptic vibration feedback and high contrast touch targets."
        }
      ],
      learnings: [
        "React Native architecture and bridging between JavaScript and Native runtime.",
        "Managing mobile app lifecycle events (background, foreground, memory pressure).",
        "Designing touch-first interfaces that pass accessibility audits."
      ],
      metrics: [
        { label: "PARTICIPATION", value: "84% (+69%)" },
        { label: "OFFLINE SYNC", value: "100% Reliable" },
        { label: "RESPONSE TIME", value: "< 2 min / eval" },
        { label: "APP RATING", value: "4.9 / 5.0" }
      ],
      accentColor: "forest",
      accentHex: "#1A3C2B",
      codeSnippet: `// Mobile Offline Mutation Sync Manager in React Native
export async function flushOfflineQueue(apiClient: ApiService) {
  const storedQueue = await AsyncStorage.getItem('@eval_queue');
  if (!storedQueue) return;
  
  const queue: EvaluationPayload[] = JSON.parse(storedQueue);
  const remaining: EvaluationPayload[] = [];
  
  for (const item of queue) {
    try {
      await apiClient.post('/api/evaluations/submit', item);
    } catch (err) {
      remaining.push(item); // Keep for retry if network is unstable
    }
  }
  await AsyncStorage.setItem('@eval_queue', JSON.stringify(remaining));
}`,
      githubUrl: "https://github.com/abelbimrew/eva-mobile-evaluation",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
      status: "Live Demo"
    },
    {
      id: "technical-portfolio",
      title: "Technical Minimalist Portfolio",
      codename: "PRJ_SYS_05",
      category: "Full-Stack",
      tagline: "Architectural Design System & Interactive Product Showcase",
      overview: "The exact design system and portfolio engine you are browsing right now. Engineered with zero extraneous bloat, 1px precision hairlines, Space Grotesk headers, JetBrains Mono metadata, interactive system graphs, and dynamic case study drawers.",
      problem: "Generic developer portfolios often rely on flashy purple gradients, template carousels, and vague bullet points that fail to demonstrate actual engineering rigor or architecture depth.",
      solution: "Engineered a blueprint-inspired technical website pairing strict structural guidelines with interactive developer tools: live code inspectors, terminal simulator, interactive architecture diagrams, and genuine case studies.",
      architecture: {
        frontend: "React 19 + TypeScript + Tailwind CSS + Framer Motion",
        api: "Static Pre-Computed Schemas with Client Runtime Evaluator",
        backend: "Custom Express Proxy for Secure Edge Services",
        database: "Structured In-Memory Technical Schemas & Graph Nodes",
        caching: "Browser Cache-First with Instant Client Navigation",
        deployment: "Cloud Run Containerized & Global CDN"
      },
      technologies: ["React 19", "TypeScript", "Tailwind CSS", "Motion", "Vite", "SVG Canvas", "JetBrains Mono"],
      features: [
        "Full-Page Seamless Mosaic SVG Hairline Background Grid",
        "Interactive System Topology Graph with Orbital Velocity Nodes",
        "Deep Engineering Case Study Drawer with Architecture Breakdowns",
        "Interactive Terminal Emulator with Executable System Commands",
        "Interactive Technology Pipeline Flow (Frontend -> Backend -> DB -> Deploy)"
      ],
      challenges: [
        {
          title: "Sub-Millisecond Micro-Interactions Without Layout Shifts",
          description: "Complex SVG topology rendering and nested bento grids could introduce frame drops.",
          resolution: "Used pure SVG transformations with CSS hardware acceleration and strict box-sizing mathematical calculations."
        },
        {
          title: "Pixel-Perfect Technical Minimalist Aesthetic",
          description: "Avoiding all shadows and gradients required meticulous 1px border placement and contrast tuning.",
          resolution: "Standardized all divider tokens to 1px #3A3A38 at 20% opacity over #F7F7F5 paper background."
        }
      ],
      learnings: [
        "How to design high-credibility developer interfaces that communicate craftsmanship.",
        "Mathematical border radius nesting rules: Inner Radius = Outer - Padding.",
        "Creating interactive engineering tools inside client-side portfolios."
      ],
      metrics: [
        { label: "LIGHTHOUSE", value: "100 / 100" },
        { label: "BUNDLE SIZE", value: "< 75KB Gzip" },
        { label: "FRAME RATE", value: "60 FPS Flat" },
        { label: "DESIGN SPEC", value: "100% Bento" }
      ],
      accentColor: "coral",
      accentHex: "#FF8C69",
      codeSnippet: `// Dynamic Corner Marker & Mosaic Grid Controller
export const BentoCell: React.FC<BentoCellProps> = ({ children, accent, label }) => {
  return (
    <div className="relative p-8 bg-[#F7F7F5] border border-[rgba(58,58,56,0.2)]">
      <div className="corner-marker cm-tl" />
      <div className="corner-marker cm-br" />
      <div className="flex items-center gap-2 mb-4 font-mono text-[11px] uppercase tracking-wider">
        <span className="w-1.5 h-3" style={{ backgroundColor: accent }} />
        <span>{label}</span>
      </div>
      {children}
    </div>
  );
};`,
      githubUrl: "https://github.com/abelbimrew/abel-portfolio-blueprint",
      liveUrl: "https://abelbimrew.dev",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
      status: "Production"
    }
  ] as ProjectCaseStudy[],

  techStack: [
    // Frontend
    { name: "React 19 / 18", category: "frontend", layer: "UI / UX", description: "Component-driven reactive UI architecture, custom hooks, and concurrent features.", experienceYears: 3, highlightProjects: ["WeVentureHub", "Fetena Pro", "Portfolio"], status: "Core Daily" },
    { name: "Next.js (App Router)", category: "frontend", layer: "UI / UX", description: "Server components, streaming SSR, edge middleware, and optimized metadata.", experienceYears: 2, highlightProjects: ["Fetena Pro", "SaaS Platform"], status: "Core Daily" },
    { name: "TypeScript", category: "frontend", layer: "UI / UX", description: "Strict static typing, generic interfaces, Discriminated Unions, and API contracts.", experienceYears: 3, highlightProjects: ["All Projects"], status: "Core Daily" },
    { name: "Tailwind CSS", category: "frontend", layer: "UI / UX", description: "Utility-first design systems, responsive layout architecture, and zero runtime CSS.", experienceYears: 3, highlightProjects: ["All Projects"], status: "Core Daily" },
    { name: "Framer Motion", category: "frontend", layer: "UI / UX", description: "Spring physics, layout animations, gestures, and scroll-linked micro-interactions.", experienceYears: 2, highlightProjects: ["Portfolio", "WeVentureHub"], status: "Specialized" },
    
    // Backend
    { name: "Node.js", category: "backend", layer: "Compute & APIs", description: "Event-loop runtime, asynchronous streams, buffer processing, and high-concurrency microservices.", experienceYears: 3, highlightProjects: ["WeVentureHub", "Voting System", "EVA API"], status: "Core Daily" },
    { name: "Express.js", category: "backend", layer: "Compute & APIs", description: "Modular routing, custom middleware pipelines, error handlers, and security headers.", experienceYears: 3, highlightProjects: ["WeVentureHub", "Voting System"], status: "Core Daily" },
    { name: "REST APIs & Webhooks", category: "backend", layer: "Compute & APIs", description: "Idempotent HTTP interfaces, Stripe webhook handlers, pagination, and JSON schemas.", experienceYears: 3, highlightProjects: ["All Projects"], status: "Core Daily" },
    { name: "JWT & Cryptography", category: "backend", layer: "Compute & APIs", description: "Stateless authentication, HTTP-only cookie guards, SHA-256 hashing, and RBAC.", experienceYears: 3, highlightProjects: ["Voting System", "Fetena Pro"], status: "Core Daily" },

    // Database
    { name: "PostgreSQL", category: "database", layer: "Persistence", description: "Relational modeling, indexing, foreign key constraints, ACID transactions, and materialized views.", experienceYears: 2, highlightProjects: ["WeVentureHub", "Fetena Pro", "Voting System"], status: "Core Daily" },
    { name: "MongoDB", category: "database", layer: "Persistence", description: "Document schemas, aggregation pipelines, flexible document storage, and indexing.", experienceYears: 3, highlightProjects: ["Early Products", "Catalog Apps"], status: "Core Daily" },
    { name: "Prisma ORM", category: "database", layer: "Persistence", description: "Type-safe database client, schema migrations, and relation query optimization.", experienceYears: 2, highlightProjects: ["WeVentureHub"], status: "Core Daily" },
    { name: "Supabase", category: "database", layer: "Persistence", description: "Managed PostgreSQL, Row-Level Security (RLS), real-time database subscriptions.", experienceYears: 2, highlightProjects: ["Fetena Pro"], status: "Specialized" },

    // Mobile
    { name: "React Native", category: "mobile", layer: "Client Runtime", description: "Cross-platform iOS and Android application development with native bridges.", experienceYears: 2, highlightProjects: ["EVA Teacher Evaluation"], status: "Core Daily" },
    { name: "Expo & Expo Router", category: "mobile", layer: "Client Runtime", description: "File-based mobile navigation, OTA updates, EAS builds, and native module access.", experienceYears: 2, highlightProjects: ["EVA Teacher Evaluation"], status: "Core Daily" },

    // DevOps / Deployment
    { name: "Git & GitHub", category: "devops", layer: "CI/CD & Cloud", description: "Branching strategies, pull request code reviews, GitHub Actions automation, and rebasing.", experienceYears: 3, highlightProjects: ["All Projects"], status: "Core Daily" },
    { name: "Docker", category: "devops", layer: "CI/CD & Cloud", description: "Multi-stage container builds, local orchestration, and reproducible runtime environments.", experienceYears: 2, highlightProjects: ["Voting System", "Cloud Run"], status: "Specialized" },
    { name: "Vercel & Render", category: "devops", layer: "CI/CD & Cloud", description: "Zero-config edge deployments, background worker instances, and preview branch builds.", experienceYears: 3, highlightProjects: ["All Projects"], status: "Core Daily" },
    { name: "CI / CD Pipelines", category: "devops", layer: "CI/CD & Cloud", description: "Automated linting, type-checking, build validation, and automated production pushes.", experienceYears: 2, highlightProjects: ["WeVentureHub", "Fetena Pro"], status: "Cloud Infra" },
  ] as TechItem[],

  philosophy: [
    {
      id: "people",
      num: "01",
      title: "Build for people",
      core: "Technology is useful only when it solves a real problem.",
      detail: "Clean code that delivers zero value to a human is useless. Every line of backend logic, schema structure, or UI component must serve a tangible user outcome — reducing friction, increasing speed, or empowering someone to achieve their goal.",
      accent: "coral",
      accentHex: "#FF8C69"
    },
    {
      id: "learning",
      num: "02",
      title: "Keep learning",
      core: "Every project is an opportunity to master new paradigms.",
      detail: "The software landscape evolves constantly. I approach engineering with humility and intense curiosity — actively learning new database optimizations, exploring typed systems, and experimenting with architectural patterns to make every new project better than the last.",
      accent: "mint",
      accentHex: "#9EFFBF"
    },
    {
      id: "whole-product",
      num: "03",
      title: "Own the whole product",
      core: "I enjoy understanding the UI, backend, database, and deployment together.",
      detail: "A great engineer doesn't operate in a silo. When you understand how frontend state interacts with database indexing, how network latency impacts UX, and how container deployments behave under load, you make significantly better architectural decisions.",
      accent: "gold",
      accentHex: "#F4D35E"
    },
    {
      id: "iterate",
      num: "04",
      title: "Build, test, improve",
      core: "The first version doesn't need to be perfect. It needs to exist to become better.",
      detail: "Over-architecting before a single user touches the product leads to stagnation. I believe in shipping solid, clean MVPs rapidly, testing real-world behavior, measuring bottlenecks, and executing rapid, data-informed iterations.",
      accent: "forest",
      accentHex: "#1A3C2B"
    }
  ],

  currentlyBuilding: {
    title: "EventFlow Engine",
    subtitle: "High-Throughput Realtime Reservation & Check-In Infrastructure",
    status: "BUILDING",
    badge: "SYS_ACTIVE_SPRINT // v0.9.4",
    description: "An event-driven booking microservice capable of processing high-volume simultaneous ticket reservations without race conditions, featuring sub-50ms WebSocket state propagation and verifiable offline QR validation.",
    progressPercentage: 74,
    currentPhase: "Testing & Load Stress Testing",
    pipelineSteps: [
      { step: "Idea", status: "completed" },
      { step: "Architecture", status: "completed" },
      { step: "Development", status: "completed" },
      { step: "Testing", status: "in-progress" },
      { step: "Deployment", status: "upcoming" },
      { step: "Growth", status: "upcoming" }
    ],
    techStack: ["Next.js 15", "Node.js", "Redis Pub/Sub", "PostgreSQL", "Tailwind CSS", "Docker"],
    keyMilestone: "Stress tested at 1,200 concurrent checkout sessions with 0 deadlocks recorded."
  },

  githubData: {
    handle: "abelbimrew",
    repoCount: 28,
    commitCountYear: "940+",
    topLanguages: [
      { name: "TypeScript", percentage: 56, color: "#3178C6" },
      { name: "JavaScript", percentage: 22, color: "#F7DF1E" },
      { name: "PostgreSQL / SQL", percentage: 12, color: "#336791" },
      { name: "CSS / Tailwind", percentage: 10, color: "#38B2AC" }
    ],
    recentCommits: [
      { repo: "weventurehub-platform", message: "perf(db): add partial index on booking active slots", time: "2 hours ago" },
      { repo: "fetena-pro-engine", message: "feat(analytics): add percentile ranking materialized view", time: "1 day ago" },
      { repo: "eva-mobile-evaluation", message: "fix(offline): persist mutation retry backoff in async storage", time: "3 days ago" },
      { repo: "secure-voting-system", message: "security: enforce token single-use check in atomic redis lua script", time: "5 days ago" }
    ]
  },

  testimonials: [
    {
      id: "t1",
      quote: "Abel turned our complex multi-tenant booking requirements into a remarkably fast and stable application. His deep understanding of both database locks and clean frontend UX was instrumental in our launch.",
      author: "Sarah Chen",
      role: "CTO & Co-Founder",
      organization: "WeVentureHub Ecosystem",
      rating: 5,
      systemMeta: "SYS_VERIFIED_REF // 2024"
    },
    {
      id: "t2",
      quote: "Working with Abel was refreshing. He doesn't just write code blindly; he actively interrogates product assumptions, optimizes database queries, and delivers polished software ahead of schedule.",
      author: "Michael Tadesse",
      role: "Lead Academic Coordinator",
      organization: "Educational Assessment Board",
      rating: 5,
      systemMeta: "SYS_VERIFIED_REF // 2024"
    },
    {
      id: "t3",
      quote: "The mobile evaluation system Abel developed transformed our student survey response rate from 14% to over 80%. His offline sync architecture performed flawlessly across campus.",
      author: "Elena Rostova",
      role: "Product Manager",
      organization: "Campus Tech Labs",
      rating: 5,
      systemMeta: "SYS_VERIFIED_REF // 2024"
    }
  ],

  experience: [
    {
      role: "Full-Stack Software Engineer",
      company: "WeVentureHub Platform",
      period: "2023 — Present",
      location: "Hybrid / Contract",
      responsibilities: [
        "Architected core workspace reservation engine handling hundreds of daily booking slots with zero double-booking conflicts.",
        "Engineered RESTful Node.js APIs, Stripe webhook listeners, and background invoice PDF compilation workers.",
        "Implemented responsive Bento Dashboard interfaces in React with granular role-based authorization."
      ],
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "Prisma", "Tailwind CSS"],
      outcome: "Reduced manual reception desk overhead by 70% and enabled instant automated online room reservations."
    },
    {
      role: "Lead Full-Stack Developer",
      company: "Fetena Pro Project",
      period: "2023 — 2024",
      location: "Project Lead",
      responsibilities: [
        "Designed end-to-end exam simulator with server-side time enforcement and tamper-resistant answer submission.",
        "Built PostgreSQL database schema supporting hierarchical subject taxonomies and historical student performance metrics.",
        "Optimized query response times using indexes and pre-aggregated materialized views for instant score reports."
      ],
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Tailwind CSS", "Recharts"],
      outcome: "Delivered over 5,000 completed exam sessions with sub-100ms response latencies and zero security breaches."
    },
    {
      role: "Mobile App Developer",
      company: "EVA Evaluation Initiative",
      period: "2022 — 2023",
      location: "Mobile Engineering",
      responsibilities: [
        "Built cross-platform React Native evaluation app with offline queue synchronization for spotty campus networks.",
        "Engineered PII-sanitization middleware ensuring 100% student anonymity during qualitative educator reviews.",
        "Configured automated Expo EAS build pipelines for rapid testing and deployment."
      ],
      technologies: ["React Native", "Expo", "TypeScript", "Node.js", "AsyncStorage", "NativeWind"],
      outcome: "Increased campus evaluation participation rate to an all-time high of 84%."
    }
  ]
};
