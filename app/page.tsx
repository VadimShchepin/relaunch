'use client';

import React from 'react';
import { Navbar } from '@/components/sections/Navbar';
import { Hero } from '@/components/sections/Hero';
import { ProblemShift } from '@/components/sections/ProblemShift';
import { Mechanism } from '@/components/sections/Mechanism';
import { Differentiation } from '@/components/sections/Differentiation';
import { Process } from '@/components/sections/Process';
import { Offer } from '@/components/sections/Offer';
import { Footer } from '@/components/sections/Footer';

export default function Page() {
    return (
        <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
            <Navbar />
            <Hero />
            <ProblemShift />
            <Mechanism />
            <Differentiation />
            <Process />
            <Offer />
            <Footer />
        </div>
    );
}
