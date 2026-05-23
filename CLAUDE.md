# CLAUDE.md — Nikshi Foundation for Humanity Website

Full developer reference for continuing work in a new Claude Code session.
Last updated: 2026-05-22.

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
| Formspree | Contact form — needs real form ID (see below) |
| Razorpay JS SDK | Donate page — needs real key ID (see below) |
| Lightbox | Not yet added — plain `<img>` tags in gallery for now |

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
│   ├── logo.jpeg          ← Site logo (used in nav + favicon)
│   ├── Gerizim Trust/     ← 7 .jpeg files (see gallery section below)
│   ├── Hunger Food Distribution/  ← 15 images: 1.jpg – 15.jpg
│   ├── NTTS/              ← 4 images: 1.jpg, 2.jpg, 3.jpg, poster 4.jpg
│   ├── Old Age Homes/     ← 8 images: 1.jpg – 8.jpg
│   ├── Project Gyaan/     ← 11 images (1.jpg–11.jpg) + poster.jpg + end of the year/ subfolder (1–5.jpg)
│   └── Trans Community/   ← 11 .jpg (1–11) + poster.jpg + 5 .jpeg (15–19)
└── .nojekyll              ← Required for GitHub Pages
```

---

## Brand Colors (CSS variables in `css/style.css`)

```css
--primary:   #F5A623   /* orange — used for CTAs, highlights */
--secondary: #5DB04A   /* green  — used for accents, trust signals */
--dark:      #162348   /* navy   — used for headers, footer background */
--bg:        #F8F9FA   /* off-white — section backgrounds */
--gray:      #6B7280   /* body text color */
```

---

## Pages — Status & Details

### index.html — Home
**Status: Complete**

Sections (top to bottom):
1. Sticky nav (hamburger on mobile)
2. Full-width hero — tagline "Equality · Empowerment · Fight Against Hunger", two CTAs. **Text is centered** (previously was left-aligned — fixed).
3. Animated impact counter strip (meals served, families supported, lives impacted) — JS in `main.js`
4. 3-column program cards with icons
5. "Photos from the Field" — 13-slide featured slideshow (dark `#0f172a` background). Slides pull from all program folders with `data-caption` captions.
6. Founder quote / "Why We Exist" section
7. "Follow Our Journey" social section — Facebook + Instagram CTA buttons. **No Facebook plugin embed** (was removed — it showed a blank white box).
8. Support Us banner — **Donate Now button removed** from here (it's already in the nav).
9. Footer with social icons: Facebook, WhatsApp, Instagram, Email.

### about.html — About Us
**Status: Complete**

Sections:
1. Nav (has Facebook + Instagram — previously missing Facebook entirely)
2. Mission / Vision / Values cards
3. Founder section — Shilpa Singh photo (`images/founder.jpg` — **add this file if not present**)
4. Timeline of milestones
5. Trust signals strip (dark background)
6. Footer with social icons: Facebook, WhatsApp, Instagram, Email

**Footer fix:** The contact column previously showed `nikshifoundation@icici` (the UPI ID) as an email link. This has been corrected to `Nikshifoundation@gmail.com`.

### programs.html — Programs
**Status: Complete**

Five program sections, each with a slideshow:

| Program | Accent Color | Slideshow Images | Slide Count |
|---------|-------------|-----------------|-------------|
| Transgender Empowerment | `#E8610A` orange | `images/Trans Community/` — 1–11.jpg + poster.jpg | 12 slides |
| Hunger Relief | `#0D6E6E` teal | `images/Hunger Food Distribution/` — 1–15.jpg | 15 slides |
| Project Gyaan (Education) | `#162348` navy | `images/Project Gyaan/` — 1–11.jpg + poster.jpg | 12 slides |
| Community Outreach — Old Age Homes | `#7C3AED` purple | `images/Old Age Homes/` — 1–8.jpg | 8 slides |
| Nikshi Tech Talk Series (NTTS) | `#0D6E6E` teal | `images/NTTS/` — 1.jpg, 2.jpg, 3.jpg, poster 4.jpg | 4 slides |

Also has a "Past Drives" section at the bottom (COVID ration drive, other drives).

**Note:** The intro says "Five ongoing initiatives" — update this number if programs are added/removed.

### gallery.html — Gallery
**Status: Complete**

Filter buttons: All Photos, Hunger Relief, Project Gyaan, Trans Community, Old Age Homes, Tech Talk Series, Gerizim Trust.

Images by category:

| Category | `data-filter` | Count | Source folder |
|----------|--------------|-------|--------------|
| Hunger Relief | `hunger` | 15 | `images/Hunger Food Distribution/` 1–15.jpg |
| Project Gyaan | `gyaan` | 17 | `images/Project Gyaan/` 1–11.jpg + poster.jpg + `end of the year/` 1–5.jpg |
| Trans Community | `trans` | 17 | `images/Trans Community/` 1–11.jpg + poster.jpg + 15–19.jpeg |
| Old Age Homes | `oldage` | 8 | `images/Old Age Homes/` 1–8.jpg |
| Tech Talk Series | `techtalk` | 4 | `images/NTTS/` 1.jpg, 2.jpg, 3.jpg, `poster 4.jpg` |
| Gerizim Trust | `gerizim` | 7 | `images/Gerizim Trust/` (filenames have spaces + parentheses — URL-encoded in HTML) |

**Gerizim Trust filenames** (must be URL-encoded in HTML `src` attributes):
- `differently-abled kids making bags (boys) 1.jpeg` → `differently-abled%20kids%20making%20bags%20%28boys%29%201.jpeg`
- `differently-abled kids making bags (boys) 2.jpeg`
- `differently-abled kids making bags (girls) 1.jpeg`
- `differently-abled kids making bags (girls) 2.jpeg`
- `older kid sorting out newspapers 1.jpeg`
- `older kid sorting out newspapers 2.jpeg`
- `older kid sorting out newspapers 3.jpeg`

**Filter JS:** `document.querySelectorAll('#gallery-grid [data-filter]')` — this selector includes both image items AND section header divs, so headers hide/show correctly with their category.

**To add more photos:** Add an `<img>` tag with the correct `data-filter` attribute inside `#gallery-grid`. Category headers also carry `data-filter` so they hide when filtered.

### donate.html — Donate
**Status: Complete (needs API keys to go live)**

- Amount selector buttons: ₹400, ₹1,000, ₹2,500, ₹5,000, Custom
- Razorpay donate button — **replace `YOUR_RAZORPAY_KEY_ID`** in the inline `<script>` at the bottom of the file with the real key from Razorpay Dashboard → Settings → API Keys
- UPI ID: `nikshifoundation@icici` — displayed with a copy button. **Add `images/upi-qr.png`** to show the QR code (currently shows a placeholder).
- Bank transfer table: Account NIKSHI FOUNDATION FOR HUMANITY | No: 141705003411 | IFSC: ICIC0001417 | Branch: Marathalli, Bangalore

### contact.html — Contact
**Status: Complete (needs Formspree ID to go live)**

- Formspree form — **replace `YOUR_FORM_ID`** in `<form action="https://formspree.io/f/YOUR_FORM_ID">` with the real ID from formspree.io
- Info cards: Address, Phone/WhatsApp, UPI/Bank, Founder
- Social buttons: Facebook, Instagram, WhatsApp, Email Us
- Google Maps embed of Marathalli, Bangalore
- Footer with email: `Nikshifoundation@gmail.com`

---

## Navigation — All Pages

Every page has the same nav structure. Desktop nav includes (in order):
Home | About Us | Programs | Gallery | Contact | **Facebook** | **Instagram** | **Donate Now**

Mobile menu (hamburger) includes:
Home | About Us | Programs | Gallery | Contact | **Instagram** | **Email Us** | **Donate Now**

**Social links:**
- Facebook: `https://www.facebook.com/share/18pNZXoWaK/?mibextid=wwXIfr`
- Instagram: `https://www.instagram.com/nikshi_foundation_for_humanity`
- WhatsApp: `https://wa.me/919742562006`
- Email: `mailto:Nikshifoundation@gmail.com`

---

## Slideshow Component

Implemented in `css/style.css` (`.slideshow`, `.slideshow-track`, `.slide`, `.slideshow-btn`, `.slideshow-dots`, `.slide-caption`) and `js/main.js` (the `/* ---------- Slideshows ---------- */` block).

**HTML structure for a slideshow:**
```html
<div class="slideshow" style="height: 420px; border-radius: 16px; overflow: hidden;">
  <div class="slideshow-track">
    <div class="slide" data-caption="Optional caption text">
      <img src="images/FolderName/1.jpg" alt="Description" loading="lazy" />
    </div>
    <div class="slide" data-caption="Another caption">
      <img src="images/FolderName/2.jpg" alt="Description" loading="lazy" />
    </div>
    <!-- ... more slides -->
  </div>
  <button class="slideshow-btn slideshow-prev" aria-label="Previous">&#8249;</button>
  <button class="slideshow-btn slideshow-next" aria-label="Next">&#8250;</button>
  <div class="slideshow-dots">
    <button class="dot active"></button>
    <button class="dot"></button>
    <!-- one dot per slide -->
  </div>
  <div class="slide-caption"><div class="slide-caption-text"></div></div>
</div>
```

**Key behavior:**
- Auto-advances every 3800ms
- Pauses on hover (`mouseenter` / `mouseleave`)
- Touch swipe supported (left/right)
- Caption text pulled from `data-caption` attribute on each `.slide`
- Dot count must match slide count exactly or dots will be out of sync

**Image path encoding:** Folder names with spaces must be URL-encoded in `src` attributes:
- `Hunger Food Distribution` → `Hunger%20Food%20Distribution`
- `Project Gyaan` → `Project%20Gyaan`
- `Trans Community` → `Trans%20Community`
- `Old Age Homes` → `Old%20Age%20Homes`
- `end of the year` → `end%20of%20the%20year`
- `poster 4.jpg` → `poster%204.jpg`

---

## Founder Details

- **Name:** Shilpa Singh
- **Title:** Founder & Director
- **Phone:** +91 9742562006
- **Email:** Nikshifoundation@gmail.com
- **Photo:** `images/founder.jpg` — **this file has not yet been added.** Drop a photo at that path to show it in `about.html`. The `<img>` has an `onerror="this.style.display='none'"` fallback so the page doesn't break without it.

---

## Organisation Details (for bank transfer, trust signals, etc.)

| Field | Value |
|-------|-------|
| Full Name | NIKSHI FOUNDATION FOR HUMANITY |
| Account Number | 141705003411 |
| IFSC | ICIC0001417 |
| Bank | ICICI Bank |
| Branch | Marathalli, Bangalore |
| UPI ID | nikshifoundation@icici |
| Email | Nikshifoundation@gmail.com |
| Phone | +91 9742562006 |
| Address | Bangalore, Karnataka, India |

---

## Third-Party Integrations — What Still Needs Activating

### 1. Formspree (contact form)
**Status: ACTIVE** — Form ID `xwvzbjyj` is live.
Endpoint: `https://formspree.io/f/xwvzbjyj`
To change the receiving email, log in at `https://formspree.io` and update the form settings there — no code change needed.

### 2. Razorpay (donation button)
1. Sign up / log in at `https://razorpay.com`
2. Dashboard → Settings → API Keys → Generate Key → copy **Key ID** (starts with `rzp_live_` or `rzp_test_`)
3. In `donate.html`, replace `YOUR_RAZORPAY_KEY_ID` in the inline `<script>` block:
   ```js
   const RAZORPAY_KEY = 'YOUR_RAZORPAY_KEY_ID';
   ```
4. Test with `rzp_test_` key first; switch to `rzp_live_` for production.

### 3. UPI QR Code
- Generate a QR code for `nikshifoundation@icici` using any UPI QR generator
- Save as `images/upi-qr.png`
- The `<img src="images/upi-qr.png">` placeholder in `donate.html` will auto-render it

### 4. Custom Domain
1. Add file `CNAME` (no extension) in repo root containing exactly: `nikshifoundation.org`
2. In DNS registrar for `nikshifoundation.org`, add:
   - A records pointing to GitHub Pages IPs: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - Or CNAME `www` → `parisa-singh.github.io`
3. In GitHub repo Settings → Pages → Custom domain → enter `nikshifoundation.org` → Save → enable "Enforce HTTPS"

---

## Assets Still Needed

| File | Where Used | Notes |
|------|-----------|-------|
| `images/founder.jpg` | `about.html` founder section | Photo of Shilpa Singh |
| `images/upi-qr.png` | `donate.html` UPI section | QR code for `nikshifoundation@icici` |
| `images/hero.jpg` | `index.html` hero (optional) | Currently using CSS gradient fallback |

---

## Responsive Design

- Mobile-first using Tailwind breakpoints
- Breakpoint for hamburger nav: `max-width: 900px` (in each page's `<style>` block at bottom)
- Tested widths: 320px, 375px, 430px, 768px, 1024px, 1280px, 1536px+
- Gallery reflows: 4-col → 3-col → 2-col → 1-col
- Program cards: 3-col → 2-col → 1-col
- Slideshow dots use `flex-wrap: wrap` so they wrap on screens with many slides (e.g. 15-slide hunger slideshow)

---

## GitHub / Deployment Workflow

```bash
# After making changes, from the project root:
git add <specific files>
git commit -m "feat/fix/content: description of change"
git push origin main
# GitHub Pages auto-deploys within ~1 minute
```

**Branch:** `main` (GitHub Pages serves from root of main branch)

**Commit message convention used in this project:**
- `feat:` new feature or section
- `fix:` bug fix
- `content:` text/copy changes
- `style:` CSS-only changes
- `images:` adding/removing image assets

---

## Known Issues / Future TODOs

- [ ] **Lightbox on gallery** — clicking images opens the image in a new tab (`target="_blank"`); a proper lightbox (e.g. GLightbox, no jQuery) would improve UX. The CSS slideshow component already exists and could be adapted.
- [ ] **80G / tax exemption section** on `donate.html` — placeholder section not yet added; add once the certificate is obtained.
- [ ] **Registration number** — not yet displayed anywhere; add to `about.html` trust signals and `donate.html` "Why Trust Us" block once available.
- [ ] **End-of-year Project Gyaan photos** (`images/Project Gyaan/end of the year/` — 5 images) are in the gallery but **not** in the programs.html Project Gyaan slideshow. Add 5 more slides there if desired.
- [ ] **Trans Community 15–19.jpeg** — these 5 files are in the gallery but the programs.html Trans Community slideshow only uses 1–11.jpg + poster.jpg. Add more slides if desired.
- [ ] **`images/founder.jpg`** — not yet uploaded; `about.html` has `onerror` fallback so it degrades gracefully.
- [ ] **`images/upi-qr.png`** — not yet uploaded; `donate.html` shows a placeholder box.
- [x] **Formspree ID** — `contact.html` form is live with ID `xwvzbjyj`.
- [ ] **Razorpay Key** — `donate.html` uses `YOUR_RAZORPAY_KEY_ID` placeholder; replace to activate.
- [ ] **Custom domain CNAME** — not yet set up; site is live at GitHub Pages URL only.
