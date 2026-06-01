# 🎯 Cloudflare Setup Checklist

Complete these steps to go live on Cloudflare Pages:

## Phase 1: Preparation ✅ (Already Done)
- [x] Updated `wrangler.jsonc` with Cloudflare Pages config
- [x] Created GitHub Actions deployment workflow
- [x] Added deployment scripts to `package.json`
- [x] Added `wrangler` and `@cloudflare/workers-types` packages
- [x] Installed all dependencies

## Phase 2: Cloudflare Account Setup ⏳ (YOU DO THIS)
- [ ] Create Cloudflare account at https://dash.cloudflare.com
- [ ] Go to https://dash.cloudflare.com/profile/api-tokens
- [ ] Create API Token with "Cloudflare Pages – Deployment Token" template
- [ ] Copy and save your **API Token** securely
- [ ] Copy your **Account ID** from the dashboard

## Phase 3: GitHub Configuration ⏳ (YOU DO THIS)
- [ ] Push this code to GitHub repository (if not already done)
- [ ] Go to GitHub repo → Settings → Secrets and variables → Actions
- [ ] Add secret: `CLOUDFLARE_API_TOKEN` = (your token)
- [ ] Add secret: `CLOUDFLARE_ACCOUNT_ID` = (your account ID)

## Phase 4: First Deployment ⏳ (YOU DO THIS)
- [ ] Verify code is pushed to `main` branch
- [ ] Go to GitHub Actions tab
- [ ] Watch the "Deploy to Cloudflare Pages" workflow
- [ ] Wait for ✅ completion (usually 2-3 minutes)
- [ ] Visit `https://lumen.pages.dev` to verify live site

## Phase 5: Configure Custom Domain (Optional) ⏳
- [ ] Go to Cloudflare dashboard → Pages → Your Project
- [ ] Click "Settings" → "Custom domains"
- [ ] Add your domain (e.g., lumen.com)
- [ ] Follow DNS setup instructions
- [ ] Wait for DNS propagation (up to 24 hours)

## Phase 6: Set Environment Variables (If Needed) ⏳
- [ ] Go to Pages project → Settings → Environment variables
- [ ] Add variables for **production** environment
- [ ] Add variables for **preview** environment
- [ ] Save and redeploy if needed

## Quick Reference

### Get Your API Token
1. https://dash.cloudflare.com/profile/api-tokens
2. Create Token → Template → Cloudflare Pages
3. Copy token

### Get Your Account ID
1. https://dash.cloudflare.com/
2. Look at dashboard or URL: `dash.cloudflare.com/{ACCOUNT_ID}`

### Add GitHub Secrets
1. GitHub repo → Settings → Secrets and variables → Actions
2. New Repository Secret
3. Name: `CLOUDFLARE_API_TOKEN`, Value: (paste)
4. Name: `CLOUDFLARE_ACCOUNT_ID`, Value: (paste)

### Test Deployment
```bash
git add .
git commit -m "ready for deployment"
git push origin main
# Watch GitHub Actions → Deploy to Cloudflare Pages
# Your site goes live at https://lumen.pages.dev
```

## Build Commands Reference

```bash
# Build for production
npm run build

# Deploy manually to Cloudflare
npm run deploy

# Build and deploy in one command
npm run build:cf

# Local development
npm run dev

# Verify code quality
npm run lint
```

## Status Check

After completing all steps:
- ✅ GitHub Actions workflow runs on every push to `main`
- ✅ Automatic deployment to Cloudflare Pages
- ✅ Your site is live and accessible
- ✅ Pull requests get preview deployments

---

## Need Help?

- **Detailed Guide:** See [CLOUDFLARE_DEPLOYMENT.md](CLOUDFLARE_DEPLOYMENT.md)
- **Full Setup Info:** See [SETUP_CLOUDFLARE.md](SETUP_CLOUDFLARE.md)
- **GitHub Actions Logs:** View in your repo's Actions tab
- **Cloudflare Logs:** https://dash.cloudflare.com/?to=/:account/pages

---

**You're all set! Start with Phase 2 above.** 🚀
