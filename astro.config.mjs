// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE_URL } from "./src/consts.ts";
import { isNoindexRoute } from "./src/utils/seo.ts";

export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      filter: (page) => !isNoindexRoute(new URL(page).pathname),
    }),
  ],
  fonts: [
    {
      name: "IBM Plex Sans",
      cssVariable: "--font-plex-sans",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/ibm-plex-sans-400.ttf"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/ibm-plex-sans-500.ttf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/ibm-plex-sans-700.ttf"],
          },
        ],
      },
    },
    {
      name: "JetBrainsMono Nerd Font Mono",
      cssVariable: "--font-jetbrains-nerd-mono",
      provider: fontProviders.local(),
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: ["./src/assets/fonts/jetbrains-nerd-mono-regular.ttf"],
          },
          {
            weight: 500,
            style: "normal",
            src: ["./src/assets/fonts/jetbrains-nerd-mono-medium.ttf"],
          },
          {
            weight: 700,
            style: "normal",
            src: ["./src/assets/fonts/jetbrains-nerd-mono-bold.ttf"],
          },
        ],
      },
    },
  ],
  vite: { build: { cssTarget: "safari15.4" } },
});
