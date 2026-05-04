import { Button } from "@/components/ui/button";
import { ShieldCheck, BadgeCheck, Headphones, Sparkles, ArrowRight } from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";

const trustItems = [
  { icon: ShieldCheck, label: "IRDAI Licensed" },
  { icon: BadgeCheck, label: "Transparent Pricing" },
  { icon: Headphones, label: "Claim Support" },
];

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero text-white pt-28 sm:pt-32 lg:pt-36 pb-20 lg:pb-28">
      <div className="absolute inset-0 grid-faint opacity-40 pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-gold/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full bg-primary-foreground/5 blur-3xl pointer-events-none" />

      <div className="container-x relative grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* LEFT */}
        <div>
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/90 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-gold" />
            IRDAI Licensed Insurance Broker
          </div>

          <h1 className="animate-fade-up delay-100 mt-5 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] tracking-tight">
            Insurance that <span className="text-gradient-gold">actually works</span> when you need it.
          </h1>

          <p className="animate-fade-up delay-200 mt-5 max-w-xl text-base sm:text-lg text-white/75 leading-relaxed">
            Clear advice. Transparent pricing. Real human support — from the first quote to your final claim.
          </p>

          <div className="animate-fade-up delay-300 mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <Button variant="gold" size="xl" asChild className="w-full sm:w-auto">
              <a href="#quote">Get Free Consultation <ArrowRight className="h-4 w-4" /></a>
            </Button>
            <Button variant="outlineLight" size="xl" asChild className="w-full sm:w-auto">
              <a href="#services">View Plans</a>
            </Button>
          </div>

          <div className="animate-fade-up delay-400 mt-10 grid grid-cols-3 gap-3 sm:gap-6 max-w-lg">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex flex-col items-start gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 border border-white/15">
                  <Icon className="h-5 w-5 text-gold" />
                </div>
                <span className="text-xs sm:text-sm font-medium text-white/85 leading-tight">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — clean image only */}
        <div className="relative animate-fade-in delay-200">
          <div className="relative rounded-3xl overflow-hidden shadow-lift ring-1 ring-white/10">
            <img
              src={heroImg}
              alt="Family protected by Vamana Insurance"
              className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover"
              width={1024}
              height={1024}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
};
