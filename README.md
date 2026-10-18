# Zaid Haque — Developer Portfolio

A responsive React + Vite + TypeScript developer portfolio with a premium dark navy/cyan design, project filtering, skills grouped by evidence, accessible navigation, reduced-motion support, SEO metadata, and a small Vitest test suite.

## Requirements

- Node.js 20.19+ or 22.12+ recommended for Vite 6
- npm
- Git (for version control and deployment)

Check your versions:

```bash
node -v
npm -v
```

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (normally `http://localhost:5173`).

## Quality checks

```bash
npm run lint
npm test
npm run build
npm run preview
```

`npm run build` runs the TypeScript project build and creates the production bundle in `dist/`.

## Before publishing

Search the codebase for placeholders:

```bash
grep -R "YOUR_USERNAME\|your.email@example.com\|https://www.linkedin.com/" -n src index.html
```

Update at least these files:

1. `src/data/projects.ts`
   - Replace placeholder GitHub URLs with each real repository.
   - Add a `demoUrl` only when that deployment is live and verified.
   - Keep project status honest.
2. `src/components/ContactSection.tsx`
   - Replace `your.email@example.com` with an email address you want public.
3. `src/components/HeroSection.tsx` and `src/components/ContactSection.tsx`
   - Replace the generic LinkedIn URL with your actual public profile.
4. `index.html`
   - Update title, description, and social metadata if your positioning changes.
5. `src/data/skills.ts`
   - Adjust qualitative proficiency labels to match your current abilities and keep evidence specific and accurate.
6. `public/resume.pdf`
   - Add your current PDF resume if you want to include a download link. The starter intentionally does not advertise a missing file.

## Add a resume link

After adding `public/resume.pdf`, add a link such as:

```tsx
<a href="/resume.pdf" download>Download resume</a>
```

Use a current resume and verify the file opens from the deployed site.

## Deploy to Vercel

1. Push this project to a GitHub repository.
2. Sign in to Vercel and import the repository.
3. Use the Vite preset (or configure manually):
   - Build command: `npm run build`
   - Output directory: `dist`
   - Install command: `npm install`
4. Deploy, then test the public URL on mobile and desktop.
5. Every time you push to the connected branch, Vercel can build and deploy the update.

## Deploy to Netlify

1. Import the GitHub repository into Netlify.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy and verify all external links and assets.

## Design and accessibility notes

- Semantic `header`, `nav`, `main`, `section`, `article`, and `footer` elements.
- Skip-to-content link, accessible mobile-menu state, visible focus rings, and live announcement for project filtering.
- `prefers-reduced-motion` disables scroll/transition effects.
- The project artwork is built with CSS and HTML; no third-party project screenshots are required.
- Skill labels are qualitative rather than unsupported numeric scores.
- External links opened in a new tab use `rel="noopener noreferrer"`.

## SEO notes

This starter includes a descriptive page title, meta description, Open Graph basics, a theme color, favicon, and social preview SVG. Before launch, update the public identity and canonical metadata. For a custom domain, add a canonical URL once the final domain is known. Consider generating a sitemap if you add more pages.

## Current limitations

- The contact section uses a `mailto:` link; it does not submit a server-side form.
- The GitHub/demo URLs for some sample projects are placeholders and are intentionally rendered as unavailable until replaced.
- This is a client-rendered Vite application, not a server-rendered site.
- Skills and project details are editable sample content. Verify all claims and URLs before sharing the portfolio professionally.
