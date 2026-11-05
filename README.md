# Omarchy Commandbar site

Landing page for [Command Bar for Omarchy](https://github.com/Saikomantisu/omarchy-commandbar), built with Astro and [Lumos](https://lumosframework.com/).

## Development

```sh
npm install
npm run dev -- --background
```

Open http://localhost:4321.

Use `npm run astro -- dev status`, `npm run astro -- dev logs` and
`npm run astro -- dev stop` to manage the background server.

Run `npm run check` to validate, `npm run build` to build, and `npm run preview` to preview the build.

## Customize

Set site metadata in `src/consts.ts` and the `SITE_URL` environment variable to your production origin before deploying.

The landing page is in `src/pages/index.astro` and design tokens are in `src/styles/base.css`. Read [LUMOS.md](LUMOS.md) before adding pages, components, or styles.

Edit command previews in `src/content/features/`. Copy an existing YAML entry to add a command; keep `files.yaml` for the hero. The schema is in `src/content.config.ts`.

Desktop artwork comes from the [Omarchy Matte Black theme](https://github.com/omacom/omarchy/tree/master/themes/matte-black).

[MIT license](LICENSE).
