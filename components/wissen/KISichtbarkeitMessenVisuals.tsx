import React from 'react';
import Image from 'next/image';
import { OpenAIIcon, PerplexityIcon, GoogleIcon } from '@/components/ui/Icons';

/**
 * Hero Visual: The Measurement Pipeline
 * Eye-catching summary of the 4-step measurement process.
 */
export const HeroProcessVisual = () => (
  <div className="mt-12 w-full max-w-[860px] mx-auto">
    <figure className="relative overflow-hidden rounded-3xl border border-black/10 bg-black shadow-2xl shadow-black/15">
      <Image
        src="/images/wissen/ki-sichtbarkeit-messen/hero-ai-visibility-measurement.webp"
        alt="Analytics-Dashboard zur Messung von KI-Sichtbarkeit über Crawler-Logs, AI-Referral-Traffic, Brand Mentions und Prompt-Tests"
        width={1672}
        height={941}
        priority
        sizes="(min-width: 1024px) 860px, calc(100vw - 48px)"
        className="aspect-[16/9] h-auto w-full object-cover"
      />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/45 to-transparent px-5 pb-5 pt-16 md:px-8 md:pb-7">
        <figcaption className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-accent">
              Tracking 2026 active
            </p>
            <p className="mt-2 text-xl font-semibold leading-tight text-white md:text-2xl">
              Volle Sichtbarkeit über KI-Plattformen, Traffic und Mentions.
            </p>
          </div>
          <div className="flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-brand-accent shadow-[0_0_14px_rgba(79,175,140,0.9)]" />
            Live Measurement
          </div>
        </figcaption>
      </div>
    </figure>
  </div>
);

/**
 * Visual 1: The Blind Spot
 * Shows traditional GSC vs the hidden AI world.
 */
