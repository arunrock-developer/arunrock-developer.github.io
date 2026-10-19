import {
  Profile,
  SkillCategory,
  ExperienceItem,
  Project,
  NavigationItem
} from './portfolio.models';

export const PORTFOLIO_PROFILE: Profile = {
  name: 'Arun Kumar R',
  primaryTitle: 'Frontend Developer',
  supportingTitle: 'Angular · TypeScript · RxJS · Flutter · Spring Boot & REST APIs',
  summary:
    'Frontend-focused software developer with 3+ years in Angular & TypeScript and 2+ years in Flutter. Experienced in designing scalable ERP, POS and eCommerce platforms from scratch, including reusable component libraries, modular architecture, Auth Guards, HTTP interceptors, and high-performance reactive workflows. Effective collaborator across full-stack teams with working knowledge of Spring Boot and MySQL.',
  location: 'Tirupur, Tamil Nadu, India',
  email: 'aktechsaviour@gmail.com',
  phone: '+91 96988 77357',
  availableForHire: true,
  yearsExperience: '3+ Years',
  githubUrl: 'https://github.com/arunrock-developer',
  linkedinUrl: 'https://www.linkedin.com/in/arunrock',
  naukriUrl: 'https://www.naukri.com/mnjuser/profile',
  resumeUrl: 'assets/ArunKumar-R-Angular-Frontend-Developer.pdf',
  avatarUrl: 'assets/img/arun-kumar-avatar.png',
  highlights: [
    {
      label: 'Core Expertise',
      value: '3+ Years',
      description: 'Angular & TypeScript enterprise application development',
      icon: 'code-slash'
    },
    {
      label: 'Cross-Platform Mobile',
      value: '2+ Years',
      description: 'Flutter & GetX production apps with real-time sync',
      icon: 'phone'
    },
    {
      label: 'Enterprise Scope',
      value: '35+ Modules',
      description: 'Live ERP & POS systems with modular architecture',
      icon: 'grid-3x3-gap'
    },
    {
      label: 'Screen Velocity',
      value: '75+ Screens',
      description: 'Delivered across enterprise and client platforms',
      icon: 'window-stack'
    },
    {
      label: 'Stability Optimization',
      value: '99.5%',
      description: 'Crash-free sessions achieved cutting crashes by 80%+',
      icon: 'shield-check'
    }
  ]
};

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { label: 'Overview', fragment: 'hero', number: '01' },
  { label: 'About', fragment: 'about', number: '02' },
  { label: 'Skills', fragment: 'skills', number: '03' },
  { label: 'Experience', fragment: 'experience', number: '04' },
  { label: 'Projects', fragment: 'projects', number: '05' },
  { label: 'Contact', fragment: 'contact', number: '06' }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'frontend',
    name: 'Frontend Engineering',
    shortDescription: 'Modern, high-performance web applications with modular structure and reactive state.',
    icon: 'laptop',
    skills: [
      { name: 'Angular (14 - 18+)', level: 'Advanced', highlight: true },
      { name: 'TypeScript', level: 'Advanced', highlight: true },
      { name: 'JavaScript (ES6+)', level: 'Advanced', highlight: true },
      { name: 'RxJS & Reactive Streams', level: 'Advanced', highlight: true },
      { name: 'HTML5 & Semantic Web', level: 'Advanced' },
      { name: 'CSS3 & Modern SCSS', level: 'Advanced' },
      { name: 'Angular Material', level: 'Proficient' },
      { name: 'Bootstrap & Responsive UI', level: 'Advanced' },
      { name: 'Angular Router & Navigation', level: 'Advanced' }
    ]
  },
  {
    id: 'architecture',
    name: 'Angular Architecture & Patterns',
    shortDescription: 'Enterprise architecture patterns designed for maintainability, reuse, and scale.',
    icon: 'diagram-3',
    skills: [
      { name: 'Component Architecture', level: 'Advanced', highlight: true },
      { name: 'Modular & Lazy Architecture', level: 'Advanced', highlight: true },
      { name: 'Shared Component Libraries', level: 'Advanced' },
      { name: 'Auth Guards & Route Protection', level: 'Advanced' },
      { name: 'HTTP Interceptors & Token Handling', level: 'Advanced' },
      { name: 'Reactive State Management', level: 'Proficient' },
      { name: 'Performance Optimization & Code Splitting', level: 'Proficient' }
    ]
  },
  {
    id: 'mobile',
    name: 'Cross-Platform Mobile',
    shortDescription: 'Clean mobile architectures with state isolation and real-time tracking.',
    icon: 'phone',
    skills: [
      { name: 'Flutter', level: 'Advanced', highlight: true },
      { name: 'Dart', level: 'Advanced', highlight: true },
      { name: 'GetX State Management', level: 'Advanced', highlight: true },
      { name: 'Firebase Push Notifications', level: 'Proficient' },
      { name: 'Firebase Crashlytics', level: 'Proficient' },
      { name: 'Play Store & Enterprise App Deployment', level: 'Proficient' }
    ]
  },
  {
    id: 'backend',
    name: 'Backend & API Integration',
    shortDescription: 'Full-stack collaboration, REST contract design, and data persistence.',
    icon: 'server',
    skills: [
      { name: 'RESTful API Integration', level: 'Advanced', highlight: true },
      { name: 'Spring Boot', level: 'Working Knowledge', highlight: true },
      { name: 'Java & Kotlin', level: 'Working Knowledge' },
      { name: 'MySQL & Relational Databases', level: 'Working Knowledge' },
      { name: 'JSON & WebSocket Real-time', level: 'Proficient' },
      { name: 'API Contract Design & Error Semantics', level: 'Proficient' }
    ]
  },
  {
    id: 'tools',
    name: 'Tools & Engineering Practices',
    shortDescription: 'Agile workflows, code review hygiene, and debugging tools.',
    icon: 'gear-wide-connected',
    skills: [
      { name: 'Git & Version Control', level: 'Advanced' },
      { name: 'Postman & API Testing', level: 'Advanced' },
      { name: 'Jira & Agile / Scrum', level: 'Proficient' },
      { name: 'Figma to Pixel-Perfect Code', level: 'Advanced' },
      { name: 'Chrome DevTools & Memory Profiling', level: 'Advanced' },
      { name: 'VS Code & CLI Tooling', level: 'Advanced' }
    ]
  },
  {
    id: 'ai-tools',
    name: 'AI-Assisted Engineering',
    shortDescription: 'Leveraging AI tools to accelerate debugging, documentation, and quality assurance.',
    icon: 'stars',
    skills: [
      { name: 'GitHub Copilot', level: 'Proficient' },
      { name: 'Claude & DeepSeek', level: 'Proficient' },
      { name: 'Google Gemini & ChatGPT', level: 'Proficient' },
      { name: 'AI-assisted Debugging', level: 'Proficient' },
      { name: 'AI-assisted Documentation & Code Optimization', level: 'Proficient' }
    ]
  }
];

