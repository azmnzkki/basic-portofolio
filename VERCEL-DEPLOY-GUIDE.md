# 🚀 Deploy Portfolio ke Vercel - Step by Step Guide

## Prerequisites (Yang Harus Ada)

✅ Akun GitHub (untuk simpan code)
✅ Project portfolio sudah jalan di local
✅ Git sudah terinstall di komputer

---

## PART 1: Push Code ke GitHub (10 menit)

### Step 1: Buat Repository di GitHub

1. **Buka** https://github.com
2. **Login** dengan akun GitHub kamu
3. **Klik tombol "+"** di kanan atas → **"New repository"**
4. **Isi form:**
   - Repository name: `portfolio-website` (atau nama lain)
   - Description: "My Personal Portfolio Website"
   - **Public** (pilih ini)
   - **JANGAN** centang "Add a README file"
5. **Klik "Create repository"**

### Step 2: Initialize Git di Project Kamu

Buka terminal di folder project kamu, lalu jalankan:

```bash
# Initialize git
git init

# Add semua file
git add .

# Commit pertama
git commit -m "Initial commit - Portfolio website"
```

### Step 3: Connect ke GitHub Repository

Copy command dari GitHub (yang muncul setelah buat repo), atau jalankan:

```bash
# Ganti USERNAME dan REPO_NAME dengan punya kamu
git remote add origin https://github.com/USERNAME/REPO_NAME.git

# Push ke GitHub
git branch -M main
git push -u origin main
```

**Contoh:**
```bash
git remote add origin https://github.com/azmnzkki/portfolio-website.git
git branch -M main
git push -u origin main
```

### Step 4: Verify di GitHub

1. Refresh halaman GitHub repository kamu
2. Pastikan semua file sudah muncul
3. ✅ Kalau sudah ada, lanjut ke Part 2!

---

## PART 2: Deploy ke Vercel (5 menit)

### Step 1: Daftar Vercel

1. **Buka** https://vercel.com
2. **Klik "Sign Up"**
3. **Pilih "Continue with GitHub"**
4. **Login dengan GitHub** kamu
5. **Authorize Vercel** untuk akses GitHub

### Step 2: Import Project

1. Setelah login, klik **"Add New..."** → **"Project"**
2. Kamu akan lihat list repository GitHub kamu
3. **Cari repository portfolio** kamu
4. **Klik "Import"** di sebelah repository tersebut

### Step 3: Configure Project

Vercel akan auto-detect settings. Pastikan:

- **Framework Preset:** Vite
- **Root Directory:** `./` (default)
- **Build Command:** `npm run build` (auto-detect)
- **Output Directory:** `dist` (auto-detect)

**JANGAN UBAH APA-APA**, langsung klik **"Deploy"**!

### Step 4: Wait for Deployment

1. Vercel akan mulai build project kamu
2. Tunggu 2-3 menit (lihat progress bar)
3. Kalau berhasil, akan muncul **"Congratulations!"** 🎉

### Step 5: Akses Website Kamu

1. Klik **"Visit"** atau **"Go to Dashboard"**
2. Copy URL website kamu (contoh: `portfolio-website-abc123.vercel.app`)
3. **Buka URL tersebut** di browser
4. ✅ **Portfolio kamu sudah LIVE!** 🚀

---

## PART 3: Custom Domain (Opsional)

### Kalau Mau Pakai Domain Sendiri (contoh: azmanzakki.com)

1. Beli domain di Namecheap/GoDaddy/Niagahoster
2. Di Vercel Dashboard → **Settings** → **Domains**
3. **Add domain** kamu
4. **Copy nameservers** dari Vercel
5. **Update nameservers** di domain provider kamu
6. Tunggu 24-48 jam untuk propagasi DNS
7. ✅ Domain custom siap!

### Kalau Pakai Domain Gratis Vercel

Domain otomatis: `your-project-name.vercel.app`

**Mau ganti nama?**
1. Dashboard → **Settings** → **Domains**
2. **Edit** domain
3. Ganti jadi nama yang kamu mau (contoh: `azman-portfolio.vercel.app`)

---

## PART 4: Auto-Deploy (Bonus)

**Setiap kali kamu push code ke GitHub, Vercel akan auto-deploy!**

```bash
# Edit file di local
# Contoh: ubah text di hero section

# Commit changes
git add .
git commit -m "Update hero section text"

# Push ke GitHub
git push

# Vercel akan auto-deploy dalam 2-3 menit!
```

---

## Troubleshooting

### ❌ Build Failed?

**Cek error message di Vercel dashboard:**

1. **"Module not found"**
   - Pastikan semua dependencies ada di `package.json`
   - Run: `npm install` di local

2. **"Build command failed"**
   - Test build di local: `npm run build`
   - Fix error yang muncul
   - Push lagi ke GitHub

3. **"Out of memory"**
   - Jarang terjadi untuk portfolio
   - Coba deploy ulang

### ❌ Website Blank/Error 404?

1. Cek **Output Directory** di Vercel settings
2. Pastikan `dist` (untuk Vite)
3. Redeploy

### ❌ Images Tidak Muncul?

1. Pastikan images ada di folder `public/`
2. Path harus `/assets/...` bukan `./assets/...`
3. Redeploy

---

## Tips & Best Practices

### ✅ Environment Variables

Kalau ada API keys atau secrets:
1. Dashboard → **Settings** → **Environment Variables**
2. Add variable (contoh: `VITE_API_KEY`)
3. Redeploy

### ✅ Analytics

Vercel punya built-in analytics:
1. Dashboard → **Analytics**
2. Lihat visitor stats, page views, dll

### ✅ Performance

Vercel auto-optimize:
- ✅ Image optimization
- ✅ CDN global
- ✅ Automatic caching
- ✅ HTTPS/SSL

---

## Summary

**Setelah deploy, kamu punya:**
- ✅ Website live 24/7
- ✅ HTTPS/SSL gratis
- ✅ Auto-deploy dari GitHub
- ✅ Global CDN (cepat di seluruh dunia)
- ✅ Free domain `.vercel.app`
- ✅ Unlimited bandwidth

**URL Portfolio Kamu:**
`https://your-project-name.vercel.app`

---

## Next Steps

1. ✅ Share URL portfolio ke LinkedIn
2. ✅ Add URL ke GitHub profile
3. ✅ Add URL ke CV kamu
4. ✅ Share ke recruiter!

**Selamat! Portfolio kamu sudah online!** 🎉🚀

---

**Kalau ada masalah, bilang aja!** 💪
