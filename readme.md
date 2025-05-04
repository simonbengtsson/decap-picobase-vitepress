# Vitepress on GitHub Pages with Picobase

This is a sample repository to show how to deploy a Vitepress site on GitHub Pages using Picobase.

## How to Setup

- Create a new github repo
- Init a new Vitepress project
- Add the github deploy workflow (see .github/workflows/deploy.yml)
- Enable GitHub Pages in the Github repo settings
- Update the base property in .vitepress/config.ts to match your repo name (e.g. base: /decap-picobase-vitepress/)
- Push your changes and if things are working, you should see your site deployed to github pages (https://<your-username>.github.io/<your-repo-name>)

In this example

## Deploy to other hosts (cloudflare, netlify, vercel etc)

You can follow the [Vitepress deploy docs](https://vitepress.dev/guide/deploy) for a guide on how to deploy to various other hosts.