export const EXPERIENCE_ITEMS: ExperienceItem[] = [
  {
    id: 'qnq-healthcare',
    company: 'QNQ Healthcare Pvt Ltd',
    role: 'Software Developer (Application Enhancement)',
    location: 'Villupuram, Tamil Nadu',
    period: 'Nov 2025 – Present',
    startDate: '2025-11',
    endDate: 'Present',
    isCurrent: true,
    employmentType: 'Full-time',
    summary:
      'Leading frontend application enhancements across live ERP, POS, and healthcare retail operations with a focus on modular Angular architecture, shared component reusability, and API integration.',
    contributions: [
      'Developed and maintained ERP and POS systems for live business operations, engineering scalable modules across 35+ business domains.',
      'Architected and implemented a modern Angular dashboard from scratch with a modular structure, establishing the folder layout, shared component library, and routing conventions.',
      'Implemented RxJS, Auth Guards, and centralized HTTP Interceptors for secure routing, automated JWT attachment, and unified error handling.',
      'Created reusable UI components (data tables, filter toolbars, dialogs) maintaining consistent UX across ERP and POS applications.',
      'Integrated RESTful APIs for authentication, product management, inventory, and business workflows, collaborating closely with backend engineers on request/response contracts.',
      'Cut initial page load time by ~35% and reduced bundle size by ~20% through lazy-loaded feature modules and code splitting.'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Angular Material',
      'REST APIs',
      'Spring Boot Backend',
      'MySQL',
      'Flutter',
      'Dart'
    ]
  },
  {
    id: 'varnik-systems',
    company: 'Varnik Systems Services Private Limited',
    role: 'Associate Software Developer',
    location: 'Madurai, Tamil Nadu',
    period: 'Jun 2023 – Nov 2025',
    startDate: '2023-06',
    endDate: '2025-11',
    isCurrent: false,
    employmentType: 'Full-time',
    summary:
      'Delivered responsive web and cross-platform mobile applications for enterprise clients and eCommerce platforms, with deep focus on payment gateway integration, real-time tracking, and mobile crash optimization.',
    contributions: [
      'Developed responsive web applications using Angular, TypeScript, and Angular Material, delivering 75+ screens across enterprise and customer-facing platforms.',
      'Built and enhanced eCommerce and marketplace platforms supporting 10,000+ active users and 500+ orders/day with high responsiveness.',
      'Integrated payment gateways including Razorpay, product catalogs, and secure authentication flows.',
      'Engineered cross-platform Flutter mobile applications using Dart and GetX for state management, delivered via enterprise channels and Google Play Store.',
      'Built a location-based essentials ordering mobile app with real-time order tracking using Firebase Push Notifications, OAuth, and WebSockets.',
      'Monitored and resolved stability issues with Firebase Crashlytics, improving crash-free session rates from ~93% to 99.5% and reducing overall crashes by >80%.'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'Angular Material',
      'Bootstrap',
      'Flutter',
      'Dart',
      'GetX',
      'Firebase Crashlytics',
      'Razorpay',
      'REST APIs'
    ]
  }
];

