import fs from 'fs';
import path from 'path';
import { describe, it, expect } from 'vitest';
import { ARTICLES } from './articles';

// Folders under app/wissen that are not articles (the hub page itself,
// supporting modules, etc.). Anything else must appear in ARTICLES.
const NON_ARTICLE_DIRS = new Set<string>([]);

function articleSlugs(): string[] {
  const wissenDir = path.join(process.cwd(), 'app', 'wissen');
  return fs
    .readdirSync(wissenDir, { withFileTypes: true })
    .filter((e) => e.isDirectory() && !NON_ARTICLE_DIRS.has(e.name))
    .filter((e) => fs.existsSync(path.join(wissenDir, e.name, 'page.tsx')))
    .map((e) => e.name);
}

describe('wissen article registry', () => {
  const registered = new Set(ARTICLES.map((a) => a.href.replace('/wissen/', '')));

  it('lists every article folder in app/wissen/articles.ts', () => {
    const missing = articleSlugs().filter((slug) => !registered.has(slug));
    expect(missing, `Add these to app/wissen/articles.ts: ${missing.join(', ')}`).toEqual([]);
  });

  it('has no registry entries pointing at non-existent folders', () => {
    const slugs = new Set(articleSlugs());
    const orphaned = [...registered].filter((slug) => !slugs.has(slug));
    expect(orphaned, `Remove or fix these entries: ${orphaned.join(', ')}`).toEqual([]);
  });

  it('has unique hrefs', () => {
    const hrefs = ARTICLES.map((a) => a.href);
    expect(new Set(hrefs).size).toBe(hrefs.length);
  });
});
