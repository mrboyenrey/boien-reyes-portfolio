// ───────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything about the portfolio from this one file.
//  No build changes needed: save, and the UI updates instantly in dev.
// ───────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Boien Reyes',
  initials: 'BR',
  headline: 'Web Developer · WordPress & Umbraco Expert · IT Ops · DevOps & CI/CD',
  // Rotating roles shown with a typing animation in the hero.
  roles: [
    'Full-Stack Web Developer',
    'WordPress & Umbraco Expert',
    'IT Operations Engineer',
    'DevOps Practitioner',
    'CI/CD Pipeline Builder',
  ],
  location: 'Philippines · Remote-friendly',
  availability: 'Open to full-time & contract roles',
  summary:
    'I build web applications end to end and keep them running in production. That means shipping React front ends, WordPress and Umbraco CMS platforms, and PHP/.NET services — then automating the releases and owning the monitoring, backups and incident response that keep uptime high.',
  email: 'mrboyenrey@gmail.com',
  phone: '+63 995 658 9481',
  resumeUrl: '#',
  socials: [
    { label: 'GitHub', icon: 'github', url: 'https://github.com/mrboyenrey' },
    { label: 'LinkedIn', icon: 'linkedin', url: 'https://www.linkedin.com/in/boien-reyes-898a4b123/' },
    { label: 'Behance', icon: 'globe', url: 'https://www.behance.net/BoienReyes' },
    { label: 'Email', icon: 'mail', url: 'mailto:mrboyenrey@gmail.com' },
  ],
};

// Headline numbers under the hero — keep these honest and specific.
export const metrics = [
  { value: '99.9%', label: 'Service uptime maintained', hint: 'monitoring + runbooks' },
  { value: '60+', label: 'Web & CMS builds shipped', hint: 'React · WordPress · Umbraco' },
  { value: '< 8 min', label: 'Commit to production', hint: 'automated pipelines' },
  { value: '70%', label: 'Manual toil removed', hint: 'IaC + scripting' },
];

export const focusAreas = [
  {
    icon: 'code',
    title: 'Web Development',
    text: 'Accessible, responsive interfaces in React and component-driven CSS, backed by PHP/.NET APIs, MySQL and REST.',
  },
  {
    icon: 'layers',
    title: 'WordPress & Umbraco',
    text: 'Expert-level CMS delivery: custom WordPress themes and plugins, Umbraco document types and Razor views, plus migrations with zero content loss.',
  },
  {
    icon: 'server',
    title: 'IT Operations',
    text: 'Windows/Linux server admin, Apache & Nginx, DNS, SSL/TLS, backups, patching and structured incident response.',
  },
  {
    icon: 'pipeline',
    title: 'DevOps',
    text: 'Git workflows, Docker & Compose, infrastructure as code, environment parity and observability that catches issues early.',
  },
  {
    icon: 'rocket',
    title: 'CI/CD',
    text: 'GitHub Actions pipelines for lint, test, build and zero-downtime release — with rollback paths and audit trails.',
  },
];

// Skill groups render as columns with proficiency bars (0–100).
export const skillGroups = [
  {
    title: 'CMS Platforms',
    icon: 'layers',
    skills: [
      { name: 'WordPress (themes & plugins)', level: 95 },
      { name: 'Umbraco (C# / .NET)', level: 90 },
      { name: 'C# / .NET / Razor', level: 86 },
      { name: 'Gutenberg / ACF / Elementor', level: 92 },
      { name: 'WooCommerce', level: 88 },
      { name: 'WP-CLI & content migrations', level: 87 },
    ],
  },
  {
    title: 'Web Development',
    icon: 'code',
    skills: [
      { name: 'React 19 / Hooks', level: 92 },
      { name: 'JavaScript (ES2023)', level: 90 },
      { name: 'HTML5 & CSS3', level: 94 },
      { name: 'PHP & REST APIs', level: 85 },
      { name: 'MySQL / SQL Server', level: 84 },
      { name: 'Vite / npm tooling', level: 88 },
    ],
  },
  {
    title: 'IT Operations',
    icon: 'server',
    skills: [
      { name: 'Linux (Debian/RHEL)', level: 85 },
      { name: 'Windows Server & AD', level: 82 },
      { name: 'Apache / Nginx', level: 88 },
      { name: 'DNS, SSL/TLS, VPN', level: 80 },
      { name: 'Backup & Recovery', level: 86 },
      { name: 'Monitoring & Logging', level: 83 },
    ],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'cloud',
    skills: [
      { name: 'Docker & Compose', level: 87 },
      { name: 'Git & Branching', level: 93 },
      { name: 'Bash / PowerShell', level: 86 },
      { name: 'GitHub Actions', level: 90 },
      { name: 'GitHub Pages / VPS', level: 85 },
      { name: 'IaC concepts', level: 76 },
    ],
  },
];

