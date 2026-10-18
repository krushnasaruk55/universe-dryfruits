/**
 * Helper to resolve asset URLs with the correct Vite base URL (e.g. for GitHub Pages).
 */
export function getAssetPath(path: string): string {
  const base = import.meta.env.BASE_URL || "/";
  const cleanBase = base.endsWith("/") ? base : `${base}/`;
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}
