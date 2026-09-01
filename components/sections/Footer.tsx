import React from 'react';
import { Button } from '@/components/ui/Button';
import { LinkedInIcon, InstagramIcon, TwitterIcon, GoogleIcon } from '@/components/ui/Icons';

/* ---------------------------------------------------------------------------
   Footer, on all 79 pages.

   The photographic band is gone, deliberately.

   public/footer-bg.webp was a 1024x1024 raster cover-fitted across the full
   viewport width: 1,41x upscale at 1440px, 1,88x at 1920px. That is softer
   than the 1,45x skyline band that was deleted for being too soft, and at
   ~975px tall it was the largest single visual element on every page of the
   site. Fixing it by re-sourcing would mean shipping a ~2880x1950 photo (a
   genuine 2x) on every route for pure decoration.

   The alternative was to let the footer stand on the design system, which is
   also what the bar does: stripe.com/de/guides carries no photography in its
   footer. So the band is dropped and the surface is brand-night, a token
   already used for the site's inverted sections.

   Contrast, the second defect: white/40 on the darkened photo measured about
   2,6:1 and failed WCAG AA. Every ink here is now a fixed token on #121212:
     brand-bg    #FBF9F7  18,1:1   links, headline, lead
     brand-line  #E2DCD5  13,8:1   labels, meta, copyright, social icons
     brand-accent #4FAF8C  7,0:1   hover and the wordmark dot
   The lowest text ink in the footer is 13,8:1. Nothing sits on a photograph,
   so none of it depends on which pixel happens to be behind it.

   The secondary ink was brand-edge #C9C2BA (10,6:1 here). That passed on this
   surface but broke the one hard rule of the palette: brand-edge is a rule
   colour and carries text nowhere, because on the page background #FBF9F7 it
   is 1,68:1 and the same class shipped on light sections too. It is now
   brand-line, which is a step lighter and one ink closer to the headline, and
   the only colour left in this file that is not text is the border.

   Two more rules this footer settles for the whole site.

   Gutters. The shell was max-w-[1200px], the only 1200px container in the
   codebase: 108 page containers use max-w-article (1088px) with px-6 lg:px-12.
   At 1440px that put the footer rail at x=168 and every page rail at x=224, so
   the last two bands of a document disagreed by 56px. The footer now uses the
   same shell as the pages, and one rail runs from the first breadcrumb to the
   copyright line.

   The closing ask. This CTA is on all 79 pages, so it is the site's closing
   ask, and a page-level band must not repeat it. On /wissen the page CTA sat
   about 350px above this one with the identical button label ("KI-Sichtbarkeit
   pruefen") on a differently indented container. The page band kept its
   heading and its own link and gave up the duplicated button. Same rule
   applies to any other page that ends in a CTA: hand the primary button to the
   footer, keep your own heading and a link that goes somewhere else.
--------------------------------------------------------------------------- */

const navLinks = [
    { href: '/ai-sichtbarkeit-now', label: 'KI-Sichtbarkeit', strong: true },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/ai-seo-agentur', label: 'AI SEO Agentur' },
    { href: '/geo-optimierung', label: 'GEO-Optimierung' },
    { href: '/chatgpt-sichtbarkeit', label: 'ChatGPT-Sichtbarkeit' },
    { href: '/chatgpt-ads', label: 'ChatGPT Ads' },
    { href: '/ergebnisse', label: 'Ergebnisse' },
    { href: '/preise', label: 'Preise' },
    { href: '/ai-sichtbarkeits-upgrade-hamburg', label: 'Upgrade Hamburg' },
    { href: '/ai-sichtbarkeit', label: 'Was ist AI SEO?' },
    { href: '/ueber-mich', label: 'Über mich' },
    { href: '/termin', label: 'Termin buchen' },
    { href: '/contact', label: 'Kontakt' },
];

const legalLinks = [
    { href: '/impressum', label: 'Impressum' },
    { href: '/datenschutz', label: 'Datenschutz' },
    { href: '/agb', label: 'AGB' },
];

const wissenLinks = [
    { href: '/wissen', label: 'Alle Guides' },
    { href: '/wissen/ki-sichtbarkeit', label: 'KI-Sichtbarkeit' },
    { href: '/wissen/sichtbarkeit-in-chatgpt', label: 'ChatGPT' },
    { href: '/wissen/sichtbarkeit-in-perplexity', label: 'Perplexity' },
];

const socials = [
    { href: 'https://www.linkedin.com/in/vadim-shchepin/', label: 'LinkedIn', Icon: LinkedInIcon },
    { href: 'https://www.instagram.com/aiseo.hamburg/', label: 'Instagram', Icon: InstagramIcon },
    { href: 'https://x.com/aiseo.hamburg', label: 'X (Twitter)', Icon: TwitterIcon },
    { href: 'https://share.google/bkLeWZ9kPt2G8Lwtg', label: 'Google Business', Icon: GoogleIcon },
];

