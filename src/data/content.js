// ───────────────────────────────────────────────────────────────────────────
//  SITE CONTENT - edit everything about the portfolio from this one file.
//  No build changes needed: save, and the UI updates instantly in dev.
// ───────────────────────────────────────────────────────────────────────────

export const profile = {
  name: 'Boien Reyes',
  initials: 'BR',
  // Square headshot shown inside the "BR" brand mark (navbar + footer).
  // Served from /public. Delete the file and this line to fall back to the initials.
  photo: 'avatar.png',
  headline: 'Project & Delivery Management · WordPress & Umbraco · IT Ops · DevOps',
  // Rotating roles shown with a typing animation in the hero.
  roles: [
    'Project & Delivery Manager',
    'WordPress Developer',
    'Full-Stack Web Developer',
    'DevOps Practitioner',
    'CI/CD Pipeline Builder',
  ],
  location: 'Philippines · Remote-friendly',
  availability: 'Open to full-time & contract roles',
  summary:
    'I plan, build and run web platforms end to end. That means SOP-driven scoping and delivery tracking, React front ends, WordPress and Umbraco CMS builds and PHP/.NET services, then automated releases plus the monitoring, backups and incident response that keep them online.',
  // Verbatim from the résumé's "Professional Summary" section. Rendered in the About panel.
  professionalSummary: [
    'IT Operations & Web Technology Specialist with 10+ years of remote experience supporting international organizations across the Philippines, Australia, United States, and Canada.',
    'Experienced in WordPress and full-stack web development, website administration, hosting infrastructure, domain and DNS management, server administration, technical troubleshooting, and UI/UX design. Skilled in PHP, JavaScript, HTML/CSS, MySQL, REST/API-based web services, WordPress, Elementor, Divi, and other CMS platforms. Also experienced with AI and workflow automation tools including OpenAI, Claude, Copilot, Zapier, n8n, and Make.',
  ],
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

// Headline numbers under the hero.
// NOTE: computed at the bottom of this file from `websites`, `projects` and
// `certifications`, so every figure stays true if that data changes.

export const focusAreas = [
  {
    icon: 'clipboard',
    title: 'Project Management',
    text: 'SOP-driven intake, SMART goals, OKR reporting and Lean, Waterfall or Agile chosen per project. Scoping, timelines and stakeholder communication across long-running remote builds, tracked in a real queue rather than a shared inbox.',
  },
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
    text: 'GitHub Actions pipelines for lint, test, build and zero-downtime release, with rollback paths and audit trails.',
  },
];

