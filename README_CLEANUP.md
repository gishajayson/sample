# CFC WEBSITE (Clean Copy)

This folder is a cleaned version of the project for GitHub Pages.

## What was cleaned
- Removed duplicate folder: `cfctrust-static_clean/`
- Removed build output: `client/dist/`
- Removed dependencies: `node_modules/`, `client/node_modules/`
- Removed caches: `.vite/`
- Removed local env file: `client/.env` (keep `.env.example`)

## How to run locally
```bash
cd client
npm install
npm run dev
```

## How to deploy (GitHub Pages)
Deployment is handled by `.github/workflows/deploy.yml` on push to `main`.

After pushing, open:
- https://<your-username>.github.io/<repo-name>/

## Notes
- Vite base is set to `./` in `client/vite.config.js` so it works on GitHub Pages subpaths and later on your custom domain.