const linkClass = 'text-brand-bg hover:text-brand-accent transition-colors';
const labelClass = 'text-micro font-semibold uppercase tracking-eyebrow text-brand-line';

export const Footer: React.FC = () => (
    <footer className="bg-brand-night text-brand-bg">
        {/* Hairline at the seam, so the dark band reads as a deliberate edge
            and not as a section that lost its background image. */}
        <div className="h-px w-full bg-brand-accent/40" />

        <div className="mx-auto max-w-article px-6 py-section md:px-10 lg:px-12">

            {/* CTA first: it is the reason the footer is this tall. */}
            <div className="flex flex-col gap-stack border-b border-brand-edge/25 pb-rule lg:flex-row lg:items-end lg:justify-between">
                <div>
                    {/* leading-[1.25] is not decoration, it is the smallest value
                        that stops the two lines from overlapping.

                        General Sans reports ascent 65px + descent 15px at a 64px
                        font size, so a line of it occupies 1,25em no matter what
                        line-height you ask for. The type scale ships text-display
                        at 1,05 (67,2px) and text-title at 1,08 (51,84px), which are
                        good numbers for a one-line headline. This headline has a
                        hard <br />, and measured on the live page the two line
                        boxes overlapped by 12,82px at 1440px and 8,17px at 834px:
                        the ascenders of "Sichtbarkeit?" started above the baseline
                        row of "Bereit fuer mehr". 1,25 is exactly ascent+descent,
                        so the boxes now touch and never cross. text-heading (the
                        390px step) is already 1,25, so nothing changes on mobile.
                        globals.css is frozen and this is the only two-line display
                        heading on the site, so the override belongs here and not
                        in the token. */}
                    <h2 className="text-heading font-medium leading-[1.25] md:text-title lg:text-display">
                        Bereit für mehr<br />Sichtbarkeit?
                    </h2>
                    <p className="mt-flow max-w-[34rem] text-lead font-light text-brand-line">
                        Lass uns gemeinsam wachsen. Starte jetzt deine Optimierung.
                    </p>
                </div>
                <Button
                    href="/ai-sichtbarkeit-now"
                    text="KI-Sichtbarkeit prüfen"
                    className="!bg-brand-bg !text-brand-text hover:!bg-white !py-3 !px-8 !text-base !rounded-lg shrink-0"
                />
            </div>

            {/* Link rail. Same x positions as the CTA above it. */}
            <div className="grid grid-cols-2 gap-x-10 gap-y-block pt-rule text-meta sm:grid-cols-3 lg:grid-cols-6">

                {/* Twelve nav links in one column left ~400px of dead space
                    under the three short columns beside it. Two sub-columns
                    from lg up close that gap without moving any x position. */}
                <div className="lg:col-span-2">
                    <p className={labelClass}>Navigation</p>
                    <div className="mt-4 grid gap-x-10 gap-y-2.5 lg:grid-cols-2">
                        {navLinks.map(({ href, label, strong }) => (
                            <a key={href} href={href} className={`${linkClass}${strong ? ' font-semibold' : ''}`}>
                                {label}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2.5">
                    <p className={`${labelClass} mb-1.5`}>Rechtliches</p>
                    {legalLinks.map(({ href, label }) => (
                        <a key={href} href={href} className={linkClass}>{label}</a>
                    ))}
                </div>

                <div className="flex flex-col gap-2.5">
                    <p className={`${labelClass} mb-1.5`}>Wissen</p>
                    {wissenLinks.map(({ href, label }) => (
                        <a key={href} href={href} className={linkClass}>{label}</a>
                    ))}
                    <a href="/pressekit" className={`${linkClass} mt-4`}>Pressekit</a>
                </div>

                <div className="col-span-2 sm:col-span-3 lg:col-span-2">
                    <div className="text-2xl font-bold uppercase tracking-tighter">
                        aiseo<span className="text-brand-accent">.</span>
                    </div>
                    <p className="mt-2 max-w-xs text-meta text-brand-line">
                        Wir bringen deine Marke an die Spitze der Suchergebnisse, mit KI-gestützten Strategien.
                    </p>
                    <div className="mt-stack flex items-center gap-4">
                        {socials.map(({ href, label, Icon }) => (
                            <a
                                key={href}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand-line transition-colors hover:text-brand-accent"
                                aria-label={label}
                            >
                                <Icon className="w-5 h-5" />
                            </a>
                        ))}
                    </div>
                </div>

            </div>

            <div className="mt-rule flex flex-col gap-2 border-t border-brand-edge/20 pt-6 text-micro text-brand-line sm:flex-row sm:justify-between">
                <p>© 2026 aiseo.hamburg. Alle Rechte vorbehalten.</p>
                <p>
                    Made in Hamburg. Auch unter{' '}
                    <a
                        href="https://webseite.hamburg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-brand-accent transition-colors"
                    >
                        webseite.hamburg
                    </a>
                </p>
            </div>

        </div>
    </footer>
);