// Skill groups render as columns with proficiency bars (0-100).
export const skillGroups = [
  {
    title: 'Project Management',
    icon: 'clipboard',
    skills: [
      { name: 'SOP design & process documentation', level: 88 },
      { name: 'SMART goals & definition of done', level: 88 },
      { name: 'OKR setting & outcome reporting', level: 84 },
      { name: 'Lean delivery & continuous improvement', level: 85 },
      { name: 'Waterfall & stage-gate delivery', level: 86 },
      { name: 'Agile / Scrum & Kanban boards', level: 85 },
      { name: 'Scope control, RACI & risk registers', level: 86 },
    ],
  },
  {
    title: 'WordPress & CMS',
    icon: 'layers',
    skills: [
      { name: 'WordPress (themes & plugins)', level: 95 },
      { name: 'Gutenberg / ACF / Elementor', level: 92 },
      { name: 'WooCommerce', level: 88 },
      { name: 'WP-CLI & content migrations', level: 87 },
      { name: 'WordPress security & hardening', level: 85 },
      { name: 'Umbraco (C# / .NET)', level: 90 },
      { name: 'Shopify (themes & apps)', level: 82 },
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
      { name: 'Proxmox / virtualisation', level: 82 },
      { name: 'Hardware & OS deployment', level: 84 },
      { name: 'Backup & Recovery', level: 86 },
    ],
  },
  {
    title: 'IT Support & Networking',
    icon: 'activity',
    skills: [
      { name: 'Cloudflare (DNS, CDN, WAF & caching)', level: 90 },
      { name: 'DNS, SSL/TLS, VPN', level: 80 },
      { name: 'Network setup & security', level: 83 },
      { name: 'Helpdesk & ticket triage', level: 86 },
      { name: 'Monitoring & Logging', level: 83 },
      { name: 'Incident response & runbooks', level: 84 },
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
  {
    title: 'Graphic Design',
    icon: 'palette',
    skills: [
      { name: 'Logo & brand identity', level: 90 },
      { name: 'Adobe Photoshop', level: 90 },
      { name: 'Adobe Illustrator', level: 88 },
      { name: 'Adobe InDesign', level: 86 },
      { name: 'Figma (UI design)', level: 84 },
      { name: 'Print & marketing collateral', level: 86 },
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
    period: 'May 2023 - Aug 2026',
    location: 'Philippines · Remote',
    summary:
      'Owned the company web presence plus the infrastructure behind it: websites, web services, servers, domains and hosting.',
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
    period: 'Feb 2022 - Mar 2023',
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
    period: 'May 2019 - Dec 2021',
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
    period: 'Jun 2017 - Oct 2019',
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
    period: 'Jun 2014 - Jun 2018',
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
    period: 'May 2009 - Sep 2012',
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

// "category" values are used by the Projects filter - keep them consistent.
export const projectCategories = ['All', 'WordPress', 'Web', 'DevOps', 'IT Operations'];

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
      'Accessible, mobile-first layout built with plain CSS, with no UI or icon libraries.',
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
    title: 'Flappy Bird: Canvas Game',
    category: 'Web',
    blurb:
      'Browser game built from scratch on the HTML Canvas API, with no game engine, no libraries and no dependencies.',
    highlights: [
      'Persistent best score in localStorage, plus pause (P) and quick-restart (R) controls.',
      'Progressive difficulty: pipe speed and gap tightness scale as the score climbs.',
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
    title: 'BoienTheme: Custom WordPress Theme',
    category: 'WordPress',
    featured: true,
    blurb:
      'Hand-built WordPress theme with a modular CSS architecture and a Bootstrap 5 navigation walker.',
    highlights: [
      'Custom template files (header, footer, sidebar, index) with a functions.php bootstrap.',
      'Bootstrap 5 nav walker class for accessible multi-level menus.',
      'Styles split by concern (global, header, footer, sidebar, content) and registered per template.',
    ],
    stack: ['WordPress', 'PHP', 'Bootstrap 5', 'CSS'],
    metrics: [{ label: 'Theme parts', value: 'Custom' }],
    links: [{ label: 'Source', url: 'https://github.com/mrboyenrey/BoienTheme', icon: 'github' }],
  },
  {
    title: 'Contact Form CREEN: WordPress Plugin',
    category: 'WordPress',
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
      'This site: React 19 and Vite delivered by a GitHub Actions pipeline with lint and build gates and automated Pages releases.',
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
    title: 'Warning Lights: Real-time Control System',
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
// Platforms were verified by inspecting each live site (Sep 2026) - WordPress
// was confirmed via wp-json / wp-login responses and wp-content asset paths.
// Sites left without a platform could not be confirmed, or have since migrated.
// NOTE: musclenation.com was removed - the domain is now parked by GoDaddy.
// wme.us.com is also omitted - it no longer resolves.
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
  { domain: 'advanttechnology.com', url: 'https://advanttechnology.com/', platform: 'WordPress', client: 'Advant Technology' },
  { domain: 'theonlystandard.co', url: 'https://theonlystandard.co/', platform: 'WordPress', client: 'The Only Standard' },
];

// Graphic design portfolio - identity, print and web design work from the
// freelance and agency years. Covers live in public/design/<slug>.webp and
// every card links to the full case study on behance.net/BoienReyes.
export const designWorks = [
  {
    slug: 'malachi-construction-logo',
    title: 'Malachi Construction Limited',
    category: 'Logo & Branding',
    blurb: 'Geometric M monogram and wordmark for a construction company, presented as a letterpress identity mockup.',
    url: 'https://www.behance.net/gallery/51418035/Malachi-Construction-Limited-(Logo-Design-Project)',
  },
  {
    slug: 'business-corporate-logos',
    title: 'Business & Corporate Logos',
    category: 'Logo & Branding',
    blurb: 'A collection of identity marks for business clients, including the Jamestown Stamp Company wordmark.',
    url: 'https://www.behance.net/gallery/26839855/Business-and-Corporate-Logos',
  },
  {
    slug: 'coffee-gator-postcard',
    title: 'Coffee Gator Print Set',
    category: 'Print & Editorial',
    blurb: 'Product flyer, warranty insert and postcard for a coffee brand, built around the CoffeeGator alligator mark.',
    url: 'https://www.behance.net/gallery/30813909/Designing-Postcard-for-Coffee-Gator',
  },
  {
    slug: 'trifold-brochure-borealis',
    title: 'Trifold Brochure: Borealis Theme',
    category: 'Print & Editorial',
    blurb: 'Travel brochure for a Northern Lights tour operator in Yellowknife, Canada, themed on the aurora night sky.',
    url: 'https://www.behance.net/gallery/27914121/Trifold-Brochure-Design-(BOREALIS-THEME)',
  },
  {
    slug: 'vision-insight-flyer',
    title: 'Vision Insight Flyer',
    category: 'Print & Editorial',
    blurb: 'Trifold "Business in a Box" brochure for start-up entrepreneurs, with a network-line motif and desk illustration.',
    url: 'https://www.behance.net/gallery/29133799/Vision-Insight-Flyer',
  },
  {
    slug: 'bow-and-arrow-book-design',
    title: 'Bow and Arrow: Book Design Concept',
    category: 'Print & Editorial',
    blurb: 'Book cover concept built from a repeating bow-and-arrow line motif in red and white, with a classic serif title.',
    url: 'https://www.behance.net/gallery/40718491/BOW-AND-ARROW-BOOK-DESIGN-CONCEPT',
  },
  {
    slug: 'talent-poster',
    title: 'Talent Poster Series',
    category: 'Poster & Billboard',
    blurb: 'Typographic poster series pairing oversized serif headlines with high-contrast black-and-white action photography.',
    url: 'https://www.behance.net/gallery/87877795/Talent-Poster',
  },
  {
    slug: 'lamborghini-harucan-poster',
    title: 'Lamborghini Huracan Poster',
    category: 'Poster & Billboard',
    blurb: 'Outdoor advertising concept for the Lamborghini Huracan LP 610-4, with colour-coded type on a night-city billboard.',
    url: 'https://www.behance.net/gallery/34468101/Lamborghini-Harucan-Poster',
  },
  {
    slug: 'koord-website',
    title: 'Koord Website',
    category: 'Web & UI Design',
    blurb: 'Corporate website for a motion-control engineering firm, with a panoramic hero and three service panels.',
    url: 'https://www.behance.net/gallery/44668377/Koord-Website',
  },
  {
    slug: 'techmanswork-website',
    title: 'Techmanswork Business Website',
    category: 'Web & UI Design',
    blurb: 'Business website design presented as a laptop mockup, leading with a bold type-driven hero.',
    url: 'https://www.behance.net/gallery/44474301/Techmanswork-Business-Website',
  },
  {
    slug: 'weelectricmotors-web-mockup',
    title: 'Electric Motors Web Mockup',
    category: 'Web & UI Design',
    blurb: 'Homepage mockup for an electric motor sales and repair business, built on a yellow and black palette.',
    url: 'https://www.behance.net/gallery/26463533/I-redesign-a-Web-Mock-Up-for-wwwweelectricmotorscom',
  },
  {
    slug: 'corporate-building-vector',
    title: 'Corporate Building Vector',
    category: 'Vector Illustration',
    blurb: 'Isometric vector illustration of a corporate campus, drawn as flat architectural artwork.',
    url: 'https://www.behance.net/gallery/29190915/Corporate-Building-Vector-Design',
  },
];

// Tools rendered in the marquee/stack grid.
export const toolbelt = [
  'React',
  'JavaScript',
  'TypeScript',
  'HTML/CSS',
  'Photoshop',
  'Illustrator',
  'InDesign',
  'Figma',
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
  'Cloudflare',
  'Bash',
  'PowerShell',
  'Vite',
  'npm',
  'Certbot / SSL',
  'Monitoring',
  'Proxmox',
  'Project Management',
  'SOP',
  'SMART Goals',
  'OKR',
  'Lean',
  'Waterfall',
  'Agile / Scrum',
  'Kanban',
  'RACI',
];

// Certifications: every entry below is a real, printed certificate.
//
// The previous entries here were placeholders that were never verified against real
// credentials (including an invented "Umbraco Certified Developer"), so they were
// removed on 2026-09-10 and the list was rebuilt from the scanned originals. Only
// add a certification you can actually evidence.
//
//   { name: 'Exact name as printed on the certificate',
//     issuer: 'Issuing organisation',
//     year: '2024',
//     icon: 'shield',            // see src/components/Icons.jsx for the icon set
//     url: 'https://...' }       // optional verification link
//
// The Credentials section and its nav link hide themselves automatically while this
// array is empty, and reappear as soon as it has an entry.
//
// Source: the scanned certificates in
// "OneDrive/.../Important Personal Documents/Boien's Documents/Work Certificates".
// `credentialId` is the number printed on the certificate itself.
export const certifications = [
  {
    name: 'Microsoft Artificial Intelligence Course: Azure AI Fundamentals',
    issuer: 'TESDA Online Program',
    year: '2026',
    icon: 'cloud',
    credentialId: 'M8cpkCkIWt',
  },
  {
    name: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University (via Coursera)',
    year: '2026',
    icon: 'sparkles',
    credentialId: 'M8WR8PJO828J',
    url: 'https://coursera.org/verify/M8WR8PJO828J',
  },
  {
    name: 'Social Media Management',
    issuer: 'Meta (via Coursera)',
    year: '2021',
    icon: 'users',
  },
  {
    name: 'Protecting Your Brand and Logo (Seminar)',
    issuer: 'DTI Negosyo Center, General Santos City',
    year: '2018',
    icon: 'shield',
  },
  {
    name: 'Modern Web Development with Laravel 5.2 (PHP Framework)',
    issuer: 'Udemy',
    year: '2017',
    icon: 'code',
    credentialId: 'UC-WH163H5G',
    url: 'https://www.udemy.com/certificate/UC-WH163H5G/',
  },
  {
    name: 'InDesign CS6 Essential Training',
    issuer: 'Lynda.com / LinkedIn Learning',
    year: '2016',
    icon: 'layers',
    credentialId: '215B7B45F5F24393A16A9CDC7FA74051',
  },
  {
    name: 'Foundations of Logo Design',
    issuer: 'lynda.com',
    year: '2013',
    icon: 'sparkles',
    credentialId: '6B637B672A2D4F6E85D9E236DAD96DF',
  },
  {
    name: 'Adobe Photoshop CS6 Essential Tools',
    issuer: 'Alison',
    year: '2013',
    icon: 'globe',
    credentialId: '542-1174357',
  },
  {
    name: 'IT Passport Certification Project (Pilot Test)',
    issuer: 'PhilNITS / ITPEC',
    year: '2010',
    icon: 'terminal',
  },
];

// Education: taken from my résumé, independently verifiable.
export const education = [
  {
    degree: 'BS Computer Science',
    school: 'Cebu Institute of Technology University',
    detail: 'Cebu, Philippines',
    icon: 'cap',
  },
];

// Profiles where the claims on this page can be checked independently.
export const credentialProfiles = [
  {
    label: 'LinkedIn',
    icon: 'linkedin',
    url: 'https://www.linkedin.com/in/boien-reyes-898a4b123/',
    note: 'Work history and certifications',
  },
  {
    label: 'GitHub',
    icon: 'github',
    url: 'https://github.com/mrboyenrey',
    note: 'Source code for the projects above',
  },
  {
    label: 'Behance',
    icon: 'globe',
    url: 'https://www.behance.net/BoienReyes',
    note: 'Design and UI work',
  },
  {
    label: 'Upwork',
    icon: 'users',
    url: 'https://www.upwork.com/freelancers/~01d6f91be43214304d',
    note: 'Freelance client history',
  },
];
// "principle" cards in the About section.
export const principles = [
  { title: 'Automate the second time', text: 'If a task is done twice by hand, it becomes a script, a job or a pipeline step.' },
  { title: 'If it is not monitored, it is broken', text: 'Logs, metrics and alerts ship with the feature, not after the first outage.' },
  { title: 'Reversible by default', text: 'Every change has a rollback path and every backup has a tested restore.' },
  { title: 'Editors before developers', text: 'A WordPress or Umbraco build is not finished until a non-developer can publish safely without calling me.' },
  { title: 'Simple beats clever', text: 'Readable config and boring, well-understood tooling keep 3 a.m. pages rare.' },
];

// ── Contact form delivery ──────────────────────────────────────────────────
// Get a free access key at https://web3forms.com - enter your email, click the
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

// ── WordPress ────────────────────────────────────────────────────────────────
// What I actually do on the platform. Counts elsewhere on the page are derived
// from `websites` and `projects`, so they cannot drift from the real data.
export const wordpressCapabilities = [
  {
    icon: 'layers',
    title: 'Custom themes',
    text: 'Themes built to a design handoff, with no page-builder lock-in and no bloated starter kit to fight later.',
  },
  {
    icon: 'package',
    title: 'Plugins & integrations',
    text: 'Purpose-built plugins plus third-party API, payment and CRM integrations when an off-the-shelf plugin does not fit.',
  },
  {
    icon: 'globe',
    title: 'WooCommerce',
    text: 'Product catalogues, tiered pricing, shipping rules and checkout customisation on WordPress.',
  },
  {
    icon: 'code',
    title: 'Block editor, ACF & Divi',
    text: 'Custom blocks and field groups so a non-developer can compose pages without touching template code.',
  },
  {
    icon: 'gauge',
    title: 'Speed & Core Web Vitals',
    text: 'Caching, image pipelines and query tuning, measured against real field data, not just a lab score.',
  },
  {
    icon: 'shield',
    title: 'Security & maintenance',
    text: 'Hardening, least-privilege roles, staged core and plugin updates, and off-site backups that have been restored.',
  },
];

// ── Project Management ────────────────────────────────────────────────────
// The delivery system behind every build on this page. Frameworks are listed
// as practices applied to real client work, not as certifications.
export const pmFrameworks = [
  {
    icon: 'clipboard',
    tag: 'Governance',
    title: 'SOP',
    text: 'Standard operating procedures for the repeatable parts: intake, staging, release and handover. Written down, versioned with the repo, detailed enough that someone else can run it.',
  },
  {
    icon: 'target',
    tag: 'Goals',
    title: 'SMART goals',
    text: 'A vague brief is turned into specific, measurable, achievable, relevant and time-bound acceptance criteria before a line of code is written.',
  },
  {
    icon: 'gauge',
    tag: 'Outcomes',
    title: 'OKRs',
    text: 'Delivery work rolls up to an objective with a small set of measurable key results, so progress is reported as outcomes rather than hours logged.',
  },
  {
    icon: 'activity',
    tag: 'Efficiency',
    title: 'Lean',
    text: 'Value-stream thinking: cut waiting, rework and handoffs, keep work in progress small, and treat every retrospective as a process improvement.',
  },
  {
    icon: 'pipeline',
    tag: 'Sequential',
    title: 'Waterfall',
    text: 'For fixed-scope work such as a content migration or a compliance-driven build: sequential phases, a sign-off gate at the end of each, changes handled through formal change control.',
  },
  {
    icon: 'check',
    tag: 'Iterative',
    title: 'Agile & Scrum',
    text: 'Timeboxed sprints, a prioritised backlog and a review at the end of each cycle, so the client sees working software instead of a status report.',
  },
  {
    icon: 'users',
    tag: 'Flow',
    title: 'Kanban',
    text: 'A visible board with WIP limits and explicit columns. Work is pulled, not pushed, and blockers surface in the open instead of in a direct message.',
  },
  {
    icon: 'shield',
    tag: 'Risk',
    title: 'Risk & change control',
    text: 'A RAID log, an impact assessment and a rollback plan for anything touching a live site, so an unexpected change never becomes an unplanned outage.',
  },
  {
    icon: 'clipboard',
    tag: 'Clarity',
    title: 'RACI & WBS',
    text: 'One accountable owner per workstream, a work breakdown structure for scope, and a RACI matrix so approvals never stall in an inbox.',
  },
];

// Six stages, each with a sign-off gate. Rendered with the same stepper the
// CI/CD pipeline section uses.
export const pmLifecycle = [
  {
    id: 'intake',
    name: 'Intake',
    icon: 'clipboard',
    artefact: 'SOP-01 · Client intake & requirements',
    summary: 'Every request enters through the same documented intake, so nothing is lost in a chat thread and nothing starts without an owner.',
    tools: ['SOP', 'Requirement checklist', 'Scope statement'],
    gates: ['Brief captured in writing', 'Success criteria agreed', 'Definition of done written'],
  },
  {
    id: 'plan',
    name: 'Plan',
    icon: 'target',
    artefact: 'SMART goal · WBS · estimate',
    summary: 'The business goal is written as a SMART goal, then broken into a work breakdown structure with estimates, dependencies and assumptions.',
    tools: ['SMART goals', 'OKRs', 'Work breakdown structure'],
    gates: ['SMART goal agreed', 'Effort estimated', 'Assumptions recorded'],
  },
  {
    id: 'schedule',
    name: 'Schedule',
    icon: 'pipeline',
    artefact: 'Milestone plan · RACI matrix',
    summary: 'Milestones, buffer and the critical path are laid out, with a named owner and a RACI row for every deliverable.',
    tools: ['Milestone plan', 'Gantt', 'RACI matrix'],
    gates: ['Dates committed', 'Owners named', 'Client dependencies flagged'],
  },
  {
    id: 'execute',
    name: 'Execute',
    icon: 'check',
    artefact: 'Sprint or stage-gate run sheet',
    summary: 'Work runs as sprints when the scope is still moving and as stage-gated phases when it is fixed, on a board everyone can see.',
    tools: ['Agile / Scrum', 'Kanban', 'Waterfall gates'],
    gates: ['Board current', 'WIP within limit', 'Blockers escalated same day'],
  },
  {
    id: 'monitor',
    name: 'Monitor',
    icon: 'activity',
    artefact: 'Status report · RAID log',
    summary: 'Progress, risk and scope are tracked against the baseline, and any change is priced and approved before it is built.',
    tools: ['RAID log', 'Change control', 'Lean flow metrics'],
    gates: ['Risks reviewed', 'Changes approved', 'Scope creep logged'],
  },
  {
    id: 'close',
    name: 'Close',
    icon: 'badgeCheck',
    artefact: 'Handover SOP · retrospective',
    summary: 'Delivery ends with a written handover, updated SOPs and a retrospective, so the next project starts from a better baseline.',
    tools: ['Handover SOP', 'Retrospective', 'Kaizen actions'],
    gates: ['Handover signed off', 'SOPs updated', 'Retro actions assigned'],
  },
];

// Headline numbers under the hero - derived from the real arrays above.
export const metrics = [
  {
    value: String(websites.length),
    label: 'Client projects delivered end to end',
    hint: 'scoped, built, launched',
  },
  {
    value: String(websites.filter((site) => site.platform === 'WordPress').length),
    label: 'WordPress sites in production',
    hint: 'live client work',
  },
  {
    value: String(projects.length),
    label: 'Public projects',
    hint: 'source on GitHub',
  },
  {
    value: String(certifications.length),
    label: 'Certifications',
    hint: 'verifiable, 2010-2026',
  },
];

// Section navigation.
//
// Grouped so the header stays short as the page grows: an entry with `links`
// renders as a dropdown on desktop and as a labelled cluster in the mobile
// drawer, while an entry with only an `href` stays a plain link in both.
// `enabled: false` drops an entry, so the Credentials group disappears only if
// there is genuinely nothing to show there.
const credentialsAvailable =
  certifications.length + education.length + credentialProfiles.length > 0;

const enabledOnly = (entry) => entry.enabled !== false;
const toLink = ({ label, href }) => ({ label, href });

// NOTE: keep these in DOM order, top to bottom. The scroll-spy picks the LAST
// entry above the fold, so out-of-order items would highlight the wrong one.
const NAV = [
  { label: 'About', href: '#about' },
  {
    label: 'Capabilities',
    links: [
      { label: 'Skills', href: '#skills' },
      { label: 'Project Management', href: '#pm' },
      { label: 'WordPress', href: '#wordpress' },
      { label: 'CI/CD Pipeline', href: '#pipeline' },
    ],
  },
  {
    label: 'Work',
    links: [
      { label: 'Experience', href: '#experience' },
      { label: 'Projects', href: '#projects' },
      { label: 'Client sites', href: '#websites' },
      { label: 'Design', href: '#design' },
    ],
  },
  {
    label: 'Credentials',
    enabled: credentialsAvailable,
    links: [
      { label: 'Education', href: '#education', enabled: education.length > 0 },
      { label: 'Certifications', href: '#certifications', enabled: certifications.length > 0 },
      { label: 'Verify online', href: '#verify', enabled: credentialProfiles.length > 0 },
    ],
  },
  { label: 'Contact', href: '#contact' },
];

// What the header renders: standalone links and groups, in order.
export const navItems = NAV.filter(enabledOnly)
  .map((entry) => (entry.links ? { ...entry, links: entry.links.filter(enabledOnly) } : entry))
  .filter((entry) => !entry.links || entry.links.length > 0)
  .map((entry) => (entry.links ? { ...entry, links: entry.links.map(toLink) } : toLink(entry)));

// Flat list of every section link: used by the footer and by the scroll-spy.
export const navLinks = navItems.flatMap((entry) =>
  entry.links ? entry.links.map(toLink) : [toLink(entry)],
);

// Lines shown in the animated terminal card in the hero.
// Keep this at SIX lines, each under ~300px of text: the body is a fixed
// height, and extra or wrapped lines grow the card during the typing loop.
export const terminalLines = [
  { prompt: '$', text: 'whoami', type: 'cmd' },
  { prompt: '>', text: 'delivery manager · web developer', type: 'out' },
  { prompt: '$', text: 'cat stack.yml', type: 'cmd' },
  { prompt: '>', text: 'react | php | mysql | docker | github-actions', type: 'out' },
  { prompt: '$', text: './deploy.sh --env production', type: 'cmd' },
  { prompt: '>', text: 'build ✓  test ✓  health-check ✓  released in 7m42s', type: 'ok' },
];
