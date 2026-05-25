/** Verified image paths (bundled in /public/media from devtracoplus.com). */
const base = import.meta.env.BASE_URL;

export function mediaUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

export const images = {
  logo: mediaUrl("media/logo.png"),
  homepage: mediaUrl("media/homepage.webp"),
  address: mediaUrl("media/address.webp"),
  pelican: mediaUrl("media/pelican.webp"),
  arlo: mediaUrl("media/arlo.webp"),
  forte: mediaUrl("media/forte.webp"),
} as const;

export const imageFallback = images.homepage;
