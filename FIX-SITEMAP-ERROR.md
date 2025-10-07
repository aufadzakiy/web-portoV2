# 🔧 FIX SITEMAP ERROR - Domain Mismatch

## ❌ Masalah:
Google Search Console error: **"Tidak dapat mengambil peta situs"**

## 🎯 Penyebab:
Domain di kode: `aufadzakiy.vercel.app`  
Domain aktual: `aufa-space.vercel.app`  

❌ **MISMATCH!**

## ✅ Solusi: Find & Replace Semua Domain

### Step 1: Global Find & Replace

Gunakan VS Code Find & Replace (Ctrl + H):

**Find:** `aufadzakiy.vercel.app`  
**Replace with:** `aufa-space.vercel.app`  

**Klik:** "Replace All" (atau Ctrl + Alt + Enter)

### File yang Perlu Diupdate:

1. ✅ `src/app/layout.tsx` - SUDAH DIUPDATE SEBAGIAN
2. ✅ `src/app/sitemap.ts` - SUDAH DIUPDATE
3. ⏳ `src/app/about/layout.tsx` - PERLU DICEK
4. ⏳ `src/app/contact/layout.tsx` - PERLU DICEK
5. ⏳ `README.md` - PERLU DICEK
6. ⏳ `BIO-AUFA.md` - PERLU DICEK
7. ⏳ Semua file dokumentasi `.md`

### Step 2: Manual Check

Cek file-file ini satu per satu dan update URL jika ada:

```bash
src/app/layout.tsx          → Search: aufadzakiy.vercel.app
src/app/about/layout.tsx    → Search: aufadzakiy.vercel.app
src/app/contact/layout.tsx  → Search: aufadzakiy.vercel.app
src/app/sitemap.ts          → Search: aufadzakiy.vercel.app
src/app/robots.ts           → Search: aufadzakiy.vercel.app
README.md                   → Search: aufadzakiy.vercel.app
BIO-AUFA.md                → Search: aufadzakiy.vercel.app
```

## 🚀 Setelah Fix:

### 1. Build & Test Locally
```bash
npm run build
npm run dev
```

### 2. Test Sitemap di Browser
Buka: `http://localhost:3000/sitemap.xml`

Harus terlihat:
```xml
<url>
  <loc>https://aufa-space.vercel.app</loc>
  ...
</url>
<url>
  <loc>https://aufa-space.vercel.app/about</loc>
  ...
</url>
<url>
  <loc>https://aufa-space.vercel.app/contact</loc>
  ...
</url>
```

### 3. Deploy
```bash
git add .
git commit -m "Fix: Update all URLs to aufa-space.vercel.app domain"
git push origin development
```

### 4. Tunggu Deploy Selesai (2-3 menit)

### 5. Test Sitemap di Production
Buka browser: `https://aufa-space.vercel.app/sitemap.xml`

### 6. Submit ke Google Search Console
1. Buka GSC: https://search.google.com/search-console
2. Property: `aufa-space.vercel.app`
3. Menu: **Sitemaps**
4. Input: `sitemap.xml`
5. Klik: **SUBMIT**
6. ✅ Status harus: **Success**

## 🔍 Verification Checklist

- [ ] Find & Replace all `aufadzakiy.vercel.app` → `aufa-space.vercel.app`
- [ ] Test sitemap locally: http://localhost:3000/sitemap.xml
- [ ] Commit & push ke Git
- [ ] Verify deployment di Vercel
- [ ] Test sitemap production: https://aufa-space.vercel.app/sitemap.xml
- [ ] Submit sitemap di Google Search Console
- [ ] Check status: Success (hijau)

## ⏰ Timeline:

- **Fix code**: 5 menit
- **Deploy**: 2-3 menit
- **Submit sitemap**: 1 menit
- **Google crawl**: 1-24 jam
- **Indexing complete**: 24-48 jam

## 🎯 Expected Result:

Setelah fix & submit ulang:
```
Status: Success ✅
Discovered URLs: 3
Last read: Today
```

---

**PENTING:** Pastikan SEMUA reference `aufadzakiy.vercel.app` sudah diganti ke `aufa-space.vercel.app` sebelum deploy!
