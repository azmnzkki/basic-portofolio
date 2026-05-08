# 📧 Formspree Setup Guide - Contact Form Portfolio

## Step 1: Daftar Formspree (5 menit)

1. **Buka browser** dan pergi ke: https://formspree.io
2. **Klik "Get Started"** atau "Sign Up"
3. **Pilih Sign Up dengan Google** (paling mudah)
4. **Login dengan Gmail kamu** yang mau terima pesan
5. **Verify email** kalau diminta

---

## Step 2: Buat Form Baru

1. Setelah login, klik **"+ New Form"** atau **"Create a Form"**
2. **Isi form name**: Misalnya "Portfolio Contact Form"
3. **Email address**: Pastikan email kamu sudah benar (ini email yang akan terima pesan)
4. **Klik "Create Form"**

---

## Step 3: Copy Form ID

Setelah form dibuat, kamu akan lihat:

```
Form Endpoint: https://formspree.io/f/xpznvwqr
                                        ^^^^^^^^
                                        INI FORM ID KAMU
```

**Copy** bagian setelah `/f/` (contoh: `xpznvwqr`)

---

## Step 4: Update Code

1. **Buka file**: `src/sections/portfolio/contact-section.jsx`

2. **Cari baris ini** (sekitar baris 25):
```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
```

3. **Ganti `YOUR_FORM_ID`** dengan form ID kamu:
```javascript
const response = await fetch('https://formspree.io/f/xpznvwqr', {
```

4. **Save file**

---

## Step 5: Test Form

1. **Jalankan website** kamu (`npm run dev`)
2. **Buka halaman Contact**
3. **Isi form** dengan data test:
   - Nama: Test User
   - Email: test@example.com
   - Pesan: Testing contact form
4. **Klik "Kirim Pesan"**
5. **Cek Gmail kamu** - pesan harusnya masuk dalam 1-2 menit!

---

## Step 6: Konfigurasi Tambahan (Opsional)

Di dashboard Formspree, kamu bisa:

### ✅ **Spam Protection**
- Sudah aktif otomatis
- Bisa tambah reCAPTCHA kalau mau

### ✅ **Auto-Reply**
- Settings → Autoresponder
- Kirim email otomatis ke user yang submit form

### ✅ **Custom Thank You Page**
- Settings → Redirect
- Redirect ke halaman terima kasih setelah submit

### ✅ **Email Notifications**
- Settings → Notifications
- Customize email yang kamu terima

---

## Troubleshooting

### ❌ Pesan tidak masuk ke Gmail?
1. Cek **Spam folder** di Gmail
2. Pastikan **form ID sudah benar**
3. Cek **console browser** untuk error (F12 → Console)

### ❌ Error "Failed to fetch"?
1. Pastikan **internet connection** aktif
2. Cek **form ID** tidak ada typo
3. Pastikan **Formspree account** sudah verified

### ❌ Form tidak submit?
1. Pastikan **semua field** diisi (required)
2. Cek **console browser** untuk error
3. Pastikan **email format** valid

---

## Upgrade ke Premium (Opsional)

**Free Plan:**
- ✅ 50 submissions/bulan
- ✅ Spam filtering
- ✅ Email notifications

**Premium Plan ($10/bulan):**
- ✅ 1000 submissions/bulan
- ✅ File uploads
- ✅ Custom branding
- ✅ Webhooks

Untuk portfolio personal, **Free Plan sudah lebih dari cukup!**

---

## Selesai! 🎉

Sekarang contact form kamu sudah live dan pesan akan langsung masuk ke Gmail!

**Kalau ada masalah, bilang aja!** 💪
