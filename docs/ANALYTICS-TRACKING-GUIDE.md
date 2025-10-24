# 📊 Cara Menggunakan Google Analytics Event Tracking

## 🎯 CONTOH IMPLEMENTASI

Saya telah membuat helper functions untuk tracking berbagai events di website Anda. Berikut cara menggunakannya:

---

## 1. **Contact Form Tracking** ✅ (Sudah Diimplementasikan)

**File:** `src/app/contact/page.tsx`

```typescript
import { trackContactFormSubmit } from "../../../lib/analytics";

// Dalam handleSubmit, setelah email berhasil terkirim:
emailjs.send(serviceID, templateID, formData, userID).then(
  (response) => {
    trackContactFormSubmit(); // 👈 Track event
    // ... success handling
  }
);
```

---

## 2. **CV Download Tracking**

**Cara Implementasi:**

### Option A: Di Footer atau Header

```typescript
import { trackCVDownload } from "../../lib/analytics";

<a 
  href="/CV-AufaDzakiy.pdf"
  download
  onClick={() => trackCVDownload()} // 👈 Track download
  className="..."
>
  Download CV
</a>
```

### Option B: Automatic Tracking (Recommended)

Tambahkan di `components/footer.tsx`:

```typescript
import { trackCVDownload } from "../lib/analytics";

// Di dalam JSX Footer
<a 
  href="/CV-AufaDzakiy.pdf"
  download
  onClick={() => trackCVDownload()}
  className="text-white hover:text-[#0253EE] transition-colors"
>
  <i className="fas fa-file-pdf mr-2"></i>
  Download CV
</a>
```

---

## 3. **Social Media Click Tracking**

**File:** `components/footer.tsx`

```typescript
import { trackSocialMediaClick } from "../lib/analytics";

// Di array socialLinks, tambahkan onClick handler:
const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/aufadzakiy",
    icon: GithubIcon,
    onClick: () => trackSocialMediaClick('GitHub')
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/aufadzakiy",
    icon: LinkedInIcon,
    onClick: () => trackSocialMediaClick('LinkedIn')
  },
  // ... dst
];

// Dalam render:
{socialLinks.map((item) => (
  <a
    key={item.name}
    href={item.href}
    onClick={item.onClick} // 👈 Track click
    target="_blank"
    rel="noopener noreferrer"
    className="..."
  >
    {/* icon */}
  </a>
))}
```

---

## 4. **WhatsApp & Email Button Tracking**

**File:** `src/app/page.tsx` & `src/app/about/page.tsx`

```typescript
import { trackWhatsAppClick, trackEmailClick } from "../../lib/analytics";

// WhatsApp Button
<a
  href="https://wa.me/6281234567890"
  onClick={() => trackWhatsAppClick()} // 👈 Track WhatsApp
  className="..."
>
  <i className="fab fa-whatsapp"></i>
</a>

// Email Button
<Link
  href="/contact"
  onClick={() => trackEmailClick()} // 👈 Track Email
  className="..."
>
  <i className="fas fa-envelope"></i>
</Link>
```

---

## 5. **Project View/Click Tracking**

**File:** `components/section/ProjectSection.tsx`

```typescript
import { trackProjectView } from "../../lib/analytics";

// Untuk Live Demo button
<a
  href={project.liveDemoUrl}
  onClick={() => trackProjectView(project.title, 'demo')} // 👈 Track demo
  className="..."
>
  <Eye className="w-5 h-5" />
  Live Demo
</a>

// Untuk Source Code button
<a
  href={project.sourceCodeUrl}
  onClick={() => trackProjectView(project.title, 'source')} // 👈 Track source
  className="..."
>
  <Code className="w-5 h-5" />
  Source Code
</a>
```

---

## 6. **Skill Tab Tracking**

**File:** `components/section/TabsSection.tsx`

```typescript
import { trackSkillTabView } from "../../lib/analytics";

// Di dalam handleTabClick
const handleTabClick = (index: number) => {
  setActive(index);
  trackSkillTabView(TAB_LABELS[index]); // 👈 Track tab view
};

// Di JSX:
{TAB_LABELS.map((label, idx) => (
  <button
    key={idx}
    onClick={() => handleTabClick(idx)}
    className="..."
  >
    {label}
  </button>
))}
```

