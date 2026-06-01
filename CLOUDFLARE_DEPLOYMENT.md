# Cloudflare Deployment Setup Guide

## Prerequisites

1. **Cloudflare Account**: Sign up at [https://dash.cloudflare.com](https://dash.cloudflare.com)
2. **GitHub Repository**: Push this project to GitHub
3. **Node.js**: Version 20 or higher

## Setup Steps

### 1. Configure GitHub Secrets

Go to your GitHub repository settings and add these secrets:

- **CLOUDFLARE_API_TOKEN**: Your Cloudflare API token
  - Generate at: https://dash.cloudflare.com/profile/api-tokens
  - Permissions needed: 
    - Account → Cloudflare Pages (Read & Edit)
    - Account → Account Settings (Read)

- **CLOUDFLARE_ACCOUNT_ID**: Your Cloudflare Account ID
  - Find at: https://dash.cloudflare.com/
  - Located in the URL or account overview

### 2. Create Cloudflare API Token

1. Go to https://dash.cloudflare.com/profile/api-tokens
2. Click "Create Token"
3. Use template "Cloudflare Pages – Deployment Token" or customize with:
   - **Account → Cloudflare Pages → Edit**
   - **Account → Account Settings → Read**
4. Copy and save the token securely

### 3. Get Your Account ID

1. Visit https://dash.cloudflare.com/
2. Your Account ID is displayed on the dashboard
3. Also visible in any page URL: `https://dash.cloudflare.com/{ACCOUNT_ID}/...`

### 4. Create Cloudflare Pages Project

1. Go to https://dash.cloudflare.com/?to=/:account/pages
2. Click "Create a project"
3. Connect your GitHub repository
4. Configuration:
   - **Project name**: `lumen` (matches wrangler.jsonc)
   - **Production branch**: `main`
   - **Build command**: `npm run build`
   - **Build output directory**: `dist/client`
   - **Root directory** (if needed): `/`

### 5. Deploy Local Changes

```bash
# Install dependencies
npm install

# Build the project
npm run build

# Deploy to Cloudflare Workers (optional, for server functions)
npm run deploy
```

### 6. GitHub Push & Auto Deploy

Once everything is configured:

```bash
# Make changes to your code
git add .
git commit -m "Your changes"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build your project
2. Deploy to Cloudflare Pages
3. Show deployment status in GitHub

## Environment Variables

If you need environment variables in your Cloudflare Pages:

1. Go to your Pages project settings
2. Navigate to "Settings" → "Environment variables"
3. Add your variables for `production` and `preview`

## Verify Deployment

- Check deployment status: https://dash.cloudflare.com/?to=/:account/pages
- Your site URL: `https://lumen.pages.dev` (or your custom domain)
- View logs: GitHub Actions tab in your repository

## Custom Domain Setup

1. In Cloudflare Pages project settings
2. Click "Custom domains"
3. Add your domain
4. Update DNS records as instructed

## Troubleshooting

### Build Fails
- Check `npm run build` runs locally: `npm run build`
- Verify Node.js version: `node --version` (should be 18+)
- Check GitHub Actions logs for detailed errors

### Deployment Issues
- Verify API token has correct permissions
- Check Account ID is correct
- Ensure `wrangler.jsonc` has correct project name
- Review Cloudflare Pages build logs

### Preview Environment Variables Not Working
- Add same variables to preview environment in Pages settings
- Redeploy the preview deployment

## Additional Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Wrangler CLI Reference](https://developers.cloudflare.com/workers/cli-wrangler/)
- [TanStack Start with Cloudflare](https://tanstack.com/start/latest/docs/framework/react/guide/ssr)