// The interactive pipeline section: each stage is clickable.
export const pipeline = [
  {
    id: 'commit',
    name: 'Commit',
    icon: 'git',
    command: 'git push origin feature/checkout',
    summary: 'Trunk-based flow with short-lived branches, conventional commits and required PR review.',
    tools: ['Git', 'Conventional Commits', 'Branch protection'],
    checks: ['Signed commits', 'PR review required', 'Linear history'],
  },
  {
    id: 'lint',
    name: 'Lint & Scan',
    icon: 'shield',
    command: 'npm run lint && npm audit --audit-level=high',
    summary: 'Static analysis and dependency scanning run on every push so problems never reach review.',
    tools: ['ESLint', 'npm audit', 'Prettier'],
    checks: ['Zero lint errors', 'No high CVEs', 'Formatting enforced'],
  },
  {
    id: 'build',
    name: 'Build',
    icon: 'package',
    command: 'npm ci --prefer-offline && npm run build',
    summary: 'Reproducible clean install against the lockfile, then a production bundle with hashed assets.',
    tools: ['Node 20', 'Vite', 'npm cache'],
    checks: ['Lockfile pinned', 'Bundle budget', 'Artifact signed'],
  },
  {
    id: 'test',
    name: 'Test',
    icon: 'check',
    command: 'npm run test -- --coverage',
    summary: 'Automated suite gates the release; failures stop the pipeline instead of shipping.',
    tools: ['Vitest', 'Testing Library', 'Coverage'],
    checks: ['Coverage threshold', 'No flaky retries', 'Smoke tests'],
  },
  {
    id: 'deploy',
    name: 'Deploy',
    icon: 'rocket',
    command: './deploy.sh --strategy rolling --health-check /healthz',
    summary: 'Rolling release behind a health check, with the previous container kept warm for instant rollback.',
    tools: ['Docker', 'GitHub Actions', 'Nginx'],
    checks: ['Health check green', 'Zero downtime', 'Rollback ready'],
  },
  {
    id: 'observe',
    name: 'Observe',
    icon: 'activity',
    command: 'uptime-check --every 60s --alert #ops-alerts',
    summary: 'Post-deploy verification: logs, metrics and alerts confirm the release behaves in the real world.',
    tools: ['Uptime checks', 'Log aggregation', 'Alerting'],
    checks: ['Error rate flat', 'Latency nominal', 'On-call notified'],
  },
];

