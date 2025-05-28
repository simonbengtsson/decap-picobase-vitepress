# Vitepress with Decap CMS as Lumo app

This is a sample repository to show how to deploy a Vitepress site on Github Pages and edit the content with Decap CMS hosted as a Lumobase app.

## Vitepress site setup

- Create and clone a new Github repo
- Init a new Vitepress project ([guide](https://vitepress.dev/guide/getting-started))
- Enable GitHub Pages in the Github repo settings
- Add a Github deploy workflow (see `.github/workflows/deploy.yml`)
- Update the base property in `.vitepress/config.ts` to match your repo name (e.g. `base: /lumo-decap-vitepress/`)
- Push your changes and if things are working you should see your site deployed to github pages (`https://<your-username>.github.io/<your-repo-name>`)
- Optionally you can also setup a custom domain for your github pages site (see [Github docs](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site)).

## Lumo Decap setup

- Add a `decapconfig.yml` file to your repository with with your decap config (see the decapconfig.yml in this repo for a minimal config file for Vitepress). Note that the backend name should be set to "lumo" but that the options for the backend otherwise are the same as for the official Decap Github backend. Note that the repo field will be overriden to what you select during Lumo Decap setup so can be omitted.
- Install the Lumo Decap app ([Install Lumo Decap](https://lumoapps.me/dash?appUrl=https%3A%2F%2Fgithub.com%2Fsimonbengtsson%2Flumo-decap%2Freleases%2Flatest%2Fdownload%2Fapp.lumo)) and add the url to your Github repo during the setup.
