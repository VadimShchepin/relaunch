import type { MetadataRoute } from 'next';
import fs from 'fs';
import path from 'path';

const BASE_URL = 'https://aiseo.hamburg';

const EXCLUDED_ROUTES = new Set([
  '/newsletter/confirmed',
  '/contact/danke',
]);

function getLastModified(filePath: string): Date {
  try {
    return fs.statSync(filePath).mtime;
  } catch {
    return new Date();
  }
}

function discoverRoutes(dir: string, basePath = ''): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });

  for (const item of items) {
    if (!item.isDirectory()) continue;

    // Skip Next.js internal dirs and API routes
    if (item.name.startsWith('(') || item.name.startsWith('_') || item.name === 'api') continue;

    const fullPath = path.join(dir, item.name);
    const routePath = `${basePath}/${item.name}`;
    const pagePath = path.join(fullPath, 'page.tsx');

    if (fs.existsSync(pagePath) && !EXCLUDED_ROUTES.has(routePath)) {
      entries.push({
        url: `${BASE_URL}${routePath}`,
        lastModified: getLastModified(pagePath),
      });
    }

    // Recurse into subdirectories
    entries.push(...discoverRoutes(fullPath, routePath));
  }

  return entries;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = path.join(process.cwd(), 'app');

  return [
    {
      url: BASE_URL,
      lastModified: getLastModified(path.join(appDir, 'page.tsx')),
    },
    ...discoverRoutes(appDir),
  ];
}
