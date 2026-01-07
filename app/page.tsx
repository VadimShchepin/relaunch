'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { Reality } from '@/components/sections/Reality';
import { Proof } from '@/components/sections/Proof';
import { Transformation } from '@/components/sections/Transformation';
import { TargetGroup } from '@/components/sections/TargetGroup';
import { Differentiation } from '@/components/sections/Differentiation';
import { Offer } from '@/components/sections/Offer';
import { Measurement } from '@/components/sections/Measurement';
import { Process } from '@/components/sections/Process';
import { Objections } from '@/components/sections/Objections';
import { FAQ } from '@/components/sections/FAQ';
import { Newsletter } from '@/components/sections/Newsletter';
import { FinalCTA } from '@/components/sections/FinalCTA';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <Reality />
            <Proof />
            <Transformation />
            <TargetGroup />
            <Differentiation />
            <Offer />
            <Measurement />
            <Process />
            <Objections />
            <FAQ />
            <Newsletter />
            <FinalCTA />
            <Footer />
        </div>
    );
}

