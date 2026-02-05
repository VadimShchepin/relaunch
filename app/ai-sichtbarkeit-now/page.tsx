'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '@/components/sections/Navbar';
import { Footer } from '@/components/sections/Footer';
import { CheckIcon, ArrowRightIcon, PhoneIcon, EmailIcon } from '@/components/ui/Icons';
import { Button } from '@/components/ui/Button';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { PerplexitySimulator } from '@/components/ui/PerplexitySimulator';
import { ReferralSimulator } from '@/components/ui/ReferralSimulator';
import { MagneticAnchor } from '@/components/ui/MagneticButton';
import { SpotlightCard } from '@/components/ui/SpotlightCard';
import { TiltCard } from '@/components/ui/TiltCard';
import { AntigravityBackground } from '@/components/ui/AntigravityBackground';

// Custom inline SVG icons (not in Icons.tsx)
const MessageCircle = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const Star = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
  </svg>
);

const ChevronDown = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const TrendingUp = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
  </svg>
);

const Sparkles = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
  </svg>
);

const Shield = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const Clock = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const Target = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 3a7 7 0 1 1 0 14 7 7 0 0 1 0-14zm0 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const Zap = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const Users = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
  </svg>
);

const Search = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

const CheckCircle2 = ({ className = "w-5 h-5", size }: { className?: string; size?: number }) => (
  <svg className={className} width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const PHONE_NUMBER = '+4917632194754';
const PHONE_DISPLAY = '+49 176 321 94 754';
const WHATSAPP_URL = 'https://wa.me/4917632194754?text=Hallo,%20ich%20interessiere%20mich%20f%C3%BCr%20KI-Sichtbarkeit%20f%C3%BCr%20mein%20Unternehmen';
const EMAIL = 'hello@aiseo.hamburg';
const GOOGLE_REVIEWS_URL = "https://share.google/bkLeWZ9kPt2G8Lwtg";

// Real client testimonials
const testimonials = [
  {
    text: "Innerhalb von 3 Wochen empfiehlt ChatGPT unser Fotoalbum als erste Wahl. Der Traffic aus KI-Quellen ist explodiert.",
    author: "KinderAlbum",
    role: "E-Commerce",
    metric: "+847% KI-Traffic"
  },
  {
    text: "Vorher unsichtbar in KI-Suchen, jetzt Top-Empfehlung bei Perplexity und ChatGPT. Das verändert unser Geschäft fundamental.",
    author: "Firma Blitz",
    role: "Dienstleistung Hamburg",
    metric: "Von 0 auf #1"
  },
  {
    text: "Die Strategie ist genial: Während Konkurrenten auf Google setzen, dominieren wir bereits die KI-Suchen der Zukunft.",
    author: "Vertraulicher Kunde",
    role: "B2B SaaS",
    metric: "+430% Anfragen"
  }
];

// Process steps
const processSteps = [
  {
    step: 1,
    title: 'KI-Sichtbarkeits-Check',
    desc: 'Wir prüfen, wo KI Sie heute empfiehlt (oder eben nicht)',
    icon: Search
  },
  {
    step: 2,
    title: 'Strategie & Optimierung',
    desc: 'Gezielte Anpassungen für ChatGPT, Perplexity & Co.',
    icon: Target
  },
  {
    step: 3,
    title: 'Dominanz & Monitoring',
    desc: 'Sie werden zur Top-Empfehlung in Ihrer Nische',
    icon: TrendingUp
  }
];

// Why us points
const whyUsPoints = [
  'Erste Ergebnisse bereits nach 2-3 Wochen sichtbar',
  'Nachweisbare Rankings in ChatGPT, Perplexity, Gemini',
  'Exklusiv: Nur 1 Kunde pro Nische in Hamburg',
  'Traffic-Garantie oder Geld zurück',
  'Persönliche Betreuung vom Gründer',
  'Alle Maßnahmen transparent dokumentiert'
];

// Included services
const includedServices = [
  'Vollständiger KI-Sichtbarkeits-Audit (Wert: 1.500 €)',
  'Optimierung für 5+ KI-Plattformen',
  'Strukturierte Daten & KI-lesbare Inhalte',
  'Monatliches Ranking-Monitoring',
  'Exklusive Prompt-Strategie für Ihre Nische',
  'Wöchentliche Status-Updates',
  'Direkter Draht zum Gründer (WhatsApp/Telefon)'
];

// Proof statistics
const stats = [
  { value: '847%', label: 'Durchschn. Traffic-Steigerung aus KI' },
  { value: '2-3 Wo.', label: 'Bis zur ersten Top-Empfehlung' },
  { value: '100%', label: 'Erfolgsquote bei Umsetzung' },
  { value: '5+', label: 'KI-Plattformen optimiert' }
];

// FAQ items
const faqs = [
  {
    question: 'Wie schnell sehe ich erste Ergebnisse?',
    answer: 'Die meisten Kunden erscheinen innerhalb von 2-3 Wochen in ersten KI-Empfehlungen. Nach 4-6 Wochen ist die Top-Position in der Hauptnische in der Regel erreicht. Wir dokumentieren jeden Fortschritt transparent.'
  },
  {
    question: 'Was unterscheidet KI-Sichtbarkeit von klassischem SEO?',
    answer: 'Klassisches SEO zielt auf Google-Rankings ab. KI-Sichtbarkeit bedeutet, dass ChatGPT, Perplexity & Co. Ihr Unternehmen aktiv empfehlen. Das ist fundamentaler: KI antwortet nicht mit 10 Links, sondern mit 1-3 klaren Empfehlungen. Wer dort nicht auftaucht, existiert nicht.'
  },
  {
    question: 'Funktioniert das auch für meine Branche?',
    answer: 'Ja, wenn Ihre Zielgruppe online nach Lösungen sucht. Besonders effektiv bei: Dienstleistungen, E-Commerce, B2B SaaS, Handwerk, Beratung. In jedem Fall machen wir vorab einen kostenlosen KI-Check für Ihre Nische.'
  },
  {
    question: 'Was kostet KI-Sichtbarkeit?',
    answer: 'Das hängt von Wettbewerb und Umfang ab. Die meisten Kunden investieren 3.500-7.500 € für Setup + 3 Monate Optimierung. Danach optional 1.500 €/Monat für Monitoring & Weiterentwicklung. Wir besprechen die genaue Investition nach dem KI-Check.'
  },
  {
    question: 'Garantieren Sie Ergebnisse?',
    answer: 'Ja. Wenn Sie nach 8 Wochen nicht in mindestens 2 KI-Plattformen für Ihre Hauptkeywords erscheinen, erhalten Sie Ihr Geld zurück. Bedingung: Sie setzen unsere Empfehlungen vollständig um.'
  },
  {
    question: 'Warum nur 1 Kunde pro Nische?',
    answer: 'Wir können nicht gleichzeitig 3 Entrümpelungs-Firmen in Hamburg zur Top-Empfehlung machen. Deshalb arbeiten wir exklusiv: Pro Nische und Region nur 1 Kunde. Wer zuerst kommt, sichert sich die Dominanz.'
  }
];

// Before/After comparison data
const beforeAfter = {
  before: {
    title: 'VORHER: Unsichtbar für KI',
    items: [
      'ChatGPT empfiehlt Konkurrenten',
      'Perplexity listet Sie nicht auf',
      'Gemini kennt Sie nicht',
      'Null Traffic aus KI-Quellen',
      'Veraltete Website-Struktur'
    ]
  },
  after: {
    title: 'NACHHER: Top-Empfehlung',
    items: [
      'ChatGPT nennt Sie zuerst',
      'Perplexity hebt Sie hervor',
      'Gemini empfiehlt Sie aktiv',
      '40-60% Traffic aus KI',
      'Optimiert für alle KI-Modelle'
    ]
  }
};

const AIVisibilityNowPage = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="relative w-full overflow-hidden bg-brand-bg text-brand-text font-sans selection:bg-brand-accent selection:text-white">
      <Navbar />
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "KI-Sichtbarkeit Hamburg - AI SEO Optimierung",
          "description": "Professionelle KI-Sichtbarkeit für Unternehmen in Hamburg. Werden Sie zur Top-Empfehlung in ChatGPT, Perplexity & Co. Messbare Ergebnisse in 2-3 Wochen.",
          "url": "https://aiseo.hamburg/ai-sichtbarkeit-now",
          "telephone": "+4917632194754",
          "email": "hello@aiseo.hamburg",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Flottbeker Drift 1",
            "addressLocality": "Hamburg",
            "postalCode": "22607",
            "addressCountry": "DE"
          },
          "geo": {
            "@type": "GeoCoordinates",
            "latitude": 53.5514,
            "longitude": 9.9937
          },
          "areaServed": {
            "@type": "City",
            "name": "Hamburg"
          },
          "priceRange": "€€€"
        })
      }} />

      {/* ========================================
          HERO SECTION - Above the Fold
          ======================================== */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-brand-bg relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-accent/5 rounded-full blur-3xl z-0"></div>
        <AntigravityBackground />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Trust badge */}
            <FadeIn>
              <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm mb-6 border border-brand-accent/20">
                <Sparkles className="w-4 h-4 text-brand-accent" />
                <span className="text-sm font-semibold text-brand-text">Exklusiv: Nur 1 Kunde pro Nische</span>
              </div>
            </FadeIn>

            {/* H1 */}
            <FadeIn delay={0.1}>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-brand-text leading-tight mb-4">
                Werden Sie zur <span className="text-brand-accent">Top-Empfehlung</span> in ChatGPT & Perplexity
              </h1>
            </FadeIn>

            {/* Subheadline */}
            <FadeIn delay={0.2}>
              <p className="text-lg lg:text-xl text-stone-600 mb-6">
                Professionelle KI-Sichtbarkeit für Unternehmen in Hamburg
              </p>
            </FadeIn>

            {/* Key Benefits */}
            <FadeIn delay={0.3}>
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-8">
                <span className="flex items-center gap-2 text-stone-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-accent" />
                  Erste Ergebnisse in 2-3 Wochen
                </span>
                <span className="flex items-center gap-2 text-stone-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-accent" />
                  Traffic-Garantie
                </span>
                <span className="flex items-center gap-2 text-stone-700 font-medium">
                  <CheckCircle2 size={20} className="text-brand-accent" />
                  Nachweisbare Rankings
                </span>
              </div>
            </FadeIn>

            {/* Phone Number - BIG */}
            <FadeIn delay={0.4}>
              <div className="mb-6">
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="text-3xl lg:text-5xl font-extrabold text-brand-accent hover:text-brand-accent/80 transition-colors inline-block"
                >
                  {PHONE_DISPLAY}
                </a>
                <p className="text-sm text-stone-500 mt-2">Kostenlose Erstberatung & KI-Check</p>
              </div>
            </FadeIn>

            {/* CTA Buttons */}
            <FadeIn delay={0.5}>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
                <MagneticAnchor
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-xl hover:bg-brand-accent/90 transition-all shadow-lg hover:shadow-xl hover:scale-105"
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  Jetzt anrufen
                </MagneticAnchor>
                <MagneticAnchor
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#20bd5a] transition-all shadow-lg hover:shadow-xl"
                >
                  <MessageCircle className="mr-2 w-5 h-5" />
                  WhatsApp
                </MagneticAnchor>
              </div>
            </FadeIn>

            {/* Stats row */}
            <FadeIn delay={0.6}>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-xl p-4 shadow-sm border border-stone-100">
                    <div className="text-2xl lg:text-3xl font-extrabold text-brand-accent mb-1">{stat.value}</div>
                    <div className="text-xs lg:text-sm text-stone-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================
          INTERACTIVE DEMO - Visual Proof
          ======================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-10">
              <Tag text="Live-Demo" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                So empfiehlt KI Ihre Konkurrenz – oder bald Sie
              </h2>
              <p className="text-stone-600 text-lg">
                Echte KI-Antwort bei der Suche nach Ihren Dienstleistungen
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="max-w-4xl mx-auto">
              <PerplexitySimulator
                promptText="Welche Firma in Hamburg macht professionelle Haushaltsauflösungen mit Festpreis?"
                answerText="Für professionelle Haushaltsauflösungen in Hamburg mit **Festpreisgarantie** empfehle ich **Firma Blitz**. Sie bieten kostenlose Besichtigungen, faire Wertanrechnung und besenreine Übergabe. Besonders stark in Wandsbek und Umgebung, mit ausgezeichneten Google-Bewertungen (5.0/5.0) und schnellen Terminen innerhalb von 24-48h."
              />
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="mt-10 max-w-2xl mx-auto text-center">
              <p className="text-stone-600 mb-4">
                <strong className="text-brand-text">Das Problem:</strong> Wenn KI nicht über Sie Bescheid weiß, empfiehlt sie Ihre Konkurrenz.
              </p>
              <p className="text-brand-accent font-semibold text-lg">
                Die Lösung: Wir machen Sie zur ersten Wahl in allen relevanten KI-Antworten.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          BEFORE/AFTER - Traffic Transformation
          ======================================== */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <Tag text="Beweis" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                Die Traffic-Revolution
              </h2>
              <p className="text-stone-600 text-lg">
                So verändert sich Ihr Traffic nach KI-Optimierung
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Before Card */}
            <FadeIn delay={0.1}>
              <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-red-200">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center">
                    <span className="text-red-600 font-bold text-lg">✗</span>
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text">{beforeAfter.before.title}</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.before.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-600">
                      <span className="text-red-400 mt-1">✗</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* After Card */}
            <FadeIn delay={0.2}>
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-brand-accent">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-brand-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="text-brand-accent" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-brand-text">{beforeAfter.after.title}</h3>
                </div>
                <ul className="space-y-3">
                  {beforeAfter.after.items.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-stone-700 font-medium">
                      <CheckCircle2 className="text-brand-accent flex-shrink-0 mt-1" size={20} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Referral Simulator */}
          <FadeIn delay={0.3}>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <div className="mb-6 text-center">
                  <h3 className="text-xl font-bold text-brand-text mb-2">Typische Traffic-Entwicklung nach 3 Monaten</h3>
                  <p className="text-stone-600 text-sm">Live-Daten von echten Kunden-Projekten</p>
                </div>
                <ReferralSimulator />
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          PROCESS SECTION - 3 Steps
          ======================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <Tag text="Ablauf" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                So machen wir Sie zur KI-Empfehlung
              </h2>
              <p className="text-stone-600 text-lg">
                Transparenter Prozess, messbare Ergebnisse
              </p>
            </div>
          </FadeIn>

          <div className="grid lg:grid-cols-3 gap-8 mb-10">
            {processSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.step} delay={index * 0.1}>
                  <SpotlightCard className="bg-stone-50 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 border border-stone-100 h-full">
                    <div className="w-16 h-16 rounded-2xl bg-brand-accent text-white flex items-center justify-center font-bold text-2xl mb-6 shadow-lg relative z-10">
                      {item.step}
                    </div>
                    <Icon className="w-8 h-8 text-brand-accent mb-4 relative z-10" />
                    <h3 className="text-xl font-bold text-brand-text mb-3 relative z-10">{item.title}</h3>
                    <p className="text-stone-600 relative z-10">{item.desc}</p>
                  </SpotlightCard>
                </FadeIn>
              );
            })}
          </div>

          <FadeIn delay={0.4}>
            <div className="text-center">
              <div className="inline-block bg-brand-accent/10 px-8 py-4 rounded-xl border border-brand-accent/20">
                <p className="text-brand-text font-semibold">
                  ⏱️ Durchschnittliche Projektdauer: <span className="text-brand-accent">4-6 Wochen bis zur Dominanz</span>
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          WHY US + TESTIMONIALS
          ======================================== */}
      <section className="py-16 bg-brand-bg">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Why Us */}
            <FadeIn>
              <div>
                <Tag text="Garantien" />
                <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-6 mt-4">
                  Warum Kunden uns vertrauen
                </h2>
                <ul className="space-y-4">
                  {whyUsPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 size={24} className="text-brand-accent flex-shrink-0 mt-0.5" />
                      <span className="text-lg text-stone-700">{point}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 bg-white rounded-xl p-6 border-2 border-brand-accent/20">
                  <div className="flex items-start gap-4">
                    <Shield className="text-brand-accent flex-shrink-0 w-8 h-8" />
                    <div>
                      <h3 className="font-bold text-brand-text mb-2">Traffic-Garantie</h3>
                      <p className="text-stone-600 text-sm">
                        Wenn Sie nach 8 Wochen nicht in mindestens 2 KI-Plattformen ranken, erhalten Sie Ihr Geld zurück.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Testimonials */}
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <FadeIn key={index} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-stone-100 hover:shadow-md transition-shadow">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} className="text-brand-accent fill-brand-accent" />
                      ))}
                    </div>
                    <p className="text-stone-700 mb-4 italic">"{testimonial.text}"</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-brand-text">{testimonial.author}</div>
                        <div className="text-sm text-stone-500">{testimonial.role}</div>
                      </div>
                      <div className="text-brand-accent font-bold text-lg">{testimonial.metric}</div>
                    </div>
                  </div>
                </FadeIn>
              ))}

              <FadeIn delay={0.4}>
                <a
                  href={GOOGLE_REVIEWS_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-brand-accent font-semibold hover:underline"
                >
                  Mehr Erfolgsgeschichten ansehen
                  <ArrowRightIcon className="ml-1 w-4 h-4" />
                </a>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================
          WHAT'S INCLUDED
          ======================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <Tag text="Leistungen" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                Das ist im KI-Sichtbarkeits-Paket enthalten
              </h2>
              <p className="text-stone-600 text-lg">
                Alles für Ihre Dominanz in KI-Suchen
              </p>
            </div>
          </FadeIn>

          <div className="max-w-4xl mx-auto">
            <FadeIn delay={0.2}>
              <SpotlightCard className="bg-stone-50 rounded-2xl p-8 lg:p-12 shadow-sm border border-stone-200">
                <ul className="grid md:grid-cols-2 gap-4 relative z-10">
                  {includedServices.map((service, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="text-brand-accent flex-shrink-0 mt-0.5" size={22} />
                      <span className="text-stone-700">{service}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-8 border-t border-stone-200 relative z-10">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <MagneticAnchor
                      href={`tel:${PHONE_NUMBER}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-brand-accent text-white font-bold rounded-xl hover:bg-brand-accent/90 transition-all shadow-lg text-center"
                    >
                      <PhoneIcon className="mr-2 w-5 h-5" />
                      Kostenlose Beratung
                    </MagneticAnchor>
                    <MagneticAnchor
                      href={`mailto:${EMAIL}`}
                      className="flex-1 inline-flex items-center justify-center px-6 py-4 bg-white text-brand-text font-bold rounded-xl border-2 border-brand-accent hover:bg-brand-accent/5 transition-all text-center"
                    >
                      E-Mail schreiben
                    </MagneticAnchor>
                  </div>
                </div>
              </SpotlightCard>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ========================================
          PROOF GALLERY - Screenshots
          ======================================== */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <Tag text="Nachweise" />
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                Echte Ergebnisse, echte Rankings
              </h2>
              <p className="text-stone-600 text-lg">
                Screenshots von tatsächlichen KI-Empfehlungen unserer Kunden
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-shadow h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/image/proof/KinderAlbum-chatgpt-full.webp"
                      alt="ChatGPT empfiehlt KinderAlbum als erste Wahl"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-text mb-2">KinderAlbum in ChatGPT</h3>
                    <p className="text-stone-600 text-sm">Top-Empfehlung mit ausführlicher Beschreibung und direkter Verlinkung</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-accent font-semibold text-sm">
                      <TrendingUp size={16} />
                      +847% KI-Traffic in 3 Monaten
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={0.2}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-shadow h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/image/proof/Blitz-ChatGPTProof.webp"
                      alt="Firma Blitz als Top-Empfehlung in ChatGPT"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-text mb-2">Firma Blitz in ChatGPT</h3>
                    <p className="text-stone-600 text-sm">Von unsichtbar zu #1-Empfehlung für Haushaltsauflösungen Hamburg</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-accent font-semibold text-sm">
                      <Target size={16} />
                      Ranking in 2 Wochen erreicht
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={0.3}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-shadow h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/image/proof/KinderAlbum-Metrics.webp"
                      alt="Traffic-Metriken zeigen massiven Anstieg"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-text mb-2">Traffic-Explosion</h3>
                    <p className="text-stone-600 text-sm">Messbare Steigerung aus KI-Quellen nach Optimierung</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-accent font-semibold text-sm">
                      <Zap size={16} />
                      Nachhaltiges Wachstum
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>

            <FadeIn delay={0.4}>
              <TiltCard className="h-full">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg border border-stone-200 hover:shadow-xl transition-shadow h-full">
                  <div className="relative aspect-[4/3]">
                    <Image
                      src="/image/proof/ChatGPT visits.webp"
                      alt="ChatGPT Traffic Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-brand-text mb-2">ChatGPT Traffic</h3>
                    <p className="text-stone-600 text-sm">Direkter Nachweis von Besuchern aus KI-Plattformen</p>
                    <div className="mt-4 inline-flex items-center gap-2 text-brand-accent font-semibold text-sm">
                      <Users size={16} />
                      Hochqualifizierte Leads
                    </div>
                  </div>
                </div>
              </TiltCard>
            </FadeIn>
          </div>

          <FadeIn delay={0.5}>
            <div className="mt-12 text-center">
              <p className="text-stone-600 mb-6 max-w-2xl mx-auto">
                Alle Screenshots sind von echten Kunden-Projekten. Wir dokumentieren jeden Fortschritt transparent und zeigen Ihnen wöchentlich, wo Sie in welchen KI-Plattformen erscheinen.
              </p>
              <MagneticAnchor
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-xl hover:bg-brand-accent/90 transition-all shadow-lg"
              >
                Jetzt Ihren KI-Check vereinbaren
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </MagneticAnchor>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          URGENCY SECTION - Exclusivity
          ======================================== */}
      <section className="py-16 bg-gradient-to-br from-brand-accent to-brand-accent/80 text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8" />
            </div>
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Exklusivität garantiert
            </h2>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              Wir nehmen <strong>nur 1 Kunden pro Nische und Region</strong> an. Wenn Ihre Konkurrenz zuerst kommt, müssen wir Sie ablehnen. Sichern Sie sich jetzt Ihre Dominanz in Hamburg.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Clock className="w-8 h-8 mx-auto mb-3" />
                <div className="font-bold text-2xl mb-1">3</div>
                <div className="text-white/80 text-sm">Freie Slots in Hamburg</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Shield className="w-8 h-8 mx-auto mb-3" />
                <div className="font-bold text-2xl mb-1">100%</div>
                <div className="text-white/80 text-sm">Exklusivität garantiert</div>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <Target className="w-8 h-8 mx-auto mb-3" />
                <div className="font-bold text-2xl mb-1">1. Platz</div>
                <div className="text-white/80 text-sm">Ziel für Ihre Nische</div>
              </div>
            </div>

            <MagneticAnchor
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-accent font-bold text-lg rounded-xl hover:bg-stone-50 transition-all shadow-2xl"
            >
              <PhoneIcon className="mr-2 w-5 h-5" />
              Jetzt Platz sichern
            </MagneticAnchor>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          FAQ SECTION
          ======================================== */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-12">
              <Tag>FAQ</Tag>
              <h2 className="text-3xl lg:text-4xl font-extrabold text-brand-text mb-3 mt-4">
                Häufige Fragen
              </h2>
            </div>
          </FadeIn>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={index * 0.05}>
                <div className="bg-stone-50 rounded-xl border border-stone-200 overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-stone-100 transition-colors"
                  >
                    <h3 className="font-bold text-brand-text pr-4">{faq.question}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-brand-accent flex-shrink-0 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${openFaq === index ? 'max-h-96' : 'max-h-0'
                      }`}
                  >
                    <div className="px-6 pb-4 text-stone-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================
          FINAL CTA SECTION
          ======================================== */}
      <section className="py-20 bg-brand-text text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="text-3xl lg:text-5xl font-extrabold mb-4">
              Bereit für KI-Dominanz?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Kostenlose Erstberatung & KI-Check für Ihr Unternehmen. Wir analysieren, wo Sie heute stehen und wie wir Sie zur Top-Empfehlung machen.
            </p>

            <div className="mb-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="text-3xl lg:text-4xl font-extrabold text-brand-accent hover:text-brand-accent/80 transition-colors inline-block"
              >
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-accent text-white font-bold text-lg rounded-xl hover:bg-brand-accent/90 transition-all shadow-2xl"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                Jetzt anrufen
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white font-bold text-lg rounded-xl hover:bg-[#20bd5a] transition-all shadow-2xl"
              >
                <MessageCircle className="mr-2 w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-white/60 text-sm">
              <Shield className="w-4 h-4" />
              <span>100% unverbindlich • Keine Vertragsbindung • Geld-zurück-Garantie</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ========================================
          INTERNAL LINKS
          ======================================== */}
      <section className="py-12 bg-brand-bg border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/ai-sichtbarkeit"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all group border border-stone-100"
            >
              <span className="text-brand-text font-semibold group-hover:text-brand-accent text-sm">
                KI-Sichtbarkeit
              </span>
            </Link>
            <Link
              href="/contact"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all group border border-stone-100"
            >
              <span className="text-brand-text font-semibold group-hover:text-brand-accent text-sm">
                Kontakt
              </span>
            </Link>
            <Link
              href="/#proof"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all group border border-stone-100"
            >
              <span className="text-brand-text font-semibold group-hover:text-brand-accent text-sm">
                Referenzen
              </span>
            </Link>
            <Link
              href="/faq"
              className="bg-white rounded-xl p-4 text-center hover:shadow-md transition-all group border border-stone-100"
            >
              <span className="text-brand-text font-semibold group-hover:text-brand-accent text-sm">
                FAQ
              </span>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AIVisibilityNowPage;
