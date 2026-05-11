import { useState, useRef, useEffect } from "react";
import { Award, ShieldCheck, Users, Handshake, HeartPulse, Car, Plane, Building2, Shield, Anchor, Truck, Wrench, Factory, Boxes, Target, Eye, Sparkles, Scale, Headphones, ArrowRight, FileCheck, Clock, Lock, Mail, Phone, Briefcase, X, CheckCircle2, Settings, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Modal } from "@/components/site/Modal";
import advisorImg from "@/assets/feature-advisor.jpg";
import aboutImg from "@/assets/about-team.jpg";
import logo from "@/assets/vamana-logo.png";

/* ---------- ABOUT ---------- */
export const About = () => {
  const features = [
    { icon: ShieldCheck, title: "Trust", desc: "Built on integrity and long-term client relationships." },
    { icon: Eye, title: "Transparency", desc: "Clear pricing, plain-English policies, no fine-print surprises." },
    { icon: Award, title: "Expert Advisory", desc: "Decades of risk and insurance domain expertise." },
    { icon: Handshake, title: "Long-term Support", desc: "Lifetime advisor — from onboarding to claim disbursal." },
  ];
  return (
    <section id="about" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT: Enhanced Image */}
        <div className="relative h-full w-full max-w-lg mx-auto lg:max-w-none animate-fade-up" style={{ animationDelay: "0ms" }}>
          {/* Soft Glow Behind Image */}
          <div className="absolute inset-0 bg-gold/15 blur-[80px] rounded-full transform -translate-x-4 translate-y-4" />
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-2xl ring-1 ring-border group h-full">
            <img src={aboutImg} alt="Vamana team in consultation" className="w-full h-[500px] lg:h-full min-h-[500px] lg:min-h-[600px] object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]" loading="lazy" width={1024} height={1024} />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent pointer-events-none opacity-90" />
            
            {/* Floating Info Card 1 (Bottom Left) */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-none transform transition-transform duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2 group-hover:translate-x-1">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/30">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg leading-tight">IRDAI Regulated</p>
                  <p className="text-xs text-white/80 font-medium mt-0.5">100% compliant & transparent</p>
                </div>
              </div>
            </div>

            {/* Floating Info Card 2 (Top Right) */}
            <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-md border border-white/20 p-4 rounded-2xl text-primary shadow-xl pointer-events-none transform transition-transform duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-y-2 group-hover:-translate-x-2 hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-display font-bold text-base leading-tight">10,000+</p>
                  <p className="text-[10px] uppercase tracking-wider font-semibold text-muted-foreground mt-0.5">Clients Served</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Structured Content */}
        <div className="flex flex-col">
          <div className="animate-fade-up" style={{ animationDelay: "100ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">About Vamana</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight text-primary">
              Independent insurance advisory, built for the long run.
            </h2>
          </div>
          
          {/* Trust Pills */}
          <div className="mt-6 flex flex-wrap items-center gap-2 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 border border-border/50 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> IRDAI Licensed Broker
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 border border-border/50 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <Briefcase className="h-3.5 w-3.5 text-gold" /> 100+ Years Experience
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 border border-border/50 px-3 py-1.5 text-xs font-semibold text-primary shadow-sm">
              <Handshake className="h-3.5 w-3.5 text-gold" /> Client-First Advisory
            </span>
          </div>
          
          <div className="mt-8 space-y-5 max-w-xl animate-fade-up" style={{ animationDelay: "300ms" }}>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Vamana Insurance is built on over two decades of experience in customer-first organizations. We exist to protect what matters most — your people, your business, and your future.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              We don't just sell policies. We partner with you to design the right insurance strategy, ensuring your risks are covered with clarity, transparency, and zero pressure.
            </p>
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <Button variant="gold" size="lg" asChild className="hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(212,175,55,0.5)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <a href="#contact">Talk to an Advisor</a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:-translate-y-1 hover:bg-secondary/50 hover:shadow-sm transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <a href="#services">Learn More</a>
            </Button>
            <a
              href="#leadership"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              Meet our leadership
              <span aria-hidden className="transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1">→</span>
            </a>
          </div>

          {/* Stats Row */}
          <div className="mt-12 grid sm:grid-cols-2 gap-5 animate-fade-up" style={{ animationDelay: "500ms" }}>
            <div className="bg-white rounded-2xl border border-border/60 p-5 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:-translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-primary">20+</p>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">Years Experience</p>
              </div>
            </div>
            <div className="bg-white rounded-2xl border border-border/60 p-5 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:-translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-4 group">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <p className="font-display font-extrabold text-2xl sm:text-3xl text-primary">100+</p>
                <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-0.5">Years of Total Knowledge Pool</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent animate-fade-up" style={{ animationDelay: "600ms" }} />

          {/* Feature Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            {features.map(({ icon: Icon, title, desc }, i) => {
              const isHighlighted = title === "Trust";
              return (
              <div 
                key={title} 
                className={`rounded-2xl border p-6 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group animate-fade-up ${
                  isHighlighted 
                    ? "bg-primary border-primary text-white" 
                    : "bg-white border-border/60 text-primary hover:border-gold/30"
                }`}
                style={{ animationDelay: `${700 + (i * 100)}ms` }}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-lg transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  isHighlighted 
                    ? "bg-white/10 text-gold group-hover:bg-white/20" 
                    : "bg-secondary text-primary group-hover:bg-primary group-hover:text-gold"
                }`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h4 className={`mt-4 font-display font-bold text-lg ${isHighlighted ? "text-white" : "text-primary"}`}>
                  {title}
                </h4>
                <p className={`mt-1.5 text-sm leading-relaxed ${isHighlighted ? "text-white/80" : "text-muted-foreground"}`}>
                  {desc}
                </p>
              </div>
            )})}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- LEADERSHIP / TEAM ---------- */
export const Leadership = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const team = [
    { name: "Mr. Ajit Mhaske", role: "Director & President", desc: "Leads strategic insurance advisory initiatives with decades of industry expertise." },
    { name: "Mr. Udaysinh Gaikwad", role: "Director", desc: "Drives enterprise growth and corporate governance through robust risk frameworks." },
    { name: "Mr. Vijay Khirdikar", role: "Principal Officer", desc: "Oversees regulatory compliance and core operational excellence aligned with IRDAI." },
    { name: "Mr. Pankaj Pardeshi", role: "Associate Director", desc: "Spearheads business development and client acquisition across diverse corporate sectors." },
  ];

  const getInitials = (name: string) => {
    return name.replace('Mr. ', '').split(' ').map(n => n[0]).join('');
  };

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;
    const index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (team.length - 1));
    setActiveIndex(index || 0);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) return; // Desktop uses grid layout
      if (scrollRef.current) {
        let nextIndex = activeIndex + 1;
        if (nextIndex >= team.length) nextIndex = 0;
        const child = scrollRef.current.children[nextIndex] as HTMLElement;
        if (child) {
          const container = scrollRef.current;
          const childLeft = child.getBoundingClientRect().left;
          const containerLeft = container.getBoundingClientRect().left;
          const scrollPos = container.scrollLeft + childLeft - containerLeft - (container.clientWidth - child.clientWidth) / 2;
          container.scrollTo({ left: scrollPos, behavior: 'smooth' });
        }
      }
    }, 4500);
    return () => clearInterval(interval);
  }, [activeIndex, paused, team.length]);

  return (
    <section id="leadership" className="relative py-24 sm:py-32 bg-[#F8FAFC]/50 overflow-hidden">
      {/* Localized Premium Animations */}
      <style>{`
        @keyframes shimmer-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-shimmer-line {
          animation: shimmer-line 2.5s infinite ease-in-out;
        }
      `}</style>

      {/* Enhanced Premium Background & Ambient Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-faint opacity-[0.04] pointer-events-none" />
      <div className="absolute top-[-10%] right-1/4 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-[-10%] left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none mix-blend-multiply" />

      <div className="container-x relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-up relative">
          {/* Radial Spotlight behind heading */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-gold/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
          
          <div className="relative z-10">
            <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] text-gold mb-3.5">EXECUTIVE BOARD</p>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight text-primary drop-shadow-sm">
              Leadership That Builds Trust
            </h2>
            <div className="mt-6 mx-auto h-[3px] w-24 bg-gradient-to-r from-transparent via-gold/60 to-transparent rounded-full relative overflow-hidden">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/80 to-transparent animate-shimmer-line" />
            </div>
            <p className="mt-6 text-base sm:text-[1.1rem] font-medium text-muted-foreground/90 leading-relaxed max-w-2xl mx-auto">
              An executive team of insurance veterans and risk strategists dedicated to securing your enterprise.
            </p>
          </div>
        </div>

        <div className="relative mt-16 sm:mt-20 -mx-4 sm:mx-0 max-w-[1400px] mx-auto">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            className="flex lg:grid lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory lg:snap-none scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] px-4 sm:px-6 lg:px-0 pb-8 lg:pb-0"
          >
            {team.map((m, i) => {
              const isFeatured = i === 0;
              const isActive = activeIndex === i;

              return (
                <div 
                  key={m.name} 
                  className={`w-[85vw] sm:w-[320px] lg:w-auto shrink-0 snap-center group relative rounded-[2rem] p-7 sm:p-8 flex flex-col transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden animate-fade-up
                    ${isActive ? 'scale-100 opacity-100' : 'scale-[0.96] opacity-70 lg:scale-100 lg:opacity-100'}
                    ${isFeatured 
                      ? 'bg-gradient-to-b from-white/95 to-white/70 border border-gold/40 shadow-[0_15px_40px_-12px_rgba(212,175,55,0.2)] hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.3)] ring-1 ring-gold/10' 
                      : 'bg-white/60 backdrop-blur-2xl border border-white/50 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.08)] hover:bg-white/80 hover:border-gold/30 hover:ring-1 hover:ring-gold/10'
                    } hover:-translate-y-2`}
                  style={{ animationDelay: `${150 + (i * 150)}ms` }}
                >
                {/* Premium Inner Highlight (Glassmorphism Depth) */}
                <div className="absolute inset-0 shadow-[inset_0_1px_1px_rgba(255,255,255,1)] rounded-[2rem] pointer-events-none" />

                {/* Soft gradient shift on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/0 via-gold/[0.04] to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                
                {/* Ambient radial glow on hover */}
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-gold/20 rounded-full blur-[70px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full gap-6">
                  {/* Executive Avatar Container */}
                  <div className="relative self-start">
                    {/* Avatar Hover Glow */}
                    <div className={`absolute inset-0 rounded-[1.25rem] blur-xl transition-opacity duration-700 ease-out pointer-events-none ${isFeatured ? 'bg-gold/30 opacity-100' : 'bg-primary/20 opacity-0 group-hover:opacity-100 group-hover:bg-gold/20'}`} />
                    
                    <div className={`relative flex h-[4.5rem] w-[4.5rem] shrink-0 items-center justify-center rounded-[1.25rem] font-display font-extrabold text-[1.5rem] shadow-sm transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                      ${isFeatured 
                        ? 'bg-primary text-gold border border-gold/40 shadow-[0_8px_20px_-4px_rgba(212,175,55,0.4)]' 
                        : 'bg-white/80 backdrop-blur-sm border border-border/80 text-primary group-hover:bg-primary group-hover:text-gold group-hover:border-gold/40 group-hover:shadow-[0_8px_20px_-4px_rgba(212,175,55,0.3)]'
                      } group-hover:scale-[1.08] group-hover:-rotate-3`}
                    >
                      <div className="absolute inset-0 shadow-[inset_0_1px_2px_rgba(255,255,255,0.4)] rounded-[1.25rem] pointer-events-none" />
                      {getInitials(m.name)}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <p className={`text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] mb-2.5 transition-colors duration-500 ${isFeatured ? 'text-gold' : 'text-gold/80 group-hover:text-gold'}`}>{m.role}</p>
                    <h3 className="font-display font-extrabold text-[1.4rem] leading-tight tracking-tight text-primary group-hover:text-primary/90 transition-colors duration-500">
                      {m.name}
                    </h3>
                    
                    {/* Divider */}
                    <div className="mt-6 h-px w-full bg-gradient-to-r from-border via-border/50 to-transparent group-hover:from-gold/40 group-hover:via-gold/10 transition-colors duration-700" />
                    
                    {/* Description */}
                    <p className="mt-6 text-[0.95rem] leading-relaxed text-muted-foreground/90 group-hover:text-primary/80 transition-colors duration-500">
                      {m.desc}
                    </p>
                  </div>
                </div>
              </div>
            )})}
          </div>

          {/* Mobile Pagination Dots */}
          <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2.5 lg:hidden">
            {team.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setActiveIndex(i);
                  if (scrollRef.current) {
                    const child = scrollRef.current.children[i] as HTMLElement;
                    if (child) {
                      const container = scrollRef.current;
                      const childLeft = child.getBoundingClientRect().left;
                      const containerLeft = container.getBoundingClientRect().left;
                      const scrollPos = container.scrollLeft + childLeft - containerLeft - (container.clientWidth - child.clientWidth) / 2;
                      container.scrollTo({ left: scrollPos, behavior: 'smooth' });
                    }
                  }
                }}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-500 ${activeIndex === i ? 'w-8 bg-gold' : 'w-2.5 bg-primary/15 hover:bg-primary/30'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- VISION & MISSION ---------- */
export const VisionMission = () => {
  const cards = [
    { icon: Eye, eyebrow: "Our Vision", title: <>To become <span className="text-gradient-gold">India's</span> most trusted insurance advisor.</>, desc: "We aim to set the standard for transparency, trust, and long-term relationships — helping every individual and business stay truly protected." },
    { icon: Target, eyebrow: "Our Mission", title: "Make insurance simple, honest, and reliable.", desc: "We help clients understand risks, choose the right coverage, and get claims settled smoothly — with complete transparency and zero pressure." },
  ];
  return (
    <section className="relative py-24 sm:py-32 bg-secondary/20 overflow-hidden">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-faint opacity-[0.06] pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="max-w-2xl animate-fade-up" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Purpose</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-primary leading-tight">What drives us, every day.</h2>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-transparent rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            We don’t just sell insurance — we build long-term trust.
          </p>
        </div>
        
        <div className="mt-12 grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map(({ icon: Icon, eyebrow, title, desc }, i) => {
            const isHighlighted = i === 1; // Mission card highlighted
            return (
            <div 
              key={eyebrow} 
              className={`group relative overflow-hidden rounded-[2rem] border p-10 sm:p-12 animate-fade-up transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 ${
                isHighlighted 
                  ? "bg-primary border-gold/20 text-white shadow-xl hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.25)] hover:border-gold/40" 
                  : "bg-gradient-to-br from-white to-secondary/30 border-border/60 text-primary shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.15)] hover:border-gold/30"
              }`}
              style={{ animationDelay: `${150 + (i * 150)}ms` }}
            >
              <div className={`absolute -top-16 -right-16 h-48 w-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none ${isHighlighted ? "bg-white/10" : "bg-gold/15"}`} />
              
              <div className={`flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.08] group-hover:rotate-3 ${
                isHighlighted ? "bg-white/10 text-gold group-hover:bg-gold/20" : "bg-white border border-border shadow-sm text-primary group-hover:bg-primary group-hover:text-gold"
              }`}>
                <Icon className="h-7 w-7" />
              </div>
              <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
              <h3 className={`mt-3 font-display font-extrabold text-2xl lg:text-3xl leading-snug ${isHighlighted ? "text-white" : "text-primary"}`}>{title}</h3>
              <p className={`mt-4 leading-relaxed text-base sm:text-lg ${isHighlighted ? "text-white/80" : "text-muted-foreground"}`}>{desc}</p>
            </div>
          )})}
        </div>

        {/* CTA Section */}
        <div className="mt-16 flex justify-center animate-fade-up" style={{ animationDelay: "500ms" }}>
          <Button variant="gold" size="lg" asChild className="hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(212,175,55,0.5)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
            <a href="#contact">Talk to an Advisor</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

/* ---------- WHY VAMANA ---------- */
export const WhyVamana = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
    if (scrollWidth <= clientWidth) return;
    const index = Math.round((scrollLeft / (scrollWidth - clientWidth)) * (points.length - 1));
    setActiveIndex(index || 0);
  };

  const points = [
    { icon: Scale, title: "Independent Advisory", desc: "We work for you — not insurers. Honest, unbiased recommendations every time." },
    { icon: Sparkles, title: "Expert Consultation", desc: "Decades of underwriting and risk-advisory experience on every conversation." },
    { icon: Handshake, title: "Claims Done Right", desc: "End-to-end claim assistance — documentation, follow-ups and disbursal." },
    { icon: Headphones, title: "Strong Customer Support", desc: "A dedicated advisor on call — no scripts, no IVRs, no wait times." },
  ];
  return (
    <section id="why" className="relative py-24 sm:py-32 bg-secondary/10 overflow-hidden">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(212,175,55,0.08)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 grid-faint opacity-[0.05] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        {/* Heading Area with Gold Divider */}
        <div className="max-w-2xl animate-fade-up" style={{ animationDelay: "0ms" }}>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Why Vamana</p>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold text-primary leading-tight">
            Insurance, simplified — and on your side.
          </h2>
          <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-transparent rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Four reasons clients trust us with crores in cover. We bring clarity, expertise, and strong advocacy to your insurance portfolio.
          </p>
        </div>

        {/* Premium Interactive Grid Cards / Mobile Slider */}
        <div className="relative mt-12 sm:mt-16 -mx-4 sm:mx-0">
          {/* Gradient Fade Edges (Mobile) */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 sm:hidden pointer-events-none opacity-80" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 sm:hidden pointer-events-none opacity-80" />

          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 overflow-x-auto snap-x snap-mandatory sm:snap-none px-4 sm:px-0 pb-8 sm:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {points.map(({ icon: Icon, title, desc }, i) => (
              <div 
                key={title} 
                className="w-[85vw] min-w-[85vw] sm:w-auto sm:min-w-0 shrink-0 snap-center bg-white/80 backdrop-blur-md rounded-[2rem] border border-border/60 p-8 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.15)] hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-fade-up h-full group relative overflow-hidden" 
                style={{ animationDelay: `${150 + (i * 150)}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none" />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-110 group-hover:-rotate-3">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="relative z-10 mt-8 font-display font-bold text-xl text-primary transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-gold">{title}</h3>
                <p className="relative z-10 mt-3 text-sm sm:text-base leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Pagination Dots */}
        <div className="mt-2 flex items-center justify-center gap-2 sm:hidden">
          {points.map((_, i) => (
            <div 
              key={i} 
              className={`h-1.5 rounded-full transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${activeIndex === i ? 'w-6 bg-gold' : 'w-2 bg-primary/20'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ---------- SERVICES ---------- */
export const Services = () => {
  const [activeService, setActiveService] = useState<any>(null);

  const corporate = [
    { 
      icon: Factory, 
      title: "Industrial", 
      desc: "Property, fire & business interruption cover for plants and warehouses.",
      features: ["Fire & Property Protection", "Machinery Breakdown Cover", "Business Interruption Cover", "Risk Assessment Support", "Claim Assistance"]
    },
    { 
      icon: Wrench, 
      title: "Engineering", 
      desc: "Contractor's all-risk, erection all-risk and equipment cover.",
      features: ["Contractor's All-Risk (CAR)", "Erection All-Risk (EAR)", "Contractor's Plant & Machinery", "Third-Party Liability Coverage", "Project Delay Protection"]
    },
    { 
      icon: Anchor, 
      title: "Marine", 
      desc: "Cargo, hull and transit insurance across import, export and inland routes.",
      features: ["Inland Transit Insurance", "Import & Export Cargo Cover", "Marine Hull Insurance", "Custom Duty & Freight Protection", "End-to-End Claim Support"]
    },
    { 
      icon: Truck, 
      title: "Motor Fleet", 
      desc: "Comprehensive fleet cover for commercial vehicles and logistics.",
      features: ["Own Damage & Theft Cover", "Third-Party Liability Protection", "Driver & Passenger Accident Cover", "Goods in Transit Protection", "Zero Depreciation Add-ons"]
    },
    { 
      icon: Shield, 
      title: "Liability", 
      desc: "Professional indemnity, D&O, cyber and public liability cover.",
      features: ["Directors & Officers (D&O)", "Professional Indemnity", "Cyber & Data Breach Liability", "Commercial General Liability", "Product Liability & Recall"]
    },
    { 
      icon: Boxes, 
      title: "Other Products", 
      desc: "Group health, workmen comp and bespoke corporate risk solutions.",
      features: ["Group Health & GMC", "Workmen's Compensation", "Group Personal Accident", "Credit Insurance", "Tailored Corporate Policies"]
    },
  ];
  const individual = [
    { 
      icon: Plane, 
      title: "Travel", 
      desc: "Domestic & international travel cover — medical, baggage and trip delay.",
      features: ["Emergency Medical Evacuation", "Trip Cancellation & Delay", "Loss of Baggage & Passport", "Personal Liability Cover", "24x7 Global Assistance"]
    },
    { 
      icon: HeartPulse, 
      title: "Health", 
      desc: "Family floater & individual health plans with cashless hospital network.",
      features: ["Comprehensive Cashless Network", "Pre & Post Hospitalization", "No Room Rent Capping Options", "Maternity & OPD Cover", "Annual Health Checkups"]
    },
    { 
      icon: ShieldCheck, 
      title: "Life", 
      desc: "Term, whole-life and savings plans aligned to your financial goals.",
      features: ["High Sum Assured Term Plans", "Critical Illness Riders", "Accidental Death Benefits", "Tax-Free Maturity Returns", "Flexible Premium Payment Terms"]
    },
    { 
      icon: Car, 
      title: "Motor Insurance", 
      desc: "Car & two-wheeler cover with zero-depreciation and engine protection add-ons.",
      features: ["Zero Depreciation Cover", "Engine & Gearbox Protection", "Consumables & Key Replacement", "Roadside Assistance (RSA)", "Return to Invoice (RTI)"]
    },
  ];
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-secondary/10 overflow-hidden">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 grid-faint opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <SectionHeader
            eyebrow="Comprehensive Coverage"
            title="Enterprise-grade protection for your business and life."
            subtitle="We benchmark across top insurers to structure the right coverage, ensuring you are protected against both everyday liabilities and catastrophic risks."
          />
        </div>

        <div className="mt-16">
          <div className="flex items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-border/60 text-gold shadow-sm">
              <Building2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-2xl text-primary">Corporate Solutions</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Tailored for businesses</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {corporate.map((s, i) => <ServiceCard key={s.title} {...s} delay={200 + i * 100} onClick={() => setActiveService({...s, category: "Corporate"})} />)}
          </div>
        </div>

        <div className="my-16 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent animate-fade-up" style={{ animationDelay: "300ms" }} />

        <div>
          <div className="flex items-center gap-4 mb-8 animate-fade-up" style={{ animationDelay: "400ms" }}>
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-border/60 text-gold shadow-sm">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display font-extrabold text-2xl text-primary">Individual & Family</h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mt-1">Personal risk management</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {individual.map((s, i) => <ServiceCard key={s.title} {...s} delay={500 + i * 100} onClick={() => setActiveService({...s, category: "Personal"})} />)}
          </div>
        </div>
      </div>

      <ServiceModal activeService={activeService} onClose={() => setActiveService(null)} />
    </section>
  );
};

const ServiceCard = ({ icon: Icon, title, desc, delay, onClick }: any) => (
  <button 
    onClick={onClick}
    className="text-left w-full group relative bg-white rounded-2xl border border-border/60 p-7 shadow-sm hover:shadow-[0_20px_50px_-12px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:-translate-y-1.5 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-fade-up h-full flex flex-col focus:outline-none focus:ring-2 focus:ring-gold/50 overflow-hidden" 
    style={{ animationDelay: `${delay}ms` }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none" />

    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold group-hover:scale-[1.08] group-hover:-rotate-3 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
      <Icon className="h-6 w-6" />
    </div>
    <h4 className="relative z-10 mt-6 font-display font-bold text-xl text-primary group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">{title}</h4>
    <p className="relative z-10 mt-2.5 text-sm leading-relaxed text-muted-foreground flex-1">{desc}</p>
    
    <div className="relative z-10 mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0">
      Explore <ArrowRight className="h-4 w-4 transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1" />
    </div>
  </button>
);

const ServiceModal = ({ activeService, onClose }: { activeService: any; onClose: () => void }) => {
  useEffect(() => {
    if (activeService) document.body.style.overflow = 'hidden';
    else document.body.style.overflow = '';
    return () => { document.body.style.overflow = ''; };
  }, [activeService]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!activeService) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      <style>{`
        @keyframes modal-fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-slide-up { from { opacity: 0; transform: scale(0.96) translateY(20px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes fade-in-stagger { from { opacity: 0; transform: translateX(-10px); } to { opacity: 1; transform: translateX(0); } }
        .animate-modal-backdrop { animation: modal-fade-in 0.4s ease-out forwards; }
        .animate-modal-content { animation: modal-slide-up 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-stagger { opacity: 0; animation: fade-in-stagger 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
      `}</style>
      
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-primary/60 backdrop-blur-md animate-modal-backdrop"
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative w-full max-w-5xl max-h-[90vh] overflow-hidden rounded-[2rem] bg-primary text-white shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/10 flex flex-col animate-modal-content">
        
        {/* Subtle Background Enhancements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 grid-faint opacity-[0.03] pointer-events-none" />

        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 hover:text-white hover:rotate-90 transition-all duration-300"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Scrollable Content */}
        <div className="relative z-10 flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          <div className="grid lg:grid-cols-5 min-h-full">
            
            {/* LEFT: Visual Section */}
            <div className="hidden sm:flex lg:col-span-2 relative flex-col justify-between overflow-hidden bg-gradient-to-br from-white/5 to-white/[0.01] p-8 border-b lg:border-b-0 lg:border-r border-white/10 group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold/20 rounded-full blur-[80px] group-hover:bg-gold/30 transition-colors duration-700" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] group-hover:bg-blue-500/30 transition-colors duration-700" />
              
              <div className="relative z-10 flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 text-gold shadow-2xl transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-6">
                <activeService.icon className="h-12 w-12" />
              </div>

              <div className="relative z-10 mt-16 space-y-4">
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-xl transform transition-transform duration-500 hover:scale-105 group-hover:translate-x-2">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  Trusted Insurance Advisory
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-xl transform transition-transform duration-500 delay-75 hover:scale-105 group-hover:translate-x-2">
                  <Award className="h-4 w-4 text-gold" />
                  20+ Years Experience
                </div>
                <div className="inline-flex items-center gap-3 rounded-full bg-white/10 backdrop-blur-md border border-white/10 px-5 py-2.5 text-xs font-semibold text-white shadow-xl transform transition-transform duration-500 delay-150 hover:scale-105 group-hover:translate-x-2">
                  <Headphones className="h-4 w-4 text-gold" />
                  Claim Support Included
                </div>
              </div>
            </div>

            {/* RIGHT: Content Section */}
            <div className="lg:col-span-3 flex flex-col p-6 sm:p-10 lg:p-12">
              
              {/* Mobile Icon */}
              <div className="sm:hidden mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 text-gold shadow-lg">
                <activeService.icon className="h-8 w-8" />
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{activeService.category || "Coverage"}</p>
                <h2 className="mt-3 font-display text-3xl sm:text-4xl font-extrabold leading-tight text-white">
                  {activeService.title} Coverage
                </h2>
                <div className="mt-6 h-1 w-16 bg-gradient-to-r from-gold to-transparent rounded-full" />
                <p className="mt-6 text-white/70 leading-relaxed text-base sm:text-lg">
                  {activeService.desc}
                </p>
              </div>

              {/* Features */}
              <div className="mt-10">
                <h4 className="text-sm font-semibold text-white/90 uppercase tracking-wider mb-5">Key Inclusions</h4>
                <ul className="space-y-4">
                  {activeService.features?.map((feat: string, i: number) => (
                    <li key={i} className="flex items-start gap-3 text-sm sm:text-base font-medium text-white/80 animate-stagger" style={{ animationDelay: `${200 + i * 100}ms` }}>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold mt-0.5">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Benefit Mini Cards */}
              <div className="mt-10 grid grid-cols-2 gap-3 sm:gap-4">
                {[
                  { icon: Clock, label: "Fast Claims" },
                  { icon: Users, label: "Expert Advisors" },
                  { icon: FileCheck, label: "Customized Policies" },
                  { icon: Handshake, label: "Long-term Support" },
                ].map((b, i) => (
                  <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 p-3 sm:p-4 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/10 hover:-translate-y-1 hover:border-gold/30 hover:shadow-[0_10px_30px_rgba(212,175,55,0.15)] group/card animate-stagger" style={{ animationDelay: `${600 + i * 100}ms` }}>
                    <b.icon className="h-5 w-5 text-gold shrink-0 group-hover/card:scale-[1.15] transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
                    <span className="text-xs sm:text-sm font-semibold text-white">{b.label}</span>
                  </div>
                ))}
              </div>

              {/* CTA Section */}
              <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row gap-4 animate-stagger" style={{ animationDelay: `1000ms` }}>
                <Button variant="gold" size="xl" asChild className="w-full sm:w-auto shadow-[0_8px_20px_rgba(212,175,55,0.2)] hover:-translate-y-1 hover:shadow-[0_15px_30px_-5px_rgba(212,175,55,0.4)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-sm font-bold">
                  <a href="#contact" onClick={onClose}>Talk to an Advisor <ArrowRight className="h-4 w-4 ml-2" /></a>
                </Button>
                <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto hover:bg-white/10 hover:-translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] text-sm font-bold border-white/30 hover:border-white/60">
                  <a href="#quote" onClick={onClose}>Get Free Consultation</a>
                </Button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ---------- HOW IT WORKS ---------- */
export const HowItWorks = () => {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const steps = [
    { title: "Discover", desc: "Tell us about you. We assess your real risks — not generic templates." },
    { title: "Compare", desc: "We benchmark plans across top insurers, side-by-side, jargon-free." },
    { title: "Customize", desc: "Right cover, right add-ons, right premium. Nothing extra, nothing missing." },
    { title: "Claim Support", desc: "We handle paperwork & follow-ups, end-to-end, so you don't have to." },
  ];
  return (
    <section id="how" ref={ref} className="py-24 sm:py-32 bg-primary text-white relative overflow-hidden">
      <style>{`
        @keyframes soft-pan {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10%, 5%) scale(1.05); }
        }
        .animate-soft-pan {
          animation: soft-pan 15s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes number-scale-in {
          0% { opacity: 0; transform: translateY(10px) scale(0.9); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-number-scale {
          animation: number-scale-in 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Subtle Premium Background Animation */}
      <div className="absolute inset-0 grid-faint opacity-[0.03] pointer-events-none" />
      <div className="absolute -top-32 right-1/4 h-[500px] w-[500px] rounded-full bg-gold/10 blur-[120px] animate-soft-pan pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[150px] animate-soft-pan pointer-events-none" style={{ animationDelay: "-7.5s" }} />
      
      <div className="container-x relative z-10">
        <div className={`transition-all duration-1000 transform ease-out will-change-transform ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <SectionHeader dark eyebrow="How it works" title="Four steps. Zero confusion." subtitle="A clear, structured process — built around transparency at every stage." />
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div 
              key={s.title} 
              className={`group relative rounded-[2rem] border border-white/5 bg-white/[0.03] backdrop-blur-xl p-8 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1.5 hover:scale-[1.015] hover:border-gold/30 hover:shadow-[0_20px_50px_rgba(212,175,55,0.15)] hover:bg-white/10 will-change-transform ${inView ? 'animate-fade-up' : 'opacity-0'}`} 
              style={{ animationDelay: inView ? `${i * 150}ms` : '0ms', animationFillMode: 'forwards' }}
            >
              <span 
                className={`inline-block font-display text-4xl font-extrabold text-gold/60 transition-all duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:text-gold group-hover:scale-[1.15] group-hover:-rotate-3 group-hover:drop-shadow-[0_0_15px_rgba(212,175,55,0.5)] ${inView ? 'animate-number-scale' : 'opacity-0'}`}
                style={{ animationDelay: inView ? `${150 + (i * 150)}ms` : '0ms', animationFillMode: 'forwards' }}
              >
                0{i + 1}
              </span>
              <h3 className="mt-6 font-display font-bold text-xl text-white/90 group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60 group-hover:text-white/90 transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ---------- FEATURE HIGHLIGHT ---------- */
export const FeatureHighlight = () => {
  const items = [
    { icon: FileCheck, title: "Transparent Policy Guidance", desc: "Clear explanations, honest comparisons, and no confusing insurance jargon." },
    { icon: Headphones, title: "Dedicated Claim Assistance", desc: "Fast documentation support, follow-ups, and smooth claim coordination." },
    { icon: Handshake, title: "Long-Term Relationship", desc: "Continuous advisory support for renewals, upgrades, and changing risk needs." },
  ];
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 grid-faint opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT: Enhanced Image */}
        <div className="relative order-2 lg:order-1 h-full w-full max-w-lg mx-auto lg:max-w-none animate-fade-up" style={{ animationDelay: "100ms" }}>
          <div className="absolute inset-0 bg-gold/15 blur-[80px] rounded-full transform -translate-x-4 translate-y-4 pointer-events-none" />
          
          <div className="relative rounded-[2rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.2)] ring-1 ring-border group h-full">
            <img src={advisorImg} alt="Vamana advisor consulting client" className="w-full h-[500px] lg:h-full min-h-[500px] lg:min-h-[600px] object-cover transition-transform duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03]" loading="lazy" width={1024} height={1024} />
            
            {/* Subtle Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent pointer-events-none opacity-90" />
            
            {/* Floating Info Card */}
            <div className="absolute bottom-6 left-6 right-6 sm:right-auto bg-white/10 backdrop-blur-xl border border-white/20 p-5 rounded-2xl text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-none transform transition-transform duration-[500ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:-translate-y-2 group-hover:translate-x-1">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gold/20 text-gold border border-gold/30">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="font-display font-bold text-lg leading-tight">Client-First Approach</p>
                  <p className="text-xs text-white/80 font-medium mt-0.5">Your trusted insurance partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* RIGHT: Structured Content */}
        <div className="order-1 lg:order-2 flex flex-col">
          <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Why clients stay with Vamana</p>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-extrabold leading-tight text-primary">
              Built on trust, backed by expertise, focused on your future.
            </h2>
            <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-transparent rounded-full" />
            <div className="mt-6 space-y-5 max-w-xl">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Vamana Insurance helps individuals, families, and businesses make confident insurance decisions with complete transparency and long-term support.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                From selecting the right coverage to managing claims and renewals, our advisors stay involved at every stage — ensuring your protection evolves with your life and business needs.
              </p>
            </div>
          </div>

          {/* Premium Trust Badges */}
          <div className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 hover:bg-white border border-border/50 hover:border-gold/30 hover:-translate-y-[1px] hover:shadow-[0_8px_16px_rgba(212,175,55,0.12)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] px-4 py-2 text-xs font-semibold text-primary cursor-default">
              <Briefcase className="h-3.5 w-3.5 text-gold" /> 20+ Years Industry Experience
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 hover:bg-white border border-border/50 hover:border-gold/30 hover:-translate-y-[1px] hover:shadow-[0_8px_16px_rgba(212,175,55,0.12)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] px-4 py-2 text-xs font-semibold text-primary cursor-default">
              <ShieldCheck className="h-3.5 w-3.5 text-gold" /> IRDAI Licensed Broker
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/80 hover:bg-white border border-border/50 hover:border-gold/30 hover:-translate-y-[1px] hover:shadow-[0_8px_16px_rgba(212,175,55,0.12)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] px-4 py-2 text-xs font-semibold text-primary cursor-default">
              <Handshake className="h-3.5 w-3.5 text-gold" /> Client-First Advisory
            </span>
          </div>
          
          <div className="my-10 h-px w-full bg-gradient-to-r from-transparent via-border to-transparent animate-fade-up" style={{ animationDelay: "200ms" }} />
          
          <div className="space-y-4">
            {items.map(({ icon: Icon, title, desc }, i) => (
              <div 
                key={title} 
                className="bg-white rounded-2xl border border-border/60 p-5 sm:p-6 shadow-sm hover:shadow-[0_20px_40px_-12px_rgba(212,175,55,0.15)] hover:border-gold/30 hover:-translate-y-1 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-4 group animate-fade-up relative overflow-hidden"
                style={{ animationDelay: `${300 + (i * 100)}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none" />
                <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-secondary text-primary group-hover:bg-primary group-hover:text-gold group-hover:scale-[1.08] group-hover:-rotate-3 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="relative z-10">
                  <h4 className="font-display font-bold text-lg text-primary">{title}</h4>
                  <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ---------- INSIGHTS / BLOG ---------- */
const blogPosts = [
  {
    id: "health",
    tag: "Health",
    title: "Family floater vs individual health: which one actually saves more?",
    read: "6 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    body: `When choosing health insurance, most Indian families face the same question — should you buy a single family floater or individual policies for each member?\n\nA family floater shares one sum insured across all members. It's typically cheaper when everyone is young and healthy, and gives the flexibility of one large pool. However, if one member has a major claim, the cover is depleted for the rest of the year.\n\nIndividual policies cost more in total premium, but each member has their own dedicated cover. This is often the better choice when there's an age gap of 15+ years between members, when a parent has pre-existing conditions, or when the eldest member is over 50.\n\nA practical hybrid: keep a family floater of ₹10–15L for routine claims, and add a ₹25–50L super top-up that kicks in for major hospitalisations. You get high cover at low premium — and protection that doesn't run out.`,
  },
  {
    id: "motor",
    tag: "Motor",
    title: "Zero-dep, IDV, NCB — the 3 add-ons that decide your motor claim.",
    read: "5 min read",
    image: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&w=800&q=80",
    body: `Motor insurance looks simple until you actually file a claim. Three terms quietly decide how much money you receive — IDV, Zero Depreciation, and No Claim Bonus.\n\nIDV (Insured Declared Value) is the maximum payout if your vehicle is stolen or written off. Many buyers reduce IDV to lower premium — and regret it badly during a total loss claim. Always insure at fair market value.\n\nZero Depreciation cover ensures the insurer pays the full part-replacement cost without deducting depreciation on plastic, rubber and metal parts. For cars under 5 years old, this single add-on can mean the difference between a ₹40,000 and a ₹15,000 settlement on a typical bumper repair.\n\nNo Claim Bonus (NCB) is a discount earned for every claim-free year — going up to 50%. Don't lose it on a small dent claim; pay small repairs out of pocket and protect the bonus.`,
  },
  {
    id: "cyber",
    tag: "Business",
    title: "Why every Indian SME needs cyber liability cover in 2026.",
    read: "8 min read",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80",
    body: `India recorded over 1.6 million cyber incidents in 2025 — and SMEs were the biggest target. A single ransomware attack now costs an average Indian SME ₹35–80 lakh in downtime, recovery and regulatory penalties.\n\nUnder the Digital Personal Data Protection Act, businesses handling customer data are now legally accountable for breaches. Fines can go up to ₹250 crore per violation.\n\nA cyber liability policy typically covers: data breach response, forensic investigation, legal defence, regulatory penalties, business interruption, and ransomware payments. Premium for a ₹5 crore cover starts as low as ₹40,000 a year — a fraction of the potential loss.\n\nIf your business processes payments, stores customer data, or runs on email and cloud apps, you already have cyber exposure. The question is whether it's insured.`,
  },
];

export const Insights = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const active = blogPosts.find((p) => p.id === openId) || null;

  return (
    <section id="insights" className="relative py-24 sm:py-32 overflow-hidden bg-white">
      {/* Subtle Premium Background Enhancements */}
      <div className="absolute inset-0 grid-faint opacity-[0.03] pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-x relative z-10">
        <div className="animate-fade-up" style={{ animationDelay: "0ms" }}>
          <SectionHeader eyebrow="Insights" title="Read before you buy." subtitle="Practical, jargon-free guides written by our advisory team." />
        </div>
        
        <div className="relative mt-14 sm:mt-16 -mx-4 sm:mx-0">
          {/* Mobile Fade Edges */}
          <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 sm:hidden pointer-events-none opacity-80" />
          <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 sm:hidden pointer-events-none opacity-80" />

          <div className="flex sm:grid sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-8 overflow-x-auto snap-x snap-mandatory sm:snap-none px-4 sm:px-0 pb-8 sm:pb-0 scroll-smooth [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {blogPosts.map((p, i) => (
              <article 
                key={p.id} 
                className="w-[85vw] min-w-[85vw] sm:w-auto sm:min-w-0 shrink-0 snap-center group relative rounded-2xl sm:rounded-[2rem] overflow-hidden border border-border/60 bg-white shadow-sm hover:shadow-[0_25px_50px_-12px_rgba(212,175,55,0.2)] hover:border-gold/40 hover:-translate-y-1.5 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] animate-fade-up flex flex-col cursor-pointer" 
                style={{ animationDelay: `${100 + i * 150}ms` }} 
                onClick={() => setOpenId(p.id)}
              >
                {/* Image Section */}
                <div className="relative h-[180px] sm:h-[220px] w-full overflow-hidden bg-primary/5">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-all duration-[700ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:scale-[1.03] group-hover:brightness-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] pointer-events-none" />
                  <span className="absolute top-4 left-4 sm:top-5 sm:left-5 rounded-full bg-gold/90 backdrop-blur-md text-primary text-[10px] sm:text-[11px] font-bold uppercase tracking-wider px-3.5 py-1.5 shadow-lg shadow-black/20">
                    {p.tag}
                  </span>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 flex flex-col flex-1 relative z-10">
                  <h3 className="font-display font-extrabold text-lg sm:text-xl text-primary leading-snug line-clamp-2 group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    {p.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 text-primary/40" />
                    <span>{p.read}</span>
                  </div>
                  <div className="mt-auto pt-6 flex items-center justify-between">
                    <span className="text-[12px] sm:text-[13px] font-bold uppercase tracking-wider text-primary group-hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-2">
                      Read Blog <ArrowRight className="h-4 w-4 transition-transform duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)] group-hover:translate-x-1.5" />
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>

      <Modal open={!!active} onOpenChange={(o) => !o && setOpenId(null)} title={active?.title || ""} description={active ? `${active.tag} • ${active.read}` : ""} size="xl">
        {active && (
          <div className="space-y-6">
            <div className="prose prose-sm max-w-none whitespace-pre-line text-foreground leading-relaxed">
              {active.body}
            </div>
            <div className="border-t border-border pt-6">
              <h4 className="font-display font-bold text-primary mb-4">Other Blogs</h4>
              <div className="grid sm:grid-cols-2 gap-3">
                {blogPosts.filter((p) => p.id !== active.id).map((p) => (
                  <button key={p.id} onClick={() => setOpenId(p.id)} className="text-left p-4 rounded-xl border border-border hover:border-gold/50 hover:shadow-[0_8px_20px_-4px_rgba(212,175,55,0.15)] hover:-translate-y-0.5 hover:bg-secondary/50 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-gold">{p.tag}</span>
                    <p className="mt-1 font-display font-semibold text-sm text-primary leading-snug">{p.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{p.read}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

/* ---------- FINAL CTA ---------- */
export const FinalCTA = () => (
  <section id="contact" className="py-20 sm:py-28">
    <div className="container-x">
      <div className="relative overflow-hidden rounded-3xl bg-primary p-10 sm:p-16 text-white shadow-lift">
        <div className="absolute inset-0 grid-faint opacity-30 pointer-events-none" />
        <div className="absolute -top-24 -right-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl pointer-events-none" />
        <div className="relative max-w-2xl">
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold leading-tight">
            Let's secure <span className="text-gradient-gold">what matters most.</span>
          </h2>
          <p className="mt-4 text-white/75 text-base sm:text-lg">
            Get a free, no-obligation consultation with a Vamana advisor. We'll review your existing cover and show you exactly where you stand.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button variant="gold" size="xl" asChild className="hover:-translate-y-1 hover:shadow-[0_12px_24px_-8px_rgba(212,175,55,0.5)] transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <a href="tel:+917083550101">Call an Advisor <ArrowRight className="h-4 w-4 ml-1.5" /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="hover:bg-white/10 hover:-translate-y-1 border-white/30 hover:border-white/60 transition-all duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
              <a href="mailto:solutions@vamanainsurance.in">Email Us</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ---------- FOOTER ---------- */
const legalDocs: Record<string, { title: string; body: string }> = {
  terms: { title: "Terms & Conditions", body: `These Terms govern your use of Vamana Insurance's website and services. By accessing our services, you agree to comply with all applicable laws and regulations of India, including the IRDAI (Insurance Brokers) Regulations.\n\nVamana acts as an intermediary between clients and insurance companies. We do not underwrite policies. All policy terms, conditions, and claim approvals are governed by the respective insurer.\n\nYou agree to provide accurate information for any quote, application or claim. Misrepresentation may result in policy cancellation by the insurer.\n\nPlease contact our Compliance Team.` },
  privacy: { title: "Privacy Policy", body: `Vamana respects your privacy. We collect personal information solely to provide insurance advisory and policy services.\n\nWe collect: name, contact details, demographic data, financial information, and health information (where required for underwriting).\n\nWe use this data to: source quotes, issue policies, process claims and provide ongoing service. We share data only with insurers and regulatory authorities, never with marketers.\n\nYou may request access, correction or deletion of your personal data at any time by writing to our Compliance Team.` },
  refund: { title: "Refund Policy", body: `Insurance premium refunds are governed by the free-look period and cancellation terms of each insurer.\n\nFree-look period: Most policies allow a 15–30 day free-look window from issuance. You may cancel for a full refund minus stamp duty, medical and proportionate risk charges.\n\nMid-term cancellation: Refund is calculated on a short-period basis as per insurer's tariff.\n\nVamana does not charge any separate broker fee from clients; our remuneration is paid by insurers as commission.` },
  disclaimer: { title: "Disclaimer", body: `Information on this website is for general guidance only and does not constitute a contract of insurance. All policy benefits, exclusions and conditions are governed by the respective insurer's policy wording.\n\nInsurance is the subject matter of solicitation. Premium quotes are indicative and subject to underwriting approval. Past performance of any insurer is not indicative of future claim experience.\n\nVamana Insurance — IRDAI Direct (Life & General) Broker License No. 1144.` },
};

export const Footer = () => {
  const [openLegal, setOpenLegal] = useState<string | null>(null);
  const [careersOpen, setCareersOpen] = useState(false);
  const active = openLegal ? legalDocs[openLegal] : null;

  return (
    <footer className="bg-primary text-white/80 pt-16 pb-8">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="inline-flex items-center justify-center bg-white p-3 sm:px-4 sm:py-3 rounded-xl sm:rounded-2xl shadow-sm transition-transform duration-300 hover:-translate-y-1">
              <img src={logo} alt="Vamana Insurance" className="h-8 sm:h-10 lg:h-11 w-auto object-contain block" loading="lazy" />
            </a>
            <p className="text-sm mt-6 leading-relaxed text-white/65 max-w-sm">
              Independent insurance advisory built on transparency, expertise and lifelong client relationships.
            </p>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Company</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#about" className="hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">About Us</a></li>
              <li><a href="#why" className="hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">Why Vamana</a></li>
              <li><a href="#services" className="hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">Services</a></li>
              <li><a href="#insights" className="hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">Insights</a></li>
              <li><button onClick={() => setCareersOpen(true)} className="hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">Careers</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Legal</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {Object.entries(legalDocs).map(([key, doc]) => (
                <li key={key}>
                  <button onClick={() => setOpenLegal(key)} className="text-left hover:text-gold transition-colors duration-[350ms] ease-[cubic-bezier(0.4,0,0.2,1)]">{doc.title}</button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-bold text-white">Contact</h4>
            <ul className="mt-4 space-y-3.5 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-1 shrink-0 text-gold/80" />
                <a href="tel:+917083550101" className="hover:text-gold transition-colors duration-300">+91 7083550101</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-1 shrink-0 text-gold/80" />
                <a href="mailto:solutions@vamanainsurance.in" className="hover:text-gold transition-colors duration-300">solutions@vamanainsurance.in</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-1 shrink-0 text-gold/80" />
                <span>A1-1211-12, Boulevard Towers,<br />Sadhu Vaswani Circle, Pune 411001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row gap-4 items-center justify-between text-xs text-white/55">
          <p>© {new Date().getFullYear()} Vamana Insurance. All rights reserved.</p>
          <p>IRDAI Direct (Life & General) Broker License No. 1144 • Insurance is the subject matter of solicitation.</p>
        </div>
      </div>

      <Modal open={!!active} onOpenChange={(o) => !o && setOpenLegal(null)} title={active?.title || ""}>
        <div className="whitespace-pre-line text-foreground leading-relaxed">{active?.body}</div>
      </Modal>

      <Modal open={careersOpen} onOpenChange={setCareersOpen} title="Careers at Vamana" description="Join a team that's redefining insurance broking in India.">
        <div className="space-y-5">
          <p className="text-foreground">
            We're always looking for sharp, client-first people — advisors, claims specialists, underwriters and engineers. If you care about doing insurance the right way, we'd love to hear from you.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-gold"><Mail className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Email</p>
                <a href="mailto:solutions@vamanainsurance.in" className="text-sm font-semibold text-primary hover:text-gold">solutions@vamanainsurance.in</a>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-secondary/40">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-gold"><Phone className="h-5 w-5" /></div>
              <div>
                <p className="text-xs text-muted-foreground">Phone</p>
                <a href="tel:+917083550101" className="text-sm font-semibold text-primary hover:text-gold">+91 7083550101</a>
              </div>
            </div>
          </div>
          <Button variant="default" asChild className="w-full sm:w-auto">
            <a href="mailto:solutions@vamanainsurance.in?subject=Application%20%E2%80%93%20Resume"><Briefcase className="h-4 w-4" /> Send Resume</a>
          </Button>
        </div>
      </Modal>
    </footer>
  );
};

/* ---------- HELPERS ---------- */
const SectionHeader = ({ eyebrow, title, subtitle, dark }: { eyebrow: string; title: string; subtitle?: string; dark?: boolean }) => (
  <div className="max-w-2xl">
    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{eyebrow}</p>
    <h2 className={`mt-3 font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-extrabold leading-tight ${dark ? "text-white" : "text-primary"}`}>{title}</h2>
    <div className="mt-6 h-1 w-20 bg-gradient-to-r from-gold to-transparent rounded-full" />
    {subtitle && <p className={`mt-6 text-base sm:text-lg leading-relaxed ${dark ? "text-white/70" : "text-muted-foreground"}`}>{subtitle}</p>}
  </div>
);

/* legacy export kept for compatibility */
export const Expect = () => null;
