'use client';

import React, { useEffect, useRef } from 'react';

interface FadeInProps {
    children?: React.ReactNode;
    delay?: number;
    className?: string;
}

/* ---------------------------------------------------------------------------
   Scroll reveal wrapper, used 45 files deep.

   The failure app/globals.css could not fix from CSS: JS is enabled (so
   `@media (scripting: enabled)` arms `.reveal { opacity: 0 }`) but this bundle
   never executes. Blocked script, failed chunk, hydration crash, strict CSP,
   a proxy that mangles the JS. The observer then never runs, `.active` is
   never added, and 16+ blocks per page stay invisible forever. There is no
   CSS-side escape, and the time-based failsafe the foundation agent rejected
   would pre-reveal everything below the fold.

   It is solvable here, by inverting who owns the hidden state. The server no
   longer emits `reveal`; this component adds it, so the class can only exist
   if the code that removes it again is already running. Bundle dead means no
   class means plain visible content, for humans and for crawlers.

   Two details make the inversion invisible in the normal case:

   1. Only elements that are still BELOW the fold at mount get armed. Anything
      already on screen was painted visible and stays visible, so nothing
      flickers out and back in. Above-the-fold blocks lose their entry fade;
      that fade was the part of the effect nobody scrolls for, and it is what
      used to hold the hero copy hostage to a JS bundle.

   2. Arming happens with the transition suppressed for one frame, so the hide
      is instant instead of an 800ms fade-out that a fast scroller could catch.
--------------------------------------------------------------------------- */
export const FadeIn: React.FC<FadeInProps> = ({ children, delay = 0, className = "" }) => {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // No observer support: leave the content plainly visible.
        if (typeof IntersectionObserver === 'undefined') return;

        // Already on screen (or scrolled past): do not hide what the browser
        // has already painted.
        if (el.getBoundingClientRect().top < window.innerHeight) return;

        // Arm the hidden state without animating into it.
        el.style.transition = 'none';
        el.classList.add('reveal');
        void el.offsetHeight; // flush the suppressed transition
        el.style.transition = '';

        let timer: ReturnType<typeof setTimeout> | undefined;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) return;
                    observer.unobserve(entry.target);
                    timer = setTimeout(() => {
                        entry.target.classList.add('active');
                    }, delay);
                });
            },
            { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
        );

        observer.observe(el);

        return () => {
            observer.disconnect();
            if (timer) clearTimeout(timer);
        };
    }, [delay]);

    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};
