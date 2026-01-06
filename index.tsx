import React, { useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';

// --- Assets & Constants ---
const IMAGES = {
  hero_person: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  hero_car: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000&auto=format&fit=crop",
  hero_abstract: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  hero_motion: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?q=80&w=1000&auto=format&fit=crop", // Blurry abstract
  problem: "https://images.unsplash.com/photo-1664575602276-acd073f104c1?q=80&w=1000&auto=format&fit=crop",
  nature_dark: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=1000&auto=format&fit=crop",
  hand_iphone: "/public/hand_with_iphone.png", // Local ChatGPT iPhone image
};

// --- Components ---

const FadeIn: React.FC<{ children?: React.ReactNode; delay?: number; className?: string }> = ({ children, delay = 0, className = "" }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('active');
            }, delay);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
};

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full px-6 py-6 z-50 flex justify-between items-start md:items-center pointer-events-none">
    {/* Logo */}
    <div className="pointer-events-auto">
      <div className="font-semibold text-2xl tracking-tight text-black bg-white/80 backdrop-blur-sm px-5 py-2.5 rounded-full inline-block border border-white/50 shadow-sm hover:shadow-md transition-all">
        aiseo<span className="text-brand-accent">.</span>
      </div>
    </div>

    {/* Center Pill Nav - Visible on Desktop */}
    <div className="hidden md:flex pointer-events-auto absolute left-1/2 top-8 -translate-x-1/2 bg-white/90 backdrop-blur-md px-1.5 py-1.5 rounded-full shadow-[0_2px_20px_rgb(0,0,0,0.04)] border border-gray-200/50 gap-1">
      <a href="#audit" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Audit</a>
      <a href="#process" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Prozess</a>
      <a href="#mechanism" className="px-5 py-2.5 rounded-full hover:bg-gray-100 transition-colors text-sm font-medium text-gray-600 hover:text-black">Expertise</a>
      <a href="#contact" className="px-6 py-2.5 rounded-full bg-black text-white hover:bg-gray-800 transition-colors text-sm font-medium">Kontakt</a>
    </div>

    {/* Mobile CTA */}
    <div className="pointer-events-auto md:hidden">
      <button className="bg-brand-accent text-white p-3 rounded-full shadow-lg">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="6" x2="20" y2="6" /><line x1="4" y1="18" x2="20" y2="18" /></svg>
      </button>
    </div>

    {/* Right CTA - Desktop */}
    <div className="hidden md:block pointer-events-auto">
      <button className="group flex items-center gap-2 bg-[#FEE2E2] text-[#991B1B] px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#FECACA] transition-all shadow-sm">
        Get Results
        <span className="bg-white/60 w-6 h-6 flex items-center justify-center rounded-full group-hover:scale-110 transition-transform text-xs">🔥</span>
      </button>
    </div>
  </nav>
);

const Button = ({ text, onClick, primary = false, className = "" }: { text: string; onClick?: () => void; primary?: boolean; className?: string }) => (
  <button
    onClick={onClick}
    className={`
      relative px-8 py-5 rounded-full text-base font-medium transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3
      ${primary
        ? 'bg-brand-accent text-white shadow-xl shadow-brand-accent/20 hover:bg-[#439678]'
        : 'bg-black text-white hover:bg-gray-800'}
      ${className}
    `}
  >
    {text}
    {primary && (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
    )}
  </button>
);

const Tag = ({ text }: { text: string }) => (
  <div className="inline-block px-4 py-1.5 mb-8 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
    <span className="text-xs uppercase tracking-widest font-semibold text-gray-500">{text}</span>
  </div>
);

// --- Sections ---

