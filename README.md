# Hanna Östling — CV Website

This is a personal CV website built with [Next.js](https://nextjs.org/) and [TypeScript](https://www.typescriptlang.org/). It serves as a modern alternative to a traditional PDF CV, and is also intended to demonstrate my skills in React and web development. The site supports both Swedish and English and includes sections for About, Work Experience, Education, Recommendations, and Skills.

## ✨ Features

- 🌐 Multilingual support (🇸🇪 Swedish / 🇬🇧 English)
- 🌗 Light and dark mode (respects system preference)
- 🧩 Modular React components
- ⚙️ Responsive layout with custom CSS
- ♿ Accessibility-conscious markup (semantic HTML, landmarks, headings, focus outlines, hidden decorative images)
- 🖨️ PDF export with custom `@media print` styling
- 📅 Smart date formatting with helper function (e.g. “Present” for ongoing positions)
- ✍️ Recommendation section with expandable text (excluded from PDF export)
- 💡 Dedicated **Skills** section highlighting both technical and personal strengths
- 🧭 Custom hooks for navigation, scroll behavior, and print layout
- 🔄 Fetches data from Firestore with local fallback

## 💻 Tech Stack

- **Next.js App Router**
- **TypeScript**
- **Custom global CSS**
- **Custom React Hooks** (e.g. `useActiveSection`, `useMediaQuery`) for interactivity and responsiveness
- **next-intl** for locale routing and translations (`/` = Swedish, `/en` = English)
- **Firebase** (Firestore + client setup)
- **Framer Motion** for animations and transitions

## 📂 Structure

```
private/            # Service account keys or other local-only files (git-ignored)
public/             # Assets like images
scripts/            # Utility scripts (Firestore export)
src/                # Source code
├── app/            # App router pages and layouts
│   ├── [locale]/   # Locale-aware routes (/en, /sv, /)
│   └── layout.tsx  # Root layout (html/body)
├── components/     # Reusable UI components (About, Experience, Education, Buttons, etc.)
├── data/           # Static content with Translated fields
├── hooks/          # Custom hooks (e.g. clamp detection, media queries)
├── icons/          # SVG icon components (MenuIcon, CloseIcon, GlobeIcon, etc.)
├── i18n/           # Translation setup (next-intl messages, helpers)
├── lib/            # Helper functions (e.g. date formatting, string utilities)
```

## ⚙️ Getting Started

Install dependencies:

```bash
npm install
```

Create a `.env.local` file in the root of the project with your Firebase configuration variables for the client-side environment:

```
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

For scripts that run via Node (e.g. Firestore export scripts), place your service account key JSON file at `/private/serviceAccountKey.json` (this file is not checked into git).

Run locally:

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

## 📄 PDF Export

This CV can be exported as a print-optimized PDF using a built-in **“Export as PDF”** button. The layout is customized using `@media print` CSS to:

- Remove browser margins (as far as browsers allow)
- Allow full-width layout on paper (desktop only)
- Hide non-essential elements (e.g. recommendations, buttons)
- Preserve visual consistency across print and web
- Ensure certain sections always start on a new page using a `.page-break` class

> 🖥️ **Note:** The export button is hidden on mobile devices to prevent degraded PDF output. Mobile browsers often apply fixed margins and ignore background styling during printing, which may lead to unexpected results. For best results, export from a desktop browser.

## 📝 Notes

- Dark mode is automatic based on system settings
- Image sizes are optimized for performance
- No third-party **state** libraries used – everything is kept simple and modular using native React hooks
- Recommendations are visible on the web version but excluded from PDF export to keep the CV concise
- Local data is used as fallback when Firestore data is unavailable or offline

## 🚀 Deploy with FTP

1. Run `npm run build` in the terminal of this project to generate the static HTML files
2. Open and connect to your preferred FTP client (e.g. FileZilla)
3. In the **remote** pane, navigate to the remote directory
4. In the **local** pane, navigate to the `out/` folder of this project
5. Upload _all contents_ of the `out/` folder to the server
6. Visit your domain to see the changes live!
