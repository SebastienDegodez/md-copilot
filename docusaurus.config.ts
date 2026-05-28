import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "GitHub Copilot — Learning Path",
  tagline: "Guide francophone pour maîtriser GitHub Copilot",
  favicon: "img/favicon.ico",

  url: "https://SebastienDegodez.github.io",
  baseUrl: "/md-copilot/",

  organizationName: "SebastienDegodez",
  projectName: "md-copilot",
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          path: "docs/learning-path",
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: "Copilot Learning Path",
      items: [
        {
          type: "docSidebar",
          sidebarId: "learningPath",
          position: "left",
          label: "Parcours",
        },
        {
          href: "https://github.com/SebastienDegodez/md-copilot",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} — Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "yaml", "json", "typescript"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
