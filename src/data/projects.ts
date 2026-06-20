export const projects = [
  {
    slug: 'client-management-portal',
    title: 'Client Management Portal',
    category: 'Operations Platform',
    year: '2026',
    role: 'Fullstack Developer',
    description:
      'A role-aware workspace for client records, project workflows, authentication, and admin operations.',
    overview:
      'This build focuses on replacing scattered client tracking with one organized operating view. The interface is shaped for daily use: quick scanning, clear statuses, and protected actions for different user roles.',
    challenge:
      'Teams needed a dependable way to manage client details, project progress, and internal admin tasks without spreading context across chat threads and manual files.',
    solution:
      'I planned a fullstack workflow around reusable React screens, protected API routes, PostgreSQL relationships, validation, and a dashboard structure that keeps the most important actions close to the surface.',
    tags: ['React', 'Node.js', 'Express', 'PostgreSQL'],
    features: ['Role-aware dashboard', 'Client record management', 'Protected API routes', 'Structured project statuses'],
    impact: 'Centralized client activity and replaced scattered manual tracking with a cleaner operating view.',
    metrics: ['40% faster client lookup', '3 core user roles', '1 shared source of truth'],
    accent: '#bf5b39',
  },
  {
    slug: 'api-driven-marketplace',
    title: 'API-driven Marketplace',
    category: 'Service Architecture',
    year: '2025',
    role: 'Backend Developer',
    description:
      'REST API services for marketplace inventory, vendor workflows, order handling, and payment-ready integrations.',
    overview:
      'A backend-first marketplace foundation built around clear service boundaries. The work emphasizes reliable API behavior, predictable data shapes, and integration points that can support future product growth.',
    challenge:
      'Marketplace workflows can quickly become tangled when inventory, vendors, orders, authentication, and payments are modeled without clean ownership.',
    solution:
      'I structured REST endpoints, MongoDB models, authentication flows, and documentation patterns so each workflow could be tested, reused, and extended without breaking adjacent services.',
    tags: ['Node.js', 'MongoDB', 'REST API', 'Auth'],
    features: ['Inventory endpoints', 'Vendor workflows', 'Order handling', 'Payment-ready service boundaries'],
    impact: 'Created clearer service boundaries for commerce workflows and future integration points.',
    metrics: ['4 major API modules', 'Auth-ready routes', 'Documented request flows'],
    accent: '#496f5d',
  },
  {
    slug: 'responsive-analytics-dashboard',
    title: 'Responsive Analytics Dashboard',
    category: 'Decision Dashboard',
    year: '2025',
    role: 'Frontend Developer',
    description:
      'A responsive business dashboard with clean data views, reusable UI patterns, and performance-conscious components.',
    overview:
      'A decision dashboard designed for scanning, comparing, and acting on business metrics across desktop and mobile screens. The UI favors clarity over decoration, with reusable components for dense information.',
    challenge:
      'Business metrics lose value when users have to dig through crowded screens or switch devices to understand what changed.',
    solution:
      'I built responsive card grids, table-friendly layouts, filter-ready sections, and focused visual hierarchy with React, TypeScript, and Tailwind CSS.',
    tags: ['React', 'Tailwind CSS', 'TypeScript', 'UX'],
    features: ['Responsive metric cards', 'Reusable dashboard sections', 'Mobile-friendly data views', 'Performance-conscious UI'],
    impact: 'Made key business metrics faster to scan, compare, and act on across screen sizes.',
    metrics: ['Mobile-first layout', 'Reusable UI system', 'Faster metric scanning'],
    accent: '#203c56',
  },
]

export type Project = (typeof projects)[number]
