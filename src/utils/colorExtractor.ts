export interface ExtractedColorTheme {
  bgRgb: [number, number, number];
  bgHex: string;
  isDark: boolean;
  textColor: string;
  textSecondary: string;
  subTextColor: string;
  borderColor: string;
  activeColor: string;
  badgeBg: string;
}

// Fallback initial theme based on sampled hero image background
export const DEFAULT_HERO_NAV_THEME: ExtractedColorTheme = {
  bgRgb: [234, 212, 254],
  bgHex: '#EAD4FE',
  isDark: false,
  textColor: '#28252A',
  textSecondary: 'rgba(40, 37, 42, 0.75)',
  subTextColor: '#C6A15B',
  borderColor: 'rgba(40, 37, 42, 0.12)',
  activeColor: '#245C45',
  badgeBg: 'rgba(255, 255, 255, 0.65)',
};

/**
 * Calculates WCAG relative perceived luminance of an RGB triplet.
 * Returns a value between 0 (pitch black) and 1 (pure white).
 */
export function getLuminance(r: number, g: number, b: number): number {
  const [rs, gs, bs] = [r, g, b].map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

/**
 * Extracts the background color from the perimeter/top regions of an image
 * and computes a high-contrast legible theme for navigation bars.
 */
export async function extractHeroImageTheme(imageUrl: string): Promise<ExtractedColorTheme> {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(DEFAULT_HERO_NAV_THEME);
      return;
    }

    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.src = imageUrl;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        if (!ctx) {
          resolve(DEFAULT_HERO_NAV_THEME);
          return;
        }

        const width = 100;
        const height = 100;
        canvas.width = width;
        canvas.height = height;

        // Draw scaled image to canvas
        ctx.drawImage(img, 0, 0, width, height);

        // Sample background areas:
        // Top 15% strip and top-left/top-right corners where the background wall is unobstructed
        const sampleAreas = [
          { x: 0, y: 0, w: 30, h: 20 },      // top-left corner
          { x: 70, y: 0, w: 30, h: 20 },     // top-right corner
          { x: 0, y: 0, w: 100, h: 10 },     // top border
          { x: 0, y: 10, w: 20, h: 30 },     // upper left side
          { x: 80, y: 10, w: 20, h: 30 },    // upper right side
        ];

        let totalR = 0;
        let totalG = 0;
        let totalB = 0;
        let totalPixels = 0;

        for (const area of sampleAreas) {
          const imageData = ctx.getImageData(area.x, area.y, area.w, area.h);
          const data = imageData.data;
          for (let i = 0; i < data.length; i += 4) {
            totalR += data[i];
            totalG += data[i + 1];
            totalB += data[i + 2];
            totalPixels++;
          }
        }

        if (totalPixels === 0) {
          resolve(DEFAULT_HERO_NAV_THEME);
          return;
        }

        const r = Math.round(totalR / totalPixels);
        const g = Math.round(totalG / totalPixels);
        const b = Math.round(totalB / totalPixels);

        const hex =
          '#' +
          [r, g, b]
            .map((val) => val.toString(16).padStart(2, '0'))
            .join('')
            .toUpperCase();

        const luminance = getLuminance(r, g, b);
        const isDark = luminance < 0.45; // Below 0.45 needs white text for strong contrast

        const theme: ExtractedColorTheme = {
          bgRgb: [r, g, b],
          bgHex: hex,
          isDark,
          textColor: isDark ? '#FFFFFF' : '#28252A',
          textSecondary: isDark ? 'rgba(255, 255, 255, 0.85)' : 'rgba(40, 37, 42, 0.75)',
          subTextColor: '#C6A15B', // Champagne Gold is legible on both light and dark
          borderColor: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(40, 37, 42, 0.12)',
          activeColor: isDark ? '#F8DCE7' : '#245C45',
          badgeBg: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.65)',
        };

        resolve(theme);
      } catch (err) {
        console.warn('Could not extract image color from canvas, using fallback', err);
        resolve(DEFAULT_HERO_NAV_THEME);
      }
    };

    img.onerror = () => {
      resolve(DEFAULT_HERO_NAV_THEME);
    };
  });
}
