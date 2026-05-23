/** Verified image paths (bundled in /public/media from devtracoplus.com). */
const base = import.meta.env.BASE_URL;

export function mediaUrl(path: string): string {
  const normalized = path.startsWith("/") ? path.slice(1) : path;
  return `${base}${normalized}`;
}

export const images = {
  logo: mediaUrl("media/logo.png"),
  homepage: mediaUrl("media/homepage.jpg"),
  address: mediaUrl("media/address.jpg"),
  pelican: mediaUrl("media/pelican.jpg"),
  arlo: mediaUrl("media/arlo.jpg"),
  forte: mediaUrl("media/forte.jpg"),
} as const;

export const imageFallback = images.homepage;
