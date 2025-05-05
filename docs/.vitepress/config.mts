import { defineConfig } from "vitepress";
import { withSidebar } from "vitepress-sidebar";

// https://vitepress.dev/reference/site-config
export default withSidebar(
  defineConfig({
    title: "My Awesome Project",
    description: "A VitePress Site",
    base: "/decap-picobase-vitepress/",
    srcExclude: ["readme.md"],
    themeConfig: {
      socialLinks: [
        {
          icon: "github",
          link: "https://github.com/simonbengtsson/decap-picobase-vitepress",
        },
      ],
    },
  }),
  {
    documentRootPath: "site",
    useTitleFromFrontmatter: true,
  }
);
