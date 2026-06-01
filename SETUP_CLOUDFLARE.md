# Lumen - Cloudflare Pages Deployment Guide

## ✅ Configuration Complete

Your Lumen project has been configured for seamless deployment to Cloudflare Pages via GitHub. Here's what has been set up:

## 📁 Files Created/Modified

### New Files Created:
1. **`.github/workflows/deploy.yml`** - GitHub Actions CI/CD pipeline
2. **`CLOUDFLARE_DEPLOYMENT.md`** - Detailed setup instructions
3. **`wrangler.toml`** - Cloudflare Pages configuration
4. **`.dev.vars.example`** - Example environment variables

### Files Modified:
1. **`wrangler.jsonc`** - Updated with proper Pages configuration
2. **`package.json`** - Added deployment scripts and Cloudflare dependencies
3. **`tsconfig.json`** - Added Cloudflare Workers types

## 🚀 Quick Start (3 Steps)

### Step 1: Create Cloudflare API Token
1. Go to: https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Select template "Cloudflare Pages – Deployment Token"
4. Grant these permissions:
   - Account → Cloudflare Pages (Read & Edit)
   - Account → Account Settings (Read)
5. Copy the token

### Step 2: Get Your Cloudflare Account ID
1. Visit: https://dash.cloudflare.com/
2. Your Account ID appears on the dashboard
3. It's also in any page URL: `https://dash.cloudflare.com/{ACCOUNT_ID}/...`

### Step 3: Add GitHub Secrets
1. Go to your GitHub repo → Settings → Secrets and variables → Actions
2. Click "New repository secret" and add:
   - **Name:** `CLOUDFLARE_API_TOKEN` | **Value:** (paste your token)
   - **Name:** `CLOUDFLARE_ACCOUNT_ID` | **Value:** (paste your Account ID)

## 📋 Available npm Scripts

```bash
# Build for production
npm run build

# Deploy to Cloudflare Workers (advanced)
npm run deploy

# Build and deploy in one command
npm run build:cf

# Local development
npm run dev

# Check for linting issues
npm run lint

# Format code
npm run format
```

## 📦 Packages Added

- **wrangler** ^3.45.2 - Cloudflare CLI tool
- **@cloudflare/workers-types** ^4.20250428.0 - Type definitions

## 🔄 How It Works

### Automatic Deployment Flow:
```
Push to GitHub (main branch)
          ↓
GitHub Actions triggered
          ↓
Node.js 20 environment setup
          ↓
npm install (with cache)
          ↓
npm run build (creates dist/client & dist/server)
          ↓
Deploy to Cloudflare Pages
          ↓
Live on: https://lumen.pages.dev
```

### Manual Local Deployment:
```bash
# Build locally
npm run build

# Deploy
npm run deploy
# or
npm run build:cf
```

## 🌐 Your Site URLs

After first deployment:
- **Preview URL:** `https://[branch-name].lumen.pages.dev`
- **Production URL:** `https://lumen.pages.dev`
- **Custom Domain:** Configure in Cloudflare Pages dashboard

## 🛠️ Environment Variables

### For Cloudflare Pages:
1. Go to Pages project → Settings → Environment variables
2. Add variables separately for **production** and **preview** environments

### For Local Development:
1. Copy `.dev.vars.example` to `.dev.vars`
2. Add your local environment variables
3. `.dev.vars` is already in `.gitignore` (won't be committed)

## ✨ Features

- ✅ Automatic deployment on push to main branch
- ✅ Pull request preview deployments
- ✅ TypeScript type checking for Cloudflare Workers
- ✅ Server-side rendering with TanStack Start
- ✅ React 19 with latest features
- ✅ Tailwind CSS 4 for styling
- ✅ Full TypeScript support

## 📚 Key Configuration Files

| File | Purpose |
|------|---------|
| `wrangler.jsonc` | Main Cloudflare Workers config |
| `wrangler.toml` | Pages environment variables |
| `.github/workflows/deploy.yml` | CI/CD pipeline |
| `vite.config.ts` | Build configuration |
| `tsconfig.json` | TypeScript settings |

## 🧪 Testing Locally

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Verify the build output
ls -la dist/
# Should show:
# - dist/client/  (static files)
# - dist/server/  (server bundle)
```

## 🔍 Troubleshooting

### Build Fails
- Check Node.js version: `node --version` (need v20+)
- Ensure dependencies are installed: `npm install`
- Check TypeScript errors: `npm run lint`

### Secrets Not Working
- Verify secret names exactly match (case-sensitive):
  - `CLOUDFLARE_API_TOKEN`
  - `CLOUDFLARE_ACCOUNT_ID`
- Wait 30 seconds after adding secrets
- Retrigger the workflow by pushing again

### Deployment Doesn't Start
- Check GitHub Actions tab for errors
- Verify `main` branch has your latest code
- Ensure secrets are properly set

### Preview URL Not Working
- Wait 2-3 minutes for initial deployment
- Check Cloudflare Pages dashboard for errors
- Verify `dist/client` folder isn't empty

## 📖 Additional Resources

- [Cloudflare Pages Docs](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Docs](https://developers.cloudflare.com/workers/cli-wrangler/)
- [TanStack Start Docs](https://tanstack.com/start/latest)
- [GitHub Actions Docs](https://docs.github.com/en/actions)

## 🎯 Next Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "chore: configure Cloudflare Pages deployment"
   git push origin main
   ```

2. **Add GitHub Secrets** (if not done yet)
   - Go to repo Settings → Secrets and variables → Actions
   - Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID`

3. **Verify First Deployment**
   - Watch GitHub Actions tab for workflow execution
   - Check Cloudflare Pages dashboard
   - Visit `https://lumen.pages.dev` to verify

4. **Set Custom Domain** (optional)
   - In Cloudflare Pages → Settings → Custom domains
   - Add your domain and update DNS records

## ❓ Questions?

Refer to:
- [CLOUDFLARE_DEPLOYMENT.md](CLOUDFLARE_DEPLOYMENT.md) - Detailed setup
- GitHub Actions logs - Deployment details
- Cloudflare Pages dashboard - Deployment history

---

**Your project is now ready for production deployment!** 🚀
