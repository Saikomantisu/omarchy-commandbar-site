# Omarchy Commandbar site

Astro project using the official [Lumos Framework](https://lumosframework.com/) starter.

## Development

```sh
npm install
npm run dev
```

Open http://localhost:4321.

## Commands

- `npm run check` checks Astro and TypeScript files.
- `npm run build` generates the static site in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run format` formats the project.

## Customize

Set site metadata in `src/consts.ts` and replace `SITE_URL` with your production origin before deploying.

The starter includes `src/pages/index.astro` and design tokens in `src/styles/base.css`. Read [LUMOS.md](LUMOS.md) before adding pages, components, or styles.

The Lumos starter is [MIT licensed](LICENSE).

## Command Bar feature examples

Feature examples in `src/data/commandbar-demo.json` come from the plugin's provider engine with sample data. The JSON records the plugin version and source commit.

Regenerate results from a local plugin checkout:

```sh
node scripts/sync-commandbar-demo.cjs ../omarchy-commandbar
```

When upstream UI or icons change, update `FeatureExplorer.astro` and the symbol font subset as needed. The font contains only the displayed Nerd Font symbols; its license is in `src/assets/fonts/symbols-nerd-font-LICENSE.txt`.

## Hero desktop

`HeroDesktop.astro` places a static Command Bar file-search preview over an empty Omarchy desktop wallpaper. The wallpaper is kept sharp and uncropped, with a grain overlay. The original top status bar is retained from the [Matte Black desktop preview](https://github.com/omacom/omarchy/blob/master/themes/matte-black/preview.png). The command bar scales with the desktop.

Wallpaper source: [Omarchy Matte Black ship-at-sea background](https://github.com/omacom/omarchy/blob/master/themes/matte-black/backgrounds/0-ship-at-sea.jpg), saved as `src/assets/images/omarchy-wallpaper.jpg`. Command results use the sample provider data in `src/data/commandbar-demo.json`.
