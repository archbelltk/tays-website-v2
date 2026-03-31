# TAYS Automation Website

The company website for Tays Engineering Ltd, trading as Tays Automation. Built with React, TypeScript, Vite, and Tailwind CSS.

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18.3 | UI framework |
| TypeScript | 5.7 | Type safety |
| Vite | 6.0 | Dev server and bundler |
| Tailwind CSS | 3.4 | Utility-first styling |
| React Router DOM | 6.28 | Client-side routing |
| lucide-react | 0.475 | UI icons |
| @icons-pack/react-simple-icons | 13.11 | Brand icons (X, YouTube) |

---

## Getting Started

**Install dependencies**
```bash
npm install
```

**Start the development server**
```bash
npm run dev
```
Runs at `http://localhost:5173`.

**Build for production**
```bash
npm run build
```
Output goes to `dist/`. TypeScript is type-checked before bundling.

**Preview the production build**
```bash
npm run preview
```

---

## Project Structure

```
tays-website-v2/
├── index.html                  # Vite HTML entry point
├── vite.config.ts              # Vite config (React plugin)
├── tailwind.config.js          # Tailwind theme (colors, fonts, animations)
├── postcss.config.js           # PostCSS (Tailwind + Autoprefixer)
├── tsconfig.json               # TypeScript config
├── package.json
└── src/
    ├── main.tsx                # React root — mounts <App /> into #root
    ├── App.tsx                 # Router setup — defines all routes
    ├── index.css               # Tailwind directives + custom CSS utilities
    ├── components/
    │   ├── Layout.tsx          # Shared wrapper: Navbar + <Outlet /> + Footer
    │   ├── Navbar.tsx          # Fixed top nav with scroll effect and mobile menu
    │   └── Footer.tsx          # Shared footer with links and social icons
    └── pages/
        ├── Home.tsx            # Landing page (/)
        ├── Services.tsx        # Services detail page (/services)
        ├── Projects.tsx        # Project portfolio page (/projects)
        ├── Careers.tsx         # Careers and job listings page (/careers)
        └── Contact.tsx         # Contact form and FAQ page (/contact)
```

---

## Routing

Routes are defined in [src/App.tsx](src/App.tsx) using React Router v6. All pages share the `Layout` wrapper which renders the `Navbar` and `Footer` around each page.

| Path | Page |
|---|---|
| `/` | Home |
| `/services` | Services |
| `/projects` | Projects |
| `/careers` | Careers |
| `/contact` | Contact |

Navigating between pages scrolls back to the top automatically, handled in [src/components/Layout.tsx](src/components/Layout.tsx) via a `useEffect` on `pathname`.

---

## Styling

### Tailwind Theme

Custom values are defined in [tailwind.config.js](tailwind.config.js):

- **Colours** — `primary` (`#0ea5e9`), `accent` (`#06b6d4`), `secondary` (`#0f172a`)
- **Fonts** — `font-sans` and `font-display` → Roboto (loaded from Google Fonts in `index.html`)
- **Animations** — `animate-float` (gentle vertical bob), `animate-pulse-slow` (4s pulse)

### Custom CSS Utilities

Defined in [src/index.css](src/index.css) under `@layer utilities`:

| Class | Effect |
|---|---|
| `.gradient-text` | Sky-to-cyan gradient applied as text fill |
| `.circuit-pattern` | Repeating grid overlay used as section backgrounds |
| `.glow` | Blue box-shadow glow effect |
| `.card-hover` | Lifts the card up 5px with a drop shadow on hover |

---

## Components

### `Navbar`
[src/components/Navbar.tsx](src/components/Navbar.tsx)

- Fixed to the top, `z-50`, with a `backdrop-blur-md` background.
- Background darkens (`bg-slate-950/95` + `shadow-lg`) once the page scrolls past 50px — handled with `useEffect` + `window.addEventListener('scroll', ...)`.
- Active link is highlighted in `text-primary`, determined by comparing `location.pathname` from `useLocation()`.
- Mobile menu is toggled with a `useState` boolean and closes automatically on route change.

### `Footer`
[src/components/Footer.tsx](src/components/Footer.tsx)

- Static footer with company description, Quick Links, Services links, and social icons.
- LinkedIn uses an inline SVG (the icon was removed from Simple Icons due to trademark restrictions).
- X (Twitter) uses `SiX` from `@icons-pack/react-simple-icons`.

---

## Pages

### Home
[src/pages/Home.tsx](src/pages/Home.tsx)

Sections: hero with floating status cards → services preview (3 cards) → industries we support → projects preview (2 cards) → contact CTA.

### Services
[src/pages/Services.tsx](src/pages/Services.tsx)

Sections: page header → Automation & Control Systems (`#automation`) → RTS & SCADA Systems (`#scada`) → Mentorship Program (`#mentorship`) → Industries We Serve → CTA.

The `#automation`, `#scada`, and `#mentorship` fragment IDs are used as anchor targets from links on the Home page and in the Footer.

### Projects
[src/pages/Projects.tsx](src/pages/Projects.tsx)

Sections: page header → technologies banner → 3 featured projects (alternating image/text layout) → stats row → CTA.

### Careers
[src/pages/Careers.tsx](src/pages/Careers.tsx)

Interactive sections:

- **Why Join Us** — 4 benefit cards.
- **Employee Benefits** — expandable list with imagery.
- **Open Positions** — filterable job listing with expand/collapse per job card. Filter state (`all` | `engineering` | `graduate` | `support`) is managed with `useState`. Each job's expanded state is tracked by job ID.
- **Apply Now form** — clicking "Apply Now" on a job card scrolls to the form (`useRef` + `scrollIntoView`) and pre-fills the position select via `useState`. On submit, shows a 5-second success banner.
- **Employee Stories** — three testimonial cards.

### Contact
[src/pages/Contact.tsx](src/pages/Contact.tsx)

Sections: page header → contact info sidebar + message form → map placeholder → FAQ accordion.

The form shows an inline success banner on submit (no external service wired up by default).

---

## Icons

Two icon libraries are used:

- **[lucide-react](https://lucide.dev)** — general UI icons (arrows, check marks, settings, etc.)
- **[@icons-pack/react-simple-icons](https://simpleicons.org)** — brand icons (`SiX`, `SiYoutube`). Note: LinkedIn is not available in Simple Icons due to trademark restrictions; an inline SVG is used instead.

> Brand icons in lucide-react (`Linkedin`, `Twitter`, `Youtube`) are deprecated and scheduled for removal in v1.0. All brand icons in this project use Simple Icons or inline SVGs.

---

## Adding a New Page

1. Create `src/pages/YourPage.tsx`.
2. Add a route in [src/App.tsx](src/App.tsx):
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Add the link to `navLinks` in [src/components/Navbar.tsx](src/components/Navbar.tsx):
   ```ts
   { to: '/your-page', label: 'Your Page' }
   ```
4. Add the link to the footer in [src/components/Footer.tsx](src/components/Footer.tsx).
