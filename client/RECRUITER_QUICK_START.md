# 🎬 Recruiter Interface - Quick Start Guide

## ✅ What's Been Built

Your Netflix-style recruiter portfolio is **fully functional and ready to use!**

### Main Features:

✨ **Sticky Netflix-style navbar** with your name (Kunj Patel) in red  
🎥 **Hero section** with auto-playing video (muted, looping)  
🎯 **"My Weapons" section** - 4 interactive cards (Skills, Projects, Experience, About Me)  
🔗 **"Connect Me" section** - 5 social media icons with hover effects  
🎨 **Dark Netflix theme** (#141414 background, #E50914 red accents)  
📱 **Fully responsive** - mobile, tablet, desktop optimized  
🚀 **Complete routing** - 5 sub-pages with back buttons

---

## 🔧 Quick Setup

```bash
# Navigate to client folder
cd "d:\B.Tech CSE\Portfolio\client"

# Start development server
npm run dev

# Visit in browser
http://localhost:5173/recruiter
```

---

## 📂 File Overview

| File                                         | Purpose                  |
| -------------------------------------------- | ------------------------ |
| `src/components/recruiter/RecruiterHome.tsx` | Main home page           |
| `src/components/recruiter/Navbar.tsx`        | Top navigation           |
| `src/components/recruiter/HeroVideo.tsx`     | Video hero section       |
| `src/components/recruiter/MyWeaponsRow.tsx`  | 4-card section           |
| `src/components/recruiter/ConnectMeRow.tsx`  | Social icons section     |
| `src/components/recruiter/Footer.tsx`        | Footer                   |
| `src/styles/recruiter.css`                   | All styling (830+ lines) |

---

## 🎯 What to Customize

### 1️⃣ Replace the Placeholder Video

```
File: public/videos/placeholder-hero.svg
→ Add your MP4 file here and update HeroVideo.tsx
```

### 2️⃣ Update Social Links

```
File: src/components/recruiter/ConnectMeRow.tsx
→ Replace URLs with your actual profiles
```

### 3️⃣ Add Card Images

```
File: src/components/recruiter/MyWeaponsRow.tsx
→ Replace SVG placeholders with real images
```

### 4️⃣ Fill Sub-Page Content

```
Files:
- src/components/recruiter/SkillsPage.tsx
- src/components/recruiter/ProjectsPage.tsx
- src/components/recruiter/AboutPage.tsx
→ Add real content instead of placeholder text
```

### 5️⃣ Change Brand Colors (Optional)

```
File: src/styles/recruiter.css
→ Search for :root { } and modify CSS variables
--netflix-red: #E50914
--netflix-dark: #141414
```

---

## 🎨 Design Features

### Colors

- **Background**: `#141414` (Netflix dark)
- **Accent**: `#E50914` (Netflix red)
- **Text**: `#ffffff` (white)
- **Secondary Text**: `#b3b3b3` (gray)

### Animations

- Card hover: Scale up 1.08x + shadow glow
- Icon hover: Scale 1.15x + rotate 10° + platform name appears
- Navbar links: Red underline on hover
- All transitions: 0.3s ease

### Responsive Breakpoints

- Desktop: 1920px+
- Laptop: 1024px
- Tablet: 768px
- Mobile: 480px

---

## 🚀 Routes

Navigate to these URLs (after visiting `/recruiter`):

| Route                   | Page        |
| ----------------------- | ----------- |
| `/recruiter`            | Home (main) |
| `/recruiter/skills`     | Skills      |
| `/recruiter/projects`   | Projects    |
| `/recruiter/experience` | Experience  |
| `/recruiter/about`      | About Me    |

All sub-pages have back buttons to return home.

---

## 📸 Component Structure

```
RecruiterHome (Main wrapper)
├── Navbar (sticky top nav)
├── HeroVideo (video + overlay + title)
├── MyWeaponsRow (4 clickable cards)
│   └── Card (reusable card component)
├── ConnectMeRow (5 social icons)
│   └── ConnectIcon (reusable icon component)
└── Footer (bottom footer)
```

---

## 🎬 Next Steps

1. ✅ **Test the interface** - click around, hover, check responsiveness
2. 🎥 **Add your video** - replace placeholder with real MP4
3. 🖼️ **Add card images** - replace SVG with actual images
4. 🔗 **Update links** - LinkedIn, LeetCode, Instagram, etc.
5. 📝 **Fill content** - Skills, Projects, Experience details
6. 🎨 **Customize colors** (optional) - if you want different branding
7. 🚀 **Deploy** - push to GitHub and deploy to Netlify/Vercel

---

## 🆘 Troubleshooting

### Dev server won't start?

```bash
# Kill any running Node processes
Get-Process node -ErrorAction SilentlyContinue | Stop-Process -Force
npm run dev
```

### Styles not loading?

```bash
# Clear node_modules and reinstall
rm -r node_modules
npm install
npm run dev
```

### Routes not working?

Make sure you're visiting `/recruiter` (not just `/`)

---

## 📦 Build & Deploy

```bash
# Build for production
npm run build

# Test production build locally
npm run preview

# Deploy (example: Netlify)
# Push to GitHub, connect to Netlify, auto-deploys from main branch
```

---

## 💡 Pro Tips

- **Video file format**: Use MP4 (H.264 codec) for best browser support
- **Image sizes**: 800x400px works great for card images
- **Icon updates**: Easily swap emoji (🔴💻📊) with actual SVG icons
- **Color scheme**: The Netflix red (#E50914) looks great, but you can theme it!
- **Mobile test**: Open DevTools (F12) → Toggle device toolbar (Ctrl+Shift+M)

---

## 🎉 You're All Set!

Your Netflix-style recruiter portfolio is ready to impress!

**Start the dev server and visit `http://localhost:5173/recruiter` to see it in action.** 🚀
