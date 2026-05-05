import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Scale, Wallet, Headphones, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import heroImg from "@/assets/feature-advisor.jpg";
import honestImg from "@/assets/hero-honest.jpg";
import expertsImg from "@/assets/hero-experts.jpg";
import claimsImg from "@/assets/hero-claims.jpg";

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
};

const slides: Slide[] = [
  {
    badge: "IRDAI Regulated Broker",
    title: (
      <>Insurance that protects your <span className="text-gold">wealth</span> — not just your risks.</>
    ),
    subtitle: "We don't push policies. We help you choose the right cover with complete clarity — no hidden terms, no pressure.",
    image: heroImg,
    alt: "Professional advisor consulting a client",
  },
  {
    badge: "Built on Transparency",
    title: (
      <>No hidden terms. No surprises. Just <span className="text-gold">honest</span> insurance advice.</>
    ),
    subtitle: "Every clause explained. Every exclusion disclosed. You'll always know exactly what you're buying.",
    image: honestImg,
    alt: "Advisor explaining policy documents to a client",
  },
  {
    badge: "Backed by Experience",
    title: (
      <>Guided by experts with <span className="text-gold">100+ years</span> of combined experience.</>
    ),
    subtitle: "A senior advisory team that has navigated thousands of policies, claims, and complex risks for individuals and corporates.",
    image: expertsImg,
    alt: "Senior advisor shaking hands with a client",
  },
  {
    badge: "Claims-First Promise",
    title: (
      <>We stand with you during <span className="text-gold">claims</span> — not just during purchase.</>
    ),
    subtitle: "From documentation to follow-ups with insurers, our team handles the heavy lifting so you can focus on what matters.",
    image: claimsImg,
    alt: "Support agent assisting a client with claims",
  },
];

export const Hero = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    timer.current = window.setTimeout(() => setIndex((i) => (i + 1) % slides.length), 5000);
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, [index, paused]);

  const goTo = (i: number) => setIndex((i + slides.length) % slides.length);

  return (
    <section
      className="relative overflow-hidden bg-primary bg-gradient-to-br from-primary via-white/5 to-primary text-white pt-28 sm:pt-32 lg:pt-40"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none" />

      <div className="container-x relative pb-12 sm:pb-16 lg:pb-24">
        <div className="relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[480px] lg:min-h-[560px]">
          {slides.map((slide, i) => {
            const active = i === index;
            return (
              <div
                key={i}
                aria-hidden={!active}
                className={`${active ? "relative opacity-100" : "absolute inset-0 opacity-0 pointer-events-none"} grid lg:grid-cols-2 gap-12 lg:gap-16 items-center transition-opacity duration-700 ease-out col-span-full`}
              >
                {/* LEFT */}
                <div className="max-w-[600px]">
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md mb-6">
                    <ShieldCheck className="h-3.5 w-3.5 text-gold" />
                    {slide.badge}
                  </div>

                  <h1 className="font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.15] tracking-tight">
                    {slide.title}
                  </h1>

                  <p className="mt-6 text-lg sm:text-xl text-white/80 font-medium leading-relaxed max-w-lg">
                    {slide.subtitle}
                  </p>

                  <div className="mt-10">
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
                      <Button variant="gold" size="xl" asChild className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                        <a href="#contact">Get Free Consultation</a>
                      </Button>
                      <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                        <a href="#contact">Talk to an Advisor</a>
                      </Button>
                    </div>
                    <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-medium text-white/70">
                      <CheckCircle2 className="h-4 w-4 text-gold" />
                      <span>Free • No spam • Takes 30 sec</span>
                    </div>
                  </div>
                </div>

                {/* RIGHT */}
                <div className="hidden lg:block relative">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/15 blur-[100px] rounded-full pointer-events-none" />
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className={`w-full h-full object-cover object-center transition-transform duration-[6000ms] ease-out ${active ? "scale-105" : "scale-100"}`}
                      width={1024}
                      height={768}
                      loading={i === 0 ? "eager" : "lazy"}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-[#0B1528]/10 to-transparent pointer-events-none" />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent mix-blend-multiply pointer-events-none" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between gap-4">
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

      {/* TRUST BAR */}
      <div className="bg-white/5 border-t border-white/10 relative z-10">
        <div className="container-x py-6 sm:py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 lg:divide-x divide-white/20 text-left">
            {trustFeatures.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-4 bg-white/5 lg:bg-transparent rounded-xl p-4 sm:p-5 lg:p-0 lg:rounded-none border border-white/5 lg:border-none lg:pl-8 first:lg:pl-0">
                <div className="flex shrink-0 h-10 w-10 items-center justify-center rounded-full bg-white/10 text-gold border border-white/5">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="text-sm font-semibold leading-snug text-white/90 max-w-[180px]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
