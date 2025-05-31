# Vitepress with Decap CMS on Lumobase

This is an example [Vitepress](https://vitepress.dev/) site that is deployed to GitHub Pages with it's content editable with a [Decap CMS app](https://github.com/simonbengtsson/lumo-decap) installed on [Lumobase](https://lumobase.co).

## Setting up a Vitepress site

You can follow the [official Vitepress deploy guide](https://vitepress.dev/guide/deploy) for how to create and deploy your website on any hosting provider. Or you can follow these minimal steps for GitHub Pages:

- Create and clone a GitHub repo
- Init a new Vitepress project ([guide](https://vitepress.dev/guide/getting-started))
- Update the base property in `.vitepress/config.ts` to match your repo name (e.g. `base: /<your-repo-name>`)
- Add a GitHub deploy workflow (see [.github/workflows/deploy.yml](https://github.com/simonbengtsson/lumo-decap-vitepress/blob/main/.github/workflows/deploy.yml))
- Enable GitHub Pages in the GitHub repository settings (and add a custom domain if you want)
- Push your changes and if things are working you should see your site deployed to github pages (`https://<your-username>.github.io/<your-repo-name>`)

## Setting up Decap CMS on Lumobase
- Add a `decapconfig.yml` file to the root of your website repository (see [decapconfig.yml](https://github.com/simonbengtsson/lumo-decap-vitepress/blob/main/decapconfig.yml)). This is a normal Decap config file, but it will always use a custom Lumobase backend. You can set the same options such as branch name etc as for the official [github backend](https://decapcms.org/docs/github-backend/).
- Install the Decap CMS app on Lumobase ([Install Decap CMS](https://lumobase.co/dash?appUrl=https%3A%2F%2Fgithub.com%2Fsimonbengtsson%2Flumo-decap%2Freleases%2Flatest%2Fdownload%2Fapp.lumo)) and follow the setup instructions.
