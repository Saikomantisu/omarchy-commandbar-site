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