const Hero = () => (
  <section className="relative pt-44 pb-20 px-4 md:px-8 lg:px-12 max-w-[1920px] mx-auto overflow-hidden">
    <div className="max-w-[1600px] mx-auto">
      {/* Top Text Content */}
      <div className="max-w-5xl mb-32">
        <FadeIn>
          <h1 className="text-[3.5rem] md:text-[5.5rem] lg:text-[7rem] leading-[0.95] font-semibold tracking-tight text-black mb-10">
            Dein Business. <br />
            Von ChatGPT <br />
            empfohlen.
          </h1>
          <p className="text-xl md:text-2xl font-normal text-gray-600 leading-relaxed max-w-2xl mb-12">
            Ich mache Unternehmen in ChatGPT & anderen KI-Systemen sichtbar.
            Kein Marketing-Bla-Bla, sondern messbare Ergebnisse.
          </p>
          <div className="flex flex-col sm:flex-row gap-8 items-start">
            <Button
              text="AI-Sichtbarkeit prüfen"
              primary={true}
              onClick={() => document.getElementById('audit')?.scrollIntoView({ behavior: 'smooth' })}
            />
            <div className="flex items-center gap-4 py-3">
              <div className="flex -space-x-3">
                {[1, 2, 3].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-[#F7F5F2] bg-gray-200 overflow-hidden">
                    <img src={`https://randomuser.me/api/portraits/men/${i * 12}.jpg`} className="w-full h-full object-cover grayscale opacity-80" />
                  </div>
                ))}
              </div>
              <span className="text-sm font-medium text-gray-500">20+ Audits diesen Monat</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Hero Cards - Angled Row */}
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8 w-full relative">

        {/* Card 1: Blue Stats - Angled Left */}
        <div className="flex-1 min-h-[420px] bg-[#2563EB] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-2 hover:rotate-0 origin-bottom-right hover:scale-105 shadow-xl">
          <FadeIn delay={100} className="h-full flex flex-col justify-between relative z-10">
            <div>
              <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Organische Views</span>
            </div>
            <div>
              <span className="text-[4rem] lg:text-[5rem] leading-none font-semibold tracking-tighter block mb-2">+400%</span>
              <p className="text-xl font-medium leading-tight opacity-90">Durch KI-Optimierung.</p>
            </div>
          </FadeIn>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full pointer-events-none transform translate-x-1/3 -translate-y-1/3"></div>
        </div>

        {/* Card 2: Image - Motion Blur - Angled Right */}
        <div className="flex-1 min-h-[420px] bg-gray-100 rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-1 translate-y-8 hover:translate-y-0 hover:rotate-0 origin-bottom-left hover:scale-105 shadow-xl">
          <FadeIn delay={200} className="h-full w-full">
            <img
              src={IMAGES.hero_motion}
              alt="Motion"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
          </FadeIn>
        </div>

        {/* Card 3: Green Stats - Angled Left */}
        <div className="flex-1 min-h-[420px] bg-[#10B981] rounded-[32px] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden group hover:z-20 transition-transform duration-500 transform -rotate-1 translate-y-4 hover:translate-y-0 hover:rotate-0 origin-top-right hover:scale-105 shadow-xl">
          <FadeIn delay={300} className="h-full flex flex-col justify-between relative z-10">
            <div>
              <span className="font-bold text-sm tracking-widest opacity-70 uppercase">Merken Geholfen</span>
            </div>
            <div>
              <span className="text-[4rem] lg:text-[5rem] leading-none font-semibold tracking-tighter block mb-2">30+</span>
              <p className="text-xl font-medium leading-tight opacity-90">Von Startup bis Corp.</p>
            </div>
          </FadeIn>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-300/20 blur-[60px] rounded-full pointer-events-none transform -translate-x-1/3 translate-y-1/3"></div>
        </div>

        {/* Card 4: Image - Person - Angled Right */}
        <div className="flex-1 min-h-[420px] bg-gray-100 rounded-[32px] overflow-hidden relative group hover:z-20 transition-transform duration-500 transform rotate-3 hover:rotate-0 origin-top-left hover:scale-105 shadow-xl">
          <FadeIn delay={400} className="h-full w-full">
            <img
              src={IMAGES.hero_car}
              alt="Result"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute bottom-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg">
              <span className="text-black font-bold uppercase tracking-wide text-xs">Original is een</span>
            </div>
          </FadeIn>
        </div>

      </div>
    </div>
  </section>
);

