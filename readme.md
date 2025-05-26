# Vitepress with Decap CMS as Lumo app

This is a sample repository to show how to deploy a Vitepress site on GitHub Pages and edit the content with Decap CMS hosted as a Lumo app.

## Github Pages setup (with automatic deployment)

- Create a new Github repo
- Init a new Vitepress project
- Add the Github deploy workflow (see .github/workflows/deploy.yml)
- Enable GitHub Pages in the Github repo settings
- Update the base property in .vitepress/config.ts to match your repo name (e.g. base: /lumo-decap-vitepress/)
- Push your changes and if things are working, you should see your site deployed to github pages (https://<your-username>.github.io/<your-repo-name>)
- Optionally you can also setup a custom domain for your github pages site (see [Github docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).

## Lumo setup

- Add a decap decapconfig.yml file to your repo with with your decap config (see the decapconfig.yml in this repo for a minimal config file for vitepress). Note that the backend config parts will be overridden by the custom Lumo backend so can be omitted.
- Install the Lumo Decap app (see the [Lumo Decap](https://github.com/simonbengtsson/lumo-decap))
