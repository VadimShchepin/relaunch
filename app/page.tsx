'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Reality } from '@/components/sections/Reality';
import { Proof } from '@/components/sections/Proof';

import { Differentiation } from '@/components/sections/Differentiation';
import { Process } from '@/components/sections/Process';
import { Offer } from '@/components/sections/Offer';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <div id="reality"><Reality /></div>
            <div id="proof"><Proof /></div>
            <div id="differentiation"><Differentiation /></div>
            <div id="process"><Process /></div>
            <div id="offer"><Offer /></div>
            <div id="faq"><FAQ /></div>
            <div id="contact"><FinalCTA /></div>
            <Footer />
        </div>
    );
}

