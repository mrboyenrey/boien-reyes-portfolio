<div align="center">

# 👨‍💻 Boien Reyes — Portfolio

**Web Developer · WordPress &amp; Umbraco Expert · IT Operations · DevOps &amp; CI/CD**

[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

</div>

---

## ✨ What's inside

| Section | Highlights |
|---|---|
| **Hero** | Typewriter role rotation, animated terminal card with 3D tilt, live status bar |
| **Metrics** | Headline results strip (uptime, deploys, lead time, toil removed) |
| **About** | Focus areas for Web Dev / WordPress & Umbraco / IT Ops / DevOps / CI-CD + working principles |
| **Skills** | Four grouped stacks — CMS platforms, web development, IT operations, DevOps & cloud — with animated proficiency bars |
| **Pipeline** | **Interactive** commit → lint → build → test → deploy → observe walkthrough |
| **Experience** | Timeline with role highlights and tech stacks |
| **Projects** | Filterable by discipline (Web / CMS / DevOps / IT Operations) with outcome metrics |
| **Credentials** | Certifications and training, including Umbraco and WordPress development |
| **Contact** | Validated form that hands off to the visitor's mail client |

Plus: dark/light theme with persisted preference, scroll-progress bar, scroll-spy navigation,
scroll-reveal animations, `prefers-reduced-motion` support and a mobile drawer.

## 🛠️ Tech stack

- **React 19** with hooks only — no UI or icon libraries (icons are inline SVG)
- **Vite 8** dev server and production build
- **Plain CSS** design tokens (CSS variables), dark + light themes
- **ESLint 10** with `react-hooks` and `react-refresh` rules
- **GitHub Actions** for lint/build on PRs and Pages deploy on `main`

## 🚀 Getting started

```bash
npm install       # install dependencies
npm run dev       # dev server → http://localhost:5175
npm run lint      # static analysis
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## ✏️ Editing content

Everything you would want to change lives in **`src/data/content.js`** — profile, metrics,
skills, pipeline stages, experience, projects, certifications and the terminal lines.
No component edits required.

```js
export const profile = {
  name: 'Your Name',
  roles: ['Full-Stack Web Developer', 'WordPress & Umbraco Expert'],
  email: 'you@example.com',
  // ...
};
```

Because the CMS work is front and centre, the pieces worth editing first are:

- `skillGroups` — the **CMS Platforms** group (WordPress, Umbraco, C#/.NET, WooCommerce)
- `projects` — the two `category: 'CMS'` entries (Umbraco portal, WordPress multisite commerce)
- `certifications` — the Umbraco and WordPress credentials
- `toolbelt` — the chip row under the About section

## 📦 Project structure

```
src/
├─ App.jsx               # shell: theme, scroll progress, section order
├─ index.css             # design system + all component styles
├─ data/content.js       # ← all editable site content
└─ components/
   ├─ Navbar.jsx         # scroll-spy nav + theme toggle + mobile drawer
   ├─ Hero.jsx           # typewriter roles + animated terminal
   ├─ Metrics.jsx        # results strip
   ├─ About.jsx          # focus areas (incl. WordPress & Umbraco) + principles + toolbelt
   ├─ Skills.jsx         # grouped skills (CMS / dev / ops / automation) with animated bars
   ├─ Pipeline.jsx       # interactive CI/CD walkthrough
   ├─ Experience.jsx     # timeline
   ├─ Projects.jsx       # filterable project grid
   ├─ Certifications.jsx # credentials
   ├─ Contact.jsx        # validated contact form
   ├─ ContactChannels.jsx
   ├─ Footer.jsx
   ├─ Reveal.jsx         # IntersectionObserver reveal wrapper
   ├─ SectionHeading.jsx
   └─ Icons.jsx          # inline SVG icon set
```

## 🔁 Deployment

Push to `main` and the workflow in `.github/workflows/deploy.yml` lints, builds and publishes
to GitHub Pages. Pull requests run the same lint + build gates without deploying.

`vite.config.js` sets `base: './'`, so the built assets also work from any sub-path.

## 📄 License

MIT — see [LICENSE](LICENSE).