export const BlindSpotVisual = () => (
  <div className="relative w-full aspect-[16/9] bg-white rounded-2xl border border-gray-100 overflow-hidden my-12 shadow-sm">
    <div className="absolute inset-0 flex">
      {/* Left: Visible GSC */}
      <div className="w-1/2 h-full bg-white p-8 flex flex-col justify-center">
        <div className="text-sm font-bold text-gray-400 mb-2 uppercase tracking-wider">Traditional SEO</div>
        <div className="text-2xl font-bold text-black mb-4 flex items-center gap-2">
          <GoogleIcon className="w-6 h-6" /> Google Search Console
        </div>
        <div className="space-y-3">
          {[80, 60, 90, 70].map((w, i) => (
            <div key={i} className="h-4 bg-brand-accent/10 rounded-full overflow-hidden">
              <div className="h-full bg-brand-accent" style={{ width: `${w}%` }} />
            </div>
          ))}
        </div>
        <div className="mt-4 text-brand-accent font-semibold text-sm">100% Sichtbarkeit</div>
      </div>
      
      {/* Right: Hidden AI */}
      <div className="w-1/2 h-full bg-gray-900 p-8 flex flex-col justify-center relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-brand-dark opacity-90" />
        <div className="relative z-10">
          <div className="text-sm font-bold text-gray-500 mb-2 uppercase tracking-wider">The AI Reality</div>
          <div className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
             <OpenAIIcon className="w-6 h-6 text-white" /> AI Recommendations
          </div>
          <div className="space-y-3 opacity-20">
            {[40, 50, 30, 60].map((w, i) => (
              <div key={i} className="h-4 bg-white/20 rounded-full" />
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-2 rounded-lg text-white text-sm font-medium animate-pulse">
              Blind Spot: 35% of Search
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Divider */}
    <div className="absolute top-0 bottom-0 left-1/2 w-px bg-gray-200 z-20" />
  </div>
);

/**
 * Visual 2: The 4 Measurement Levels
 */
export const FourLevelsVisual = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-12">
    {[
      { title: 'Referral Traffic', icon: '📈', desc: 'Clicks from AI tools', color: 'bg-blue-50' },
      { title: 'Crawler Activity', icon: '🤖', desc: 'Bot frequency in logs', color: 'bg-purple-50' },
      { title: 'Brand Mentions', icon: '💬', desc: 'Name drops without links', color: 'bg-green-50' },
      { title: 'Prompt Testing', icon: '🧪', desc: 'Manual & auto checks', color: 'bg-orange-50' },
    ].map((level, i) => (
      <div key={i} className={`${level.color} p-6 rounded-2xl border border-black/5 hover:scale-[1.02] transition-transform cursor-default`}>
        <div className="text-3xl mb-3">{level.icon}</div>
        <div className="text-xl font-bold text-black mb-1">{level.title}</div>
        <div className="text-gray-600 text-sm">{level.desc}</div>
      </div>
    ))}
  </div>
);

/**
 * Visual 3: GA4 Mockup
 */
export const GA4MockupVisual = () => (
  <div className="bg-[#f8f9fa] border border-gray-200 rounded-xl overflow-hidden my-12 shadow-sm font-sans">
    <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-3 h-3 bg-orange-400 rounded-full" />
        <span className="text-xs font-bold text-gray-500 uppercase">GA4: AI Platforms Segment</span>
      </div>
      <div className="text-[10px] text-gray-400">Last 90 Days</div>
    </div>
    <div className="p-6">
      <div className="flex items-end gap-1 h-32 mb-6">
        {[20, 25, 22, 35, 45, 40, 55, 65, 60, 80, 95, 100].map((h, i) => (
          <div key={i} className="flex-1 bg-brand-accent/20 rounded-t-sm relative group">
             <div className="absolute bottom-0 left-0 right-0 bg-brand-accent rounded-t-sm transition-all duration-500" style={{ height: `${h}%` }} />
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white p-3 rounded-lg border border-gray-100">
          <div className="text-[10px] text-gray-400 uppercase">Sessions</div>
          <div className="text-xl font-bold text-black">+142%</div>
        </div>
        <div className="bg-white p-3 rounded-lg border border-gray-100">
          <div className="text-[10px] text-gray-400 uppercase">Conversion Rate</div>
          <div className="text-xl font-bold text-black">4.8%</div>
        </div>
      </div>
    </div>
  </div>
);

/**
 * Visual 4: Share of Voice
 */
export const ShareOfVoiceVisual = () => (
  <div className="bg-white border border-gray-100 rounded-2xl p-8 my-12 shadow-sm">
    <h4 className="text-lg font-bold text-black mb-6">Share of Voice in AI Responses</h4>
    <div className="space-y-6">
      {[
        { name: 'Deine Marke', val: 42, color: 'bg-brand-accent' },
        { name: 'Wettbewerber A', val: 28, color: 'bg-gray-400' },
        { name: 'Wettbewerber B', val: 15, color: 'bg-gray-300' },
        { name: 'Andere', val: 15, color: 'bg-gray-100' },
      ].map((item, i) => (
        <div key={i} className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className={i === 0 ? 'font-bold text-black' : 'text-gray-600'}>{item.name}</span>
            <span className="font-mono text-gray-500">{item.val}%</span>
          </div>
          <div className="h-3 bg-gray-50 rounded-full overflow-hidden">
            <div className={`h-full ${item.color} rounded-full transition-all duration-1000`} style={{ width: `${item.val}%` }} />
          </div>
        </div>
      ))}
    </div>
  </div>
);

/**
 * Visual 5: Dashboard Flow
 */
export const DashboardFlowVisual = () => (
  <div className="relative py-12 my-12 overflow-hidden">
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
      {/* Sources */}
      <div className="flex flex-col gap-3 w-full md:w-auto">
        {['GA4 Data', 'Server Logs', 'Prompt Tests', 'Brand Radar'].map((s, i) => (
          <div key={i} className="bg-white border border-gray-100 px-4 py-2 rounded-lg shadow-sm text-sm font-medium text-gray-600 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-brand-accent" /> {s}
          </div>
        ))}
      </div>
      
      {/* Arrow / Connector */}
      <div className="hidden md:block flex-1 h-px bg-gradient-to-r from-brand-accent/20 via-brand-accent to-transparent relative">
        <div className="absolute right-0 -top-1 w-2 h-2 border-t-2 border-r-2 border-brand-accent rotate-45" />
      </div>
      
      {/* Target */}
      <div className="bg-black text-white p-8 rounded-3xl shadow-xl flex flex-col items-center text-center">
        <div className="w-12 h-12 bg-brand-accent rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-brand-accent/20">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="text-xl font-bold mb-1">AI Visibility Report</div>
        <div className="text-xs text-gray-400">Integrated Dashboard 2026</div>
      </div>
    </div>
    
    {/* Background Decoration */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-brand-accent/5 -rotate-3 -z-10 rounded-[3rem]" />
  </div>
);
