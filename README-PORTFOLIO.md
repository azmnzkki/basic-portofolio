# Portfolio Website - Setup Guide

## 🚀 Quick Start

1. **Install dependencies:**
```bash
npm install
# atau
yarn install
```

2. **Run development server:**
```bash
npm run dev
# atau
yarn dev
```

3. **Open browser:**
Buka `http://localhost:5173/portfolio`

## 📝 Customization

### 1. Personal Information

Edit file berikut untuk mengubah informasi personal:

**Hero Section** (`src/sections/portfolio/hero-section.jsx`):
- Nama
- Tagline
- Tech stack badges
- Avatar image path

**About Section** (`src/sections/portfolio/about-section.jsx`):
- Cerita personal
- Fun facts
- Foto santai

**Contact Section** (`src/sections/portfolio/contact-section.jsx`):
- Social media links
- Email address
- Formspree form ID

### 2. Journey Timeline

Edit `src/sections/portfolio/journey-timeline.jsx`:
- Ubah periode waktu
- Ganti aha moment
- Update skills per fase
- Tambah/kurangi fase belajar

### 3. Professional Work

Edit `src/sections/portfolio/professional-work.jsx`:
- Tambah/edit project berbayar
- Update tech stack
- Ganti testimonial klien
- Blur image untuk NDA projects

### 4. Personal Projects

Edit `src/sections/portfolio/personal-projects.jsx`:
- Tambah project baru
- Update live demo & GitHub links
- Tandai featured projects
- Sesuaikan tech filter

### 5. Skills

Edit `src/sections/portfolio/skills-section.jsx`:
- Update skill level (jujur!)
- Tambah/kurangi skills
- Ubah kategori
- Update "Currently Learning"

## 🖼️ Images

Ganti placeholder images di `public/assets/`:
- `avatar.jpg` - Foto profile (180x180px)
- `about-photo.jpg` - Foto santai
- `cv.pdf` - CV file
- `projects/` - Screenshot projects

## 📧 Contact Form Setup

1. Daftar di [Formspree](https://formspree.io/)
2. Buat form baru
3. Copy form ID
4. Paste di `src/sections/portfolio/contact-section.jsx`:
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

## 🎨 Theme

Default: Dark mode
Toggle: Klik icon sun/moon di kanan atas

Ubah default theme di `src/theme/theme-config.js`:
```javascript
defaultMode: 'dark', // atau 'light'
```

## 🚀 Deploy ke Vercel

1. Push ke GitHub
2. Import project di [Vercel](https://vercel.com)
3. Deploy otomatis!

Build command: `npm run build`
Output directory: `dist`

## 📱 Responsive

Website sudah responsive untuk:
- Desktop (1920px+)
- Laptop (1024px+)
- Tablet (768px+)
- Mobile (320px+)

## 🎯 Tech Stack

- React 19
- Material-UI 7
- Framer Motion
- Vite
- React Router

## 📄 License

Free to use untuk portfolio personal Anda!
