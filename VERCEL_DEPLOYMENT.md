# Deploying to Vercel

This is a [TanStack Start](https://tanstack.com/start) app (Vite + Nitro, SSR).
It deploys to Vercel using Nitro's built-in `vercel` preset, which emits the
Vercel [Build Output API](https://vercel.com/docs/build-output-api) format that
Vercel consumes natively — no `@vercel/*` adapter or extra build step required.

## One-time setup

### Option A — Git integration (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In the [Vercel dashboard](https://vercel.com/new), **Import** the repo.
3. Vercel reads `vercel.json`:
   - **Build Command:** `npm run build`
   - **Install Command:** `npm ci`
   - **Framework Preset:** Other (`framework: null`)
4. Click **Deploy**. Every push to the production branch deploys to production;
   pull requests get preview deployments automatically.

### Option B — Vercel CLI

```bash
npm i -g vercel        # or use the local devDependency
vercel login
vercel link            # link this folder to a Vercel project (first time)
vercel                 # deploy a preview
vercel --prod          # deploy to production
```

## How the build works

- `npm run build` runs `vite build`. The TanStack Start plugin is configured
  with `target: "vercel"` (see [vite.config.ts](vite.config.ts)), so Nitro
  builds for the Vercel preset.
- Vercel also sets `NITRO_PRESET=vercel` automatically during its build, so the
  output is Vercel-compatible whether built locally or on Vercel.
- The build output lands in `.vercel/output` (gitignored). Vercel picks it up
  directly via the Build Output API.

## Environment variables

- **Server-only secrets:** add them in **Vercel → Project → Settings →
  Environment Variables**. Read them at runtime via `process.env.*`
  (see [src/lib/config.server.ts](src/lib/config.server.ts)).
- **Public values** (exposed to the browser) must be prefixed `VITE_` and read
  via `import.meta.env.VITE_*`.
- For local development, put values in `.env.local` (gitignored).

## Notes

- No `vercel.json` `routes`/`functions` config is needed — Nitro generates the
  serverless function and static-asset routing for you.
- Custom domains, deployment protection, and analytics are configured in the
  Vercel dashboard.
