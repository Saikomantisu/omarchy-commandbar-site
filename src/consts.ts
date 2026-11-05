/** Site name. Appended to every page title and used as `og:site_name`. */
export const SITE_NAME = "Command Bar for Omarchy";

/** Fallback meta description for pages that don't set their own. */
export const SITE_DESCRIPTION =
  "A Spotlight-style command bar for Omarchy. Launch apps, switch windows, search file names, calculate and run keyword commands with Super + Period.";

/**
 * Canonical origin. Resolves canonical URLs, social images, and the sitemap.
 * Set the `SITE_URL` environment variable in your host's build settings to the
 * production origin; the localhost fallback is for development only.
 */
export const SITE_URL =
  (typeof process !== "undefined" && process.env?.SITE_URL) ||
  "http://localhost:4321";

/** BCP 47 locale tag used to format dates and numbers. */
export const SITE_LOCALE = "en-US";

/** Alt text for the default social image. */
export const SITE_IMAGE_ALT =
  "Command Bar for Omarchy, a Spotlight-style launcher opened over the desktop.";

/** Routes excluded from search and the sitemap. Surrounding slashes are ignored. */
export const NOINDEX_ROUTES: string[] = ["/404"];

/** Repository that holds the plugin. */
export const GITHUB_URL = "https://github.com/Saikomantisu/omarchy-commandbar";

/** One-line install command shown across the site. */
export const INSTALL_COMMAND = `omarchy plugin add ${GITHUB_URL} --enable`;

/** Current plugin version from the upstream manifest.json. */
export const COMMAND_BAR_VERSION = "1.4.0";
