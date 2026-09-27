# neradev.com

Personal portfolio of Huy Nguyen. Static site built with Next.js (App Router, static
export), TypeScript and Tailwind CSS, deployed to Cloudflare Workers at https://neradev.com.

## Editing content

Everything the site says lives in one file: [`config/resume.ts`](config/resume.ts). It mirrors
the resume, so when the resume changes, change that file and nothing else. Site-wide
details (name, title, email, social links, optional resume PDF) are in
[`config/site.ts`](config/site.ts); page titles and the navigation order are in
[`config/pages.ts`](config/pages.ts) and [`config/routes.ts`](config/routes.ts).

Routes: `/`, `/about`, `/experience`, `/projects`, `/skills`, `/education`.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run lint
npm run build      # static export into ./out
npx serve out      # preview the export with clean URLs
```

## Deploy

Cloudflare Workers with static assets, connected to this repository (Workers Builds).
`wrangler.jsonc` tells the Worker to serve `./out`; there is no server code.

| Setting | Value |
|---|---|
| Production branch | `main` |
| Build command | `npm run build` |
| Deploy command | `npx wrangler deploy` |
| Build variable | `NODE_VERSION=22` |

Custom domain `neradev.com` (apex) plus a redirect rule from `www.neradev.com`.
Preview the Worker locally after a build with `npx wrangler dev`.

## Design credits

Layout, theme tokens and navigation follow
[namanbarkiya/minimal-next-portfolio](https://github.com/namanbarkiya/minimal-next-portfolio) (MIT).
Section content blocks (numbered project cards, timeline, education cards) follow
[RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio) (MIT).
Heading font is [Cal Sans](https://github.com/calcom/font) (SIL OFL).
