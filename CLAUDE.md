# CLAUDE.md — Nikshi Foundation for Humanity Website

Full developer reference for continuing work in a new Claude Code session.
Last updated: 2026-05-23 (session 5).

---

## Project Overview

A 6-page static website for **Nikshi Foundation for Humanity**, a Bangalore-based NGO founded by **Shilpa Singh**.

- **GitHub repo:** `https://github.com/parisa-singh/nikshi-foundation`
- **Live site:** `https://parisa-singh.github.io/nikshi-foundation/`
- **Future domain:** `nikshifoundation.org` (DNS not yet pointed — add CNAME file + registrar DNS when ready)
- **Local path:** `C:\Users\paris\OneDrive\Documents\claude projects\nikshi\`

---

## Tech Stack

| Tool | Version / Detail |
|------|-----------------|
| HTML5 / CSS3 / Vanilla JS | No build step, GitHub Pages compatible |
| Tailwind CSS | CDN: `https://cdn.tailwindcss.com` |
| Google Fonts | Poppins (headings) + Inter (body) — loaded via `<link>` in each page |
| Formspree | Contact form — **ACTIVE**, ID `xwvzbjyj` |
| Razorpay JS SDK | Donate page — placeholder `YOUR_RAZORPAY_KEY_ID` still needs replacing |
| Lightbox | Not yet added — gallery images open in new tab on click |

---

## File Structure

```
nikshi/
├── CLAUDE.md              ← this file
├── index.html             ← Home
├── about.html             ← About Us
├── programs.html          ← Programs (6 programs)
├── gallery.html           ← Photo gallery with filters
├── donate.html            ← Donation page
├── contact.html           ← Contact form + map
├── css/
│   └── style.css          ← All custom CSS (Tailwind overrides + components)
├── js/
│   └── main.js            ← Nav toggle, scroll animations, counter animation, slideshows
├── images/
│   ├── logo.jpeg                    ← Site logo (nav + favicon)
│   ├── founder.JPEG                 ← Shilpa Singh photo (about.html + index.html quote avatar)
│   ├── Certificate of Appreciation .jpeg  ← Shown in recognition section on index.html
│   ├── Posters/
│   │   ├── CSR Poster .jpeg
│   │   ├── Project Uplift Poster .jpeg
│   │   ├── Project Gyaan Poster .jpeg
│   │   └── NTTS Poster .jpeg
│   ├── Gerizim Trust/     ← 7 .jpeg files (filenames have spaces + parentheses)
│   ├── Hunger Food Distribution/  ← 15 images: 1.jpg–15.jpg
│   ├── NTTS/              ← 4 images: 1.jpg, 2.jpg, 3.jpg, poster 4.jpg
│   ├── Old Age Homes/     ← 8 images: 1.jpg–8.jpg
│   ├── Project Gyaan/     ← 11 images (1.jpg–11.jpg) + poster.jpg + end of the year/ (1–5.jpg)
│   ├── Trans Community/   ← 11 .jpg (1–11) + poster.jpg + 5 .jpeg (15–19)
│   └── CSR/               ← 5 images: 1.jpeg–5.jpeg + Approval Letter for form CSR1.pdf
└── .nojekyll              ← Required for GitHub Pages
```

**Important — filenames with spaces/special chars must be URL-encoded in HTML `src` attributes:**

| Actual filename / folder | URL-encoded form |
|--------------------------|-----------------|
| `Hunger Food Distribution/` | `Hunger%20Food%20Distribution/` |
| `Project Gyaan/` | `Project%20Gyaan/` |
| `Trans Community/` | `Trans%20Community/` |
| `Old Age Homes/` | `Old%20Age%20Homes/` |
| `end of the year/` | `end%20of%20the%20year/` |
| `poster 4.jpg` | `poster%204.jpg` |
| `Posters/CSR Poster .jpeg` | `Posters/CSR%20Poster%20.jpeg` |
| `Posters/Project Uplift Poster .jpeg` | `Posters/Project%20Uplift%20Poster%20.jpeg` |
| `Posters/Project Gyaan Poster .jpeg` | `Posters/Project%20Gyaan%20Poster%20.jpeg` |
| `Posters/NTTS Poster .jpeg` | `Posters/NTTS%20Poster%20.jpeg` |
| `Certificate of Appreciation .jpeg` | `Certificate%20of%20Appreciation%20.jpeg` |
| Gerizim Trust files with `( )` | `%28` for `(`, `%29` for `)` |

