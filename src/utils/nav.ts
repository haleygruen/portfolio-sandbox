/**
 * Utility function to generate correct URLs with the base path
 * @param path - The path (e.g., "/projects", "/about")
 * @returns The full URL with base path included
 */
export function getUrl(path: string): string {
  const baseUrl = import.meta.env.BASE_URL || '/';
  // Remove trailing slash from base and leading slash from path
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${cleanBase}${cleanPath}`;
}