export const experience = [
  {
    role: 'Web Developer / IT Operations',
    company: 'Creen Business Management Services',
    period: 'May 2023 — Mar 2026',
    location: 'Philippines · Remote',
    summary:
      'Owned the company web presence plus the infrastructure behind it — websites, web services, servers, domains and hosting.',
    highlights: [
      'Developed and maintained company websites and web services.',
      'Administered servers and managed domain and hosting infrastructure.',
      'Contributed design work for marketing visuals.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'WordPress', 'Ubuntu Linux', 'cPanel', 'Cloudflare', 'DNS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Festoon House',
    period: 'Feb 2022 — Mar 2023',
    location: 'Australia · Remote',
    summary:
      'Full stack development and web administration for an Australian retailer, including server troubleshooting and marketing design.',
    highlights: [
      'Handled web development, server administration and web administration tasks.',
      'Diagnosed and resolved issues on the site and the server.',
      'Produced visual design for the products and services promoted by the marketing team.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'WordPress', 'Linux', 'Photoshop'],
  },
  {
    role: 'Web Specialist',
    company: 'Frazer Consultants',
    period: 'May 2019 — Dec 2021',
    location: 'United States · Remote',
    summary:
      'Client-facing web support for a US consultancy, running day-to-day content operations on a funeral services website.',
    highlights: [
      "Handled CRUD operations on the client's funeral services website.",
      'Worked customer tickets covering create, read, update and delete requests.',
      'Fixed bugs and errors, resolving all customer requests on time.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'CMS', 'HTML/CSS'],
  },
  {
    role: 'Full-Stack Developer',
    company: 'RuveneCo Inc.',
    period: 'Jun 2017 — Oct 2019',
    location: 'Canada · Remote',
    summary:
      'Full stack contributor to an educational multimedia company, working across front end, back end and marketing design.',
    highlights: [
      'Assisted the tech lead with full stack development across front-end and back-end tasks.',
      'Created engaging, impactful designs for the marketing department to strengthen brand messaging.',
      'Managed ongoing website maintenance and implemented updates using modern web technologies.',
      'Enhanced user experience and kept the online presence current and effective.',
    ],
    stack: ['PHP', 'JavaScript', 'MySQL', 'HTML/CSS', 'Photoshop', 'Illustrator'],
  },
  {
    role: 'Front-End Web Developer & Graphic Designer',
    company: 'Upwork',
    period: 'Jun 2014 — Jun 2018',
    location: 'Philippines · Remote',
    summary:
      'Freelance front-end development and graphic design for international clients, delivered entirely remotely.',
    highlights: [
      'Designed the layout and user interface of client websites and applications.',
      'Wrote clean, well-organised PHP, HTML, CSS and JavaScript, and maintained databases.',
      'Ensured cross-browser compatibility and integrated front-end code with server-side code.',
      'Tested and debugged sites to verify correct function, keeping current with front-end best practices.',
      'Created visual concepts, typography and design files ready for print and digital production.',
    ],
    stack: ['PHP', 'HTML/CSS', 'JavaScript', 'MySQL', 'Figma', 'Photoshop', 'Illustrator'],
  },
  {
    role: 'Computer System Administrator & Technician',
    company: 'Adakat Computer',
    period: 'May 2009 — Sep 2012',
    location: 'Philippines · Onsite',
    summary:
      'Hands-on hardware, software and small-network support in a computer sales and service shop.',
    highlights: [
      'Maintained and repaired computer systems and served customers on computer issues.',
      'Secured and protected hardware, installed software and set up operating systems.',
      'Assembled and secured local area networks.',
    ],
    stack: ['Windows', 'Hardware Repair', 'Networking', 'OS Deployment'],
  },
];

// "category" values are used by the Projects filter — keep them consistent.
export const projectCategories = ['All', 'Web', 'CMS', 'DevOps', 'IT Operations'];

export const projects = [
  {
    title: 'Inventory Manager Platform',
    category: 'Web',
    featured: true,
    blurb:
      'Full-stack inventory system with role-based auth, stock movements, sales/purchases and reporting dashboards.',
    highlights: [
      'React front end + PHP REST API over MySQL, with cookie-based session auth.',
      'Reorder-level logic and restock suggestions surfaced on a Recharts dashboard.',
      'CSV import/export, image uploads and one-click database + media backups.',
    ],
    stack: ['React', 'PHP', 'MySQL', 'REST', 'Recharts'],
    metrics: [
      { label: 'Modules', value: '8' },
      { label: 'Roles', value: '3' },
    ],
    links: [
      { label: 'Case study', url: '#contact', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey', icon: 'github' },
    ],
  },
  {
    title: 'Zero-Downtime Delivery Pipeline',
    category: 'DevOps',
    featured: true,
    blurb:
      'Reusable GitHub Actions pipeline that lints, tests, builds and releases web apps with health-gated rollouts.',
    highlights: [
      'Matrix builds across Node versions with npm caching for fast, reproducible runs.',
      'Artifact-based deploys: the exact tested bundle is what reaches production.',
      'Automatic rollback when the post-deploy health check fails.',
    ],
    stack: ['GitHub Actions', 'Node 20', 'Docker', 'Nginx', 'Bash'],
    metrics: [
      { label: 'Deploy time', value: '< 8 min' },
      { label: 'Downtime', value: '0' },
    ],
    links: [
      { label: 'Pipeline docs', url: '#pipeline', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey', icon: 'github' },
    ],
  },
  {
    title: 'Hotel Booking Website',
    category: 'Web',
    blurb:
      'Luxury hotel site with live availability search, booking price engine, gallery lightbox and testimonials carousel.',
    highlights: [
      'Client-side search, filtering and sorting with a real-time booking calculator.',
      'Deployed automatically to GitHub Pages on every push to main.',
      'Accessible, mobile-first layout with zero UI libraries.',
    ],
    stack: ['React', 'Vite', 'CSS', 'GitHub Actions'],
    metrics: [
      { label: 'Lighthouse', value: '98' },
      { label: 'Sections', value: '9' },
    ],
    links: [{ label: 'Live demo', url: 'https://mrboyenrey.github.io/grand-vista-hotel/', icon: 'external' }],
  },
  {
    title: 'Umbraco Membership & Content Portal',
    category: 'CMS',
    featured: true,
    blurb:
      'Enterprise Umbraco build on .NET: custom document types, member auth, gated content and a Content Delivery API consumed by a separate React front end.',
    highlights: [
      'Modelled 40+ document types and compositions with Block List / Block Grid editors so editors compose pages without a developer.',
      'Custom C# surface controllers, Umbraco Forms and members with role-based content gating.',
      'Headless delivery: the Content Delivery API feeds a React front end, with preview support for authors.',
      'SQL Server backend with scheduled publishing, health checks and dev → staging → live deployments.',
    ],
    stack: ['Umbraco 13', 'C# / .NET', 'Razor', 'SQL Server', 'React', 'IIS'],
    metrics: [
      { label: 'Document types', value: '40+' },
      { label: 'Author training', value: 'Done' },
    ],
    links: [{ label: 'Approach', url: '#contact', icon: 'external' }],
  },
  {
    title: 'WordPress Multi-site Commerce Platform',
    category: 'CMS',
    blurb:
      'WooCommerce build on WordPress multisite with a hand-built theme — no page-builder lock-in — plus WP-CLI migrations and staged updates.',
    highlights: [
      'Custom Gutenberg block library with ACF-powered fields, so editors can build pages without touching layouts.',
      'WooCommerce customisations: tiered pricing, shipping rules and a bespoke checkout flow.',
      'WP-CLI driven migration with automated search-replace and redirect mapping — zero broken URLs.',
      'Hardened install: least-privilege roles, security headers, WAF rules and staged core/plugin updates.',
    ],
    stack: ['WordPress', 'WooCommerce', 'PHP', 'ACF', 'MySQL', 'WP-CLI'],
    metrics: [
      { label: 'Broken URLs', value: '0' },
      { label: 'Sites', value: '6' },
    ],
    links: [{ label: 'Approach', url: '#contact', icon: 'external' }],
  },
  {
    title: 'Backup & Disaster Recovery Runbook',
    category: 'IT Operations',
    blurb:
      'Scheduled backup automation plus a tested recovery playbook covering databases, uploads and config.',
    highlights: [
      'Nightly dumps with 14-day retention and integrity checks.',
      'Rehearsed restore procedure with documented RTO/RPO targets.',
      'Alerting on job failure so a silent backup gap can never go unnoticed.',
    ],
    stack: ['Bash', 'MySQL', 'Windows Task Scheduler', 'PHP'],
    metrics: [
      { label: 'Retention', value: '14d' },
      { label: 'Restore tested', value: 'Yes' },
    ],
    links: [{ label: 'Approach', url: '#contact', icon: 'external' }],
  },
  {
    title: 'Server Hardening & Monitoring Stack',
    category: 'IT Operations',
    blurb:
      'Standardised VPS baseline: firewall rules, TLS renewal, log shipping and uptime alerting for client web apps.',
    highlights: [
      'Reproducible provisioning script cut new-server setup from a day to under an hour.',
      'Automated certificate renewal removed recurring expiry incidents.',
      'Centralised logs and 60-second uptime probes with on-call alert routing.',
    ],
    stack: ['Linux', 'Nginx', 'UFW', 'Certbot', 'Bash'],
    metrics: [
      { label: 'Setup', value: '< 1 hr' },
      { label: 'Expired certs', value: '0' },
    ],
    links: [{ label: 'Approach', url: '#contact', icon: 'external' }],
  },
  {
    title: 'Containerised Dev Environments',
    category: 'DevOps',
    blurb:
      'Docker Compose stacks that give every project the same PHP, MySQL and web server versions on every machine.',
    highlights: [
      'One command boots the full stack — no more "works on my machine".',
      'Volumes and healthchecks tuned for fast local iteration.',
      'Staging mirrors production closely enough to catch config bugs before release.',
    ],
    stack: ['Docker', 'Docker Compose', 'PHP', 'MySQL', 'Apache'],
    metrics: [
      { label: 'Onboarding', value: '1 cmd' },
      { label: 'Parity', value: 'High' },
    ],
    links: [{ label: 'Approach', url: '#contact', icon: 'external' }],
  },
];

// Tools rendered in the marquee/stack grid.
export const toolbelt = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'WordPress',
  'Umbraco',
  'C# / .NET',
  'Razor',
  'WooCommerce',
  'Gutenberg',
  'ACF',
  'Elementor',
  'WP-CLI',
  'IIS',
  'SQL Server',
  'PHP',
  'Node.js',
  'MySQL',
  'REST APIs',
  'Git',
  'GitHub Actions',
  'Docker',
  'Docker Compose',
  'Linux',
  'Windows Server',
  'Nginx',
  'Apache',
  'Bash',
  'PowerShell',
  'Vite',
  'npm',
  'Certbot / SSL',
  'Monitoring',
];

export const certifications = [
  { name: 'Umbraco Certified Developer — Fundamentals', issuer: 'Umbraco', year: '2024', icon: 'layers' },
  { name: 'WordPress Theme & Plugin Development', issuer: 'WordPress / Udemy', year: '2024', icon: 'globe' },
  { name: 'GitHub Actions — CI/CD Foundations', issuer: 'GitHub', year: '2024', icon: 'pipeline' },
  { name: 'Docker Essentials', issuer: 'Docker / Udemy', year: '2024', icon: 'package' },
  { name: 'WooCommerce & WordPress Security Hardening', issuer: 'WordPress / Udemy', year: '2023', icon: 'shield' },
  { name: 'Linux Server Administration', issuer: 'Self-paced & lab-based', year: '2023', icon: 'terminal' },
  { name: 'Responsive Web Design', issuer: 'freeCodeCamp', year: '2022', icon: 'code' },
  { name: 'IT Support Fundamentals', issuer: 'Google IT Support', year: '2021', icon: 'shield' },
];

// "principle" cards in the About section.
export const principles = [
  { title: 'Automate the second time', text: 'If a task is done twice by hand, it becomes a script, a job or a pipeline step.' },
  { title: 'If it is not monitored, it is broken', text: 'Logs, metrics and alerts ship with the feature — not after the first outage.' },
  { title: 'Reversible by default', text: 'Every change has a rollback path and every backup has a tested restore.' },
  { title: 'Editors before developers', text: 'A WordPress or Umbraco build is not finished until a non-developer can publish safely without calling me.' },
  { title: 'Simple beats clever', text: 'Readable config and boring, well-understood tooling keep 3 a.m. pages rare.' },
];

// ── Contact form delivery ──────────────────────────────────────────────────
// Get a free access key at https://web3forms.com — enter your email, click the
// confirmation link, and paste the key below. No account or signup needed.
// With a key set, the form delivers straight to your inbox from this static
// site. Leave it empty and the form falls back to opening the visitor's own
// email client (mailto:), which requires them to press Send themselves.
export const contactForm = {
  provider: 'web3forms',
  endpoint: 'https://api.web3forms.com/submit',
  web3formsKey: '860b616e-c3ff-4f93-a81c-42ce38efce1b',
  // Submissions faster than this are treated as bots and silently dropped.
  minFillSeconds: 3,
};

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Credentials', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
];

// Lines shown in the animated terminal card in the hero.
export const terminalLines = [
  { prompt: '$', text: 'whoami', type: 'cmd' },
  { prompt: '>', text: 'web developer · it operations · devops', type: 'out' },
  { prompt: '$', text: 'cat stack.yml', type: 'cmd' },
  { prompt: '>', text: 'react | php | mysql | docker | github-actions', type: 'out' },
  { prompt: '$', text: './deploy.sh --env production', type: 'cmd' },
  { prompt: '>', text: 'build ✓  test ✓  health-check ✓  released in 7m42s', type: 'ok' },
];