---

## Brand Colors (CSS variables in `css/style.css`)

```css
--primary:      #F5A623   /* golden orange — CTAs, highlights */
--primary-dark: #D98A0A
--secondary:    #5DB04A   /* leaf green — accents, trust signals */
--dark:         #162348   /* deep navy — logo background, headers, footer */
--dark-alt:     #162348   /* same as --dark — gradients use this for consistency */
--bg:           #F4F6F8   /* off-white — section backgrounds */
--gray:         #6B7280   /* body text */
```

**Color rule:** All blues/navies must use `var(--dark)` (#162348). Do NOT introduce `#1B3068`, `#0369A1`, or any other non-logo blue. The only brand colors are navy, orange, and green.

---

## Pages — Status & Details

### index.html — Home
**Status: Complete**

Sections (top to bottom):
1. **Sticky nav** — hamburger on mobile, full name "Nikshi Foundation for Humanity" at 0.9rem
2. **Hero** — centered text, location pin icon + "Bangalore, India" tagline. "Equality." white, "Empowerment." orange, "Fight Against Hunger." green (`#5DB04A`) with `white-space:nowrap`. Font size `clamp(2rem,5.5vw,4rem)`.
3. **Founder Quote** — Shilpa Singh blockquote with avatar photo (`images/founder.JPEG`) — **2nd section, immediately after hero**
4. **Impact counter strip** — animated counters (meals, families, children, trans lives), JS in `main.js`
5. **Program cards** — 5 cards in a **flexbox 3-per-row centered layout** (`id="programs-cards"`). Each card: `flex:0 0 calc(33.333% - 1.34rem)`. Image container: `aspect-ratio:3/4; object-fit:contain; background:var(--bg)` — shows full poster. Responsive: 2-col at ≤820px, 1-col at ≤500px. Images: `Posters/Project%20Gyaan%20Poster%20.jpeg`, `Posters/NTTS%20Poster%20.jpeg`, `Hunger%20Food%20Distribution/1.jpg`, `Posters/Project%20Uplift%20Poster%20.jpeg`, `Posters/CSR%20Poster%20.jpeg`
6. **Certificate of Appreciation** — 2-column section (text + certificate image). Image: `images/Certificate%20of%20Appreciation%20.jpeg`
7. **Photos from the Field** — 13-slide featured slideshow on dark `#0f172a` background, with `data-caption` captions per slide
8. **How Your Donation Helps** — rupee impact rows + `images/Project%20Gyaan/11.jpg` photo
9. **CTA banner** — orange background, volunteer/donate CTAs
10. **Follow Our Journey** — Facebook + Instagram CTA buttons. No Facebook plugin embed.
11. **Footer** — 4 columns: logo+social icons | Quick Links | Our Programs | Support Us (bank details)

**Key past fixes on this page:**
- Hero text was left-aligned — now centered
- Hero "Fight Against Hunger." green `#5DB04A` + `white-space:nowrap` to prevent 4-line wrapping
- Project Showcase section (4 poster cards) — **removed entirely** (session 5)
- Program cards changed from `repeat(auto-fit,minmax(260px,1fr))` grid to flexbox 3-per-row centered
- Program card images changed from `height:180px; object-fit:cover` to `aspect-ratio:3/4; object-fit:contain` to show full posters
- Facebook plugin embed replaced with clean social CTA buttons
- fb-float Facebook bubble removed
- Scroll indicator removed from hero
- Founder Quote moved to 2nd section

### about.html — About Us
**Status: Complete**

Sections:
1. Nav — full name in logo, Facebook + Instagram icon-only links
2. **Mission / Vision / Values** cards — Mission text updated to include all beneficiary groups
3. Founder section — `images/founder.JPEG`; structured layout with intro, 6 award badges, LinkedIn/Facebook personal links, 3 pillar cards (Social Activist / Tech Leader & Counselling Psychologist / Model, Biker & Marathoner)
4. Timeline of milestones
5. Trust signals strip (dark background) — 5 items including **Govt. CSR Registered (No. CSR00069983 · MCA, India)**
6. Footer — 4-column canonical footer (logo+social | Quick Links | Our Programs | Support Us)

### programs.html — Programs
**Status: Complete**

Six program sections — each now shows a **static poster image** (no slideshow) + a "View Photos in Gallery →" button linking to `gallery.html?filter=X`. Nav shows full name.

| Program | Accent Color | Static Image | Gallery Link |
|---------|-------------|-------------|-------------|
| Transgender Empowerment | `#E8610A` orange | `Posters/Project Uplift Poster .jpeg` | `?filter=trans` |
| Hunger Relief | `#0D6E6E` teal | `Hunger Food Distribution/1.jpg` | `?filter=hunger` |
| Project Gyaan (Education) | `var(--dark)` navy | `Posters/Project Gyaan Poster .jpeg` | `?filter=gyaan` |
| Community Outreach — Old Age Homes | `#7C3AED` purple | `Old Age Homes/1.jpg` | `?filter=oldage` |
| Nikshi Tech Talk Series (NTTS) | `#0D6E6E` teal | `Posters/NTTS Poster .jpeg` | `?filter=techtalk` |
| CSR Initiative | `var(--dark)` navy | `Posters/CSR Poster .jpeg` | `?filter=csr` |

**Static image structure per program:**
```html
<div style="border-radius:20px; overflow:hidden; aspect-ratio:4/5; box-shadow:...">
  <img src="images/Posters/..." style="width:100%;height:100%;object-fit:cover;" loading="lazy" />
</div>
<a href="gallery.html?filter=gyaan" class="btn btn-outline-dark">View Photos in Gallery →</a>
```

**CSR Initiative details:**
- `id="csr"` — anchor used in footer and index.html card link
- Reg. No. **CSR00069983**, Ministry of Corporate Affairs, Government of India
- Approved: **26 March 2024**, PAN: **AAHCN6111H**
- Accent color: `var(--dark)` (#162348) — changed from `#0369A1` to match logo
- Buttons: "Partner With Us" → contact.html, "Support This Initiative" → donate.html
- Images are in `images/CSR/` — filenames are `1.jpeg` through `5.jpeg` (no spaces, no URL-encoding needed)

Intro text says "Six ongoing initiatives" — update if programs change.
Also has a "Past Drives" section at the bottom (COVID ration drive, Gerizim Trust).
Footer "Our Programs" column links to all 6 programs including `#csr`.

### gallery.html — Gallery
**Status: Complete**

**Filter bar** is organized into three rows inside `#filter-bar`:
1. "All Photos" button (centered)
2. **Active Projects** label (green `var(--secondary)`) + 6 buttons with `data-group="active"` — hover turns green
3. **Past Drives** label (orange `var(--primary)`) + 1 button with `data-group="past"` — hover turns orange

Hover CSS is in gallery.html's `<style>` block:
```css
.filter-btn[data-group="active"]:hover { background: var(--secondary) !important; ... }
.filter-btn[data-group="past"]:hover   { background: var(--primary) !important; ... }
```

**Gallery deep-link:** Programs page links to `gallery.html?filter=X`. On load, JS reads `URLSearchParams` and clicks the matching `.filter-btn` — no hash scroll conflict.

**Section header badges removed:** No timestamps or `● Active` / `○ 2024` badges on any section header.

| Category | `data-filter` | `data-group` | Count | Source |
|----------|--------------|-------------|-------|--------|
| Hunger Relief | `hunger` | `active` | 15 | `Hunger Food Distribution/` 1–15.jpg |
| Project Gyaan | `gyaan` | `active` | 18 | `Posters/Project Gyaan Poster .jpeg` (1st) + `Project Gyaan/` 1–11 + poster + `end of the year/` 1–5 |
| Trans Community | `trans` | `active` | 18 | `Posters/Project Uplift Poster .jpeg` (1st) + `Trans Community/` 1–11 + poster + 15–19.jpeg |
| Old Age Homes | `oldage` | `active` | 8 | `Old Age Homes/` 1–8.jpg |
| Tech Talk Series | `techtalk` | `active` | 5 | `Posters/NTTS Poster .jpeg` (1st) + `NTTS/` 1.jpg, 2.jpg, 3.jpg, `poster 4.jpg` |
| CSR Initiative | `csr` | `active` | 6 | `Posters/CSR Poster .jpeg` (1st) + `CSR/` 1–5.jpeg |
| Gerizim Trust | `gerizim` | `past` | 7 | `Gerizim Trust/` (spaces + parentheses — URL-encoded) |

**Filter JS uses:** `document.querySelectorAll('#gallery-grid [data-filter]')` — targets both image items AND category section headers.

**To add more photos:** Add `<img>` with correct `data-filter` inside `#gallery-grid`. Category headers also carry `data-filter`.

### donate.html — Donate
**Status: Complete (no Razorpay)**

- Razorpay removed entirely — only UPI and bank transfer options.
- UPI ID: `nikshifoundation@icici` (copy button included). **Drop `images/upi-qr.png`** to show QR code.
- Bank table: NIKSHI FOUNDATION FOR HUMANITY | 141705003411 | IFSC ICIC0001417 | **SWIFT ICICINBBXXX** | Marathalli
- WhatsApp note: "After completing your transfer, please WhatsApp us the receipt at +91 97425 62006 — we'll issue an official donation acknowledgement letter for your tax benefits."
- Footer: 4-column canonical footer (logo+social | Quick Links | Our Programs | Support Us)

### contact.html — Contact
**Status: Complete and live**

- Formspree form **ACTIVE** — `https://formspree.io/f/xwvzbjyj`
- Info cards: Address, Phone/WhatsApp, UPI/Bank, Founder
- Social buttons section: Facebook, Instagram, WhatsApp, Email Us (with `flex-wrap:wrap`)
- Google Maps embed — Marathalli, Bangalore
- Footer: 4-column canonical footer (logo+social | Quick Links | Our Programs | Support Us)

---

## Footer — Canonical Structure (all 6 pages)

All pages share an identical 4-column footer:

| Column | Content |
|--------|---------|
| 1 — Brand | Logo image + "Nikshi Foundation / For Humanity" + tagline + 4 social icons (FB, WhatsApp, IG, Email) |
| 2 — Quick Links | Home, About Us, Our Programs, Gallery, Donate, Contact |
| 3 — Our Programs | Project Gyaan, Tech Talk Series, Fighting for Hunger, Transgender Empowerment, CSR Initiative, Past Drives ↗ |
| 4 — Support Us | Bank transfer details (ICICI Bank, A/C, IFSC, UPI) |

Footer bottom strip: `© 2026 ... | Bangalore, Karnataka, India | +91 97425 62006`

---

## Navigation — All Pages

**Desktop nav** (in order):
Home | About Us | Programs | Gallery | Contact | [FB icon] | [IG icon] | **Donate Now**

Facebook and Instagram are **icon-only** in the desktop nav — no text labels. SVG icons with `aria-label` for accessibility.

**Mobile menu** (hamburger):
Home | About Us | Programs | Gallery | Contact | Instagram | Email Us | **Donate Now**

**Navbar scroll behaviour:**
- Default (top of page): transparent background, white text
- Scrolled (`scrollY > 60`): white background, nav-links → `var(--dark)` navy, logo text → `var(--dark)` navy (`!important` overrides inline `color:#fff`)
- CSS in `style.css`: `#navbar.scrolled .nav-logo-text { color: var(--dark) !important; }`

**Logo text:** "Nikshi Foundation for Humanity" at `font-size: 0.9rem`. On screens ≤480px, CSS overrides to `0.78rem`.

**Social links:**
- Facebook: `https://www.facebook.com/share/18pNZXoWaK/?mibextid=wwXIfr`
- Instagram: `https://www.instagram.com/nikshi_foundation_for_humanity`
- WhatsApp: `https://wa.me/919742562006`
- Email: `mailto:Nikshifoundation@gmail.com`

---

## Slideshow Component

Implemented in `css/style.css` and `js/main.js` (`/* ---------- Slideshows ---------- */` block).

**HTML structure:**
```html
<div class="slideshow" style="height:420px; border-radius:16px; overflow:hidden;">
  <div class="slideshow-track">
    <div class="slide" data-caption="Caption text here">
      <img src="images/Folder%20Name/1.jpg" alt="Description" loading="lazy" />
    </div>
    <!-- ... more slides, one per image -->
  </div>
  <button class="slideshow-btn slideshow-prev" aria-label="Previous">&#8249;</button>
  <button class="slideshow-btn slideshow-next" aria-label="Next">&#8250;</button>
  <div class="slideshow-dots">
    <button class="dot active"></button>
    <button class="dot"></button>
    <!-- exactly one .dot per slide -->
  </div>
  <div class="slide-caption"><div class="slide-caption-text"></div></div>
</div>
```

**Key rules:**
- Dot count must exactly match slide count or dots go out of sync
- Auto-advances every 3800ms, pauses on hover, supports touch swipe
- Caption comes from `data-caption` on each `.slide`
- On mobile (≤640px), CSS caps slideshow at `max-height: 260px !important` — this prevents the 420px fixed-height slideshows on programs.html from overwhelming the screen

**Homepage field photos slideshow** uses `aspect-ratio:16/7` instead of fixed height — this auto-scales and is under 260px on mobile anyway, so the cap doesn't hurt it.

---

## Responsive Design

- Mobile breakpoint for hamburger nav: `max-width: 900px` (in each page's `<style>` block at bottom)
- Global responsive CSS is in `css/style.css`

| Breakpoint | Rules applied |
|-----------|--------------|
| ≤768px | Section padding reduced, page-hero padding reduced |
| ≤640px | Slideshows capped at 260px; 2-col program block grids stack to 1-col; program-block padding reduced |
| ≤480px | Button padding reduced; nav logo text forced to 0.78rem |

**Gallery grid reflow:** 4-col → 3-col (≤1024px) → 2-col (≤640px) → 1-col (≤380px)

**Program cards (index.html)** use flexbox `justify-content:center` with `flex:0 0 calc(33.333% - 1.34rem)` per card — 3 per row, 5th card centers in its own row. Responsive via `#programs-cards` ID: 2-col at ≤820px, 1-col at ≤500px.

**2-col grid stacking** is handled in `style.css` via attribute selectors targeting inline styles:
```css
[style*="grid-template-columns:1.5fr 1fr"],
[style*="grid-template-columns:1fr 1.5fr"] { grid-template-columns: 1fr !important; }
```

---

## Founder & Organisation Details

| Field | Value |
|-------|-------|
| Founder | Shilpa Singh |
| Title | Founder & Director |
| Phone | +91 9742562006 |
| Email | Nikshifoundation@gmail.com |
| Founder photo | `images/founder.JPEG` ✅ uploaded |
| NGO Name | NIKSHI FOUNDATION FOR HUMANITY |
| Bank Account | 141705003411 |
| IFSC | ICIC0001417 |
| Bank | ICICI Bank, Marathalli Branch |
| UPI ID | nikshifoundation@icici |
| Address | Bangalore, Karnataka, India |

---

## Foundation Mission (for copy consistency)

When writing or updating mission-related text, use this as the canonical reference:

> Nikshi Foundation for Humanity exists to spread smiles, education, and empowerment to every overlooked soul — transgender communities, underprivileged women, children with Down syndrome, the visually impaired, food-insecure families, and every person whose talents and heart deserve to be seen, loved, and supported.

---

## Third-Party Integrations

### Formspree — ACTIVE
- Form ID: `xwvzbjyj`
- Endpoint: `https://formspree.io/f/xwvzbjyj`
- To change the receiving email: log in at formspree.io → form settings (no code change needed)

### Razorpay — NOT YET ACTIVE
- In `donate.html`, replace `YOUR_RAZORPAY_KEY_ID` in:
  ```js
  const RAZORPAY_KEY = 'YOUR_RAZORPAY_KEY_ID';
  ```
- Get key from Razorpay Dashboard → Settings → API Keys
- Use `rzp_test_` key first, then switch to `rzp_live_` for production

### UPI QR Code — NOT YET ADDED
- Generate QR for `nikshifoundation@icici`
- Save as `images/upi-qr.png`
- The `<img src="images/upi-qr.png">` in `donate.html` will show it automatically

### Custom Domain — NOT YET SET UP
1. Create file `CNAME` in repo root containing: `nikshifoundation.org`
2. Add DNS A records at registrar: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
3. GitHub repo Settings → Pages → Custom domain → `nikshifoundation.org` → Save → Enforce HTTPS

---

## GitHub / Deployment Workflow

```bash
git add <specific files>
git commit -m "feat/fix/content/style/images: clear description"
git push origin main
# GitHub Pages auto-deploys within ~1 minute
```

**Branch:** `main` — GitHub Pages serves from root of main branch.

**Commit message prefixes used in this project:**
- `feat:` — new section, feature, or integration
- `fix:` — bug fix or broken layout
- `content:` — text/copy changes only
- `style:` — CSS-only visual changes
- `images:` — adding/removing/renaming image assets
- `docs:` — CLAUDE.md or README updates

---

## Known Issues / Future TODOs

- [ ] **Lightbox on gallery** — images currently open in new tab; a proper lightbox (GLightbox, no jQuery) would be better UX
- [x] **Razorpay removed** — donate.html now shows only UPI and bank transfer; no Razorpay integration
- [ ] **UPI QR code** — `donate.html` shows placeholder box; add `images/upi-qr.png`
- [ ] **Custom domain CNAME** — site is live at GitHub Pages URL only; set up when ready to go live at nikshifoundation.org
- [ ] **80G / tax exemption** — section in `donate.html` not yet added; add once certificate is obtained
- [ ] **NGO registration number** — not yet displayed; add to `about.html` trust signals once full registration cert is available
- [ ] **Hero background image** — `images/hero.jpg` optional; currently using CSS gradient fallback
- [x] **Founder photo** — `images/founder.JPEG` uploaded, used in about.html and index.html quote avatar
- [x] **Formspree contact form** — live with ID `xwvzbjyj`
- [x] **Full name in nav** — all 6 pages show "Nikshi Foundation for Humanity"
- [x] **Certificate of Appreciation** — displayed on index.html in Recognition section
- [x] **Project Showcase removed** — 4-poster section deleted from index.html (session 5)
- [x] **Mission text** — updated across index.html and about.html to include all beneficiary groups
- [x] **Mobile responsive** — program cards responsive, 2-col grids stack on mobile
- [x] **Navbar icon-only social links** — Facebook + Instagram in desktop nav show SVG icon only, no text labels (all 6 pages)
- [x] **Navbar scroll color fix** — logo text turns navy `var(--dark)` on white background (not invisible)
- [x] **Brand color consistency** — all blues use `var(--dark)` #162348; `--dark-alt` unified; `#0369A1` removed
- [x] **Hero green line** — "Fight Against Hunger." colored `#5DB04A` with `white-space:nowrap` (3 lines, no wrap)
- [x] **Gallery timestamps removed** — no `● Active` or `○ 2024` badges on section headers
- [x] **Gallery filter bar reorganized** — two labeled rows: Active Projects (hover→green) + Past Drives (hover→orange)
- [x] **Program cards 3-per-row** — flexbox centered layout, full poster visible via `aspect-ratio:3/4; object-fit:contain`
- [x] **Footer standardized** — all 6 pages share identical 4-column footer
- [x] **Programs page slideshows replaced** — each program shows static poster + "View Photos in Gallery" button
- [x] **Gallery deep-link** — `?filter=X` query param activates filter without scroll conflict
- [x] **CSR Initiative** — full program section, gallery filter, trust signal, footer links on all pages
