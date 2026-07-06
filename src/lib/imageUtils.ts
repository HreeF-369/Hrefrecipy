export const FALLBACK_IMAGE = "https://images.unsplash.com/photo-1495195129352-aec325b55b65?q=80&w=800&auto=format&fit=crop";

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

/**
 * Ensures the image URL is safe to use and handles relative local paths.
 */
export function getSafeImageUrl(url: string | undefined | null): string {
  if (!url || typeof url !== 'string') return FALLBACK_IMAGE;
  
  if (url === "Nano Banana") {
    return "https://images.unsplash.com/photo-1516448620398-c5f44bf9f441?q=80&w=800";
  }
  
  // Local paths starting with image_ should have a leading slash
  if (url.startsWith('image_')) {
    return `/${url}`;
  }
  
  return url;
}
