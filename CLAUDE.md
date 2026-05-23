# CLAUDE.md — Nikshi Foundation for Humanity Website

Full developer reference for continuing work in a new Claude Code session.
Last updated: 2026-05-23.

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
├── programs.html          ← Programs (5 programs)
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
│   └── Trans Community/   ← 11 .jpg (1–11) + poster.jpg + 5 .jpeg (15–19)
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
--dark:         #162348   /* deep navy — headers, footer background */
--bg:           #F4F6F8   /* off-white — section backgrounds */
--gray:         #6B7280   /* body text */
```

---

## Pages — Status & Details

### index.html — Home
**Status: Complete**

Sections (top to bottom):
1. **Sticky nav** — hamburger on mobile, full name "Nikshi Foundation for Humanity" at 0.9rem
2. **Hero** — centered text, location pin icon + "Bangalore, India" tagline, expanded mission paragraph including transgender communities, underprivileged women, Down syndrome, visually impaired
3. **Impact counter strip** — animated counters (meals, families, children, trans lives), JS in `main.js`
4. **Program cards** — 4 cards (Project Gyaan, Tech Talk, Hunger, Trans Empowerment). Description updated to name all beneficiary groups.
5. **Project Showcase** — 4 poster cards in a responsive grid (CSR Uplift, Project Uplift, Project Gyaan, NTTS). Hover lift animation. Click opens poster full-size in new tab. Hint text "Click any poster to view full size."
6. **Photos from the Field** — 13-slide featured slideshow on dark `#0f172a` background, with `data-caption` captions per slide
7. **Founder Quote** — Shilpa Singh blockquote with avatar photo (`images/founder.JPEG`)
8. **Certificate of Appreciation** — 2-column section (text + certificate image). Image: `images/Certificate%20of%20Appreciation%20.jpeg`
9. **How Your Donation Helps** — rupee impact rows + `images/Project%20Gyaan/11.jpg` photo (no ₹400 badge — was removed)
10. **CTA banner** — orange background, volunteer/donate CTAs
11. **Follow Our Journey** — Facebook + Instagram CTA buttons. No Facebook plugin embed.
12. **Footer** — social icons: Facebook, WhatsApp, Instagram, Email. Bank details in Support Us column.

**Key past fixes on this page:**
- Hero text was left-aligned — now centered
- Facebook plugin embed replaced with clean social CTA buttons
- Donate Now button removed from Support Us footer banner (redundant with nav)
- IN flag emoji → location pin SVG in hero tagline
- Donation section image changed from emoji placeholder to `Project Gyaan/11.jpg`
- ₹400 badge overlay removed from donation section

### about.html — About Us
**Status: Complete**

Sections:
1. Nav — full name in logo, Facebook + Instagram links (was missing Facebook — fixed)
2. **Mission / Vision / Values** cards — Mission text updated to include all beneficiary groups: "transgender communities, underprivileged women, children with Down syndrome, the visually impaired, food-insecure families, and every person whose talents and heart deserve to be seen, loved, and supported"
3. Founder section — `images/founder.JPEG` (already uploaded)
4. Timeline of milestones
5. Trust signals strip (dark background)
6. Footer — social icons: Facebook, WhatsApp, Instagram, Email. Contact column shows `Nikshifoundation@gmail.com` (was previously showing `nikshifoundation@icici` UPI ID by mistake — fixed).

### programs.html — Programs
**Status: Complete**

Five program sections, each with a slideshow. Nav shows full name.

| Program | Accent Color | Slideshow Images | Slide Count |
|---------|-------------|-----------------|-------------|
| Transgender Empowerment | `#E8610A` orange | `images/Trans Community/` — 1–11.jpg + poster.jpg | 12 slides |
| Hunger Relief | `#0D6E6E` teal | `images/Hunger Food Distribution/` — 1–15.jpg | 15 slides |
| Project Gyaan (Education) | `#162348` navy | `images/Project Gyaan/` — 1–11.jpg + poster.jpg | 12 slides |
| Community Outreach — Old Age Homes | `#7C3AED` purple | `images/Old Age Homes/` — 1–8.jpg | 8 slides |
| Nikshi Tech Talk Series (NTTS) | `#0D6E6E` teal | `images/NTTS/` — 1.jpg, 2.jpg, 3.jpg, poster 4.jpg | 4 slides |

Intro text says "Five ongoing initiatives" — update if programs change.
Also has a "Past Drives" section at the bottom (COVID ration drive, Gerizim Trust).

