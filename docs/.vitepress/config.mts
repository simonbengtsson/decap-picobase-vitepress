import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "Lumo Decap Vitepress",
    description: "A VitePress site with Decap CMS as a Lumo app",
    base: "/lumo-decap-vitepress/",
    srcExclude: ["README.md"],
    themeConfig: {
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/simonbengtsson/lumo-decap-vitepress",
        },
      ],
    },
  }),
  {
    documentRootPath: "docs",
    useTitleFromFrontmatter: true,
  }
);
