# MazelClaw Splash (Next.js)

Next.js one-page splash site for **MazelClaw**, styled to closely match openclaw.ai with MazelClaw branding.

## Local

```bash
cd /Users/navi/.openclaw-meme1/mazelclaw
npm install
npm run dev
```

Open http://localhost:3000

## Build static export (for Cloudflare Pages)

```bash
npm run build
# static output in ./out
```

## Deploy

```bash
wrangler pages deploy out --project-name mazelclaw --branch main
```

## Repos

- Main: https://github.com/TalmudTech/mazelclaw
- Splash: https://github.com/TalmudTech/mazelclaw-splash
