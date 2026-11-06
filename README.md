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

## Deployment

`.github/workflows/deploy.yml` checks, builds, and publishes the site to GitHub
Pages on every push to `main`. It can also run manually from the Actions tab.
In repository Settings → Pages, select **GitHub Actions** as the source.

The production domain is `commandbar.ravinath.dev`. In repository Settings →
Pages, set this as the custom domain and enable **Enforce HTTPS** once GitHub's
certificate is ready. At the DNS provider for `ravinath.dev`, create a `CNAME`
record named `commandbar` pointing to `saikomantisu.github.io`.

The workflow reads the Pages host and base path from GitHub and builds HTTPS
URLs. To reproduce the production build locally:

```sh
SITE_URL=https://commandbar.ravinath.dev npm run build
```

## Customize

Set site metadata in `src/consts.ts` and the `SITE_URL` environment variable to your production origin before deploying.

The landing page is in `src/pages/index.astro` and design tokens are in `src/styles/base.css`. Read [LUMOS.md](LUMOS.md) before adding pages, components, or styles.

Edit command previews in `src/content/features/`. Copy an existing YAML entry to add a command; keep `files.yaml` for the hero. The schema is in `src/content.config.ts`.

Desktop artwork comes from the [Omarchy Matte Black theme](https://github.com/omacom/omarchy/tree/master/themes/matte-black).

[MIT license](LICENSE).