### gallery.html — Gallery
**Status: Complete**

Filter buttons: All Photos | Hunger Relief | Project Gyaan | Trans Community | Old Age Homes | Tech Talk Series | Gerizim Trust

| Category | `data-filter` | Count | Source |
|----------|--------------|-------|--------|
| Hunger Relief | `hunger` | 15 | `Hunger Food Distribution/` 1–15.jpg |
| Project Gyaan | `gyaan` | 17 | `Project Gyaan/` 1–11 + poster + `end of the year/` 1–5 |
| Trans Community | `trans` | 17 | `Trans Community/` 1–11 + poster + 15–19.jpeg |
| Old Age Homes | `oldage` | 8 | `Old Age Homes/` 1–8.jpg |
| Tech Talk Series | `techtalk` | 4 | `NTTS/` 1.jpg, 2.jpg, 3.jpg, `poster 4.jpg` |
| Gerizim Trust | `gerizim` | 7 | `Gerizim Trust/` (spaces + parentheses — URL-encoded) |

**Filter JS uses:** `document.querySelectorAll('#gallery-grid [data-filter]')` — targets both image items AND category section headers so headers hide with their category.

**To add more photos:** Add `<img>` with correct `data-filter` inside `#gallery-grid`. Category headers also carry `data-filter`.

### donate.html — Donate
**Status: Needs Razorpay key**

- Amount selector: ₹400, ₹1,000, ₹2,500, ₹5,000, Custom
- Razorpay button — replace `YOUR_RAZORPAY_KEY_ID` in inline `<script>` at bottom of file
- UPI ID: `nikshifoundation@icici` (copy button included). **Drop `images/upi-qr.png`** to show QR code.
- Bank: NIKSHI FOUNDATION FOR HUMANITY | 141705003411 | ICIC0001417 | Marathalli
- Footer: social icons + `Nikshifoundation@gmail.com`

### contact.html — Contact
**Status: Complete and live**

- Formspree form **ACTIVE** — `https://formspree.io/f/xwvzbjyj`
- Info cards: Address, Phone/WhatsApp, UPI/Bank, Founder
- Social buttons section: Facebook, Instagram, WhatsApp, Email Us (with `flex-wrap:wrap`)
- Google Maps embed — Marathalli, Bangalore
- Footer: `Nikshifoundation@gmail.com`

---

## Navigation — All Pages

**Desktop nav** (in order):
Home | About Us | Programs | Gallery | Contact | Facebook | Instagram | **Donate Now**

**Mobile menu** (hamburger):
Home | About Us | Programs | Gallery | Contact | Instagram | Email Us | **Donate Now**

**Logo text:** "Nikshi Foundation for Humanity" at `font-size: 0.9rem` (reduced from 1.1rem to fit full name). On screens ≤480px, CSS overrides to `0.78rem`.

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

**Program cards** use `repeat(auto-fit, minmax(260px, 1fr))` — reflow naturally.

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
- [ ] **Razorpay key** — `donate.html` uses placeholder; replace `YOUR_RAZORPAY_KEY_ID` to activate donate button
- [ ] **UPI QR code** — `donate.html` shows placeholder box; add `images/upi-qr.png`
- [ ] **Custom domain CNAME** — site is live at GitHub Pages URL only; set up when ready to go live at nikshifoundation.org
- [ ] **80G / tax exemption** — section in `donate.html` not yet added; add once certificate is obtained
- [ ] **Registration number** — not displayed anywhere; add to `about.html` trust signals once available
- [ ] **End-of-year Project Gyaan photos** — `images/Project Gyaan/end of the year/` (5 images) in gallery but not in programs.html slideshow; add slides if desired
- [ ] **Trans Community 15–19.jpeg** — in gallery but not in programs.html slideshow; add slides if desired
- [ ] **Hero background image** — `images/hero.jpg` optional; currently using CSS gradient fallback
- [x] **Founder photo** — `images/founder.JPEG` uploaded, used in about.html and index.html quote avatar
- [x] **Formspree contact form** — live with ID `xwvzbjyj`
- [x] **Full name in nav** — all 6 pages show "Nikshi Foundation for Humanity"
- [x] **Certificate of Appreciation** — displayed on index.html in Recognition section
- [x] **Project Showcase (posters)** — 4 posters shown on index.html, click to open full size
- [x] **Mission text** — updated across index.html and about.html to include all beneficiary groups
- [x] **Mobile responsive** — slideshows capped at 260px, 2-col grids stack on mobile
