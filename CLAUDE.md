# CLAUDE.md — Nikshi Foundation for Humanity Website

Full developer reference for continuing work in a new Claude Code session.
Last updated: 2026-05-26 (session 7 — part 2).

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
│   │   ├── NTTS Poster .jpeg
│   │   └── Fight for Hunger Poster .jpeg
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
| `Posters/Fight for Hunger Poster .jpeg` | `Posters/Fight%20for%20Hunger%20Poster%20.jpeg` |
| `Certificate of Appreciation .jpeg` | `Certificate%20of%20Appreciation%20.jpeg` |
| Gerizim Trust files with `( )` | `%28` for `(`, `%29` for `)` |

---

## Brand Colors (CSS variables in `css/style.css`)

```css
--primary:      #F5A623   /* golden orange — CTAs, highlights */
--primary-dark: #D98A0A
--secondary:    #5DB04A   /* leaf green — accents, trust signals */
--dark:         #0F1E50   /* deep navy — exact logo background color */
--dark-alt:     #0F1E50   /* same as --dark */
--bg:           #F4F6F8   /* off-white — section backgrounds */
--gray:         #6B7280   /* body text */
```

**Color rule:** All blues/navies must use `var(--dark)` (`#0F1E50`). Do NOT introduce `#162348`, `#1B3068`, `#0369A1`, or any other non-logo blue. The only brand colors are navy, orange, and green.

**Logo image background:** All navbar `<img src="images/logo.jpeg">` elements have `background:var(--dark)` set inline so the rounded corners match the logo's embedded navy exactly.

---

## Pages — Status & Details

### index.html — Home
**Status: Complete**

Sections (top to bottom):
1. **Sticky nav** — hamburger on mobile, full name "Nikshi Foundation for Humanity" at 0.9rem
2. **Hero** — centered text, location pin icon + "Bangalore, India" tagline. "Equality." white, "Empowerment." orange, "Fight Against Hunger." green (`#5DB04A`) with `white-space:nowrap`. Font size `clamp(2rem,5.5vw,4rem)`.
3. **Founder Quote** — Shilpa Singh blockquote with avatar photo (`images/founder.JPEG`) — 2nd section, immediately after hero
4. **Impact counter strip** — animated counters (meals, families, children, trans lives), JS in `main.js`
5. **Program cards** — 5 cards in a **flexbox 3-per-row centered layout** (`id="programs-cards"`). Each card: `flex:0 0 calc(33.333% - 1.34rem)`. Image container: `height:260px; background:var(--dark); object-fit:contain` — fixed height with dark navy background so all orientations (portrait/landscape posters) display uniformly. Responsive: 2-col at ≤820px, 1-col at ≤500px. Images: `Posters/Project%20Gyaan%20Poster%20.jpeg`, `Posters/NTTS%20Poster%20.jpeg`, `Posters/Fight%20for%20Hunger%20Poster%20.jpeg`, `Posters/Project%20Uplift%20Poster%20.jpeg`, `Posters/CSR%20Poster%20.jpeg`
6. **Certificate of Appreciation** — 2-column section (text + certificate image). Image: `images/Certificate%20of%20Appreciation%20.jpeg`
7. **Photos from the Field** — 13-slide featured slideshow on dark `#0f172a` background, with `data-caption` captions per slide
8. **How Your Donation Helps** — rupee impact rows + `images/Project%20Gyaan/11.jpg` photo
9. **CTA banner** — orange background, volunteer/donate CTAs
10. **Follow Our Journey** — Facebook + Instagram CTA buttons. No Facebook plugin embed.
11. **Footer** — 4 columns: logo+social icons | Quick Links | Our Programs | Support Us (bank details)

### about.html — About Us
**Status: Complete**

Sections:
1. Nav — full name in logo, Facebook + Instagram icon-only links
2. **Mission / Vision / Values** cards — Mission text updated to include all beneficiary groups
3. Founder section — `images/founder.JPEG`; structured layout with intro, 6 award badges, LinkedIn/Facebook personal links, 3 pillar cards (Social Activist / Tech Leader & Counselling Psychologist / Model, Biker & Marathoner)
4. Timeline of milestones
5. Trust signals strip (dark background) — 5 items including **Govt. CSR Registered (No. CSR00069983 · MCA, India)**
6. Footer — 4-column canonical footer

### programs.html — Programs
**Status: Complete**

