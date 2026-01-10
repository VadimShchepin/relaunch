'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Reality } from '@/components/sections/Reality';
import { Proof } from '@/components/sections/Proof';
import { Differentiation } from '@/components/sections/Differentiation';
import { Offer } from '@/components/sections/Offer';
import { Objections } from '@/components/sections/Objections';
import { FAQ } from '@/components/sections/FAQ';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <Reality />
            <Proof />
            <Differentiation />
            <Offer />
            <Objections />
            <FAQ />
            <FinalCTA />
            <Footer />
        </div>
    );
}

