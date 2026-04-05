# TAYS Automation Website

The company website for Tays Engineering Ltd, trading as TAYS Automation. Built with React, TypeScript, Vite, and Tailwind CSS. Hosted on IONOS shared hosting (Apache/PHP).

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
| @icons-pack/react-simple-icons | 13.11 | Brand icons |
| @emailjs/browser | — | Installed but unused (replaced by PHP mail) |
| PHP `mail()` | — | Server-side form handling (contact + careers) |

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

> **Note:** The contact and careers forms POST to `/contact.php` and `/careers.php`. These only work on the live IONOS server where PHP is available. On local dev, form submissions will fail — this is expected.

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

## Deployment (IONOS Shared Hosting)

1. Run `npm run build`
2. Upload the **contents** of `dist/` to your domain's root folder (`public_html` or `htdocs`) via IONOS cPanel File Manager
3. The `dist/` folder includes:
   - `index.html` — SPA entry point
   - `assets/` — hashed JS, CSS, and image bundles
   - `.htaccess` — Apache rewrite rules (fixes 404 on page refresh, stops PHP files being served as SPA routes)
   - `contact.php` — handles contact form submissions
   - `careers.php` — handles job application submissions with optional CV attachment
   - `favicon.png`

---

## Project Structure

```
tays-website-v2/
├── index.html                        # Vite HTML entry point
├── vite.config.ts                    # Vite config (React plugin)
├── tailwind.config.js                # Tailwind theme (colors, fonts, animations)
├── postcss.config.js                 # PostCSS (Tailwind + Autoprefixer)
├── tsconfig.json                     # TypeScript config
├── package.json
├── public/
│   ├── .htaccess                     # Apache SPA routing + MultiViews fix
│   ├── favicon.png                   # Site favicon
│   ├── contact.php                   # Contact form mailer
│   └── careers.php                   # Job application mailer (supports CV attachment)
└── src/
    ├── main.tsx                      # React root — mounts <App /> into #root
    ├── App.tsx                       # Router setup — defines all routes
    ├── index.css                     # Tailwind directives + custom CSS utilities
    ├── img/                          # Static image assets
    ├── components/
    │   ├── Layout.tsx                # Shared wrapper: Navbar + <Outlet /> + Footer
    │   ├── Navbar.tsx                # Fixed top nav with search, scroll effect, mobile menu
    │   ├── Footer.tsx                # Footer with links, contact info, social icons
    │   └── PrivacyPolicyModal.tsx    # Modal shown when Privacy Policy link is clicked on forms
    └── pages/
        ├── Home.tsx                  # Landing page (/)
        ├── Services.tsx              # Services detail page (/services)
        ├── Projects.tsx              # Project portfolio page (/projects)
        ├── Careers.tsx               # Careers and job listings page (/careers)
        ├── Contact.tsx               # Contact form and FAQ page (/contact)
        └── PrivacyPolicy.tsx         # Full privacy policy page (/privacy-policy)
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
| `/privacy-policy` | Privacy Policy |

Navigating between pages scrolls back to the top automatically, handled in [src/components/Layout.tsx](src/components/Layout.tsx) via a `useEffect` on `pathname`.

Hash-based anchor scrolling on `/services` (e.g. `/services#scada`) is handled in [src/pages/Services.tsx](src/pages/Services.tsx) using `useLocation` and `scrollIntoView`.

---

## Forms

### Contact Form (`/contact`)

- Posts JSON to `/contact.php` via `fetch`
- PHP validates input, sends enquiry email to `tinashe@taysautomation.com`, and sends an automated acknowledgement reply to the user
- Privacy Policy link opens a modal (`PrivacyPolicyModal`) — clicking Accept ticks the consent checkbox

### Careers / Application Form (`/careers`)

- Posts `multipart/form-data` to `/careers.php` via `fetch`
- Supports CV file upload (PDF, DOC, DOCX — max 5 MB), attached to the email
- PHP validates input, sends application email to `tinashe@taysautomation.com`, and sends an automated acknowledgement reply to the applicant
- Clicking "Apply Now" on a job listing pre-fills the position dropdown and scrolls to the form

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

- Fixed to the top, `z-50`, with `backdrop-blur-md` background.
- Background darkens once the page scrolls past 50px.
- Active link highlighted in `text-primary` via `useLocation()`.
- Site-wide search with keyboard support: results filter the `searchIndex` array. Pressing `Enter` navigates to the first result; `Escape` closes the search.
- Mobile menu closes automatically on route change.

### `Footer`
[src/components/Footer.tsx](src/components/Footer.tsx)

- Columns: company description, Quick Links, Services links, Contact details.
- Bottom bar: copyright, Privacy Policy link, LinkedIn icon.
- LinkedIn uses an inline SVG (removed from Simple Icons due to trademark restrictions).

### `PrivacyPolicyModal`
[src/components/PrivacyPolicyModal.tsx](src/components/PrivacyPolicyModal.tsx)

- Overlay modal triggered by the Privacy Policy link in both forms.
- Closes on backdrop click or `Escape`. Clicking **Accept** checks the consent checkbox and closes the modal.

---

## Pages

### Home
[src/pages/Home.tsx](src/pages/Home.tsx)

Sections: hero with floating status cards → services preview (3 cards) → industries we support (with image + partner logos) → projects preview (2 cards) → contact CTA.

### Services
[src/pages/Services.tsx](src/pages/Services.tsx)

Sections: page header → Automation & Control Systems (`#automation`) → RTS & SCADA Systems (`#scada`) → Mentorship Program (`#mentorship`) → Industries We Serve → CTA.

Hash navigation (e.g. from the navbar or footer) scrolls to the correct section on load.

### Projects
[src/pages/Projects.tsx](src/pages/Projects.tsx)

Sections: page header → partner logo banner → 3 featured projects (alternating image/text layout) → stats row → CTA.

### Careers
[src/pages/Careers.tsx](src/pages/Careers.tsx)

- **Open Positions** — filterable job listings (`all` | `engineering` | `graduate` | `support`). Each card expands to show requirements, responsibilities, and an Apply Now button.
- **Apply Now form** — clicking Apply Now scrolls to the form and pre-fills the position. Submits via PHP with optional CV attachment. Consent checkbox linked to Privacy Policy modal.
- **Employee Stories** — three testimonial cards.

### Contact
[src/pages/Contact.tsx](src/pages/Contact.tsx)

Contact info sidebar + message form + FAQ section. Form submits via PHP. Consent checkbox linked to Privacy Policy modal.

### Privacy Policy
[src/pages/PrivacyPolicy.tsx](src/pages/PrivacyPolicy.tsx)

Full GDPR-compliant privacy policy covering data collection, legal basis, retention, rights, and ICO complaints process.

---

## Icons

- **[lucide-react](https://lucide.dev)** — general UI icons
- **[@icons-pack/react-simple-icons](https://simpleicons.org)** — brand icons (`SiWhatsapp`, `SiX`, `SiYoutube`). LinkedIn is not available due to trademark restrictions; an inline SVG is used instead.

---

## Adding a New Page

1. Create `src/pages/YourPage.tsx`
2. Add a route in [src/App.tsx](src/App.tsx):
   ```tsx
   <Route path="/your-page" element={<YourPage />} />
   ```
3. Optionally add the link to `navLinks` in [src/components/Navbar.tsx](src/components/Navbar.tsx) and/or the footer in [src/components/Footer.tsx](src/components/Footer.tsx)
4. Add to the `searchIndex` array in `Navbar.tsx` if it should appear in search results
