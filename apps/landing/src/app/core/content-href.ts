/** Bare fragments resolve against <base href="/">, so retain the current route. */
export function contentHref(href: string, routeUrl: string): string {
  return href.startsWith('#') ? `${routeUrl.split('#')[0]}${href}` : href;
}
