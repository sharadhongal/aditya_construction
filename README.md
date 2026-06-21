# 🏗️ Aditya Builders Group — Website

A complete, professional multi-page website for **Aditya Builders Group**, a home construction company based in Bengaluru, Karnataka.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Run

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 📁 Project Structure

```
src/
├── components/          # All React components (one per section)
│   ├── Navbar.jsx       # Sticky nav with mobile hamburger menu
│   ├── Hero.jsx         # Full-width hero with animated counters
│   ├── About.jsx        # Company info + founder note
│   ├── Services.jsx     # 8 service cards (anti-termite & waterproofing featured)
│   ├── WhyUs.jsx        # 6 feature highlights on navy bg
│   ├── Projects.jsx     # Portfolio grid with filter tabs
│   ├── Testimonials.jsx # Auto-advancing testimonial slider
│   ├── CtaBanner.jsx    # Bold CTA section with background image
│   ├── Contact.jsx      # Contact form (validated) + company info
│   └── Footer.jsx       # Footer + WhatsApp floating button
│
├── styles/              # Co-located CSS per component
│   ├── global.css       # CSS variables, typography, button utilities
│   ├── Navbar.css
│   ├── Hero.css
│   ├── About.css
│   ├── Services.css
│   ├── WhyUs.css
│   ├── Projects.css
│   ├── Testimonials.css
│   ├── CtaBanner.css
│   ├── Contact.css
│   └── Footer.css
│
├── App.jsx              # Root: initialises AOS, composes all sections
└── main.jsx             # ReactDOM entry point
```

---

## 🎨 Design System

| Token | Value |
|---|---|
| Primary Navy | `#0A1F44` |
| Gold Accent | `#D4A017` |
| Font Heading | Playfair Display (serif) |
| Font Body | DM Sans (sans-serif) |
| Animations | AOS (scroll-trigger) + CSS keyframes |

---

## ✨ Key Features

- **Sticky navbar** with scroll-aware background + mobile hamburger overlay
- **Animated counters** in Hero (Intersection Observer-powered)
- **Anti-Termite & Waterproofing** cards featured with badge + extra detail
- **Project filter tabs** (All / Villas / Apartments / Commercial / Renovation)
- **Custom testimonial slider** with auto-advance + dot navigation
- **Contact form** with full client-side validation (phone regex, required fields)
- **WhatsApp FAB** floating button (bottom-right) with pre-filled message
- **AOS scroll animations** throughout
- Fully **mobile-responsive** (Bootstrap 5 grid + custom media queries)
- CSS 3D card hover effects with `transform: translateY + perspective`

---

## 📝 Customisation Checklist

- [ ] Replace phone number `+91 98765 43210` with real number (Navbar, CtaBanner, Contact, Footer, WhatsApp FAB)
- [ ] Replace email `info@adityabuilders.in` with real email
- [ ] Replace address in Contact + Footer
- [ ] Replace Unsplash images with real project photos
- [ ] Embed real Google Maps iframe in Contact section
- [ ] Connect contact form to a backend (EmailJS, Formspree, or custom API)
- [ ] Update social media links in Footer + Contact
- [ ] Add real Google Analytics / Meta Pixel if needed

---

## 📦 Dependencies

| Package | Purpose |
|---|---|
| react + react-dom | UI framework |
| vite + @vitejs/plugin-react | Build tool |
| bootstrap 5 | Responsive grid & utilities |
| aos | Scroll-triggered animations |
| react-icons | Icon library (optional, icons done as emoji/SVG inline) |

---

© 2025 Aditya Builders Group. All Rights Reserved.
