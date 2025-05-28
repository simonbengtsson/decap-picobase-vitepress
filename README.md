# Vitepress with Decap CMS on Lumobase

This is an example Vitepress site that is deployed to Github Pages with it's content editable with Decap CMS installed on Lumobase.

## Vitepress site setup

- Create and clone a new Github repo
- Init a new Vitepress project ([guide](https://vitepress.dev/guide/getting-started))
- Enable GitHub Pages in the Github repo settings
- Update the base property in `.vitepress/config.ts` to match your repo name (e.g. `base: /lumo-decap-vitepress/`)
- Add a Github deploy workflow (see `.github/workflows/deploy.yml`)
- Push your changes and if things are working you should see your site deployed to github pages (`https://<your-username>.github.io/<your-repo-name>`)
- Optionally you can setup a custom domain in repository settings -> Pages

## Decap CMS setup on Lumobase
- Add a `decapconfig.yml` file to the root of your repository (see the decapconfig.yml in this repo for a minimal config file for Vitepress). This is a normal Decap config file, but you can omit the backend section since it will always be overriden by custom Lumobase backend.
- Install the Decap CMS app on Lumobase ([Install Decap CMS](https://lumoapps.me/dash?appUrl=https%3A%2F%2Fgithub.com%2Fsimonbengtsson%2Flumo-decap%2Freleases%2Flatest%2Fdownload%2Fapp.lumo)) and follow the setup instructions.
