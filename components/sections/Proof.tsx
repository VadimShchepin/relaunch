import React from 'react';
import { FadeIn } from '@/components/ui/FadeIn';
import { Tag } from '@/components/ui/Tag';
import { Icon } from '@iconify/react';

export const Proof: React.FC = () => (
    <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto bg-gray-50 rounded-[40px] my-12">
        <div className="max-w-4xl mx-auto mb-16 text-center">
            <FadeIn>
                <Tag text="Proof" />
                <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
                    Warum ich weiß, dass das funktioniert
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                    Ich arbeite nicht aus Theorie. Ich teste Strategien zuerst an eigenen Projekten und dokumentiere, was in KI-Antworten tatsächlich auftaucht.
                </p>
            </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Proof 1 */}
            <FadeIn delay={100} className="h-full">
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 260" className="w-full h-full text-[#10A37F]" fill="currentColor">
                                <path d="M239.184 106.203a64.72 64.72 0 0 0-5.576-53.103C219.452 28.459 191 15.784 163.213 21.74A65.586 65.586 0 0 0 52.096 45.22a64.72 64.72 0 0 0-43.23 31.36c-14.31 24.602-11.061 55.634 8.033 76.74a64.67 64.67 0 0 0 5.525 53.102c14.174 24.65 42.644 37.324 70.446 31.36a64.72 64.72 0 0 0 48.754 21.744c28.481.025 53.714-18.361 62.414-45.481a64.77 64.77 0 0 0 43.229-31.36c14.137-24.558 10.875-55.423-8.083-76.483m-97.56 136.338a48.4 48.4 0 0 1-31.105-11.255l1.535-.87l51.67-29.825a8.6 8.6 0 0 0 4.247-7.367v-72.85l21.845 12.636c.218.111.37.32.409.563v60.367c-.056 26.818-21.783 48.545-48.601 48.601M37.158 197.93a48.35 48.35 0 0 1-5.781-32.589l1.534.921l51.722 29.826a8.34 8.34 0 0 0 8.441 0l63.181-36.425v25.221a.87.87 0 0 1-.358.665l-52.335 30.184c-23.257 13.398-52.97 5.431-66.404-17.803M23.549 85.38a48.5 48.5 0 0 1 25.58-21.333v61.39a8.29 8.29 0 0 0 4.195 7.316l62.874 36.272l-21.845 12.636a.82.82 0 0 1-.767 0L41.353 151.53c-23.211-13.454-31.171-43.144-17.804-66.405zm179.466 41.695l-63.08-36.63L161.73 77.86a.82.82 0 0 1 .768 0l52.233 30.184a48.6 48.6 0 0 1-7.316 87.635v-61.391a8.54 8.54 0 0 0-4.4-7.213m21.742-32.69l-1.535-.922l-51.619-30.081a8.39 8.39 0 0 0-8.492 0L99.98 99.808V74.587a.72.72 0 0 1 .307-.665l52.233-30.133a48.652 48.652 0 0 1 72.236 50.391zM88.061 139.097l-21.845-12.585a.87.87 0 0 1-.41-.614V65.685a48.652 48.652 0 0 1 79.757-37.346l-1.535.87l-51.67 29.825a8.6 8.6 0 0 0-4.246 7.367zm11.868-25.58L128.067 97.3l28.188 16.218v32.434l-28.086 16.218l-28.188-16.218z" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-900">ChatGPT</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 text-sm font-mono text-gray-600">
                        „... in Hamburg“
                    </div>
                    <div className="mt-auto">
                        <span className="text-brand-accent font-bold block mb-1">Ergebnis:</span>
                        <p className="text-gray-900 font-medium">Projekt X wird genannt</p>
                        <p className="text-xs text-gray-400 mt-2">Stand: Aktuell</p>
                    </div>
                </div>
            </FadeIn>

            {/* Proof 2 */}
            <FadeIn delay={200} className="h-full">
                <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm h-full flex flex-col">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 298" className="w-full h-full">
                                <path fill="#3f7e8b" d="m34.831 0l84.689 78.028V.18h16.486v78.197L221.074 0v88.964H256v128.322h-34.819v79.218l-85.175-74.833v75.692H119.52v-74.459l-84.593 74.508v-80.126H0V88.964h34.831zm72.26 105.248H16.487v95.753h18.42v-30.204zm-55.68 72.775v83.052l68.109-59.988v-84.926zm85.069 22.27v-84.212l68.128 61.865v39.34h.088v42.94zm84.701.708h18.333v-95.753h-89.93l71.597 64.87zM204.588 88.964V37.457l-55.904 51.507zm-97.368 0H51.317V37.457z" />
                            </svg>
                        </div>
                        <span className="font-bold text-gray-900">Perplexity</span>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 text-sm font-mono text-gray-600">
                        „... Empfehlung“
                    </div>
                    <div className="mt-auto">
                        <span className="text-brand-accent font-bold block mb-1">Ergebnis:</span>
                        <p className="text-gray-900 font-medium">Projekt Y als Quelle zitiert</p>
                        <p className="text-xs text-gray-400 mt-2">Stand: Aktuell</p>
                    </div>
                </div>
            </FadeIn>

            {/* Text Card */}
            <FadeIn delay={300} className="h-full">
                <div className="bg-gray-900 p-8 rounded-[32px] text-white h-full flex flex-col justify-center">
                    <h3 className="text-2xl font-bold mb-4">Was das bedeutet:</h3>
                    <ul className="space-y-4 text-gray-300 font-medium">
                        <li className="flex gap-3 items-center">
                            <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                            Nur validierte Strategien
                        </li>
                        <li className="flex gap-3 items-center">
                            <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                            Kein Template-SEO
                        </li>
                        <li className="flex gap-3 items-center">
                            <Icon icon="meteor-icons:check" className="w-5 h-5 text-brand-accent flex-shrink-0" />
                            Messbare Wirkung
                        </li>
                    </ul>
                </div>
            </FadeIn>
        </div>
    </section>
);

