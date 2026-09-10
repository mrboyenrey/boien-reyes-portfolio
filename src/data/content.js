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
      { name: 'Shopify (themes & apps)', level: 82 },
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
    title: 'SEO & Performance',
    icon: 'search',
    skills: [
      { name: 'Technical SEO audits', level: 85 },
      { name: 'On-page & keyword optimisation', level: 85 },
      { name: 'Core Web Vitals & page speed', level: 84 },
      { name: 'Site structure & internal linking', level: 82 },
      { name: 'Schema markup & XML sitemaps', level: 80 },
      { name: 'Analytics & Search Console', level: 82 },
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
  {
    title: 'AI & Automation',
    icon: 'sparkles',
    skills: [
      { name: 'AI-assisted development', level: 90 },
      { name: 'Prompt engineering', level: 86 },
      { name: 'LLM APIs (OpenAI, Claude)', level: 83 },
      { name: 'Workflow automation (Zapier, Make, n8n)', level: 84 },
      { name: 'AI content & code review pipelines', level: 80 },
      { name: 'Chatbot & assistant prototyping', level: 78 },
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
    period: 'May 2023 — Aug 2026',
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
      'Full-stack inventory management system covering products, stock levels, sales, purchases, suppliers and reporting over a PHP REST API.',
    highlights: [
      'React front end over a PHP REST API and MySQL, with endpoints for auth, items, categories, suppliers, stock, sales, purchases and reports.',
      'Dashboard with summary cards, low-stock alerts, category breakdown and restock suggestions.',
      'CSV import/export, product image uploads, and an audit trail written on every stock movement.',
    ],
    stack: ['React', 'PHP', 'MySQL', 'REST API', 'CSV'],
    metrics: [
      { label: 'API endpoints', value: '12' },
      { label: 'Modules', value: '8' },
    ],
    links: [
      { label: 'Source', url: 'https://github.com/mrboyenrey/React-Inventory', icon: 'github' },
      { label: 'Case study', url: '#contact', icon: 'external' },
    ],
  },
  {
    title: 'Grand Vista Hotel',
    category: 'Web',
    featured: true,
    blurb:
      'Luxury hotel website with live availability search, a booking price engine, gallery lightbox and an auto-rotating testimonial carousel.',
    highlights: [
      'Client-side search, guest filtering and price sorting, with a real-time booking calculator including tax.',
      'Deployed automatically to GitHub Pages by a GitHub Actions workflow on every push to main.',
      'Accessible, mobile-first layout built with plain CSS — no UI or icon libraries.',
    ],
    stack: ['React 19', 'Vite', 'CSS', 'GitHub Actions'],
    metrics: [
      { label: 'Sections', value: '9' },
      { label: 'UI libraries', value: '0' },
    ],
    links: [
      { label: 'Live demo', url: 'https://mrboyenrey.github.io/grand-vista-hotel/', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey/grand-vista-hotel', icon: 'github' },
    ],
  },
  {
    title: 'Lafina Beach Resort',
    category: 'Web',
    blurb:
      'Responsive beach resort website built with React and Vite, published straight to GitHub Pages.',
    highlights: [
      'Component-driven layout with reusable sections and an image-led responsive design.',
      'Vite build pipeline with automated GitHub Pages deployment on every push.',
    ],
    stack: ['React', 'Vite', 'CSS', 'GitHub Pages'],
    metrics: [{ label: 'Deployment', value: 'Automated' }],
    links: [
      { label: 'Live demo', url: 'https://mrboyenrey.github.io/lafinabeach/', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey/lafinabeach', icon: 'github' },
    ],
  },
  {
    title: 'Flappy Bird — Canvas Game',
    category: 'Web',
    blurb:
      'Browser game built from scratch on the HTML Canvas API — no game engine, no libraries, no dependencies.',
    highlights: [
      'Persistent best score in localStorage, plus pause (P) and quick-restart (R) controls.',
      'Progressive difficulty — pipe speed and gap tightness scale as the score climbs.',
      'Flap and collision particle effects with responsive canvas sizing for small screens.',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Canvas API'],
    metrics: [
      { label: 'Dependencies', value: '0' },
      { label: 'Stars', value: '1' },
    ],
    links: [
      { label: 'Play live', url: 'https://mrboyenrey.github.io/flappy-bird/', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey/flappy-bird', icon: 'github' },
    ],
  },
  {
    title: 'BoienTheme — Custom WordPress Theme',
    category: 'CMS',
    featured: true,
    blurb:
      'Hand-built WordPress theme with a modular CSS architecture and a Bootstrap 5 navigation walker.',
    highlights: [
      'Custom template files — header, footer, sidebar, index — with a functions.php bootstrap.',
      'Bootstrap 5 nav walker class for accessible multi-level menus.',
      'Styles split by concern (global, header, footer, sidebar, content) and registered per template.',
    ],
    stack: ['WordPress', 'PHP', 'Bootstrap 5', 'CSS'],
    metrics: [{ label: 'Theme parts', value: 'Custom' }],
    links: [{ label: 'Source', url: 'https://github.com/mrboyenrey/BoienTheme', icon: 'github' }],
  },
  {
    title: 'Contact Form CREEN — WordPress Plugin',
    category: 'CMS',
    blurb:
      'WordPress plugin adding a contact form with Cloudflare Turnstile spam protection and email notifications.',
    highlights: [
      'Cloudflare Turnstile integration, with API keys managed from a settings dashboard rather than hard-coded.',
      'Admin toggle for automated confirmation emails, with customisable subject and body.',
      'Submissions emailed to a configured address, with a success state returned to the visitor.',
    ],
    stack: ['WordPress', 'PHP', 'Cloudflare Turnstile', 'Plugin API'],
    metrics: [{ label: 'Spam layer', value: 'Turnstile' }],
    links: [
      { label: 'Source', url: 'https://github.com/mrboyenrey/contact-form-creen-plugin', icon: 'github' },
    ],
  },
  {
    title: 'Portfolio CI/CD Pipeline',
    category: 'DevOps',
    featured: true,
    blurb:
      'This site — React 19 and Vite delivered by a GitHub Actions pipeline with lint and build gates and automated Pages releases.',
    highlights: [
      'Pull requests run lint and build gates; only main deploys, so a broken build can never reach production.',
      'Actions upgraded to the current majors and Node 22 LTS to clear runtime deprecation warnings.',
      'Relative asset base, so the same build works from any sub-path.',
    ],
    stack: ['GitHub Actions', 'Node 22', 'Vite', 'GitHub Pages'],
    metrics: [
      { label: 'Manual steps', value: '0' },
      { label: 'Gate', value: 'Lint + build' },
    ],
    links: [
      { label: 'Live site', url: 'https://mrboyenrey.github.io/boien-reyes-portfolio/', icon: 'external' },
      { label: 'Source', url: 'https://github.com/mrboyenrey/boien-reyes-portfolio', icon: 'github' },
    ],
  },
  {
    title: 'Warning Lights — Real-time Control System',
    category: 'DevOps',
    blurb:
      'WebSocket control system with separate dashboard, controller and lights-display interfaces kept in sync in real time.',
    highlights: [
      'Express 5 server using ws to broadcast light state to every connected client instantly.',
      'Three purpose-built interfaces: status dashboard, command controller and animated lights display.',
      'State pushed from the server rather than polled, so every view updates together.',
    ],
    stack: ['Node.js', 'Express 5', 'WebSocket', 'JavaScript'],
    metrics: [{ label: 'Interfaces', value: '3' }],
    links: [
      { label: 'Source', url: 'https://github.com/mrboyenrey/Warning_Lights', icon: 'github' },
    ],
  },
  {
    title: 'Automated Backup & Disaster Recovery',
    category: 'IT Operations',
    blurb:
      'Backup automation and a rehearsed recovery playbook covering the inventory platform database, uploads and configuration.',
    highlights: [
      'Database dumps generated in pure PHP and run on a nightly schedule with 14-day retention.',
      'Product images archived to zip alongside each database snapshot, both downloadable from a settings panel.',
      'Documented restore procedure with backup and restore scripts, versioned in the repo as DISASTER_RECOVERY.md.',
    ],
    stack: ['PHP', 'MySQL', 'Bash', 'Windows Task Scheduler'],
    metrics: [
      { label: 'Retention', value: '14 days' },
      { label: 'Schedule', value: 'Nightly' },
    ],
    links: [
      { label: 'Source', url: 'https://github.com/mrboyenrey/React-Inventory', icon: 'github' },
      { label: 'Approach', url: '#contact', icon: 'external' },
    ],
  },
];

// Client websites delivered through agency, contract and freelance work.
// Platforms were verified by inspecting each live site (Sep 2026) — WordPress
// was confirmed via wp-json / wp-login responses and wp-content asset paths.
// Sites left without a platform could not be confirmed, or have since migrated.
// NOTE: musclenation.com was removed — the domain is now parked by GoDaddy.
// wme.us.com is also omitted — it no longer resolves.
export const websites = [
  { domain: 'creensolutions.com', url: 'https://creensolutions.com/', platform: 'WordPress', client: 'Creen Business Management Services' },
  { domain: 'festoonhouse.com.au', url: 'https://festoonhouse.com.au/', platform: 'WordPress', client: 'Festoon House' },
  { domain: 'frazerconsultants.com', url: 'https://www.frazerconsultants.com/', client: 'Frazer Consultants' },
  { domain: 'xmworks.com', url: 'https://www.xmworks.com/', platform: 'WordPress' },
  { domain: 'k9basics.com', url: 'https://k9basics.com/', platform: 'WordPress' },
  { domain: 'loudounorthodontics.com', url: 'https://loudounorthodontics.com/', platform: 'WordPress' },
  { domain: 'gotobeauty.com', url: 'https://gotobeauty.com/', platform: 'WordPress' },
  { domain: 'fuelandtiresaver.com', url: 'https://fuelandtiresaver.com/', platform: 'WordPress' },
  { domain: 'volharddognutrition.com', url: 'https://www.volharddognutrition.com/' },
  { domain: 'gamsat-prep.com', url: 'https://www.gamsat-prep.com/' },
  { domain: 'stackrocktalent.com', url: 'https://www.stackrocktalent.com/', platform: 'Squarespace' },
  { domain: 'peachbpo.com', url: 'https://www.peachbpo.com/', platform: 'Wix' },
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
  'Shopify',
  'Gutenberg',
  'ACF',
  'Elementor',
  'WP-CLI',
  'IIS',
  'SQL Server',
  'SEO',
  'Core Web Vitals',
  'Analytics',
  'OpenAI',
  'Claude',
  'Copilot',
  'Prompt Engineering',
  'Zapier',
  'Make',
  'n8n',
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

// Certifications — intentionally EMPTY.
//
// The previous entries here were placeholders that were never verified against real
// credentials (including an invented "Umbraco Certified Developer"), so they were
// removed on 2026-09-10. Only add certifications you can actually evidence.
//
//   { name: 'Exact name as printed on the certificate',
//     issuer: 'Issuing organisation',
//     year: '2024',
//     icon: 'shield',            // see src/components/Icons.jsx for the icon set
//     url: 'https://...' }       // optional verification link
//
// The Credentials section and its nav link hide themselves automatically while this
// array is empty, and reappear as soon as it has an entry.
export const certifications = [];

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

// Section navigation. Entries with `enabled: false` are dropped — the Credentials
// link disappears while there are no certifications to show.
const SECTIONS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Pipeline', href: '#pipeline' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Websites', href: '#websites' },
  { label: 'Credentials', href: '#certifications', enabled: certifications.length > 0 },
  { label: 'Contact', href: '#contact' },
];

export const navLinks = SECTIONS.filter((section) => section.enabled !== false).map(
  ({ label, href }) => ({ label, href }),
);

// Lines shown in the animated terminal card in the hero.
export const terminalLines = [
  { prompt: '$', text: 'whoami', type: 'cmd' },
  { prompt: '>', text: 'web developer · it operations · devops', type: 'out' },
  { prompt: '$', text: 'cat stack.yml', type: 'cmd' },
  { prompt: '>', text: 'react | php | mysql | docker | github-actions', type: 'out' },
  { prompt: '$', text: './deploy.sh --env production', type: 'cmd' },
  { prompt: '>', text: 'build ✓  test ✓  health-check ✓  released in 7m42s', type: 'ok' },
];