---

## 7. **Scroll Depth Tracking**

**File:** `src/app/page.tsx` atau `layout.tsx`

```typescript
import { trackScrollDepth } from "../../lib/analytics";

useEffect(() => {
  let scrolled25 = false;
  let scrolled50 = false;
  let scrolled75 = false;
  let scrolled100 = false;

  const handleScroll = () => {
    const scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    
    if (scrollPercentage >= 25 && !scrolled25) {
      trackScrollDepth(25);
      scrolled25 = true;
    }
    if (scrollPercentage >= 50 && !scrolled50) {
      trackScrollDepth(50);
      scrolled50 = true;
    }
    if (scrollPercentage >= 75 && !scrolled75) {
      trackScrollDepth(75);
      scrolled75 = true;
    }
    if (scrollPercentage >= 100 && !scrolled100) {
      trackScrollDepth(100);
      scrolled100 = true;
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

---

## 8. **Button Click Tracking (Generic)**

**Contoh: CTA Banner Button**

```typescript
import { trackButtonClick } from "../../lib/analytics";

<button
  onClick={() => {
    trackButtonClick('Hire Me CTA', 'CTA Banner Section');
    // navigate atau action lainnya
  }}
  className="..."
>
  Hire Me Now!
</button>
```

---

## 9. **Error Tracking**

**File:** `src/app/contact/page.tsx` (sudah ada error handling)

```typescript
import { trackError } from "../../../lib/analytics";

emailjs.send(serviceID, templateID, formData, userID).then(
  (response) => {
    // success
  },
  (err) => {
    // Track error
    trackError(`Contact Form Error: ${err.text}`, 'Contact Page');
    
    setModalState({
      isOpen: true,
      type: "error",
      title: "Pengiriman Gagal",
      message: "...",
    });
  }
);
```

---

## 📊 MELIHAT DATA DI GOOGLE ANALYTICS

### **Real-time Events:**
1. Buka Google Analytics
2. Reports → Realtime → Event count by Event name
3. Test setiap button/action di website
4. Lihat event muncul real-time

### **Historical Events:**
1. Reports → Engagement → Events
2. Pilih date range
3. Lihat semua events dan frequency
4. Click event name untuk detail

### **Custom Reports:**
1. Explore → Create custom report
2. Tambahkan dimensions: Event name, Page location
3. Tambahkan metrics: Event count, Users
4. Save report untuk monitoring

---

## 🎯 RECOMMENDED TRACKING PRIORITY

### **Priority 1 (Must Have):** ✅
- [x] Contact Form Submission
- [ ] CV Download
- [ ] WhatsApp Click
- [ ] Email Click

### **Priority 2 (Important):**
- [ ] Social Media Clicks
- [ ] Project Views
- [ ] Skill Tab Navigation
- [ ] CTA Button Clicks

### **Priority 3 (Nice to Have):**
- [ ] Scroll Depth
- [ ] Time on Page
- [ ] External Link Clicks
- [ ] Error Tracking

---

## 🔧 TESTING CHECKLIST

Setelah implementasi, test semua tracking:

```bash
□ Contact form submit → Check "contact_form_submit" event
□ Download CV → Check "cv_download" event  
□ Click WhatsApp → Check "whatsapp_click" event
□ Click Email → Check "email_click" event
□ Click GitHub → Check "social_media_click" event
□ View Project → Check "project_interaction" event
□ Switch Tab → Check "skill_tab_view" event
□ Scroll page → Check "scroll_depth" event
```

---

## 📈 NEXT STEPS

1. **Implement tracking** di semua component yang relevan
2. **Deploy website** dengan tracking code
3. **Test di Realtime** mode Google Analytics
4. **Monitor events** selama 1-2 minggu
5. **Analyze data** dan optimize website
6. **Setup Conversions** di GA4 admin panel

---

**Pro Tip:** Jangan over-track! Focus pada metrics yang penting untuk bisnis goals Anda. Terlalu banyak events akan membuat data sulit dianalisis.
