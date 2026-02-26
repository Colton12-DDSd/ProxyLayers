# ProxyLayers Website

Production-ready multi-page marketing website for the fictional enterprise tech startup **ProxyLayers** built with **Next.js 14 App Router**, **TypeScript**, and **Tailwind CSS**.

## Local development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the development server:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000).

## Deploy to Vercel (zero config)

1. Push this repository to GitHub/GitLab/Bitbucket.
2. Import the repo in Vercel.
3. Keep framework preset as **Next.js** (auto-detected).
4. Click **Deploy**.

No environment variables or custom build settings are required.

## Where to edit partner links

Partner link URLs are currently placeholder `"#"` values in:

- `app/partners/page.tsx`

Update each object's `link` field to the final destination URL.

## Where to swap the logo

The text + SVG placeholder logo lives in:

- `components/logo.tsx`

Replace the inline SVG and/or wordmark text to use your production branding.