export const PORTFOLIO_PROJECTS: Project[] = [
  {
    id: 'erp-operations-suite',
    title: 'Enterprise ERP Operations Suite',
    subtitle: 'Modular Healthcare & Retail Operations Platform',
    category: 'Enterprise Applications',
    contentType: 'professional-experience',
    featured: true,
    summary:
      'A scalable enterprise operations platform engineered to power retail, pharmacy, and point-of-sale operations with modular Angular architecture, 35+ business modules, and high-throughput reactive data tables.',
    problem:
      'Legacy business operations suffered from fragmented screens, duplicate authentication logic across services, high initial bundle sizes, and inconsistent UI patterns across inventory, billing, and order modules.',
    solution:
      'Engineered a centralized Angular dashboard architecture from scratch featuring lazy-loaded business modules, unified HTTP interceptors for automatic JWT authentication and error semantics, and a shared reusable component library.',
    myRole:
      'Frontend Architect & Core Developer. Spearheaded frontend folder structure, shared UI library, Auth Guard routing, API contract alignment with Spring Boot teams, and performance optimization.',
    contributions: [
      'Established modular folder layout and shared component library used across 35+ business modules.',
      'Centralized HTTP authentication interceptors and error response handling, eliminating boilerplate in every service.',
      'Implemented responsive data-heavy views with custom pagination, debounce search, and column-based filtering.',
      'Optimized load time by ~35% and bundle size by ~20% via route-level code splitting and lazy loading.'
    ],
    features: [
      'Modular dynamic dashboard with role-based routing and Auth Guards',
      'High-throughput billing and POS checkout workflows with shortcut keys',
      'Warehouse inward/outward tracking and batch management',
      'Centralized error boundary and notification toast architecture',
      'Responsive design supporting desktop POS terminals and warehouse tablets'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'Angular Material',
      'Bootstrap',
      'REST APIs',
      'Spring Boot Backend',
      'MySQL'
    ],
    thumbnail: 'assets/img/portfolio-images/web-portfolio-img.png',
    workflowSteps: [
      {
        step: '01',
        title: 'Authentication & Guard Verification',
        description: 'JWT validation, token refresh via HTTP Interceptor, and role-based route guard gating.'
      },
      {
        step: '02',
        title: 'Module Lazy Loading',
        description: 'Dynamic bundle loading for Billing, Inventory, POS, or HR only when navigated to.'
      },
      {
        step: '03',
        title: 'Reactive State & Caching',
        description: 'RxJS BehaviorSubject data pipelines minimizing redundant API calls during transactions.'
      },
      {
        step: '04',
        title: 'Optimistic UI Updates',
        description: 'Instant UI feedback with background server sync and structured rollback handling.'
      }
    ],
    architectureNotes: [
      'Feature-first modular architecture separating Core, Shared, and Feature domains',
      'Single HTTP Interceptor pipeline attaching Bearer tokens and intercepting HTTP 401/403/500 errors',
      'Strict TypeScript interfaces ensuring type-safe API request and response contracts'
    ],
    challenges: [
      'Preserving fluid 60fps UI performance while rendering large tabular datasets with multiple live calculations.',
      'Ensuring seamless offline/reconnection recovery during high-volume retail billing hours.'
    ],
    outcomes: [
      '35+ business modules deployed into live operations',
      '35% reduction in initial page load time',
      'Unified UX across both desktop browser and POS touch terminals'
    ],
    isProprietary: true,
    disclaimer:
      'Proprietary Enterprise System. Visuals and workflows shown are synthetic architectural demonstrations adhering to employer confidentiality.'
  },
  {
    id: 'smart-inventory-tracking',
    title: 'Smart Inventory & Stock Movement',
    subtitle: 'Real-time Stock Visibility & Movement Audit System',
    category: 'Enterprise Applications',
    contentType: 'demo',
    featured: false,
    summary:
      'An interactive demonstration of warehouse stock movement, inward/outward reconciliation, batch expiration tracking, and multi-location inventory auditing with reactive filtering.',
    problem:
      'Warehouse staff needed clear distinction between current available inventory and historical movement events, with fast batch traceability to prevent expired stock from being dispatched.',
    solution:
      'Built a reactive inventory dashboard with real-time stock indicators, timeline-based movement history, batch expiration alerts, and instant multi-field search.',
    myRole:
      'Concept Designer & Full Frontend Implementation. Built reactive data models, synthetic state simulator, and interactive stock transfer workflow.',
    contributions: [
      'Designed responsive inventory summary cards with color-coded threshold alerts.',
      'Built searchable data table with client-side debounce and server-ready pagination interfaces.',
      'Implemented stock movement audit trail showing origin, destination, timestamp, and user signature.',
      'Created synthetic mock data engine simulating batch status and transfer lifecycles.'
    ],
    features: [
      'Live stock status cards (In Stock, Low Stock, Critical, Expired)',
      'Batch-oriented views with expiry warning badges and lot numbers',
      'Inward/Outward movement history log with filterable event types',
      'Multi-column quick search and CSV export demonstration'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'RxJS',
      'SCSS',
      'REST APIs',
      'Spring Boot (Demo Model)'
    ],
    thumbnail: 'assets/img/portfolio-images/figma-2.png',
    workflowSteps: [
      {
        step: '01',
        title: 'SKU & Batch Lookup',
        description: 'Instant typeahead querying across item code, batch number, or shelf coordinate.'
      },
      {
        step: '02',
        title: 'Stock Movement Dispatch',
        description: 'Movement form with automated stock delta calculation and validation checks.'
      },
      {
        step: '03',
        title: 'Audit Log Append',
        description: 'Immutable movement ledger record created with timestamp and user attribution.'
      }
    ],
    architectureNotes: [
      'Stateless UI components receiving immutable stock state via RxJS async pipes',
      'Modular validator checking available on-hand balance before allowing transfer execution'
    ],
    challenges: [
      'Designing an intuitive UI that clearly separates current static inventory from high-frequency transactional movement logs.',
      'Ensuring the interface scales gracefully from mobile warehouse tablets to ultra-wide desktop monitors.'
    ],
    outcomes: [
      'Comprehensive synthetic demonstration of real enterprise warehouse requirements',
      'Reusable table and badge components integrated into the developer toolkit'
    ],
    isProprietary: false
  },
  {
    id: 'employee-attendance-mobile',
    title: 'Employee Attendance Mobile App',
    subtitle: 'Location-Aware Staff Check-In & Shift Sync App',
    category: 'Mobile Development',
    contentType: 'professional-experience',
    featured: false,
    summary:
      'Cross-platform Flutter mobile application built for healthcare branch staff, featuring location-based geofenced check-in/out, shift roster tracking, and real-time synchronization with ERP HR & payroll backends.',
    problem:
      'Multi-branch healthcare staff required an accurate, fraud-resistant method to check in for shifts across geographically dispersed facilities without physical biometric hardware bottlenecks.',
    solution:
      'Developed a Flutter application with GetX architecture that verifies device location against facility geofence coordinates before allowing attendance check-in, syncing live with ERP REST endpoints.',
    myRole:
      'Mobile Lead Developer. Engineered Flutter UI screens, GetX controllers, geolocation verification service, and background sync logic.',
    contributions: [
      'Developed Flutter UI adhering to healthcare staff accessibility needs.',
      'Implemented GetX state management for reactive UI updates without state leakage.',
      'Integrated device GPS and geofencing to validate physical presence at designated branches.',
      'Structured background offline queuing to sync punches as soon as network connectivity is restored.'
    ],
    features: [
      'Geofenced 1-tap check-in and check-out with instant branch confirmation',
      'Monthly attendance calendar with shift tags and leave status indicators',
      'Real-time ERP backend synchronization via authenticated REST APIs',
      'Profile and branch duty overview'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'GetX',
      'REST APIs',
      'Geofencing',
      'ERP Backend Sync'
    ],
    thumbnail: 'assets/img/portfolio-images/figma-3.png',
    workflowSteps: [
      {
        step: '01',
        title: 'Location Verification',
        description: 'Query device GPS coordinates and calculate distance against registered branch geofence.'
      },
      {
        step: '02',
        title: 'Shift Punch Request',
        description: 'Sign attendance payload with device timestamp and employee biometric token.'
      },
      {
        step: '03',
        title: 'ERP Sync & Confirmation',
        description: 'Transmit to enterprise HR endpoint, updating roster and payroll logs in real-time.'
      }
    ],
    architectureNotes: [
      'Clean separation between Presentation, Controller (GetX), and Data Repositories',
      'Token refresh interceptor ensuring uninterrupted mobile sessions across shifts'
    ],
    challenges: [
      'Handling flaky GPS accuracy inside indoor hospital environments using hybrid coordinate filtering.',
      'Ensuring zero lost check-in events even when mobile connectivity drops during shift changes.'
    ],
    outcomes: [
      'Deployed across multi-branch healthcare staff',
      'Eliminated manual paper attendance registers and reduced payroll processing discrepancies'
    ],
    isProprietary: true,
    disclaimer:
      'Internal Healthcare Application. Screenshots and data represented are synthetic mockups for professional demonstration.'
  },
  {
    id: 'location-ordering-app',
    title: 'Location-Based Essentials Ordering App',
    subtitle: 'Real-Time Order Tracking & Mobile Marketplace',
    category: 'Mobile Development',
    contentType: 'professional-experience',
    featured: false,
    summary:
      'Cross-platform Flutter application supporting location-aware catalog browsing, live order tracking with WebSockets, Firebase Push Notifications, and high-stability crash monitoring.',
    problem:
      'The consumer marketplace mobile app suffered from high crash rates (~7% crashes) during initial versions, causing lost checkout sessions and frustrating customers.',
    solution:
      'Rebuilt UI state management using clean GetX controllers, integrated Firebase Crashlytics to triage error root causes, and introduced WebSocket live order tracking.',
    myRole:
      'Flutter Developer. Implemented mobile UI components, order tracking screen, push notification listeners, and stability bug fixes.',
    contributions: [
      'Delivered clean mobile screens separating UI presentation from data access.',
      'Implemented real-time delivery rider tracking screen using WebSockets and Google Maps.',
      'Tackled stability backlog via Firebase Crashlytics, raising crash-free sessions from ~93% to 99.5%.',
      'Prepared builds for enterprise distribution and Play Store compliance.'
    ],
    features: [
      'Location-based store catalog and product search',
      'Live order tracker with milestone status timeline (Placed, Preparing, In Transit, Delivered)',
      'Firebase Push Notifications for order milestone updates',
      'Integrated Crashlytics monitoring for instant exception reporting'
    ],
    technologies: [
      'Flutter',
      'Dart',
      'GetX',
      'Firebase Crashlytics',
      'WebSockets',
      'REST APIs'
    ],
    thumbnail: 'assets/img/portfolio-images/figma-1.png',
    challenges: [
      'Isolating sporadic device-specific memory leaks on older Android versions during continuous map rendering.',
      'Achieving smooth WebSocket reconnection when users transition between Wi-Fi and mobile cellular data.'
    ],
    outcomes: [
      'Improved crash-free session rate to 99.5%, cutting crashes by over 80%',
      'Successful Play Store deployment under organization developer account'
    ],
    isProprietary: true,
    disclaimer:
      'Commercial Mobile Application delivered at Varnik Systems. Visuals and payloads shown are synthetic demonstrators.'
  },
  {
    id: 'angular-erp-ui-toolkit',
    title: 'Reusable Angular ERP UI Toolkit',
    subtitle: 'Component System for Enterprise Web Applications',
    category: 'Frontend Engineering',
    contentType: 'prototype',
    featured: false,
    summary:
      'A modular toolkit of production-tested Angular UI components engineered for enterprise business workflows: searchable tables, multi-tier dropdowns, permission-aware action buttons, and async skeleton states.',
    problem:
      'Enterprise teams frequently rewrite repetitive table sorting, pagination, confirmation modals, and empty state handlers, causing inconsistent UX and duplicated bugs across business modules.',
    solution:
      'Created an abstracted, themeable Angular component library with uniform API surfaces, keyboard accessibility, reactive inputs, and dark/light mode tokens.',
    myRole:
      'Component Library Designer & Implementer. Authored TypeScript interfaces, CSS token architecture, and demo playground documentation.',
    contributions: [
      'Built generic data table component with sortable headers, dynamic template outlets, and pagination.',
      'Created permission-aware directive that conditionally disables or hides buttons based on user roles.',
      'Designed lightweight skeleton loader components eliminating layout shift during API latency.',
      'Packaged components as an Angular library for seamless imports across feature modules.'
    ],
    features: [
      'Configurable enterprise data table with sticky headers and column selection',
      'Debounced search input with built-in clear action and loading spinner',
      'Permission directive (*hasRole="\'ADMIN\'") for granular button access',
      'Accessible confirmation modal with keyboard trap and ESC key closing',
      'Zero external styling dependencies beyond clean CSS variables'
    ],
    technologies: [
      'Angular',
      'TypeScript',
      'SCSS',
      'RxJS',
      'Bootstrap Utilities'
    ],
    thumbnail: 'assets/img/portfolio-images/figma-portfolio-2.png',
    challenges: [
      'Balancing high customizability via ng-template outlets while maintaining clean, simple default markup.',
      'Ensuring strict WCAG contrast compliance in both dark and light modes.'
    ],
    outcomes: [
      'Standardized component library pattern used as blueprint for enterprise ERP development',
      'Reduces development time for new CRUD screens by an estimated 40%'
    ],
    isProprietary: false
  },
  {
    id: 'spring-boot-rest-api',
    title: 'Spring Boot REST API Demonstration',
    subtitle: 'Layered Backend Architecture & Relational Persistence',
    category: 'Backend Development',
    contentType: 'demo',
    featured: false,
    summary:
      'A clean layered REST backend demonstration illustrating controller-service-repository patterns, DTO validation, JPA criteria queries, and MySQL transaction management built for seamless Angular consumption.',
    problem:
      'Frontend developers working on enterprise ERP apps require deep empathy with backend request/response semantics, HTTP status conventions, and database transaction boundaries.',
    solution:
      'Built a reference Spring Boot REST service with clean layered architecture, validation annotations, custom exception handlers, and OpenAPI/Swagger documentation.',
    myRole:
      'Backend Implementer. Created REST controllers, JPA entities, database schema migrations, and Postman API test collection.',
    contributions: [
      'Designed RESTful endpoints adhering to HTTP verb conventions and JSON naming standards.',
      'Implemented global exception handler returning structured error payloads with clear client semantics.',
      'Configured Spring Data JPA repositories with custom query methods and pagination support.',
      'Documented interactive API endpoints using Swagger UI.'
    ],
    features: [
      'Layered Controller -> Service -> Repository -> Entity architecture',
      'Bean Validation (@Valid, @NotNull, @Size) with structured validation error responses',
      'Spring Data JPA pagination and sorting for large record sets',
      'MySQL relational database integration with indexed foreign keys'
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'MySQL',
      'Spring Data JPA',
      'REST APIs',
      'Postman',
      'Swagger / OpenAPI'
    ],
    thumbnail: 'assets/img/portfolio-images/figma-portfolio-4.png',
    challenges: [
      'Designing clean DTO mapping without exposing internal JPA entity state to API consumers.',
      'Handling database constraint violations gracefully with human-readable error messages.'
    ],
    outcomes: [
      'Solid full-stack collaboration bridge between Angular frontend and Spring Boot backend teams',
      'Comprehensive Postman collection for automated endpoint verification'
    ],
    isProprietary: false
  }
];