Six program sections — each shows a **static poster image** (no slideshow) + a "View Photos in Gallery →" button linking to `gallery.html?filter=X`. Nav shows full name.

| Program | Accent Color | Static Image | Gallery Link |
|---------|-------------|-------------|-------------|
| Project Gyaan (Education) | `var(--secondary)` green | `Posters/Project Gyaan Poster .jpeg` | `?filter=gyaan` |
| Nikshi Tech Talk Series (NTTS) | `var(--dark)` navy | `Posters/NTTS Poster .jpeg` | `?filter=techtalk` |
| Hunger Relief | `var(--primary)` orange | `Posters/Fight for Hunger Poster .jpeg` | `?filter=hunger` |
| Transgender Empowerment | `var(--primary)` orange | `Posters/Project Uplift Poster .jpeg` | `?filter=trans` |
| Community Outreach — Old Age Homes | `var(--primary)` orange | `Old Age Homes/1.jpg` | `?filter=oldage` |
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
- Buttons: "Partner With Us" → contact.html, "Support This Initiative" → donate.html

Intro text says "Six ongoing initiatives" — update if programs change.
Also has a "Past Drives" section at the bottom (COVID ration drive, Gerizim Trust).

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

**Section header divider colors:** All section headers use `border-bottom:2px solid var(--primary)` — no off-brand purples or blues.

| Category | `data-filter` | `data-group` | Count | Source |
|----------|--------------|-------------|-------|--------|
| Hunger Relief | `hunger` | `active` | 16 | `Posters/Fight for Hunger Poster .jpeg` (1st) + `Hunger Food Distribution/` 1–15.jpg |
| Project Gyaan | `gyaan` | `active` | 18 | `Posters/Project Gyaan Poster .jpeg` (1st) + `Project Gyaan/` 1–11 + poster + `end of the year/` 1–5 |
| Trans Community | `trans` | `active` | 18 | `Posters/Project Uplift Poster .jpeg` (1st) + `Trans Community/` 1–11 + poster + 15–19.jpeg |
| Old Age Homes | `oldage` | `active` | 8 | `Old Age Homes/` 1–8.jpg |
| Tech Talk Series | `techtalk` | `active` | 5 | `Posters/NTTS Poster .jpeg` (1st) + `NTTS/` 1.jpg, 2.jpg, 3.jpg, `poster 4.jpg` |
| CSR Initiative | `csr` | `active` | 6 | `Posters/CSR Poster .jpeg` (1st) + `CSR/` 1–5.jpeg |
| Gerizim Trust | `gerizim` | `past` | 7 | `Gerizim Trust/` (spaces + parentheses — URL-encoded) |

**Filter JS uses:** `document.querySelectorAll('#gallery-grid [data-filter]')` — targets both image items AND category section headers.

**To add more photos:** Add `<img>` with correct `data-filter` inside `#gallery-grid`. Category headers also carry `data-filter`.

### donate.html — Donate
**Status: Complete**

No Razorpay. Layout (top to bottom):
1. **Impact mini stats strip** — dark navy background, 4 stats (₹400/₹1k/₹2.5k/₹5k)
2. **Centered section header** — "Ways to Donate" above the payment cards
3. **Equal 2-column payment cards** (`id="donate-cards"`, `align-items:stretch`):
   - **UPI card** (left): QR placeholder + UPI ID with copy button + numbered 3-step instructions + green confirmation note
   - **Bank transfer card** (right): 6-row table + WhatsApp receipt note
4. **Trust strip** — 3-column horizontal grid below both cards (Registered NGO / 100% Transparent / Direct Contact)

Key details:
- UPI ID: `nikshifoundation@icici` (copy button included). **Drop `images/upi-qr.png`** to show QR code.
- Bank table: NIKSHI FOUNDATION FOR HUMANITY | 141705003411 | IFSC ICIC0001417 | **SWIFT ICICINBBXXX** | ICICI Bank | Marathalli, Bangalore
- WhatsApp note: "After completing your transfer, please WhatsApp us the receipt at +91 97425 62006 — we'll issue an official donation acknowledgement letter for your tax benefits."
- Responsive: `#donate-cards` stacks to 1-col at ≤768px; trust strip stacks to 1-col at ≤768px

### contact.html — Contact
**Status: Complete and live**

