import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "🪴 Khandhaja",
    pageTitleSuffix: "sprouts from my digital garden",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "en-GB",
    baseUrl: "khandhaja.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    generateSocialImages: true,
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: false,
      typography: {
        header: "Noto Serif",
        body: "Noto Sans",
        code: "Noto Sans Mono",
      },
      colors: {
        lightMode: {
          light: "#f4eee8",
          lightgray: "#f4dede",
          gray: "#ec809e",
          darkgray: "#615f5f",
          dark: "#27272a",
          secondary: "#b565a7",
          tertiary: "#be9cc1",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#F8D7DD88",
        },
        darkMode: {
          light: "#27272a",
          lightgray: "#b565a7",
          gray: "#85677b",
          darkgray: "#f7caca",
          dark: "#f4dede",
          secondary: "#be9cc1",
          tertiary: "#ec809e",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#85677b88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
