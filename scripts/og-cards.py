#!/usr/bin/env python3
"""Build the site's open graph share cards.

Why this exists
---------------
An audit of every openGraph block under app/** found three broken classes of
share image:

  1. Eleven referenced .jpg files did not exist in public/ at all, across
     twelve /wissen/ pages. Every share of those URLs rendered a blank card.
  2. Five pages pointed og:image at an .svg. No major platform (Facebook,
     LinkedIn, X, Slack, WhatsApp, iMessage) rasterises SVG for a share
     preview, so those cards were blank too.
  3. /hamburg/chatgpt-optimierung and /wissen/chatgpt-seo used
     /images/wissen/chatgpt.jpg, a borrowed stock raster, to represent the
     page everywhere it is shared.

Class 2 already had a purpose-built 1200x630 design, it was just in an
unsupported format, so those are rasterised as-is (rasterise_svgs).
Classes 1 and 3 had no honest first-party asset, so they get a typographic
card drawn from the design system: brand-bg ground, brand-text headline,
brand-muted sub, accent-ink eyebrow, General Sans, no photography and no
invented data. Text is set at 1200x630, which is 2x the ~600x315 that
platforms actually display.

Usage
-----
    python3 scripts/og-cards.py            # typographic cards only
    python3 scripts/og-cards.py --svg      # also rasterise the SVG cards

The typeface is fetched from Fontshare, the same source app/layout.tsx loads
at runtime, and cached in /tmp. Nothing is vendored into the repo.
"""
from __future__ import annotations

import io
import os
import sys
import urllib.request
import zipfile

from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT_DIR = os.path.join(ROOT, "public", "og")

W, H = 1200, 630
PAD = 76

# Design tokens, copied from the @theme block in app/globals.css.
BG = "#FBF9F7"          # brand-bg
INK = "#111111"         # brand-text
MUTED = "#57524D"       # brand-muted
SUBTLE = "#6B645D"      # brand-subtle
ACCENT_INK = "#267555"  # brand-accent-ink, the accent that may carry text
ACCENT = "#4FAF8C"      # brand-accent, decoration only
EDGE = "#C9C2BA"        # brand-edge

FONT_ZIP = "https://api.fontshare.com/v2/fonts/download/general-sans"
FONT_CACHE = "/tmp/general-sans.zip"
FONT_IN_ZIP = "GeneralSans_Complete/Fonts/OTF/GeneralSans-{}.otf"


def font(weight: str, size: int) -> ImageFont.FreeTypeFont:
    if not os.path.exists(FONT_CACHE):
        with urllib.request.urlopen(FONT_ZIP, timeout=90) as r:
            open(FONT_CACHE, "wb").write(r.read())
    with zipfile.ZipFile(FONT_CACHE) as z:
        data = z.read(FONT_IN_ZIP.format(weight))
    return ImageFont.truetype(io.BytesIO(data), size)


