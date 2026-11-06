import { NOINDEX_ROUTES } from "../consts.ts";

const normalize = (path: string) => `/${path.replace(/^\/+|\/+$/g, "")}`;

const excluded = new Set(NOINDEX_ROUTES.map(normalize));

/** Checks whether a route should be hidden from search. Used by BaseHead. */
export function isNoindexRoute(pathname: string, base = "/"): boolean {
  const prefix = base.replace(/\/$/, "");
  const route = pathname.startsWith(`${prefix}/`)
    ? pathname.slice(prefix.length)
    : pathname;
  return excluded.has(normalize(route));
}
