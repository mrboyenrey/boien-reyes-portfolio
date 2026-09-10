<div align="center">

# 👨‍💻 Boien Reyes — Portfolio

**Web Developer · WordPress &amp; Umbraco Expert · IT Operations · DevOps &amp; CI/CD**

[![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)](.github/workflows/deploy.yml)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)

### 🔗 [View it live → mrboyenrey.github.io/boien-reyes-portfolio](https://mrboyenrey.github.io/boien-reyes-portfolio/)

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

## � Contact form delivery

The contact section posts to [Web3Forms](https://web3forms.com), which relays submissions to
your inbox — this keeps the site fully static (no server, no database).

**Setup (one time, free):**

1. Go to <https://web3forms.com> and enter `mrboyenrey@gmail.com`
2. Click the confirmation link they email you
3. Copy the **Access Key** you are given
4. Paste it into `contactForm.web3formsKey` in `src/data/content.js`
5. Commit and push — the pipeline redeploys automatically

```js
export const contactForm = {
  provider: 'web3forms',
  endpoint: 'https://api.web3forms.com/submit',
  web3formsKey: 'paste-your-key-here', // ← empty = mailto fallback
  minFillSeconds: 3,
};
```

**Behaviour:**

| `web3formsKey` | What the form does |
|---|---|
| **Set** | `POST`s to Web3Forms → lands in your inbox. Reply-to is set to the sender, so you can hit Reply. |
| **Empty** | Falls back to opening the visitor's own email client (`mailto:`), which requires them to press Send. |

**Spam protection:** a hidden honeypot checkbox (`botcheck`) plus a minimum fill time
(`minFillSeconds`, default 3s). Bots that trip either are shown a success message but the
message is silently dropped — so they learn nothing.

**On failure** the form shows an inline error with the reason from Web3Forms and offers a
one-click "Send it from my email app instead" fallback, so an enquiry is never lost.

> ⚠️ Without a key, the form only opens the visitor's mail client. On a machine with no mail
> app configured (most webmail users), nothing happens at all — so set the key.

## �📦 Project structure

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

**Live:** <https://mrboyenrey.github.io/boien-reyes-portfolio/>

Push to `main` and the workflow in `.github/workflows/deploy.yml` lints, builds and publishes
to GitHub Pages. Pull requests run the same lint + build gates without deploying.

Pipeline: `checkout@v7` → `setup-node@v7` (Node 22, npm cache) → `npm ci` → `npm run lint`
→ `npm run build` → `configure-pages@v6` → `upload-pages-artifact@v5` → `deploy-pages@v5`.

`vite.config.js` sets `base: './'`, so the built assets also work from any sub-path.

## 📄 License

MIT — see [LICENSE](LICENSE).
