# Phone-Friendly Deployment Guide

## Current status

The MVP can run as a static/Next.js app and does not need Supabase yet. The CTA uses mailto to Leon's project email:

`kaizenworkflow@proton.me`

## From phone

1. Create GitHub repo:
   - GitHub app/browser → New repository
   - Name: `agent-cost-optimizer` or `aicost-rescue`
   - Public or private
   - Send repo URL to Hermes

2. Create Vercel account:
   - vercel.com → Sign in with GitHub
   - Import the repo after code is pushed

3. Deploy:
   - No environment variables required for v1
   - Framework: Next.js
   - Build command: `npm run build`

## From laptop

```bash
gh auth login
gh repo create agent-cost-optimizer --public --source=. --push
```

Then import into Vercel.

## Optional next additions

- Tally/Typeform form instead of mailto
- Stripe Payment Link for AUD $149 / AUD $499 audit
- Supabase lead capture
- PDF report generator
