# Hanna Östling — CV Website

This is a personal CV website built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). It serves as a modern alternative to a traditional PDF CV, and is also intended to demonstrate my skills in React and web development. The site supports both Swedish and English and includes sections for About, Work Experience, Education, and Recommendations.

## ✨ Features

- 🌐 Multilingual support (🇸🇪 Swedish / 🇬🇧 English)
- 🌗 Light and dark mode (respects system preference)
- 🧩 Modular React components
- ⚙️ Responsive layout with custom CSS
- ♿ Accessibility-conscious markup (semantic HTML, landmarks, headings, focus outlines, hidden decorative images)
- 🖨️ PDF export with custom `@media print` styling
- 📅 Smart date formatting with helper function (e.g. “Present” for ongoing positions)
- ✍️ Recommendation section with expandable text (excluded from PDF export)

## 🚀 Tech Stack

- **Next.js App Router**
- **TypeScript**
- **TailwindCSS** _(included but minimal usage)_
- **Custom global CSS**
- **React Hooks** (useEffect, useRef, useState) for interactivity

## 📂 Structure

```
public/         # Assets like images
src/            # Source code
├── app/        # Pages and layout
├── components/ # Reusable UI sections (About, Experience, Recommendations, etc.)
├── data/       # Static content (localized)
├── lib/        # Helper functions (e.g. date formatting)
```

## ⚙️ Getting Started

Install dependencies:

```bash
npm install
```

Run locally:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## 📄 PDF Export

This CV can be exported as a print-optimized PDF using a built-in **“Export as PDF”** button. The layout is customized using `@media print` CSS to:

- Remove browser margins (as far as browsers allow)
- Allow full-width layout on paper (desktop only)
- Hide non-essential elements (e.g. recommendations, language switcher, export button)
- Preserve visual consistency across print and web

> 🖥️ **Note:** The export button is hidden on mobile devices to prevent degraded PDF output. Mobile browsers often apply fixed margins and ignore background styling during printing, which may lead to unexpected results. For best results, export from a desktop browser.

## 📝 Notes

- Dark mode is automatic based on system settings
- Image sizes are optimized for performance
- No third-party **state** libraries used – everything is kept simple and modular using native React hooks
- Recommendations are visible on the web version but excluded from PDF export to keep the CV concise