const ProblemShift = () => (
  <section className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      <div className="lg:col-span-7">
        <FadeIn>
          <Tag text="Reality Check" />
          <h2 className="text-4xl md:text-6xl font-semibold leading-[1.05] mb-12 text-black tracking-tight">
            Kaufentscheidungen starten immer öfter in KI-Systemen.
            <span className="text-gray-400 block mt-2 font-normal">Reicht Google SEO nicht mehr? Nein.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-700 font-medium">
            <p>
              Während klassische Suche Listen liefert, liefern LLMs Antworten.
              Wer dort nicht auftaucht, wird nicht empfohlen.
            </p>
            <p>
              Die Sichtbarkeit verlagert sich von 10 blauen Links zu einer einzigen, synthetisierten Wahrheit.
              <strong className="block mt-4 text-black font-bold">Entweder man ist die Antwort, oder man existiert nicht.</strong>
            </p>
          </div>
        </FadeIn>
      </div>
      <div className="lg:col-span-5 relative">
        <FadeIn delay={200}>
          <div className="rounded-[32px] overflow-hidden shadow-2xl aspect-square relative group bg-white border border-gray-100 p-3 rotate-2 hover:rotate-0 transition-all duration-500">
            <div className="w-full h-full rounded-[24px] overflow-hidden relative">
              <img
                src={IMAGES.problem}
                alt="Shift to AI"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Mechanism = () => (
  <section id="mechanism" className="py-24 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto my-12">
    <div className="bg-white rounded-[48px] p-8 md:p-20 shadow-sm border border-gray-100/50">
      <div className="max-w-4xl mb-20">
        <FadeIn>
          <Tag text="Die Mechanik" />
          <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">
            Was beeinflusst, ob ChatGPT dein Unternehmen nennt?
          </h2>
        </FadeIn>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: "✨",
            title: "Verständlichkeit",
            desc: "KI bewertet Kontext und Logik, keine Keywords. Wir optimieren semantische Zusammenhänge.",
            bg: "bg-gray-900",
            text: "text-white",
            subtext: "text-gray-400"
          },
          {
            icon: "🏗️",
            title: "Struktur",
            desc: "Websites müssen für LLMs maschinenlesbar sein. Wir liefern strukturierte Daten.",
            bg: "bg-[#F5F5F4]",
            text: "text-black",
            subtext: "text-gray-600"
          },
          {
            icon: "🏛️",
            title: "Autorität",
            desc: "Informationen müssen zitierfähig sein. Wir sorgen für digitale Reputation.",
            bg: "bg-[#FDF2F8]",
            text: "text-black",
            subtext: "text-gray-600"
          }
        ].map((item, i) => (
          <FadeIn key={i} delay={i * 100} className="h-full">
            <div className={`${item.bg} ${item.text} p-10 rounded-[32px] h-full flex flex-col justify-between group hover:-translate-y-2 transition-transform duration-300 min-h-[400px] shadow-sm hover:shadow-xl`}>
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center mb-10 text-3xl backdrop-blur-sm shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-3xl font-semibold mb-6 tracking-tight">{item.title}</h3>
                <p className={`${item.subtext} text-lg leading-relaxed font-medium`}>{item.desc}</p>
              </div>
              <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity translate-y-4 group-hover:translate-y-0 duration-300">
                <div className="w-12 h-12 rounded-full border border-current flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  </section>
);

const Differentiation = () => (
  <section className="py-24 px-6 md:px-12 lg:px-20 max-w-[1600px] mx-auto">
    <div className="grid lg:grid-cols-12 gap-16 items-center">
      {/* Left: Content */}
      <div className="lg:col-span-7 order-2 lg:order-1">
        <FadeIn delay={200}>
          <Tag text="Warum du?" />
          <h2 className="text-4xl md:text-6xl font-semibold leading-[0.95] mb-12 text-black tracking-tight">
            Websites für Menschen <br /><span className="text-gray-400 font-normal">und</span> KI gleichzeitig.
          </h2>
          <div className="space-y-12">
            <div className="flex gap-8 items-start group">
              <span className="text-6xl font-semibold text-gray-200 leading-none group-hover:text-brand-accent transition-colors">01</span>
              <div>
                <h4 className="text-2xl font-bold text-black mb-2">Kein Bullshit-Bingo.</h4>
                <p className="text-gray-600 text-lg font-medium leading-relaxed">Wir optimieren auf Semantik, nicht auf Hacks. Das hält auch dem nächsten Update stand.</p>
              </div>
            </div>
            <div className="flex gap-8 items-start group">
              <span className="text-6xl font-semibold text-gray-200 leading-none group-hover:text-brand-accent transition-colors">02</span>
              <div>
                <h4 className="text-2xl font-bold text-black mb-2">Nachhaltig.</h4>
                <p className="text-gray-600 text-lg font-medium leading-relaxed">Was für KI gut ist (Klarheit, Struktur), ist meistens auch für deine menschlichen Nutzer besser.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Right: Image/Persona */}
      <div className="lg:col-span-5 order-1 lg:order-2">
        <FadeIn>
          <div className="relative rounded-[40px] overflow-hidden aspect-[3/4] rotate-2 hover:rotate-0 transition-all duration-500 shadow-2xl">
            <img src={IMAGES.hero_person} alt="Expert" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-md p-8 rounded-[30px]">
              <p className="font-bold text-xl text-black mb-1">Expertise zählt.</p>
              <p className="text-base text-gray-600 font-medium">Kein Outsourcing. Du sprichst mit dem, der den Code schreibt.</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

const Process = () => (
  <section id="process" className="py-32 px-6 md:px-12 lg:px-20 max-w-[1800px] mx-auto">
    <FadeIn>
      <div className="text-center max-w-3xl mx-auto mb-20">
        <Tag text="Der Prozess" />
        <h2 className="text-4xl md:text-5xl font-semibold text-black mb-6 tracking-tight">Wie aufwendig ist das?</h2>
        <p className="text-2xl text-gray-500 font-medium">Sehr wenig. Ich übernehme die Komplexität.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { step: "01", title: "Basisinfos", desc: "Du lieferst Webseite, Zielgruppe und Kernangebot." },
          { step: "02", title: "Analyse", desc: "Ich prüfe die KI-Readiness und Potentiale tiefgehend." },
          { step: "03", title: "Klarheit", desc: "Du bekommst ein Ergebnis, kein Meeting-Chaos." }
        ].map((item, i) => (
          <div key={i} className="bg-white p-12 rounded-[40px] border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
            <span className="text-[6rem] font-bold text-gray-50 absolute -top-6 -right-6 group-hover:text-brand-accent/10 transition-colors">{item.step}</span>
            <div className="relative z-10 pt-4">
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </FadeIn>
  </section>
);

const Offer = () => (
  <section id="audit" className="py-24 px-4 md:px-8 lg:px-12 max-w-[1600px] mx-auto text-center">
    <FadeIn>
      <div className="bg-black text-white rounded-[48px] p-12 md:p-32 relative overflow-hidden text-center flex flex-col items-center">
        {/* Background accent */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-800 via-black to-black z-0"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-7xl font-semibold mb-10 tracking-tight">Bereit für die Zukunft der Suche?</h2>
          <p className="text-xl md:text-3xl text-gray-400 mb-16 leading-relaxed max-w-2xl mx-auto font-medium">
            Finden wir heraus, ob dein Business in KI-Systemen sichtbar werden kann.
          </p>

          <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[32px] border border-white/10 w-full max-w-xl mx-auto hover:bg-white/15 transition-colors">
            <h3 className="text-3xl font-bold mb-3">AI Visibility Audit</h3>
            <p className="text-gray-300 mb-10 text-lg font-medium">Analyse Brand-Wahrnehmung in ChatGPT, Claude & Perplexity.</p>
            <Button text="Kostenloses Audit anfragen" primary={true} className="w-full justify-center text-lg py-6" />
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);

const Footer = () => (
  <footer className="bg-brand-bg text-brand-dark py-12 px-6 md:px-12 border-t border-gray-200">
    <div className="max-w-[1800px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 opacity-60 text-sm font-bold uppercase tracking-widest">
      <p>© 2024 aiseo.hamburg</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-black transition-colors">Impressum</a>
        <a href="#" className="hover:text-black transition-colors">Datenschutz</a>
      </div>
    </div>
  </footer>
);

// --- Main Application ---

const App = () => {
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
};

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(<App />);