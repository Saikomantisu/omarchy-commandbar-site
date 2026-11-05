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

## Adding a command

Each YAML file in `src/content/command-demos/` owns a command's label, description, category, example query and preview results. New entries appear automatically in the matching feature group. No component or feature-list edits are needed.

To add a command, create a YAML file such as `my-command.yaml`:

```yaml
label: My command
description: A short explanation of what it does.
category: tools-shortcuts
query: my command
rows:
  - title: Example result
    subtitle: Optional supporting text
```

The preview uses the sample text you write in `rows`. No plugin checkout or generation step is needed.

Categories are `find-launch`, `calculate-convert` and `tools-shortcuts`. Lower `order` values appear first; omitted values default to 100, with filename order breaking ties. Rename or remove a command by editing or deleting its YAML file. Result rows require only a title; subtitle, icon, group, action and answer styling have defaults. Use `hero: true` on a row for a large calculator-style answer.

Astro validates entries against `src/content.config.ts` during checks and builds. `src/data/feature-groups.ts` contains only the category headings and grouping logic. The hero uses the `files` entry, so keep that filename.

When upstream UI or icons change, update `FeatureExplorer.astro` and the symbol font subset as needed. The font contains only the displayed Nerd Font symbols; its license is in `src/assets/fonts/symbols-nerd-font-LICENSE.txt`.

## Hero desktop

`HeroDesktop.astro` places a static Command Bar file-search preview over an empty Omarchy desktop wallpaper. The wallpaper is kept sharp and uncropped, with a grain overlay. The original top status bar is retained from the [Matte Black desktop preview](https://github.com/omacom/omarchy/blob/master/themes/matte-black/preview.png). The command bar scales with the desktop.

Wallpaper source: [Omarchy Matte Black ship-at-sea background](https://github.com/omacom/omarchy/blob/master/themes/matte-black/backgrounds/0-ship-at-sea.jpg), saved as `src/assets/images/omarchy-wallpaper.jpg`. Command results use the sample provider data in the `commandDemos` content collection.