- Formspree form **ACTIVE** — `https://formspree.io/f/xwvzbjyj`
- Form has **no `novalidate`** — browser native validation runs on required fields before JS fires
- Form JS: async fetch to Formspree, shows `#form-success` (green) on `res.ok`, shows `#form-error` (red) on failure — no page reload
- `#form-success` is `display:none` by default and only shown by JS on confirmed success
- Info cards: Address, Phone/WhatsApp, UPI/Bank, Founder
- **Follow Us** — 3 buttons only: Facebook, Instagram, Email Us (`flex-wrap:nowrap`, `white-space:nowrap`) — WhatsApp is shown in the info card above and was removed here to avoid duplication
- Google Maps embed — Marathalli, Bangalore
- Footer: 4-column canonical footer

---

## Footer — Canonical Structure (all 6 pages)

All pages share an identical 4-column footer:

| Column | Content |
|--------|---------|
| 1 — Brand | Logo image + "Nikshi Foundation / For Humanity" + tagline + 4 social icons (FB, WhatsApp, IG, Email) |
| 2 — Quick Links | Home, About Us, Our Programs, Gallery, Donate, Contact |
| 3 — Our Programs | Project Gyaan, Tech Talk Series, Fight Against Hunger, Transgender Empowerment, CSR Initiative, Past Drives ↗ |
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

**Logo image:** All 6 pages — `<img src="images/logo.jpeg" style="... background:var(--dark);">` so rounded corners always match the embedded navy.

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
- On mobile (≤640px), CSS caps slideshow at `max-height: 260px !important`

**Homepage field photos slideshow** uses `aspect-ratio:16/7` instead of fixed height.

---

## Responsive Design

