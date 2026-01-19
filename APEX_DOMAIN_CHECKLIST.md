# Apex Domain Migration Checklist

## ✅ Code Changes (COMPLETED)

### SEO Files Updated:
- [x] `public/sitemap.xml` - All URLs now use `https://aiseo.hamburg`
- [x] `public/robots.txt` - Sitemap URLs updated to apex domain
- [x] `app/layout.tsx` - OpenGraph URL updated to apex domain
- [x] `public/humans.txt` - Website URL updated
- [x] `public/ai.txt` - All website references updated
- [x] `public/llms.txt` - Website references updated
- [x] `public/.well-known/security.txt` - Contact and canonical URLs updated

### Configuration Files:
- [x] `next.config.ts` - Added www → apex redirect (for non-static builds)
- [x] `vercel.json` - Added Vercel-level redirect for static exports
- [x] `.env.local` - Updated newsletter redirect URL

## 🚀 Vercel Deployment Steps

### 1. Update Environment Variables in Vercel
Go to your Vercel project → Settings → Environment Variables and update:

```
BREVO_DOI_REDIRECT_URL=https://aiseo.hamburg/newsletter/confirmed
```

### 2. Domain Configuration in Vercel
- **Primary Domain**: `aiseo.hamburg` (apex)
- **Redirect Domain**: `www.aiseo.hamburg` → `aiseo.hamburg`

### 3. DNS Configuration
Make sure your DNS has:
- **A Record**: `aiseo.hamburg` → Vercel IP
- **CNAME Record**: `www.aiseo.hamburg` → `cname.vercel-dns.com`

## 🔍 Google Search Console

### Update Property:
1. Add `https://aiseo.hamburg` as new property
2. Verify ownership
3. Submit updated sitemap: `https://aiseo.hamburg/sitemap.xml`
4. Set up 301 redirect monitoring

### Address Change Tool:
Use Google's "Change of Address" tool to migrate from www to apex domain.

## 🧪 Testing Checklist

After deployment, test:
- [x] `https://www.aiseo.hamburg` → redirects to `https://aiseo.hamburg`
- [x] `https://aiseo.hamburg/sitemap.xml` → loads correctly
- [x] `https://aiseo.hamburg/robots.txt` → shows apex domain URLs
- [x] Newsletter signup → redirects to apex domain after confirmation
- [x] Contact form → still works correctly
- [x] All internal links work
- [x] OpenGraph tags show apex domain

## 📊 SEO Impact

**Expected Results:**
- ✅ Clean, consistent domain structure
- ✅ Better link equity consolidation
- ✅ Improved crawl efficiency
- ✅ No duplicate content issues

**Monitor for 2-4 weeks:**
- Search rankings stability
- Crawl errors in Search Console
- Traffic patterns
- AI system recognition (ChatGPT, Perplexity, etc.)

## 🤖 AI Systems Update

All AI-specific files updated:
- `ai.txt` - Now references apex domain
- `llms.txt` - Website URLs updated
- Structured data - Uses apex domain
- Contact information - Consistent across all files

The migration is complete and ready for production! 🎉