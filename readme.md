# Vitepress on GitHub Pages with Picobase

This is a sample repository to show how to deploy a Vitepress site on GitHub Pages using Picobase.

## How to Setup

- Create a new github repo
- Init a new Vitepress project
- Add the github deploy workflow (see .github/workflows/deploy.yml)
- Enable GitHub Pages in the Github repo settings
- Update the base property in .vitepress/config.ts to match your repo name (e.g. base: /decap-picobase-vitepress/)
- Add a decap config file to the public folder (see docs/public/decapconfig.yml). For now only verified to work with the github backend.
- Push your changes and if things are working, you should see your site deployed to github pages (https://<your-username>.github.io/<your-repo-name>)

## Picobase setup

- Install the decap cms app on picobase
- Add the full public url as the DECAP_CONFIG_URL env variable to the picobase app (e.g. https://<your-username>.github.io/<your-repo-name>/decapconfig.yml)

## Deploy to other hosts (cloudflare, netlify, vercel etc)

You can follow the [Vitepress deploy docs](https://vitepress.dev/guide/deploy) for a guide on how to deploy to various other hosts.
