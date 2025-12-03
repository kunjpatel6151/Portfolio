# Netflix-Style Recruiter Portfolio Interface

## Overview

A fully functional, Netflix-inspired recruiter portal built with **React + Vite + TypeScript**. The interface features a dark theme with Netflix-red accents, smooth animations, and responsive design across all devices.

## 🎯 Features Implemented

### ✅ **Navbar (Top Navigation)**

- **Sticky positioning** - stays at top while scrolling
- **Netflix-style branding** - "Kunj Patel" in red (#E50914)
- **Navigation links**: Home | Skills | Projects | Experience | About Me
- **Smooth hover effects** - underline animations with red accent
- **Responsive** - collapses on mobile

### ✅ **Hero Section (Video Background)**

- **Full-width auto-playing video** - muted + loop enabled
- **Dark gradient overlay** - Netflix-style semi-transparent background
- **Hero title**: "Welcome Recruiter" (red text with shadow)
- **Hero subtitle**: Descriptive text
- **Mobile-responsive** - adjusts height and text size

### ✅ **My Weapons Section**

Netflix-style card row with 4 clickable cards:

- **Skills** 💡
- **Projects** 🚀
- **Experience** 🏆
- **About Me** 👤

**Card Features:**

- Hover animation (scale up 1.08x)
- Dark overlay on hover revealing card title
- Smooth transitions and shadows
- SVG emoji placeholders (easily replaceable with real images)
- Routes to respective pages

### ✅ **Connect Me Section**

Social media icons with Netflix-style card layout:

- **Codeforces** 🔴
- **GeeksforGeeks** 💻
- **LeetCode** 📊
- **LinkedIn** 💼
- **Instagram** 📸

**Icon Features:**

- Circular gradient backgrounds (color-coded per platform)
- Hover enlargement (scale 1.15x) + platform name reveal
- External links that open in new tab
- Smooth animations with shadow effects

### ✅ **Footer**

- **Dark theme** matching Netflix footer
- Your name in red
- Copyright year (auto-updated)
- Optional footer links (Privacy, Terms, Contact)

### ✅ **Routing**

Complete route setup with sub-pages:

```
/recruiter              → Home (main page with all sections)
/recruiter/skills       → Skills page (placeholder)
/recruiter/projects     → Projects page (placeholder)
/recruiter/experience   → Experience page (placeholder)
/recruiter/about        → About Me page (placeholder)
```

### ✅ **Styling**

- **Color Scheme:**
  - Dark background: `#141414`
  - Netflix red: `#E50914`
  - Text: `#ffffff` (primary), `#b3b3b3` (secondary)
- **Responsive grid layouts** for cards and icons
- **Mobile breakpoints**: 1024px, 768px, 480px
- **Smooth transitions** on all interactive elements

## 📁 Project Structure

```
src/
├── components/
│   ├── recruiter/
│   │   ├── RecruiterHome.tsx       # Main home page wrapper
│   │   ├── Navbar.tsx              # Top navigation bar
│   │   ├── HeroVideo.tsx           # Hero section with video
│   │   ├── Card.tsx                # Reusable card component
│   │   ├── MyWeaponsRow.tsx        # "My Weapons" section
│   │   ├── ConnectIcon.tsx         # Social icon component
│   │   ├── ConnectMeRow.tsx        # "Connect Me" section
│   │   ├── SkillsPage.tsx          # Skills page
│   │   ├── ProjectsPage.tsx        # Projects page
│   │   ├── AboutPage.tsx           # Experience & About pages
│   │   └── Footer.tsx              # Footer component
│   └── Recruiter.tsx               # Recruiter router
├── styles/
│   └── recruiter.css               # All styling (Netflix theme)
├── App.tsx                          # Main app with routes
└── main.tsx                         # Entry point

public/
└── videos/
    └── placeholder-hero.svg         # Placeholder video (replace with real MP4)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation & Running

```bash
cd client
npm install
npm run dev
```

Visit `http://localhost:5173/recruiter` in your browser.

### Building for Production

```bash
npm run build
npm run preview
```

## 🎨 Customization Guide

### 1. **Replace Placeholder Video**

Replace `/public/videos/placeholder-hero.svg` with your actual video:

```tsx
// In HeroVideo.tsx, change:
src = "/videos/placeholder-hero.mp4"; // Your actual video file
```

### 2. **Update "My Weapons" Cards**

Replace SVG placeholders with real images in `MyWeaponsRow.tsx`:

```tsx
image: "path/to/your/image.jpg"; // Instead of data:image/svg
```

### 3. **Update Social Links**

Edit URLs in `ConnectMeRow.tsx`:

```tsx
url: "https://your-profile-link.com";
```

### 4. **Customize Colors**

Edit CSS variables in `recruiter.css`:

```css
:root {
  --netflix-red: #e50914; /* Change to your brand color */
  --netflix-dark: #141414; /* Background */
  --text-primary: #ffffff; /* Text color */
}
```

### 5. **Add Content to Sub-Pages**

Update the placeholder pages (`SkillsPage.tsx`, `ProjectsPage.tsx`, etc.) with actual content.

## 📱 Responsive Design

The interface is fully responsive with breakpoints:

- **Desktop**: 1920px+ (4 columns for cards)
- **Laptop**: 1024px (3-4 columns)
- **Tablet**: 768px (2 columns)
- **Mobile**: 480px (1-2 columns)

## ✨ Interactive Features

- **Sticky navbar** - always accessible
- **Smooth hover animations** - all interactive elements respond to hover
- **Card scaling** - "My Weapons" cards enlarge on hover
- **Icon rotation** - social icons rotate and scale on hover
- **Auto-playing video** - muted and looping
- **External links** - social icons open in new tabs
- **Responsive grid** - adapts to any screen size

## 🔧 Technologies Used

- **React 19.1.1** - UI library
- **TypeScript 5.8.3** - Type safety
- **React Router DOM 7.9.1** - Routing
- **Vite 7.1.6** - Build tool
- **Bootstrap 5.3.8** - Optional utility classes
- **CSS3** - Modern styling with flexbox/grid

## 📝 Notes

- All paths use relative imports for better maintainability
- CSS is organized with clear sections and comments
- Components are modular and reusable
- Netflix branding guidelines followed for aesthetic
- Mobile-first responsive approach

## 🎬 Next Steps

1. **Add real video file** to `/public/videos/`
2. **Replace placeholder images** in card sections
3. **Fill in sub-page content** (Skills, Projects, Experience, About)
4. **Add real social media links**
5. **Test on real devices** (mobile, tablet, desktop)
6. **Deploy to hosting** (Netlify, Vercel, GitHub Pages)

## 📞 Support

For issues or customization help, refer to the component files which are well-documented with clear structure and naming conventions.

---

**Built with ❤️ for recruiters who deserve a Netflix-level experience! 🎥**
