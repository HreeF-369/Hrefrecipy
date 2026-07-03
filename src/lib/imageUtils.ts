/**
 * Utility to optimize Unsplash image URLs dynamically by applying sizing,
 * quality compression, and forcing the WebP format.
 */
export function optimizeUnsplashUrl(url: string, width: number, quality = 75): string {
  if (!url || typeof url !== 'string' || !url.includes('images.unsplash.com')) {
    return url;
  }
  try {
    const urlObj = new URL(url);
    urlObj.searchParams.set('auto', 'format');
    urlObj.searchParams.set('fit', 'crop');
    urlObj.searchParams.set('fm', 'webp');
    urlObj.searchParams.set('q', String(quality));
    urlObj.searchParams.set('w', String(width));
    return urlObj.toString();
  } catch (e) {
    // Resilient fallback parser
    if (url.includes('?')) {
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=format&fit=crop&fm=webp&q=${quality}&w=${width}`;
    }
    return `${url}?auto=format&fit=crop&fm=webp&q=${quality}&w=${width}`;
  }
}
