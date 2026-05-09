import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Scale, Wallet, Headphones, CheckCircle2, ChevronLeft, ChevronRight, FileText, TrendingUp } from "lucide-react";

const trustFeatures = [
  { icon: ShieldCheck, label: "IRDAI Licensed Insurance Broker" },
  { icon: Scale, label: "Independent & Unbiased Advice" },
  { icon: Wallet, label: "Transparent Pricing — No Hidden Fees" },
  { icon: Headphones, label: "Dedicated Claim Support" },
];

type Slide = {
  badge: string;
  title: React.ReactNode;
  subtitle: string;
  image: string;
  alt: string;
  cta1: string;
  cta2: string;
};

const slides: Slide[] = [
  {
    badge: "Corporate Risk Advisory",
    title: (
      <>Protecting your <span className="text-gradient-gold">business continuity</span> against global risks.</>
    ),
    subtitle: "Tailored corporate insurance solutions designed to safeguard your enterprise, assets, and people.",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=1200&q=80",
    alt: "Business professionals in a corporate meeting",
    cta1: "Get Expert Advice",
    cta2: "Explore Solutions",
  },
  {
    badge: "Construction & Infrastructure",
    title: (
      <>Comprehensive cover for <span className="text-gradient-gold">mega-projects</span> and contractors.</>
    ),
    subtitle: "From Contractor's All-Risk (CAR) to project delay protection, we cover every structural phase.",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80",
    alt: "Construction site and engineers",
    cta1: "View Project Cover",
    cta2: "Consult an Expert",
  },
  {
    badge: "Marine & Logistics",
    title: (
      <>Securing your <span className="text-gradient-gold">cargo</span> across every ocean and transit route.</>
    ),
    subtitle: "End-to-end marine transit, hull, and import-export coverage for frictionless global trade.",
    image: "https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?auto=format&fit=crop&w=1200&q=80",
    alt: "Cargo containers at a busy shipping port",
    cta1: "Secure Your Transit",
    cta2: "Marine Insurance",
  },
  {
    badge: "Industrial Insurance",
    title: (
      <>Shielding heavy <span className="text-gradient-gold">machinery</span> and factory operations.</>
    ),
    subtitle: "Robust property, fire, and machinery breakdown cover to keep your plants running without interruption.",
    image: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80",
    alt: "Engineers inspecting industrial machinery",
    cta1: "Protect Your Plant",
    cta2: "Industrial Cover",
  },
  {
    badge: "End-to-End Claim Support",
    title: (
      <>We stand with you during <span className="text-gradient-gold">claims</span>. Not just purchase.</>
    ),
    subtitle: "From documentation to insurer follow-ups, our dedicated team handles the heavy lifting and complex paperwork.",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=1200&q=80",
    alt: "Support agent assisting a client with claims",
    cta1: "Our Claim Process",
    cta2: "Contact Helpdesk",
  },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused]);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (window.innerWidth < 1024) return; // Parallax only on desktop
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    setMousePos({ x, y });
  };

  return (
    <section
      /* 2. FULL-SCREEN HERO & 1. FIX TOP SPACING: min-h-[100dvh] + flex column structure to center content properly */
      className="relative z-0 overflow-hidden bg-primary text-white min-h-[100dvh] flex flex-col pt-[124px] lg:pt-[136px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setMousePos({ x: 0, y: 0 }); }}
      onMouseMove={handleMouseMove}
    >
      {/* Global Animation Styles */}
      <style>{`
        @keyframes hero-progress {
          0% { width: 0%; opacity: 0.8; }
          100% { width: 100%; opacity: 1; }
        }
        .animate-hero-progress {
          animation: hero-progress 5s linear forwards;
        }
        @keyframes hero-fade {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-fade {
          opacity: 0;
          animation: hero-fade 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes hero-image {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-hero-image {
          opacity: 0;
          animation: hero-image 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes image-pan {
          0% { transform: scale(1.02); }
          100% { transform: scale(1.12); }
        }
        .animate-image-pan {
          animation: image-pan 20s ease-in-out infinite alternate;
          will-change: transform;
        }
        /* 3. BACKGROUND ANIMATION: Floating blobs keyframes */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.05); }
          66% { transform: translate(-20px, 20px) scale(0.95); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob {
          animation: blob 20s infinite ease-in-out;
          will-change: transform;
        }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* 3. LIGHT SWEEP ANIMATION: Diagonal soft light reflection */
        @keyframes light-sweep {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-light-sweep {
          background-size: 200% 200%;
          animation: light-sweep 18s ease-in-out infinite;
          will-change: background-position;
        }

        /* 4. FINTECH STRUCTURE: Animated Grid */
        @keyframes grid-pan {
          0% { background-position: 0px 0px; }
          100% { background-position: 64px 64px; }
        }
        .animate-grid-pan {
          animation: grid-pan 40s linear infinite;
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.02) 1px, transparent 1px);
          background-size: 64px 64px;
        }

        /* 5. FLOATING SVGS: Slow, independent structural movement */
        @keyframes icon-float-1 {
          0%, 100% { transform: translate(0px, 0px) rotate(-5deg); }
          50% { transform: translate(15px, -30px) rotate(5deg); }
        }
        @keyframes icon-float-2 {
          0%, 100% { transform: translate(0px, 0px) rotate(10deg); }
          50% { transform: translate(-20px, 25px) rotate(-5deg); }
        }
        @keyframes icon-float-3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          50% { transform: translate(-15px, -20px) rotate(15deg); }
        }
        .animate-icon-1 { animation: icon-float-1 22s ease-in-out infinite; will-change: transform; }
        .animate-icon-2 { animation: icon-float-2 26s ease-in-out infinite; will-change: transform; }
        .animate-icon-3 { animation: icon-float-3 28s ease-in-out infinite; will-change: transform; }

        /* 6. FLOATING LIGHT PARTICLES */
        @keyframes float-up {
          0% { transform: translateY(5vh) scale(0.8); opacity: 0; }
          20% { opacity: 0.3; }
          80% { opacity: 0.3; }
          100% { transform: translateY(-15vh) scale(1.2); opacity: 0; }
        }
        .animate-particle-1 { animation: float-up 20s ease-in-out infinite; will-change: transform, opacity; }
        .animate-particle-2 { animation: float-up 25s ease-in-out infinite 5s; will-change: transform, opacity; }
        .animate-particle-3 { animation: float-up 22s ease-in-out infinite 10s; will-change: transform, opacity; }
        .animate-particle-4 { animation: float-up 28s ease-in-out infinite 15s; will-change: transform, opacity; }
      `}</style>

      {/* Top Progress Bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-white/5 z-50">
        <div
          key={index}
          className="h-full bg-gradient-to-r from-gold/50 via-gold to-gold/50 animate-hero-progress origin-left"
          style={{ animationPlayState: paused ? 'paused' : 'running' }}
        />
      </div>

      {/* PREMIUM BACKGROUND: Depth, Floating Glow, and Light Sweep */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        {/* LAYER 1: BASE GRADIENT DEPTH */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,transparent_20%,rgba(0,0,0,0.4)_100%)]" />

        {/* LAYER 2: FINTECH STRUCTURE (Grid & Connection Lines) */}
        <div className="absolute inset-0 animate-grid-pan [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)]" />
        <svg className="absolute inset-0 w-full h-full opacity-[0.02]" viewBox="0 0 1440 800" preserveAspectRatio="none" fill="none" stroke="white" strokeWidth="1">
          <path d="M-100,600 C300,400 500,700 900,300 C1200,0 1500,400 1600,200" />
          <path d="M-100,400 C200,200 400,500 800,100 C1100,-200 1400,300 1600,100" />
        </svg>

        {/* LAYER 3: FLOATING ICONS, BLOBS, AND PARTICLES */}
        <div className="absolute top-[20%] left-[5%] opacity-[0.03] blur-[1px] animate-icon-1 text-white">
          <ShieldCheck className="w-40 h-40" strokeWidth={0.5} />
        </div>
        <div className="absolute bottom-[25%] right-[10%] opacity-[0.02] blur-[2px] animate-icon-2 text-white">
          <FileText className="w-48 h-48" strokeWidth={0.5} />
        </div>
        <div className="absolute top-[15%] right-[25%] opacity-[0.03] blur-[1.5px] animate-icon-3 text-white">
          <TrendingUp className="w-24 h-24" strokeWidth={1} />
        </div>

        <div className="absolute top-[5%] right-[10%] w-[45vw] h-[45vw] max-w-[600px] max-h-[600px] bg-gold/10 rounded-full blur-[130px] animate-blob mix-blend-screen" />
        <div className="absolute bottom-[5%] left-[5%] w-[50vw] h-[50vw] max-w-[700px] max-h-[700px] bg-blue-400/10 rounded-full blur-[150px] animate-blob animation-delay-2000 mix-blend-screen" />
        <div className="absolute top-[35%] left-[35%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-white/5 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen" />

        <div className="absolute top-[30%] left-[20%] w-2 h-2 bg-white/40 rounded-full blur-[2px] animate-particle-1" />
        <div className="absolute top-[60%] left-[80%] w-3 h-3 bg-gold/30 rounded-full blur-[3px] animate-particle-2" />
        <div className="absolute top-[80%] left-[40%] w-2 h-2 bg-white/20 rounded-full blur-[2px] animate-particle-3" />
        <div className="absolute top-[20%] left-[60%] w-4 h-4 bg-gold/20 rounded-full blur-[4px] animate-particle-4" />

        {/* LAYER 4: LIGHT SWEEP EFFECT */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent animate-light-sweep" />

        {/* Vignette edge blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-primary/90" />
      </div>

      {/* Main Content Wrapper - uses flex-1 to push trust bar to bottom, and justify-center to vertically center content */}
      <div className="container-x relative flex-1 flex flex-col justify-center py-12 lg:py-20">
        <div className="relative w-full">
          {/* PERFORMANCE: Render ONLY the active slide. Key remount triggers smooth CSS entry animations */}
          <div key={index} className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center w-full">
            {/* LEFT */}
            <div className="max-w-[580px] lg:max-w-none lg:pr-8 order-2 lg:order-1">
              <div className="animate-hero-fade" style={{ animationDelay: "0ms" }}>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] uppercase tracking-widest font-semibold text-white/80 backdrop-blur-sm mb-6">
                  <ShieldCheck className="h-3 w-3 text-gold" />
                  {slides[index].badge}
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.75rem] font-extrabold leading-[1.12] tracking-tight animate-hero-fade" style={{ animationDelay: "100ms" }}>
                {slides[index].title}
              </h1>

              <p className="mt-6 text-lg lg:text-xl text-white/70 font-medium leading-relaxed max-w-[500px] animate-hero-fade" style={{ animationDelay: "200ms" }}>
                {slides[index].subtitle}
              </p>

              <div className="mt-10 animate-hero-fade" style={{ animationDelay: "300ms" }}>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                  <div className="relative group/cta inline-block w-full sm:w-auto">
                    <div className="absolute inset-0 bg-gold/20 blur-xl rounded-full opacity-40 group-hover/cta:opacity-80 transition-opacity duration-500 pointer-events-none" />
                    <Button variant="gold" size="lg" asChild className="relative w-full sm:w-auto font-semibold shadow-none hover:-translate-y-0.5 hover:shadow-lg hover:shadow-gold/20 transition-all duration-300">
                      <a href="#contact">{slides[index].cta1}</a>
                    </Button>
                  </div>
                  <Button variant="ghost" size="lg" asChild className="w-full sm:w-auto text-white/70 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 transition-all font-semibold">
                    <a href="#contact">{slides[index].cta2}</a>
                  </Button>
                </div>
                <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs font-medium text-white/50">
                  <CheckCircle2 className="h-3.5 w-3.5 text-gold/70" />
                  <span>Free • No obligation • Takes 30 sec</span>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div 
              className="relative w-full aspect-[16/9] sm:aspect-[21/9] lg:aspect-[4/3] animate-hero-image order-1 lg:order-2"
              style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)`, transition: 'transform 0.4s ease-out' }}
            >
              <div className="absolute inset-0 bg-gold/15 blur-[100px] rounded-full transform translate-x-8 -translate-y-8" />
              
              <div className="relative rounded-[24px] overflow-hidden border border-white/10 w-full h-full shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img
                  src={slides[index].image}
                  alt={slides[index].alt}
                  className="w-full h-full object-cover object-center animate-image-pan"
                  width={1024}
                  height={768}
                  loading="eager"
                />
                <div className="absolute inset-0 bg-primary/30 mix-blend-multiply pointer-events-none" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.6)_100%)] pointer-events-none" />
                <div className="absolute inset-0 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.15)] rounded-[24px] pointer-events-none" />
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-10 lg:mt-12 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${i === index ? "w-8 bg-gold" : "w-4 bg-white/25 hover:bg-white/40"}`}
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => goTo(index - 1)}
              aria-label="Previous slide"
              className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => goTo(index + 1)}
              aria-label="Next slide"
              className="h-10 w-10 rounded-full border border-white/15 bg-white/5 hover:bg-white/10 flex items-center justify-center transition"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* 6. TRUST BAR: Blended with low contrast and subtle blur */}
      <div className="relative z-20 border-t border-white/[0.03] bg-gradient-to-b from-white/[0.02] to-transparent backdrop-blur-sm mt-auto">
        <div className="container-x py-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:divide-x divide-white/[0.05] text-left">
            {trustFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-3 lg:pl-6 first:lg:pl-0 group opacity-70 hover:opacity-100 transition-opacity duration-300">
                <Icon className="h-5 w-5 text-gold shrink-0" />
                <span className="text-xs font-medium leading-snug text-white/80 max-w-[160px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
