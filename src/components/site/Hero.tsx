import { Button } from "@/components/ui/button";
import { ShieldCheck, Scale, Wallet, Headphones, CheckCircle2 } from "lucide-react";
import heroImg from "@/assets/feature-advisor.jpg";

const trustFeatures = [
  { icon: ShieldCheck, label: "IRDAI Licensed Insurance Broker" },
  { icon: Scale, label: "Independent & Unbiased Advice" },
  { icon: Wallet, label: "Transparent Pricing — No Hidden Fees" },
  { icon: Headphones, label: "Dedicated Claim Support" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-primary bg-gradient-to-br from-primary via-white/5 to-primary bg-[length:200%_200%] sm:motion-safe:animate-gradient-shift text-white pt-28 sm:pt-32 lg:pt-40">
      {/* High-end Noise Texture Overlay with Subtle Parallax */}
      <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay pointer-events-none sm:bg-fixed" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center pb-12 sm:pb-16 lg:pb-24">
        {/* LEFT */}
        <div className="max-w-[600px]">
          {/* Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-semibold text-white backdrop-blur-md mb-6">
            <ShieldCheck className="h-3.5 w-3.5 text-gold" />
            IRDAI Regulated Broker
          </div>

          <h1 className="animate-fade-up font-display text-4xl sm:text-5xl lg:text-[4rem] font-extrabold leading-[1.15] tracking-tight">
            Insurance that protects your <span className="text-gold">wealth</span> — not just your risks.
          </h1>

          <p className="animate-fade-up delay-100 mt-6 text-lg sm:text-xl text-white/80 font-medium leading-relaxed max-w-lg">
            We don’t push policies. We help you choose the right cover with complete clarity — no hidden terms, no pressure.
          </p>

          <div className="animate-fade-up delay-200 mt-10">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <Button variant="gold" size="xl" asChild className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <a href="#quote">Get Free Consultation</a>
              </Button>
              <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg">
                <a href="#quote">Talk to an Advisor</a>
              </Button>
            </div>
            {/* CTA Microcopy */}
            <div className="mt-4 flex items-center justify-center sm:justify-start gap-2 text-xs sm:text-sm font-medium text-white/70">
              <CheckCircle2 className="h-4 w-4 text-gold" />
              <span>Free • No spam • Takes 30 sec</span>
            </div>
          </div>
        </div>

        {/* RIGHT — image with floating trust badges (Hidden on Mobile) */}
        <div className="hidden lg:block relative animate-fade-in delay-200 mt-8 lg:mt-0">
          {/* Subtle Premium Glow Behind Image */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/15 blur-[100px] rounded-full pointer-events-none sm:motion-safe:animate-pulse-glow" />
          
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3] w-full">
            <img
              src={heroImg}
              alt="Professional advisor consulting a client"
              className="w-full h-full object-cover object-center"
              width={1024}
              height={768}
            />
            {/* Soft dark gradient overlay for blending */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528]/90 via-[#0B1528]/10 to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent mix-blend-multiply pointer-events-none" />
            
            {/* Floating Trust Badges */}
            <div className="absolute top-6 left-6 sm:top-8 sm:left-8 animate-fade-up delay-300">
              <div className="flex items-center gap-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 shadow-xl">
                <ShieldCheck className="h-4 w-4 text-gold" />
                <span className="text-xs font-semibold text-white tracking-wide">IRDAI Licensed</span>
              </div>
            </div>
            
            <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 animate-fade-up delay-500">
              <div className="flex flex-col gap-3 items-end">
                <div className="flex items-center gap-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 shadow-xl">
                  <Scale className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-white tracking-wide">Independent Advice</span>
                </div>
                <div className="flex items-center gap-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2 shadow-xl">
                  <CheckCircle2 className="h-4 w-4 text-gold" />
                  <span className="text-xs font-semibold text-white tracking-wide">Transparent Pricing</span>
                </div>
              </div>
            </div>
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