- Mobile breakpoint for hamburger nav: `max-width: 900px` (in each page's `<style>` block at bottom)
- Global responsive CSS is in `css/style.css`
- Global `img { max-width: 100%; height: auto; }` prevents horizontal overflow on all images

| Breakpoint | Rules applied |
|-----------|--------------|
| ≤768px | All inline `grid-template-columns:1fr 1fr / 1fr 1.4fr / 1.5fr 1fr` grids stack to 1-col via catch-all attribute selectors; `repeat(3,1fr)` trust strips stack to 1-col; program block `aspect-ratio:4/5` images switch to `4/3 + max-height:280px` + `object-fit:contain`; contact Follow Us buttons wrap; contact form field rows stack |
| ≤640px | Slideshows capped at 260px; program blocks padding reduced; founder photo container capped at 220×260px; ration kit inner grid stacks |
| ≤480px | Button padding reduced; nav logo text forced to 0.78rem; auto-fit counters forced to 2-col |

**Key mobile rules:**
- Attribute-selector approach in `style.css` catches all inline `grid-template-columns` variations
- Per-page `<style>` blocks add specifics (ID-based rules for `#donate-cards`, `#programs-cards`)
- `about.html` founder photo changed from fixed `width:280px; height:320px` → `max-width:280px; width:100%; aspect-ratio:7/8` (responsive)
- `contact.html` Follow Us buttons changed from `flex-wrap:nowrap` → `flex-wrap:wrap` in HTML directly
- `programs.html` program block images switch to `object-fit:contain` on mobile so poster content is never cropped/zoomed

**Gallery grid reflow:** 4-col → 3-col (≤1024px) → 2-col (≤640px) → 1-col (≤380px)

**Program cards (index.html)** use flexbox `justify-content:center` with `flex:0 0 calc(33.333% - 1.34rem)` per card — 3 per row, 5th card centers in its own row. Responsive via `#programs-cards` ID: 2-col at ≤820px, 1-col at ≤500px.

**Donate cards** use `id="donate-cards"` with `grid-template-columns:1fr 1fr` — stacks to 1-col via `#donate-cards { grid-template-columns:1fr !important; }` at ≤768px.

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
| SWIFT / BIC | ICICINBBXXX |
| Bank | ICICI Bank, Marathalli Branch |
| UPI ID | nikshifoundation@icici |
| Address | Bangalore, Karnataka, India |

---

## Foundation Mission (for copy consistency)

> Nikshi Foundation for Humanity exists to spread smiles, education, and empowerment to every overlooked soul — transgender communities, underprivileged women, children with Down syndrome, the visually impaired, food-insecure families, and every person whose talents and heart deserve to be seen, loved, and supported.

---

## Third-Party Integrations

### Formspree — ACTIVE
- Form ID: `xwvzbjyj`
- Endpoint: `https://formspree.io/f/xwvzbjyj`
- To change the receiving email: log in at formspree.io → form settings (no code change needed)

### UPI QR Code — NOT YET ADDED
- Generate QR for `nikshifoundation@icici`
- Save as `images/upi-qr.png`
- The QR placeholder in `donate.html` will automatically show it once the file exists

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

**Commit message prefixes:**
- `feat:` — new section, feature, or integration
- `fix:` — bug fix or broken layout
- `content:` — text/copy changes only
- `style:` — CSS-only visual changes
- `images:` — adding/removing/renaming image assets
- `docs:` — CLAUDE.md or README updates

---

## Known Issues / Future TODOs

- [ ] **Lightbox on gallery** — images currently open in new tab; a proper lightbox (GLightbox, no jQuery) would be better UX
- [ ] **UPI QR code** — `donate.html` shows placeholder; add `images/upi-qr.png`
- [ ] **Custom domain CNAME** — site live at GitHub Pages URL only; set up when ready for nikshifoundation.org
- [ ] **80G / tax exemption** — add to `donate.html` once certificate is obtained
- [ ] **NGO registration number** — add to `about.html` trust signals once full cert is available
- [ ] **Hero background image** — `images/hero.jpg` optional; currently using CSS gradient fallback
- [x] **Razorpay removed** — donate.html shows only UPI and bank transfer
- [x] **SWIFT code added** — ICICINBBXXX in bank table on donate.html
- [x] **Donate page balanced** — centered header, equal-height UPI+bank 2-col, 3-col trust strip below
- [x] **Program card posters uniform** — fixed `height:260px`, `background:var(--dark)`, `object-fit:contain` on all 5 cards; dark navy letterbox makes mixed orientations look intentional
- [x] **Contact form fixed** — success message hidden by default; proper async fetch to Formspree; browser validation on required fields; error block shown on failure
- [x] **Contact Follow Us** — 3 buttons (Facebook, Instagram, Email) on one line; WhatsApp removed (already in info card above)
- [x] **Brand color consistency** — `--dark: #0F1E50` matches exact logo navy; hero gradient updated; all off-brand colors (#162348, #1B3068, #7C3AED, #5B6BF5, #8B5CF6, #0369A1) removed
- [x] **Logo img background** — all 6 pages navbar logo has `background:var(--dark)` so rounded corners match logo navy
- [x] **Founder photo** — `images/founder.JPEG` uploaded, used in about.html and index.html
- [x] **Formspree contact form** — live with ID `xwvzbjyj`
- [x] **Full name in nav** — all 6 pages show "Nikshi Foundation for Humanity"
- [x] **Certificate of Appreciation** — displayed on index.html
- [x] **Mission text** — updated across index.html and about.html to include all beneficiary groups
- [x] **Mobile responsive** — program cards, donate cards, 2-col grids all stack on mobile
- [x] **Navbar icon-only social links** — Facebook + Instagram icon-only in desktop nav (all 6 pages)
- [x] **Navbar scroll color fix** — logo text turns navy on white background
- [x] **Hero green line** — "Fight Against Hunger." colored `#5DB04A` with `white-space:nowrap`
- [x] **Gallery filter bar** — two labeled rows: Active Projects (hover→green) + Past Drives (hover→orange)
- [x] **Gallery section dividers** — all use `var(--primary)` orange; no off-brand purples
- [x] **Gallery deep-link** — `?filter=X` query param activates filter without scroll conflict
- [x] **Footer standardized** — all 6 pages share identical 4-column footer
- [x] **Programs page static posters** — each program shows static poster + "View Photos in Gallery" button
- [x] **Old Age Homes accent** — uses `var(--primary)` orange (was purple `#7C3AED`)
- [x] **CSR Initiative** — full program section, gallery filter, trust signal, footer links on all pages
- [x] **Fight for Hunger poster** — added to Posters/; used in index.html program card, programs.html static image, and gallery (1st in hunger section, 16 total)
- [x] **Founder photo updated** — images/founder.JPEG replaced with new photo
- [x] **"Fight Against Hunger" rename** — all 6 HTML pages + CLAUDE.md updated; was "Fighting for Hunger"
- [x] **Mobile responsiveness overhaul** — catch-all attribute-selector grid rules in style.css; program poster images switch to `object-fit:contain` + capped height on mobile; founder photo uses `aspect-ratio` instead of fixed px; Follow Us buttons wrap on small screens; global `img { max-width:100% }` safety rule added
