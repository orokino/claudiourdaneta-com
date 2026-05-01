# claudiourdaneta.com

Personal site. Static Astro, deployed to Cloudflare Pages.

## Local development

```bash
npm install
npm run dev
```

Opens at http://localhost:4321.

## Build

```bash
npm run build
```

Output in `dist/`.

## Deploy to Cloudflare Pages

### One-time setup

1. Push this repo to GitHub (any visibility).
2. Cloudflare dashboard → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**.
3. Select the repository, then set:
   - **Framework preset:** Astro
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
   - **Environment variables:** `NODE_VERSION=20`
4. Click **Save and Deploy**. First build takes ~1 minute. You'll get a `<project>.pages.dev` URL.

### Custom domain — claudiourdaneta.com

1. In your Pages project → **Custom domains** → **Set up a custom domain**.
2. Add `claudiourdaneta.com`, then repeat for `www.claudiourdaneta.com`.
3. **DNS:**
   - **If the domain is on Cloudflare DNS:** records are added automatically. Done.
   - **If the domain is registered/managed elsewhere:** add a `CNAME` record at your DNS provider pointing `claudiourdaneta.com` (and `www`) to `<project>.pages.dev`. Some registrars require a flattened/ALIAS record at the apex — Cloudflare's UI will tell you exactly what to add.
4. SSL provisions automatically in ~5 minutes.

### Subsequent deploys

Push to `main`. Cloudflare Pages rebuilds and deploys automatically.

## TODO before going live

- Replace placeholder social URLs in `src/pages/index.astro` (`github`, `x`, `linkedin` handles assumed `claudiourdaneta`).
- Confirm `caua1809@gmail.com` is the address you want surfaced, or swap.
- Add real `writing/` entries when you publish them.
