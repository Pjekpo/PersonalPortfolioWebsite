  Resume
  - No public download link is provided.
  - Please message me if you’d like a copy of my CV.

  Storefront
  - The navbar includes a toggle between Portfolio and Storefronts.
  - The Storefront page starts with the intro line and then shows bold affiliate cards.
  - Edit items in `src/components/Storefront.tsx` (`items` array) with your titles, descriptions, tags, and URLs.
  - Link in bio: point to `/#storefront` to open the storefront page directly.

  ## Deployment (GitHub Pages via Actions)

  - The repo includes a workflow at `.github/workflows/deploy.yml` that builds the app with `vite` and deploys the `dist/` folder to GitHub Pages.
  - Ensure your repo’s Pages setting is set to "GitHub Actions" (Settings → Pages → Build and deployment → Source).
  - Push to the `main` branch (or run the workflow manually) to trigger a deploy.
  - Vite base is configured in `vite.config.ts` as `base: "/PersonalPortfolioWebsite/"` to match the repo name. If the repo name changes, update that value.