def tracked(draw, xy, text, fnt, fill, tracking=0.0):
    """PIL has no letter-spacing, and the eyebrow needs tracking-eyebrow."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=fnt, fill=fill)
        x += draw.textlength(ch, font=fnt) + tracking
    return x


def card(headline: list[str], sub: str, eyebrow: str, out: str) -> None:
    img = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(img)

    # Accent rule at the top edge: the one piece of decoration, and it is a
    # token, not an image.
    d.rectangle([0, 0, W, 8], fill=ACCENT)

    f_eyebrow = font("Semibold", 22)
    f_head = font("Semibold", 40 if len(headline) > 3 else 62)
    f_sub = font("Regular", 27)
    f_mark = font("Bold", 30)
    f_meta = font("Medium", 22)

    tracked(d, (PAD, PAD + 8), eyebrow.upper(), f_eyebrow, ACCENT_INK, tracking=3.6)

    # Headline block, optically centred in the field between the eyebrow and
    # the footer rule, so 1, 2 and 3 line cards all sit in the same place.
    lh = int(f_head.size * 1.1)
    gap = 42 if sub else 0
    block = lh * len(headline) + gap + (f_sub.size + 6 if sub else 0)
    field_top, field_bottom = PAD + 78, H - PAD - 78
    y = field_top + (field_bottom - field_top - block) // 2
    for line in headline:
        d.text((PAD, y), line, font=f_head, fill=INK)
        y += lh

    if sub:
        d.text((PAD, y + gap - 8), sub, font=f_sub, fill=MUTED)

    # Footer: hairline, wordmark with the accent dot, domain on the right.
    rule_y = H - PAD - 46
    d.rectangle([PAD, rule_y, W - PAD, rule_y + 1], fill=EDGE)
    mark_y = rule_y + 20
    x = d.text((PAD, mark_y), "AISEO", font=f_mark, fill=INK)
    x = PAD + d.textlength("AISEO", font=f_mark)
    d.text((x, mark_y), ".", font=f_mark, fill=ACCENT)

    right = "aiseo.hamburg"
    d.text((W - PAD - d.textlength(right, font=f_meta), mark_y + 6), right,
           font=f_meta, fill=SUBTLE)

    os.makedirs(os.path.dirname(out), exist_ok=True)
    img.save(out, "PNG", optimize=True)
    print(f"  {os.path.relpath(out, ROOT)}  {os.path.getsize(out) // 1024}KB")


# (slug, eyebrow, headline lines, sub)
CARDS = [
    ("default", "KI-Sichtbarkeit",
     ["Von ChatGPT", "empfohlen werden"],
     "AI SEO, GEO und AEO für Hamburger Unternehmen."),

    ("wissen-ai-seo-tools", "Wissen",
     ["AI SEO Tools 2026"],
     "Welche sich lohnen und welche Geldverbrennung sind."),

    ("wissen-aio-fails-chatgpt-bann", "Wissen",
     ["Warum bannt ChatGPT", "deine Website?"],
     "Die größten AIO-Fails 2026."),

    ("wissen-eeat-ki-sichtbarkeit", "Wissen",
     ["E-E-A-T und KI"],
     "Warum Expertise für ChatGPT zählt."),

    ("wissen-google-ki-optimierung", "Wissen",
     ["Google", "KI-Optimierung"],
     "Offizielle Tipps und GEO-Mythen zum Streichen."),

    ("wissen-ki-content-audit-anleitung", "Wissen",
     ["KI-Content-Audit"],
     "So prüfst du, ob dein Content 2027 überlebt."),

    ("wissen-ki-markenwahrnehmung", "Wissen",
     ["Wie KI über deine", "Marke entscheidet"],
     "Und was du dagegen tun kannst."),

    ("wissen-llmo-llm-optimierung", "Wissen",
     ["LLMO:", "LLM-Optimierung"],
     "So wirst du von KI-Systemen empfohlen."),

    ("wissen-llms-txt-anleitung", "Wissen",
     ["llms.txt erstellen"],
     "Website KI-lesbar machen."),

    ("wissen-perplexity-vs-chatgpt-vs-google", "Wissen",
     ["Perplexity vs ChatGPT", "vs Google AI"],
     "Wo Optimierung am meisten lohnt."),

    ("wissen-was-ist-geo", "Wissen",
     ["Was ist GEO?"],
     "Generative Engine Optimization, verständlich erklärt."),

    ("wissen-wettbewerber-ki-sichtbarkeit", "Wissen",
     ["Kunden, die du", "nie siehst"],
     "Warum dein Wettbewerber sie bekommt."),

    ("wissen-zero-click-zukunft", "Wissen",
     ["Zero-Click-Zukunft"],
     "Warum deine Website bald keinen Traffic braucht."),

    ("wissen-chatgpt-seo", "Wissen",
     ["ChatGPT SEO"],
     "Inhalte für Empfehlungen optimieren, nicht für Rankings."),

    ("hamburg-chatgpt-optimierung", "Hamburg",
     ["ChatGPT Optimierung", "Hamburg"],
     "Empfohlen statt übersehen."),
    ("wissen-ki-sichtbarkeit", "Wissen",
     ["KI-Sichtbarkeit 2026"],
     "Der Guide, mit dem dich KI empfiehlt."),

    ("wissen-seo-vs-ai-seo", "Wissen",
     ["SEO vs AI SEO"],
     "Was du 2026 wirklich brauchst."),

    ("hamburg-answer-engine-optimization", "Hamburg",
     ["Answer Engine", "Optimization"],
     "AEO für Hamburger Unternehmen."),

    ("hamburg-perplexity-optimierung", "Hamburg",
     ["Perplexity", "Optimierung Hamburg"],
     "Als Quelle zitiert, nicht überblättert."),

    ("faq", "FAQ",
     ["Häufige Fragen", "zu KI-Sichtbarkeit"],
     "AI SEO, GEO und AEO, kurz beantwortet."),

    ("leistungen", "Leistungen",
     ["AI SEO Leistungen", "Hamburg"],
     "GEO, AEO und AI SEO, in einem Paket."),
]

# SVG cards that are already designed for this slot but sit in a format no
# social platform rasterises. (source, output, width, height)
SVGS = [
    ("public/images/wissen/generative-engine-optimization.svg",
     "public/og/generative-engine-optimization.jpg", 1200, 675),
    ("public/images/wissen/google-ai-overviews.svg",
     "public/og/google-ai-overviews.jpg", 1200, 675),
    ("public/images/wissen/ki-sichtbarkeit-dienstleister/hero-ki-sichtbarkeit-dienstleister.svg",
     "public/og/wissen-ki-sichtbarkeit-dienstleister.jpg", 1200, 630),
    ("public/images/wissen/seo-agentur-vs-ai-seo/hero-seo-agentur-vs-ai-seo.svg",
     "public/og/wissen-seo-agentur-vs-ai-seo.jpg", 1200, 630),
]


def rasterise_svgs() -> None:
    """Chromium is used purely as an SVG rasteriser here, not to screenshot a
    page. Page evidence still goes through /tmp/gauntlet-run/shot.py."""
    from playwright.sync_api import sync_playwright

    with sync_playwright() as pw:
        browser = pw.chromium.launch()
        for src, out, w, h in SVGS:
            page = browser.new_page(viewport={"width": w, "height": h},
                                    device_scale_factor=1)
            # The SVG is inlined rather than loaded through <img src="file://">,
            # which Chromium blocks from an about:blank origin (that produced a
            # 4KB blank card the first time round).
            markup = open(os.path.join(ROOT, src), encoding="utf-8").read()
            page.set_content(
                f'<style>html,body{{margin:0;padding:0}}'
                f'svg{{display:block;width:{w}px;height:{h}px}}</style>{markup}'
            )
            page.wait_for_timeout(400)
            # These four are gradient-heavy, so JPEG at q90 is a third of the
            # PNG for no visible difference. The typographic cards stay PNG:
            # flat ground plus text is exactly where PNG wins.
            shot = page.screenshot(type="jpeg", quality=90)
            open(os.path.join(ROOT, out), "wb").write(shot)
            page.close()
            print(f"  {out}  {os.path.getsize(os.path.join(ROOT, out)) // 1024}KB")
        browser.close()


if __name__ == "__main__":
    if "--svg-only" not in sys.argv:
        print("typographic cards:")
        for slug, eyebrow, head, sub in CARDS:
            card(head, sub, eyebrow, os.path.join(OUT_DIR, f"{slug}.png"))
    if "--svg" in sys.argv or "--svg-only" in sys.argv:
        print("rasterised svg cards:")
        rasterise_svgs()
